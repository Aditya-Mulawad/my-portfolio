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
      description: "A modern salon booking app built as part of a UI/UX internship. Focused on user flow, interactive wireframes, and accessibility.",
      image: "https://png.pngtree.com/background/20230610/original/pngtree-hair-salon-with-black-lighting-and-chandelier-picture-image_3105657.jpg",
      tools: ["Figma", "Prototyping", "User Research"],
      type: "UI/UX Project"
    },
    {
      id: 2,
      title: "QuickCart",
      category: "E-commerce App",
      description: "A concept project designed to simplify online grocery shopping with clean UI and seamless user experience.",
      image: "https://www.addevice.io/storage/ckeditor/uploads/images/63d0f032b4ead_guide.to.grocery.delivery.app.development.png",
      tools: ["Figma", "Accessibility", "Mobile UX"],
      type: "Case Study"
    },
    {
      id: 3,
      title: "EarthLeaf",
      category: "E-commerce Web Design",
      description: "A Figma-based design concept for an organic tea powder brand. Focused on clean layout, natural color schemes, product hierarchy, and responsive UI components for an optimal shopping experience.",
      image: "https://s.tmimgcdn.com/scr/800x500/76200/tea-production-tea-shop-multipage-modern-html-website-template_76270-original.jpg",
      tools: ["Figma", "UI Design", "Responsive Layout", "E-commerce UX"],
      type: "UI/UX Case Study"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      category: "Web Development",
      description: "My own portfolio built with React & Tailwind CSS. Highlights my design thinking, responsiveness, and interaction design skills.",
      image: "https://i.postimg.cc/xT10FFK0/pt.png",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      type: "Showcase"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These projects reflect my design process, technical skills, and ability to build practical, user-friendly digital products as a UI/UX and frontend enthusiast.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project) => (
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
                      <h4 className="font-semibold text-gray-900 mb-2">Tools & Skills Used:</h4>
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
                      View More Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Design Process Section */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              I believe in a structured and thoughtful process that turns ideas into functional, human-centered products.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Research", desc: "Understanding user needs, goals, and constraints." },
                { title: "Ideation", desc: "Sketching, wireframing, and exploring design directions." },
                { title: "Design", desc: "Crafting polished UIs and building interactive prototypes." },
                { title: "Test & Iterate", desc: "Collecting feedback and improving the experience." },
              ].map((step, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-lg font-bold">{`0${idx + 1}`}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
