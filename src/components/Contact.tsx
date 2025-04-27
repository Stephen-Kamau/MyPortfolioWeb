
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-center">Let's Connect!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-gray-600 mb-6">
              I'm always open to discussing new projects, opportunities, or partnerships.
              Feel free to reach out through any of the following channels:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button asChild variant="outline" className="w-full md:w-auto gap-2">
                <a href="mailto:stiveckamash@gmail.com">
                  <Mail className="w-4 h-4" />
                  stiveckamash@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full md:w-auto gap-2">
                <a href="tel:+254798355947">
                  <Phone className="w-4 h-4" />
                  +254 798 355 947
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
