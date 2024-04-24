import axios from 'axios'

const epi = axios.create({
    baseURL: 'http://localhost:3333'
})

export default epi;
