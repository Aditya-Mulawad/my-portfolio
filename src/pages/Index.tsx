import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-36 h-36 bg-teal-300/40 rounded-full animate-pulse" />
          <div className="absolute top-32 right-16 w-24 h-24 bg-teal-400/30 rounded-full animate-bounce" />
          <div className="absolute bottom-28 left-24 w-20 h-20 bg-teal-500/20 rounded-full animate-pulse delay-2000" />
          <div className="absolute bottom-16 right-8 w-32 h-32 bg-teal-300/30 rounded-full animate-bounce delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left space-y-6 animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Hello, I'm <span className="text-teal-600">Aditya</span>
            </h1>
            <p className="text-2xl text-teal-700 font-semibold">UI/UX Designer & Frontend Developer</p>
            <p className="text-lg text-gray-600 max-w-xl">
              I create elegant, human-centered digital products that blend visual harmony with flawless user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white px-8 py-3 text-lg shadow-md">
                <Link to="/portfolio">
                  View Portfolio
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp delay-300">
            <div className="relative group">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[10px] border-white shadow-xl group-hover:scale-105 transform transition-transform duration-500">
                <img
                  src="https://i.postimg.cc/ZqjjnxcH/1750396462.png"
                  alt="Aditya Mulawad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-teal-400 rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-10 -left-8 w-16 h-16 bg-teal-500 rounded-full opacity-30 animate-float delay-2000" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Design. Code. Collaborate.
            <br />
            <span className="text-teal-600">Deliver Seamless Digital Experiences</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {[
              { title: "UI/UX Design", desc: "Crafting engaging user interfaces." },
              { title: "Frontend Development", desc: "Responsive, modern web apps." },
              { title: "Product Thinking", desc: "Designs rooted in user value." },
              { title: "Visual Identity", desc: "Cohesive, memorable branding." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-3 bg-teal-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-teal-700">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-teal-50 p-8 rounded-xl max-w-2xl mx-auto shadow-inner">
            <p className="text-lg text-gray-700 italic">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Something Incredible Together
          </h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
            Whether you're starting from scratch or improving an existing product, I'm here to help make it impactful and user-focused.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg">
            <Link to="/contact">
              Get In Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
