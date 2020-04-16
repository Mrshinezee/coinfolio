import jwt from 'jsonwebtoken';
import { User } from '../models';
import PasswordController from '../helper/cryptPassword';

class AuthController {
    static userLogin(request, response) {
        const { email , password} = request.body;
        User.findOne({
            where: {
              email
            }
          })
          .then(user => {
            if (!user) {
                return response.status(404).send({ message: "User Not found." });
            }
            const passwordIsValid = PasswordController.isValidPassword(user.password, password);
            if (!passwordIsValid) {
                return response.status(401).send({
                  token: null,
                  message: "Invalid Password!"
                });
            }
            const token = jwt.sign({ id: user.id }, 'secretKey', {
                expiresIn: 86400 // 24 hours
            });
            response.status(200).send({
                success: true,
                id: user.id,
                email: user.email,
                token
              });
          })
          .catch(err => {
            response.status(500).send({ message: err.message });
          });
      }
    static registration(request, response) {
        let { 
            email, 
            firstName,
            lastName,
            password,
            username,
        } = request.body;
        email = email.trim();
        const hashPassword = PasswordController.hashpassword(password);
        const data = {
            email,
            firstName,
            lastName,
            password : hashPassword,
            username,
        }
        User.create(data)
        .then(user => jwt.sign({ user: 1 }, 'secretKey', (err, token) => response.status(201).json({
            success: true,
            message: 'user registration was successful',
            id: user.id,
            email: user.email,
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
