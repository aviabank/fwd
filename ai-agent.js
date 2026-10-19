/* Avia — Scripted AI Bot for AviaForward (€FWD) */
(function () {
  'use strict';
  var state = { isOpen: false };
  function el(id) { return document.getElementById(id); }

  var CONTRACT = 'Eddd5iW7RWhkNd4JWUjgK9TByeSkdWELgDg4rmimZkBA';
  var POOL = '4ivvUsgGixdoWasY8EYLcYENKZ1GuozBuaVXHBz4bDKf';
  var AUDT = '4EqVmfTc2ftfdcXCbR95UEsoMdab3WstSj5MEPVW2kqb';
  var PROOF = '5rzYSSWCgiY5dUf7JG1i1fBUkNWbYA51fuzWhMYx6t6A';
  var CERT = 'BZ7ZJA3FgWshS9fqhhavfBXZ8165aC7h4FUhCrztcQjg';

  var KB = {
    'what': {
      title: 'What is AviaForward (€FWD)?',
      answer: [
        '**AviaForward (€FWD)** — the Aircraft Forward Token of AviaTrust on Solana.',
        '',
        '€FWD lets you **lock the purchase price of a specific aircraft** for a future date.',
        '',
        '**How it works:**',
        '· Buyer pays a small premium today',
        '· Price locked in €FWD metadata',
        '· At maturity — deliver or cash-settle',
        '· Backed by aircraft-layer token (€B787, €A350, etc.)',
        '',
        '**Use case:**',
        '· Lessor plans to sell a €B787 in 3 years',
        '· Wants to lock today\'s price',
        '· Buyer agrees → both sign €FWD',
        '· Price is certain, no speculation',
        '',
        '**Key point:** No €AUDT — no €FWD. Every forward is gated by on-chain audit.',
        '',
        '📄 Contract: `' + CONTRACT + '`',
        '⛓ Chain: Solana (Token-2022, 1% transfer fee + Transfer Hook)'
      ].join('\n')
    },
    'audit': {
      title: 'How €FWD is gated by audit',
      answer: [
        '**Three gates — enforced by Transfer Hook (code, not policy):**',
        '',
        '**Gate 1 — €AUDT burn**',
        '· Burn X €AUDT per forward creation',
        '· No burn → mint blocked',
        '',
        '**Gate 2 — €PROOF issue**',
        '· €PROOF must be valid on every transfer',
        '· Expired → forward frozen',
        '· Aircraft must still be audited',
        '',
        '**Gate 3 — €CERT stake**',
        '· Trader must lock €CERT',
        '· Anti-spam + skin-in-the-game',
        '',
        '🔍 €AUDT: `' + AUDT + '`',
        '✅ €PROOF: `' + PROOF + '`',
        '💎 €CERT: `' + CERT + '`'
      ].join('\n')
    },
    'buy': {
      title: 'How to buy €FWD?',
      answer: [
        '**Buy AviaForward (€FWD) on Solana:**',
        '',
        '**1. OpenSea**',
        '→ https://opensea.io/token/solana/' + CONTRACT,
        '',
        '**2. GeckoTerminal**',
        '→ https://www.geckoterminal.com/solana/pools/' + POOL,
        '',
        '**3. Uniswap**',
        '→ https://app.uniswap.org/explore/tokens/solana/' + CONTRACT,
        '',
        '💡 Recommend OpenSea or GeckoTerminal for lowest slippage.'
      ].join('\n')
    },
    'contract': {
      title: 'Contract & Pool',
      answer: [
        '**AviaForward (€FWD) Contract**',
        '',
        '`' + CONTRACT + '`',
        '',
        '**Meteora DAMM V2 Pool**',
        '`' + POOL + '`',
        '',
        '**Verify on:**',
        '· Solscan: https://solscan.io/token/' + CONTRACT,
        '· GeckoTerminal: https://www.geckoterminal.com/solana/pools/' + POOL,
        '· OpenSea: https://opensea.io/token/solana/' + CONTRACT
      ].join('\n')
    },
    'price': {
      title: 'Price & Target',
      answer: [
        '**AviaForward (€FWD) Price**',
        '',
        '· Launch price: **€0.01**',
        '· Current: **$0.009999** (Oct 2026)',
        '· Community target: **×100 → €1.00**',
        '',
        '**Live price:**',
        '· GeckoTerminal: https://www.geckoterminal.com/solana/pools/' + POOL,
        '· OpenSea: https://opensea.io/token/solana/' + CONTRACT,
        '',
        '⚠️ The ×100 is a community-stated target, not a promise.'
      ].join('\n')
    },
    'forward': {
      title: 'What is an Aircraft Forward?',
      answer: [
        '**Aircraft Forward** — an agreement to buy or sell a specific aircraft at a fixed price on a future date.',
        '',
        '**How a traditional forward works:**',
        '1. Buyer and seller agree on price',
        '2. Delivery date locked',
        '3. On expiry — aircraft delivered or cash-settled',
        '4. Both sides are obligated (unlike options)',
        '',
        '**€FWD tokenizes this:**',
        '· Price locked in metadata',
        '· Aircraft identified by token (€B787 etc.)',
        '· Settlement via €ESCR escrow',
        '· Transfer gated by €PROOF',
        '',
        '⚠️ Forward = obligation, not right. Both sides must perform.'
      ].join('\n')
    },
    'ecosystem': {
      title: 'What is AviaTrust?',
      answer: [
        '**AviaTrust — aviation tokenization ecosystem on Solana.**',
        '',
        '**L1 — Aircraft Layer:**',
        '· €B787 · €A350 · €C929 · €A220 · €E195 · €IL96',
        '',
        '**L2 — Financial Layer:**',
        '· **€ESCR** — Escrow',
        '· **€DLCT** — Tokenized Documentary LC',
        '· **€SBLCT** — Standby LC',
        '· **€LUMP** — Lump Sum',
        '',
        '**L3 — Audit Layer:**',
        '· **€AUDT** — Audit working unit',
        '· **€PROOF** — Audit certificate',
        '· **€CERT** — Revenue share',
        '',
        '**L4 — Derivatives Layer:**',
        '· **€SWAP** — Interest Rate Swap',
        '· **€FWD** — Aircraft Forward (you are here)',
        '· **€RIGHT** — Purchase Right',
        '· **€FLEET** — Fleet Futures'
      ].join('\n')
    },
    'risk': {
      title: 'Is €FWD risky?',
      answer: [
        '**Honest answer: YES.**',
        '',
        '**Known risks:**',
        '· Aircraft price volatility',
        '· Counterparty risk (mitigated by €PROOF)',
        '· Liquidity risk on secondary market',
        '· Delivery risk (aircraft not delivered on time)',
        '',
        '**What reduces risk:**',
        '· €PROOF gate — no unverified counterparties',
        '· €CERT staking — skin in the game',
        '· Insurance pool — covers defaults',
        '· Mint/Freeze authority disabled',
        '',
        '⚠️ **Not financial advice.** Forwards can lose 100% of value.'
      ].join('\n')
    }
  };

  var SUGGESTIONS = [
    { key: 'what',      label: '📅 What is €FWD?' },
    { key: 'audit',     label: '🔒 How it is audited' },
    { key: 'buy',       label: '🛒 How to buy?' },
    { key: 'contract',  label: '🔗 Contract & Pool' },
    { key: 'price',     label: '💰 Price & Target' },
    { key: 'forward',   label: '📖 What is a forward?' },
    { key: 'ecosystem', label: '🌍 AviaTrust' },
    { key: 'risk',      label: '⚠️ Is it risky?' }
  ];

  function createUI() {
    var btn = document.createElement('button');
    btn.id = 'avia-btn';
    btn.className = 'avia-btn';
    btn.innerHTML = '<span class="avia-btn-icon">📅</span><span class="avia-btn-label">Avia</span>';
    document.body.appendChild(btn);

    var win = document.createElement('div');
    win.id = 'avia-window';
    win.className = 'avia-window';
    win.innerHTML = [
      '<div class="avia-header">',
      '  <div class="avia-header-left">',
      '    <img src="fwd_logo.png" alt="Avia" class="avia-avatar" onerror="this.style.display=\'none\'" />',
      '    <div>',
      '      <div class="avia-name">Avia</div>',
      '      <div class="avia-status">AI assistant · €FWD</div>',
      '    </div>',
      '  </div>',
      '  <button class="avia-close" id="avia-close">×</button>',
      '</div>',
      '<div class="avia-messages" id="avia-messages"></div>',
      '<div class="avia-suggestions" id="avia-suggestions"></div>',
      '<div class="avia-external">',
      '  <a href="https://opensea.io/token/solana/' + CONTRACT + '" target="_blank">🖼️ OpenSea</a>',
      '  <a href="https://t.me/aviatrust" target="_blank">📱 TG</a>',
      '  <a href="https://x.com/aviatrust" target="_blank">🐦 X</a>',
      '</div>',
      '<div class="avia-footer">Scripted assistant · Not financial advice</div>'
    ].join('');
    document.body.appendChild(win);

    el('avia-btn').addEventListener('click', toggle);
    el('avia-close').addEventListener('click', toggle);

    addMessage('agent', 'Hi! I am Avia — assistant for AviaForward (€FWD). Pick a topic below.');
    renderSuggestions();
  }

  function renderSuggestions() {
    var box = el('avia-suggestions');
    if (!box) return;
    box.innerHTML = '';
    SUGGESTIONS.forEach(function (item) {
      var b = document.createElement('button');
      b.className = 'avia-suggestion';
      b.textContent = item.label;
      b.addEventListener('click', function () { showAnswer(item.key); });
      box.appendChild(b);
    });
  }

  function addMessage(role, text) {
    var box = el('avia-messages');
    if (!box) return;
    var msg = document.createElement('div');
    msg.className = 'avia-msg avia-msg-' + role;
    var bubble = document.createElement('div');
    bubble.className = 'avia-bubble';
    bubble.innerHTML = formatText(text);
    msg.appendChild(bubble);
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  function formatText(text) {
    var safe = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    safe = safe.replace(/`([^`]+)`/g, '<code>$1</code>');
    safe = safe.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    safe = safe.replace(/\n/g, '<br />');
    safe = safe.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    return safe;
  }

  function showAnswer(key) {
    var item = KB[key];
    if (!item) { addMessage('agent', 'Sorry, no info on that.'); return; }
    addMessage('user', item.title);
    setTimeout(function () { addMessage('agent', item.answer); }, 250);
  }

  function toggle() {
    state.isOpen = !state.isOpen;
    var win = el('avia-window');
    var btn = el('avia-btn');
    if (state.isOpen) { win.classList.add('avia-open'); btn.classList.add('avia-btn-hidden'); }
    else { win.classList.remove('avia-open'); btn.classList.remove('avia-btn-hidden'); }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createUI);
  else createUI();
})();
