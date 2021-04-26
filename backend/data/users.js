import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Miro Nas',
        email: 'miro@example.com',
        password: bcrypt.hashSync('123456',10),
        
    },
    {
        name: 'Merry Lao',
        email: 'merry@example.com',
        password: bcrypt.hashSync('123456',10),
       
    },
]

export default users