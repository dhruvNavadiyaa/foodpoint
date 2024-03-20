
import twilio from 'twilio';

const client = twilio("AC1287ac4686e2b592929588917f935552","7f60ab59c6ff0654ae4fe45ae1f53361");

const sendMessage = async (body,num)=>{
        const toNum = "+91"+num.toString()
        let msgOptions = {
            from : "+14432965436",
            to : toNum,
            body
        }
        const message = await client.messages.create(msgOptions);
        console.log(message);
}



export default sendMessage;