import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0e64d498e8584301af0fe4865a82f32d'
    }
})