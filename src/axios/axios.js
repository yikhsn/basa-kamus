import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzRiZjE5NjYwMWNjZjY2YzUzYjJkZGIiLCJpYXQiOjE1NDg1NDM5MDV9.0XBZePaZz30njhMgL-H8cO_v_G0wlss8tcrts5rWVRg';

const instance = axios.create({
    baseURL: 'http://10.0.2.2:3001/api/words/search/',
    headers: { 'x-auth-token': token }
});

export default instance;