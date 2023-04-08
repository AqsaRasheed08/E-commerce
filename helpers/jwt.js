const { expressjwt } = require('express-jwt');
// const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    return expressjwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: '/\/products(.*)/' , method: ['GET', 'OPTIONS'] },
            {url: '/\/categories(.*)/' , method: ['GET', 'OPTIONS'] },
            '/users/login',
            '/users/register'
        ]
    })
}

async function isRevoked(req, payload, done){
    if(!payload.isAdmin){
        done(null, true) 
    }

    done();
}

module.exports = authJwt;