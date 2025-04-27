
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

const Volunteer = () => {
  const volunteerData = [
    {
      role: "Chairperson - CIT CLUB MMU",
      period: "Aug 2021 - Aug 2022",
      responsibilities: [
        "Led a collaborative learning environment for members on technology topics, including cloud computing and machine learning.",
        "Guided peers in building AI solutions, emphasizing cloud technologies and data science applications.",
      ],
    },
    {
      role: "GDSC Lead - GDSC MMU Chapter",
      period: "Aug 2020 - Aug 2021",
      responsibilities: [
        "Organized workshops on cloud computing, web development, cybersecurity, and data science.",
        "Mentored students on machine learning and cloud technologies, fostering an environment of innovation and technical learning.",
      ],
    },
  ];

  return (
    <section className="py-16 px-4" id="volunteer">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Community Involvement</h2>
        <div className="space-y-8">
          {volunteerData.map((vol, index) => (
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
                    <Users className="w-6 h-6 text-purple-500" />
                    {vol.role}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{vol.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    {vol.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700">{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
