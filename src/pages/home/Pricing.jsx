import React from "react";
import MainLayout from "../../components/MainLayout";

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$9",
      frequency: "month",
      description: "Perfect for starters",
      features: [
        "Access to basic articles",
        "Community support",
        "Email notifications",
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
    },
    {
      title: "Pro",
      price: "$29",
      frequency: "month",
      description: "For the growing enthusiast",
      features: [
        "All Basic features",
        "Exclusive articles",
        "Priority support",
        "No ads",
      ],
      buttonText: "Upgrade Now",
      buttonStyle: "bg-green-500 text-white hover:bg-green-600",
    },
    {
      title: "Premium",
      price: "$59",
      frequency: "month",
      description: "Best for professionals",
      features: [
        "All Pro features",
        "Personalized advice",
        "1-on-1 consultations",
        "Access to premium resources",
      ],
      buttonText: "Join Premium",
      buttonStyle: "bg-purple-500 text-white hover:bg-purple-600",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Pricing Plans
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that best suits your needs
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800">{plan.title}</h2>
              <p className="mt-2 text-gray-500">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-gray-800">
                  {plan.price}
                </span>
                <span className="text-lg font-medium text-gray-600">
                  {" "}
                  / {plan.frequency}
                </span>
              </div>

              {/* Features List */}
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <button
                className={`${plan.buttonStyle} mt-6 w-full py-3 rounded-lg font-semibold`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;
