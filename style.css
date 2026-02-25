/* IX-A SMART SCHEDULE - WITH NEW ABSEN SYSTEM */
const T={Matematika:'Abdul Fatah, S.Pd.Gr.',IPA:'Mulyasari Sahara, S.Pd.',FIKIH:'Yayah, S.Pd.I',SKI:'Cucu Siti Maspupah, S.Pd.I','B. Inggris':'R. Hendra Purnama, S.Pd.','B. Indonesia':'Asep Warna Sutisna, S.Pd.','Aqidah Akhlak':'Siti Nurohmah, S.Pd.Gr.','B. Sunda':'Dedi Sopian, S.Pd.',PKn:'Hani Maria Sopandi, S.H.',IPS:'Laila Sari, S.Ag.','B. Arab':'Ihsan Mauludi, S.Pd.','Alquran Hadist':'Sahlan Mubarok, S.Pd.I',PIKIH:'Yayah, S.Pd.I','Kegiatan Keagamaan':'Tim BK'};
const IC={Matematika:'fa-calculator',IPA:'fa-flask',FIKIH:'fa-mosque',SKI:'fa-book-open','B. Inggris':'fa-language','B. Indonesia':'fa-pen-fancy','Aqidah Akhlak':'fa-hands-praying','B. Sunda':'fa-masks-theater',PKn:'fa-landmark',IPS:'fa-earth-asia','B. Arab':'fa-kaaba','Alquran Hadist':'fa-book-quran',PIKIH:'fa-mosque','Kegiatan Keagamaan':'fa-person-praying'};
const CL={Matematika:['#6366f1','#818cf8'],IPA:['#10b981','#34d399'],FIKIH:['#f59e0b','#fbbf24'],SKI:['#8b5cf6','#a78bfa'],'B. Inggris':['#3b82f6','#60a5fa'],'B. Indonesia':['#ef4444','#f87171'],'Aqidah Akhlak':['#ec4899','#f472b6'],'B. Sunda':['#14b8a6','#2dd4bf'],PKn:['#f97316','#fb923c'],IPS:['#06b6d4','#22d3ee'],'B. Arab':['#84cc16','#a3e635'],'Alquran Hadist':['#8b5cf6','#a78bfa'],PIKIH:['#f59e0b','#fbbf24'],'Kegiatan Keagamaan':['#6366f1','#818cf8']};
const SD={senin:{subjects:[{name:'Matematika',start:'08:00',end:'09:00'},{type:'break',start:'09:00',end:'09:30'},{name:'IPA',start:'09:30',end:'10:30'},{name:'SKI',start:'10:30',end:'11:00'},{type:'break',start:'11:00',end:'11:30'},{name:'SKI',start:'11:30',end:'12:00'}],piket:{ketua:'Fauzan Haidar Akram',anggota:['Aira Nazwa','Devita Maharani','Fauzan Haidar Akram','Putri Fadhilah Sari','Muhammad Rizky Maulana','Moch Nabil Fauzi','M. Shohibul Wafa']}},selasa:{subjects:[{name:'B. Arab',start:'08:00',end:'09:00'},{name:'Aqidah Akhlak',start:'09:00',end:'09:30'},{type:'break',start:'09:30',end:'10:00'},{name:'Aqidah Akhlak',start:'10:00',end:'10:30'},{name:'IPS',start:'10:30',end:'11:00'},{type:'break',start:'11:00',end:'11:30'},{name:'IPS',start:'11:30',end:'12:00'}],piket:{ketua:'Elsiana Putri Ramadhan',anggota:['Zakia Nurfadilah','Muhammad Hafiz','Mellisa Trirahma Maulida','Fadil Nurohmat','Elsiana Putri Ramadhan','Rafkha Septa Sonjaya','Rayyan Azka Malik']}},rabu:{subjects:[{name:'PIKIH',start:'08:00',end:'09:00'},{name:'B. Sunda',start:'09:00',end:'09:30'},{type:'break',start:'09:30',end:'10:00'},{name:'B. Sunda',start:'10:00',end:'10:30'},{name:'PKn',start:'10:30',end:'11:00'},{type:'break',start:'11:00',end:'11:30'},{name:'PKn',start:'11:30',end:'12:00'}],piket:{ketua:'Elsiana Putri Ramadhan',anggota:['Muhammad Iqbal Maulana','Muhammad Siddik Safaat','Muhammad Naufal Fauzan','Nadia Putri','Luthfiyah Ulul Azmy','Sofa Rachmadani Kurnia Putri','Rayyan Azka Malik']}},kamis:{subjects:[{name:'B. Inggris',start:'08:00',end:'09:00'},{name:'Matematika',start:'09:00',end:'09:30'},{type:'break',start:'09:30',end:'10:00'},{name:'Matematika',start:'10:00',end:'10:30'},{name:'B. Indonesia',start:'10:30',end:'11:00'},{type:'break',start:'11:00',end:'11:30'},{name:'B. Indonesia',start:'11:30',end:'12:00'}],piket:{ketua:'Marissa Rajiyyah Sutanto',anggota:['Dzubyan Shafiq Abdillah','Marissa Rajiyyah Sutanto','Nygita Aulia Novita','Nurmailani','Ar Rasyid Rangga Riandi','Attario Maulana']}},jumat:{subjects:[{name:'Kegiatan Keagamaan',start:'08:00',end:'09:30'},{type:'break',start:'09:30',end:'10:00'},{name:'Alquran Hadist',start:'10:00',end:'11:00'},{name:'FIKIH',start:'11:00',end:'11:30'},{type:'break',start:'11:30',end:'12:00'},{name:'FIKIH',start:'12:00',end:'12:30'}],piket:{ketua:'Dira Faturonman',anggota:['Dira Faturonman','Mutiara Eldianati Yusuf','Meisya Siti Najlima Putri Sasongko','Muhamad Rizki Swaqi Bayumi','Wahid Anggian','Siti Azqia Nur Al Fiah','Clara Calista Putri Safa Anhal','Laesa Firzan Rampatik']}}};
const ST={all:['Ar Rasyid Rangga Riandi','Attario Maulana','Dzubyan Shafiq Abdillah','Fadil Nurohmat','Fauzan Haidar Akram','Laesa Firzan Rampatik','M. Shohibul Wafa','Moch Nabil Fauzi','Muhamad Rizki Swaqi Bayumi','Muhammad Hafiz','Muhammad Iqbal Maulana','Muhammad Naufal Fauzan','Muhammad Rizky Maulana','Muhammad Siddik Safaat','Rafkha Septa Sonjaya','Rayyan Azka Malik','Wahid Anggian','Airra Nazwa','Clara Calista Putri Safa Anhal','Devita Maharani','Dira Faturonman','Elsiana Putri Ramadhan','Luthfiyah Ulul Azmy','Marissa Rajiyyah Sutanto','Marsa Wulandari','Meisya Siti Najlima Putri Sasongko','Mellisa Trirahma Maulida','Mutiara Eldianati Yusuf','Nadia Putri','Nayla Rizki Kamalia Haq','Nurmailani','Nygita Aulia Novita','Putri Fadhilah Sari','Siti Azqia Nur Al Fiah','Sofa Rachmadani Kurnia Putri','Zakia Nurfadilah'],cowo:['Ar Rasyid Rangga Riandi','Attario Maulana','Dzubyan Shafiq Abdillah','Fadil Nurohmat','Fauzan Haidar Akram','Laesa Firzan Rampatik','M. Shohibul Wafa','Moch Nabil Fauzi','Muhamad Rizki Swaqi Bayumi','Muhammad Hafiz','Muhammad Iqbal Maulana','Muhammad Naufal Fauzan','Muhammad Rizky Maulana','Muhammad Siddik Safaat','Rafkha Septa Sonjaya','Rayyan Azka Malik','Wahid Anggian'],cewe:['Airra Nazwa','Clara Calista Putri Safa Anhal','Devita Maharani','Dira Faturonman','Elsiana Putri Ramadhan','Luthfiyah Ulul Azmy','Marissa Rajiyyah Sutanto','Marsa Wulandari','Meisya Siti Najlima Putri Sasongko','Mellisa Trirahma Maulida','Mutiara Eldianati Yusuf','Nadia Putri','Nayla Rizki Kamalia Haq','Nurmailani','Nygita Aulia Novita','Putri Fadhilah Sari','Siti Azqia Nur Al Fiah','Sofa Rachmadani Kurnia Putri','Zakia Nurfadilah']};

let curDay=null,curPiket=null,editTI=null,prevDig={};
let tgsData=JSON.parse(localStorage.getItem('tgs9'))||{senin:[],selasa:[],rabu:[],kamis:[],jumat:[]};
let cfg=JSON.parse(localStorage.getItem('cfg9'))||{theme:'cyber',mode:'default',ff:'inter',fs:'normal',particles:true,scanline:false,grid:false,sounds:true,animations:true,cs:'glass',radius:'round'};
let snd=true,pomo={on:false,mode:'focus',left:25*60,total:25*60,sess:0,mins:0,iv:null};
let pickF='all',pickH=[],picking=false;

/* ══════ NEW ABSEN DATA ══════ */
let curAbType=null;
let abData={};

function loadAbData(){try{abData=JSON.parse(localStorage.getItem('abData9'))||{};}catch(e){abData={};}}
function saveAbData(){localStorage.setItem('abData9',JSON.stringify(abData));}

// SOUND
let actx;function gC(){if(!actx)actx=new(AudioContext||webkitAudioContext)();return actx;}
function tn(f,d,t='sine',v=.1){if(!snd||!cfg.sounds)return;try{const c=gC(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type=t;o.frequency.setValueAtTime(f,c.currentTime);g.gain.setValueAtTime(v,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);o.start();o.stop(c.currentTime+d);}catch(e){}}
function playClick(){tn(800,.05);tn(1200,.03,'sine',.04);}
function playOk(){tn(523,.1);setTimeout(()=>tn(659,.1),80);setTimeout(()=>tn(784,.15),160);}
function playErr(){tn(200,.12,'sawtooth',.06);}
function tgSound(){snd=!snd;document.getElementById('sndBtn').classList.toggle('muted',!snd);document.getElementById('sndIco').className=snd?'fas fa-volume-up':'fas fa-volume-mute';if(snd)playClick();}

// INIT
document.addEventListener('DOMContentLoaded',()=>{
    applyCfg();loadAbData();
    let p=0;const fill=document.getElementById('ldFill'),pct=document.getElementById('ldPct');
    function step(){p+=Math.random()*25+10;if(p>=100)p=100;fill.style.width=p+'%';pct.textContent=Math.round(p)+'%';if(p<100)setTimeout(step,200);else setTimeout(finishLoad,300);}
    setTimeout(step,400);
    setInterval(updateClock,1000);updateClock();updateLesson();setInterval(updateLesson,1000);
    initParticles();initScroll();markToday();fillDayInfo();fillStats();
    document.getElementById('gatePw')?.addEventListener('keypress',e=>{if(e.key==='Enter')checkGate();});
    const hc=document.getElementById('heroCard');
    if(hc){hc.addEventListener('mousemove',e=>{const r=hc.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hc.style.transform=`perspective(800px) rotateY(${x*4}deg) rotateX(${-y*4}deg)`;});hc.addEventListener('mouseleave',()=>{hc.style.transform='';});}
});
function finishLoad(){document.getElementById('loader').classList.add('done');setTimeout(()=>{document.getElementById('loader').style.display='none';},600);document.getElementById('app').classList.add('vis');playOk();document.querySelectorAll('.anim-in').forEach((el,i)=>setTimeout(()=>el.classList.add('v'),i*60));}
function applyCfg(){const b=document.body;b.setAttribute('data-theme',cfg.theme);b.setAttribute('data-mode',cfg.mode);b.setAttribute('data-ff',cfg.ff);b.setAttribute('data-fs',cfg.fs||'normal');b.setAttribute('data-cs',cfg.cs||'glass');b.setAttribute('data-radius',cfg.radius||'round');snd=cfg.sounds!==false;document.getElementById('gridOv')?.classList.toggle('on',!!cfg.grid);document.getElementById('scanOv')?.classList.toggle('on',!!cfg.scanline);}
function saveCfg(){localStorage.setItem('cfg9',JSON.stringify(cfg));}

// PARTICLES
function initParticles(){const c=document.getElementById('particleCanvas'),ctx=c.getContext('2d');let ps=[];function rs(){c.width=innerWidth;c.height=innerHeight;}addEventListener('resize',rs);rs();class P{constructor(){this.x=Math.random()*c.width;this.y=Math.random()*c.height;this.s=Math.random()*1.5+.5;this.vx=(Math.random()-.5)*.25;this.vy=(Math.random()-.5)*.25;this.o=Math.random()*.3+.1;this.ph=Math.random()*6.28;}update(){this.x+=this.vx;this.y+=this.vy;this.ph+=.02;if(this.x<0||this.x>c.width)this.vx*=-1;if(this.y<0||this.y>c.height)this.vy*=-1;}draw(){const rgb=getComputedStyle(document.documentElement).getPropertyValue('--pr').trim();ctx.beginPath();ctx.arc(this.x,this.y,this.s,0,6.28);ctx.fillStyle=`rgba(${rgb},${this.o+Math.sin(this.ph)*.08})`;ctx.fill();}}function init(){ps=[];for(let i=0;i<Math.min(40,Math.floor(c.width*c.height/30000));i++)ps.push(new P());}function draw(){ctx.clearRect(0,0,c.width,c.height);if(cfg.particles!==false){const rgb=getComputedStyle(document.documentElement).getPropertyValue('--pr').trim();ps.forEach(p=>{p.update();p.draw();});for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){const dx=ps[i].x-ps[j].x,dy=ps[i].y-ps[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<90){ctx.beginPath();ctx.strokeStyle=`rgba(${rgb},${.03*(1-d/90)})`;ctx.lineWidth=.5;ctx.moveTo(ps[i].x,ps[i].y);ctx.lineTo(ps[j].x,ps[j].y);ctx.stroke();}}}requestAnimationFrame(draw);}init();draw();addEventListener('resize',init);}
function initScroll(){addEventListener('scroll',()=>{const s=scrollY,h=document.documentElement.scrollHeight-innerHeight;document.getElementById('scrollProg').style.width=(h>0?(s/h)*100:0)+'%';});}

// CLOCK
function updateClock(){const n=new Date(),h=String(n.getHours()).padStart(2,'0'),m=String(n.getMinutes()).padStart(2,'0'),s=String(n.getSeconds()).padStart(2,'0');const d={h1:h[0],h2:h[1],m1:m[0],m2:m[1]};Object.entries(d).forEach(([k,v])=>{const el=document.getElementById(k);if(el&&v!==prevDig[k]){el.textContent=v;el.classList.remove('flip');void el.offsetWidth;el.classList.add('flip');}});prevDig={...d};document.getElementById('sec').textContent=s;const dn=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],mn=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];document.getElementById('dateStr').textContent=`${dn[n.getDay()]}, ${n.getDate()} ${mn[n.getMonth()]} ${n.getFullYear()}`;}
function markToday(){const d=['minggu','senin','selasa','rabu','kamis','jumat','sabtu'][new Date().getDay()];document.querySelectorAll('.dy').forEach(c=>{if(c.dataset.d===d)c.classList.add('today');});}
function fillDayInfo(){Object.keys(SD).forEach(day=>{const u=[...new Set(SD[day].subjects.filter(s=>!s.type).map(s=>s.name))];const el=document.getElementById('d'+cap(day));if(el)el.textContent=u.join(' • ');});}
function fillStats(){const d=['minggu','senin','selasa','rabu','kamis','jumat','sabtu'][new Date().getDay()];document.getElementById('stMapel').textContent=SD[d]?SD[d].subjects.filter(s=>!s.type).length:'0';}

// LESSON
function pt(s){const[h,m]=s.split(':').map(Number);return h*60+m;}
function updateLesson(){const n=new Date(),dn=['minggu','senin','selasa','rabu','kamis','jumat','sabtu'][n.getDay()];if(dn==='minggu'||dn==='sabtu'){rNL('Akhir Pekan 🎉');return;}const ds=SD[dn];if(!ds){rNL('Tidak Ada Jadwal');return;}const ct=n.getHours()*60+n.getMinutes(),cs=n.getSeconds();let cur=null,nxt=null,brk=false;for(const s of ds.subjects){const st=pt(s.start),en=pt(s.end);if(ct>=st&&ct<en){cur={...s,st,en};brk=s.type==='break';break;}if(ct<st&&!nxt)nxt=s;}if(ct<pt(ds.subjects[0].start)){const m=pt(ds.subjects[0].start)-ct;rNL(`Mulai Dalam ${Math.floor(m/60)>0?Math.floor(m/60)+'j ':''}${m`}m`);return;}if(ct>=pt(ds.subjects[ds.subjects.length-1].end)){rNL('Selesai 🎉');return;}if(cur){const rm=cur.en-ct-1,rs=60-cs,tot=cur.en-cur.st,el=ct-cur.st;rL({name:brk?'Istirahat ☕':cur.name,brk,rm,rs,pr:(el/tot)*100,teacher:brk?null:T[cur.name]});}else if(nxt){const nm=pt(nxt.start)-ct;rNL(`Jeda — ${nxt.type==='break'?'Istirahat':nxt.name} ${nm}m`);}}
function rL(d){const c=document.getElementById('lessonBox');const t=d.rm>=0?`${String(d.rm).padStart(2,'0')}:${String(d.rs).padStart(2,'0')}`:'00:00';c.className=`lesson-box${d.brk?' brk':''}`;c.innerHTML=`<div class="lb-glow"></div><div class="lb-body"><div class="lb-label">${d.brk?'Sedang':'Sekarang'}</div><div class="lb-name">${d.name}</div>${d.teacher?`<div class="lb-tchr">${d.teacher}</div>`:''}<div class="lb-timer">${t}</div><div class="lb-prog"><div class="lb-prog-bar" style="width:${Math.min(100,Math.max(0,d.pr))}%"></div></div></div>`;}
function rNL(m){const c=document.getElementById('lessonBox');c.className='lesson-box idle';c.innerHTML=`<div class="lb-glow"></div><div class="lb-body"><div class="lb-label">Status</div><div class="lb-name">${m}</div></div>`;}

// SCHEDULE
function selDay(day){playClick();curDay=day;document.getElementById('daySection').style.display='none';const sv=document.getElementById('schedView');sv.classList.add('show');document.getElementById('svT').textContent='Jadwal '+cap(day);const u=[...new Set(SD[day].subjects.filter(s=>!s.type).map(s=>s.name))];document.getElementById('svS').textContent=u.length+' mapel';rSch(day);}
function backDays(){playClick();document.getElementById('schedView').classList.remove('show');document.getElementById('daySection').style.display='block';}
function rSch(day){const d=SD[day],c=document.getElementById('tlContent');c.innerHTML='';d.subjects.forEach((s,i)=>{if(s.type==='break')c.innerHTML+=`<div class="tl brk" style="animation-delay:${i*.04}s"><div class="tl-d"></div><div class="brk-in"><i class="fas fa-mug-hot"></i> Istirahat ${s.start}-${s.end}</div></div>`;else{const a=isCur(s),ic=IC[s.name]||'fa-book',cl=CL[s.name]||['#6366f1','#818cf8'];c.innerHTML+=`<div class="tl${a?' act':''}" style="animation-delay:${i*.04}s"><div class="tl-d"></div><div class="sc${a?' act':''}"><div class="sc-i" style="background:linear-gradient(135deg,${cl[0]},${cl[1]})"><i class="fas ${ic}"></i></div><div style="flex:1"><div class="sc-n">${s.name}</div><div class="sc-tc">${T[s.name]||'-'}</div></div><div><div class="sc-tm">${s.start}</div><div class="sc-te">${s.end}</div></div></div></div>`;}});}
function isCur(s){if(s.type==='break')return false;const ct=new Date(),m=ct.getHours()*60+ct.getMinutes();return m>=pt(s.start)&&m<pt(s.end);}

// PIKET
function selPiket(day){playClick();curPiket=day;document.querySelectorAll('#piketChips .chip').forEach(b=>b.classList.remove('active'));event.target.classList.add('active');document.getElementById('piketBody').classList.add('show');const d=SD[day];document.getElementById('kName').textContent=d.piket.ketua;document.getElementById('kDay').textContent='Hari '+cap(day);rPk(day);rTgs(day);}
function rPk(day){const d=SD[day],g=document.getElementById('agGrid');g.innerHTML='';let n=1;d.piket.anggota.forEach(nm=>{if(nm!==d.piket.ketua){g.innerHTML+=`<div class="ag"><div class="ag-n">${n}</div><div class="ag-nm">${nm}</div></div>`;n++;}});}
function rTgs(day){const l=document.getElementById('tgsList'),e=document.getElementById('tgsEmpty'),it=tgsData[day]||[];if(!it.length){l.innerHTML='';e.style.display='block';}else{e.style.display='none';l.innerHTML=it.map((t,i)=>`<div class="tg-item"><div class="tg-n">${i+1}</div><div class="tg-tx">${esc(t)}</div><div class="tg-acts"><button class="tg-a e" onclick="editTgs(${i})"><i class="fas fa-edit"></i></button><button class="tg-a d" onclick="delTgs(${i})"><i class="fas fa-trash"></i></button></div></div>`).join('');}}
function esc(t){const d=document.createElement('div');d.textContent=t;return d.innerHTML;}
function showTI(){playClick();editTI=null;document.getElementById('tgsTA').value='';document.getElementById('tgsInput').classList.add('show');document.getElementById('tgsTA').focus();}
function hideTI(){document.getElementById('tgsInput').classList.remove('show');}
function saveTgs(){const t=document.getElementById('tgsTA').value.trim();if(!t||!curPiket)return;if(editTI!==null)tgsData[curPiket][editTI]=t;else tgsData[curPiket].push(t);localStorage.setItem('tgs9',JSON.stringify(tgsData));hideTI();rTgs(curPiket);playOk();toast('Tugas disimpan!');}
function editTgs(i){playClick();editTI=i;document.getElementById('tgsTA').value=tgsData[curPiket][i];document.getElementById('tgsInput').classList.add('show');document.getElementById('tgsTA').focus();}
function delTgs(i){playErr();if(confirm('Hapus?')){tgsData[curPiket].splice(i,1);localStorage.setItem('tgs9',JSON.stringify(tgsData));rTgs(curPiket);}}

// SHEET
function openSheet(id){playClick();document.getElementById(id+'Ov').classList.add('open');document.getElementById(id+'Sh').classList.add('open');if(id==='absen'){document.getElementById('abMenu').style.display='flex';document.getElementById('abDetail').style.display='none';}}
function closeSheet(id){document.getElementById(id+'Ov').classList.remove('open');document.getElementById(id+'Sh').classList.remove('open');}

// POMODORO
function pMode(m){playClick();pomo.mode=m;pomo.on=false;clearInterval(pomo.iv);const t={focus:25*60,short:5*60,long:15*60};pomo.left=t[m];pomo.total=t[m];document.getElementById('pIco').className='fas fa-play';document.querySelectorAll('.pm').forEach(b=>b.classList.toggle('active',b.dataset.m===m));updP();}
function pToggle(){playClick();if(pomo.on){pomo.on=false;clearInterval(pomo.iv);document.getElementById('pIco').className='fas fa-play';}else{pomo.on=true;document.getElementById('pIco').className='fas fa-pause';pomo.iv=setInterval(()=>{if(pomo.left<=0){clearInterval(pomo.iv);pomo.on=false;document.getElementById('pIco').className='fas fa-play';if(pomo.mode==='focus'){pomo.sess++;pomo.mins+=pomo.total/60;document.getElementById('pSess').textContent=pomo.sess;document.getElementById('pMin').textContent=Math.round(pomo.mins)+'m';}tn(880,.2);tn(1100,.15);confetti();return;}pomo.left--;updP();},1000);}}
function pReset(){playClick();pomo.on=false;clearInterval(pomo.iv);const t={focus:25*60,short:5*60,long:15*60};pomo.left=t[pomo.mode];pomo.total=t[pomo.mode];document.getElementById('pIco').className='fas fa-play';updP();}
function pSkip(){pomo.left=0;}
function updP(){const m=Math.floor(pomo.left/60),s=pomo.left`;document.getElementById('pTime').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;document.getElementById('pLbl').textContent={focus:'FOKUS',short:'ISTIRAHAT',long:'ISTIRAHAT PANJANG'}[pomo.mode];const r=document.getElementById('prFill');if(r)r.style.strokeDashoffset=553*(1-(pomo.left/pomo.total));}

// PICKER
function setPF(f){playClick();pickF=f;document.querySelectorAll('#pickSh .chip').forEach(b=>b.classList.toggle('active',b.dataset.f===f));}
function doSpin(){if(picking)return;playClick();const pool=(ST[pickF]||ST.all).filter(n=>!document.getElementById('pkExcl')?.checked||!pickH.includes(n));if(!pool.length){document.getElementById('pkSlot').innerHTML='<div class="pk-ph">Semua sudah!</div>';playErr();return;}picking=true;document.getElementById('spinBtn').classList.add('spinning');document.getElementById('pkResult').style.display='none';const sl=document.getElementById('pkSlot');let ct=0;const tot=18+Math.floor(Math.random()*8);const iv=setInterval(()=>{sl.innerHTML=`<div class="pk-name">${pool[Math.floor(Math.random()*pool.length)]}</div>`;tn(500+Math.random()*400,.02);ct++;if(ct>=tot){clearInterval(iv);const w=pool[Math.floor(Math.random()*pool.length)];sl.innerHTML=`<div class="pk-name" style="color:var(--p)">${w}</div>`;pickH.unshift(w);setTimeout(()=>{document.getElementById('pkResult').style.display='block';document.getElementById('pkResult').className='pk-result show';document.getElementById('pkRN').textContent=w;tn(523,.1);setTimeout(()=>tn(784,.1),100);setTimeout(()=>tn(1047,.2),200);confetti();rPH();document.getElementById('spinBtn').classList.remove('spinning');picking=false;},250);}},70+ct*6);}
function rPH(){const l=document.getElementById('pkHist');if(!pickH.length){l.innerHTML='<div class="empty-s">Belum ada</div>';return;}l.innerHTML=pickH.map((n,i)=>`<div class="ph-i"><div class="ph-n">${i+1}</div><div class="ph-nm">${n}</div></div>`).join('');}
function clearPH(){playClick();pickH=[];rPH();document.getElementById('pkSlot').innerHTML='<div class="pk-ph">Tekan SPIN!</div>';document.getElementById('pkResult').style.display='none';}
function confetti(){const c=document.getElementById('confettiCanvas'),ctx=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;const ps=[];const cols=['#6366f1','#ec4899','#f59e0b','#10b981','#06b6d4','#8b5cf6','#ef4444'];for(let i=0;i<60;i++)ps.push({x:innerWidth/2+(Math.random()-.5)*180,y:innerHeight/2,vx:(Math.random()-.5)*10,vy:Math.random()*-10-3,s:Math.random()*5+2,c:cols[Math.floor(Math.random()*cols.length)],r:Math.random()*360,rv:(Math.random()-.5)*8,l:1});function a(){ctx.clearRect(0,0,c.width,c.height);let alive=false;ps.forEach(p=>{if(p.l<=0)return;alive=true;p.x+=p.vx;p.y+=p.vy;p.vy+=.25;p.r+=p.rv;p.l-=.015;p.vx*=.99;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r*Math.PI/180);ctx.globalAlpha=p.l;ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s);ctx.restore();});if(alive)requestAnimationFrame(a);else ctx.clearRect(0,0,c.width,c.height);}a();}

/* ═══════════════════════════════════════════════
   NEW ABSEN SYSTEM
   ═══════════════════════════════════════════════ */

function getDateStr(){const n=new Date(),dn=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],mn=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];return `${dn[n.getDay()]}, ${n.getDate()} ${mn[n.getMonth()]} ${n.getFullYear()}`;}

function openAbsenType(type){
    playClick();curAbType=type;
    document.getElementById('abMenu').style.display='none';
    document.getElementById('abDetail').style.display='block';
    const titles={kehadiran:'Absen Kehadiran',dhuha:'Absen Solat Dhuha',keagamaan:'Absen Keagamaan',wajib:'Absen Solat Wajib',telat:'Absen Telat'};
    document.getElementById('abDetailTitle').textContent=titles[type];
    document.getElementById('abDateBar').textContent='📅 '+getDateStr();
    renderAbsenTable();
}

function backAbMenu(){playClick();document.getElementById('abMenu').style.display='flex';document.getElementById('abDetail').style.display='none';}

function abKey(type,name,sub){return `${type}_${sub?sub+'_':''}${name}`;}

function setAbStatus(idx,name,status,type,sub){
    const key=abKey(type,name,sub);
    if(abData[key]===status)delete abData[key];
    else abData[key]=status;
    saveAbData();renderAbsenTable();playClick();
}

function renderAbsenTable(){
    const type=curAbType;const wrap=document.getElementById('abTableWrap');wrap.innerHTML='';
    if(type==='kehadiran')renderKehadiran(wrap);
    else if(type==='dhuha')renderDhuha(wrap);
    else if(type==='keagamaan')renderKeagamaan(wrap);
    else if(type==='wajib')renderWajib(wrap);
    else if(type==='telat')renderTelat(wrap);
}

function makeRow(idx,name,statusBtns,currentStatus){
    const rowCls=currentStatus?` class="row-${currentStatus}"`:'';
    return `<tr${rowCls}><td class="td-no">${idx}</td><td class="td-nm">${name}</td><td class="td-st"><div class="ab-st-btns">${statusBtns}</div></td></tr>`;
}

function stBtn(name,label,status,onCls,type,sub){
    const key=abKey(type,name,sub);
    const isOn=abData[key]===status;
    return `<button class="ab-st-btn ${isOn?onCls:''}" onclick="setAbStatus(0,'${name.replace(/'/g,"\\'")}','${status}','${type}','${sub||''}')">${label}</button>`;
}

function renderKehadiran(wrap){
    let c={H:0,S:0,I:0,A:0};
    let rows='';
    ST.all.forEach((n,i)=>{
        const k=abKey('kh',n,'');const s=abData[k]||null;
        if(s==='S')c.S++;else if(s==='I')c.I++;else if(s==='A')c.A++;else c.H++;
        const cur=s==='S'?'s':s==='I'?'i':s==='A'?'a':s?'h':'';
        const btns=stBtn(n,'H','H','on-h','kh','')+stBtn(n,'S','S','on-s','kh','')+stBtn(n,'I','I','on-i','kh','')+stBtn(n,'A','A','on-a','kh','');
        rows+=makeRow(i+1,n,btns,cur);
    });
    wrap.innerHTML=`<table class="ab-tbl"><thead><tr><th style="width:32px">No</th><th style="text-align:left;padding-left:10px">Nama</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`;
    renderAbStats([{l:'Hadir',v:c.H,c:'green'},{l:'Sakit',v:c.S,c:'yellow'},{l:'Izin',v:c.I,c:'blue'},{l:'Alpha',v:c.A,c:'red'}]);
    renderAbProgress(36,[{v:c.H,c:'g'},{v:c.S,c:'y'},{v:c.I,c:'b'},{v:c.A,c:'r'}],`${((c.H/36)*100).toFixed(0)}% Hadir`);
}

function renderKeagamaan(wrap){
    let c={Ikut:0,Tidak:0,N:0};let rows='';
    ST.all.forEach((n,i)=>{
        const k=abKey('ka',n,'');const s=abData[k]||null;
        if(s==='Ikut')c.Ikut++;else if(s==='Tidak')c.Tidak++;else c.N++;
        const cur=s==='Ikut'?'h':s==='Tidak'?'a':'';
        const btns=stBtn(n,'Ikut','Ikut','on-h','ka','')+stBtn(n,'Tidak','Tidak','on-a','ka','');
        rows+=makeRow(i+1,n,btns,cur);
    });
    wrap.innerHTML=`<table class="ab-tbl"><thead><tr><th style="width:32px">No</th><th style="text-align:left;padding-left:10px">Nama</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`;
    renderAbStats([{l:'Ikut',v:c.Ikut,c:'green'},{l:'Tidak',v:c.Tidak,c:'red'},{l:'Belum',v:c.N,c:'gray'}]);
    const f=c.Ikut+c.Tidak;renderAbProgress(36,[{v:c.Ikut,c:'g'},{v:c.Tidak,c:'r'},{v:c.N,c:'gr'}],`${f>0?((c.Ikut/f)*100).toFixed(0):0}% Ikut`);
}

function renderDhuha(wrap){
    let c={Solat:0,Tidak:0,Haid:0,N:0};let html='';
    html+=`<div class="ab-gender male"><i class="fas fa-mars"></i> Laki-Laki</div><table class="ab-tbl"><thead><tr><th style="width:32px">No</th><th style="text-align:left;padding-left:10px">Nama</th><th>Status</th></tr></thead><tbody>`;
    ST.cowo.forEach((n,i)=>{
        const k=abKey('dh',n,'');const s=abData[k]||null;
        if(s==='Solat')c.Solat++;else if(s==='Tidak')c.Tidak++;else c.N++;
        const cur=s==='Solat'?'h':s==='Tidak'?'a':'';
        html+=makeRow(i+1,n,stBtn(n,'Solat','Solat','on-h','dh','')+stBtn(n,'Tidak','Tidak','on-a','dh',''),cur);
    });
    html+=`</tbody></table><div class="ab-gender female"><i class="fas fa-venus"></i> Perempuan</div><table class="ab-tbl"><thead><tr><th style="width:32px">No</th><th style="text-align:left;padding-left:10px">Nama</th><th>Status</th></tr></thead><tbody>`;
    ST.cewe.forEach((n,i)=>{
        const k=abKey('dh',n,'');const s=abData[k]||null;
        if(s==='Solat')c.Solat++;else if(s==='Tidak')c.Tidak++;else if(s==='Haid')c.Haid++;else c.N++;
        const cur=s==='Solat'?'h':s==='Tidak'?'a':s==='Haid'?'hd':'';
        html+=makeRow(i+1,n,stBtn(n,'Solat','Solat','on-h','dh','')+stBtn(n,'Tidak','Tidak','on-a','dh','')+stBtn(n,'Haid','Haid','on-hd','dh',''),cur);
    });
    html+=`</tbody></table>`;
    wrap.innerHTML=html;
    renderAbStats([{l:'Solat',v:c.Solat,c:'green'},{l:'Tidak',v:c.Tidak,c:'red'},{l:'Haid',v:c.Haid,c:'purple'},{l:'Belum',v:c.N,c:'gray'}]);
    const f=c.Solat+c.Tidak+c.Haid;renderAbProgress(36,[{v:c.Solat,c:'g'},{v:c.Tidak,c:'r'},{v:c.Haid,c:'p'},{v:c.N,c:'gr'}],`${f>0?((c.Solat/f)*100).toFixed(0):0}% Solat`);
}

function renderWajib(wrap){
    let c={Solat:0,Tidak:0,Sakit:0,Haid:0,N:0};let html='';
    html+=`<div class="ab-gender male"><i class="fas fa-mars"></i> Laki-Laki</div><table class="ab-tbl"><thead><tr><th style="width:32px">No</th><th style="text-align:left;padding-left:10px">Nama</th><th>Status</th></tr></thead><tbody>`;
    ST.cowo.forEach((n,i)=>{
        const k=abKey('wj',n,'');const s=abData[k]||null;
        if(s==='Solat')c.Solat++;else if(s==='Tidak')c.Tidak++;else if(s==='Sakit')c.Sakit++;else c.N++;
        const cur=s==='Solat'?'h':s==='Tidak'?'a':s==='Sakit'?'s':'';
        html+=makeRow(i+1,n,stBtn(n,'Solat','Solat','on-h','wj','')+stBtn(n,'Tidak','Tidak','on-a','wj','')+stBtn(n,'Sakit','Sakit','on-s','wj',''),cur);
    });
    html+=`</tbody></table><div class="ab-gender female"><i class="fas fa-venus"></i> Perempuan</div><table class="ab-tbl"><thead><tr><th style="width:32px">No</th><th style="text-align:left;padding-left:10px">Nama</th><th>Status</th></tr></thead><tbody>`;
    ST.cewe.forEach((n,i)=>{
        const k=abKey('wj',n,'');const s=abData[k]||null;
        if(s==='Solat')c.Solat++;else if(s==='Tidak')c.Tidak++;else if(s==='Sakit')c.Sakit++;else if(s==='Haid')c.Haid++;else c.N++;
        const cur=s==='Solat'?'h':s==='Tidak'?'a':s==='Sakit'?'s':s==='Haid'?'hd':'';
        html+=makeRow(i+1,n,stBtn(n,'Solat','Solat','on-h','wj','')+stBtn(n,'Tidak','Tidak','on-a','wj','')+stBtn(n,'Sakit','Sakit','on-s','wj','')+stBtn(n,'Haid','Haid','on-hd','wj',''),cur);
    });
    html+=`</tbody></table>`;
    wrap.innerHTML=html;
    renderAbStats([{l:'Solat',v:c.Solat,c:'green'},{l:'Tidak',v:c.Tidak,c:'red'},{l:'Sakit',v:c.Sakit,c:'yellow'},{l:'Haid',v:c.Haid,c:'purple'},{l:'Belum',v:c.N,c:'gray'}]);
    const f=c.Solat+c.Tidak+c.Sakit+c.Haid;renderAbProgress(36,[{v:c.Solat,c:'g'},{v:c.Tidak,c:'r'},{v:c.Sakit,c:'y'},{v:c.Haid,c:'p'},{v:c.N,c:'gr'}],`${f>0?((c.Solat/f)*100).toFixed(0):0}% Solat`);
}

function renderTelat(wrap){
    let c={Telat:0,OK:0};let rows='';
    ST.all.forEach((n,i)=>{
        const k=abKey('tl',n,'');const s=abData[k]||null;
        if(s==='Telat')c.Telat++;else c.OK++;
        const cur=s==='Telat'?'tl':'';
        rows+=makeRow(i+1,n,stBtn(n,'✓','Telat','on-tl','tl',''),cur);
    });
    wrap.innerHTML=`<table class="ab-tbl"><thead><tr><th style="width:32px">No</th><th style="text-align:left;padding-left:10px">Nama</th><th>Telat?</th></tr></thead><tbody>${rows}</tbody></table>`;
    renderAbStats([{l:'Tepat Waktu',v:c.OK,c:'green'},{l:'Telat',v:c.Telat,c:'red'}]);
    renderAbProgress(36,[{v:c.OK,c:'g'},{v:c.Telat,c:'r'}],`${((c.OK/36)*100).toFixed(0)}% Tepat Waktu`);
}

function renderAbStats(items){
    document.getElementById('abSummary').innerHTML=items.map(i=>`<div class="ab-sc ${i.c}"><div class="ab-sc-label">${i.l}</div><div class="ab-sc-val">${i.v}</div><div class="ab-sc-suf">siswa</div></div>`).join('');
}

function renderAbProgress(total,segs,label){
    let bar='';segs.forEach(s=>{const pct=total>0?((s.v/total)*100):0;bar+=`<div class="ab-prog-seg ${s.c}" style="width:${pct}%"></div>`;});
    document.getElementById('abProgress').innerHTML=`<div class="ab-prog-label"><span>${label}</span><span>${total} siswa</span></div><div class="ab-prog-bar">${bar}</div>`;
}

function resetAbsen(){
    if(!confirm('Reset semua data absen '+curAbType+'?'))return;
    const prefix={kehadiran:'kh_',dhuha:'dh_',keagamaan:'ka_',wajib:'wj_',telat:'tl_'}[curAbType];
    Object.keys(abData).forEach(k=>{if(k.startsWith(prefix))delete abData[k];});
    saveAbData();renderAbsenTable();playOk();toast('Data direset!');
}

// BUILD TEXT
function buildAbTxt(){
    const n=new Date(),dn=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    let m=`*LAPORAN ABSEN IX-A*\n📅 ${dn[n.getDay()]}, ${n.getDate()}/${n.getMonth()+1}/${n.getFullYear()}\n\n`;
    if(curAbType==='kehadiran'){
        const iz=[],sk=[],al=[];ST.all.forEach(nm=>{const s=abData[abKey('kh',nm,'')];if(s==='I')iz.push(nm);if(s==='S')sk.push(nm);if(s==='A')al.push(nm);});
        m+='*Absen Kehadiran*\n';if(iz.length)m+='\n*Izin:*\n'+iz.map((x,i)=>`${i+1}. ${x}`).join('\n')+'\n';if(sk.length)m+='\n*Sakit:*\n'+sk.map((x,i)=>`${i+1}. ${x}`).join('\n')+'\n';if(al.length)m+='\n*Alfa:*\n'+al.map((x,i)=>`${i+1}. ${x}`).join('\n')+'\n';if(!iz.length&&!sk.length&&!al.length)m+='_Semua hadir!_ ✅\n';
    }else if(curAbType==='dhuha'){
        m+='*Absen Solat Dhuha*\n\n*Laki-Laki:*\n';ST.cowo.forEach((x,i)=>{m+=`${i+1}. ${x}: ${abData[abKey('dh',x,'')]||'-'}\n`;});m+='\n*Perempuan:*\n';ST.cewe.forEach((x,i)=>{m+=`${i+1}. ${x}: ${abData[abKey('dh',x,'')]||'-'}\n`;});
    }else if(curAbType==='keagamaan'){
        m+='*Absen Keagamaan*\n';ST.all.forEach((x,i)=>{m+=`${i+1}. ${x}: ${abData[abKey('ka',x,'')]||'-'}\n`;});
    }else if(curAbType==='wajib'){
        m+='*Absen Solat Wajib*\n\n*Laki-Laki:*\n';ST.cowo.forEach((x,i)=>{m+=`${i+1}. ${x}: ${abData[abKey('wj',x,'')]||'-'}\n`;});m+='\n*Perempuan:*\n';ST.cewe.forEach((x,i)=>{m+=`${i+1}. ${x}: ${abData[abKey('wj',x,'')]||'-'}\n`;});
    }else if(curAbType==='telat'){
        const t=ST.all.filter(x=>abData[abKey('tl',x,'')]==='Telat');m+='*Absen Telat*\n';m+=t.length?t.map((x,i)=>`${i+1}. ${x}`).join('\n'):'_Tidak ada yang telat_ ✅';
    }
    return m;
}

function copyAbText(){const m=buildAbTxt();navigator.clipboard.writeText(m).then(()=>{playOk();toast('Berhasil disalin! 📋');}).catch(()=>{const ta=document.createElement('textarea');ta.value=m;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);playOk();toast('Berhasil disalin! 📋');});}
function sendAbWA(){playOk();window.open(`https://api.whatsapp.com/send?phone=6282124142078&text=${encodeURIComponent(buildAbTxt())}`,'_blank');}

// DOWNLOAD AS IMAGE
function downloadAbsen(){
    const btn=document.getElementById('abDownBtn');btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Proses...';btn.style.pointerEvents='none';
    const hdr=document.getElementById('abCaptureHeader');const ftr=document.getElementById('abCaptureFooter');
    const capSum=document.getElementById('abCaptureSummary');
    hdr.style.display='block';ftr.style.display='block';
    document.getElementById('abCapTitle').textContent={kehadiran:'ABSEN KEHADIRAN',dhuha:'ABSEN SOLAT DHUHA',keagamaan:'ABSEN KEAGAMAAN',wajib:'ABSEN SOLAT WAJIB',telat:'ABSEN TELAT'}[curAbType];
    document.getElementById('abCapDate').textContent=getDateStr();
    const cap=document.getElementById('abCaptureArea');
    cap.style.background='white';cap.style.color='#1f2937';cap.style.padding='0';cap.style.borderRadius='14px';cap.style.overflow='hidden';

    setTimeout(()=>{
        html2canvas(cap,{scale:2,backgroundColor:'#ffffff',useCORS:true,logging:false,scrollY:-window.scrollY}).then(canvas=>{
            const link=document.createElement('a');const now=new Date();
            link.download=`Absen-${curAbType}-IX-A_${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}.png`;
            link.href=canvas.toDataURL('image/png',1.0);link.click();
            playOk();toast('Download berhasil! 📋');resetCapStyle();
        }).catch(e=>{console.error(e);toast('Gagal download');resetCapStyle();});
    },400);

    function resetCapStyle(){hdr.style.display='none';ftr.style.display='none';cap.style.background='';cap.style.color='';cap.style.padding='';cap.style.borderRadius='';cap.style.overflow='';btn.innerHTML='<i class="fas fa-download"></i> Download';btn.style.pointerEvents='';}
}

// SETTINGS
function checkGate(){if(document.getElementById('gatePw').value==='1974'){playOk();document.getElementById('setGate').style.display='none';document.getElementById('setCont').style.display='block';syncUI();}else{playErr();const e=document.getElementById('gateErr');e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2000);}}
function syncUI(){document.querySelectorAll('.to').forEach(o=>o.classList.toggle('active',o.dataset.t===cfg.theme));document.querySelectorAll('.mo').forEach(o=>{if(o.dataset.m)o.classList.toggle('active',o.dataset.m===cfg.mode);if(o.dataset.cs)o.classList.toggle('active',o.dataset.cs===cfg.cs);});document.querySelectorAll('.fo').forEach(o=>o.classList.toggle('active',o.dataset.ff===cfg.ff));['particles','scanline','grid','sounds','animations'].forEach(k=>{const el=document.getElementById('tg'+{particles:'P',scanline:'Sc',grid:'G',sounds:'Snd',animations:'Anim'}[k]);if(el)el.classList.toggle('on',!!cfg[k]);});}
function setTheme(t){playClick();cfg.theme=t;document.body.setAttribute('data-theme',t);document.querySelectorAll('.to').forEach(o=>o.classList.toggle('active',o.dataset.t===t));saveCfg();}
function cycleTheme(){const ts=['cyber','rose','ocean','sunset','emerald','neon'];setTheme(ts[(ts.indexOf(cfg.theme)+1)%ts.length]);}
function setMode(m){playClick();cfg.mode=m;document.body.setAttribute('data-mode',m);document.querySelectorAll('[data-m]').forEach(o=>o.classList.toggle('active',o.dataset.m===m));saveCfg();}
function setFF(f){playClick();cfg.ff=f;document.body.setAttribute('data-ff',f);document.querySelectorAll('.fo').forEach(o=>o.classList.toggle('active',o.dataset.ff===f));saveCfg();}
function setFS(s){playClick();cfg.fs=s;document.body.setAttribute('data-fs',s);saveCfg();}
function setCS(s){playClick();cfg.cs=s;document.body.setAttribute('data-cs',s);document.querySelectorAll('[data-cs]').forEach(o=>o.classList.toggle('active',o.dataset.cs===s));saveCfg();}
function setRadius(r){playClick();cfg.radius=r;document.body.setAttribute('data-radius',r);saveCfg();}
function tgOpt(k){playClick();cfg[k]=!cfg[k];const map={particles:'tgP',scanline:'tgSc',grid:'tgG',sounds:'tgSnd',animations:'tgAnim'};const el=document.getElementById(map[k]);if(el)el.classList.toggle('on',cfg[k]);if(k==='grid')document.getElementById('gridOv')?.classList.toggle('on',cfg[k]);if(k==='scanline')document.getElementById('scanOv')?.classList.toggle('on',cfg[k]);if(k==='sounds'){snd=cfg[k];document.getElementById('sndBtn')?.classList.toggle('muted',!snd);document.getElementById('sndIco').className=snd?'fas fa-volume-up':'fas fa-volume-mute';}saveCfg();}
function navTo(s){playClick();document.querySelectorAll('.nb').forEach(b=>b.classList.remove('active'));document.querySelector(`[data-s="${s}"]`)?.classList.add('active');if(s==='hero')scrollTo({top:0,behavior:'smooth'});else if(s==='piket')document.getElementById('piketSec')?.scrollIntoView({behavior:'smooth'});}
function toast(m){const t=document.getElementById('toast');document.getElementById('toastMsg').textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500);}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}
