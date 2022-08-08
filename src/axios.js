import axios from 'axios';
import {baseURL} from './Constants/Constants';

const instance = axios.create({
    baseURL: baseURL,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;
  