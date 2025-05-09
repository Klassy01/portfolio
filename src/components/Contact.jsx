import React, { useState, useEffect, useRef } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const submitButton = submitButtonRef.current;
    const formStatus = statusRef.current;

    const setLoadingState = (isLoading) => {
      if (submitButton) {
        if (isLoading) {
          submitButton.classList.add('loading');
          submitButton.innerHTML = '<div class="spinner"></div> Sending...';
          submitButton.disabled = true;
        } else {
          submitButton.classList.remove('loading');
          submitButton.innerHTML = '<span>Send Message</span> ✈️';
          submitButton.disabled = false;
        }
      }
    };

    const showMessage = (message, type) => {
      if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = 'form-status';
        formStatus.classList.add(type);
        formStatus.style.display = 'block';

        if (type === 'success') {
          setTimeout(() => {
            formStatus.style.display = 'none';
          }, 5000);
        }
      }
    };

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        setLoadingState(true);

        fetch('https://hlomail-backend.onrender.com/v1/contact-mail', {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              showMessage('Your message has been sent successfully!', 'success');
              form.reset();
            } else {
              throw new Error('Server error');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            showMessage('There was an error sending your message. Please try again.', 'error');
          })
          .finally(() => {
            setLoadingState(false);
            setFormSubmitted(true);
          });
      });
    }

    // Cleanup
    return () => {
      if (form) form.removeEventListener('submit', () => {});
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 text-white"
      style={{
        background: 'linear-gradient(60deg, #24243e)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 18s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <h2 className="text-4xl font-bold text-center mb-12 text-[#00d9ff]">Get In Touch</h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Panel */}
        <div className="bg-[#1c1b2f] p-8 rounded-2xl shadow-xl space-y-6">
          <h3 className="text-2xl font-semibold mb-2 text-[#00d9ff]">
            Let's <span className="text-[#00ffc3]">Connect</span>
          </h3>
          <p className="text-[#d1d5db]">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="space-y-4 text-[#d1d5db]">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#00ffc3] text-xl" />
              <span>davidbeniel2006@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-[#00ffc3] text-xl" />
              <span>9840488355</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#00ffc3] text-xl" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>

          <div className="flex gap-5 pt-6">
            <a
              href="https://github.com/Klassy01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ffc3] hover:text-white text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/davidjayaraja01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ffc3] hover:text-white text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Panel - Form */}
        <form
          ref={formRef}
          className="bg-[#1c1b2f] p-8 rounded-2xl shadow-xl space-y-6"
          id="contactForm"
        >
          {/* Hidden API Key */}
          <input
            type="text"
            id="api_key"
            name="api_key"
            value="5c9ded41b7e024534054f166902dedc9"
            style={{ display: 'none' }}
            readOnly
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black border border-[#00d9ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black border border-[#00d9ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
          />
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black border border-[#00d9ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
          ></textarea>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-black border border-[#00d9ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
          />
          <div ref={statusRef} id="formStatus" className="text-sm text-green-400" style={{ display: 'none' }}></div>
          <button
            type="submit"
            ref={submitButtonRef}
            id="submitButton"
            className="w-full py-3 bg-[#00334e] hover:bg-[#00d9ff] text-white font-semibold rounded-xl transition duration-300 flex items-center justify-center gap-2"
          >
            <span>Send Message</span> <span>✈️</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
