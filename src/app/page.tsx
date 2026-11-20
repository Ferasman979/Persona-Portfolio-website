"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import EndorsementCard from "@/components/EndorsementCard";
import ExperienceCard from "@/components/ExperienceCard";
import CertificationCard from "@/components/CertificationCard";
import { PendingScroll } from "@/components/SectionLink";
import SlideGallery from "@/components/SlideGallery";
import ProjectsView from "@/components/ProjectsView";
import { CognivisionAgentLoop, CognivisionArchitecture } from "@/components/diagrams/CognivisionDiagrams";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <>
      <a className="skipLink" href="#main-content">Skip to main content</a>
      <Navbar />
      <PendingScroll />
      <main id="main-content" className={styles.mainContainer}>
        <Hero />

      <div id="about" className={styles.profileExperienceWrapper}>
        <div className={styles.profileColumn}>
          <h2 className={styles.sectionTitle}>My Profile</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <p className={styles.cardText}>
                I am a Computer Science graduate of Sheridan College. I work as an AI Researcher, specializing in developing on-prem inference engines and AI training workflows across NVIDIA workstations (H100 and A100 GPUs). My work includes leading the deployment of AI infra and machine learning services that support 10,000-15,000 active users. I am particularly driven by engineering data pipelines that transform manual verification into automated, scalable workflows.
                <br /><br />
                Outside work, I play soccer and love experimenting with new recipes in the kitchen.
              </p>
            </div>
          </div>
        </div>

        <div id="experience" className={styles.experienceColumn}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div className={styles.experienceCardsContainer}>
            <ExperienceCard
              role="AI Researcher"
              company="Sheridan College"
              location="Oakville, Ontario"
              date="Oct 2025 – PRESENT"
              alwaysExpanded={true}
            />
            <br />
            <ExperienceCard
              role="Data Analyst"
              company="Paradigm Electronics Inc."
              location="Mississauga, ON"
              date="May 2024 – Aug 2025"
              alwaysExpanded={true}
            />
          </div>
        </div>
      </div>

      <Section id="projects" title="Top Projects">
        <ProjectsView
          className={styles.projectGrid}
          activeClassName={styles.projectGridOpen}
          labelClassName={styles.otherProjectsLabel}
        >
          <ProjectCard
            title="CogniVision"
            summary={
              <p>
                Voice-driven clinical platform for optometrists. Clinicians dictate during an evaluation and an{' '}
                <strong>AI agent</strong> fills in the forms, pausing for the clinician to approve every change before
                it reaches the patient&apos;s chart.
              </p>
            }
            media={<CognivisionAgentLoop />}
            details={<CognivisionArchitecture />}
            githubLink="https://github.com/Ferasman979/Cognivision"
            technologies={[
              "React", "TypeScript", "Node.js", "Python", "LangGraph", "Amazon Bedrock", "Amazon Transcribe",
              "PostgreSQL", "AWS Fargate", "Terraform", "Langfuse"
            ]}
            features={[
              {
                title: "Agentic Features",
                items: [
                  <span key="1"><strong>Voice to form:</strong> dictation is transcribed live and stays editable before the agent sees it.</span>,
                  <span key="2"><strong>Structured extraction:</strong> the agent maps speech to each form&apos;s fields and proposes only what changed.</span>,
                  <span key="3"><strong>Human in the loop:</strong> the agent pauses for clinician approval; nothing is saved without sign-off.</span>,
                  <span key="4"><strong>Duplicate check:</strong> flags a likely existing patient before a new record is created.</span>,
                  <span key="5"><strong>Learns from rejections:</strong> rejected suggestions tune the agent&apos;s instructions, and each change must pass an evaluation gate before it goes live.</span>,
                  <span key="6"><strong>Private by design:</strong> patient details are redacted from AI traces.</span>
                ]
              },
              {
                title: "Problems It Solves for Optometrists",
                items: [
                  "Less typing during and after evaluations, so more time with the patient.",
                  "Medical history and evaluation results in one place, with a full audit trail of every change.",
                  "Flags missing required tests for a service code before a visit is billed.",
                  "Tracks insurance, charges and payments per patient.",
                  "Role-based access for admins, billing staff, clinicians and team members."
                ]
              },
              {
                title: "Clinic & Community",
                items: [
                  "Built for optometrists at Oakville Centre for Vision.",
                  <span key="ig">
                    Follow CogniVision on Instagram:{' '}
                    <a
                      href="https://www.instagram.com/cogniviision/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      @cogniviision ↗
                    </a>
                  </span>
                ]
              }
            ]}
          />
          <ProjectCard
            title="OptiMulti-Video"
            status="Completed"
            summary={
              <p>
                Multimodal video-text model with a <strong>custom CUDA kernel</strong> for low-latency fusion, trained
                across GPUs with FSDP.
              </p>
            }
            description={
              <div className="space-y-4">
                <p>
                  <strong>High-Performance Multimodal Attention with Custom CUDA Kernels</strong>. This project demonstrates a vertical slice of a high-performance Multimodal AI system.
                </p>
                <br />
                <p>
                  It features a <strong>Custom CUDA Kernel</strong> written in CUDA C++ for low-latency fusion of video and text embeddings, integrated into a compact <strong>Video-Text Transformer</strong> architecture.
                </p>
                <br />
                <p>
                  The training pipeline utilizes <strong>Fully Sharded Data Parallel (FSDP)</strong> to distribute workloads across dual T4 GPUs, optimizing for both performance and resource accessibility.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  <br />
                  <strong>Tested on:</strong> Google Colab / Kaggle (Dual T4 GPUs)
                </p>
              </div>
            }
            githubLink="https://github.com/Ferasman979/OptiMulti-Video"
            technologies={[
              "CUDA C++", "PyTorch", "FSDP", "Python", "Google Colab", "Transformer"
            ]}
            features={[
              {
                title: "Key Technical Highlights",
                items: [
                  <span key="1"><strong>Custom CUDA Kernel:</strong> Fused &quot;Normalize &amp; Project&quot; for low latency.</span>,
                  <span key="2"><strong>Distributed Training:</strong> FSDP implementation for multi-GPU setups.</span>,
                  <span key="3"><strong>Multimodal Fusion:</strong> Video-Text Transformer architecture.</span>
                ]
              }
            ]}
          />
          <ProjectCard
            title="OFC Data Platform"
            summary={
              <p>
                Data platform for a futsal player-development program: wearable heel-sensor data from{' '}
                <strong>1,790 players</strong> across <strong>2,980 sessions</strong>, stored privately on an on-prem{' '}
                <strong>NVIDIA DGX Station</strong>, with a vision-AI pipeline that reads matches straight from camera
                footage.
              </p>
            }
            details={
              <SlideGallery
                slides={[
                  {
                    src: "/images/ofc/ofc-platform-overview.webp",
                    alt: "OFC Data Platform overview: futsal at a glance, what the TROPS sensors have captured, the limits of heel sensors, and the web platform.",
                    caption: "Sport, sensors and web platform",
                  },
                  {
                    src: "/images/ofc/ofc-data-encryption.webp",
                    alt: "Data encryption flow: names are tokenized in the reviewer's browser, the name list is encrypted, and only codes and scores reach the database on the DGX Station.",
                    caption: "Keeping player identities private",
                  },
                  {
                    src: "/images/ofc/ofc-vision-ai.webp",
                    alt: "Vision AI results on unseen footage, with the 2D top-down radar and 3D billboard views of a futsal match.",
                    caption: "Vision AI: reading a futsal match",
                  },
                ]}
              />
            }
            technologies={[
              "Next.js", "TypeScript", "Python", "PostgreSQL", "Docker Compose", "NVIDIA DGX Station", "Pyodide",
              "Terraform", "AWS CloudFront", "Computer Vision"
            ]}
            features={[
              {
                title: "The Data",
                items: [
                  "~35K player appearances over 10 terms (Fall 2023 – Summer 2026).",
                  "28 metrics per reading: an overall rating, 6 skill scores and 21 raw measurements such as distance, sprints and touches.",
                  "A web platform shows clients and coaches progress session by session."
                ]
              },
              {
                title: "Privacy by Design",
                items: [
                  "Names, birth dates and IDs become random tokens before data leaves the reviewer's browser.",
                  "The code-to-name list is locked with AES-256; each approved reviewer gets their own RSA-sealed key.",
                  "The database on the DGX only ever sees tokens and scores, and a leak guard blocks names in uploads."
                ]
              },
              {
                title: "On-Prem Platform",
                items: [
                  "The web app, PostgreSQL and data pipelines run in Docker on the DGX Station, not in the cloud.",
                  "Reviewers build rosters in their own browser (Python via Pyodide), so name-bearing files never reach the server.",
                  "Users reach it through an outbound-only tunnel behind CloudFront (Terraform-managed), so the DGX opens no inbound ports."
                ]
              },
              {
                title: "Vision AI",
                items: [
                  "Detector fine-tuned on a single 23-minute session with automatically generated labels, in ~36 minutes in-house.",
                  "On unseen footage: 33% less player-count flicker, 17% fewer ID switches and the ball found 25% more often.",
                  "Maps players to the court to within ~1 ft, as a 2D top-down radar and a 3D replayable view."
                ]
              }
            ]}
          />
          {showAllProjects && (
            <>
              <ProjectCard
                title="HR / Talent Acquisition App"
                status="Completed"
                summary={
                  <p>
                    Recruitment platform where <strong>autonomous AI agents</strong> analyze resumes and verify candidate
                    claims on the web before a hiring manager reviews them.
                  </p>
                }
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
                      <strong>Docker</strong> (featuring &quot;baked-in&quot; models) and powered by <strong>MongoDB</strong> for event-driven persistence.
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
                summary={
                  <p>
                    End-to-end ML pipeline on <strong>Databricks</strong> that helps HR teams spot performance patterns
                    and burnout risk, with insights delivered in Power BI.
                  </p>
                }
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
                title="RetailStore Insights Chatbot"
                status="Completed"
                summary={
                  <p>
                    Natural-language business-intelligence agent: staff ask questions in plain English and get answers
                    from sales and inventory data, with no SQL required.
                  </p>
                }
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
            </>
          )}
        </ProjectsView>

        <div className={styles.showMoreWrap}>
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className={styles.showMoreButton}
            aria-expanded={showAllProjects}
          >
            {showAllProjects ? 'Show fewer projects' : 'Show more projects'}
          </button>
        </div>
      </Section>

      <Section id="blog" title="Writing">
        <article className={styles.blogPreview}>
          <div>
            <p className={styles.blogMeta}>
              Infrastructure · <time dateTime="2026-09-13T19:51:00-04:00">September 13, 2026 at 7:51 PM EDT</time>
            </p>
            <h3 className={styles.blogTitle}>Managed LLM APIs vs. Your Own vLLM Server</h3>
            <p className={styles.blogExcerpt}>
              Managed APIs and self-hosted inference solve different workload shapes. The useful comparison starts with utilization, repeated context, latency, and operational control, not ideology.
            </p>
          </div>
          <Link href="/blog/managed-llm-apis-vs-vllm" className={styles.inlineLink}>
            Read the article <span aria-hidden="true">→</span>
          </Link>
        </article>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className={styles.certificationGrid}>
          <CertificationCard
            name="Azure Databricks Data Engineer Associate"
            issuer="Microsoft"
            status="Certified"
            logoSrc="/azure-databricks-badge.png"
            logoAlt="Microsoft Certified Associate badge"
            href="/certificate/azure-databricks"
          />
          <CertificationCard
            name="Certified Kubernetes Administrator (CKA)"
            issuer="CNCF"
            status="In Progress"
            inProgress={true}
            logoSrc="/kubernetes-logo.svg"
            logoAlt="Kubernetes logo"
          />
        </div>
      </Section>

      <Section id="endorsements" title="Endorsements">
        <EndorsementCard
          name="Tom Khirdaji"
          role="Information Technology Manager at Paradigm | Anthem | Martin Logan Electronics"
          relationship="Tom managed Feras directly"
          date="September 5, 2025"
          text="I had the pleasure of supervising Feras Mahmood during his 16-month internship as a Data Analyst at Paradigm. Over this time, Feras consistently demonstrated strong technical skills, curiosity, and a commitment to learning. Feras worked on a wide range of projects, delivering KPI dashboards, writing SQL queries, and integrating data through RESTful APIs. He also contributed to automation efforts using PowerShell scripts, which streamlined some of our internal workflows. Beyond analytics, Feras showed initiative by building several web applications using JavaScript, Node.js, and React, expanding his impact beyond traditional data analysis. What stood out about Feras was his ability to quickly grasp new tools and technologies, and his willingness to take ownership of tasks. His contributions helped our team improve data visibility and operational efficiency. I am confident that his blend of analytical and development skills will serve him well in his future career, and I would gladly recommend him for any data or technology role he pursues."
        />
        <EndorsementCard
          name="Frank Pugliano"
          role="Manager at Paradigm Electronics"
          relationship="Frank worked with Feras"
          date="August 2025"
          text="Feras played a pivotal role in developing high-impact internal web applications for our team, along with dashboards that gave us significantly greater visibility into client documents and key financial metrics. These tools made a real difference in how our team operated day-to-day."
        />
      </Section>

      <Section id="volunteering" title="Volunteering">
        <ExperienceCard
          role="Workshop Team Member"
          company="Google Developer Group Sheridan"
          date="May 2025 – April 2026"
          alwaysExpanded={true}
          points={[
            "Supported and organized the design and delivery of community tech workshops, helping 100+ attendees gain hands-on experience with Google technologies."
          ]}
        />
        <br />
        <ExperienceCard
          role="Co-Organizer"
          company="Datathon (Google Developer Group)"
          date="Oct 2025"
          alwaysExpanded={true}
          points={[
            "Co-organized a 300+ people hackathon 'Datathon' with Google Developer Group, managing logistics and mentor support.",
            <a
              key="datathon-link"
              href="https://gdg.community.dev/gdg-on-campus-sheridan-college-trafalgar-road-campus-oakville-canada/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
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
          <a href="mailto:ferasmahmood999@gmail.com" className={styles.inlineLink}>
            ferasmahmood999@gmail.com &rarr;
          </a>
        </p>
      </Section>
      </main>
    </>
  );
}
