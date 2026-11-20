import styles from './Diagrams.module.css';

/** The clinician-in-the-loop agent cycle, shown on the collapsed Cognivision card. */
export const CognivisionAgentLoop = () => (
    <figure className={styles.figure}>
        <svg
            className={styles.svg}
            viewBox="0 0 340 200"
            role="img"
            aria-labelledby="cv-loop-title cv-loop-desc"
        >
            <title id="cv-loop-title">CogniVision agentic loop</title>
            <desc id="cv-loop-desc">
                A four-step cycle: the clinician dictates, the AI agent extracts form fields, the clinician reviews and
                approves or rejects each change, and rejected suggestions are used to tune the agent before the next pass.
            </desc>
            <defs>
                <marker id="cv-loop-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" className={styles.arrowHead} />
                </marker>
            </defs>

            {/* boxes */}
            <rect x="8" y="8" width="144" height="66" rx="10" className={styles.box} />
            <rect x="188" y="8" width="144" height="66" rx="10" className={styles.accentBox} />
            <rect x="188" y="126" width="144" height="66" rx="10" className={styles.box} />
            <rect x="8" y="126" width="144" height="66" rx="10" className={styles.box} />

            <text x="22" y="34" className={styles.step}>1</text>
            <text x="36" y="34" className={styles.title}>Dictate</text>
            <text x="22" y="54" className={styles.sub}>Voice → live, editable</text>
            <text x="22" y="67" className={styles.sub}>transcript</text>

            <text x="202" y="34" className={styles.step}>2</text>
            <text x="216" y="34" className={styles.title}>Extract</text>
            <text x="202" y="54" className={styles.sub}>Agent proposes only the</text>
            <text x="202" y="67" className={styles.sub}>form fields that changed</text>

            <text x="202" y="152" className={styles.step}>3</text>
            <text x="216" y="152" className={styles.title}>Review</text>
            <text x="202" y="172" className={styles.sub}>Clinician approves, then</text>
            <text x="202" y="185" className={styles.sub}>it&apos;s saved to the chart</text>

            <text x="22" y="152" className={styles.step}>4</text>
            <text x="36" y="152" className={styles.title}>Learn</text>
            <text x="22" y="172" className={styles.sub}>Rejections tune the</text>
            <text x="22" y="185" className={styles.sub}>agent, behind eval gates</text>

            {/* clockwise arrows */}
            <line x1="152" y1="41" x2="186" y2="41" className={styles.arrow} markerEnd="url(#cv-loop-arrow)" />
            <line x1="260" y1="74" x2="260" y2="124" className={styles.arrow} markerEnd="url(#cv-loop-arrow)" />
            <line x1="188" y1="159" x2="154" y2="159" className={styles.arrow} markerEnd="url(#cv-loop-arrow)" />
            <line x1="80" y1="126" x2="80" y2="76" className={styles.arrow} markerEnd="url(#cv-loop-arrow)" />

            {/* hub */}
            <circle cx="170" cy="100" r="21" className={styles.hub} />
            <text x="170" y="97" textAnchor="middle" className={styles.hubText}>AI</text>
            <text x="170" y="109" textAnchor="middle" className={styles.hubText}>agent</text>
        </svg>
        <figcaption className={styles.caption}>The agentic loop: nothing reaches a chart without clinician sign-off.</figcaption>
    </figure>
);

/** Deliberately high-level architecture, shown when the card is expanded. */
export const CognivisionArchitecture = () => (
    <figure className={styles.figure}>
        <svg
            className={styles.svg}
            viewBox="0 0 340 312"
            role="img"
            aria-labelledby="cv-arch-title cv-arch-desc"
        >
            <title id="cv-arch-title">CogniVision architecture overview</title>
            <desc id="cv-arch-desc">
                The clinic browser loads the web app from a CDN. Requests go to an API gateway that handles sign-in, roles
                and the audit log, and stores data in an encrypted patient database. The gateway calls a private AI agent
                service, which uses managed speech-to-text and a large language model. Traces and evaluation gates run
                alongside with patient details redacted. Everything runs on serverless containers in the cloud.
            </desc>
            <defs>
                <marker id="cv-arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" className={styles.arrowHead} />
                </marker>
                <marker id="cv-arch-arrow-muted" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" className={styles.mutedHead} />
                </marker>
            </defs>

            {/* row 1: client */}
            <rect x="90" y="6" width="160" height="40" rx="10" className={styles.box} />
            <text x="170" y="24" textAnchor="middle" className={styles.title}>Clinic browser</text>
            <text x="170" y="38" textAnchor="middle" className={styles.sub}>voice + forms</text>

            {/* row 2: CDN */}
            <rect x="90" y="70" width="160" height="40" rx="10" className={styles.box} />
            <text x="170" y="88" textAnchor="middle" className={styles.title}>Web app</text>
            <text x="170" y="102" textAnchor="middle" className={styles.sub}>served over a secure CDN</text>
            <line x1="170" y1="46" x2="170" y2="68" className={styles.arrow} markerEnd="url(#cv-arch-arrow)" />

            {/* row 3: gateway + agent */}
            <rect x="6" y="136" width="150" height="48" rx="10" className={styles.box} />
            <text x="81" y="156" textAnchor="middle" className={styles.title}>API gateway</text>
            <text x="81" y="172" textAnchor="middle" className={styles.sub}>sign-in · roles · audit log</text>

            <rect x="184" y="136" width="150" height="48" rx="10" className={styles.accentBox} />
            <text x="259" y="156" textAnchor="middle" className={styles.title}>AI agent service</text>
            <text x="259" y="172" textAnchor="middle" className={styles.sub}>private, not internet-facing</text>

            <path d="M150,110 L110,134" className={styles.arrow} markerEnd="url(#cv-arch-arrow)" />
            <line x1="156" y1="160" x2="182" y2="160" className={styles.arrow} markerEnd="url(#cv-arch-arrow)" markerStart="url(#cv-arch-arrow)" />

            {/* row 4: data + models */}
            <rect x="6" y="210" width="150" height="48" rx="10" className={styles.box} />
            <text x="81" y="230" textAnchor="middle" className={styles.title}>Patient database</text>
            <text x="81" y="246" textAnchor="middle" className={styles.sub}>encrypted, private network</text>

            <rect x="184" y="210" width="150" height="48" rx="10" className={styles.box} />
            <text x="259" y="230" textAnchor="middle" className={styles.title}>Managed AI models</text>
            <text x="259" y="246" textAnchor="middle" className={styles.sub}>speech-to-text · LLM</text>

            <line x1="81" y1="184" x2="81" y2="208" className={styles.arrow} markerEnd="url(#cv-arch-arrow)" />
            <line x1="259" y1="184" x2="259" y2="208" className={styles.arrow} markerEnd="url(#cv-arch-arrow)" />

            {/* row 5: observability */}
            <rect x="6" y="276" width="328" height="30" rx="10" className={styles.box} />
            <text x="170" y="295" textAnchor="middle" className={styles.sub}>Tracing &amp; eval gates, with patient details redacted</text>
            <line x1="259" y1="258" x2="259" y2="274" className={styles.dashed} markerEnd="url(#cv-arch-arrow-muted)" />
        </svg>
        <figcaption className={styles.caption}>High-level view. Everything runs on serverless cloud containers.</figcaption>
    </figure>
);

/** How a voice turn is traced in Langfuse, and where PII is redacted on the way. */
export const CognivisionTracing = () => (
    <figure className={styles.figure}>
        <svg
            className={styles.svg}
            viewBox="0 0 340 430"
            role="img"
            aria-labelledby="cv-trace-title cv-trace-desc"
        >
            <title id="cv-trace-title">CogniVision Langfuse tracing and PII redaction</title>
            <desc id="cv-trace-desc">
                Each voice turn in the agent produces one trace. Before any trace data leaves the service, three redaction
                layers run: field-name rules, pattern matching, and named-entity detection. If redaction fails, the payload
                is replaced with a redaction marker. The redacted trace is stored in self-hosted Langfuse with a session id, a
                salted-hash user id and tags, and scores for latency, first-token time, schema compliance, clinician decision
                and review time are attached. The application database keeps the real values; only the trace copy is masked.
            </desc>
            <defs>
                <marker id="cv-trace-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" className={styles.arrowHead} />
                </marker>
            </defs>

            {/* 1 · the agent turn */}
            <rect x="6" y="6" width="328" height="62" rx="10" className={styles.box} />
            <text x="18" y="25" className={styles.title}>Voice turn in the AI agent</text>
            <text x="18" y="40" className={styles.sub}>Real clinical data (synthetic example):</text>
            <text x="18" y="56" className={`${styles.mono} ${styles.raw}`}>Maya K · 416-555-0142 · 1234-567-890 AB</text>

            <line x1="170" y1="68" x2="170" y2="88" className={styles.arrow} markerEnd="url(#cv-trace-arrow)" />
            <text x="180" y="82" className={styles.edgeLabel}>mask() runs before anything leaves</text>

            {/* 2 · redaction layers */}
            <rect x="6" y="90" width="328" height="130" rx="10" className={styles.accentBox} />
            <text x="18" y="108" className={styles.title}>PII redaction, three layers</text>

            <rect x="16" y="116" width="308" height="26" rx="6" className={styles.box} />
            <text x="26" y="133" className={styles.step}>0</text>
            <text x="40" y="133" className={styles.title}>Key-aware</text>
            <text x="112" y="133" className={styles.sub}>by field name: name, phone, DOB, address</text>

            <rect x="16" y="147" width="308" height="26" rx="6" className={styles.box} />
            <text x="26" y="164" className={styles.step}>1</text>
            <text x="40" y="164" className={styles.title}>Pattern match</text>
            <text x="124" y="164" className={styles.sub}>emails, phones, health cards, postal codes</text>

            <rect x="16" y="178" width="308" height="26" rx="6" className={styles.box} />
            <text x="26" y="195" className={styles.step}>2</text>
            <text x="40" y="195" className={styles.title}>Entity detection</text>
            <text x="134" y="195" className={styles.sub}>free-text names and places (NLP)</text>

            <text x="18" y="214" className={styles.edgeLabel}>Fails closed: any error replaces the payload with [REDACTED]</text>

            <line x1="170" y1="220" x2="170" y2="240" className={styles.arrow} markerEnd="url(#cv-trace-arrow)" />

            {/* 3 · Langfuse trace */}
            <rect x="6" y="242" width="328" height="96" rx="10" className={styles.box} />
            <text x="18" y="261" className={styles.title}>Trace in self-hosted Langfuse</text>
            <text x="18" y="277" className={`${styles.mono} ${styles.masked}`}>[PERSON] · [PHONE] · [HEALTH_CARD]</text>
            <text x="18" y="296" className={styles.sub}>Session = conversation thread</text>
            <text x="18" y="310" className={styles.sub}>User = salted hash of the patient id (omitted if no salt)</text>
            <text x="18" y="324" className={styles.sub}>Tags = the form being filled + turn type</text>

            {/* 4 · scores */}
            <rect x="6" y="348" width="328" height="52" rx="10" className={styles.box} />
            <text x="18" y="366" className={styles.title}>Scores on every turn</text>
            <text x="18" y="380" className={styles.sub}>Latency · first-token time · schema compliance</text>
            <text x="18" y="392" className={styles.sub}>Clinician approve / reject · time spent reviewing</text>

            <text x="18" y="418" className={styles.edgeLabel}>The app database keeps the real values; only the trace copy is masked.</text>
        </svg>
        <figcaption className={styles.caption}>Tracing for observability without patient identifiers.</figcaption>
    </figure>
);
