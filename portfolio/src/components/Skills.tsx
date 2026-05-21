
import { Code, Database, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillsCategories = [
  {
    title: "Technologies",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "C++", "JavaScript", "Django", "Flask", "REST API", "FastAPI", "TensorFlow", "PyTorch"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Server className="w-6 h-6" />,
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Jenkins", "Terraform", "Git Actions", "Prometheus", "Grafana"],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "PostgreSQL", "BigQuery", "Git", "Jira", "Postman", "Databricks"],
  },
];

const Skills = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
