import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_wj4wbne",
        "template_sxvd61i",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          from_message: formData.message,
        },
        "mDZYh-1mvAFKRzCzi"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
      console.error("EmailJS error:", error);
    }
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
      value: "adityamulawad3@email.com",
      link: "mailto:adityamulawad3@email.com"
    },
    {
      title: "Phone",
      value: "+91 9353660232",
      link: "tel:+919353660232"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/adityamulawad",
      link: "https://linkedin.com/in/adityamulawad"
    },
    {
      title: "GitHub",
      value: "github.com/Aditya-Mulawad",
      link: "https://github.com/Aditya-Mulawad"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm actively seeking full-time opportunities in UI/UX design and web development.
              If you’re hiring or know of opportunities, I’d love to connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
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
                      placeholder="Job opportunity, portfolio feedback, etc."
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
                      placeholder="Tell me how I can contribute to your team or project."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Hire Me?</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      As a recent MCA graduate with hands-on internship experience, I bring a strong
                      foundation in UI/UX and modern frontend technologies like React, TypeScript, and Tailwind.
                    </p>
                    <p>
                      I’ve built responsive interfaces, prototyped real-world apps, and collaborated with developers to solve design challenges.
                    </p>
                    <p>
                      I'm eager to contribute to meaningful projects, grow within a team, and apply my design thinking to solve user problems.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Let’s Connect</h3>
                <p className="text-gray-600 mb-6">
                  Reach out via email or LinkedIn. I’m open to junior UI/UX or frontend roles.
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
                    <a href="https://github.com/Aditya-Mulawad" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
