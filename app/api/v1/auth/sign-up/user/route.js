import axios from "axios";
import { cookies } from "next/headers";

export async function POST(req, res) {
    let formData = await req.json();
    let cookiesStore = cookies();

    if(!formData.policyAgreement) return new Response('Registration failed', {
        statusText : 'We need to have your agreement upon our Privacy and Policy',
        status: 400
    })

    let response = await axios({
        baseURL: process.env.WP_REST_JWT_BASE_URL,
        url: `/simple-jwt-login/v1/users`,
        method: 'post',
        data: {
            email: formData.email,
            username : formData.username,
            password : formData.password,
            APP_AUTH_KEY : process.env.WP_REST_JWT_AUTH_CODE_REGIST_AS_USER
        }
    })
    .then(res => res.data)
    .catch(error => error.response.data)

    if(response.success){
        // cookiesStore.set('token', response.data.user.jwt, {
        //     maxAge: 60 * 60 * 24,
        //     sameSite: 'strict',
        // })

        return Response.json(response.user)
    } return new Response(response.data.message, {
        status: 400
    })
}