import axios from 'axios';
import {WEB_HOOK_URL} from '../constants/apiConstants'
export function postAnnouncement(message) {
    return new Promise((resolve,reject) => { 
        console.log('Posting the message  : ', message);
        axios({
            method: "post",
            url: WEB_HOOK_URL,
            contentType: "application/json",
            dataType:"JSON",
            withCredentials: true,
            headers: {
                'content-type': 'application/json',
            },
            data: {
                "text": message,
            }
        }) .then((res)=>{
            console.log("res  : ",res.data)
            resolve(JSON.stringify({"message":"success","status":res.status}))
            
        }).catch((err) => {
            // for now we do not want to fail the form submition if this fails
            console.log('Announcement Service Failed!!!',err); // eslint-disable-line no-console
            reject(JSON.stringify({ status: 400, message: "Announcement Service failed!" }));
        });

    })

}



