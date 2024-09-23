import React from "react";
import MainLayout from "./../../components/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Text Section */}
            <div className="mb-10 lg:mb-0">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                About Us
              </h2>
              <p className="mt-6 text-lg text-gray-600 text-justify">
                Welcome to our blog! We are passionate about sharing insightful,
                engaging, and thoughtful content with our readers. Our mission
                is to deliver high-quality articles that inform, inspire, and
                entertain.
              </p>
              <p className="mt-4 text-lg text-gray-600 text-justify">
                Our team is dedicated to exploring a variety of topics, from
                technology and business to personal development and lifestyle.
                Whether you're here to learn something new or simply enjoy a
                good read, we've got something for everyone.
              </p>
              <p className="mt-4 text-lg text-gray-600 text-justify">
                Join us on this journey as we explore new ideas and share
                valuable insights. Thank you for being part of our community!
              </p>
              <a
                href="/contact"
                className="mt-6 inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <img
                className="w-full rounded-lg shadow-xl"
                src="/images/about.webp"
                alt="About blog"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-6 mt-5">
          {/* Content */}
          <div className="space-y-8">
            {/* Who We Are */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700">
                Who We Are
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We are a passionate team of writers, enthusiasts, and experts
                sharing insights on topics we love. Our goal is to provide
                valuable content that informs, inspires, and entertains.
              </p>
            </section>

            {/* Our Mission */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our mission is to build a platform that delivers high-quality
                articles, tutorials, and resources on a variety of topics,
                ranging from tech and lifestyle to personal development and
                more.
              </p>
            </section>

            {/* Why Follow Us */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700">
                Why Follow Us?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                By following us, you'll stay up-to-date with the latest trends,
                tips, and valuable information. Whether you're looking for
                advice, tutorials, or just something to read, we've got you
                covered.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
