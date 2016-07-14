/*jslint nomen: true,es5: true*/
/*global require,exports, console*/
var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption.utility');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    token: {
        type: String
    },
    avatar_url: {
        type: String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
});

userSchema.pre('save', function (next) {
    'use strict';
    var now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

userSchema.methods = {
    authenticate: function (passwordToMatch) {
        'use strict';
        return encrypt.compareSync(passwordToMatch);
    }
};
var User = mongoose.model('User', userSchema);