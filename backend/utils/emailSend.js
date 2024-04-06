import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "ktalaviya123@gmail.com",
    pass: "oggnrwcgbhsfsfwa",
  },
});

const sendEmail = async(subject,reciverEmail,text) => {

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "ktalaviya123@gmail.com", // sender address
    to: reciverEmail, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


export default sendEmail;
// sendEmail ("hello" ,"ktalaviya123@gmail.com,ktalaviya568@gmail.com" , "hello There" )
