import axios from '../lib/ajaxRequest'

export const getTest = () => axios.request({ url: '/api/test' })
export const login = (username) => axios.request({ url: '/api/login',method:'POST',data:{username} })
export const validate = () => axios.request({ url: '/api/validate' })

export default {}