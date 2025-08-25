"use client";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const contacts = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      label: "Phone",
      value: "+233543361975 / +233524417913",
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      label: "Email",
      value: "boawonua@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      label: "Location",
      value: "KNUST Campus, Kumasi, Ghana",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make a difference? Contact us to learn more about our
            programs, volunteer opportunities, or partnership possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contacts.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  viewport={{ amount: 0.5 }}>
                  <div className="bg-green-600/10 p-3 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-green-600/10 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ amount: 0.3 }}>
              <h4 className="font-bold text-gray-900 mb-3">
                Partnership Opportunities
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                We welcome partnerships with organizations, institutions, and
                individuals who share our vision of empowering tomorrow's
                leaders.
              </p>
              <ul className="text-sm ml-4 text-gray-600 list-disc space-y-1">
                <li>Corporate Sponsorship</li>
                <li>Educational Institutions</li>
                <li>Government Partnerships</li>
                <li>Community Organizations</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ amount: 0.3 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="What is this about?" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about how we can help or how you'd like to get involved..."
                  rows={5}
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
