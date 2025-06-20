
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate UI/UX designer with a Master's degree in Computer Applications, 
              dedicated to creating meaningful digital experiences that bridge design and technology.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">My Design Philosophy</h2>
              <p className="text-lg text-gray-600">
                I believe that great design is not just about making things look beautiful—it's about 
                creating solutions that truly serve users. My approach centers on understanding user needs, 
                iterating through feedback, and crafting experiences that are both functional and delightful.
              </p>
              <p className="text-lg text-gray-600">
                With a strong foundation in both design principles and technical implementation, 
                I bridge the gap between creative vision and practical execution, ensuring that 
                every design can be successfully brought to life.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop"
                alt="Design workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Education & Experience Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Education & Experience</h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>
                
                {/* MCA */}
                <div className="relative flex items-center mb-12">
                  <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
                  <Card className="ml-16 w-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">Master of Computer Applications</h3>
                          <p className="text-teal-600 font-medium">CMR University</p>
                          <p className="text-gray-600 mt-2">
                            Advanced studies in computer applications with focus on software development, 
                            UI/UX principles, and modern web technologies.
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 mt-2 md:mt-0">2024</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* ConsoleKit Internship */}
                <div className="relative flex items-center mb-12">
                  <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
                  <Card className="ml-16 w-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">UI/UX Designer Intern</h3>
                          <p className="text-teal-600 font-medium">ConsoleKit</p>
                          <p className="text-gray-600 mt-2">
                            Designed user interfaces for web applications, created wireframes and prototypes, 
                            and collaborated with development teams to implement design solutions.
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 mt-2 md:mt-0">2023</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Amiti Internship */}
                <div className="relative flex items-center mb-12">
                  <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
                  <Card className="ml-16 w-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">Web Developer Intern</h3>
                          <p className="text-teal-600 font-medium">Amiti Software Technologies</p>
                          <p className="text-gray-600 mt-2">
                            Developed responsive websites using modern web technologies, 
                            gained hands-on experience with React, and learned agile development practices.
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 mt-2 md:mt-0">2022</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* BCA */}
                <div className="relative flex items-center">
                  <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
                  <Card className="ml-16 w-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Applications</h3>
                          <p className="text-teal-600 font-medium">Rani Channamma University</p>
                          <p className="text-gray-600 mt-2">
                            Foundation in computer science, programming languages, database management, 
                            and software engineering principles.
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 mt-2 md:mt-0">2022</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Values & Approach */}
          <div className="bg-teal-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">User-Centered Design</h3>
                <p className="text-gray-600">
                  Every design decision starts with understanding user needs and pain points.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Iterative Process</h3>
                <p className="text-gray-600">
                  Continuous testing, feedback, and refinement to achieve the best results.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Technical Feasibility</h3>
                <p className="text-gray-600">
                  Designs that are not only beautiful but also technically implementable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
