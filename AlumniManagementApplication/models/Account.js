const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    role: Number,
    verify: Number,
    avatar: String,
    type: String, // new, old
    active: Boolean, // Unlocked or locked by admin: Access Control
});

// ROLE:
// 0: user
// 1: admin


const Account = mongoose.model('accounts', userSchema);
Account.findOne({email: "admin@gmail.com"}).exec()
    .then(account => {
        if (account) {
        } else {
            bcrypt.hash("admin@gmail.com".split("@")[0], 10, (err, hash) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const newAccount = new Account({
                    fullname: "admin",
                    username: "admin@gmail.com".split("@")[0],
                    email: "admin@gmail.com",
                    password: hash,
                    role: 1,
                    verify: 1,
                    avatar: "images/default-avatar.jpg",
                    type: "new"
                });

                newAccount.save()
                    .then(savedAccount => {
                    })
                    .catch(error => {
                    });

            });
        }
    })
    .catch(err => {
        console.error(err);
    });
module.exports = Account;
