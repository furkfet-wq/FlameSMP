const TOPICS = [
  { t:'Ban Appeal', d:'Appeal an active ban on your account.', c:'#ef4444',
    i:'<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>' },
  { t:'Mute Appeal', d:'Appeal an active mute on your account.', c:'#cfcfcf',
    i:'<path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6M16 9l6 6"/>' },
  { t:'Media', d:'Apply for content creator perks after meeting the requirements.', c:'#fbbf24',
    i:'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/>' },
  { t:'Player Report', d:'Report another player for breaking the rules.', c:'#fbbf24',
    i:'<path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/>' },
  { t:'Bug Report', d:'Report a bug or issue you ran into on the server.', c:'#cfcfcf',
    i:'<rect x="7" y="7" width="10" height="13" rx="5"/><path d="M12 7v13M3 13h4M17 13h4M4 7l3 2M20 7l-3 2M4 20l3-2M20 20l-3-2M9 4l1.5 2M15 4l-1.5 2"/>' },
  { t:'Connection Issues', d:'Get help connecting to the server.', c:'#cfcfcf',
    i:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>' }
];
// every topic opens the Discord server
$('topics').innerHTML = TOPICS.map((x,i) => `
  <a class="topic rise" style="--c:${x.c};--d:${100 + i*70}ms" href="${CONFIG.links.discord}" target="_blank" rel="noopener">
    <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${x.i}</svg></span>
    <div><h2>${t('t' + (i + 1))}</h2><p>${t('d' + (i + 1))}</p></div>
    <svg class="go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>
  </a>`).join('');
