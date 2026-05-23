import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, Instagram, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

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
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '6baf52fc-4379-4652-a67a-08203b4027d8',
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          subject: `Miqdaad Labs Inquiry: ${formData.subject || 'New Project Proposal'}`,
          message: formData.message,
          from_name: 'Miqdaad Labs Agency',
          botcheck: ""
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
    <section id="contact" className="py-28 px-4 md:px-8 bg-black relative overflow-hidden">
      
      {/* Background radial accent glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent mb-4">
            <Sparkles size={12} className="animate-spin duration-3000" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-bold">Get In Touch</span>
          </div>
          <h2 className="text-[32px] md:text-[45px] font-display font-extrabold text-white leading-tight">
            Initiate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Project Discovery
            </span>
          </h2>
          <p className="text-muted text-[13px] md:text-[14px] leading-relaxed mt-4 font-light">
            Have a clear vision or want to co-pilot an aesthetic strategy audit? Drop us a prompt about lockups, design architectures, or active builds. Let's make something timeless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Block - Agency contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-card border border-accent/15 backdrop-blur-md relative overflow-hidden group text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none group-hover:bg-accent/10 transition-colors" />
              <h3 className="text-[18px] md:text-[20px] font-display font-bold mb-6 text-white">Direct Channels</h3>
              
              <div className="space-y-5">
                <a href="mailto:dawodumiqdaad88@gmail.com" className="flex items-center gap-4 text-muted hover:text-accent transition-colors group/link">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover/link:bg-accent/20 border border-accent/20 flex items-center justify-center shrink-0 transition-all">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted/60">HQ Email</p>
                    <p className="text-[13px] md:text-[14px] text-white break-all">dawodumiqdaad88@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/2348062149408" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted hover:text-accent transition-colors group/link">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover/link:bg-accent/20 border border-accent/20 flex items-center justify-center shrink-0 transition-all">
                    <MessageSquare size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted/60">WhatsApp</p>
                    <p className="text-[13px] md:text-[14px] text-white">08062149408</p>
                  </div>
                </a>
              </div>

              {/* Social Channels Section updated to @miqdaadlabs */}
              <div className="mt-10 pt-8 border-t border-card-border/60">
                <h4 className="text-[12px] font-mono uppercase tracking-wider text-muted/50 mb-4 font-bold">Audit Socials</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://instagram.com/miqdaadlabs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-xl bg-card-alt border border-card-border/70 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:scale-105 transition-all"
                  >
                    <Instagram size={16} />
                  </a>
                  <a 
                    href="https://x.com/miqdaadlabs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-xl bg-card-alt border border-card-border/70 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:scale-105 transition-all"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-xl bg-card-alt border border-card-border/70 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:scale-105 transition-all"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-xl bg-card-alt border border-card-border/70 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:scale-105 transition-all"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Interactive client contact form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <form className="p-6 md:p-8 rounded-3xl bg-card-alt border border-accent/15 space-y-5 text-left" onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-500 text-[13px] mb-4"
                  >
                    <CheckCircle2 size={18} />
                    Inquiry submitted successfully! We will initiate your dispatch review within 12 hours.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-[13px] mb-4"
                  >
                    <AlertCircle size={18} />
                    Validation error. Please verify input fields or call directly via WhatsApp.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono text-muted/60 uppercase tracking-widest pl-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-[#152e1e]/60 text-[13px] text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/40"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono text-muted/60 uppercase tracking-widest pl-1">Business Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-[#152e1e]/60 text-[13px] text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/40"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Botcheck / Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[10px] font-mono text-muted/60 uppercase tracking-widest pl-1">Project Scope</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-[#152e1e]/60 text-[13px] text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/40"
                  placeholder="e.g. Islamic portal, High-converting Landing page, Custom E-commerce..."
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-mono text-muted/60 uppercase tracking-widest pl-1">Message & Intentions</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-[#152e1e]/60 text-[13px] text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-muted/40"
                  placeholder="Outline your challenges, timeline targets, or custom integration needs..."
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-black text-[12px] font-bold uppercase tracking-[1px] rounded-full hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 mt-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(5,219,105,0.25)] hover:shadow-[0_4px_24px_rgba(5,219,105,0.45)] cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    Transmitting Inquiry...
                    <Loader2 size={15} className="animate-spin text-black" />
                  </>
                ) : (
                  <>
                    Initiate Discovery
                    <Send size={14} className="text-black" />
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
