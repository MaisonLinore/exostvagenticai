import { createFileRoute } from "@tanstack/react-router";
import heroFeed from "@/assets/hero-feed.jpg";
import chNews from "@/assets/ch-news.jpg";
import chGeo from "@/assets/ch-geo.jpg";
import chQuant from "@/assets/ch-quant.jpg";
import chBio from "@/assets/ch-bio.jpg";
import nodeMap from "@/assets/node-map.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const channels = [
  { id: "CH_088", name: "NEWS_SYNTH", rate: "4.2GB/S", img: chNews, live: true, fill: "w-3/4" },
  { id: "CH_102", name: "GEO_STRAT", rate: "1.8GB/S", img: chGeo, live: false, fill: "w-1/2" },
  { id: "CH_003", name: "QUANT_FIN", rate: "12.1GB/S", img: chQuant, live: false, fill: "w-full" },
  { id: "CH_441", name: "BIO_CORE", rate: "0.9GB/S", img: chBio, live: false, fill: "w-1/4" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground overflow-x-hidden">
      {/* Telemetry Top Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto h-14 flex items-center justify-between px-6 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="size-2 bg-accent shadow-[0_0_10px_var(--color-accent)]" />
              <span className="font-extrabold text-sm tracking-tighter">EXOS+ TV</span>
            </div>
            <div className="hidden md:flex gap-6 text-muted-foreground">
              <div className="flex gap-2"><span>LATENCY:</span><span className="text-accent">0.004MS</span></div>
              <div className="flex gap-2"><span>UPTIME:</span><span className="text-foreground">99.999%</span></div>
              <div className="flex gap-2"><span>NODES:</span><span className="text-foreground">4,812 ACTIVE</span></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-2 py-1 border border-accent/30 text-accent">LIVE BROADCAST</div>
            <div className="hidden sm:block text-muted-foreground">FOTON / λ–1550nm</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
          <div className="animate-photon-flow absolute top-0 w-32 h-full bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-6 py-12 md:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-8 mb-24 animate-fade-in">
          <div className="col-span-12 lg:col-span-7">
            <header className="mb-8">
              <div className="inline-block px-2 py-0.5 bg-accent/10 text-accent font-mono text-[10px] mb-6 border border-accent/20">
                PROTOCOL 01 · AUTONOMOUS SYNTHESIS
              </div>
              <h1 className="text-6xl md:text-8xl font-mono font-extrabold tracking-tighter text-balance leading-[0.9] italic">
                THE MEDIA <br />
                <span className="text-accent">SINGULARITY.</span>
              </h1>
            </header>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[52ch] text-pretty leading-relaxed mb-10">
              Exos+ TV decouples compute from rendering, delivering sovereign agentic intelligence
              across global silicon photonics infrastructure. Foton AI models talk to each other in
              real time — across every platform. Linear is dead.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://maisonlinore.github.io/tvnews/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-accent text-accent-foreground font-mono font-bold text-sm tracking-widest hover:bg-foreground transition-colors"
              >
                INITIALIZE STREAM
              </a>
              <button className="px-8 py-4 border border-border font-mono text-sm tracking-widest hover:bg-foreground/5 transition-colors">
                VIEW ARCHITECTURE
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative aspect-video lg:aspect-square bg-foreground/5 border border-border p-4 group overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                <div className="animate-scan absolute top-0 left-0 w-full h-px bg-accent/40" />
              </div>
              <div className="relative w-full h-full bg-black/40 border border-foreground/5 overflow-hidden">
                <img
                  src={heroFeed}
                  alt="Primary Foton agent feed visualization"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-mono text-[10px] text-foreground/60 tracking-[0.4em] uppercase bg-background/40 px-3 py-1 backdrop-blur-sm">
                    Primary_Node_Feed
                  </span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 sm:right-auto p-4 bg-background/90 border border-border backdrop-blur-xl">
                <div className="font-mono text-[10px] text-accent mb-1">AGENT_ORCHESTRATOR_01</div>
                <div className="text-sm font-bold">SYNTHESIZING REAL-TIME ASSETS</div>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Broadcast Grid */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
            <h2 className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Active Agent Broadcasts
            </h2>
            <div className="text-[10px] font-mono text-accent">REFRESHING · 1.2S</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((c) => (
              <article
                key={c.id}
                className="group relative border border-border bg-foreground/[0.02] p-4 transition-colors hover:bg-foreground/[0.05] hover:border-accent/50"
              >
                <div className="aspect-video bg-black/20 mb-4 overflow-hidden relative">
                  <img
                    src={c.img}
                    alt={`${c.name} channel preview`}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div
                    className={`absolute top-2 right-2 size-2 rounded-full ${
                      c.live ? "bg-destructive animate-pulse" : "bg-accent"
                    }`}
                  />
                </div>
                <div className="font-mono text-[11px] mb-2 flex justify-between">
                  <span className="text-foreground">{c.id}: {c.name}</span>
                  <span className="text-muted-foreground">{c.rate}</span>
                </div>
                <div className="h-1 w-full bg-foreground/10">
                  <div className={`h-full bg-accent ${c.fill}`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sustainability / Footer */}
        <footer className="border-t border-border pt-12 pb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-mono text-[10px] text-muted-foreground mb-6 tracking-widest uppercase">
              Global Node Map
            </div>
            <div className="w-full aspect-video bg-foreground/[0.02] border border-foreground/5 overflow-hidden">
              <img
                src={nodeMap}
                alt="Global Foton node distribution"
                width={1024}
                height={576}
                loading="lazy"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-muted-foreground mb-6 tracking-widest uppercase">
                Energy Optimization
              </div>
              <div className="text-4xl md:text-5xl font-mono font-extrabold text-accent">−84%</div>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-tight max-w-[32ch]">
                Reduction in GPU thermal load vs standard LLM rendering
              </p>
            </div>
            <div className="mt-8">
              <div className="text-[10px] font-mono text-muted-foreground mb-2">
                DISTRIBUTED BY EXOS+ INFRASTRUCTURE
              </div>
              <div className="text-xs">Sovereign Layer 0 Synthesis</div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end text-left md:text-right">
            <div className="max-w-xs">
              <div className="font-mono text-[10px] text-muted-foreground mb-4 tracking-widest uppercase">
                IP Protection
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground uppercase font-mono">
                Created and IP protection design by
                <br />
                <span className="text-foreground font-bold">Edwin Mirfazli</span>
              </p>
            </div>
            <div className="mt-8 font-mono text-[10px] text-muted-foreground space-y-1">
              <div>© 2026 EXOS+ MEDIA CORP</div>
              <div>ALL RIGHTS RESERVED</div>
            </div>
          </div>
        </footer>
      </main>

      {/* Signal Acquired */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <div className="bg-accent text-accent-foreground p-4 font-mono font-bold text-xs tracking-widest shadow-[0_0_30px_oklch(0.88_0.18_210/0.45)] flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground" />
          </span>
          SIGNAL ACQUIRED
        </div>
      </div>
    </div>
  );
}
