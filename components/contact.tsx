import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make a difference? Contact us to learn more about our
            programs, volunteer opportunities, or partnership possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-green-600/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+233543361975 / +233524417913</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-600/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">boawonua@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-600/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">KNUST Campus, Kumasi, Ghana</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-600/10 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">
                Partnership Opportunities
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                We welcome partnerships with organizations, institutions, and
                individuals who share our vision of empowering tomorrow's
                leaders.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Corporate Sponsorship</li>
                <li>• Educational Institutions</li>
                <li>• Government Partnerships</li>
                <li>• Community Organizations</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input placeholder="What is this about?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
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
          </div>
        </div>
      </div>
    </section>
  );
}
