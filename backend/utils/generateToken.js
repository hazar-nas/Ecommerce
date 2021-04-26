import jwt from 'jsonwebtoken'

const generateToken = (id) => {
    return jwt.sign( {id}, process.env.JWT_SECRET, {
       expiresIn:'390d' 
    })
}

export default generateToken

// once we build authMiddleware we will use token to 
// validate and access the protected route