import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Quels sont vos domaines d'expertise ?",
    answer: "Je suis spécialisé en développement web et logiciel, notamment en PHP, Type/Javascript, ReactNative et bien d'autres technologies."
  },
  {
    question: "Travaillez-vous sur des projets freelance ?",
    answer: "Actuellement, je suis en alternance, mais je suis ouvert aux opportunités qui correspondent à mes compétences et à mon emploi du temps."
  },
  {
    question: "Quels outils utilisez-vous pour vos projets ?",
    answer: "J'utilise des outils tels que Git, Docker, et des plateformes autres selon le projet."
  },
  {
    question: "Quels sont vos projets récents ?",
    answer: "Le dernier projet sur lequel j'ai travaillé est ce portfolio, Autrement, j'ai travaillé sur des projets en entreprise pendant mon alternance et des projets d'études tel que Aborganizr."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6">
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-12 text-white"
          >
            FAQ
          </motion.h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
                >
                  <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                  >
                    <h2 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h2>
                    <span className="text-blue-400">
                  {openIndex === index ? "-" : "+"}
                </span>
                  </div>
                  {openIndex === index && (
                      <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 text-gray-300"
                      >
                        {faq.answer}
                      </motion.div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
