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
  // au clavier : flèche bas depuis la recherche, puis flèche droite ; le mème dessine le texte sur l'image
  const k = await pj(`(async () => { const q = document.querySelector('.gfMain .row input'), key = (t, k) => t.dispatchEvent(new KeyboardEvent('keydown', {key: k, bubbles: true}));
    key(q, 'ArrowDown'); const all = [...document.querySelectorAll('.gfItem')], a = all.indexOf(document.activeElement); key(document.activeElement, 'ArrowRight'); const b = all.indexOf(document.activeElement);
    const G = document.querySelector('.gfGrid').closest('.gfApp').__gf || document.querySelector('.gfGrid').closest('.appWrap, .gfApp').parentNode.__gf, img = document.querySelector('.gfItem img'); await img.decode();
    const url = G.gfMemeDraw(img, 'haut', 'bas'), im = new Image(); im.src = url; await im.decode();
    const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const g = c.getContext('2d'); g.drawImage(im, 0, 0); const d = g.getImageData(0, 0, c.width, Math.round(c.height * .14)).data; let white = 0; for (let i = 0; i < d.length; i += 4) white += d[i] > 240 && d[i + 1] > 240 && d[i + 2] > 240;
    return {a, b, w: im.width, white, aa: document.querySelectorAll('.gfTools button').length}; })()`);
  if (k.a !== 0 || k.b !== 1) throw new Error('clavier : ' + JSON.stringify(k));
  if (k.white < 200) throw new Error('mème sans texte : ' + JSON.stringify(k));
  return 'clavier, mème (' + k.white + ' px de texte) · ' + r.n + ' stickers, ' + r.perRow + ' par ligne (' + r.size + ' px), recherche ok';
};
