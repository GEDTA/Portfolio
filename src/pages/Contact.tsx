import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Champ caché pour éviter les bots
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification du honeypot
    if (formData.honeypot) {
      setStatus('Bot détecté. Message non envoyé.');
      return;
    }

    // Vérification des champs
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Tous les champs sont obligatoires.');
      return;
    }

    // Validation du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Adresse email invalide.');
      return;
    }

    // Envoi via EmailJS
    emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              name: formData.name,
              email: formData.email,
              message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setStatus('Message envoyé avec succès.');
              setFormData({ name: '', email: '', message: '', honeypot: '' });
            },
            (error) => {
              console.error('FAILED...', error);
              setStatus('Une erreur est survenue. Veuillez réessayer.');
            }
        );
  };

  return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 text-white">Contact</h1>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champ caché honeypot */}
                <input
                    type="text"
                    id="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom
                  </label>
                  <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                  ></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={20} />
                  Envoyer
                </motion.button>
              </form>
              {status && (
                  <p
                      className={`mt-4 text-center ${
                          status.includes('succès') ? 'text-green-400' : 'text-red-400'
                      }`}
                  >
                    {status}
                  </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
  );
}
