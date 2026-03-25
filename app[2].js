/* ═══════════════════════════════════════════════════════
   PawedIn – Main App Logic
   Rendering, interactions, navigation
═══════════════════════════════════════════════════════ */

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
  renderTrending();
  renderSuggestions();
  renderNetwork();
  renderJobs();
  renderSkills();
});

/* ════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════ */
function showPage(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  window.scrollTo(0, 0);
}

/* ════════════════════════════════════════
   FEED – POSTS
════════════════════════════════════════ */
function renderPosts() {
  const container = document.getElementById('feed-posts');
  container.innerHTML = posts.map((p, i) => `
    <div class="feed-post" style="animation-delay:${i * 0.08}s">
      <div class="post-header">
        <div class="post-avatar" onclick="showPage('profile', null)">${p.emoji}</div>
        <div class="post-meta">
          <div class="post-author" onclick="showPage('profile', null)">${p.author}</div>
          <div class="post-role">${p.role}</div>
          <div class="post-time">${p.time} · 🌍</div>
        </div>
        <button class="post-menu">•••</button>
      </div>
      <div class="post-body">${formatPost(p.text)}</div>
      ${p.emoji_post ? `<div class="post-image">${p.emoji_post}</div>` : ''}
      <div class="post-stats">
        <span>🐾 ${p.likes.toLocaleString()} reactions</span>
        <span>${p.comments} comments · ${p.reposts} reposts</span>
      </div>
      <div class="post-buttons">
        <button class="react-btn" onclick="toggleLike(this, ${i})">🐾 Like</button>
        <button class="react-btn" onclick="showToast('💬 Comments coming soon!')">💬 Comment</button>
        <button class="react-btn" onclick="showToast('🔁 Reposted to your pack!')">🔁 Repost</button>
        <button class="react-btn" onclick="showToast('📨 Shared via Bark DM!')">📨 Send</button>
      </div>
    </div>
  `).join('');
}

function formatPost(text) {
  return text
    .replace(/\n/g, '<br/>')
    .replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
}

function toggleLike(btn) {
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '🐾 Liked!' : '🐾 Like';
}

function submitPost() {
  const ta = document.querySelector('.post-input');
  const text = ta.value.trim();
  if (!text) { showToast('🐾 Write something first!'); return; }

  posts.unshift({
    emoji: '🐶',
    author: 'Biscuit McFluffins',
    role: 'Senior Stick Fetcher',
    time: 'Just now',
    text,
    likes: 0,
    comments: 0,
    reposts: 0,
  });

  renderPosts();
  ta.value = '';
  ta.style.height = '44px';
  showToast('🎉 Post shared with your pack!');
}

/* ════════════════════════════════════════
   FEED – SIDEBAR
════════════════════════════════════════ */
function renderTrending() {
  document.getElementById('trending-list').innerHTML = trending.map(t => `
    <div class="trending-item" onclick="showToast('🔍 Showing posts for ${t.tag}')">
      <span class="trending-tag">${t.tag}</span>
      <span class="trending-count">${t.count}</span>
    </div>
  `).join('');
}

function renderSuggestions() {
  document.getElementById('suggest-list').innerHTML = suggestions.map((s, i) => `
    <div class="suggest-dog">
      <div class="suggest-ava">${s.emoji}</div>
      <div class="suggest-info">
        <div class="suggest-name">${s.name}</div>
        <div class="suggest-role">${s.role}</div>
      </div>
      <button class="connect-btn" id="sug-${i}" onclick="connectSug(${i})">Connect</button>
    </div>
  `).join('');
}

function connectSug(i) {
  const btn = document.getElementById('sug-' + i);
  btn.classList.add('connected');
  btn.textContent = '✓ Connected';
  showToast('🐾 Connection request sent!');
}

/* ════════════════════════════════════════
   NETWORK PAGE
════════════════════════════════════════ */
function renderNetwork() {
  document.getElementById('network-grid').innerHTML = dogs.map((d, i) => `
    <div class="dog-card">
      <div class="dog-card-banner"></div>
      <div class="dog-card-avatar">${d.emoji}</div>
      <div class="dog-card-name">${d.name}</div>
      <div class="dog-card-role">${d.role}</div>
      <button class="dog-card-btn" id="nc-${i}" onclick="connectCard('nc-${i}')">+ Connect</button>
    </div>
  `).join('');

  document.getElementById('request-grid').innerHTML = requestDogs.map((d, i) => `
    <div class="dog-card">
      <div class="dog-card-banner" style="background:linear-gradient(135deg,#c8622a,#e8b84b)"></div>
      <div class="dog-card-avatar">${d.emoji}</div>
      <div class="dog-card-name">${d.name}</div>
      <div class="dog-card-role">${d.role}</div>
      <button class="dog-card-btn" id="req-${i}" onclick="acceptRequest('req-${i}', '${d.name}')">✓ Accept</button>
    </div>
  `).join('');
}

function connectCard(id) {
  const btn = document.getElementById(id);
  btn.style.background = 'var(--paw)';
  btn.style.color = '#fff';
  btn.textContent = '✓ Connected';
  showToast('🐾 Connection request sent! Woof!');
}

function acceptRequest(id, name) {
  const btn = document.getElementById(id);
  btn.style.background = 'var(--success)';
  btn.style.color = '#fff';
  btn.textContent = '✓ Accepted';
  showToast(`🎉 You're now connected with ${name}!`);
}

/* ════════════════════════════════════════
   JOBS PAGE
════════════════════════════════════════ */
function renderJobs() {
  document.getElementById('job-list').innerHTML = jobs.map((j, i) => `
    <div class="job-item ${i === 0 ? 'active' : ''}" id="job-item-${i}" onclick="selectJob(${i})">
      <div class="job-company">
        <div class="job-logo">${j.logo}</div>
        <div>
          <div class="job-title">${j.title}</div>
          <div class="job-company-name">${j.company}</div>
        </div>
      </div>
      <div class="job-meta">📍 ${j.location} · ${j.type}</div>
      <div class="job-meta">${j.salary}</div>
      <span class="job-tag">Posted ${j.posted}</span>
    </div>
  `).join('');
  renderJobDetail(0);
}

function selectJob(i) {
  document.querySelectorAll('.job-item').forEach(el => el.classList.remove('active'));
  document.getElementById('job-item-' + i).classList.add('active');
  renderJobDetail(i);
}

function renderJobDetail(i) {
  const j = jobs[i];
  document.getElementById('job-detail').innerHTML = `
    <div class="job-detail-logo">${j.logo}</div>
    <div class="job-detail-title">${j.title}</div>
    <div class="job-detail-company">${j.company}</div>
    <div class="job-detail-meta">📍 ${j.location} · ${j.type} · ${j.salary} · Posted ${j.posted}</div>
    <button class="apply-btn" onclick="openApply('${j.title} at ${j.company}')">Apply Now 🐾</button>
    <button class="save-job-btn" onclick="showToast('💾 Job saved to your bone pile!')">Save</button>
    <div class="job-section-title">About this role</div>
    <div class="job-desc">${j.about}</div>
    <div class="job-section-title">Requirements</div>
    <ul class="job-desc">${j.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
    <div class="job-section-title">Benefits &amp; Perks</div>
    <ul class="job-desc">${j.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
  `;
}

/* ════════════════════════════════════════
   PROFILE PAGE
════════════════════════════════════════ */
function renderSkills() {
  document.getElementById('skill-tags').innerHTML = skills.map(s => `
    <div class="skill-tag">
      <span class="skill-endorse">⭐</span>
      ${s.name}
      <span style="color:var(--muted);font-size:0.7rem;">${s.level} endorsements</span>
    </div>
  `).join('');
}

/* ════════════════════════════════════════
   MODALS
════════════════════════════════════════ */
function openModal(id) {
  document.getElementById('modal-' + id).classList.add('open');
}

function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('open');
}

function openApply(title) {
  document.getElementById('apply-job-title').textContent = title;
  openModal('apply');
}

function submitApplication() {
  closeModal('apply');
  showToast('🐾 Application submitted! Stay by the phone. Or the door.');
}

/* ════════════════════════════════════════
   TOAST
════════════════════════════════════════ */
let toastTimeout;

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 3000);
}
