
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/30 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-20 h-20 bg-teal-300/40 rounded-full animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-teal-400/20 rounded-full animate-float" style={{animationDelay: '4s'}} />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/20 rounded-full animate-float" style={{animationDelay: '1s'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              I am{" "}
              <span className="text-teal-600">Aditya</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-700 font-medium">
              UI & UX Designer
            </p>
            <p className="text-lg text-gray-600 max-w-lg">
              Passionate about crafting clean, functional, and user-friendly digital experiences that bridge design and technology.
            </p>
            
            {/* Quote */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-teal-200/50 max-w-md">
              <p className="text-gray-700 italic">
                "Good design is the most important way differentiate ourselves from competitors"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
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

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="https://i.ibb.co/0RVNDgsT/hero-image.jpg"
                  alt="Aditya Mulawad"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-400 rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-teal-500 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            A Consistent Experience
            <br />
            <span className="text-teal-600">is a Better Experience.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="space-y-4">
              <h3 className="text-teal-700 font-semibold text-lg">UI & UX Design</h3>
              <p className="text-gray-600">Creating intuitive and beautiful user interfaces</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-teal-700 font-semibold text-lg">Product Design</h3>
              <p className="text-gray-600">End-to-end product design solutions</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-teal-700 font-semibold text-lg">Mobile App Design</h3>
              <p className="text-gray-600">Responsive designs for all devices</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-teal-700 font-semibold text-lg">Visual Branding</h3>
              <p className="text-gray-600">Consistent brand identity design</p>
            </div>
          </div>

          <div className="mt-16 bg-teal-50 p-8 rounded-xl max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 italic">
              "Good design is the most important way differentiate ourselves from competitors"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life with exceptional design and user experience.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/contact">
              Let's Talk
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
