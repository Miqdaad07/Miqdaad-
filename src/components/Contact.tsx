import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      // Using Web3Forms - Replace 'YOUR_ACCESS_KEY_HERE' with your actual key from web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '6baf52fc-4379-4652-a67a-08203b4027d8', // User needs to replace this
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Message',
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-mono text-[12px] text-accent uppercase tracking-wider mb-4">Quick Message</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6 md:space-y-8"
          >
            <div className="p-6 md:p-8 rounded-xl bg-card-alt border border-card-border">
              <h3 className="text-[18px] font-medium mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <a href="mailto:dawodumiqdaad88@gmail.com" className="flex items-center gap-4 text-muted hover:text-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-foreground">Email</p>
                    <p className="text-[14px] break-all">dawodumiqdaad88@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/2348062149408" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted hover:text-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center shrink-0">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-foreground">WhatsApp</p>
                    <p className="text-[14px]">08062149408</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-card-border">
                <h4 className="text-[13px] font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-card-alt border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card-alt border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all">
                    <Github size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card-alt border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all">
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <form className="p-6 md:p-8 rounded-xl bg-card-alt border border-card-border space-y-4" onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-500 text-[13px] mb-4"
                  >
                    <CheckCircle2 size={18} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-500 text-[13px] mb-4"
                  >
                    <AlertCircle size={18} />
                    Something went wrong. Please check your fields or try again later.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-[14px] text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/50"
                  placeholder="Your Name"
                />
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-[14px] text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/50"
                  placeholder="Email Address"
                />
              </div>
              
              <input 
                type="text" 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-[14px] text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/50"
                placeholder="Subject"
              />

              <textarea 
                id="message" 
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-[14px] text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-muted/50"
                placeholder="How can I help?"
              />

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-black text-[13px] font-bold uppercase tracking-[1px] rounded-full hover:opacity-80 transition-all hover:scale-[1.02] active:scale-[0.98] mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    Sending...
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Request
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
