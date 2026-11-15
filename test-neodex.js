// lancé par le test « local » de NeoDex : bibliothèque vide (le bon message), les stickers NeoDex en grille sans débordement, la recherche
module.exports = async ({ pj, sleep }) => {
  await sleep(800);
  const empty = await pj(`document.querySelector('.gfEmpty')?.textContent || ''`);
  if (empty && !/bibliothèque est vide/.test(empty)) throw new Error('message de départ : ' + empty);
  await pj(`[...document.querySelectorAll('.gfColl')].find(b => /Stickers NeoDex/.test(b.textContent)).click(), 0`); await sleep(600);
  const r = await pj(`(() => { const it = [...document.querySelectorAll('.gfItem')], tops = new Set(it.slice(0, 30).map(e => e.offsetTop)); return { n: it.length, perRow: it.filter(e => e.offsetTop === it[0].offsetTop).length, size: it[0]?.offsetWidth, over: [...document.querySelectorAll('.gfApp *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length }; })()`);
  if (r.n < 20 || r.perRow < 3) throw new Error('stickers : ' + JSON.stringify(r));
  if (r.over) throw new Error(r.over + ' élément(s) débordent à droite');
  await pj(`(() => { const q = document.querySelector('.gfMain .row input'); q.value = 'coeur'; q.dispatchEvent(new Event('input')); })(), 0`); await sleep(300);
  const found = await pj(`document.querySelectorAll('.gfItem').length`);
  if (found < 1) throw new Error('recherche « coeur » : rien');
  await pj(`(() => { const q = document.querySelector('.gfMain .row input'); q.value = ''; q.dispatchEvent(new Event('input')); })(), 0`); await sleep(300);
  return r.n + ' stickers, ' + r.perRow + ' par ligne (' + r.size + ' px), recherche ok';
};
