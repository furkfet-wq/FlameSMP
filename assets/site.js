/* =========================================================
   FLAME SMP: shared script (both pages)
   ========================================================= */
/* always use the padlocked (https) address on the real domain */
const httpsTarget = l => l.protocol === 'http:' && /(^|\.)flamesmp-store\.com$/i.test(l.hostname)
  ? 'https://flamesmp-store.com' + l.pathname + l.search + l.hash : '';
if (httpsTarget(location)) location.replace(httpsTarget(location));

/* never run inside another site's frame (stops click-tricking overlays) */
if (window.top !== window.self){
  document.documentElement.style.display = 'none';
  try { window.top.location.replace(window.self.location.href); } catch {}
}

const CONFIG = {
  serverIp: 'flamesmp.dat.gg',
  serverName: 'Flame SMP',
  supportEmail: 'getsyoursaura@gmail.com',
  discordInvite: '95GuXDnyVC',
  links: {
    discord:   'https://discord.gg/95GuXDnyVC',
    support:   'https://discord.gg/95GuXDnyVC',
    rules:     'https://discord.gg/95GuXDnyVC',
    youtube:   'https://www.youtube.com/channel/UCuuaUF312YoQmD5rympsRGg?sub_confirmation=1',
    tiktok:    'https://www.tiktok.com/@thebesteditsztiktok',
    instagram: 'https://www.instagram.com/thebesteditszinsta',
    contact:   'mailto:getsyoursaura@gmail.com',
    howToJoin: 'https://www.youtube.com/watch?v=froKL4lt_D8'
  }
};

const $ = id => document.getElementById(id);
const NAME_RE = /^[A-Za-z0-9_]{2,17}$/;
const own = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const ICONS = {
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>',
  youtube:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.4v13.4a3 3 0 1 1-3-3c.3 0 .6 0 .9.1V9.1a6.4 6.4 0 1 0 5.5 6.3V8.6a8 8 0 0 0 4.6 1.5V6.7a4.6 4.6 0 0 1-4.6-4.7z"/></svg>',
  discord:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 5.2A17.6 17.6 0 0 0 15.2 3.8l-.6 1.2a16 16 0 0 0-5.2 0l-.6-1.2a17.6 17.6 0 0 0-4.4 1.4C1.6 9.4.8 13.5 1.2 17.5a17.8 17.8 0 0 0 5.4 2.7l1.1-1.8a11.4 11.4 0 0 1-1.8-.9l.4-.3a12.6 12.6 0 0 0 11.4 0l.4.3a11.4 11.4 0 0 1-1.8.9l1.1 1.8a17.8 17.8 0 0 0 5.4-2.7c.5-4.7-.8-8.7-3.2-12.3zM8.5 15.1c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2zm7 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2z"/></svg>'
};

/* =========================================================
   LANGUAGE (strings live in assets/i18n.js)
   ========================================================= */
const LANG = (() => {
  let l; try { l = localStorage.getItem('flame-lang'); } catch {}
  if (l && own(STR, l)) return l;
  const nav = navigator.language || 'en';
  if (/^zh/i.test(nav)) return /tw|hk|mo|hant/i.test(nav) ? 'zh-TW' : 'zh';
  const base = nav.split('-')[0].toLowerCase();
  if (base === 'nb' || base === 'nn') return 'no';
  if (base === 'tl') return 'fil';
  return own(STR, base) ? base : 'en';
})();
const LOCALE = LANG === 'no' ? 'nb' : LANG;
function t(key, n){
  const s = (STR[LANG] && STR[LANG][key]) || STR.en[key] || key;
  return n === undefined ? s : s.replace('{n}', () => String(n));
}
const fmtN = n => Number(n).toLocaleString(LOCALE);
document.documentElement.lang = LANG;
if ((LANGS.find(l => l.code === LANG) || {}).rtl) document.documentElement.dir = 'rtl';
function applyI18n(root = document){
  root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
}

/* =========================================================
   CURRENCY: prices are set in GBP; other currencies are converted for display only
   ========================================================= */
const CURRENCIES = ['GBP','USD','EUR','CAD','AUD','NZD','CHF','SEK','NOK','DKK','PLN','CZK','HUF','RON','TRY','UAH','RUB',
  'BRL','MXN','ARS','INR','IDR','PHP','VND','THB','MYR','SGD','JPY','KRW','CNY','HKD','TWD','AED','SAR','ZAR','EGP'];
let CUR = 'GBP';
try { const c = localStorage.getItem('flame-cur'); if (c && CURRENCIES.includes(c)) CUR = c; } catch {}
let RATES = null;
const goodRate = v => typeof v === 'number' && Number.isFinite(v) && v > 0;
const isConverted = () => CUR !== 'GBP' && !!RATES && goodRate(RATES[CUR]);
/* keep only the currencies we list, and only real positive numbers */
function cleanRates(r){
  if (!r || typeof r !== 'object') return null;
  const out = {};
  CURRENCIES.forEach(c => { if (own(r, c) && goodRate(r[c])) out[c] = r[c]; });
  return Object.keys(out).length ? out : null;
}
function fmtMoney(v, cur){
  const opts = { style:'currency', currency:cur };
  const whole = Math.abs(v - Math.round(v)) < 1e-9;
  if (v >= 1000 || (cur === 'GBP' && whole)) { opts.minimumFractionDigits = 0; opts.maximumFractionDigits = 0; }
  try { return new Intl.NumberFormat(LOCALE, opts).format(v); } catch { return cur + ' ' + v.toFixed(2); }
}
const gbpMoney = gbp => fmtMoney(gbp, 'GBP');
function money(gbp){ return isConverted() ? '≈ ' + fmtMoney(gbp * RATES[CUR], CUR) : gbpMoney(gbp); }
async function loadRates(){
  try {
    const c = JSON.parse(localStorage.getItem('flame-rates') || 'null');
    const r = c && Date.now() - c.t < 6 * 3600e3 ? cleanRates(c.r) : null;
    if (r){ RATES = r; return true; }
  } catch {}
  try {
    const d = await (await fetch('https://open.er-api.com/v6/latest/GBP')).json();
    const r = d && d.result === 'success' ? cleanRates(d.rates) : null;
    if (r){
      RATES = r;
      try { localStorage.setItem('flame-rates', JSON.stringify({ t: Date.now(), r: RATES })); } catch {}
      return true;
    }
  } catch {}
  return false;
}
function curSymbol(c){
  try { return new Intl.NumberFormat(LOCALE, { style:'currency', currency:c, currencyDisplay:'narrowSymbol' }).formatToParts(0).find(p => p.type === 'currency').value; }
  catch { return c; }
}
function curName(c){
  try { return new Intl.DisplayNames([LOCALE], { type:'currency' }).of(c); } catch { return c; }
}

/* =========================================================
   PICKERS (language on every page, currency on the store)
   ========================================================= */
const GLOBE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>';
const CHEV = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
function buildPicker(kind){
  const isLang = kind === 'lang';
  const current = isLang ? LANG : CUR;
  const items = isLang
    ? LANGS.map(l => ({ v:l.code, label:l.name, tag:l.code.toUpperCase() }))
    : CURRENCIES.map(c => ({ v:c, label:curName(c), tag:c, sym:curSymbol(c) }));
  const wrap = document.createElement('div');
  wrap.className = 'pick'; wrap.dataset.kind = kind;
  const label = () => isLang ? `${GLOBE}<span>${LANG.toUpperCase()}</span>` : `<b>${curSymbol(CUR)}</b><span>${CUR}</span>`;
  wrap.innerHTML = `
    <button class="pick-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="${t(isLang ? 'lang' : 'cur')}">${label()}${CHEV}</button>
    <div class="pick-menu">
      <div class="pick-head">${t(isLang ? 'lang' : 'cur')}</div>
      <input class="pick-search" type="search" placeholder="${t('search')}…" aria-label="${t('search')}">
      <div class="pick-list" role="menu">${items.map(i => `
        <button type="button" role="menuitemradio" aria-checked="${i.v === current}" class="${i.v === current ? 'on' : ''}" data-v="${i.v}" data-s="${(i.label + ' ' + i.v).toLowerCase()}">
          ${i.sym ? `<b>${i.sym}</b>` : ''}<span>${i.label}</span><small>${i.tag}</small>
        </button>`).join('')}
      </div>
      ${isLang ? '' : `<div class="pick-note">${t('gbpNote')}</div>`}
    </div>`;
  const btn = wrap.querySelector('.pick-btn'), search = wrap.querySelector('.pick-search');
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = !wrap.classList.contains('open');
    closePickers();
    if (open){
      wrap.classList.add('open'); btn.setAttribute('aria-expanded', 'true');
      search.value = ''; filter('');
      const on = wrap.querySelector('.pick-list .on'); if (on) on.scrollIntoView({ block:'center' });
      setTimeout(() => search.focus(), 60);
    }
  });
  const filter = q => wrap.querySelectorAll('.pick-list button').forEach(b => { b.hidden = q && !b.dataset.s.includes(q); });
  search.addEventListener('input', () => filter(search.value.trim().toLowerCase()));
  wrap.querySelector('.pick-list').addEventListener('click', async e => {
    const b = e.target.closest('button[data-v]'); if (!b) return;
    if (isLang){
      try { localStorage.setItem('flame-lang', b.dataset.v); } catch {}
      location.reload();
      return;
    }
    CUR = b.dataset.v;
    try { localStorage.setItem('flame-cur', CUR); } catch {}
    wrap.querySelectorAll('.pick-list button').forEach(x => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-checked', on); });
    btn.innerHTML = label() + CHEV;
    closePickers();
    if (CUR !== 'GBP' && !RATES){
      const ok = await loadRates();
      if (!ok) toast('Live exchange rates are unavailable right now');
    }
    if (window.onCurrencyChange) window.onCurrencyChange();
  });
  return wrap;
}
function closePickers(){
  document.querySelectorAll('.pick.open').forEach(p => { p.classList.remove('open'); p.querySelector('.pick-btn').setAttribute('aria-expanded', 'false'); });
}
document.addEventListener('click', e => { if (!e.target.closest('.pick')) closePickers(); });

/* =========================================================
   POLICIES
   ========================================================= */
const LEGAL = {
  privacy: { title:'Privacy Policy', body:`
    <p>At Flame SMP, we value your personal data and are committed to protecting your privacy. This policy outlines how we handle, protect, and process the information collected when you use our web store or purchase digital items for our server.</p>
    <h4>1. Information We Collect</h4>
    <p>When you make a purchase or interact with our store, we may collect limited information necessary to fulfill your order, including:</p>
    <ul>
      <li><b>Minecraft Information:</b> your in-game username/IGN and UUID.</li>
      <li><b>Contact Details:</b> your email address for order confirmation and receipts.</li>
      <li><b>Technical Data:</b> your IP address and basic browser details for fraud prevention and security monitoring.</li>
      <li><b>Transaction Records:</b> payment confirmation details provided by our payment processors. We do not store or have direct access to your credit card numbers or banking passwords.</li>
    </ul>
    <h4>2. Complete Privacy &amp; Data Security</h4>
    <p>All private information collected is kept completely private, encrypted, and secure. We implement appropriate technical and administrative security measures to prevent unauthorized access, loss, or misuse of your personal data.</p>
    <h4>3. How We Use Your Information</h4>
    <p>Information provided during checkout is strictly used for the following purposes:</p>
    <ul>
      <li>Processing payments and instantly delivering your in-game ranks, Shards, or perks.</li>
      <li>Verifying transactions to protect against fraudulent activity and chargebacks.</li>
      <li>Sending essential order receipts or providing customer support when requested.</li>
    </ul>
    <h4>4. No Third-Party Sharing or Sale</h4>
    <p>Your personal data is never sold, shared, rented, traded, or monetized under any circumstances. We will only share data with trusted third-party service providers (such as our payment processor, Stripe) solely to the extent necessary to complete your purchase.</p>
    <h4>5. Your Rights &amp; Data Retention</h4>
    <p>We retain transaction logs only for as long as necessary to fulfill accounting, security, and legal requirements. If you have questions about the data associated with your account or wish to request data removal, please contact our support team through our official Discord server.</p>` },

  terms: { title:'Terms of Service', body:`
    <h4>1. Acceptance of Terms</h4>
    <p>By purchasing any digital item, rank, package, virtual currency, or service ("Virtual Goods") from this store, you explicitly agree to be bound by these Terms of Service. If you do not agree, do not complete your purchase.</p>
    <h4>2. Nature of Virtual Goods &amp; Strict Non-Transferability</h4>
    <p>All Virtual Goods sold on this store are intangible, non-physical digital assets delivered directly to your designated Minecraft account. You acquire a limited, non-exclusive, revocable license to access and use these digital goods on this server network only.</p>
    <p>All Virtual Goods are strictly non-transferable. Virtual items, ranks, and perks are permanently locked to the specific Minecraft username provided at checkout and cannot be moved, transferred, traded, shared, or reassigned to another account, player, or server under any circumstances. You do not acquire any legal ownership, personal property right, or monetary entitlement in any Virtual Goods.</p>
    <h4>3. Server Rules and Disciplinary Actions</h4>
    <p>Purchasing Virtual Goods does not grant immunity from server rules or community standards. If your Minecraft account is temporarily muted, kicked, or permanently banned from the server network or Discord for violating server rules, safety guidelines, or cheating policies, you forfeit access to all active ranks, items, and perks associated with your account. No compensation, account transfer, or refund will be issued under any circumstances following a disciplinary action.</p>
    <h4>4. Service Availability, Modifications, and Wipes</h4>
    <p>Virtual Goods exist solely within the server network. We reserve the right to alter, rebalance, update, or remove virtual items, rank features, or server mechanics at any time to preserve server integrity and gameplay balance. Furthermore, temporary downtime, scheduled maintenance, or periodic server resets/wipes do not entitle any account to item transfers, refunds, or replacements.</p>
    <h4>5. Anti-Fraud &amp; Chargeback Policy</h4>
    <p>Opening a dispute, chargeback, or payment claim without prior written authorization from server administration is strictly prohibited and constitutes a material breach of contract. Any account associated with an unauthorized chargeback or payment dispute will be automatically and permanently banned from the server network, webstore, and affiliated platforms, and recorded on global fraud prevention databases.</p>` },

  refund: { title:'Refund Policy', body:`
    <h4>1. General Policy</h4>
    <p>All purchases made on the Flame SMP store, including but not limited to ranks, Shards, virtual items, claims, and in-game perks, are digital goods and non-tangible services. Because digital content is delivered immediately upon purchase, all transactions are final and strictly non-refundable, except where explicitly required by applicable law or granted at the sole discretion of the Flame SMP management team.</p>
    <h4>2. Immediate Delivery &amp; Waiver of Cancellation</h4>
    <p>By completing a transaction on our store, you acknowledge and agree that:</p>
    <ul>
      <li>Delivery of your digital goods or ranks begins immediately upon payment processing.</li>
      <li>To the maximum extent permitted by law, you expressly waive any right of withdrawal, statutory cooling-off period, or cancellation once the delivery of digital content has commenced.</li>
    </ul>
    <h4>3. Non-Refundable Circumstances</h4>
    <p>Refunds will not be issued under any of the following conditions:</p>
    <ul>
      <li><b>Punitive Actions:</b> account bans, mutes, or suspensions resulting from violations of the Flame SMP server rules or Terms of Service.</li>
      <li><b>Gameplay &amp; Server Changes:</b> loss of virtual items, Shards, or perks due to standard gameplay, server resets, updates, bug fixes, or economy balancing.</li>
      <li><b>Accidental Purchases:</b> mistaken transactions, buyers' remorse, or purchasing perks/items for the wrong username.</li>
      <li><b>Account Security:</b> purchases made due to compromised Minecraft or Discord accounts resulting from user negligence (e.g. sharing login details or failing to secure credentials).</li>
      <li><b>Unauthorized Trading:</b> real-money transactions (RMT) or trading performed outside official Flame SMP store channels.</li>
    </ul>
    <h4>4. Chargebacks, Disputes &amp; Fraud Prevention</h4>
    <p>Initiating a chargeback, payment reversal, or bank dispute without contacting our support team first is a direct breach of our store terms. Any forced chargeback will result in an immediate and permanent network ban across the Flame SMP server and store, as well as the immediate revocation of all purchased ranks and items. Flame SMP reserves the right to contest all unauthorized disputes by providing evidence of transaction logs, IP logs, delivery receipts, and server activity to payment processors.</p>
    <h4>5. Exceptional Circumstances</h4>
    <p>In rare cases (such as a technical system error leading to double billing), Flame SMP management may, at its sole discretion, review and approve a refund or issue store credit. Any approved exception is handled on a case-by-case basis and does not establish a precedent or legal obligation for future requests.</p>
    <h4>6. Payments &amp; Fulfilment</h4>
    <p>Payments on this store are processed securely by Stripe. Flame SMP handles product fulfilment and billing support.</p>
    <h4>7. Statutory Consumer Rights</h4>
    <p>Nothing in this Refund Policy excludes, restricts, or modifies any consumer rights or statutory guarantees that cannot be excluded under applicable consumer protection laws (including UK, EU, US, and local jurisdiction rules).</p>
    <h4>8. Contact &amp; Support</h4>
    <p>If you experience any issues with your order or have questions regarding a billing problem, please open a support ticket on our official Flame SMP Discord server or contact store support before reaching out to payment providers.</p>` }
};

/* =========================================================
   FOOTER (same on every page)
   ========================================================= */
function renderFooter(){
  const f = $('footer'); if (!f) return;
  f.className = 'foot rise';
  f.style.setProperty('--d', '500ms');
  f.innerHTML = `
    <a href="index.html" class="fbrand"><img src="img/logo.webp" alt="" loading="lazy" decoding="async">FLAMESMP.DAT.GG</a>
    <span class="fnote">${t('notAssoc')}</span>
    <div class="soc">
      <a data-link="youtube" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>
      <a data-link="instagram" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
      <a data-link="tiktok" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>
      <a data-link="discord" target="_blank" rel="noopener" aria-label="Discord">${ICONS.discord}</a>
    </div>
    <nav class="flinks" aria-label="Footer">
      <a href="store.html">${t('store')}</a>
      <a data-link="discord" target="_blank" rel="noopener">Discord</a>
      <a href="support.html">${t('support')}</a>
      <a data-link="rules" target="_blank" rel="noopener">${t('rules')}</a>
      <a data-link="contact">${t('contact')}</a>
      <a href="?legal=privacy" data-legal="privacy">${t('privacy')}</a>
      <a href="?legal=terms" data-legal="terms">${t('terms')}</a>
      <a href="?legal=refund" data-legal="refund">${t('refund')}</a>
    </nav>
    <a class="fmail" href="mailto:${CONFIG.supportEmail}">${t('support')}: ${CONFIG.supportEmail}</a>`;
}

/* =========================================================
   LEGAL POPUP (opens from ?legal=privacy|terms|refund, like the links in the footer)
   ========================================================= */
function buildLegal(){
  const o = document.createElement('div');
  o.className = 'overlay'; o.id = 'legal';
  o.innerHTML = `
    <div class="mbox" role="dialog" aria-modal="true" aria-labelledby="legalTitle">
      <div class="mhead">
        <div class="ic"><img src="img/logo.webp" alt=""></div>
        <div><h3 id="legalTitle"></h3><div class="kick">Flame SMP Store</div></div>
        <button class="mclose" aria-label="Close">${ICONS.close}</button>
      </div>
      <div class="mbody" id="legalBody"></div>
      <div class="mfoot">${t('notAssoc')}</div>
    </div>`;
  document.body.appendChild(o);
  o.querySelector('.mclose').onclick = closeLegal;
  o.addEventListener('click', e => { if (e.target === o) closeLegal(); });
}
function openLegal(name){
  if (!own(LEGAL, name)) return;
  $('legalTitle').textContent = LANG === 'en' ? LEGAL[name].title : t(name);
  $('legalBody').innerHTML = (LANG === 'en' ? '' : `<p class="en-note">${t('enOnly')}</p>`) + LEGAL[name].body;
  $('legalBody').scrollTop = 0;
  openOverlay($('legal'));
  const u = new URL(location.href); u.searchParams.set('legal', name); history.replaceState(null, '', u);
}
function closeLegal(){
  closeOverlay($('legal'));
  const u = new URL(location.href); u.searchParams.delete('legal'); history.replaceState(null, '', u);
}

/* overlays share scroll locking + Escape */
let lastFocus = null;
function openOverlay(o){
  lastFocus = document.activeElement;
  o.classList.add('open');
  document.documentElement.style.overflow = 'hidden';
  setTimeout(() => { const c = o.querySelector('input') || o.querySelector('.mclose'); if (c) c.focus(); }, 250);
}
function closeOverlay(o){
  if (!o || !o.classList.contains('open')) return;
  o.classList.remove('open');
  if (!document.querySelector('.overlay.open, .identify.open')) document.documentElement.style.overflow = '';
  if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll:true });
}
addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (document.querySelector('.pick.open')){ closePickers(); return; }
  const open = [...document.querySelectorAll('.overlay.open, .identify.open')].pop();
  if (!open) return;
  if (open.id === 'legal') closeLegal(); else closeOverlay(open);
});

/* =========================================================
   TOAST + COPY
   ========================================================= */
let toastTimer;
function toast(msg){
  let t = $('toast');
  if (!t){ t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role','status'); t.innerHTML = ICONS.check + '<span></span>'; document.body.appendChild(t); }
  t.querySelector('span').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}
async function copyText(txt){
  try { await navigator.clipboard.writeText(txt); }
  catch { const t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); }
}

/* =========================================================
   BOOT
   ========================================================= */
/* =========================================================
   BACKGROUND EMBERS: a few soft sparks drifting slowly upward
   ========================================================= */
function startEmbers(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = document.createElement('canvas');
  cv.className = 'embers'; cv.setAttribute('aria-hidden', 'true');
  const anchor = document.querySelector('.glow');
  anchor ? anchor.after(cv) : document.body.prepend(cv);
  const ctx = cv.getContext('2d');
  let W, H, parts = [], last = 0, run = true;
  // each ember's glow is drawn once into its own small sprite; every frame only stamps it with globalAlpha
  // (same picture as building a radial gradient per ember per frame, far less CPU)
  const sprite = (r, hue) => {
    const R = r * 5, n = Math.ceil(R * 2) + 2, c = document.createElement('canvas');
    c.width = c.height = n;
    const x = c.getContext('2d'), g = x.createRadialGradient(n / 2, n / 2, 0, n / 2, n / 2, R);
    g.addColorStop(0, `hsla(${hue + 20},100%,72%,1)`);
    g.addColorStop(.35, `hsla(${hue},100%,55%,.55)`);
    g.addColorStop(1, `hsla(${hue},100%,50%,0)`);
    x.fillStyle = g; x.beginPath(); x.arc(n / 2, n / 2, R, 0, 6.283); x.fill();
    return c;
  };
  const spawn = any => {
    const p = {
      x: Math.random() * W, y: any ? Math.random() * H : H + 10,
      r: 1 + Math.random() * 2.2, vy: 12 + Math.random() * 22, sway: Math.random() * 6.28,
      sw: 6 + Math.random() * 14, hue: 14 + Math.random() * 28, a: .25 + Math.random() * .5
    };
    p.img = sprite(p.r, p.hue);
    return p;
  };
  function size(){
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    const n = Math.round(Math.min(60, W / 26));
    while (parts.length < n) parts.push(spawn(true));
    parts.length = n;
  }
  function tick(now){
    if (!run) return;
    requestAnimationFrame(tick);
    const dt = Math.min(.05, (now - last) / 1000 || 0); last = now;
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < parts.length; i++){
      const p = parts[i];
      p.y -= p.vy * dt; p.sway += dt * .8;
      const x = p.x + Math.sin(p.sway) * p.sw;
      if (p.y < -20){ parts[i] = spawn(false); continue; }
      const fade = Math.min(1, p.y / (H * .5)) * p.a * (.7 + .3 * Math.sin(now / 400 + p.sway * 3));
      if (fade <= 0) continue;
      const h = p.img.width / 2;
      ctx.globalAlpha = fade;
      ctx.drawImage(p.img, x - h, p.y - h);
    }
    ctx.globalAlpha = 1;
  }
  addEventListener('resize', size); size();
  document.addEventListener('visibilitychange', () => { run = !document.hidden; if (run){ last = performance.now(); requestAnimationFrame(tick); } });
  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', () => {
  startEmbers();
  renderFooter();
  buildLegal();
  document.querySelectorAll('[data-link]').forEach(a => { a.href = own(CONFIG.links, a.dataset.link) ? CONFIG.links[a.dataset.link] : '#'; });
  document.addEventListener('click', async e => {
    const l = e.target.closest('[data-legal]');
    if (l){ e.preventDefault(); openLegal(l.dataset.legal); return; }
    const c = e.target.closest('[data-copy]');
    if (c){ e.preventDefault(); await copyText(c.dataset.copy); toast(t('copied') + ': ' + c.dataset.copy); }
  });
  applyI18n();
  document.querySelectorAll('[data-tools]').forEach(host => {
    host.classList.add('tools');
    if (host.dataset.tools === 'currency') host.appendChild(buildPicker('cur'));
    host.appendChild(buildPicker('lang'));
  });
  if (CUR !== 'GBP') loadRates().then(ok => { if (ok && window.onCurrencyChange) window.onCurrencyChange(); });
  const q = new URLSearchParams(location.search).get('legal');
  if (q) openLegal(q);
});
