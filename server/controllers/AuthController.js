import jwt from 'jsonwebtoken';
import { User } from '../models';
import PasswordController from '../helper/cryptPassword';

class AuthController {
    static registration(request, response) {
        let { 
            email, 
            firstName,
            lastName,
            password,
            username,
            gender,
        } = request.body;
        email = email.trim();
        const hashPassword = PasswordController.hashpassword(password);
        const data = {
            email,
            firstName,
            lastName,
            password : hashPassword,
            username,
            gender,
        }
        User.create(data)
        .then(user => jwt.sign({ user: 1 }, 'secretKey', (err, token) => response.status(201).json({
            success: true,
            message: 'user registration was successful',
            data: user,
            token,
        })))
        .catch(error => response.status(500).json({ message: error.message }));    
    //     User.findOrCreate({ where: { email }, defaults: { email }})
    //   .spread((user, created) => {
    //     // console.log(user.get({
    //     //     plain: true
    //     // }))  
    //   })
    }
}

export default AuthController;
