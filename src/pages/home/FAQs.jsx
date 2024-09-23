import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of this blog?",
      answer:
        "Our blog is dedicated to sharing the latest insights, tips, and trends in the industry. We cover a range of topics to help you stay informed and inspired.",
    },
    {
      question: "How often do you publish new articles?",
      answer:
        "We aim to publish new articles weekly to ensure you always have fresh content to read.",
    },
    {
      question: "Can I contribute to the blog?",
      answer:
        "Absolutely! We welcome guest contributions. Please contact us for guidelines on how to submit your article for consideration.",
    },
    {
      question: "Do you offer newsletters?",
      answer:
        "Yes, you can subscribe to our newsletter to receive the latest articles directly to your inbox.",
    },
    {
      question: "How can I contact the blog’s team?",
      answer:
        "You can reach us via our contact page or by emailing us at contact@blogwebsite.com.",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to the most common questions below
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openFAQ === index && (
                <div className="p-4 text-gray-600 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQs;
