function errorHandler(err, req, res,next){
    if(err.name === 'UnauthorizedError'){
        // jwt authentication error
        return res.status(401).json({mesage: "The user is not Authorizted"})
    }
    if(err.name === 'ValidationError'){
        // validation error
        return res.status(401).json({mesage: err })
    }
    // default to 500 server error
    return res.status(500).json(err);
}