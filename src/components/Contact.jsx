import React, { useState, useEffect, useRef } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
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
      const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        setLoadingState(true);

        fetch('https://api.hlomail.in/v1/contact-mail', {
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
      };

      form.addEventListener('submit', submitHandler);

      return () => {
        form.removeEventListener('submit', submitHandler);
      };
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <style>{`
        /* Spinner CSS */
        .spinner {
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        /* Form status success */
        .form-status.success {
          color: #00ffc3;
        }
        /* Form status error */
        .form-status.error {
          color: #ff4d6d;
        }
      `}</style>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center text-white py-20 px-4"
        style={{
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
          {/* Left Panel */}
          <div
            className="p-8 rounded-2xl shadow-xl space-y-6"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <h2 className="text-4xl font-bold text-[#00d9ff] mb-4">Get In Touch</h2>
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

            <div className="flex flex-wrap gap-5 pt-6 text-2xl text-[#00ffc3]">
              <a
                href="https://github.com/Klassy01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/davidjayaraja01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919840488355"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com/klassy.dj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Right Panel - Form */}
          <form
            ref={formRef}
            className="p-8 rounded-2xl shadow-xl space-y-6"
            id="contactForm"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <input
              type="text"
              id="api_key"
              name="api_key"
              value="64480decb173c0683c0157da2f989015"
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
              className="w-full px-4 py-3 bg-black bg-opacity-30 border border-[#00d9ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-black bg-opacity-30 border border-[#00d9ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-black bg-opacity-30 border border-[#00d9ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
            ></textarea>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black bg-opacity-30 border border-[#00d9ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
            />
            <div
              ref={statusRef}
              id="formStatus"
              className="text-sm"
              style={{ display: 'none' }}
            ></div>
            <button
              type="submit"
              ref={submitButtonRef}
              id="submitButton"
              className="w-full py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl transition duration-300 flex items-center justify-center gap-2 hover:bg-white/30 hover:border-white hover:shadow-lg hover:scale-[1.05] active:scale-95"
            >
              <span>Send Message</span> <span>✈️</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
