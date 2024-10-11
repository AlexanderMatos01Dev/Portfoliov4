import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [messageCount, setMessageCount] = useState<number>(() => {
        const savedCount = localStorage.getItem('messageCount');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });
    const [lastSentTime, setLastSentTime] = useState<Date | null>(() => {
        const savedTime = localStorage.getItem('lastSentTime');
        return savedTime ? new Date(savedTime) : null;
    });
    const [lastMessage, setLastMessage] = useState<string | null>(null);

    useEffect(() => {
        if (messageCount >= 3) {
            const interval = setInterval(() => {
                const now = new Date();
                if (lastSentTime && (now.getTime() - lastSentTime.getTime()) >= 15 * 60 * 1000) {
                    setMessageCount(0);
                    setLastSentTime(null);
                    localStorage.removeItem('messageCount');
                    localStorage.removeItem('lastSentTime');
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [messageCount, lastSentTime]);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const currentMessage = formData.get('message') as string;

        if (messageCount >= 3) {
            toast.warn("Ya has enviado bastantes, al menos déjame revisar estos primero jeje", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        if (lastMessage === currentMessage) {
            toast.warn("No puedes enviar el mismo mensaje dos veces seguidas.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        setIsSending(true);

        const data = {
            service_id: 'PortfolioID',
            template_id: 'template_1b4hx6i',
            user_id: 'cMGBkUmTahTlL3Xtr',
            template_params: {
                from_name: formData.get('from_name'),
                email: formData.get('email'),
                message: currentMessage,
            }
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ouPWtYFvx7Nu8lqnpfVmn'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                toast.success('Message sent successfully! Looking forward to working with you.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setMessageCount(prevCount => {
                    const newCount = prevCount + 1;
                    localStorage.setItem('messageCount', newCount.toString());
                    return newCount;
                });
                const now = new Date();
                setLastSentTime(now);
                localStorage.setItem('lastSentTime', now.toISOString());
                setLastMessage(currentMessage);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again later.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 bg-gray-100 opacity-50 backdrop-blur-md"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 sm:p-8">
                        <form className="space-y-6" onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white bg-opacity-50"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white bg-opacity-50"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white bg-opacity-50"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                disabled={isSending}
                            >
                                {isSending ? (
                                    <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="bg-gray-800 bg-opacity-100 backdrop-filter backdrop-blur-lg text-white rounded-lg shadow-lg p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm text-gray-300">Email</p>
                                    <p className="font-medium break-all">alexander.matos01.dev@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm text-gray-300">Phone</p>
                                    <p className="font-medium">+1 (809) 815-9062</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm text-gray-300">Address</p>
                                    <p className="font-medium">C.Daniel del Castillo Edif. 2, San Pedro de Macorís 21000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;