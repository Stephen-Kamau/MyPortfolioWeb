
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Data Engineer R&D",
    company: "Prospect33",
    period: "Jan 2024 - Present",
    achievements: [
      "Built and maintained data pipelines at scale using Airflow, DBT, and Snowflake, optimizing large data marketplaces.",
      "Leveraged AWS technologies (Lambda, S3, SageMaker, EKS, RDS) for deploying machine learning models, improving process efficiency by 90%.",
      "Collaborated with cross-functional teams to design and deploy AI-driven solutions leveraging AWS Cloud services and machine learning models.",
      "Developed and deployed large language models (LLMs), reducing human intervention by 80%.",
    ],
  },
  {
    title: "Backend Engineer",
    company: "Fleet",
    period: "April 2023 - Jan 2024",
    achievements: [
      "Built data pipeline using Metabase and PostgreSQL to enhance reporting efficiency, saving on individual report creation costs.",
      "Updated the back-end systems by increasing operational efficiency by 30% through reducing customer's delivery times.",
      "Improved deployment processes and infrastructure management; these improvements helped reduce deployment time and enhanced the reliability of the systems.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Neural Labs Africa",
    period: "April 2022 - Dec 2023",
    achievements: [
      "Optimized machine learning algorithms (YOLO and MaskRCNN) for computer vision on object localization, improving dice score performance by 88%.",
      "Deployed machine learning models using AWS infrastructure, including EC2 and SageMaker, achieving high performance in critical applications.",
      "Built and maintained data APIs with FastAPI and Docker, scaling models for production environments.",
      "Applied Hadoop technologies (Apache Spark, HDFS) to handle and process large datasets.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  {exp.title} at {exp.company}
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
