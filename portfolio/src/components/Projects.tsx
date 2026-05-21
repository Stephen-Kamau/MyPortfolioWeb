
import { Github, Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";



const featuredProjects = [
  {
    title: "Covid Tracker Dashboard",
    description: "Live dashboard for tracking COVID-19 statistics using data visualization and real-time updates.",
    tags: ["Python", "Dash", "Pandas", "GeoPandas", "Plotly"],
    github: "https://github.com/Stephen-Kamau/Machine-Learning-Based-Projects",
    liveLink: "#",
  },
  {
    title: "Flipkart Products Reviews Scraping with BeautifulSoup For Sentiment Analysis",
    description: "Scraping Flipkart data and performing sentiment analysis using BERT, RoBERTa, XGBoost, and BeautifulSoup.",
    tags: ["Python", "BeautifulSoup", "BERT", "RoBERTa", "XGBoost", "Sentiment Analysis"],
    github: "https://github.com/Stephen-Kamau/Machine-Learning-Based-Projects/blob/main/flipkart_scape_reviews/README.md"
  },
  {
    title: "Impact of Race & Age on Gender Classification using CNN and Transfer Learning (ResNet)",
    description: "Evaluate the gender classification performance of various models across different age and race groups using the UTKFace dataset.",
    tags: ["Python", "CNN", "ResNet", "Transfer Learning", "Image Classification"],
    github: "https://github.com/Stephen-Kamau/Machine-Learning-Based-Projects/blob/main/impact_of_race_age_on_gender_classification/README.md"
  },
  {
    title: "Product Recommendation Models and API",
    description: "A Flask-based API for providing product recommendations using a pre-trained Nearest Neighbours model. Includes web and REST API interfaces for generating recommendations.",
    tags: ["Python", "Flask", "API", "Machine Learning", "Recommendation System"],
    github: "https://github.com/Stephen-Kamau/Machine-Learning-Based-Projects/blob/main/walmart_prod_recomentation/README.md"
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveLink && (
                    <Button asChild variant="outline" className="gap-2">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Link className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="default">
            <a
              href="https://github.com/Stephen-Kamau/Machine-Learning-Based-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="w-4 h-4" />
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
