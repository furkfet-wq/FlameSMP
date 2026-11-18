/* How To Join tile opens the YouTube guide (the two boxes still copy the name and address) */
const openGuide = () => window.open(CONFIG.links.howToJoin, '_blank', 'noopener');
$('joinTile').addEventListener('click', e => { if (!e.target.closest('[data-copy]')) openGuide(); });
$('joinTile').addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target === $('joinTile')){ e.preventDefault(); openGuide(); } });

/* live Discord member count */
fetch('https://discord.com/api/v9/invites/' + CONFIG.discordInvite + '?with_counts=true')
  .then(r => r.json())
  .then(d => {
    const m = Number(d && d.approximate_member_count);
    if (!Number.isFinite(m) || m <= 0) return;
    countUp($('dcCount'), Math.round(m));
    $('dcLabel').removeAttribute('data-i18n');
    $('dcLabel').textContent = t('members');
  })
  .catch(() => {});

/* live player count */
fetch('https://api.mcsrvstat.us/3/' + CONFIG.serverIp)
  .then(r => r.json())
  .then(d => {
    const el = $('online');
    if (d && d.online === true){
      const raw = Number(d.players && d.players.online);
      const n = Number.isFinite(raw) && raw > 0 ? Math.round(raw) : 0;
      el.classList.add('on');
      el.querySelector('span').textContent = n < 10 ? t('srvOn') : t('online', fmtN(n));
    } else el.querySelector('span').textContent = t('offline');
  })
  .catch(() => { $('online').querySelector('span').textContent = CONFIG.serverIp; });

function countUp(el, to){
  const t0 = performance.now(), dur = 1600;
  (function step(t){
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
    el.textContent = fmtN(Math.round(to * e));
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}
