
export async function postData(url, packet) {
    
    try {
        let res = await fetch('http://localhost:4000' + url, {
            method: 'post',
            body: JSON.stringify(packet),
            headers: { 'Content-Type': 'application/json' }
        });
        return { statusCode: res.status, body: await res.json() };
    } catch (err) {
         console.log('error: ' +  err);
    }
}

export async function getData(url) {
    let res = await fetch('http://localhost:4000' + url);
    return { statusCode: res.status, body: await res.json() };
}

export default  {postData,getData}