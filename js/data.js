/* data.js — your gallery works. Replace src with your file path or URL */
window.DATA = {
  // placeholder gradients (used while src is empty)
  colors: [
    'linear-gradient(135deg,#29d9ff,#0a4fa8)',
    'linear-gradient(135deg,#5a7bff,#2a1d8a)',
    'linear-gradient(135deg,#3a4250,#0f1218)',
    'linear-gradient(135deg,#00e5ff,#0a8cff)',
    'linear-gradient(135deg,#7a5cff,#1d1d6e)',
    'linear-gradient(135deg,#cfd8e2,#6d7a8a)'
  ],
  // badge text per type
  labels: { ui: 'UI/UX', grafis: 'Graphic', web: 'Frontend', foto: 'Photo', video: 'Video' },
  // p = page ('design' | 'foto-video'), t = type (ui | grafis | web | foto | video)
  // src = 'assets/images/xxx.jpg' or 'assets/videos/xxx.mp4', tall:1 = portrait card
  items: [
    { p: 'design', t: 'ui', n: 'Mobile Banking App', s: 'UI/UX · Figma', src: '' },
    { p: 'design', t: 'grafis', n: 'Music Festival Poster', s: 'Graphic Design · Illustrator', src: '', tall: 1 },
    { p: 'design', t: 'ui', n: 'Admin Dashboard', s: 'UI/UX · Figma', src: '' },
    { p: 'design', t: 'grafis', n: 'Logo & Brand Identity', s: 'Graphic Design', src: '' },
    { p: 'design', t: 'web', n: 'Online Store Website', s: 'Frontend · HTML CSS JS', src: '', tall: 1 },
    { p: 'design', t: 'web', n: 'Interactive Landing Page', s: 'Frontend · React', src: '' },
    { p: 'foto-video', t: 'foto', n: 'Outdoor Portrait', s: 'Photography', src: '', tall: 1 },
    { p: 'foto-video', t: 'video', n: 'Campus Event Aftermovie', s: 'Videography · Premiere', src: '' },
    { p: 'foto-video', t: 'foto', n: 'Coffee Product Photo', s: 'Photography · Lightroom', src: '' },
    { p: 'foto-video', t: 'video', n: 'Motion Graphic Intro', s: 'After Effects', src: '' },
    { p: 'foto-video', t: 'foto', n: 'Street Photography', s: 'Photography', src: '' },
    { p: 'foto-video', t: 'video', n: 'Company Profile Video', s: 'Videography', src: '', tall: 1 }
  ]
};
