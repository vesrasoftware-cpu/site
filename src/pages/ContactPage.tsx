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

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 bg-white text-slate-900">
      {/* ---------------- HERO ---------------- */}
      <section
        className="min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden "
        style={{
          backgroundImage: "url('/contact.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Lightened overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Blue glow circles */}
        <div className="absolute top-10 right-2 w-40 h-40 sm:w-96 sm:h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-2 w-40 h-40 sm:w-96 sm:h-96 bg-sky-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>

        <div className="max-w-2xl sm:max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 sm:mb-8 px-5 py-2 sm:py-3 bg-white/70 border border-blue-300 rounded-full shadow-sm">
            <span className="text-xs sm:text-sm font-medium text-blue-700">
              ✦ Get In Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white">
            Contact{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="font-semibold sm:text-xl md:text-2xl text-white leading-relaxed max-w-xl sm:max-w-3xl mx-auto font-light">
            Have a project in mind? Let's discuss how we can help{' '}
            <span className="font-bold text-red-600">
              bring your vision to life.
            </span>
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </section>

      {/* ---------------- MAIN SECTION ---------------- */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* ----- CONTACT CARDS ----- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition p-0 overflow-hidden text-center">
              <div className="h-36 overflow-hidden rounded-t-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80"
                  alt="phone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                <a
                  href="tel:9100608695"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  9100608695
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden text-center">
              <div className="h-36 overflow-hidden rounded-t-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
                  alt="email"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <a
                  href="mailto:Vesrasoftware@gmail.com"
                  className="text-slate-600 hover:text-blue-600 transition break-all"
                >
                  Vesrasoftware@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden text-center">
              <div className="h-36 overflow-hidden rounded-t-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="whatsapp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/919100608695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>

          {/* ----- FORM + LOCATION ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FORM */}
            <div className="bg-white border border-blue-100 shadow-lg rounded-3xl p-10">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Send us a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>

              <p className="text-slate-600 text-lg mb-10">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-blue-200 rounded-2xl focus:border-blue-600 outline-none transition text-slate-900 bg-white placeholder-slate-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-blue-200 rounded-2xl focus:border-blue-600 outline-none transition text-slate-900 bg-white placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-blue-200 rounded-2xl focus:border-blue-600 outline-none transition text-slate-900 bg-white placeholder-slate-400"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-blue-200 rounded-2xl focus:border-blue-600 outline-none transition text-slate-700 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Quote">Project Quote</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Career">Career</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-blue-200 rounded-2xl focus:border-blue-600 outline-none transition resize-none text-slate-900 bg-white placeholder-slate-400"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl transition shadow-lg hover:scale-[1.02]"
                >
                  <span>Send Message via WhatsApp</span>
                  <Send size={22} />
                </button>
              </form>
            </div>

            {/* LOCATION */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Location
                </span>
              </h2>

              {/* Address Card */}
              <div className="bg-white border border-blue-100 p-8 rounded-2xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">
                  Vesra Software pvt ltd
                </h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Dr no 1-20-268, SY no 72, G2, 1st floor, <br />
                  KAIZEN MIRZA WHITE HOUSE, <br />
                  RASOOLPURA, BEGUMPET, <br />
                  HYDERABAD, TELANGANA <br />
                  PIN: 500003
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-white border border-blue-100 p-8 rounded-2xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">
                  Business Hours
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-lg">Monday - Friday</span>
                    <span className="font-semibold text-blue-600">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>

                  <div className="h-px bg-blue-100"></div>

                  <div className="flex justify-between">
                    <span className="text-lg">Saturday</span>
                    <span className="font-semibold text-blue-600">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>

                  <div className="h-px bg-blue-100"></div>

                  <div className="flex justify-between">
                    <span className="text-lg">Sunday</span>
                    <span className="font-semibold text-slate-600">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Response */}
              <div className="relative bg-white border border-blue-100 p-8 rounded-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-sky-50" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    Quick Response
                  </h3>
                  <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                    Need immediate assistance? We're available on WhatsApp for
                    quick help.
                  </p>

                  <a
                    href="https://wa.me/919100608695"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition shadow-lg hover:scale-[1.03]"
                  >
                    <MessageCircle size={24} />
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
