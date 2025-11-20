import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '919100608695';
    const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* ---------------- HERO ---------------- */}
      <section
        className="min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden"
        style={{ backgroundImage: "url('/contact.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
           <div className="absolute top-10 right-2 w-40 h-40 sm:w-96 sm:h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
           <div className="absolute bottom-10 left-2 w-40 h-40 sm:w-96 sm:h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-2xl sm:max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 glass rounded-full border border-primary-600">
            <span className="text-xs sm:text-sm font-medium text-primary-600">✦ Get In Touch</span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold mb-4 sm:mb-8 text-white">
            Contact{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Us</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl sm:max-w-3xl mx-auto font-light">
            Have a project in mind? Let's discuss how we can help{' '}
            <span className="text-white font-semibold">bring your vision to life</span>.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      </section>

      {/* ---------------- MAIN SECTION ---------------- */}
      <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ----- CONTACT CARDS ----- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-20">
            {/* Phone */}
            <div className="wp-card wp-card-hover bg-white text-center flex flex-col items-center">
              <div className="wp-card-img w-full h-32 sm:h-36 md:h-40 flex items-center justify-center overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80" alt="phone" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6 w-full">
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Phone</h3>
                <a href="tel:9100608695" className="block min-h-[44px] text-gray-600 hover:text-primary-600 transition-colors text-base sm:text-lg">
                  9100608695
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="wp-card wp-card-hover bg-white text-center flex flex-col items-center">
              <div className="wp-card-img w-full h-32 sm:h-36 md:h-40 flex items-center justify-center overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80" alt="email" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6 w-full">
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Email</h3>
                <a href="mailto:Vesrasoftware@gmail.com" className="block min-h-[44px] text-gray-600 hover:text-primary-600 transition-colors break-all text-base sm:text-lg">
                  Vesrasoftware@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="wp-card wp-card-hover bg-white text-center flex flex-col items-center">
              <div className="wp-card-img w-full h-32 sm:h-36 md:h-40 flex items-center justify-center overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="whatsapp" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6 w-full">
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">WhatsApp</h3>
                <a href="https://wa.me/919100608695" target="_blank" rel="noopener noreferrer" className="block min-h-[44px] text-gray-600 hover:text-primary-600 transition-colors text-base sm:text-lg">
                  Chat with us
                </a>
              </div>
            </div>
          </div>

          {/* ----- FORM + INFO SECTION ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* FORM */}
            <div className="bg-gray-900 p-10 rounded-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Send us a{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>

              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass-strong border border-primary-600/20 rounded-2xl focus:outline-none focus:border-primary-600 transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 glass-strong border border-primary-600/20 rounded-2xl focus:border-primary-600 transition-all text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    className="w-full px-6 py-4 glass-strong border border-primary-600/20 rounded-2xl focus:border-primary-600 transition-all text-white placeholder-gray-500"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">Subject *</label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass-strong border border-primary-600/20 rounded-2xl focus:border-primary-600 transition-all text-gray-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Quote">Project Quote</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Career">Career Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass-strong border border-primary-600/20 rounded-2xl focus:border-primary-600 transition-all resize-none text-white placeholder-gray-500"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="group w-full px-8 py-5 wp-gradient-accent rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
                  <span>Send Message via WhatsApp</span>
                  <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* LOCATION */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Location
                </span>
              </h2>

              {/* Location Card */}
              <div>
  {/* Address Card */}
  <div className="bg-gray-900 p-8 rounded-2xl shadow-lg mb-8">
    <h3 className="text-2xl font-bold mb-3 text-gray-900">Vesra Software</h3>
    <p className="text-gray-600 leading-relaxed text-lg">
      Dr no 1-20-268, SY no 72, G2, 1st floor, <br />
      KAIZEN MIRZA WHITE HOUSE, <br />
      RASOOLPURA, BEGUMPET, <br />
      HYDERABAD, TELANGANA <br />
      PIN: 500003
    </p>
  </div>
</div>


              {/* Business Hours */}
              <div className="wp-card wp-card-hover bg-white p-8 mb-8 border border-primary-600/20">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Business Hours</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Monday - Friday</span>
                    <span className="text-primary-600 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>

                  <div className="h-px bg-gray-100"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg">Saturday</span>
                    <span className="text-primary-600 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>

                  <div className="h-px bg-gray-100"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg">Sunday</span>
                    <span className="text-gray-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Response */}
              <div className="wp-card wp-card-hover bg-white p-8 border border-primary-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Quick Response</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Need immediate assistance? We're available on WhatsApp for quick responses.
                  </p>

                  <a href="https://wa.me/919100608695" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 wp-gradient-accent rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg text-white">
                    <MessageCircle size={24} className="text-white" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default ContactPage;
