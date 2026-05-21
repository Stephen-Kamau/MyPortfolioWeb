
import { Award, Code, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Data Engineering",
      description: "Building scalable data pipelines and ML solutions at Prospect33",
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "Cloud Technologies",
      description: "Leveraging AWS, Airflow, and DBT for advanced data solutions",
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "ML & AI Innovation",
      description: "Deploying LLMs and optimizing machine learning workflows",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Professional Profile</h2>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                A dynamic Data Engineer with expertise in transforming complex data challenges 
                into innovative solutions. Currently driving R&D efforts at Prospect33, I specialize 
                in designing scalable data pipelines, deploying machine learning models, and 
                leveraging cloud technologies to deliver high-impact insights.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
