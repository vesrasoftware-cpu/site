import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

function AboutPage() {
  return (
    <div className="pt-16 bg-[#0A0A0A]">
      {/* Hero Section */}
      <section
        className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden"
        style={{ backgroundImage: "url('/about.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 px-6 py-3 rounded-full bg-white/10 border border-cyan-400/40 backdrop-blur">
            <span className="text-sm font-medium text-cyan-400">✦ Our Story</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Vesra
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            We are a <span className="text-white font-semibold">forward-thinking</span> software services company
            building innovative solutions for tomorrow.
          </p>
        </div>
      </section>

      {/* Story & Stats Section - DARK */}
      <section className="py-24 px-6 relative bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Story */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
                <span className="text-sm font-medium text-gray-300">✨ Building the Future</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                One Solution at a{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Time
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Vesra was founded to transform the software world. Today, we deliver modern, scalable, and
                high-performance solutions for businesses around the globe.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                We prioritize innovation, security, and user-focused design to ensure each product creates meaningful impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects Delivered', value: '150+' },
                { label: 'Happy Clients', value: '100+' },
                { label: 'Team Members', value: '50+' },
                { label: 'Years Experience', value: '10+' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-[#111] border border-white/10 p-8 text-center hover:border-cyan-400/30 hover:-translate-y-2 transition-all"
                >
                  <div className="text-4xl font-black text-white mb-3">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
            <div className="group rounded-[2.5rem] p-12 bg-[#111] hover:bg-[#151515] transition-all border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-md">
                  <Target size={40} className="text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-white">Our Mission</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Deliver intelligent, scalable, and future-ready software solutions that accelerate growth.
                </p>
              </div>
            </div>

            <div className="group rounded-[2.5rem] p-12 bg-[#111] hover:bg-[#151515] transition-all border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-md">
                  <Eye size={40} className="text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-white">Our Vision</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Become a global leader in delivering transformative digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur">
              <span className="text-sm font-medium text-purple-400">⚡ What Drives Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Core{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
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
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: Award,
                title: 'Excellence',
                description:
                  'We deliver premium quality in every project with precision.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description:
                  'We work closely with clients to build with clarity and purpose.',
                gradient: 'from-blue-400 to-purple-500'
              },
              {
                icon: Heart,
                title: 'Integrity',
                description:
                  'We operate with honesty, transparency, and ethical values.',
                gradient: 'from-pink-400 to-red-500'
              },
              {
                icon: Target,
                title: 'Client-Focused',
                description:
                  'Your success is our goal. We align solutions with your vision.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Lightbulb,
                title: 'Continuous Learning',
                description:
                  'We constantly grow to stay ahead in the evolving tech world.',
                gradient: 'from-green-400 to-emerald-500'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-[#111] rounded-3xl p-8 hover:bg-[#151515] hover:-translate-y-2 transition-all border border-white/10"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                >
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
