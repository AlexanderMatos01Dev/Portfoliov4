import React, { useState, useCallback, useMemo } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MAX_MESSAGES = 3;
const COOLDOWN_PERIOD = 15 * 60 * 1000; // 15 minutes in milliseconds

const Contact = React.memo(() => {
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        const formData = new FormData(e.currentTarget);
        const currentMessage = formData.get('message') as string;

        const { canSend, error } = await validateSubmission(currentMessage);

        if (!canSend) {
            toast.warn(error);
            setIsSending(false);
            return;
        }

        try {
            await sendEmail(formData);
            toast.success('Message sent successfully! Looking forward to working with you.');
        } catch (error) {
            toast.error('Failed to send message. Please try again later.');
        } finally {
            setIsSending(false);
        }
    }, []);

    const contactForm = useMemo(
        () => <ContactForm onSubmit={handleSubmit} isSending={isSending} />,
        [handleSubmit, isSending]
    );

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 bg-gray-100 opacity-50 backdrop-blur-md"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {contactForm}
                    <ContactInfo />
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
        </section>
    );
});

const ContactForm = React.memo(({ onSubmit, isSending }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; isSending: boolean }) => {
    return (
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 sm:p-8">
            <form className="space-y-6" onSubmit={onSubmit}>
                <InputField label="Name" name="from_name" type="text" placeholder="Your Name" />
                <InputField label="Email" name="email" type="email" placeholder="your.email@example.com" />
                <TextAreaField label="Message" name="message" placeholder="Your message here..." />
                <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    disabled={isSending}
                >
                    {isSending ? <span className="loader"></span> : 'Send Message'}
                </button>
            </form>
        </div>
    );
});

const InputField = React.memo(({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white bg-opacity-50"
                placeholder={placeholder}
                required
            />
        </div>
    );
});

const TextAreaField = React.memo(({ label, name, placeholder }: { label: string; name: string; placeholder: string }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <textarea
                id={name}
                name={name}
                rows={4}
                className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white bg-opacity-50"
                placeholder={placeholder}
                required
            ></textarea>
        </div>
    );
});

const ContactInfo = React.memo(() => {
    return (
        <div className="bg-gray-800 bg-opacity-100 backdrop-filter backdrop-blur-lg text-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
                <ContactInfoItem icon={<Mail className="w-5 h-5 text-white" />} label="Email" value="alexander.matos01.dev@gmail.com" />
                <ContactInfoItem icon={<Phone className="w-5 h-5 text-white" />} label="Phone" value="+1 (809) 815-9062" />
                <ContactInfoItem icon={<MapPin className="w-5 h-5 text-white" />} label="Address" value="San Pedro de Macorís 21000" />
            </div>
        </div>
    );
});

const ContactInfoItem = React.memo(({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => {
    return (
        <div className="flex items-start">
            <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                {icon}
            </div>
            <div className="flex-grow">
                <p className="text-sm text-gray-300">{label}</p>
                <p className="font-medium break-all">{value}</p>
            </div>
        </div>
    );
});

async function validateSubmission(currentMessage: string): Promise<{ canSend: boolean; error?: string }> {
    const lastMessage = localStorage.getItem('lastMessage');
    const lastSentTime = localStorage.getItem('lastSentTime');
    const messageCount = localStorage.getItem('messageCount');

    if (messageCount && parseInt(messageCount, 10) >= MAX_MESSAGES) {
        if (lastSentTime) {
            const timeSinceLastMessage = Date.now() - new Date(lastSentTime).getTime();
            if (timeSinceLastMessage < COOLDOWN_PERIOD) {
                return { canSend: false, error: "You have sent enough messages, let me review these first hehe" };
            }
        }
    }

    if (lastMessage === currentMessage) {
        return { canSend: false, error: "You cannot send the same message twice in a row." };
    }

    return { canSend: true };
}

async function sendEmail(formData: FormData) {
    const data = {
        service_id: 'PortfolioID',
        template_id: 'template_1b4hx6i',
        user_id: 'cMGBkUmTahTlL3Xtr',
        template_params: {
            from_name: formData.get('from_name'),
            email: formData.get('email'),
            message: formData.get('message'),
        }
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ouPWtYFvx7Nu8lqnpfVmn'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Failed to send message');
    }

    const messageCount = localStorage.getItem('messageCount');
    localStorage.setItem('messageCount', messageCount ? (parseInt(messageCount, 10) + 1).toString() : '1');
    localStorage.setItem('lastSentTime', new Date().toISOString());
    localStorage.setItem('lastMessage', formData.get('message') as string);
}

export default Contact;
