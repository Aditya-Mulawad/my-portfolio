
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Booqin",
      category: "Mobile App Design",
      description: "Online salon booking app with intuitive UI/UX design, complete wireframes and interactive prototypes for seamless user experience.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      tools: ["Figma", "Prototyping", "User Research"],
      type: "UI/UX Design"
    },
    {
      id: 2,
      title: "QuickCart",
      category: "E-commerce App",
      description: "One-tap grocery shopping app focusing on minimal design and accessible UI to make grocery shopping effortless and quick.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tools: ["Figma", "Accessibility Design", "Mobile UX"],
      type: "Mobile App Design"
    },
    {
      id: 3,
      title: "EarthLeaf",
      category: "E-commerce Website",
      description: "Responsive organic tea e-commerce site with nature-themed design, focusing on sustainability and organic product presentation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tools: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      type: "Web Design"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      category: "Portfolio Website",
      description: "Modern portfolio website built with ReactJS featuring responsive design, smooth interactions, and optimized performance.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tools: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      type: "Web Development"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">My Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some of my recent projects showcasing UI/UX design, web development, 
              and digital experiences that deliver real value to users.
            </p>
          </div>

          {/* Featured Project Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600">Projects Done</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-teal-600 mb-2">8</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-teal-600 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-teal-600 font-medium mb-3">{project.category}</p>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                      View Project Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Design Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-lg font-bold">01</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Research</h3>
                <p className="text-gray-600 text-sm">
                  Understanding user needs, market trends, and project requirements
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-lg font-bold">02</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Ideation</h3>
                <p className="text-gray-600 text-sm">
                  Brainstorming solutions and creating initial concepts and wireframes
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-lg font-bold">03</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Design</h3>
                <p className="text-gray-600 text-sm">
                  Creating high-fidelity designs and interactive prototypes
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-lg font-bold">04</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Test & Iterate</h3>
                <p className="text-gray-600 text-sm">
                  User testing, feedback collection, and continuous refinement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
