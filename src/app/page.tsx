"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import EndorsementCard from "@/components/EndorsementCard";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);

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
              I am a final-year Computer Science student at Sheridan College specializing in GenAI and ML development. Currently, I serve as an ML Developer and Research Assistant, leading the deployment of machine learning services that support over 20,000 active users. I am particularly driven by engineering data pipelines that transform manual verification into automated, scalable workflows.
              <br /><br />
              Outside work, I play soccer and love experimenting with new recipes in the kitchen.
            </p>
            <div className={styles.profileImages}>
              <div className={styles.profileImageContainer}>
                <Image
                  src="/hobby-food.jpg"
                  alt="Food hobby"
                  width={200}
                  height={150}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className={styles.profileImageContainer}>
                <Image
                  src="/hobby-soccer.jpg"
                  alt="Soccer hobby"
                  width={200}
                  height={150}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: What I Do */}
          <div className={styles.aboutCard}>
            <h3 className={styles.cardTitle}>What I Do</h3>
            <ul className={styles.cardList}>
              <li className={styles.cardListItem}>
                <strong>Architect Scalable ML & Data Pipelines:</strong> Design and govern high-volume ingestion engines and automated validation workflows for RAG Agents and complex NLP systems.
              </li>
              <li className={styles.cardListItem}>
                <strong>Operationalize MLOps & CI/CD:</strong> Orchestrate end-to-end ML lifecycles using GitHub Actions and Apache Airflow to transform prototypes into reproducible pipelines for automated feature engineering, training, and continuous evaluation.
              </li>
              <li className={styles.cardListItem}>
                <strong>Deploy APIs & Webhooks:</strong> Build and deploy robust ML-integrated webhooks and REST APIs as serverless services via Google Cloud Run and Azure Container Apps; implemented and validated ML/GenAI microservices using k3s for lightweight, high-performance local and edge testing.
              </li>
              <li className={styles.cardListItem}>
                <strong>Infrastructure & Reliability Engineering:</strong> Manage system scaling using Terraform for Infrastructure as Code (IaC) and maintain 99.9% uptime through a deep observability stack including Prometheus, Grafana, and Tempo for distributed tracing.
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
            <span key="1"><strong>Platform & Data Governance:</strong> Architected and governed highly scalable data schemas, ingestion pipelines, and automated validation workflows, specifically supporting productionized RAG Agents and sophisticated NLP systems.</span>,
            <span key="2"><strong>CI/CD & Reproducibility (Model Lifecycle):</strong> Designed and operationalized the end-to-end Machine Learning lifecycle (MLOps), transforming prototype ML engines into highly reproducible CI/CD pipelines that fully automate feature engineering, model training, and continuous evaluation.</span>,
            <span key="3"><strong>High-Volume Production Operations:</strong> Led the deployment, monitoring, and sustained operation of high-impact, containerized ML services, managing infrastructure reliability and scaling to support 20,000+ active users with 99.9% up-time and volume requirements.</span>,
            <span key="4"><strong>Cross-Functional Project Lead:</strong> Collaborated with designers and developers, defining operational requirements and implementing best practices to ensure models, vector stores, and data flows were inherently scalable, maintainable, and cost-efficient in production environments.</span>
          ]}
        />
        <br />
        <ExperienceCard
          role="Data Analyst"
          company="Paradigm Electronics Inc."
          location="Mississauga, ON"
          date="May 2024 – Aug 2025"
          points={[
            <span key="1"><strong>Data Pipeline Optimization & Automation:</strong> Engineered and scaled robust ETL pipelines and complex SQL transformations using Apache Airflow, resulting in the automated daily, Month-to-Date (MTD), and Year-to-Date (YTD) reporting for Global sales operations.</span>,
            <span key="2"><strong>Business Intelligence Reporting:</strong> Conducted deep-dive analysis using SQL to develop and deploy key performance indicator (KPI) dashboards for Finance and Sales teams, incorporating automated anomaly detection that directly led to the recovery of $15,000 CAD in misplaced costs.</span>,
            <span key="3"><strong>Strategic Data Analysis & Revenue Growth:</strong> Conducted deep-dive data analysis on product quality metrics and sales performance indicators, providing actionable insights that fueled a documented 20% revenue growth for the organization in Q2, 2024.</span>,
            <span key="4"><strong>Full-Stack Development & API Engineering:</strong> Led full-stack development initiatives and deployed REST APIs as scalable solutions. Incorporated API scripting and monitored API performance to ensure reliable, real-time access to critical performance and operational metrics.</span>,
            <span key="5"><strong>Deploying Background jobs (cron/ps):</strong> Executed the deployment of automated batch jobs and background processes that streamlined sales contract management, successfully reducing contract processing time by 45% and improving overall sales workflow efficiency.</span>
          ]}
        />
      </Section>

      <Section id="projects" title="Top Projects">
        <div className={styles.projectGrid}>
          <ProjectCard
            title="HR / Talent Acquisition App"
            status="Completed"
            description={
              <div className="space-y-4">
                <p>
                  <strong>Smart Recruitment Platform</strong> that streamlines the hiring process by automatically
                  analyzing resumes and verifying candidate backgrounds.
                </p>
                <br />
                <p>
                  The system employs <strong>Autonomous AI Agents</strong> that act like digital recruiters. They use
                  web browsing tools to verify candidate claims, cross-reference experience on external sites, and
                  conduct research to present a validated report to hiring managers.
                </p>
                <br />
                <p>
                  Built for scale and reliability, the system features a full observability stack with <strong>Prometheus</strong> (metrics),
                  <strong>Grafana</strong> (dashboards), and <strong>Tempo</strong> (distributed tracing). The infrastructure is fully containerized with
                  <strong>Docker</strong> (featuring "baked-in" models) and powered by <strong>MongoDB</strong> for event-driven persistence.
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
                title: "Key Technical Highlights",
                items: [
                  <span key="1"><strong>Micro-Service Architecture:</strong> Decoupled agents using Model Context Protocol (MCP).</span>,
                  <span key="2"><strong>Production Observability:</strong> Full metric tracking with Prometheus & Grafana.</span>,
                  <span key="3"><strong>Containerization:</strong> Optimized Docker builds with pre-loaded models for performance.</span>,
                  <span key="4"><strong>Event-Driven Design:</strong> Asynchronous pipelines triggered by database events.</span>
                ]
              }
            ]}
          />
          <ProjectCard
            title="Workforce Productivity ML Pipeline & Insights"
            status="Completed"
            description={
              <div className="space-y-4">
                <p>
                  <strong>A data-driven solution designed to help HR teams optimize workforce efficiency and well-being.</strong> This system provides actionable insights into employee performance patterns without requiring technical expertise.
                </p>
                <br />
                <p>
                  Under the hood, it operates as an <strong>End-to-End Production-Grade ML Pipeline</strong> on the <strong>Databricks</strong> platform. It leverages a <strong>Medallion Architecture</strong> (Bronze → Silver → Gold) using <strong>Spark</strong> and <strong>Delta Lake</strong> for robust data processing.
                </p>
                <br />
                <p>
                  The system uses <strong>SparkML</strong> for predictive modeling and <strong>MLflow</strong> for complete lifecycle management. Data governance is handled by <strong>Unity Catalog</strong>, ensuring security and lineage, while insights are delivered via seamless <strong>Power BI</strong> integration.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  <br />
                  <strong>Business Impact:</strong> Identified high-potential employees to mitigate burnout risks and
                  automated modeling workflows for executive insights.
                </p>
              </div>
            }
            githubLink="https://github.com/Ferasman979/Employee-Performance-Lakehouse/tree/main"
            demoLink="/databricks_demo.mp4"
            technologies={[
              "Databricks", "Spark (PySpark/SQL)", "Delta Lake", "MLflow", "Unity Catalog", "Power BI"
            ]}
            features={[
              {
                title: "Technical Highlights",
                items: [
                  <span key="1"><strong>Medallion Architecture:</strong> Multi-stage pipeline with Liquid Clustering.</span>,
                  <span key="2"><strong>ML Lifecycle:</strong> SparkML modeling with MLflow versioning.</span>,
                  <span key="3"><strong>Governance:</strong> Unity Catalog for security and lineage.</span>,
                  <span key="4"><strong>Scalable Inference:</strong> Batch processing with Power BI integration.</span>
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
                title: "Achievement",
                items: [
                  "First Place for Capstone projects in data analytics stream."
                ]
              },
              {
                title: "Impact Metrics",
                items: [
                  "Deployed to production with ~10 active users.",
                  "Real-time CV inference via serverless architecture.",
                  "Cost-optimized ML inference using Cloud Run."
                ]
              },
              {
                title: "Key Contributions",
                items: [
                  "Designed end-to-end CV pipeline using YOLOv8 to detect ball trajectories.",
                  "Deployed scalable inference using Cloud Run."
                ]
              }
            ]}
          />
          <ProjectCard
            title="C++ Distributed Gradient Sync-Engine (POC)"
            status="In Progress"
            description={
              <div className="space-y-4">
                <p>
                  <strong>High-Performance Distributed Training Infrastructure</strong> designed to demonstrate gradient synchronization (All-Reduce)
                  across multiple nodes using <strong>C++17</strong> and <strong>LibTorch</strong>. This Proof of Concept (POC) showcases how to build scalable
                  ML systems from scratch without relying on high-level Python frameworks.
                </p>
                <br />
                <p>
                  The engine leverages <strong>c10d</strong> for distributed communication (NCCL for CUDA, Gloo for CPU) and implements a custom
                  <strong>C++ Dataset</strong> loader for tokenized text. It supports loading <strong>TorchScript</strong> models (traced BERT) directly
                  into the C++ runtime for high-efficiency inference and training loops.
                </p>
                <br />
                <p>
                  Infrastructure is fully containerized with a multi-stage <strong>Docker</strong> build, optimized for deployment on <strong>Google Cloud Vertex AI</strong>
                  using Spot GPUs to minimize costs.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  <br />
                  <strong>Deployed on:</strong> Google Cloud Vertex AI
                </p>
              </div>
            }
            githubLink="https://github.com/Ferasman979/Sync-Engine"
            technologies={[
              "C++17", "LibTorch", "Google Cloud Vertex AI", "Docker", "CMake", "TorchScript", "c10d"
            ]}
            features={[
              {
                title: "Technical Highlights",
                items: [
                  <span key="1"><strong>Distributed Backend:</strong> Implemented gradient sync using c10d (NCCL/Gloo).</span>,
                  <span key="2"><strong>High-Performance Loading:</strong> Custom C++ dataset for tokenized text processing.</span>,
                  <span key="3"><strong>Cloud Native:</strong> Optimized Docker images for Vertex AI execution.</span>,
                  <span key="4"><strong>Hybrid Workflow:</strong> Traced PyTorch models (Python) running in C++ environment.</span>
                ]
              }
            ]}
          />
          {showAllProjects && (
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
                  title: "Key Features",
                  items: [
                    "Natural Language to SQL conversion using Gemini Pro.",
                    "Few-Shot prompting for high-accuracy query generation.",
                    "Interactive Streamlit dashboard for real-time analytics."
                  ]
                },
                {
                  title: "Impact",
                  items: [
                    "Empowers non-technical staff with self-service analytics.",
                    "Reduces dependency on data teams for ad-hoc reporting.",
                    "Ensures data safety with read-only SQL execution."
                  ]
                }
              ]}
            />
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--primary)',
              color: 'var(--background)',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'opacity 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {showAllProjects ? 'Show Less' : 'Show More Projects'}
            <span>{showAllProjects ? '↑' : '↓'}</span>
          </button>
        </div>
      </Section>

      <Section id="endorsements" title="Endorsements">
        <EndorsementCard
          name="Tom Khirdaji"
          role="Information Technology Manager at Paradigm | Anthem | Martin Logan Electronics"
          relationship="Tom managed Feras directly"
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
          <a href="mailto:ferasmahmood999@gmail.com" style={{ color: 'var(--primary)', marginTop: '1rem', display: 'inline-block' }}>
            ferasmahmood999@gmail.com &rarr;
          </a>
        </p>
      </Section>
    </main >
  );
}
