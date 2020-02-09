import Vue from 'vue';
import axios from "axios";

type Options = {
    headers: {
        [key: string]: string
    }
}

const BACKEND_API = 'https://jsonplaceholder.typicode.com';

class Api {
    private options: Options = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    public async getUsersPosts() {
        try {
            const response = await axios.get(`${BACKEND_API}/photos?_limit=100`, {
                ...this.options
            });
            
            return new Promise(resolve => resolve(response.data));
        } catch (error) {
            throw error;
        }
    }

    public install(store: any) {
        store.$api = {
            getUsersPosts: this.getUsersPosts
        };
    }
}

export default Api;