


const fetch = require('node-fetch');
export default async function postData1(url, packet) {
    try {

        const res = await fetch('http://localhost:4000' + url, {
            method: 'post',
            body: JSON.stringify(packet),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        return { status: res.status, body: data };
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
