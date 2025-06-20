
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Complete user experience design from research to final implementation",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "User Interface Design",
        "Usability Testing",
        "Accessibility Design",
        "Design System Creation"
      ],
      pricing: "Starting from $500",
      color: "teal"
    },
    {
      title: "Web Design & Development",
      description: "Responsive websites that look great and perform exceptionally",
      features: [
        "Responsive Web Design",
        "Frontend Development",
        "React Applications",
        "Performance Optimization",
        "SEO Optimization",
        "Maintenance & Support"
      ],
      pricing: "Starting from $800",
      color: "blue"
    },
    {
      title: "Branding & Graphic Design",
      description: "Cohesive brand identity that tells your story effectively",
      features: [
        "Logo Design",
        "Brand Identity",
        "Social Media Graphics",
        "Marketing Collateral",
        "Print Design",
        "Brand Guidelines"
      ],
      pricing: "Starting from $300",
      color: "purple"
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and project requirements through detailed discussions and research."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Creating wireframes, designs, and prototypes while keeping you involved in every step of the creative process."
    },
    {
      step: "03",
      title: "Testing & Refinement",
      description: "Thorough testing across devices and browsers, gathering feedback, and making necessary refinements."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Smooth project delivery with documentation, training, and ongoing support to ensure your success."
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">My Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design and development services to help bring your digital vision to life 
              with exceptional user experiences and technical excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`absolute top-0 left-0 w-full h-1 bg-${service.color}-500`}></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-teal-600 mb-4">{service.pricing}</div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Work Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How I Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My proven process ensures clear communication, quality results, 
                and successful project delivery every time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workProcess.map((process, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-teal-600 text-xl font-bold">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
              <p className="text-lg text-gray-600">
                I use the latest tools and technologies to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Design Tools</h3>
                <div className="space-y-2">
                  {["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"].map((tool) => (
                    <div key={tool} className="flex items-center justify-between bg-white p-3 rounded-lg">
                      <span className="text-gray-700">{tool}</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-teal-500 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Development</h3>
                <div className="space-y-2">
                  {["HTML5 & CSS3", "JavaScript", "React", "TypeScript", "Git"].map((tech) => (
                    <div key={tech} className="flex items-center justify-between bg-white p-3 rounded-lg">
                      <span className="text-gray-700">{tech}</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-teal-500 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Other Tools</h3>
                <div className="space-y-2">
                  {["WordPress", "Visual Studio Code", "Slack", "Notion", "Zoom"].map((tool) => (
                    <div key={tool} className="flex items-center justify-between bg-white p-3 rounded-lg">
                      <span className="text-gray-700">{tool}</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-teal-500 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-teal-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link to="/contact">
                Get in Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
