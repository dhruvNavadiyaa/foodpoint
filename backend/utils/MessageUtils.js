const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_ACCOUNT_TOKEN

import twilio from 'twilio';

// const client = twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_ACCOUNT_TOKEN);

const sendMessage = async (body,number)=>{
        // let msgOptions = {
        //     from : process.env.TWILIO_ACCOUNT_NUMBER,
        //     to : "+91"+number,
        //     body 
        // }
        // const message = await client.messages.create(msgOptions);
        // console.log(message);
}



export default sendMessage;