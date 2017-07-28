import fetch from 'utils/fetch';
import axios from 'axios';
import {Message} from 'element-ui';

export function loginByEmail(username, password) {

    // const masterToken = "access_token=3U9XCZRPLseYdhm4rUf7eztsqtcctLkX";

    return axios({
        method: 'post',
        url: process.env.BASE_API + '/v1/login',
        data: {
            username:username,
            password:password
        },
        // auth: {
        //     username: username,
        //     password: password
        // },
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        // }
    }).then(function (result) {
        return result
    }, error => {
        console.log("error")
        console.log(error)
        if (error.response.status >= 400) {
            Message({
                message: error.response.data.message,
                type: 'error',
                duration: 10 * 1000
            })
        }
        return Promise.reject(error);
    })
}

export function getInfo(token) {
    return fetch({
        url: '/uaa/api/account',
        method: 'get',
        headers: {
            "Authorization": token
        }
        // params: { token }
    });
}

