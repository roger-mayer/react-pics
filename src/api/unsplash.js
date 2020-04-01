import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 2WLCoqH7U8jBo-CG_NdF_8YCJi2gx1Yz_KgnMZoUqyo'
    }
});