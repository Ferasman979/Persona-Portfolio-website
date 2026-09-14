import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Managed LLM APIs vs. Your Own vLLM Server | Feras Mahmood",
  description:
    "Managed LLM APIs and self-hosted vLLM serve different workload shapes. Compare utilization, prompt caching, latency, compliance, and cache-aware routing.",
  openGraph: {
    title: "Managed LLM APIs vs. Your Own vLLM Server",
    description:
      "A practical comparison of managed inference and self-hosted vLLM based on workload shape, economics, latency, and cache control.",
    type: "article",
    publishedTime: "2026-09-13T19:51:00-04:00",
  },
};

export default function ManagedLlmApisVsVllm() {
  return (
    <>
      <a className="skipLink" href="#article-content">Skip to article</a>
      <Navbar />
      <main id="article-content" className={styles.page}>
        <article className={styles.article}>
          <header className={styles.header}>
            <Link href="/#blog" className={styles.backLink}>
              <span aria-hidden="true">←</span> Back to writing
            </Link>
            <p className={styles.kicker}>AI infrastructure · Systems engineering</p>
            <h1>Managed LLM APIs vs. Your Own vLLM Server: A Question of Workload Shape, Not Ideology</h1>
            <p className={styles.meta}>
              Published <time dateTime="2026-09-13T19:51:00-04:00">September 13, 2026 at 7:51 PM EDT</time>
            </p>
          </header>

          <div className={styles.prose}>
            <p className={styles.lede}>
              Teams tend to argue about Bedrock and Vertex AI versus self-hosted vLLM as though one of them has to be correct. It&apos;s the wrong frame. Managed APIs and a GPU-backed inference server built on vLLM and llm-d serve different workload shapes, and the same open-weights model often shows up in both. What changes is the economics, the latency floor, and how much control you have over the cache.
            </p>

            <h2>Where the managed API is the right call</h2>
            <p>
              For intermittent or modest traffic, the API wins on almost every axis. A basic FAQ chatbot, an internal document summarization endpoint, a nightly classification job, these have low duty cycles. You pay per token, you pay nothing when idle, and you inherit a frontier model without touching a GPU.
            </p>
            <p>
              A vLLM deployment inverts that cost structure. GPU instances bill by the hour whether or not requests arrive. That only pencils out at high sustained utilization: heavy agentic traffic, large batch pipelines, real-time features hit continuously during business hours. Below that threshold, self-hosting means paying for idle accelerators to save on tokens you weren&apos;t sending anyway.
            </p>
            <p>So the first question isn&apos;t &quot;which is better.&quot; It&apos;s: <strong>is your GPU going to be busy?</strong></p>

            <h2>Where it gets interesting: workloads with large, repeated context</h2>
            <p>
              The calculus shifts when a large share of every request is identical to the last one. Think of a system that ships a full database schema, a set of detailed tool descriptions, and a long system prompt on every call, then appends a short user query. The repeated prefix may not be the majority of tokens, but it&apos;s substantial and it&apos;s stable.
            </p>
            <p>This is exactly what caching exists for, and it&apos;s where the two approaches genuinely diverge.</p>
            <figure className={styles.figure}>
              <Image
                src="/blog/cache-hit-state.png"
                alt="Cache hit state: schema, tool definitions, and system prompt are reused from cache, so only the query is new and latency is faster."
                width={808}
                height={368}
                className={styles.figureImage}
                quality={100}
                unoptimized
                sizes="(max-width: 900px) 100vw, 52rem"
              />
              <figcaption>
                On a cache hit, the stable prefix is reused and only the query needs prefill, which cuts time-to-first-token.
              </figcaption>
            </figure>

            <h3>Prompt caching on managed APIs comes with a floor</h3>
            <p>
              On a managed API, you don&apos;t cache; you <em>request</em> a cache checkpoint and hope you cleared the vendor&apos;s minimum. Those minimums are model-specific and not small.
            </p>
            <p><strong>Vertex AI (Gemini context caching)</strong>, minimum cache token count, applying to both implicit and explicit caching:</p>
            <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Vertex AI minimum cache token counts">
              <table>
                <thead>
                  <tr><th scope="col">Model tier</th><th scope="col">Minimum</th></tr>
                </thead>
                <tbody>
                  <tr><td>Gemini 3 / 3.1 family (incl. 3.5 to 3.8 Flash, 3.1 Pro)</td><td>4,096 tokens</td></tr>
                  <tr><td>Gemini 2.0 / 2.5 family (2.5 Flash, 2.5 Pro)</td><td>2,048 tokens</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Note what that table does <em>not</em> say: the lightweight model is not the cheap option for caching. Current Gemini 3-series Flash models sit at the same 4,096-token floor as the Pro models. Reaching for a smaller model to cut latency doesn&apos;t buy you a smaller cache minimum.
            </p>
            <p><strong>Amazon Bedrock (Claude models)</strong>, minimum tokens per cache checkpoint:</p>
            <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Amazon Bedrock minimum cache token counts">
              <table>
                <thead>
                  <tr><th scope="col">Model</th><th scope="col">Minimum</th></tr>
                </thead>
                <tbody>
                  <tr><td>Claude Sonnet 4.5</td><td>1,024 tokens</td></tr>
                  <tr><td>Claude Haiku 4.5</td><td>4,096 tokens</td></tr>
                  <tr><td>Claude Opus 4.5</td><td>4,096 tokens</td></tr>
                  <tr><td>Amazon Nova (Micro/Lite/Pro)</td><td>1,024 tokens</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The inversion is the point. Sonnet 4.5, the higher-reasoning model, caches from 1,024 tokens. Haiku 4.5, the model you&apos;d pick precisely because it&apos;s fast and cheap, demands 4,096. If your stable prefix is a 2,500-token schema plus tool definitions, it caches fine on Sonnet and never caches on Haiku.
            </p>
            <ol>
              <li>
                <strong>Failure is silent.</strong> Below the threshold, the request succeeds normally. No error, no warning. You just pay full input price and eat the full prefill every single time. The only signal is <code>cacheReadInputTokens</code> sitting at zero, which nobody notices unless they&apos;re already watching for it.
              </li>
              <li>
                <strong>The published numbers move and don&apos;t always match reality.</strong> Sources disagree on whether Sonnet 4.5 on Bedrock is 1,024 or 4,096, and developers have reported Gemini 2.5 Flash enforcing 1,024 where the docs say 2,048. You are building latency guarantees on a constant the vendor can change.
              </li>
            </ol>
            <p>Miss the threshold and every request re-prefills the whole prefix. That&apos;s directly visible to users as slower time-to-first-token.</p>
            <figure className={styles.figure}>
              <Image
                src="/blog/cache-miss-state.png"
                alt="Cache miss state: schema, tool definitions, system prompt, and query are all prefilled from scratch, so latency is slower."
                width={800}
                height={376}
                className={styles.figureImage}
                quality={100}
                unoptimized
                sizes="(max-width: 900px) 100vw, 52rem"
              />
              <figcaption>
                On a cache miss, every token is prefilled from scratch, including the prefix you expected to reuse.
              </figcaption>
            </figure>

            <h3>KV caching on your own vLLM server has no floor</h3>
            <p>
              vLLM&apos;s automatic prefix caching works at a different level of the stack. It caches KV blocks, the actual attention state, keyed by content hash, at a block granularity you configure. There&apos;s no minimum-tokens policy, because there&apos;s no vendor policy at all. A 600-token prefix caches as readily as a 60,000-token one.
            </p>
            <p>That gives you two things a managed API structurally can&apos;t:</p>
            <ul>
              <li><strong>Model choice.</strong> You pick the open-weights model that fits the job, at the size that fits your latency budget. Frontier reasoning models are slow by construction; a well-chosen lightweight model can cut TTFT and end-to-end latency dramatically. For a workload where a user is waiting, that difference is the product.</li>
              <li><strong>Cache policy as a tunable, not a constraint.</strong> Block size, cache capacity, eviction, offloading to CPU or disk, all yours to set against your actual prefix distribution.</li>
            </ul>

            <h2>Two more reasons that have nothing to do with tokens</h2>
            <p>
              <strong>Compliance.</strong> In healthcare, banking, insurance, and similar regulated settings, &quot;where does the data go&quot; is the question that stalls launches for months. A vLLM server inside your own VPC means inference data never leaves your network boundary. That collapses a large amount of vendor-assessment, DPA, and data-residency work into an architecture decision you already control.
            </p>
            <p>
              <strong>Red teaming.</strong> You cannot meaningfully study a model you can only reach through a filtered endpoint. Running open weights yourself lets you probe jailbreak behavior directly, vary sampling parameters, inspect logprobs, and study how a particular model&apos;s weights and post-training shape its refusal behavior. That&apos;s safety research a managed API is designed to prevent you from doing.
            </p>

            <h2>The catch: someone has to engineer this</h2>
            <p>
              None of the above is free. The failure mode of self-hosting isn&apos;t that caching doesn&apos;t work, it&apos;s that the cache is on the wrong GPU.
            </p>
            <p>
              Standard round-robin load balancing is actively harmful here. Each vLLM replica holds a <em>different</em> KV cache state. Route a request to a replica that doesn&apos;t hold its prefix and you&apos;ve thrown away the computed work and re-run prefill from scratch, the exact cost you stood up the cluster to avoid.
            </p>
            <p>
              This is what llm-d is for. It sits above the model servers and does prefix-cache-aware routing: scoring pods by how much of the incoming request&apos;s prefix they already hold, combined with load-awareness so you don&apos;t hammer one hot replica. Its precise mode consumes KV-cache events emitted by vLLM to maintain an accurate global view of where cache blocks actually live. Reported results are substantial, roughly 3× lower mean TTFT versus a cache-blind baseline in the project&apos;s own benchmarks, and 2× faster TTFT with 3× higher throughput in a Red Hat/Tesla deployment on MI300X.
            </p>
            <figure className={styles.figure}>
              <Image
                src="/blog/inference-cache-workflow.png"
                alt="Workflow of an incoming request through an inference gateway that scores pods by cache and load, then a prefix cache lookup that either skips prefill on a hit or runs a full prefill on a miss."
                width={1168}
                height={836}
                className={styles.figureImage}
                quality={100}
                unoptimized
                sizes="(max-width: 900px) 100vw, 52rem"
              />
              <figcaption>
                The gateway scores pods by cache and load. A prefix match skips prefill; a miss pays for a full prefill on a cold cache.
              </figcaption>
            </figure>
            <p>
              But this is real systems engineering: Kubernetes, a gateway with an endpoint picker, cache-event plumbing, autoscaling that respects cache warmth, and observability good enough to prove hit rates in production. It is not a config flag.
            </p>

            <h2>The heuristic</h2>
            <ul>
              <li><strong>Low or bursty volume, short prompts, no data-residency pressure</strong> → managed API. Don&apos;t build a cluster to save on tokens you aren&apos;t sending.</li>
              <li><strong>Sustained high volume, large repeated prefixes, latency-sensitive users, or a regulated data boundary</strong> → vLLM behind llm-d, and budget for the engineering.</li>
              <li><strong>Stable prefix under ~4k tokens plus a need for a fast lightweight model</strong> → this is the case where managed prompt caching quietly fails you, and self-hosting is most clearly justified.</li>
            </ul>
            <p className={styles.conclusion}>
              The uncomfortable version: managed prompt caching is a <em>product</em>, with thresholds set for the vendor&apos;s infrastructure, not your prompt. KV caching on your own server is a <em>mechanism</em>. If your workload lives near the threshold, you don&apos;t really control your own latency.
            </p>

            <h2>References</h2>
            <ol className={styles.references}>
              <li>Amazon Web Services. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html">Prompt caching for faster model inference, Amazon Bedrock User Guide</a>.</li>
              <li>Anthropic. <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-caching">Prompt caching, Claude Platform Docs</a> (per-model minimum cacheable prefix lengths).</li>
              <li>Caylent. <a href="https://caylent.com/blog/prompt-caching-saving-time-and-money-in-llm-applications">Amazon Bedrock Prompt Caching: Saving Time and Money in LLM Applications</a> (Claude 4.5-family thresholds, 5-minute vs 1-hour TTL).</li>
              <li>tidyverse/ellmer, Issue #954, <a href="https://github.com/tidyverse/ellmer/issues/954">Add prompt caching support to <code>chat_aws_bedrock()</code></a> (summary of Bedrock per-model minimums and silent below-threshold behavior).</li>
              <li>Google Cloud. <a href="https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview">Context caching overview, Vertex AI / Gemini Enterprise Agent Platform</a> (implicit vs. explicit caching, minimum cache token count).</li>
              <li>Google. <a href="https://ai.google.dev/gemini-api/docs/caching">Context caching, Gemini API docs</a> (per-model minimum input token table).</li>
              <li>Google AI Developers Forum. <a href="https://discuss.ai.google.dev/t/context-caching-docs-list-wrong-minimum-token-count-for-gemini-2-5-flash-flash-lite-missing-entirely/178942">Context caching docs list wrong minimum token count for Gemini 2.5 Flash</a> (documented vs. enforced minimums).</li>
              <li>llm-d. <a href="https://github.com/llm-d/llm-d">Project README</a>, intelligent routing, advanced KV-cache management, published benchmark results.</li>
              <li>llm-d. <a href="https://llm-d.ai/docs/guide/Installation/precise-prefix-cache-aware">Feature: Precise Prefix Cache Aware Routing</a> (routing from vLLM KV-event data).</li>
              <li>llm-d. <a href="https://llm-d.ai/blog/llm-d-announce">Announcing the llm-d community</a> (prefix-aware routing TTFT benchmarks, disaggregated serving).</li>
              <li>Red Hat Developer. <a href="https://developers.redhat.com/articles/2025/10/07/master-kv-cache-aware-routing-llm-d-efficient-ai-inference">Master KV cache aware routing with llm-d for efficient AI inference</a> (EPP, Gateway API Inference Extension, prefix-aware scoring).</li>
              <li>vLLM. <a href="https://docs.vllm.ai/en/latest/design/prefix_caching.html">Automatic Prefix Caching, vLLM documentation</a>.</li>
            </ol>
          </div>
        </article>
      </main>
    </>
  );
}
