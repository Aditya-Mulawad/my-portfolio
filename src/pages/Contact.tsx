
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "aditya.mulawad@email.com",
      link: "mailto:aditya.mulawad@email.com"
    },
    {
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/adityamulawad",
      link: "https://linkedin.com/in/adityamulawad"
    },
    {
      title: "GitHub",
      value: "github.com/adityamulawad",
      link: "https://github.com/adityamulawad"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create 
              something amazing together. I'm always excited to work on new challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{info.title}</h3>
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 hover:text-teal-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      I'm passionate about creating digital experiences that make a difference. 
                      Whether you need UI/UX design, web development, or complete digital solutions, 
                      I'm here to help.
                    </p>
                    <p>
                      I work with startups, small businesses, and established companies to create 
                      user-centered designs that drive results and enhance user satisfaction.
                    </p>
                    <p>
                      Available for both project-based work and long-term collaborations. 
                      Let's discuss how we can bring your vision to life!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
                <p className="text-gray-600 mb-6">
                  I typically respond to all inquiries within 24 hours. 
                  For urgent projects, feel free to call or connect on LinkedIn.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    <a href="https://linkedin.com/in/adityamulawad" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    <a href="https://github.com/adityamulawad" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">What's your typical project timeline?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on scope and complexity. A typical website design 
                  takes 2-4 weeks, while larger applications may take 6-12 weeks.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Do you work with international clients?</h3>
                <p className="text-gray-600">
                  Yes! I work with clients globally and am comfortable with different time zones. 
                  I use modern collaboration tools to ensure smooth communication.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">What's included in your design process?</h3>
                <p className="text-gray-600">
                  My process includes research, wireframing, design, prototyping, user testing, 
                  and final delivery with all source files and documentation.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Do you provide ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, I offer ongoing support and maintenance packages to ensure your project 
                  continues to perform well and stays up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
