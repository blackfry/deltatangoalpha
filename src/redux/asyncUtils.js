export const getRequestParams = (url, values) => {

    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
    };

    return {
        method: "GET",
        headers: headers,
        url: url,
        body: values || {}
    }
};


export const postRequestParams = (url, values) => {

    console.log({url}, {values})

    return {
        method: "POST",
        headers: {
            "content-type": "application/json; charset=UTF-8",
            "accept": "application/json; charset=UTF-8",
        },
        url: url,
        body: values,
        async: true
    };
}


