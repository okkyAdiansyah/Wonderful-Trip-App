import axios from "axios";
import { cookies } from "next/headers";

export async function POST(req, res) {
    let formData = await req.json();
    let cookiesStore = cookies();

    let response = await axios({
        baseURL: process.env.WP_REST_JWT_BASE_URL,
        url: `/simple-jwt-login/v1/auth`,
        method: 'post',
        data: {
            username : formData.username,
            password : formData.password,
            APP_AUTH_KEY : process.env.WP_REST_JWT_AUTH_CODE
        }
    })
    .then(res => res.data)
    .catch(error => error.response.data)

    if(response.success){
        cookiesStore.set('token', response.data.jwt, {
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
        })
        if(formData.rememberMe){
            cookiesStore.set('remember-token', response.data.jwt, {
                maxAge: 60 * 60 * 24 * 30,
                sameSite: 'strict'
            })
        }

        return Response.json({message : 'Login Success'}, {status: 200});
    } return Response.json({message: response.data.message}, {status: 400});
}