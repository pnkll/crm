import * as axios from 'axios'

const token = localStorage.getItem('jwt')
// const token = 

// const instance = axios.create(
//     {
//         baseURL: 'http://localhost:3012',
//         headers: {
//             'Access-Control-Allow-Origin': 'http://localhost:3000'
//         }
//     }
// )

const header =  `Authorization: Bearer ${token}`

const instance = axios.create(
    {
        baseURL: 'http://localhost:3012',
        // withCredentials: true
        headers: {
            'Authorization': `Bearer ${localStorage.jwt}`
        }
    }
)

<<<<<<< HEAD
=======
export const registration = (data) => {
    return instance.post('auth/registration', data)
}
>>>>>>> 8652f4f89c996f1423a0e74f6f4bfd576bea5eaa

export const login = (data) => {
    return instance.post('auth/login', data)   
}

<<<<<<< HEAD
export const auth = (data) =>{
    return instance.get(`auth/me`, {headers: { Authorization: `Bearer ${token}`}})
=======
export const getAuth = (  ) => {
    return instance.get('auth/me',  )
>>>>>>> 8652f4f89c996f1423a0e74f6f4bfd576bea5eaa
}

export const getUsers = () => {
    return instance.get('auth/users')
<<<<<<< HEAD
}
=======
}



>>>>>>> 8652f4f89c996f1423a0e74f6f4bfd576bea5eaa
