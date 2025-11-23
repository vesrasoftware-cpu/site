import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

function AboutPage() {
  return (
    <div className="pt-16 bg-white text-slate-900">
      {/* Hero Section */}
      <section
        className="min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden"
        style={{ backgroundImage: "url('/about.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-10 left-2 w-40 h-40 sm:w-96 sm:h-96 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-2 w-40 h-40 sm:w-96 sm:h-96 bg-sky-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-2xl sm:max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/70 border border-blue-300/40 backdrop-blur">
            <span className="text-xs sm:text-sm font-medium text-blue-700">✦ Our Story</span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold mb-4 sm:mb-8 leading-tight text-slate-900">
            About{' '}
            <span className="bg-gradient-to-r from-blue-800 via-sky-600 to-indigo-500 bg-clip-text text-transparent">
              Vesra
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-700 leading-relaxed max-w-xl sm:max-w-3xl mx-auto font-light">
            We are a <span className="text-slate-900 font-semibold">forward-thinking</span> software services company
            building innovative solutions for tomorrow.
          </p>
        </div>
      </section>

      {/* Story & Stats Section */}
      <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 relative bg-blue-50/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-16 sm:mb-32">
            {/* Story */}
            <div>
              <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100 border border-blue-200 backdrop-blur">
                <span className="text-xs sm:text-sm font-medium text-blue-600">✨ Building the Future</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 leading-tight text-slate-900">
                One Solution at a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Time
                </span>
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Vesra was founded to transform the software world. Today, we deliver modern, scalable, and
                high-performance solutions for businesses around the globe.
              </p>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                We prioritize innovation, security, and user-focused design to ensure each product creates meaningful impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: 'Projects Delivered', value: '150+' },
                { label: 'Happy Clients', value: '100+' },
                { label: 'Team Members', value: '50+' },
                { label: 'Years Experience', value: '10+' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl sm:rounded-3xl bg-white border border-blue-200 p-4 sm:p-8 text-center shadow-sm hover:border-blue-400 hover:-translate-y-2 transition-all"
                >
                  <div className="text-2xl sm:text-4xl font-black text-blue-700 mb-1 sm:mb-3">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-32">
            <div className="group rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 bg-white hover:bg-blue-50 transition-all border border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8 shadow">
                  <Target size={32} className="sm:size-40 text-white" />
                </div>
                <h3 className="text-xl sm:text-4xl font-bold mb-3 sm:mb-6 text-slate-900">Our Mission</h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  Deliver intelligent, scalable, and future-ready software solutions that accelerate growth.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 bg-white hover:bg-blue-50 transition-all border border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-200/30 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8 shadow">
                  <Eye size={32} className="sm:size-40 text-white" />
                </div>
                <h3 className="text-xl sm:text-4xl font-bold mb-3 sm:mb-6 text-slate-900">Our Vision</h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  Become a global leader in delivering transformative digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-10 sm:mb-20">
            <div className="inline-block mb-2 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 rounded-full border border-blue-200 backdrop-blur">
              <span className="text-xs sm:text-sm font-medium text-blue-700">⚡ What Drives Us</span>
            </div>
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-6 text-slate-900">
              Our Core{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-slate-700 text-base sm:text-xl max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description:
                  'We embrace new technologies to create smart, impactful solutions.',
                gradient: 'from-blue-400 to-sky-500'
              },
              {
                icon: Award,
                title: 'Excellence',
                description:
                  'We deliver premium quality in every project with precision.',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description:
                  'We work closely with clients to build with clarity and purpose.',
                gradient: 'from-sky-500 to-blue-600'
              },
              {
                icon: Heart,
                title: 'Integrity',
                description:
                  'We operate with honesty, transparency, and ethical values.',
                gradient: 'from-blue-400 to-indigo-500'
              },
              {
                icon: Target,
                title: 'Client-Focused',
                description:
                  'Your success is our goal. We align solutions with your vision.',
                gradient: 'from-indigo-500 to-blue-600'
              },
              {
                icon: Lightbulb,
                title: 'Continuous Learning',
                description:
                  'We constantly grow to stay ahead in the evolving tech world.',
                gradient: 'from-blue-300 to-sky-400'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 hover:bg-blue-50 hover:-translate-y-2 transition-all border border-blue-200 shadow-sm"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                >
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{value.title}</h3>
                <p className="text-slate-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
