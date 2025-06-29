import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { Message } from "../../types/Message.ts";
import { sendMail } from "../../utils/mailSender.ts";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.union([z.string().email("Invalid email"), z.string().min(0)]).optional(),
    message: z.string().min(1, "Message is required"),
});

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Message>({
        resolver: zodResolver(contactSchema),
    });

    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: Message) => {
        try {
            sendMail(data);
            setSuccess(true);
            reset();
            setTimeout(() => setSuccess(false), 2000);
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };

    return (
        <section id="contact" className="text-white py-5 lg:w-1/2 w-3/4 relative">
            <style>{`
                .submit-button {
                    position: relative;
                    overflow: hidden;
                }
                .submit-button::before {
                    content: '';
                    position: absolute;
                    bottom: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background-color: #22c55e; /* green-500 */
                    border-radius: 50%;
                    transform: translate(-50%, 50%);
                    transition: width 0.8s ease, height 0.5s ease;
                    z-index: 0;
                }
                .submit-button.animate::before {
                    width: 300%;
                    height: 300%;
                }
                .submit-button span {
                    position: relative;
                    z-index: 10;
                }
            `}</style>

            <h2 className="text-5xl font-bold text-[#00C8FF] text-center mb-6">Contact Me</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 max-w-lg mx-auto"
            >
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full mt-2 p-2 rounded-md bg-[#00112D] text-white focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                        Email (Optional)
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full mt-2 p-2 rounded-md bg-[#00112D] text-white focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register("message")}
                        className="w-full mt-2 p-2 rounded-md bg-[#00112D] text-white focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
                        rows={5}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`submit-button py-2 px-4 rounded-md transition duration-300 text-white ${
                        success
                            ? "animate"
                            : "bg-[#00C8FF] hover:bg-[#008FCC]"
                    }`}
                >
                    <span>{success ? "Message Sent!" : "Send Message"}</span>
                </button>
            </form>
        </section>
    );
}
