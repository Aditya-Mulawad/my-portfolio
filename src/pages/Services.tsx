import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatIDo = () => {
  const capabilities = [
    {
      title: "UI/UX Design",
      description: "Designing seamless user experiences from wireframes to high-fidelity mockups.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "User Interface Design",
        "Usability Testing",
        "Accessibility Considerations",
        "Design System Creation"
      ],
      color: "teal"
    },
    {
      title: "Front-End Development",
      description: "Translating designs into responsive and interactive web applications.",
      features: [
        "Responsive Web Design",
        "React Development",
        "Tailwind CSS & Component Systems",
        "Performance Optimization",
        "Version Control (Git)",
        "Clean, Maintainable Code"
      ],
      color: "blue"
    },
    {
      title: "Collaboration & Tools",
      description: "Working efficiently in collaborative environments using modern tools and practices.",
      features: [
        "Figma & Adobe XD for Design",
        "Visual Studio Code",
        "Notion & Slack for Collaboration",
        "Agile Mindset",
        "Clear Documentation",
        "Effective Communication"
      ],
      color: "purple"
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Understand",
      description: "Grasp the problem, user needs, and project goals through research and discussion."
    },
    {
      step: "02",
      title: "Design",
      description: "Create wireframes, flows, and interactive UI designs with a user-first mindset."
    },
    {
      step: "03",
      title: "Develop",
      description: "Transform designs into clean, functional code using modern front-end technologies."
    },
    {
      step: "04",
      title: "Refine",
      description: "Iterate based on feedback, test across devices, and polish for deployment."
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">What I Do</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a passionate UI/UX designer and frontend developer, I focus on delivering user-centered digital experiences through thoughtful design and code.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {capabilities.map((skill, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`absolute top-0 left-0 w-full h-1 bg-${skill.color}-500`}></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{skill.title}</CardTitle>
                  <p className="text-gray-600">{skill.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What I Focus On:</h4>
                    <ul className="space-y-2">
                      {skill.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Work Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">My Approach</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I follow a structured and adaptable workflow that ensures quality and clarity in every step.
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

          {/* Tools Section */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
              <p className="text-lg text-gray-600">
                I use industry-standard tools and technologies to bring designs and ideas to life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Design Tools</h3>
                {["Figma", "Adobe XD", "Illustrator", "InVision"].map((tool) => (
                  <div key={tool} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">{tool}</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Development</h3>
                {["HTML5 & CSS3", "JavaScript", "React", "Tailwind CSS", "Git"].map((tech) => (
                  <div key={tech} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">{tech}</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Other Tools</h3>
                {["VS Code", "Notion", "Slack", "Zoom", "WordPress"].map((tool) => (
                  <div key={tool} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700">{tool}</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-teal-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Looking for a Passionate Designer/Developer?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              I’m open to full-time roles, internships, or collaborative opportunities.
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

export default WhatIDo;
