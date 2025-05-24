import React from "react";

const JoinNewsletter = () => {
  return (
    <section className="bg-indigo-600 py-8 px-6 rounded-2xl text-white text-center mt-12">
      <h2 className="text-2xl font-bold mb-3">Stay Updated!</h2>
      <p className="mb-4">Join our newsletter for updates on new groups and events.</p>
      <form className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 border-2 rounded-md text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white cursor-pointer text-indigo-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default JoinNewsletter;
