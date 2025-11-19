import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden"
        style={{ backgroundImage: "url('/about.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 px-6 py-3 glass rounded-full border border-yellow-600">
            <span className="text-sm font-medium text-yellow-600">✦ Our Story</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
            About <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-white">Vesra</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            We are a <span className="text-white font-semibold">forward-thinking</span> software services company dedicated to empowering businesses through innovative technology solutions.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
      </section>

      {/* Story & Stats Section - WHITE BACKGROUND */}
      <section className="py-20 sm:py-24 md:py-32 px-6 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Story */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gray-100 border border-gray-300">
                <span className="text-sm font-medium text-gray-700">✨ Building the Future</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
                One Solution at a{' '}
                <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  Time
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded with a vision to revolutionize the software industry, Vesra has grown into a trusted
                partner for businesses seeking cutting-edge technology solutions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we pride ourselves on delivering exceptional software services that combine innovation,
                reliability, and user-centric design.
              </p>
            </div>

            {/* Stats (adjusted for visibility) */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects Delivered', value: '150+', gradient: 'from-blue-500 to-cyan-500' },
                { label: 'Happy Clients', value: '100+', gradient: 'from-purple-500 to-blue-500' },
                { label: 'Team Members', value: '50+', gradient: 'from-purple-500 to-pink-500' },
                { label: 'Years Experience', value: '10+', gradient: 'from-pink-500 to-red-500' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-3xl p-8 text-center hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                >
                  <div
                    className={`text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
            <div className="group rounded-[2.5rem] p-12 bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-md">
                  <Target size={40} className="text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower businesses worldwide with innovative software solutions that drive growth and
                  digital transformation.
                </p>
              </div>
            </div>

            <div className="group rounded-[2.5rem] p-12 bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-md">
                  <Eye size={40} className="text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the global leader in software innovation, delivering transformative solutions that shape
                  the future.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full border border-gray-300">
              <span className="text-sm font-medium text-purple-600">⚡ What Drives Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Core{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description:
                  'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: Award,
                title: 'Excellence',
                description:
                  'We are committed to delivering the highest quality in every project, exceeding expectations.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description:
                  'We believe in the power of teamwork, both within our team and with our clients.',
                gradient: 'from-blue-400 to-purple-500'
              },
              {
                icon: Heart,
                title: 'Integrity',
                description:
                  'We conduct business with honesty, transparency, and unwavering ethical standards.',
                gradient: 'from-pink-400 to-red-500'
              },
              {
                icon: Target,
                title: 'Client-Focused',
                description:
                  'Our clients’ success is our success. We prioritize their needs in everything we do.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Lightbulb,
                title: 'Continuous Learning',
                description:
                  'We grow continuously to stay ahead in the ever-evolving tech landscape.',
                gradient: 'from-green-400 to-emerald-500'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 hover:-translate-y-2 transition-all duration-500 border border-gray-200"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                >
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
