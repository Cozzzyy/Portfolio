import emailjs from 'emailjs-com';
import type {Message} from "../types/Message.ts";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendMail = (data: Message) => {
    emailjs.send(
        serviceId,     // e.g., outlook_service
        templateId,    // e.g., contact_form
        {
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        },
        publicKey      // found in EmailJS dashboard
    )
        .catch((err) => {
            console.error("Error sending message:", err);
            alert("Failed to send message.");
        });
};
