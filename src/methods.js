
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
    // let dummyData = {
    //     firstName: 'KIRITI',
    //     lastName: "MUKHERJEE",
    //     registrationNo: 2017331063,
    //     email: 'kimuapon@gmail.com',
    //     isTeacher: false,
    //     about: `Hi! I'm magic-kiri!`
    // }
    // return { statusCode: 200 , body: dummyData  };
}

export default  {postData,getData}