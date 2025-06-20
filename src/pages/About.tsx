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
              I'm a UI/UX designer and web enthusiast with a Master's in Computer Applications,
              passionate about designing human-centered digital products. Currently seeking 
              full-time opportunities where I can apply my skills and grow as a designer.
            </p>
          </div>

          {/* Design Philosophy */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">My Design Approach</h2>
              <p className="text-lg text-gray-600">
                I craft user experiences that not only look good but also work seamlessly. 
                My process involves research, user empathy, usability, and accessibility 
                to ensure every interface I create solves real-world problems.
              </p>
              <p className="text-lg text-gray-600">
                With a blend of creative thinking and technical know-how, I bridge the gap 
                between visual design and development — collaborating effectively with both 
                design and engineering teams.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://i.postimg.cc/K8YPyY8k/hcc.jpg"
                alt="Design workspace"
                className="rounded-lg shadow-xl w-full max-w-md object-cover"
              />
            </div>

          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Education & Internships
            </h2>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>

              {/* Internship: ConsoleKit */}
              <div className="relative flex items-center mb-12">
                <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
                <Card className="ml-16 w-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">UI/UX Design Intern</h3>
                        <p className="text-teal-600 font-medium">ConsoleKit</p>
                        <p className="text-gray-600 mt-2">
                          Collaborated on web app UI designs, user flows, wireframes, and prototypes. 
                          Worked closely with developers to ensure designs were implemented effectively.
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 mt-2 md:mt-0">2025</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Internship: Amiti Software */}
              <div className="relative flex items-center mb-12">
                <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
                <Card className="ml-16 w-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Web Development Intern</h3>
                        <p className="text-teal-600 font-medium">Amiti Software Technologies</p>
                        <p className="text-gray-600 mt-2">
                          Built responsive websites and interfaces using HTML, CSS, and React. 
                          Improved component reusability and practiced agile development.
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 mt-2 md:mt-0">2024</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* MCA */}
              <div className="relative flex items-center mb-12">
                <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
                <Card className="ml-16 w-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Master of Computer Applications
                        </h3>
                        <p className="text-teal-600 font-medium">CMR University</p>
                        <p className="text-gray-600 mt-2">
                          Focused on software development, UI/UX, frontend technologies, and 
                          real-world problem-solving through capstone projects and internships.
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 mt-2 md:mt-0">2024</span>
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
                        <h3 className="text-xl font-semibold text-gray-900">
                          Bachelor of Computer Applications
                        </h3>
                        <p className="text-teal-600 font-medium">Rani Channamma University</p>
                        <p className="text-gray-600 mt-2">
                          Built a solid foundation in programming, database systems, and computer science concepts.
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 mt-2 md:mt-0">2022</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Approach Section */}
          <div className="bg-teal-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What I Believe In</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">User Empathy</h3>
                <p className="text-gray-600">
                  I design with empathy — always prioritizing the user's perspective and needs.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Collaboration</h3>
                <p className="text-gray-600">
                  I believe the best designs come from feedback, iteration, and open teamwork.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Clarity & Simplicity</h3>
                <p className="text-gray-600">
                  Clean, intuitive, and accessible interfaces that speak for themselves.
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
