/* ── PROJECT DATA ──
   Edit the text fields below to add your own descriptions.
   To add a photo, replace imageSrc: '' with imageSrc: 'images/yourfile.jpg'
── */
const projects = {
  topology: {
    category: 'Design', categoryClass: 'design',
    title: 'Topology Optimization',
    subtitle: 'MIT Carstensen Group · 2024–Present',
    imageSrc: '', imagePlaceholder: 'topology.jpg',
    body: `<p>As a researcher in the Carstensen Group at MIT, I developed a human-in-the-loop multi-material topology optimization algorithm that strengthens material interfaces and reduces premature failure in additively manufactured parts.</p>
           <p>The work was presented at the Engineering Mechanics Institute Conference in Anaheim, CA (May 2025) and a co-authored publication is currently in progress.</p>
           <p>[Add more detail about your research here — methods, findings, implications.]</p>`,
    tags: ['Topology Optimization', 'Additive Manufacturing', 'MATLAB', 'FEA', 'MIT']
  },
  alpineboard: {
    category: 'Design', categoryClass: 'design',
    title: 'Alpine Light Board',
    subtitle: 'Smart Climbing Training Device · MIT · 2025',
    imageSrc: '', imagePlaceholder: 'alpineboard.jpg',
    body: `<p>Designed and fabricated a smart hangboard for rock climbers that integrates custom PCB design, embedded Arduino programming, RGB LED hold indicators, and a Streamlit web application for workout programming and tracking.</p>
           <p>The board attaches to a pull-up bar or tree branch, making it portable for approaches. LED indicators show which holds to use, and a load cell sensor tracks rest and work intervals.</p>
           <p>[Add more detail about your design process, fabrication, and lessons learned here.]</p>`,
    tags: ['PCB Design', 'Arduino', 'KiCad', 'Streamlit', 'Python', 'CNC Machining']
  },
  blasttruss: {
    category: 'Design', categoryClass: 'design',
    title: 'Blast Truss Design',
    subtitle: 'Army Research Laboratory · West Point · 2018',
    imageSrc: '', imagePlaceholder: 'blasttruss.jpg',
    body: `<p>Won the 15th Annual MIT Soldier Design Competition for a novel underbody armor truss design to protect vehicles from buried blast events.</p>
           <p>The project resulted in a published technical report: Orr et al., "Buried Blast Performance and Analysis of Additively Manufactured TI-6AL-4V Truss Structures," Army Research Laboratory Technical Report 8917, 2020.</p>
           <p>[Add more detail about your design methodology, testing, and results here.]</p>`,
    tags: ['Structural Engineering', 'Additive Manufacturing', 'Ti-6Al-4V', 'FEA', 'ARL']
  },
  dday: {
    category: 'Lead', categoryClass: 'lead',
    title: "D-Day '80 Commemorative Airborne Operation",
    subtitle: 'Normandy, France · June 2024',
    imageSrc: '', imagePlaceholder: 'dday.jpg',
    body: `<p>Served as the Battalion Communications Officer for the 173rd Airborne Brigade Combat Team during the D-Day 80th Anniversary Commemorative Airborne Operation over Normandy, France.</p>
           <p>Coordinated communication and network architecture across U.S. partner units and multinational stakeholders to support one of the most significant commemorative military operations in recent history.</p>
           <p>[Add more detail about your role, the operation, and what made it significant here.]</p>`,
    tags: ['173rd ABCT', 'Airborne Operations', 'Multinational', 'Communications', 'Normandy']
  },
  saberjunction: {
    category: 'Lead', categoryClass: 'lead',
    title: "Saber Junction '22",
    subtitle: 'Multinational Exercise · 173rd ABCT · 2022',
    imageSrc: '', imagePlaceholder: 'saberjunction.jpg',
    body: `<p>Led communications and network integration for Saber Junction 2022, a large-scale multinational training exercise involving the 173rd Airborne Brigade Combat Team and partner nations across Europe.</p>
           <p>Coordinated with U.S. partner units and multinational stakeholders to design, develop, and execute comprehensive communication and network architectures in a complex, dynamic environment.</p>
           <p>[Add more detail about your specific role, challenges overcome, and outcomes here.]</p>`,
    tags: ['173rd ABCT', 'Multinational', 'Network Architecture', 'Exercise Planning', 'NATO']
  },
  itn: {
    category: 'Lead', categoryClass: 'lead',
    title: 'Integrated Tactical Network Deployment',
    subtitle: 'Battalion-wide Cloud Network · 173rd ABCT · 2022–2024',
    imageSrc: '', imagePlaceholder: 'itn.jpg',
    body: `<p>Led Battalion-wide implementation of the Army's new cloud-based Integrated Tactical Network — a next-generation communications infrastructure serving 656 personnel across multiple international operating environments.</p>
           <p>Managed cross-functional coordination between vendor teams, multinational partners, and internal stakeholders to deliver a complex technical rollout on an operationally relevant timeline. The network supported two subsequent international deployments.</p>
           <p>[Add more detail about the technical challenges, stakeholder management, and lessons learned here.]</p>`,
    tags: ['Cloud Infrastructure', 'Program Management', 'Stakeholder Coordination', 'Army', 'ITN']
  },
  montblanc: {
    category: 'Explore', categoryClass: 'explore',
    title: 'Mont Blanc · 4,808m',
    subtitle: 'Chamonix, France',
    imageSrc: '', imagePlaceholder: 'montblanc.jpg',
    body: `<p>Summited Mont Blanc, the highest peak in the Alps at 4,808 meters, via the Goûter Route from Chamonix, France.</p>
           <p>[Add your story here — when you climbed it, who you went with, what the experience was like, and what it meant to you.]</p>
           <p>[You can also mention Gran Paradiso and other summits in this section if you'd like to group your mountaineering here.]</p>`,
    tags: ['Mountaineering', 'Alps', 'Mont Blanc', 'Chamonix', 'High Altitude']
  },
  climbing: {
    category: 'Explore', categoryClass: 'explore',
    title: 'Technical Rock Climbing',
    subtitle: 'Big Wall Routes',
    imageSrc: '', imagePlaceholder: 'climbing.jpg',
    body: `<p>Technical rock climber with experience on multi-pitch and big wall routes.</p>
           <p>[Add your climbing story here — where you've climbed, notable routes, how long you've been climbing, and what draws you to the sport. This is also a great place to connect the Alpine Light Board project to your personal passion for climbing.]</p>`,
    tags: ['Rock Climbing', 'Big Wall', 'Trad Climbing', 'Multi-pitch']
  },
  sfrg: {
    category: 'Explore', categoryClass: 'explore',
    title: 'SFRG Treasurer',
    subtitle: 'Family Readiness Group · Vicenza, Italy · 2 years',
    imageSrc: '', imagePlaceholder: 'sfrg.jpg',
    body: `<p>Served as Treasurer of the Soldier and Family Readiness Group (SFRG) for two years in Vicenza, Italy, supporting soldiers and their families stationed overseas with the 173rd Airborne Brigade Combat Team.</p>
           <p>Managed group finances, coordinated events, and served as a resource for families navigating the unique challenges of military life abroad.</p>
           <p>[Add more personal detail about what this experience meant to you and the impact you had on the community here.]</p>`,
    tags: ['Community', 'Volunteer', 'Military Families', 'Leadership', 'Vicenza']
  }
};

/* ── PAGE ROUTING ── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo(0, 0);
}

function showProject(key) {
  const p = projects[key];
  if (!p) return;

  document.getElementById('project-category').textContent = p.category;
  document.getElementById('project-category').className = 'project-category ' + p.categoryClass;
  document.getElementById('project-title').textContent = p.title;
  document.getElementById('project-subtitle').textContent = p.subtitle;
  document.getElementById('project-body').innerHTML = p.body;

  const wrap = document.getElementById('project-image-wrap');
  wrap.innerHTML = '';
  if (p.imageSrc) {
    const img = document.createElement('img');
    img.src = p.imageSrc;
    img.alt = p.title;
    wrap.appendChild(img);
  } else {
    const ph = document.createElement('div');
    ph.className = 'project-image-placeholder';
    ph.textContent = p.imagePlaceholder;
    wrap.appendChild(ph);
  }

  const tagsEl = document.getElementById('project-tags');
  tagsEl.innerHTML = '';
  (p.tags || []).forEach(tag => {
    const span = document.createElement('span');
    span.className = 'project-tag';
    span.textContent = tag;
    tagsEl.appendChild(span);
  });

  showPage('project');
}
