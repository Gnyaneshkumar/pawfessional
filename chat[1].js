/* ═══════════════════════════════════════════════════════
   PawedIn – BarkBot AI Chat
   Powered by Claude (Anthropic API)
═══════════════════════════════════════════════════════ */

const SYSTEM_PROMPT = `You are BarkBot, the AI career advisor for PawedIn — the professional networking site exclusively for dogs.

You speak with warmth, wit, and mild absurdist humor. You help dogs with:
- Career advice and job searching (fetch engineer, squirrel analyst, belly rub consultant, etc.)
- Writing professional bios and summaries
- Negotiating treat and bone compensation packages
- Dealing with difficult coworkers (especially mailmen and cats)
- Work-life balance (couch time vs. walk time)
- Building a personal brand as a dog
- Networking tips at the dog park
- General professional development — all from a dog's perspective

Guidelines:
- Keep answers concise (2–4 sentences usually).
- Use dog-relevant metaphors and analogies.
- Occasionally use 🐾 🦴 🐶 emojis but don't overdo it.
- Never break character — you are always advising dogs, not humans.
- Be encouraging and enthusiastic like a good dog should be.`;

/* ── State ── */
let chatHistory     = [];
let chatOpen        = false;
let chatInitialized = false;

/* ════════════════════════════════════════
   TOGGLE CHAT WINDOW
════════════════════════════════════════ */
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chat-window').classList.toggle('open', chatOpen);

  if (chatOpen && !chatInitialized) {
    chatInitialized = true;
    // Hide the pulsing badge once opened
    const badge = document.querySelector('.chat-fab .fab-badge');
    if (badge) badge.style.display = 'none';
    // Welcome message
    addBotMessage(
      "Woof! 👋 I'm BarkBot, your AI career advisor on PawedIn.\n\n" +
      "Whether you need help writing your bio, negotiating your treat package, " +
      "or finding the perfect fetch engineering role — I've got your paws covered. " +
      "What can I help you with today? 🐾"
    );
  }

  if (chatOpen) {
    setTimeout(() => {
      const inp = document.getElementById('chat-input');
      if (inp) inp.focus();
    }, 300);
  }
}

/* ════════════════════════════════════════
   MESSAGE RENDERING
════════════════════════════════════════ */
function addBotMessage(text) {
  const msgs = document.getElementById('chat-messages');
  const now  = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const div  = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML  =
    '<div class="msg-avatar">🤖</div>' +
    '<div>' +
      '<div class="msg-bubble">' + escapeHtml(text).replace(/\n/g, '<br/>') + '</div>' +
      '<div class="msg-time">' + now + '</div>' +
    '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMessage(text) {
  const msgs = document.getElementById('chat-messages');
  const now  = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const div  = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML  =
    '<div class="msg-avatar">🐶</div>' +
    '<div>' +
      '<div class="msg-bubble">' + escapeHtml(text) + '</div>' +
      '<div class="msg-time">' + now + '</div>' +
    '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;

  // Hide quick-suggestion chips after first real message
  const sugg = document.getElementById('chat-suggestions');
  if (sugg) sugg.style.display = 'none';
}

function escapeHtml(str) {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;');
}

/* ════════════════════════════════════════
   TYPING INDICATOR
════════════════════════════════════════ */
function showTyping() {
  const msgs = document.getElementById('chat-messages');
  const div  = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = 'typing-msg';
  div.innerHTML =
    '<div class="msg-avatar">🤖</div>' +
    '<div class="typing-indicator">' +
      '<div class="typing-dot"></div>' +
      '<div class="typing-dot"></div>' +
      '<div class="typing-dot"></div>' +
    '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing-msg');
  if (t) t.remove();
}

/* ════════════════════════════════════════
   SEND MESSAGE  (calls Anthropic API)
════════════════════════════════════════ */
async function sendChat() {
  const input   = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const text    = input.value.trim();
  if (!text) return;

  // Clear input and disable controls
  input.value       = '';
  input.disabled    = true;
  sendBtn.disabled  = true;

  // Render user message
  addUserMessage(text);
  chatHistory.push({ role: 'user', content: text });

  showTyping();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // NOTE FOR SELF-HOSTING:
        // Add your API key below and the danger header:
        // 'x-api-key': 'YOUR_ANTHROPIC_API_KEY',
        // 'anthropic-dangerous-direct-browser-access': 'true',
        // 'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: chatHistory,
      }),
    });

    const data = await response.json();
    removeTyping();

    if (data.content && data.content[0] && data.content[0].text) {
      const reply = data.content[0].text;
      chatHistory.push({ role: 'assistant', content: reply });
      addBotMessage(reply);
    } else if (data.error) {
      console.error('API error:', data.error);
      addBotMessage('Woof! 😅 My nose is a bit off today — couldn\'t fetch a response. Try again in a moment!');
      chatHistory.pop(); // remove failed user message from history
    }

  } catch (err) {
    removeTyping();
    console.error('Network error:', err);
    addBotMessage('Uh oh, I seem to have chased my own tail. 🐕 Check your connection and try again!');
    chatHistory.pop();
  }

  // Re-enable controls
  input.disabled   = false;
  sendBtn.disabled = false;
  input.focus();
}

/* ════════════════════════════════════════
   QUICK SUGGESTION CHIPS
════════════════════════════════════════ */
function sendSuggestion(btn) {
  const input = document.getElementById('chat-input');
  input.value = btn.textContent.trim();
  sendChat();
}
