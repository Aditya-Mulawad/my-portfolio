
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight, Palette, Code, Smartphone, Star, Quote } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and modern websites using the latest technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Designing mobile-first experiences that work seamlessly across all devices."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "Aditya's attention to detail and user-centered approach resulted in a 40% increase in user engagement.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      content: "Outstanding work on our mobile app design. The interface is intuitive and visually stunning.",
      rating: 5
    }
  ];

  const workProcess = [
    { step: "01", title: "Discovery", description: "Understanding your needs and target audience" },
    { step: "02", title: "Research", description: "Market analysis and user research" },
    { step: "03", title: "Design", description: "Creating wireframes and visual designs" },
    { step: "04", title: "Prototype", description: "Building interactive prototypes" },
    { step: "05", title: "Test", description: "User testing and refinement" },
    { step: "06", title: "Launch", description: "Final delivery and support" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-20 h-20 bg-orange-300/40 rounded-full animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '4s'}} />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/20 rounded-full animate-float" style={{animationDelay: '1s'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Aditya
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-gray-700">
                UI/UX Designer & Web Developer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Passionate about crafting clean, functional, and user-friendly digital experiences that bridge design and technology with modern solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg rounded-xl">
                <Link to="/portfolio">
                  View My Work
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-xl">
                <Link to="/contact">
                  Let's Talk
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400 to-orange-400 rounded-3xl overflow-hidden border-8 border-white shadow-2xl transform rotate-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Aditya Mulawad"
                  className="w-full h-full object-cover transform -rotate-3"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-80 animate-pulse-glow" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-500 rounded-full opacity-60 animate-pulse-glow" style={{animationDelay: '1.5s'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I specialize in creating digital experiences that are both beautiful and functional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My Working Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{process.title}</h3>
                </div>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Testimonials from satisfied clients who've worked with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-orange-300 mb-4" />
                  <p className="text-lg mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-purple-200 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-orange-300 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's work together to bring your ideas to life with exceptional design and user experience.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl">
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
