import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import EndorsementCard from "@/components/EndorsementCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section id="about" title="About Me">
        <p>
          I am a passionate ML Developer and Research Assistant at Sheridan College, specializing in architecting scalable data schemas and automating machine learning lifecycles for production-grade RAG agents and NLP systems. My technical foundation relies on building reproducible CI/CD pipelines and managing high-availability containerized services.
          <br /><br />
          Previously, as a Data Analyst at Paradigm Electronics Inc., I engineered robust ETL pipelines, optimized global sales reporting, and developed full-stack applications that improved operational efficiency and drove revenue growth.
          <br /><br />
          Outside of tech, I stay active by playing soccer and fueling my curiosity through reading.
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <ProjectCard
          title="Sports Analytics App: CV-Driven Shot Recommendation System"
          description="Production-deployed mobile app using computer vision and ML to analyze ball trajectories and deliver real-time shot recommendations and coach feedback."
          githubLink="https://github.com/Ferasman979/AICC_CapstoneProject"
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
        <EndorsementCard
          name="Thamer (Tom) Khirdaji"
          role="Information Technology Manager at Paradigm | Anthem | Martin Logan Electronics"
          relationship="Thamer (Tom) managed Feras directly"
          date="September 5, 2025"
          text="I had the pleasure of supervising Feras Mahmood during his 16-month internship as a Data Analyst at Paradigm. Over this time, Feras consistently demonstrated strong technical skills, curiosity, and a commitment to learning. Feras worked on a wide range of projects, delivering dashboards in Zoho Analytics, writing SQL queries, and integrating data through RESTful APIs. He also contributed to automation efforts using PowerShell scripts, which streamlined some of our internal workflows. Beyond analytics, Feras showed initiative by building several web applications using JavaScript, Node.js, and React, expanding his impact beyond traditional data analysis. What stood out about Feras was his ability to quickly grasp new tools and technologies, and his willingness to take ownership of tasks. His contributions helped our team improve data visibility and operational efficiency. I am confident that his blend of analytical and development skills will serve him well in his future career, and I would gladly recommend him for any data or technology role he pursues."
        />
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Feel free to reach out to me via email or LinkedIn.
          <br />
          <a href="mailto:ferasmahmood999@gmail.com" style={{ color: 'var(--primary)', marginTop: '1rem', display: 'inline-block' }}>
            ferasmahmood999@gmail.com &rarr;
          </a>
        </p>
      </Section>
    </main>
  );
}
