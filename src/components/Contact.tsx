import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, Facebook } from 'lucide-react';
import { personalInfo } from '../utils/constants';
import TerminalButton from './ui/TerminalButton';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xppawvbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  const socialIcons = [
    { icon: Github, href: 'https://github.com/DavidJayaraj01', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/davidjayaraja01', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/david_jayaraj_01', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/919840488355', label: 'WhatsApp' },
    { icon: Facebook, href: 'https://facebook.com/klassy.dj', label: 'Facebook' },
  ];

  const getSubmitContent = () => {
    switch (submitStatus) {
      case 'sending':
        return (
          <span className="font-mono text-sm animate-pulse">
            {'>'} TRANSMITTING MESSAGE...
          </span>
        );
      case 'success':
        return (
          <span className="font-mono text-sm text-term-green">
            [ OK ] MESSAGE_DELIVERED_TO_FORMSPREE
          </span>
        );
      case 'error':
        return (
          <span className="font-mono text-sm text-term-red">
            [ ERR ] TRANSMISSION_FAILED // TRY AGAIN
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Terminal Section Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-2">
            <span className="text-term-green">{'>'} </span>CONTACT
          </h2>
          <p className="text-text-secondary font-mono text-sm">
            // Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Panel — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6 space-y-5"
          >
            <h3 className="font-mono text-lg font-semibold text-text-primary">
              <span className="text-text-mono-dim">// </span>Contact Information
            </h3>

            <div className="space-y-3">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-text-secondary hover:text-cyan-bright transition-colors group">
                <div className="p-2.5 rounded-lg border border-glass-border bg-cyan-bright/5 group-hover:border-cyan-bright/40 transition-all">
                  <Mail className="text-cyan-bright" size={18} />
                </div>
                <span className="font-mono text-sm">{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-text-secondary hover:text-cyan-bright transition-colors group">
                <div className="p-2.5 rounded-lg border border-glass-border bg-cyan-bright/5 group-hover:border-cyan-bright/40 transition-all">
                  <Phone className="text-cyan-bright" size={18} />
                </div>
                <span className="font-mono text-sm">{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="p-2.5 rounded-lg border border-glass-border bg-cyan-bright/5">
                  <MapPin className="text-cyan-bright" size={18} />
                </div>
                <span className="font-mono text-sm">{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-glass-border">
              <h4 className="font-mono text-sm text-text-mono-dim mb-3">
                {'>'} connect_with_me:
              </h4>
              <div className="flex flex-wrap gap-2">
                {socialIcons.map(({ icon: SocialIcon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-glass-border bg-panel text-text-secondary hover:text-cyan-bright hover:border-cyan-bright/40 hover:bg-cyan-bright/5 hover:shadow-[0_0_15px_rgba(95,216,224,0.15)] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={label}
                  >
                    <SocialIcon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel — Formspree Connected Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-6 space-y-4"
          >
            <div>
              <label className="font-mono text-xs text-text-mono-dim mb-1.5 block">
                {'>'} NAME:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 bg-void/50 border border-glass-border text-text-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-bright/50 focus:border-cyan-bright/50 transition-all font-mono text-sm placeholder-text-mono-dim"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-text-mono-dim mb-1.5 block">
                {'>'} EMAIL:
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 bg-void/50 border border-glass-border text-text-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-bright/50 focus:border-cyan-bright/50 transition-all font-mono text-sm placeholder-text-mono-dim"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-text-mono-dim mb-1.5 block">
                {'>'} PHONE:
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-void/50 border border-glass-border text-text-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-bright/50 focus:border-cyan-bright/50 transition-all font-mono text-sm placeholder-text-mono-dim"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-text-mono-dim mb-1.5 block">
                {'>'} MESSAGE:
              </label>
              <textarea
                name="message"
                placeholder="Have something in mind?"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 bg-void/50 border border-glass-border text-text-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-bright/50 focus:border-cyan-bright/50 transition-all resize-none font-mono text-sm placeholder-text-mono-dim"
              />
            </div>

            {/* Status message */}
            {submitStatus !== 'idle' && (
              <div className={`p-3 rounded-lg border font-mono text-sm ${submitStatus === 'success'
                  ? 'border-term-green/30 bg-term-green/5 text-term-green'
                  : submitStatus === 'error'
                    ? 'border-term-red/30 bg-term-red/5 text-term-red'
                    : 'border-cyan-bright/30 bg-cyan-bright/5 text-cyan-bright'
                }`}>
                {getSubmitContent()}
              </div>
            )}

            <TerminalButton
              variant="primary"
              type="submit"
              disabled={submitStatus === 'sending'}
              className="w-full py-3"
            >
              {submitStatus === 'sending' ? 'SENDING...' : 'SEND_MESSAGE'}
            </TerminalButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
