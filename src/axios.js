import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://phonebook-api-242.herokuapp.com/api/contact',
    headers: {
        headerType: 'example header type'
    }
});

export default instance;