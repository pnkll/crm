import * as axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'http://localhost:3012',
    }
)

export const login = (data) => {
    return instance.post('login', data)   
}

export const getUsers = () => {
    return instance.get('/users')
}