export default function HomePage() {
  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand a-muted" href="#">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#g)"/>
              <path d="M8 15l2.6-4.2c.5-.8 1.7-.8 2.2 0L16 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="g" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7C5CFF"/>
                  <stop offset="1" stopColor="#4BD0FF"/>
                </linearGradient>
              </defs>
            </svg>
            <span>????</span>
          </a>
          <div className="nav-links">
            <a className="a-muted" href="#features">??</a>
            <a className="a-muted" href="#pricing">??</a>
            <a className="a-muted" href="#cases">??</a>
            <a className="a-muted" href="#faq">????</a>
          </div>
          <div className="nav-actions">
            <a className="btn ghost" href="#">??</a>
            <a className="btn primary" href="#cta">????</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="badge">?????????</div>
          <h1>??????????????????</h1>
          <p>
            ?????????????????????????????????????????
            ???????????????????
          </p>
          <div className="hero-cta">
            <a className="btn primary" href="#cta">????</a>
            <a className="btn ghost" href="#features">????</a>
          </div>
          <div className="badges">
            <span className="badge">? ???? 1s</span>
            <span className="badge">?? ?????</span>
            <span className="badge">?? ????</span>
            <span className="badge">?? SEO ??</span>
          </div>

          <div className="logos">
            {['Acme','Vita','Nova','Lumen','Helix','Aurora'].map((v, i) => (
              <div key={i} className="card" style={{padding:'14px 16px',display:'flex',alignItems:'center',justifyContent:'center',height:64}}>
                <span className="a-muted">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="features" className="section">
        <div className="container">
          <h2>????????????</h2>
          <p className="a-muted">?????????????????????????</p>
          <div className="card-grid">
            {[
              {title:'????',desc:'SSR + ?????CLS/LCP ??????????',icon:'?'},
              {title:'SEO ??',desc:'???????????OG ?????????',icon:'??'},
              {title:'?????',desc:'??????????????????????',icon:'??'},
              {title:'??????',desc:'?????????????????????',icon:'??'},
              {title:'?????',desc:'????????????????????',icon:'??'},
              {title:'?????',desc:'?? HTTPS???????Cookie ??????',icon:'???'},
            ].map((f,i)=>(
              <div key={i} className="card">
                <div style={{fontSize:22}}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="a-muted">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid-2" style={{marginTop:26}}>
            <div>
              <h3>????????</h3>
              <p className="a-muted">???????????????????????????????????????????????????</p>
              <div className="kpi">
                {[{k:'TTFB',v:'< 100ms'},{k:'LCP',v:'< 1.5s'},{k:'SEO',v:'95+'},{k:'???',v:'99.99%'}].map((x,i)=>(
                  <div key={i} className="kpi-item">
                    <div className="small a-muted">{x.k}</div>
                    <div style={{fontSize:22,fontWeight:800}}>{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="screenshot">
              <svg viewBox="0 0 800 520" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1b2132"/>
                    <stop offset="100%" stopColor="#0e1322"/>
                  </linearGradient>
                  <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7C5CFF"/>
                    <stop offset="100%" stopColor="#4BD0FF"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="800" height="520" rx="20" fill="url(#bg)"/>
                <rect x="20" y="20" width="760" height="32" rx="8" fill="#0b0f1a"/>
                {[...Array(6)].map((_,i)=> (
                  <rect key={i} x="40" y={80 + 64*i} width={200 + 80*i} height="24" rx="6" fill="url(#bar)" opacity={0.65 - i*0.08}/>
                ))}
                {[...Array(6)].map((_,i)=> (
                  <rect key={'r'+i} x="380" y={80 + 64*i} width="360" height="24" rx="6" fill="#0b0f1a"/>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="section">
        <div className="container">
          <h2>?????</h2>
          <p className="a-muted">????????????</p>
          <div className="testimonials">
            {[
              {name:'??',role:'????? @ ??A',text:'??????? 32% ???????????????'},
              {name:'??',role:'???? @ ??B',text:'???????????????????????'},
              {name:'Zhang Wei',role:'Head of Brand @ SaaS C',text:'?????????????????????'},
            ].map((t,i)=> (
              <div key={i} className="card">
                <p style={{fontSize:16,lineHeight:1.7}}>?{t.text}?</p>
                <hr className="sep" />
                <div className="small">{t.name} ? <span className="a-muted">{t.role}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <h2>?????????</h2>
          <p className="a-muted">???????????????</p>
          <div className="price-grid">
            {[
              {tag:'??',price:'?0',desc:'??????',items:['????','???','????']},
              {tag:'??',price:'?3999/?',desc:'??????',items:['????','???','????','????']},
              {tag:'??',price:'????',desc:'???????',items:['????','SLA ??','????','????']},
            ].map((p,i)=> (
              <div key={i} className="card price">
                <div className="tag">{p.tag}</div>
                <div className="num">{p.price}</div>
                <p className="a-muted">{p.desc}</p>
                <ul style={{paddingLeft:18,margin:'10px 0 18px'}}>
                  {p.items.map((it,idx)=>(<li key={idx} className="a-muted" style={{margin:'6px 0'}}>? {it}</li>))}
                </ul>
                <a className="btn primary" href="#cta">????</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <h2>????</h2>
          <div className="faq">
            {[
              {q:'??????????',a:'????????????????????????????'},
              {q:'?????????',a:'??????????????????????????'},
              {q:'?????????',a:'??????????????????????'},
            ].map((f,i)=> (
              <div key={i} className="faq-item">
                <div style={{fontWeight:700}}>{f.q}</div>
                <div className="a-muted">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section" style={{paddingBottom:80}}>
        <div className="container">
          <div className="card" style={{display:'grid',gap:14,padding:28,alignItems:'center'}}>
            <h3>??????????????????</h3>
            <p className="a-muted">?????7 ???????????</p>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <a className="btn primary" href="#">????</a>
              <a className="btn ghost" href="#">????</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10}}>
          <div className="small">? {new Date().getFullYear()} ????. ???????</div>
          <div className="small">?ICP? 12345678 ? ? ????</div>
        </div>
      </footer>
    </main>
  );
}
