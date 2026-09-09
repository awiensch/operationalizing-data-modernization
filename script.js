const data = window.CONFERENCE_DATA;

function esc(s=""){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}

function renderAgenda(){
 const el=document.getElementById("agenda-list"); if(!el) return;
 el.innerHTML=data.agenda.map(a=>{
   const links=(a.session_ids||[]).map(id=>{
     const s=data.sessions.find(x=>x.id===id);
     return s?`<a class="mini-session" href="session.html?id=${encodeURIComponent(id)}">${esc(s.title)}</a>`:"";
   }).join("");
   return `<div class="agenda-row ${a.kind==="breakout"?"agenda-breakout":""}">
     <div class="agenda-time">${esc(a.time)}</div>
     <div><div class="agenda-title">${esc(a.title)}</div>${a.speaker?`<div class="session-speaker">${esc(a.speaker)}</div>`:""}${links?`<div class="mini-sessions">${links}</div>`:""}</div>
     <div class="agenda-location">${esc(a.location||"")}</div>
   </div>`;
 }).join("");
}

function renderSessions(filter="all"){
 const el=document.getElementById("session-grid"); if(!el) return;
 const list=data.sessions.filter(s=>filter==="all"||s.track===filter);
 el.innerHTML=list.map(s=>`<article class="session-card">
   <div class="session-meta"><span>${esc(s.track)}</span><span>${esc(s.time)}</span></div>
   <h3>${esc(s.title)}</h3>
   <div class="session-speaker">${esc(s.speaker)}${s.organization?` · ${esc(s.organization)}`:""}</div>
   <a class="session-link" href="session.html?id=${encodeURIComponent(s.id)}">View abstract & session details →</a>
 </article>`).join("");
 document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));
}

function renderSessionPage(){
 const el=document.getElementById("session-page"); if(!el) return;
 const id=new URLSearchParams(location.search).get("id");
 const s=data.sessions.find(x=>x.id===id);
 if(!s){el.innerHTML=`<section class="not-found"><div class="container"><p class="eyebrow">SESSION NOT FOUND</p><h1>That session could not be found.</h1><a class="button primary" href="index.html#sessions">Back to sessions</a></div></section>`;return;}
 el.innerHTML=`<section class="session-hero"><div class="container">
   <a class="crumb" href="index.html#sessions">← All sessions</a>
   <p class="eyebrow" style="margin-top:30px">${esc(s.track)} · ${esc(s.time)}</p>
   <h1>${esc(s.title)}</h1>
   <div class="session-info"><span>🎤 ${esc(s.speaker)}</span>${s.organization?`<span>· ${esc(s.organization)}</span>`:""}<span>· Room ${esc(s.room)}</span></div>
 </div></section>
 <section class="container session-content">
   <div class="content"><div class="session-status"><strong>Live session link coming soon</strong><span>Teams links will be added to this page prior to the conference.</span></div><h2>Abstract</h2><div class="abstract">${esc(s.abstract)}</div></div>
   <aside class="sidebar">
     <div class="action-card"><h3>Join the session</h3><p>The Teams link will be posted here before the conference.</p><a class="placeholder-button" href="#" onclick="return false">Teams link coming soon</a></div>
     <div class="speaker-box"><h3>Presenter</h3><p><strong>${esc(s.speaker)}</strong></p>${s.organization?`<p>${esc(s.organization)}</p>`:""}</div>
     <div class="action-card" style="background:#eef4f0;color:var(--deep)"><h3>Recording</h3><p style="color:#607274">Recordings will be added here after the conference for on-demand viewing.</p><span class="placeholder-button">Available after event</span></div>
   </aside>
 </section>`;
 document.title=s.title+" | Operationalizing Data Modernization";
}

renderAgenda(); renderSessions();
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>renderSessions(b.dataset.filter)));
renderSessionPage();
