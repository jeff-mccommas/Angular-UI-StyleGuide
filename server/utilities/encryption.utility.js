var crypto = require('crypto'),
    bcrypt   = require('bcrypt-nodejs');

exports.hashPwd = function(pwd) {
 return bcrypt.hashSync(pwd, bcrypt.genSaltSync(8), null);
}

exports.compareSync =function (password, localpassword) {
    return bcrypt.compareSync(password, localpassword);
};