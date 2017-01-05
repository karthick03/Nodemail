# Nodemail
Sending email at ease!

1. Clone the project using git clone.
2. cd Nodemail
3. Change your email address in all the necessary files.
4. node test-mail.js yourGmailPassword

Incase, if you want to protect your password at the runtime, then create a file named crypt-test.js and add the follwing lines:

const crypt = require('./crypt.js');
const encPassword = crypt.encrypt('yourGmailPassword');

Now run the code using node crypt-test.js
You will get an encrypted password. Now pass the encrypted one as an argument like:

# node test-mail.js encryptedGmailPassword

