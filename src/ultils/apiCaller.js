import axios from 'axios';

const apiCaller=axios.create({
    baseURL:'http://thuctapcoso.herokuapp.com/api',
    timeout:5000
});


export default apiCaller;

