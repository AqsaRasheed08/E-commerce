const { expressjwt } = require('express-jwt');
// const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    return expressjwt({
        secret,
        algorithms: ['HS256']
    }).unless({
        path: [
            {url: '/products' , method: ['GET', 'OPTIONS'] },
            '/users/login',
            '/users/register'
        ]
    })
}

module.exports = authJwt;

// const jwt = require('jsonwebtoken');
// const expressjwt = require('express-jwt');

// function authJwt() {
//     const secret = process.env.secret;
//     return expressjwt({
//         secret,
//         algorithms: ['HS256']
//     })
// }

// module.exports = authJwt;


