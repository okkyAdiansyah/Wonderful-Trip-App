import axios from "axios";

export async function GET(req, res){
    let response = await axios({
        baseURL: process.env.WP_REST_BASE_URL,
        url: '/attraction',
        method: 'get',
        params: {
            acf_format: 'standard'
        },
        timeout: 5000
    })
    .then(res => ({
        data: res.data,
        status: res.status
    }))
    .catch(error => ({
        data: error.response.data,
        status: error.response.status
    }))

    let result = response.data.map(item => ({
        name: item.name.replace('&amp;', '&'),
        slug: item.slug,
        cover_url: item.acf.cover_image
    }))

    if(response.status === 200){
        return Response.json({payload: result, message: 'success'}, {status: 200})
    }else{
        return Response.json({payload: response.data}, {status: response.status})
    }
}