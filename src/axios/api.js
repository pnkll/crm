import * as axios from 'axios'

// const token = localStorage.getItem('jwt')
// const token = 

// const instance = axios.create(
//     {
//         baseURL: 'http://localhost:3012',
//         headers: {
//             'Access-Control-Allow-Origin': 'http://localhost:3000'
//         }
//     }
// )

// const authorization = () =>{
//     if (localStorage.jwt != null){
//         return `Bearer ${localStorage.jwt}`
//     }
// }

const instance = axios.create(
    {
        baseURL: 'http://localhost:3012',
        // withCredentials: true
        // headers: {
        //     'Authorization': `Bearer ${token}`
        //     // 'Authorization': authorization
                
                    
                
        // }

    }
)

export const registration = (data) => {
    return instance.post('auth/registration', data)
}

export const login = (data) => {
    return instance.post('auth/login', data)
}

export const getAuth = (token) => {
    return instance.get('auth/me', {headers: {'Authorization': `Bearer ${token}`}})
}

export const getUsers = () => {
    return instance.get('auth/users')
}

export const logout = (token) => {
    return instance.post('auth/logout', {}, {headers: {'Authorization': `Bearer ${token}`}})
}





