/* =========================================================
   PAYMENT LINKS (one per product)
   ========================================================= */
const PAY = {
  flame:     { stripe:'https://buy.stripe.com/28E9AUceLdYf0xlaza1ZS0x', paypal:'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-39600916UC2458503NLZB4QA' },
  flameplus: { stripe:'https://buy.stripe.com/00wfZia6D5rJ4NBcHi1ZS0y', paypal:'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8HC10963A5012612NNLZCADY' },
  flamepp:   { stripe:'https://buy.stripe.com/4gM5kEdiP07pbbZgXy1ZS0z', paypal:'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9P173021AT744683RNLZCAMA' },
  custom:    { stripe:'https://buy.stripe.com/dRm6oI1A73jB1Bp22E1ZS0A', paypal:'https://www.paypal.com/ncp/payment/EVXSS27WD5Q96' },
  s500:      { stripe:'https://buy.stripe.com/00wfZiceL6vN7ZN6iU1ZS0f', paypal:'https://www.paypal.com/ncp/payment/PWCQSRH5EK7L4' },
  s1250:     { stripe:'https://buy.stripe.com/3cIfZi1A73jBeobfTu1ZS0g', paypal:'https://www.paypal.com/ncp/payment/G44A5MNGRWZNL' },
  s3000:     { stripe:'https://buy.stripe.com/5kQ4gAfqX7zR6VJ8r21ZS0h', paypal:'https://www.paypal.com/ncp/payment/KSPJUJ4D3QB4W' },
  s8000:     { stripe:'https://buy.stripe.com/dRm00kbaH1bt0xlcHi1ZS0i', paypal:'https://www.paypal.com/ncp/payment/RDA6EEPCUFVNL' },
  common:    { stripe:'https://buy.stripe.com/aFadRa4Mj4nF7ZN4aM1ZS0k', paypal:'https://www.paypal.com/ncp/payment/BVQWHF9JN2K44' },
  epic:      { stripe:'https://buy.stripe.com/8x24gA2Eb5rJeobcHi1ZS0l', paypal:'https://www.paypal.com/ncp/payment/RE6AC49Z9ANJN' },
  spawner:   { stripe:'https://buy.stripe.com/aFabJ2emT6vNbbZ4aM1ZS0m', paypal:'https://www.paypal.com/ncp/payment/P2KYQUFDV5SS4' },
  mythic:    { stripe:'https://buy.stripe.com/cNi5kE1A71btdk7cHi1ZS0n', paypal:'https://www.paypal.com/ncp/payment/LRR6RBEW92P7Y' }
};

/* =========================================================
   PRODUCTS
   ========================================================= */
const RANKS = [
  { id:'flame', name:'Flame', price:7, monthly:true, crest:['#ffe08a','#ff7a1f'], tier:1,
    grad:'linear-gradient(100deg,#ffc471,#ff9a3c)', ink:'#2a1406', glow:'rgba(255,154,60,.7)',
    perks:[['shard','sh',500],['home','pHomes',6],['gavel','pAuction',45],['box','pOrders',45],['flame','pTitle','Flame'],['globe','pRtp'],['chat','pRole'],['shield','pQueue']] },
  { id:'flameplus', name:'Flame+', price:10, monthly:true, crest:['#fff3b0','#ffb020'], tier:2,
    grad:'linear-gradient(100deg,#ffa257,#ff6a2b)', ink:'#2a0f04', glow:'rgba(255,106,43,.7)',
    perks:[['shard','sh',1000],['home','pHomes',8],['gavel','pAuction',90],['box','pOrders',90],['lock','pVault',54],['flame','pTitle','Flame +'],['globe','pRtp'],['chat','pRole'],['shield','pQueue']] },
  { id:'flamepp', name:'Flame++', price:15, monthly:true, featured:true, crest:['#ffd6a0','#ff3b5c'], tier:3,
    grad:'linear-gradient(100deg,#ff5f38,#dc2458)', ink:'#ffffff', glow:'rgba(230,40,80,.75)',
    perks:[['shard','sh',2500],['home','pHomes',10],['gavel','pAuction',135],['box','pOrders',135],['lock','pVault',105],['flame','pTitle','Flame ++'],['globe','pRtp'],['chat','pRole'],['zap','pChat'],['shield','pQueue']] },
  { id:'custom', name:'Custom', price:50, monthly:false, crest:['#f3e1ff','#a855f7'], crown:true,
    grad:'linear-gradient(100deg,#c48dff,#8646f5)', ink:'#ffffff', glow:'rgba(150,80,255,.75)',
    perks:[['shard','sh',6000],['tag','pCName'],['palette','pCColour'],['chat','pCRole'],['palette','pRColour'],['home','pHomes',15]] }
];
const SHARDS = [
  { id:'s500',  amt:500,  price:5,  img:'img/shard-1.png' },
  { id:'s1250', amt:1250, price:10, img:'img/shard-2.png' },
  { id:'s3000', amt:3000, price:20, img:'img/shard-3.png' },
  { id:'s8000', amt:8000, price:50, img:'img/shard-4.png', best:true }
];
const KEYS = [
  { id:'common',  name:'Common Key',  price:.40, c:'#4ade80', ink:'#062a12', img:'img/key-common.png' },
  { id:'epic',    name:'Epic Key',    price:1,   c:'#b56cff', ink:'#ffffff', img:'img/key-epic.png', popular:true },
  { id:'spawner', name:'Spawner Key', price:3,   c:'#fbbf24', ink:'#2a1600', img:'img/key-spawner.png' },
  { id:'mythic',  name:'Mythic Key',  price:4,   c:'#f43f5e', ink:'#ffffff', img:'img/key-mythic.png' }
];

const P = {
  gem:'<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 21 8 9l4-6 4 6z"/>',
  home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  gavel:'<path d="m14 13-7.5 7.5a2.1 2.1 0 0 1-3-3L11 10"/><path d="m16 16 6-6M8 8l6-6M9 7l8 8M21 11l-8-8"/>',
  box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  flame:'<path d="M12 2s5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-4 1-6.5 1-8.5z"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  palette:'<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2a10 10 0 0 0 0 20c.9 0 1.6-.7 1.6-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7h2A5.6 5.6 0 0 0 22 11c0-5-4.5-9-10-9z"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
};
const svg = (n, w=2.2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${P[n]}</svg>`;
const gbp = n => '£' + (Number.isInteger(n) ? n : n.toFixed(2));

/* =========================================================
   RENDER
   ========================================================= */
/* rank crest: shield with a flame (or crown) and tier pips */
function crest(r, i){
  const id = 'cr' + i;
  const pips = r.crown ? '' : Array.from({ length: r.tier }, (_, k) => {
    const x = 60 + (k - (r.tier - 1) / 2) * 18;
    return `<path class="pip" style="--k:${k};transform-box:fill-box;transform-origin:center" d="M${x} 104l6 6-6 6-6-6z" fill="url(#${id}f)"/>`;
  }).join('');
  const emblem = r.crown
    ? `<path d="M30 92 34 48 48 64 60 36 72 64 86 48 90 92Z" fill="url(#${id}f)" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linejoin="round"/>
       <circle cx="60" cy="36" r="4.5" fill="#fff"/><circle cx="34" cy="48" r="3.5" fill="#fff"/><circle cx="86" cy="48" r="3.5" fill="#fff"/>
       <rect x="30" y="94" width="60" height="9" rx="3" fill="url(#${id}f)"/>`
    : `<path d="M60 24c12 12 22 22 22 38a22 22 0 0 1-44 0c0-10 6-17 11-21 0 8 4 13 8 13 0-14 3-22 3-30z" fill="url(#${id}f)"/>
       <path d="M60 58c5 5 9 9 9 15a9 9 0 0 1-18 0c0-4 2-7 4-8 0 3 2 5 3 5 0-5 2-8 2-12z" fill="#fff" opacity=".9"/>`;
  return `<svg viewBox="0 0 120 140"><defs>
      <linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c1a15"/><stop offset="1" stop-color="#110908"/></linearGradient>
      <linearGradient id="${id}f" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${r.crest[1]}"/><stop offset="1" stop-color="${r.crest[0]}"/></linearGradient>
      <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <clipPath id="${id}c"><path d="M60 4 110 22V68c0 36-24 58-50 68C34 126 10 104 10 68V22Z"/></clipPath></defs>
    <g class="crest" style="transform-box:fill-box;transform-origin:center">
      <path d="M60 4 110 22V68c0 36-24 58-50 68C34 126 10 104 10 68V22Z" fill="url(#${id}s)" stroke="url(#${id}f)" stroke-width="5" stroke-linejoin="round"/>
      <path d="M60 15 100 29V68c0 30-20 48-40 57C40 116 20 98 20 68V29Z" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="2"/>
      <g class="emb${r.crown ? ' crown' : ''}" style="transform-box:fill-box;transform-origin:50% 100%">${emblem}</g>${pips}
      <g clip-path="url(#${id}c)"><g transform="skewX(-20)"><rect class="glint" x="-70" y="-10" width="36" height="160" fill="url(#${id}g)"/></g></g>
    </g></svg>`;
}

/* perk = [icon, translation key or 'sh' (shards) or 'raw', value] */
function perkText(key, v){
  if (key === 'sh') return fmtN(v) + ' Shards';
  if (key === 'raw') return v;
  return t(key, typeof v === 'number' ? fmtN(v) : v);
}

function renderProducts(first){
  $('ranks').innerHTML = RANKS.map((r,i) => {
    const card = `
    <div class="rank ${r.featured ? '' : 'rise'}" style="--grad:${r.grad};--ink:${r.ink};--glow:${r.glow};--d:${120 + i*80}ms">
      ${r.featured ? '<span class="shine" aria-hidden="true"></span>' : ''}
      <div>
        <div class="rname"><img src="img/logo.png" alt="">${r.name}</div>
        <div class="rprice">${money(r.price)} ${t(r.monthly ? 'perMonth' : 'oneTime')}</div>
        <div class="rnote">${t(r.monthly ? 'renews' : 'lifetime')}</div>
        ${r.featured ? `<span class="save-chip">${t('mostShards')}</span>` : ''}
        <div class="ractions"><button class="rbuy" data-buy="${r.id}">${t(r.monthly ? 'subscribe' : 'buyNow')}</button></div>
      </div>
      <ul class="perks">${r.perks.map(([ic, key, v]) => `<li><span class="ic">${svg(ic === 'shard' ? 'gem' : ic)}</span>${perkText(key, v)}</li>`).join('')}</ul>
      <div class="rart" aria-hidden="true" style="--fd:-${i*1.5}s;--cg:${r.crest[1]}">${crest(r, i)}</div>
    </div>`;
    return r.featured
      ? `<div class="feat rise" style="--d:${120 + i*80}ms"><span class="best-badge"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.4 21.7l1.8-7.3L1.5 9.5 9 8.9z"/></svg>${t('best')}</span>${card}</div>`
      : card;
  }).join('');

  const base = SHARDS[0].amt / SHARDS[0].price;
  $('shards').innerHTML = SHARDS.map((s,i) => {
    const bonus = Math.round((s.amt / s.price / base - 1) * 100);
    return `<div class="card rise ${s.best ? 'pop' : ''}" style="--c:${s.best ? '#ff7a1f' : '#c084fc'};--ink:#1d0b00;--d:${i*70}ms">
      ${s.best ? `<span class="badge">${t('best')}</span>` : ''}
      <div class="art"><img src="${s.img}" alt="" style="--fd:-${i*1.3}s"></div>
      <div class="nm" style="color:#c084fc">${fmtN(s.amt)} Shards</div>
      <div class="pr">${money(s.price)}</div>
      <span class="chip ${bonus > 0 ? '' : 'none'}">${bonus > 0 ? t('bonus', bonus) : t('starter')}</span>
      <button class="cbuy" data-buy="${s.id}" style="${s.best ? '' : '--c:#a855f7;--ink:#fff'}">${svg('cart')} ${t('buyNow')}</button>
    </div>`;
  }).join('');

  $('keys').innerHTML = KEYS.map((k,i) => `
    <div class="card rise ${k.popular ? 'pop' : ''}" style="--c:${k.c};--ink:${k.ink};--d:${i*70}ms">
      ${k.popular ? `<span class="badge">${t('popular')}</span>` : ''}
      <div class="art"><img src="${k.img}" alt="" style="--fd:-${i*1.4}s"></div>
      <div class="nm">${k.name}</div>
      <div class="pr">${money(k.price)}</div>
      <div class="per">${t('perKey')}</div>
      <button class="cbuy" data-buy="${k.id}">${svg('cart')} ${t('buyNow')}</button>
    </div>`).join('');

  // after a currency switch, update in place without replaying the entrance animation
  if (!first) ['ranks','shards','keys'].forEach(id => $(id).querySelectorAll('.rise').forEach(el => el.classList.remove('rise')));
}
renderProducts(true);
window.onCurrencyChange = () => { renderProducts(false); if ($('checkout').classList.contains('open') && current) fillCheckout(current); };

$('idClose').innerHTML = ICONS.close;
$('coClose').innerHTML = ICONS.close;

/* =========================================================
   USERNAME ("Identify yourself")
   ========================================================= */
let player = '';
try { player = localStorage.getItem('flame-ign') || ''; } catch {}
if (!NAME_RE.test(player)) player = '';
let pending = null, headTimer;
const head = (n, s) => `https://mc-heads.net/avatar/${NAME_RE.test(n) ? n : 'MHF_Steve'}/${s}`;

function renderUser(){
  const b = $('userBtn');
  if (player){
    const img = document.createElement('img');
    img.src = head(player, 22); img.alt = '';
    b.replaceChildren(img, document.createTextNode(player));
  } else b.innerHTML = `${svg('user', 2.4)} ${t('login')}`;
  $('userBtn').setAttribute('aria-label', player ? t('change') + ': ' + player : t('yourName'));
}
function openIdentify(next){
  pending = next || null;
  $('idInput').value = player;
  $('idHead').src = head(player, 40);
  $('idForm').classList.remove('bad');
  closeOverlay($('checkout'));
  const o = $('identify');
  o.classList.remove('open'); void o.offsetWidth;
  openOverlay(o);
}
$('idInput').addEventListener('input', () => {
  $('idForm').classList.remove('bad');
  clearTimeout(headTimer);
  headTimer = setTimeout(() => { $('idHead').src = head($('idInput').value.trim(), 40); }, 350);
});
$('idForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('idInput').value.trim();
  if (!NAME_RE.test(v)){
    const f = $('idForm'); f.classList.remove('bad'); void f.offsetWidth; f.classList.add('bad');
    return toast(t('badName'));
  }
  player = v;
  try { localStorage.setItem('flame-ign', v); } catch {}
  renderUser();
  closeOverlay($('identify'));
  toast(t('hello', v));
  if (pending) setTimeout(() => openCheckout(pending), 300);
});
$('idField').addEventListener('click', () => $('idInput').focus());
$('idClose').onclick = () => closeOverlay($('identify'));
$('userBtn').onclick = () => openIdentify();
renderUser();

/* =========================================================
   CHECKOUT
   ========================================================= */
let current = null;
function product(id){
  const r = RANKS.find(x => x.id === id);
  if (r) return { title: r.name, gbp: r.price, per: t(r.monthly ? 'perMonth' : 'oneTime'), img: 'img/logo.png', cover: true, note: t(r.monthly ? 'noteM' : 'noteO') };
  const s = SHARDS.find(x => x.id === id);
  if (s) return { title: fmtN(s.amt) + ' Shards', gbp: s.price, per: t('oneTime'), img: s.img, note: t('noteO') };
  const k = KEYS.find(x => x.id === id);
  return { title: k.name, gbp: k.price, per: t('perKey'), img: k.img, note: t('noteO') };
}
function fillCheckout(id){
  const p = product(id);
  $('coImg').src = p.img;
  $('coImg').className = p.cover ? '' : 'contain';
  $('coTitle').textContent = p.title;
  // show the converted estimate plus the real GBP amount that will be charged
  $('coPrice').textContent = isConverted() ? `${money(p.gbp)} ${p.per} · ${gbpMoney(p.gbp)}` : `${gbpMoney(p.gbp)} ${p.per}`;
  $('coHead').src = head(player, 38);
  $('coName').textContent = player;
  $('coNote').textContent = p.note + ' ' + t('noteRest', player) + (isConverted() ? ' ' + t('gbpNote') : '');
  $('payStripe').hidden = !PAY[id].stripe;
  $('payPaypal').hidden = !PAY[id].paypal;
}
function openCheckout(id){
  if (!own(PAY, id)) return;
  if (!player) return openIdentify(id);
  current = id;
  fillCheckout(id);
  openOverlay($('checkout'));
}
function pay(method){
  if (!own(PAY, current) || !NAME_RE.test(player)) return;
  let url = PAY[current][method];
  if (!url) return;
  // Stripe shows this on the payment as the "client reference ID", so you know who to deliver to
  if (method === 'stripe') url += (url.includes('?') ? '&' : '?') + 'client_reference_id=' + encodeURIComponent(player);
  window.open(url, '_blank', 'noopener');
  closeOverlay($('checkout'));
  toast(t('opened'));
}
document.addEventListener('click', e => { const b = e.target.closest('[data-buy]'); if (b) openCheckout(b.dataset.buy); });
$('payStripe').onclick = () => pay('stripe');
$('payPaypal').onclick = () => pay('paypal');
$('coChange').onclick = () => openIdentify(current);
$('coClose').onclick = () => closeOverlay($('checkout'));
$('checkout').addEventListener('click', e => { if (e.target === $('checkout')) closeOverlay($('checkout')); });
