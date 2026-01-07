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

      <Section id="about">
        <div className={styles.aboutGrid}>
          {/* Card 1: About Me */}
          <div className={styles.aboutCard}>
            <h3 className={styles.cardTitle}>My Profile</h3>
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
        <div className={styles.projectGrid}>
          <ProjectCard
            title="HR GenAI Application"
            status="Completed"
            description={
              <div className="space-y-4">
                <p>
                  <strong>AI-powered Applicant Tracking System (ATS)</strong> that automates candidate evaluation using
                  autonomous GenAI agents and tool-driven workflows. The platform uses <strong>LlamaParse</strong> to
                  extract structured data from complex resume PDFs, <strong>LangChain + LangGraph</strong> to orchestrate
                  multi-step agent reasoning, and <strong>Llama 3 (Groq)</strong> to perform contextual skill matching and
                  scoring via Retrieval-Augmented Generation (RAG).
                </p>
                <br />
                <p>
                  Autonomous research agents use <strong>Puppeteer</strong> to browse and analyze external candidate links
                  (GitHub, portfolios, LinkedIn), summarizing project complexity and validating experience claims. Resume
                  data, agent outputs, and evaluation results are stored in <strong>MongoDB</strong>, with change streams
                  triggering downstream processing stages in an event-driven pipeline.
                </p>
                <br />
                <p>
                  The system provides a real-time recruiter dashboard built with <strong>Next.js and React</strong>, enabling
                  job management, candidate pipeline tracking, and conversational resume querying. Full observability is
                  implemented using <strong>OpenTelemetry</strong>, with metrics collected by <strong>Prometheus</strong>,
                  distributed traces visualized in <strong>Tempo</strong>, and system health dashboards in{' '}
                  <strong>Grafana</strong>. Infrastructure is deployed on <strong>Azure Container Apps</strong> with
                  automated build and deployment pipelines via <strong>GitHub Actions</strong>, ensuring scalable,
                  cost-efficient AI processing.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  <br />
                  <strong>Deployed on:</strong> Microsoft Azure
                </p>
              </div>
            }
            githubLink="https://github.com/Ferasman979/HRApp"
            demoLink="/demovid4website.mp4"
            technologies={[
              "Next.js", "React", "TypeScript", "LangChain", "LangGraph", "Llama 3", "LlamaParse", "Puppeteer",
              "MongoDB", "Azure Container Apps", "GitHub Actions", "OpenTelemetry"
            ]}
            features={[
              {
                title: "🚀 Key Technical Highlights",
                items: [
                  <span key="1"><strong>Autonomous Agents:</strong> 'Processor' & 'Researcher' agents validate candidates via live web browsing.</span>,
                  <span key="2"><strong>RAG & LLMs:</strong> Contextual scoring using Llama 3 and structured extraction with LlamaParse.</span>,
                  <span key="3"><strong>Event-Driven:</strong> MongoDB change streams trigger asynchronous processing pipelines.</span>,
                  <span key="4"><strong>Observability:</strong> Full tracing and metrics via OpenTelemetry, Prometheus, & Grafana.</span>
                ]
              }
            ]}
          />
          <ProjectCard
            title="Sports Analytics App"
            status="Completed"
            description={
              <div className="space-y-4">
                <p>
                  <strong>Production-Grade Computer Vision Application</strong> developed to analyze cricket shot mechanics
                  in real-time. This mobile platform utilizes <strong>YOLOv8</strong> for high-speed object detection to
                  track ball trajectories and <strong>RandomForest</strong> classifiers to provide instant, data-driven
                  shot recommendations and corrective feedback to players.
                </p>
                <br />
                <p>
                  The system features a cross-platform mobile app built with <strong>Flutter</strong>, offering a seamless
                  user experience for recording execution and receiving detailed coaching insights. Inference is decoupled
                  via a serverless architecture on <strong>Google Cloud Platform (Cloud Run)</strong>, ensuring
                  cost-effective scaling to zero when idle, while <strong>Pub/Sub</strong> handles asynchronous event
                  messaging for smooth analysis workflows.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  <br />
                  <strong>Deployed on:</strong> Google Play Store (Internal Testing) & GCP
                </p>
              </div>
            }
            githubLink="https://github.com/TaimoorAleem/AICricketCoach_CapstoneProject"
            technologies={[
              "Python", "OpenCV", "YOLOv8", "RandomForest", "Flutter", "Google Cloud Platform", "Cloud Run", "Pub/Sub"
            ]}
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
                  "Designed end-to-end CV pipeline using YOLOv8 to detect ball trajectories.",
                  "Deployed scalable inference using Cloud Run."
                ]
              }
            ]}
          />
          <ProjectCard
            title="RetailStore Insights Chatbot"
            status="Completed"
            description={
              <div className="space-y-4">
                <p>
                  <strong>AI-Powered Business Intelligence Agent</strong> designed to bridge the gap between technical data
                  warehouses and non-technical business stakeholders. This application enables users to query complex
                  sales and inventory databases using natural language, providing instant, data-driven answers without
                  requiring SQL knowledge.
                </p>
                <br />
                <p>
                  Powered by <strong>Google Gemini Pro</strong> and <strong>LangChain</strong>, the system utilizes advanced
                  <strong>SQL Database Chains</strong> and <strong>Few-Shot Prompting</strong> to accurately map natural
                  language questions to executable MySQL queries. It handles complex reasoning, such as calculating net
                  revenue or filtering stock by brand, while ensuring data security through read-only access controls.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  <br />
                  <strong>Technologies:</strong> Google Gemini Pro, LangChain, Streamlit, Python, MySQL
                </p>
              </div>
            }
            githubLink="https://github.com/Ferasman979/RetailStore_Insights-Chatbot"
            technologies={[
              "Google Gemini Pro", "LangChain", "Streamlit", "Python", "MySQL"
            ]}
            features={[
              {
                title: "🚀 Key Features",
                items: [
                  "Natural Language to SQL conversion using Gemini Pro.",
                  "Few-Shot prompting for high-accuracy query generation.",
                  "Interactive Streamlit dashboard for real-time analytics."
                ]
              },
              {
                title: "💡 Impact",
                items: [
                  "Empowers non-technical staff with self-service analytics.",
                  "Reduces dependency on data teams for ad-hoc reporting.",
                  "Ensures data safety with read-only SQL execution."
                ]
              }
            ]}
          />
        </div>
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
        <br />
        <ExperienceCard
          role="Co-Organizer"
          company="Datathon (Google Developer Group)"
          date="Oct 2025"
          points={[
            "Co-organized a 300+ people hackathon 'Datathon' with Google Developer Group, managing logistics and mentor support.",
            <a
              key="datathon-link"
              href="https://gdg.community.dev/gdg-on-campus-sheridan-college-trafalgar-road-campus-oakville-canada/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                backgroundColor: 'var(--primary)',
                color: 'var(--background)',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              Event Link ↗
            </a>
          ]}
        />
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Feel free to reach out to me via email or LinkedIn.
          <br />
          <a href="mailto:mahmoofe@sheridancollege.ca" style={{ color: 'var(--primary)', marginTop: '1rem', display: 'inline-block' }}>
            mahmoofe@sheridancollege.ca &rarr;
          </a>
        </p>
      </Section>
    </main>
  );
}
