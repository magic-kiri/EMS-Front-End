
import React, { useState, useEffect } from 'react';

import postData from '../methods/postMethod';
import { useParams } from 'react-router-dom';

export default function StudentView(props) {

    const [permission,setPermission] = useState(false);

    let { id } = useParams();
    useEffect(async () => {
        const response = await postData(`/exam/verifyPermission`, { email: localStorage.getItem('email'), id: id })
        if (response.status === 200)
            setPermission(response.body.permission);
        else
            setPermission(false);
    }, []);
    return (
        <div>
            <p>EXAM Started</p>
        </div>
    )
}
