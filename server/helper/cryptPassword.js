import bcrypt from 'bcrypt';

class PasswordController {
     static hashpassword(password) {
      return bcrypt.hashSync(password, 10);
    }

    static isValidPassword(userpass, password) {
      return bcrypt.compareSync(password, userpass);
    }
}
export default PasswordController;