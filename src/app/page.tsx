import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section id="about" title="About Me">
        <p>
          I am a passionate GenAI Developer and Data Analyst with a strong background in Machine Learning.
          I specialize in building intelligent applications that solve real-world problems.
          [More content to be added]
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <ProjectCard
          title="Sports Analytics App: CV-Driven Shot Recommendation System"
          description="Production-deployed mobile app using computer vision and ML to analyze ball trajectories and deliver real-time shot recommendations and coach feedback."
          githubLink="https://github.com/Ferasman979/AICC_CapstoneProject"
          demoLink="/demo-video.mp4"
          technologies={["Python", "OpenCV", "YOLOv8", "RandomForest", "Google Cloud Platform", "Cloud Run", "Pub/Sub"]}
          features={[
            {
              title: "🚀 Impact Metrics",
              items: [
                "Deployed to production with ~10 active users.",
                "Real-time CV inference via serverless architecture.",
                "Cost-optimized ML inference using Cloud Run."
              ]
            },
            {
              title: "🔑 Key Contributions",
              items: [
                "Designed end-to-end CV pipeline using YOLOv8 to detect ball trajectories from video.",
                "Built and trained a shot recommendation model (RandomForest + GridSearchCV + SMOTE).",
                "Implemented coach feedback workflows for delivery-specific insights.",
                "Deployed scalable inference using Cloud Run with Pub/Sub notifications."
              ]
            }
          ]}
        />
        <ProjectCard
          title="HR GenAI Application: Autonomous Recruiting Agent"
          description="A production-grade recruitment platform that orchestrates autonomous AI agents to validate candidates. It replaces traditional keyword matching with deep semantic analysis and web-based fact-checking."
          githubLink="https://github.com/Ferasman979/HRApp"
          demoLink="/demovid4website.mp4"
          technologies={["Next.js 16", "Node.js", "LangChain", "OpenAI/Groq", "Azure Container Apps", "MongoDB"]}
          features={[
            {
              title: "🚀 Key Features",
              items: [
                "Unified Recruiter Dashboard with real-time Kanban board.",
                "Autonomous 'Processor' & 'Researcher' agents for candidate validation.",
                "RAG-powered candidate chat for deep insights.",
                "Mission Control for live agent observability."
              ]
            },
            {
              title: "🛡️ Robust Architecture",
              items: [
                "Event-driven microservices design.",
                "Custom API rate limiting for chatbot stability.",
                "Scalable Azure Container Apps deployment."
              ]
            }
          ]}
        />
      </Section>



      <Section id="endorsements" title="Endorsements">
        <p>Coming soon...</p>
        {/* Endorsements will go here */}
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Feel free to reach out to me via email or LinkedIn.
          <br />
          <a href="mailto:example@example.com" style={{ color: 'var(--primary)', marginTop: '1rem', display: 'inline-block' }}>
            Get in touch &rarr;
          </a>
        </p>
      </Section>
    </main>
  );
}
