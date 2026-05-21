
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "BSc in Computer Science (2018 - 2022)",
      institution: "Multimedia University of Kenya",
    },
    {
      degree: "Data Analyst - Associate Certificate",
      institution: "DataCamp",
    },
    {
      degree: "Data Scientist - Professional Certificate",
      institution: "DataCamp",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    {edu.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{edu.institution}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
