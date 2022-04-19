import * as axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'http://localhost:3012',
        // withCredentials: true
        headers: {
            'Authorization': `Bearer ${localStorage.jwt}`
        }
    }
)

export const registration = (data) => {
    return instance.post('auth/registration', data)
}

export const login = (data) => {
    return instance.post('auth/login', data)   
}

export const getAuth = (  ) => {
    return instance.get('auth/me',  )
}

export const getUsers = () => {
    return instance.get('auth/users')
}



