/* ═══ IX-A MEGA ULTIMATE - CLEAN BUILD ═══ */

/* THEMES */
:root,[data-theme="cyber"]{--p:#6366f1;--pr:99,102,241;--s:#8b5cf6;--sr:139,92,246;--a:#06b6d4;--ar:6,182,212;--ok:#10b981;--okr:16,185,129;--warn:#f59e0b;--wr:245,158,11;--err:#ef4444;--er:239,68,68;--bg:#050510;--sf:rgba(255,255,255,0.04);--sf2:rgba(255,255,255,0.08);--tx:#f0f0ff;--tx2:rgba(240,240,255,.65);--tx3:rgba(240,240,255,.35);--bd:rgba(255,255,255,.06);--bd2:rgba(255,255,255,.12);--gl:rgba(15,15,35,.75);--glb:rgba(255,255,255,.08);--grad:linear-gradient(135deg,var(--p),var(--s));--glow:0 0 30px rgba(var(--pr),.3);--r:16px;--r2:24px;--r3:28px}
[data-theme="rose"]{--p:#ec4899;--pr:236,72,153;--s:#f472b6;--sr:244,114,182;--a:#fbbf24;--ar:251,191,36;--bg:#150812;--gl:rgba(25,8,20,.75);--glb:rgba(236,72,153,.1);--grad:linear-gradient(135deg,#ec4899,#f472b6);--glow:0 0 30px rgba(236,72,153,.3)}
[data-theme="ocean"]{--p:#06b6d4;--pr:6,182,212;--s:#0891b2;--sr:8,145,178;--a:#10b981;--ar:16,185,129;--bg:#030810;--gl:rgba(3,10,20,.75);--glb:rgba(6,182,212,.1);--grad:linear-gradient(135deg,#06b6d4,#0891b2);--glow:0 0 30px rgba(6,182,212,.3)}
[data-theme="sunset"]{--p:#f97316;--pr:249,115,22;--s:#ef4444;--sr:239,68,68;--a:#fbbf24;--ar:251,191,36;--bg:#100805;--gl:rgba(18,8,5,.75);--glb:rgba(249,115,22,.1);--grad:linear-gradient(135deg,#f97316,#ef4444);--glow:0 0 30px rgba(249,115,22,.3)}
[data-theme="emerald"]{--p:#10b981;--pr:16,185,129;--s:#059669;--sr:5,150,105;--a:#06b6d4;--ar:6,182,212;--bg:#030f0a;--gl:rgba(3,15,10,.75);--glb:rgba(16,185,129,.1);--grad:linear-gradient(135deg,#10b981,#059669);--glow:0 0 30px rgba(16,185,129,.3)}
[data-theme="neon"]{--p:#facc15;--pr:250,204,21;--s:#a3e635;--sr:163,230,53;--a:#22d3ee;--ar:34,211,238;--bg:#0a0a00;--gl:rgba(15,15,0,.75);--glb:rgba(250,204,21,.1);--grad:linear-gradient(135deg,#facc15,#a3e635);--glow:0 0 30px rgba(250,204,21,.3);--tx:#fffff0}

/* FONTS */
[data-ff="inter"]{--ff:'Inter',sans-serif}[data-ff="poppins"]{--ff:'Poppins',sans-serif}[data-ff="nunito"]{--ff:'Nunito',sans-serif}[data-ff="quicksand"]{--ff:'Quicksand',sans-serif}[data-ff="space"]{--ff:'Space Grotesk',sans-serif}[data-ff="mono"]{--ff:'JetBrains Mono',monospace}
[data-fs="small"]{--fz:.88}[data-fs="normal"]{--fz:1}[data-fs="large"]{--fz:1.14}

/* MODES */
[data-mode="cute"]{--r:20px;--r2:28px;--r3:50px}
[data-mode="cute"] .glass,[data-mode="cute"] .hero-card,[data-mode="cute"] .bsheet{border-radius:var(--r3)!important}
[data-mode="cute"] .btn-s,[data-mode="cute"] .chip,[data-mode="cute"] .qa{border-radius:50px!important}
[data-mode="minimal"] .orbs,[data-mode="minimal"] .noise-ov,[data-mode="minimal"] .grid-ov,[data-mode="minimal"] .scan-ov{display:none!important}
[data-mode="retro"] *{font-family:'JetBrains Mono',monospace!important}

/* CARD STYLES */
[data-cs="solid"] .glass,[data-cs="solid"] .hero-card{backdrop-filter:none!important;background:var(--bg)!important;border:2px solid var(--bd2)!important}
[data-cs="outline"] .glass,[data-cs="outline"] .hero-card{backdrop-filter:none!important;background:transparent!important;border:2px solid rgba(var(--pr),.3)!important}
[data-cs="gradient"] .glass,[data-cs="gradient"] .hero-card{background:linear-gradient(135deg,rgba(var(--pr),.12),rgba(var(--sr),.06))!important;border:1px solid rgba(var(--pr),.2)!important}

/* RADIUS */
[data-radius="sharp"]{--r:4px;--r2:8px;--r3:10px}[data-radius="round"]{--r:16px;--r2:24px;--r3:28px}[data-radius="pill"]{--r:50px;--r2:50px;--r3:50px}

/* RESET */
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{font-family:var(--ff);font-size:calc(14px*var(--fz));background:var(--bg);color:var(--tx);min-height:100vh;overflow-x:hidden;line-height:1.6;transition:background .5s,color .5s;padding-bottom:100px}

#particleCanvas,#confettiCanvas{position:fixed;inset:0;z-index:-2;pointer-events:none}
#confettiCanvas{z-index:9000}
.noise-ov{position:fixed;inset:0;z-index:-1;opacity:.015;pointer-events:none;background:url("data:image/svg+xml,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");background-size:256px}
.grid-ov{position:fixed;inset:0;z-index:-1;opacity:0;pointer-events:none;background-image:linear-gradient(rgba(var(--pr),.03) 1px,transparent 1px),linear-gradient(90deg,rgba(var(--pr),.03) 1px,transparent 1px);background-size:50px 50px;transition:opacity .5s}.grid-ov.on{opacity:1}
.scan-ov{position:fixed;inset:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.03) 2px,rgba(0,0,0,.03) 4px);transition:opacity .5s}.scan-ov.on{opacity:1}
.orbs{position:fixed;inset:0;z-index:-3;overflow:hidden;pointer-events:none}
.orb{position:absolute;border-radius:50%;filter:blur(120px);opacity:.12;animation:oF 25s ease-in-out infinite}
.o1{width:500px;height:500px;background:var(--p);top:-150px;left:-100px}.o2{width:400px;height:400px;background:var(--s);bottom:-100px;right:-80px;animation-delay:-8s}.o3{width:300px;height:300px;background:var(--a);top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:-16s;opacity:.06}
@keyframes oF{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(25px,-35px) scale(1.05)}66%{transform:translate(-15px,20px) scale(.95)}}
.scroll-prog{position:fixed;top:0;left:0;height:3px;background:var(--grad);z-index:9990;width:0;box-shadow:0 0 10px rgba(var(--pr),.5);transition:width .15s}

/* LOADER */
.loader{position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;transition:opacity .6s ease-out}
.loader.done{opacity:0;pointer-events:none}
.ld-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(var(--pr),.03) 1px,transparent 1px),linear-gradient(90deg,rgba(var(--pr),.03) 1px,transparent 1px);background-size:40px 40px;animation:gs 8s linear infinite}
@keyframes gs{to{background-position:40px 40px}}
.ld-center{text-align:center;position:relative;z-index:1}
.ld-spinner{width:120px;height:120px;margin:0 auto 30px;position:relative}
.ld-ring{position:absolute;inset:0;border:3px solid transparent;border-radius:50%;border-top-color:var(--p);animation:sp 1.2s linear infinite}
.ld-ring.r2{inset:12px;border-top-color:var(--s);animation-direction:reverse;animation-duration:1.8s}
.ld-ring.r3{inset:24px;border-top-color:var(--a);animation-duration:2.4s}
@keyframes sp{to{transform:rotate(360deg)}}
.ld-text{font-family:'Orbitron',sans-serif;font-size:2.5rem;font-weight:900;letter-spacing:10px;margin-bottom:6px}
.ld-text span{display:inline-block;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:ldPop .5s cubic-bezier(.34,1.56,.64,1) forwards;opacity:0;transform:translateY(20px)}
.ld-text span:nth-child(1){animation-delay:.1s}.ld-text span:nth-child(2){animation-delay:.2s}.ld-text span:nth-child(3){animation-delay:.3s}.ld-text span:nth-child(4){animation-delay:.4s}
@keyframes ldPop{to{opacity:1;transform:translateY(0)}}
.ld-sub{font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--tx3);letter-spacing:5px;margin-bottom:30px}
.ld-bar{width:200px;height:3px;background:rgba(255,255,255,.06);border-radius:2px;margin:0 auto 10px;overflow:hidden}
.ld-fill{height:100%;width:0;background:var(--grad);border-radius:2px;transition:width .2s}
.ld-pct{font-family:'JetBrains Mono',monospace;font-size:.75rem;color:var(--tx3)}

/* APP */
.app{max-width:520px;margin:0 auto;padding:14px 12px;opacity:0;transform:translateY(30px);transition:all .8s cubic-bezier(.16,1,.3,1)}
.app.vis{opacity:1;transform:none}
.anim-in{opacity:0;transform:translateY(20px);transition:all .6s cubic-bezier(.16,1,.3,1)}.anim-in.v{opacity:1;transform:none}

/* TOP BAR */
.topbar{position:fixed;top:0;left:0;right:0;z-index:150;display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(var(--pr),.02);backdrop-filter:blur(20px);border-bottom:1px solid var(--bd)}
.tb-btn{width:38px;height:38px;background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--tx);font-size:14px;transition:all .3s}.tb-btn:hover{background:var(--sf2);transform:scale(1.05)}.tb-btn.muted{color:var(--tx3)}
.tb-brand{display:flex;align-items:center;gap:8px;cursor:pointer}
.tb-logo{width:30px;height:30px;background:var(--grad);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;color:white;box-shadow:var(--glow)}
.tb-name{font-family:'Orbitron',sans-serif;font-size:16px;font-weight:800;background:var(--grad);background-size:200% 200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:gS 3s ease infinite}
@keyframes gS{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

/* HERO */
.hero{margin:68px 0 12px}
.hero-card{background:var(--gl);backdrop-filter:blur(30px) saturate(180%);border:1px solid var(--glb);border-radius:var(--r3);padding:22px 18px;position:relative;overflow:hidden;box-shadow:0 20px 50px -12px rgba(0,0,0,.5);transition:transform .2s}
.hc-deco{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 20% 0%,rgba(var(--pr),.1) 0%,transparent 60%),radial-gradient(ellipse at 80% 100%,rgba(var(--sr),.06) 0%,transparent 60%)}
.hc-shine{position:absolute;top:-50%;left:-50%;width:200%;height:200%;pointer-events:none;background:linear-gradient(45deg,transparent 42%,rgba(255,255,255,.02) 48%,rgba(255,255,255,.04) 50%,rgba(255,255,255,.02) 52%,transparent 58%);animation:shine 6s ease-in-out infinite}
@keyframes shine{0%,100%{transform:translate(-30%,-30%) rotate(45deg)}50%{transform:translate(30%,30%) rotate(45deg)}}
.hc-top{display:flex;justify-content:flex-end;margin-bottom:12px;position:relative;z-index:1}
.badge-live{display:flex;align-items:center;gap:6px;padding:4px 10px;background:rgba(var(--okr),.1);border:1px solid rgba(var(--okr),.2);border-radius:20px;font-size:8px;font-weight:700;color:var(--ok);letter-spacing:2px;position:relative}
.bl-dot{width:6px;height:6px;background:var(--ok);border-radius:50%;position:relative;z-index:1}
.bl-pulse{position:absolute;left:10px;width:6px;height:6px;background:var(--ok);border-radius:50%;animation:lp 1.5s ease-out infinite}
@keyframes lp{0%{transform:scale(1);opacity:.8}100%{transform:scale(3.5);opacity:0}}

/* CLOCK */
.clock{text-align:center;position:relative;z-index:1;margin-bottom:6px}
.ck-row{display:flex;align-items:center;justify-content:center;gap:3px;margin-bottom:6px}
.ck-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:var(--r);padding:3px 1px;min-width:40px;text-align:center;position:relative;overflow:hidden}
.ck-d{font-family:'Orbitron',sans-serif;font-size:calc(34px*var(--fz));font-weight:700;line-height:1;background:linear-gradient(180deg,var(--tx),rgba(var(--pr),.6));-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:block}
.ck-d.flip{animation:df .35s cubic-bezier(.34,1.56,.64,1)}
@keyframes df{0%{transform:scaleY(1)}30%{transform:scaleY(1.12) translateY(-3px)}100%{transform:scaleY(1)}}
.ck-sep{font-family:'Orbitron',sans-serif;font-size:28px;color:var(--tx3);animation:bk 1s step-end infinite;margin:0 2px}
@keyframes bk{0%,100%{opacity:1}50%{opacity:.15}}
.ck-s{margin-left:4px}.ck-s span{font-family:'JetBrains Mono',monospace;font-size:calc(13px*var(--fz));color:var(--tx3)}
.ck-date{font-size:calc(10px*var(--fz));color:var(--tx2);letter-spacing:2px;text-transform:uppercase;font-weight:500}

/* LESSON */
.lesson-box{margin-top:14px;padding:16px;border-radius:var(--r2);text-align:center;position:relative;overflow:hidden;z-index:1;background:rgba(var(--pr),.06);border:1px solid rgba(var(--pr),.15);transition:all .5s}
.lesson-box.brk{background:rgba(var(--wr),.06);border-color:rgba(var(--wr),.15)}
.lesson-box.idle{background:var(--sf);border-color:var(--bd)}
.lb-glow{position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(var(--pr),.08),transparent 70%);pointer-events:none}
.lb-body{position:relative;z-index:1}
.lb-label{font-size:calc(8px*var(--fz));font-weight:700;text-transform:uppercase;letter-spacing:3px;color:var(--tx3);margin-bottom:4px}
.lb-name{font-family:'Space Grotesk',sans-serif;font-size:calc(16px*var(--fz));font-weight:700}
.lb-tchr{font-size:calc(10px*var(--fz));color:var(--tx3);margin:2px 0}
.lb-timer{font-family:'JetBrains Mono',monospace;font-size:calc(26px*var(--fz));font-weight:700;color:var(--a);margin:4px 0;text-shadow:0 0 20px rgba(var(--ar),.3)}
.lb-prog{width:100%;height:4px;background:rgba(255,255,255,.05);border-radius:2px;overflow:hidden;margin-top:8px}
.lb-prog-bar{height:100%;background:var(--grad);border-radius:2px;transition:width 1s linear}

/* QUICK ACTIONS */
.qactions{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px}
.qa{background:var(--gl);backdrop-filter:blur(20px);border:1px solid var(--glb);border-radius:var(--r2);padding:12px 4px;text-align:center;cursor:pointer;transition:all .4s;color:var(--tx);font-family:var(--ff);display:flex;flex-direction:column;align-items:center;gap:6px}
.qa:hover{transform:translateY(-3px);border-color:rgba(var(--pr),.3);box-shadow:var(--glow)}.qa:active{transform:scale(.96)}
.qa-i{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--c),color-mix(in srgb,var(--c) 60%,white));display:flex;align-items:center;justify-content:center;font-size:15px;color:white;box-shadow:0 6px 16px -4px color-mix(in srgb,var(--c) 40%,transparent)}
.qa span{font-size:calc(9px*var(--fz));font-weight:600}

/* STATS */
.stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
.st-card{background:var(--gl);backdrop-filter:blur(20px);border:1px solid var(--glb);border-radius:var(--r2);padding:14px;display:flex;align-items:center;gap:10px;transition:all .3s}.st-card:hover{transform:translateY(-2px)}
.st-i{width:36px;height:36px;background:var(--grad);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;color:white;flex-shrink:0}
.st-i.g{background:linear-gradient(135deg,#10b981,#059669)}
.st-v{font-family:'Orbitron',sans-serif;font-size:calc(16px*var(--fz));font-weight:700;line-height:1;margin-bottom:1px}
.st-l{font-size:calc(8px*var(--fz));color:var(--tx3)}

/* GLASS CARD */
.glass{background:var(--gl);backdrop-filter:blur(20px);border:1px solid var(--glb);border-radius:var(--r3);padding:20px 16px;margin-bottom:12px}
.sec-h{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.sec-ico{width:38px;height:38px;background:var(--grad);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;color:white;flex-shrink:0;box-shadow:var(--glow)}
.sec-ico.warn{background:linear-gradient(135deg,#f59e0b,#f97316)}
.sec-t{font-family:'Space Grotesk',sans-serif;font-size:calc(15px*var(--fz));font-weight:700}
.sec-s{font-size:calc(10px*var(--fz));color:var(--tx3)}
.sub-t{font-size:calc(10px*var(--fz));font-weight:700;color:var(--tx2);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;display:flex;align-items:center;gap:5px}
.m0{margin:0!important}.mt12{margin-top:12px}.mt8{margin-top:8px}.full{width:100%}

/* DAY GRID */
.day-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.dy{position:relative;background:var(--sf);border:1px solid var(--bd);border-radius:var(--r2);padding:16px 12px;color:var(--tx);font-family:var(--ff);cursor:pointer;transition:all .4s;overflow:hidden;text-align:left;display:flex;flex-direction:column;min-height:85px}
.dy-w{grid-column:1/-1}
.dy:hover{transform:translateY(-4px) scale(1.02);border-color:rgba(var(--pr),.3);box-shadow:var(--glow)}.dy:active{transform:scale(.97)}
.dy.today{border-color:rgba(var(--pr),.3)}
.dy.today::after{content:'Hari Ini';position:absolute;top:8px;right:8px;font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:2px 6px;background:var(--grad);color:white;border-radius:20px}
.dy-n{font-size:8px;color:var(--tx3);font-weight:600;letter-spacing:2px;margin-bottom:2px}
.dy-name{font-family:'Space Grotesk',sans-serif;font-size:calc(17px*var(--fz));font-weight:700}
.dy-info{font-size:calc(8px*var(--fz));color:var(--tx3);line-height:1.4;margin-top:2px}
.dy-arr{position:absolute;bottom:12px;right:12px;width:24px;height:24px;background:rgba(255,255,255,.05);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--tx3);transition:all .4s}
.dy:hover .dy-arr{background:var(--grad);color:white;transform:translateX(2px)}

/* SCHEDULE */
.sched-view{display:none}.sched-view.show{display:block;animation:su .5s cubic-bezier(.16,1,.3,1)}
@keyframes su{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.sv-h{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.sv-t{font-family:'Space Grotesk',sans-serif;font-size:calc(17px*var(--fz));font-weight:700}
.sv-s{font-size:calc(9px*var(--fz));color:var(--tx3)}
.ib{width:34px;height:34px;background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);color:var(--tx);font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s;flex-shrink:0}.ib:hover{background:var(--sf2)}
.timeline{position:relative;padding-left:16px}
.timeline::before{content:'';position:absolute;left:4px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--p),var(--s),transparent);border-radius:1px}
.tl{position:relative;margin-bottom:8px;padding-left:14px;animation:su .4s cubic-bezier(.16,1,.3,1) backwards}
.tl-d{position:absolute;left:-16px;top:14px;width:10px;height:10px;border-radius:50%;background:var(--bg);border:3px solid var(--p);z-index:1}
.tl.act .tl-d{background:var(--p);box-shadow:0 0 8px rgba(var(--pr),.6)}.tl.brk .tl-d{border-color:var(--warn)}
.sc{background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);padding:12px;display:flex;align-items:center;gap:10px;transition:all .3s}
.sc:hover{background:var(--sf2);transform:translateX(3px)}.sc.act{background:rgba(var(--pr),.06);border-color:rgba(var(--pr),.2)}
.sc-i{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;color:white;flex-shrink:0}
.sc-n{font-size:calc(12px*var(--fz));font-weight:600;margin-bottom:1px}
.sc-tc{font-size:calc(8px*var(--fz));color:var(--tx3)}
.sc-tm{font-family:'JetBrains Mono',monospace;font-size:calc(10px*var(--fz));font-weight:600;color:var(--a)}
.sc-te{font-size:calc(7px*var(--fz));color:var(--tx3);font-family:'JetBrains Mono',monospace}
.brk-in{display:flex;align-items:center;gap:6px;justify-content:center;padding:10px;background:rgba(var(--wr),.06);border:1px dashed rgba(var(--wr),.2);border-radius:var(--r);color:var(--warn);font-weight:600;font-size:calc(10px*var(--fz))}

/* PIKET */
.chips{display:flex;gap:5px;overflow-x:auto;padding-bottom:4px;margin-bottom:14px;scrollbar-width:none}.chips::-webkit-scrollbar{display:none}
.chip{flex-shrink:0;padding:6px 12px;background:var(--sf);border:1px solid var(--bd);border-radius:50px;color:var(--tx2);font-size:calc(10px*var(--fz));font-weight:600;cursor:pointer;transition:all .3s;font-family:var(--ff);white-space:nowrap}
.chip:hover{background:var(--sf2);color:var(--tx)}.chip.active{background:var(--grad);border-color:transparent;color:white;box-shadow:var(--glow)}
.piket-body{display:none;animation:su .4s}.piket-body.show{display:block}
.ketua-card{position:relative;background:linear-gradient(135deg,rgba(var(--wr),.1),rgba(var(--wr),.03));border:2px solid rgba(var(--wr),.25);border-radius:var(--r2);padding:20px;margin-bottom:14px;overflow:hidden}
.kc-glow{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 50%,rgba(var(--wr),.12),transparent 70%);pointer-events:none}
.kc-body{display:flex;align-items:center;gap:14px;position:relative;z-index:1}
.kc-av{width:50px;height:50px;background:linear-gradient(135deg,var(--warn),#f97316);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;color:white;flex-shrink:0;box-shadow:0 6px 18px rgba(var(--wr),.4)}
.kc-label{font-size:calc(8px*var(--fz));font-weight:700;color:var(--warn);text-transform:uppercase;letter-spacing:2px;margin-bottom:2px;display:flex;align-items:center;gap:3px}
.kc-name{font-family:'Space Grotesk',sans-serif;font-size:calc(17px*var(--fz));font-weight:700;margin-bottom:1px}
.kc-day{font-size:calc(10px*var(--fz));color:var(--tx3)}
.ag-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px}
.ag{background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);padding:8px;display:flex;align-items:center;gap:8px;transition:all .3s}.ag:hover{background:var(--sf2);transform:translateY(-1px)}
.ag-n{width:22px;height:22px;background:var(--grad);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:white;flex-shrink:0}
.ag-nm{font-size:calc(9px*var(--fz));font-weight:600;line-height:1.3}
.notice{display:flex;align-items:flex-start;gap:8px;background:rgba(var(--wr),.06);border:1px solid rgba(var(--wr),.12);border-radius:var(--r);padding:12px;margin-bottom:12px}
.notice>i{color:var(--warn);font-size:14px;margin-top:1px}
.notice strong{font-size:calc(10px*var(--fz));color:var(--warn);display:block;margin-bottom:1px}
.notice p{font-size:calc(9px*var(--fz));color:var(--tx3);line-height:1.4}

/* TUGAS */
.tgs-block{padding-top:12px;border-top:1px solid var(--bd)}
.tgs-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.tgs-input{display:none;background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);padding:10px;margin-bottom:10px}.tgs-input.show{display:block;animation:su .3s}
.ta{width:100%;padding:8px;background:rgba(255,255,255,.03);border:1px solid var(--bd);border-radius:8px;color:var(--tx);font-size:calc(11px*var(--fz));resize:vertical;min-height:50px;font-family:var(--ff)}.ta:focus{outline:none;border-color:var(--p);box-shadow:0 0 0 3px rgba(var(--pr),.1)}
.tgs-btns{display:flex;gap:6px;justify-content:flex-end;margin-top:8px}
.tg-item{background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);padding:10px;display:flex;align-items:flex-start;gap:8px;margin-bottom:5px;transition:all .3s}.tg-item:hover{background:var(--sf2);transform:translateX(2px)}
.tg-n{width:20px;height:20px;background:var(--grad);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:white;flex-shrink:0}
.tg-tx{flex:1;line-height:1.4;word-break:break-word;font-size:calc(10px*var(--fz))}
.tg-acts{display:flex;gap:3px;flex-shrink:0}
.tg-a{width:22px;height:22px;border:none;border-radius:5px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:9px;transition:all .3s}
.tg-a.e{background:rgba(59,130,246,.15);color:#3b82f6}.tg-a.e:hover{background:#3b82f6;color:white}
.tg-a.d{background:rgba(var(--er),.15);color:var(--err)}.tg-a.d:hover{background:var(--err);color:white}
.empty{text-align:center;padding:20px;color:var(--tx3)}.empty i{font-size:20px;margin-bottom:6px;display:block;opacity:.3}
.empty-s{text-align:center;padding:10px;color:var(--tx3);font-size:calc(10px*var(--fz))}

/* BUTTONS */
.btn-s{display:inline-flex;align-items:center;gap:3px;padding:6px 10px;background:var(--grad);border:none;border-radius:8px;color:white;font-size:calc(9px*var(--fz));font-weight:600;cursor:pointer;transition:all .3s;font-family:var(--ff)}.btn-s:hover{transform:translateY(-1px);box-shadow:var(--glow)}
.btn-s.ok{background:linear-gradient(135deg,var(--ok),#059669)}
.btn-g{background:transparent;border:1px solid var(--bd);color:var(--tx2);padding:6px 10px;border-radius:8px;font-size:calc(9px*var(--fz));font-weight:600;cursor:pointer;transition:all .3s;font-family:var(--ff)}.btn-g:hover{background:var(--sf2)}
.btn-p{width:100%;padding:10px;background:var(--grad);border:none;border-radius:var(--r);color:white;font-size:calc(13px*var(--fz));font-weight:700;cursor:pointer;transition:all .3s;font-family:var(--ff)}.btn-p:hover{transform:translateY(-2px);box-shadow:var(--glow)}

/* NAV */
.bnav{position:fixed;bottom:0;left:0;right:0;padding:6px 10px calc(6px + env(safe-area-inset-bottom));display:flex;justify-content:space-around;align-items:center;z-index:100;background:var(--gl);backdrop-filter:blur(30px) saturate(180%);border-top:1px solid var(--glb)}
.nb{display:flex;flex-direction:column;align-items:center;gap:1px;padding:5px 12px;border-radius:12px;cursor:pointer;color:var(--tx3);background:none;border:none;font-family:var(--ff);position:relative;transition:all .3s}
.nb:hover{color:var(--tx2)}.nb.active{color:var(--p)}
.nb i{font-size:15px;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}.nb.active i{transform:translateY(-1px) scale(1.1)}
.nb span{font-size:7px;font-weight:600}
.nb-bar{position:absolute;bottom:0;width:0;height:2px;background:var(--grad);border-radius:1px;transition:width .3s}.nb.active .nb-bar{width:14px}

/* SHEETS */
.ov{position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(5px);opacity:0;visibility:hidden;transition:all .4s;z-index:200}.ov.open{opacity:1;visibility:visible}
.bsheet{position:fixed;bottom:0;left:0;right:0;background:var(--gl);backdrop-filter:blur(40px) saturate(180%);border-top:1px solid var(--glb);border-radius:var(--r3) var(--r3) 0 0;padding:6px 16px 24px;max-height:92vh;overflow-y:auto;transform:translateY(100%);transition:transform .5s cubic-bezier(.16,1,.3,1);z-index:201;scrollbar-width:none}.bsheet::-webkit-scrollbar{display:none}.bsheet.open{transform:translateY(0)}
.bsh{width:34px;height:3px;background:rgba(255,255,255,.1);border-radius:2px;margin:3px auto 10px}
.bs-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.bs-h h3{font-family:'Space Grotesk',sans-serif;font-size:calc(16px*var(--fz));font-weight:700;display:flex;align-items:center;gap:6px}

/* ═══════════════════════════════════════════
   NEW ABSEN SYSTEM STYLES
   ═══════════════════════════════════════════ */
.bsheet-absen{max-height:95vh}

#abMenu{display:flex;flex-direction:column;gap:5px}
.mc{width:100%;padding:12px 14px;background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);color:var(--tx);font-family:var(--ff);cursor:pointer;transition:all .3s;display:flex;align-items:center;gap:10px;text-align:left}
.mc:hover{background:var(--sf2);transform:translateX(3px)}
.mc-i{width:36px;height:36px;background:linear-gradient(135deg,var(--mc),color-mix(in srgb,var(--mc) 60%,white));border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;color:white;flex-shrink:0}
.mc-t{flex:1}.mc-t b{font-size:calc(11px*var(--fz));display:block;margin-bottom:1px}.mc-t small{font-size:calc(8px*var(--fz));color:var(--tx3)}
.mc-a{color:var(--tx3);font-size:9px}

.ab-top-bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.ab-top-bar h3{font-family:'Space Grotesk',sans-serif;font-size:calc(14px*var(--fz));font-weight:700}

.ab-date-bar{background:rgba(var(--pr),.06);border:1px solid rgba(var(--pr),.12);border-radius:var(--r);padding:8px 12px;text-align:center;font-size:calc(10px*var(--fz));color:var(--tx2);margin-bottom:10px;font-weight:600}

/* ABSEN SUMMARY CARDS */
.ab-summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(65px,1fr));gap:5px;margin-bottom:10px}
.ab-sc{border-radius:10px;padding:8px 4px;text-align:center;border:2px solid;transition:transform .3s}
.ab-sc:hover{transform:translateY(-2px)}
.ab-sc-label{font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px}
.ab-sc-val{font-family:'Poppins',sans-serif;font-size:18px;font-weight:800;line-height:1}
.ab-sc-suf{font-size:8px;opacity:.6;margin-top:1px}

.ab-sc.green{background:rgba(34,197,94,.1);border-color:rgba(34,197,94,.25)}.ab-sc.green .ab-sc-label{color:#15803d}.ab-sc.green .ab-sc-val{color:#22c55e}
.ab-sc.yellow{background:rgba(234,179,8,.1);border-color:rgba(234,179,8,.25)}.ab-sc.yellow .ab-sc-label{color:#a16207}.ab-sc.yellow .ab-sc-val{color:#eab308}
.ab-sc.blue{background:rgba(59,130,246,.1);border-color:rgba(59,130,246,.25)}.ab-sc.blue .ab-sc-label{color:#1d4ed8}.ab-sc.blue .ab-sc-val{color:#3b82f6}
.ab-sc.red{background:rgba(239,68,68,.1);border-color:rgba(239,68,68,.25)}.ab-sc.red .ab-sc-label{color:#b91c1c}.ab-sc.red .ab-sc-val{color:#ef4444}
.ab-sc.purple{background:rgba(139,92,246,.1);border-color:rgba(139,92,246,.25)}.ab-sc.purple .ab-sc-label{color:#6d28d9}.ab-sc.purple .ab-sc-val{color:#8b5cf6}
.ab-sc.gray{background:rgba(107,114,128,.08);border-color:rgba(107,114,128,.2)}.ab-sc.gray .ab-sc-label{color:#4b5563}.ab-sc.gray .ab-sc-val{color:#6b7280}

/* PROGRESS */
.ab-progress-wrap{margin-bottom:12px}
.ab-prog-label{font-size:9px;color:var(--tx3);font-weight:600;margin-bottom:3px;display:flex;justify-content:space-between}
.ab-prog-bar{height:8px;background:rgba(255,255,255,.05);border-radius:4px;overflow:hidden;display:flex}
.ab-prog-seg{height:100%;transition:width .5s ease}
.ab-prog-seg.g{background:#22c55e}.ab-prog-seg.y{background:#eab308}.ab-prog-seg.b{background:#3b82f6}.ab-prog-seg.r{background:#ef4444}.ab-prog-seg.p{background:#8b5cf6}.ab-prog-seg.gr{background:#6b7280}

/* TABLE */
.ab-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
.ab-tbl{width:100%;border-collapse:separate;border-spacing:0;font-size:11px;border-radius:var(--r);overflow:hidden;border:1px solid var(--bd)}
.ab-tbl thead{background:var(--grad)}
.ab-tbl thead th{padding:10px 6px;color:white;font-weight:700;text-transform:uppercase;letter-spacing:1px;font-size:9px;text-align:center}
.ab-tbl thead th:nth-child(2){text-align:left;padding-left:10px}
.ab-tbl tbody tr{transition:background .2s}
.ab-tbl tbody tr:nth-child(even){background:rgba(255,255,255,.02)}
.ab-tbl tbody tr:nth-child(odd){background:transparent}
.ab-tbl tbody tr:hover{background:rgba(var(--pr),.04)}
.ab-tbl tbody td{padding:6px;border-bottom:1px solid var(--bd);text-align:center;vertical-align:middle}
.ab-tbl tbody tr:last-child td{border-bottom:none}
.ab-tbl .td-no{font-weight:700;color:var(--p);font-size:10px;width:32px}
.ab-tbl .td-nm{text-align:left;padding-left:10px;font-weight:600;color:var(--tx);font-size:10.5px}
.ab-tbl .td-st{min-width:120px}

/* STATUS BUTTONS IN TABLE */
.ab-st-btns{display:flex;gap:3px;justify-content:center;flex-wrap:nowrap}
.ab-st-btn{width:32px;height:28px;border:2px solid var(--bd2);border-radius:6px;background:var(--sf);color:var(--tx3);font-weight:800;font-size:10px;font-family:'Poppins',sans-serif;cursor:pointer;transition:all .25s;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.ab-st-btn:hover{transform:translateY(-1px)}
.ab-st-btn:active{transform:scale(.92)}
.ab-st-btn.on-h{background:#22c55e;border-color:#22c55e;color:white;box-shadow:0 2px 8px rgba(34,197,94,.4)}
.ab-st-btn.on-s{background:#eab308;border-color:#eab308;color:white;box-shadow:0 2px 8px rgba(234,179,8,.4)}
.ab-st-btn.on-i{background:#3b82f6;border-color:#3b82f6;color:white;box-shadow:0 2px 8px rgba(59,130,246,.4)}
.ab-st-btn.on-a{background:#ef4444;border-color:#ef4444;color:white;box-shadow:0 2px 8px rgba(239,68,68,.4)}
.ab-st-btn.on-hd{background:#ec4899;border-color:#ec4899;color:white;box-shadow:0 2px 8px rgba(236,72,153,.4)}
.ab-st-btn.on-tl{background:#ef4444;border-color:#ef4444;color:white;box-shadow:0 2px 8px rgba(239,68,68,.4)}

/* Row colors */
.ab-tbl tr.row-h{background:rgba(34,197,94,.04)!important}
.ab-tbl tr.row-s{background:rgba(234,179,8,.06)!important}
.ab-tbl tr.row-i{background:rgba(59,130,246,.06)!important}
.ab-tbl tr.row-a{background:rgba(239,68,68,.06)!important}
.ab-tbl tr.row-hd{background:rgba(236,72,153,.04)!important}
.ab-tbl tr.row-tl{background:rgba(239,68,68,.04)!important}

/* Gender labels */
.ab-gender{display:flex;align-items:center;gap:5px;padding:6px 10px;border-radius:8px;font-size:10px;font-weight:700;margin:10px 0 6px;letter-spacing:.5px}
.ab-gender.male{background:rgba(59,130,246,.08);color:#3b82f6;border:1px solid rgba(59,130,246,.15)}
.ab-gender.female{background:rgba(236,72,153,.08);color:#ec4899;border:1px solid rgba(236,72,153,.15)}

/* Capture header (shown only on download) */
.ab-capture-header{background:linear-gradient(135deg,#ec4899,#db2777);padding:20px 16px;text-align:center;border-radius:14px 14px 0 0;color:white}
.ab-ch-icon{font-size:24px;margin-bottom:8px}
.ab-ch-title{font-family:'Poppins',sans-serif;font-size:20px;font-weight:800;letter-spacing:2px}
.ab-ch-sub{font-size:11px;opacity:.8;margin-bottom:4px}
.ab-ch-date{font-size:10px;opacity:.6}
.ab-capture-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:12px;background:rgba(0,0,0,.02)}
.ab-capture-footer{text-align:center;padding:10px;font-size:9px;color:#9ca3af;border-top:1px solid #e5e7eb}

/* ACTION BTNS */
.ab-actions{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:14px}
.ab-act-btn{padding:10px;border:none;border-radius:var(--r);font-size:calc(10px*var(--fz));font-weight:700;cursor:pointer;transition:all .3s;font-family:var(--ff);display:flex;align-items:center;justify-content:center;gap:4px}
.ab-act-btn.download{background:linear-gradient(135deg,#ec4899,#db2777);color:white;grid-column:1/-1}
.ab-act-btn.download:hover{transform:translateY(-1px);box-shadow:0 4px 14px rgba(236,72,153,.4)}
.ab-act-btn.copy{background:var(--grad);color:white}
.ab-act-btn.wa{background:linear-gradient(135deg,#25d366,#128c7e);color:white}
.ab-act-btn.reset{background:var(--sf);border:1px solid var(--bd);color:var(--tx2);grid-column:1/-1}

/* ═══════════════════════════════════════════
   REST OF ORIGINAL STYLES
   ═══════════════════════════════════════════ */

/* POMODORO */
.pomo-ring-w{position:relative;width:170px;height:170px;margin:0 auto 18px}
.pomo-svg{width:100%;height:100%;transform:rotate(-90deg)}
.pr-bg{fill:none;stroke:rgba(255,255,255,.06);stroke-width:5}
.pr-fill{fill:none;stroke:url(#pg);stroke-width:5;stroke-linecap:round;stroke-dasharray:553;stroke-dashoffset:0;transition:stroke-dashoffset 1s linear}
.pomo-time{position:absolute;top:50%;left:50%;transform:translate(-50%,-55%);font-family:'Orbitron',sans-serif;font-size:calc(28px*var(--fz));font-weight:700}
.pomo-lbl{position:absolute;top:50%;left:50%;transform:translate(-50%,55%);font-size:calc(8px*var(--fz));color:var(--tx3);text-transform:uppercase;letter-spacing:3px;font-weight:700}
.pomo-ctrl{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px}
.pc{width:40px;height:40px;background:var(--sf);border:1px solid var(--bd);border-radius:50%;color:var(--tx);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s}.pc:hover{background:var(--sf2);transform:scale(1.1)}
.pc-main{width:52px;height:52px;background:var(--grad);border:none;font-size:18px;color:white;box-shadow:var(--glow)}.pc-main:hover{transform:scale(1.1)}
.pomo-modes{display:flex;gap:4px;margin-bottom:14px}
.pm{flex:1;padding:7px;background:var(--sf);border:1px solid var(--bd);border-radius:8px;color:var(--tx2);font-size:calc(9px*var(--fz));font-weight:600;cursor:pointer;transition:all .3s;font-family:var(--ff)}.pm:hover{background:var(--sf2)}.pm.active{background:var(--grad);border-color:transparent;color:white}
.pomo-stats{display:flex;gap:8px}
.pst{flex:1;text-align:center;padding:10px;background:var(--sf);border:1px solid var(--bd);border-radius:var(--r)}
.pst-v{font-family:'Orbitron',sans-serif;font-size:calc(16px*var(--fz));font-weight:700;display:block;margin-bottom:1px}
.pst-l{font-size:calc(8px*var(--fz));color:var(--tx3)}

/* PICKER */
.pk-slot{width:100%;height:90px;background:var(--sf);border:2px solid var(--bd);border-radius:var(--r2);overflow:hidden;display:flex;align-items:center;justify-content:center;margin-bottom:10px}
.pk-name{font-family:'Space Grotesk',sans-serif;font-size:calc(17px*var(--fz));font-weight:700;padding:6px}
.pk-ph{color:var(--tx3);font-size:calc(12px*var(--fz))}
.pk-result{display:none;text-align:center;margin-bottom:10px}.pk-result.show{display:block;animation:rp .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes rp{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}
.pk-rl{font-size:calc(9px*var(--fz));color:var(--tx3);text-transform:uppercase;letter-spacing:2px;margin-bottom:3px}
.pk-rn{font-family:'Orbitron',sans-serif;font-size:calc(18px*var(--fz));font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.spin-btn{width:100%;padding:12px;background:var(--grad);border:none;border-radius:var(--r);color:white;font-size:calc(13px*var(--fz));font-weight:800;font-family:'Orbitron',sans-serif;cursor:pointer;transition:all .3s;display:flex;align-items:center;justify-content:center;gap:6px;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px}
.spin-btn:hover{transform:translateY(-2px);box-shadow:0 0 30px rgba(var(--pr),.4)}.spin-btn:active{transform:scale(.97)}
.spin-btn.spinning{animation:sPl .3s ease infinite;pointer-events:none}
@keyframes sPl{0%,100%{opacity:1}50%{opacity:.6}}
.opt-ck{display:flex;align-items:center;gap:7px;cursor:pointer;font-size:calc(10px*var(--fz));color:var(--tx2);margin-bottom:6px}.opt-ck input{display:none}
.ckm{width:16px;height:16px;border:2px solid var(--bd);border-radius:3px;display:flex;align-items:center;justify-content:center;transition:all .3s;flex-shrink:0}
.opt-ck input:checked+.ckm{background:var(--p);border-color:var(--p)}.opt-ck input:checked+.ckm::after{content:'✓';color:white;font-size:9px;font-weight:700}
.ph-i{display:flex;align-items:center;gap:6px;padding:6px 8px;background:var(--sf);border:1px solid var(--bd);border-radius:6px;margin-bottom:3px;animation:su .3s}
.ph-n{width:18px;height:18px;background:var(--grad);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:7px;font-weight:700;color:white;flex-shrink:0}
.ph-nm{font-size:calc(10px*var(--fz));font-weight:600}

/* BIRTHDAY */
.birth-hero{text-align:center;padding:30px 20px}
.birth-emoji{font-size:48px;margin-bottom:12px}
.birth-title{font-family:'Space Grotesk',sans-serif;font-size:calc(18px*var(--fz));font-weight:700;margin-bottom:6px}
.birth-sub{font-size:calc(12px*var(--fz));color:var(--tx3)}
.birth-note{font-size:calc(11px*var(--fz));color:var(--tx3);text-align:center;padding:0 20px;line-height:1.6}

/* SETTINGS */
#setGate{text-align:center;padding:16px 0}
.gate-ico{width:50px;height:50px;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:22px;color:var(--warn)}
.gate-t{font-family:'Space Grotesk',sans-serif;font-size:calc(16px*var(--fz));font-weight:700;margin-bottom:12px}
.n-input{width:100%;padding:10px 14px;background:rgba(255,255,255,.03);border:2px solid var(--bd);border-radius:var(--r);color:var(--tx);font-size:calc(15px*var(--fz));text-align:center;letter-spacing:5px;font-family:'JetBrains Mono',monospace;transition:all .3s;margin-bottom:10px}.n-input:focus{outline:none;border-color:var(--p);box-shadow:0 0 0 3px rgba(var(--pr),.1)}
.gate-err{color:var(--err);font-size:calc(10px*var(--fz));margin-top:8px;opacity:0;transition:all .3s;display:flex;align-items:center;justify-content:center;gap:3px}.gate-err.show{opacity:1}
.ug{margin-bottom:18px}
.ug-t{font-size:calc(9px*var(--fz));font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--tx3);margin-bottom:8px}
.tg{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}
.to{background:var(--sf);border:2px solid var(--bd);border-radius:var(--r);padding:10px 4px;text-align:center;cursor:pointer;transition:all .3s;color:var(--tx2);font-size:calc(9px*var(--fz));font-weight:600;font-family:var(--ff)}.to:hover{background:var(--sf2);transform:translateY(-1px)}.to.active{border-color:var(--p);background:rgba(var(--pr),.08);color:var(--tx)}
.to-s{width:28px;height:28px;border-radius:50%;margin:0 auto 5px;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}.to:hover .to-s{transform:scale(1.15)}
.mg{display:grid;grid-template-columns:1fr 1fr;gap:5px}
.mo{background:var(--sf);border:2px solid var(--bd);border-radius:var(--r);padding:10px;text-align:center;cursor:pointer;transition:all .3s;color:var(--tx2);font-size:calc(10px*var(--fz));font-weight:600;font-family:var(--ff);display:flex;align-items:center;justify-content:center;gap:4px}.mo:hover{background:var(--sf2)}.mo.active{border-color:var(--p);background:rgba(var(--pr),.08);color:var(--tx)}
.fg{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}
.fo{background:var(--sf);border:2px solid var(--bd);border-radius:var(--r);padding:8px;text-align:center;cursor:pointer;transition:all .3s;color:var(--tx2);font-size:calc(11px*var(--fz));font-weight:600}.fo:hover{background:var(--sf2)}.fo.active{border-color:var(--p);background:rgba(var(--pr),.08);color:var(--tx)}
.fsr{display:flex;gap:5px}
.fsb{flex:1;padding:8px;background:var(--sf);border:2px solid var(--bd);border-radius:8px;color:var(--tx2);font-size:calc(12px*var(--fz));font-weight:700;cursor:pointer;transition:all .3s;font-family:var(--ff);text-align:center}.fsb:hover{background:var(--sf2)}.fsb.active{border-color:var(--p);background:rgba(var(--pr),.08);color:var(--tx)}
.sc{background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);padding:2px 12px}
.sr{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--bd);font-size:calc(11px*var(--fz));font-weight:500}.sr:last-child{border-bottom:none}
.sr i{margin-right:5px;color:var(--tx3)}
.tgl{width:40px;height:22px;background:var(--sf2);border-radius:11px;position:relative;cursor:pointer;transition:background .3s;flex-shrink:0}.tgl.on{background:var(--p)}
.tgl-t{position:absolute;width:16px;height:16px;background:white;border-radius:50%;top:3px;left:3px;transition:transform .3s cubic-bezier(.34,1.56,.64,1);box-shadow:0 1px 3px rgba(0,0,0,.2)}.tgl.on .tgl-t{transform:translateX(18px)}

/* TOAST */
.toast{position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(15px);background:var(--ok);color:white;padding:8px 16px;border-radius:50px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:5px;z-index:9999;opacity:0;transition:all .4s;pointer-events:none;box-shadow:0 6px 16px rgba(var(--okr),.4)}.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}

@media(max-width:480px){.app{padding:10px 8px}.hero{margin-top:60px}.hero-card{padding:18px 14px}.ck-d{font-size:calc(28px*var(--fz))}.ck-box{min-width:34px}.ck-sep{font-size:22px}.ag-grid{grid-template-columns:1fr}.qactions{gap:6px}.qa{padding:10px 4px}.qa-i{width:30px;height:30px;font-size:12px}.ab-st-btn{width:28px;height:24px;font-size:9px}}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,.05);border-radius:2px}
::selection{background:rgba(var(--pr),.3);color:var(--tx)}
