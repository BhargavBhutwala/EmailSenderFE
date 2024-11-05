import {customAxios} from "./helper";

export async function sendEmail(emailData){

    const result = (await customAxios.post('/send', emailData)).data;
    return result;
}

export async function sendEmailWithAttachment(emailData){

    const result = (await customAxios.post('/send-with-file', emailData)).data;
    return result;
}