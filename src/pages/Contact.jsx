import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import emailjs from '@emailjs/browser'
import LogoNavbar from '../components/LogoNavbar'

function Contact() {
 

  const [emailStatus, setEmailStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailStatus('sending');

    emailjs.sendForm(
      'service_i6kyn7p',
      'template_kjs1vzn',
      e.target,
      'user_HBjwnJdTNK2ERTsPZvpMg'
    )
    .then((result) => {
      setEmailStatus('success');
      e.target.reset();
      setTimeout(() => setEmailStatus(''), 3000);
    })
    .catch((error) => {
      setEmailStatus('error');
      setTimeout(() => setEmailStatus(''), 3000);
    });
  }

  

  return (
    <div className=" text-white mb-12 pt-4">
      <div className="w-full mx-auto  px-5 md:px-16 md:max-w-screen-md ">
        <LogoNavbar />
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mt-20 sm:mt-24 mb-16">
          {/* Contact Info */}
          <div className="rounded-[16px] transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-black/10 to-black/30  shadow-[0_-8px_32px_rgba(0,0,0,0.12)] p-6 md:p-8 border border-[#282828] ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Get in Touch
            </h2>
            <p className="text-zinc-500 mb-8 text-xs">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <div className="space-y-6">
              <a href="mailto:itsmehdi.co.0707547044@gmail.com" className='hover:text-white transition-colors flex items-center gap-3'>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-darkgrey/30 flex items-center justify-center border border-[#282828]">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-zinc-500 text-xs">exemple@gmail.com</p>
                  </div>
                </div>
              </a>
              <a href="tel:+212707547044" className='hover:text-white transition-colors flex items-center gap-3'>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-darkgrey/30 flex items-center justify-center border border-[#282828]">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-zinc-500 text-xs">+212 000 000 000</p>
                  </div>
                </div>
              </a>
              <a href="https://www.google.com/maps" className='hover:text-white transition-colors flex items-center gap-3'>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-darkgrey/30 flex items-center justify-center border border-[#282828]">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-zinc-500 text-xs">Casablanca, Morocco</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-[#282828]">
              <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/weblink.website/" 
                  className="w-12 h-12 rounded-full bg-darkgrey/30 flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-darkgrey/30 flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-darkgrey/30 flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-darkgrey/30 flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[16px] transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-black/10 to-black/30  shadow-[0_-8px_32px_rgba(0,0,0,0.12)] p-6 md:p-8 border border-[#282828] ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Send Message
            </h2>
            <form className="space-y-6" onSubmit={sendEmail}>
              {emailStatus === 'sending' && (
                <div className="text-blue-400 text-sm mb-4">Sending message...</div>
              )}
              {emailStatus === 'success' && (
                <div className="text-green-400 text-sm mb-4">Message sent successfully!</div>
              )}
              {emailStatus === 'error' && (
                <div className="text-red-400 text-sm mb-4">Failed to send message. Please try again.</div>
              )}
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="w-full bg-darkgrey/30 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#333333] hover:border-[#333333] placeholder-zinc-600 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name='email'
                  placeholder="your@email.com" 
                  required
                  className="w-full bg-darkgrey/30  rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#333333] hover:border-[#333333] placeholder-zinc-600 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  name="title"
                  required
                  className="w-full bg-darkgrey/30  rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#333333] hover:border-[#333333] placeholder-zinc-600 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  name='message'
                  rows="4" 
                  required
                  className="w-full bg-darkgrey/30  rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#333333]  placeholder-zinc-600 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-darkgrey/30 rounded-xl flex items-center justify-center gap-3  transition-all text-lg  shadow-md group"
              >
                Send Message
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Contact