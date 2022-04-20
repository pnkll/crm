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
    }
)


export const login = (data) => {
    return instance.post('auth/login', data)   
}

export const auth = (data) =>{
    return instance.get(`auth/me`, {headers: { Authorization: `Bearer ${token}`}})
}

export const getUsers = () => {
    return instance.get('auth/users')
}