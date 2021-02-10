import axios, {AxiosRequestConfig} from 'axios';
import { loadingError } from '../actions/index';

const postData = async (data) => {
    // console.log(data);
    const newPost = await JSON.stringify(data);
        const config: AxiosRequestConfig = await {
            method: 'post',
            url: 'https://simple-blog-api.crew.red/posts',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : newPost
        };
            
        await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
            loadingError();
        });
};

const getData = async (url: string, id: string = '') => {
    const response = await axios.get(url + id);
    return response.data;
};

export {
    postData,
    getData
}