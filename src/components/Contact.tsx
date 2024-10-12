import React, { useState, useCallback, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MAX_MESSAGES = 3;
const COOLDOWN_PERIOD = 15 * 60 * 1000; // 15 minutes in milliseconds

const Contact: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        const formData = new FormData(e.currentTarget);
        const currentMessage = formData.get('message') as string;

        try {
            const { canSend, error } = await validateSubmission(currentMessage);

            if (!canSend) {
                toast.warn(error);
                return;
            }

            await sendEmail(formData);
            toast.success('Message sent successfully! Looking forward to working with you.');
            formRef.current?.reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again later.');
        } finally {
            setIsSending(false);
        }
    }, []);

    return (
        <section id="contact" className="py-20 relative bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ContactForm onSubmit={handleSubmit} isSending={isSending} ref={formRef} />
                    <ContactInfo />
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
        </section>
    );
};

const ContactForm = React.forwardRef<HTMLFormElement, { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; isSending: boolean }>(
    ({ onSubmit, isSending }, ref) => (
        <form ref={ref} onSubmit={onSubmit} className="bg-white shadow-xl rounded-lg p-8 space-y-6">
            <InputField label="Name" name="from_name" type="text" placeholder="Your Name" />
            <InputField label="Email" name="email" type="email" placeholder="your.email@example.com" />
            <TextAreaField label="Message" name="message" placeholder="Your message here..." />
            <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                disabled={isSending}
            >
                {isSending ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
);

const InputField: React.FC<{ label: string; name: string; type: string; placeholder: string }> = ({ label, name, type, placeholder }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder={placeholder}
            required
        />
    </div>
);

const TextAreaField: React.FC<{ label: string; name: string; placeholder: string }> = ({ label, name, placeholder }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea
            id={name}
            name={name}
            rows={4}
            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder={placeholder}
            required
        ></textarea>
    </div>
);

const ContactInfo: React.FC = () => (
    <div className="bg-gray-900 text-white rounded-lg shadow-xl p-8">
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-6">
            <ContactInfoItem icon={<Mail className="w-6 h-6" />} label="Email" value="alexander.matos01.dev@gmail.com" />
            <ContactInfoItem icon={<Phone className="w-6 h-6" />} label="Phone" value="+1 (809) 815-9062" />
            <ContactInfoItem icon={<MapPin className="w-6 h-6" />} label="Address" value="San Pedro de Macorís 21000" />
        </div>
    </div>
);

const ContactInfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-start">
        <div className="bg-blue-600 rounded-full p-3 mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    </div>
);

async function validateSubmission(currentMessage: string): Promise<{ canSend: boolean; error?: string }> {
    const lastMessage = localStorage.getItem('lastMessage');
    const lastSentTime = localStorage.getItem('lastSentTime');
    const messageCount = localStorage.getItem('messageCount');

    if (messageCount && parseInt(messageCount, 10) >= MAX_MESSAGES) {
        if (lastSentTime) {
            const timeSinceLastMessage = Date.now() - new Date(lastSentTime).getTime();
            if (timeSinceLastMessage < COOLDOWN_PERIOD) {
                return { canSend: false, error: "You've sent enough messages. Please wait before sending more." };
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