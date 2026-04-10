import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent!");
  };

  const inputStyles = "w-full bg-transparent border-b border-gray-700 py-3 outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-500";

  return (
    <section className="bg-[#0b0e11] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Got a project idea to work on together? <br />
            Let's connect and build something amazing!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#161b22]/40 p-8 md:p-12 rounded-2xl backdrop-blur-md border border-white/5 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Name and Last Name Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <input type="text" placeholder="Name" className={inputStyles} required />
              </div>
              <div className="relative">
                <input type="text" placeholder="Last Name" className={inputStyles} />
              </div>
            </div>

            {/* Email and Phone Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <input type="email" placeholder="Email" className={inputStyles} required />
              </div>
              <div className="relative">
                <input type="tel" placeholder="Phone Number" className={inputStyles} />
              </div>
            </div>

            {/* Message Box */}
            <div className="relative">
              <textarea 
                placeholder="Message" 
                rows="4" 
                className="w-full bg-transparent border border-gray-700 p-4 rounded-lg outline-none focus:border-cyan-400 transition-colors text-white resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-cyan-500 cursor-pointer hover:bg-cyan-600 text-[#0b0e11] font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;