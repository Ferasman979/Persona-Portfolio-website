"use client";

import styles from './page.module.css';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import EndorsementCard from "@/components/EndorsementCard";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section id="about" title="About Me">
        <div className={styles.aboutGrid}>
          {/* Card 1: About Me */}
          <div className={styles.aboutCard}>
            <h3 className={styles.cardTitle}>About Me</h3>
            <p className={styles.cardText}>
              I am a Computer Science (Data Analytics) student at Sheridan College specializing in GenAI and ML development. I focus on architecting scalable data pipelines and productionizing Machine Learning models through robust MLOps practices. With hands-on experience in Cloud Computing (AWS/GCP/Azure) and Containerization (Docker/K8s), I transform complex data into high-performance, cost-efficient production services.
              <br /><br />
              Currently, I serve as an ML Developer and Research Assistant, leading the deployment of containerized ML services supporting over 20,000 active users. Outside of tech, I am passionate about staying active on the soccer field and experimenting with new recipes in the cooking kitchen.
            </p>
          </div>

          {/* Card 2: What I Do */}
          <div className={styles.aboutCard}>
            <h3 className={styles.cardTitle}>What I Do</h3>
            <ul className={styles.cardList}>
              <li className={styles.cardListItem}>
                <strong>Architect Scalable ML & Data Pipelines:</strong> Design and govern high-volume ingestion pipelines and automated validation workflows for RAG Agents and NLP systems.
              </li>
              <li className={styles.cardListItem}>
                <strong>Operationalize MLOps & CI/CD:</strong> Transform prototype ML engines into reproducible pipelines for automated feature engineering, training, and continuous evaluation.
              </li>
              <li className={styles.cardListItem}>
                <strong>Develop Full-Stack & API Solutions:</strong> Build and deploy REST APIs and full-stack applications that integrate machine learning into functional user experiences.
              </li>
              <li className={styles.cardListItem}>
                <strong>Optimize Infrastructure & Monitoring:</strong> Manage system reliability and scaling using tools like Grafana and Prometheus to maintain 99.9% up-time for production services.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Work Experience">
        <ExperienceCard
          role="ML Developer/Research Assistant"
          company="Sheridan College"
          location="Oakville, Ontario"
          date="Oct 2025 – PRESENT"
          points={[
            "Platform & Data Governance: Architected and governed highly scalable data schemas, ingestion pipelines, and automated validation workflows, specifically supporting productionized RAG Agents and sophisticated NLP systems.",
            "CI/CD & Reproducibility (Model Lifecycle): Designed and operationalized the end-to-end Machine Learning lifecycle (MLOps), transforming prototype ML engines into highly reproducible CI/CD pipelines that fully automate feature engineering, model training, and continuous evaluation.",
            "High-Volume Production Operations: Led the deployment, monitoring, and sustained operation of high-impact, containerized ML services, managing infrastructure reliability and scaling to support 20,000+ active users with 99.9% up-time and volume requirements.",
            "Cross-Functional Project Lead: Collaborated with designers and developers, defining operational requirements and implementing best practices to ensure models, vector stores, and data flows were inherently scalable, maintainable, and cost-efficient in production environments."
          ]}
        />
        <br />
        <ExperienceCard
          role="Data Analyst"
          company="Paradigm Electronics Inc."
          location="Mississauga, ON"
          date="May 2024 – Aug 2025"
          points={[
            "Data Pipeline Optimization & Automation: Engineered and scaled robust ETL pipelines and complex SQL transformations using Apache Airflow, resulting in the automated daily, Month-to-Date (MTD), and Year-to-Date (YTD) reporting for Global sales operations.",
            "Business Intelligence & Financial Impact: Developed and deployed key performance indicator (KPI) dashboards for Finance and Sales teams, incorporating automated anomaly detection that directly led to the recovery of $15,000 CAD in misplaced costs.",
            "Strategic Data Analysis & Revenue Growth: Conducted deep-dive data analysis on product quality metrics and sales performance indicators, providing actionable insights that fueled a documented 20% revenue growth for the organization in Q2, 2024.",
            "Full-Stack Development & API Engineering: Led full-stack development initiatives and deployed REST APIs as scalable solutions. Incorporated API scripting and monitored API performance to ensure reliable, real-time access to critical performance and operational metrics.",
            "Workflow Automation & Efficiency: Executed the deployment of automated batch jobs and background processes that streamlined sales contract management, successfully reducing contract processing time by 45% and improving overall sales workflow efficiency."
          ]}
        />
      </Section>

      <Section id="projects" title="Top Projects">
        <ProjectCard
          title="HR GenAI Application: Autonomous Recruiting Agent"
          description="A production-grade recruitment platform that orchestrates autonomous AI agents to validate candidates. It replaces traditional keyword matching with deep semantic analysis and web-based fact-checking."
          githubLink="https://github.com/Ferasman979/HRApp"
          demoLink="/demovid4website.mp4"
          technologies={["Next.js 16", "Node.js", "LangChain", "LangGraph", "OpenAI/Groq", "Azure Container Apps", "MongoDB"]}
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
        <ProjectCard
          title="Sports Analytics App: CV-Driven Shot Recommendation System"
          description="Production-deployed mobile app using computer vision and ML to analyze ball trajectories and deliver real-time shot recommendations and coach feedback."
          githubLink="https://github.com/TaimoorAleem/AICricketCoach_CapstoneProject"
          technologies={["Python", "OpenCV", "YOLOv8", "RandomForest", "Flutter", "Google Cloud Platform", "Cloud Run", "Pub/Sub"]}
          features={[
            {
              title: "🏆 Achievement",
              items: [
                "First Place for Capstone projects in data analytics stream."
              ]
            },
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

      <Section id="volunteering" title="Volunteering">
        <ExperienceCard
          role="Workshop Team Member"
          company="Google Developer Group Sheridan"
          date="May 2025 – Present"
          points={[
            "Supported and organized the design and delivery of community tech workshops, helping 100+ attendees gain hands-on experience with Google technologies."
          ]}
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
