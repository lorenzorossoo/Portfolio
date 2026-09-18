# Sito web personale - Nome Rosso, Chinesiologo

Sito con GitHub Pages + Jekyll: ti permette di scrivere gli articoli del blog in
Markdown (.md) invece che in HTML, con ordinamento automatico per data.

## Struttura file
- index.html            -> homepage (chi sono, servizi a card scorrevoli, anteprima blog, contatti)
- blog.html             -> elenco completo di tutti gli articoli (generato automaticamente da Jekyll)
- _posts/                -> cartella dove scrivi i tuoi articoli in Markdown
- _layouts/default.html  -> struttura comune di ogni pagina (navbar, footer)
- _layouts/post.html     -> struttura di ogni singolo articolo del blog
- _config.yml            -> configurazione generale del sito
- style.css              -> stile grafico e palette colori
- script.js              -> menu mobile

## IMPORTANTE: come attivare Jekyll su GitHub Pages
Jekyll e' GIA' integrato in GitHub Pages, non devi installare nulla per pubblicare.
Basta che il repository contenga questi file esattamente con questi nomi
(incluso il underscore iniziale di _posts e _layouts) e GitHub li elabora da solo
ad ogni push. Vai su Settings > Pages e assicurati che la source sia
"Deploy from a branch", branch main, cartella / (root) - esattamente come gia'
configurato prima.

## Come scrivere un nuovo articolo (in Markdown, da VS Code)

1. Nella cartella "_posts", crea un nuovo file con questo schema di nome:
   AAAA-MM-GG-titolo-breve.md
   Esempio: 2026-10-05-test-vo2max-atleta.md
   (la data nel nome del file e' quella che Jekyll usa per ORDINARE gli articoli
   automaticamente dal piu' recente al meno recente: non devi spostare nulla a mano)

2. All'inizio del file scrivi questo blocco (chiamato "front matter"), tra due righe di tre trattini:

---
title: "Il titolo del tuo articolo"
date: 2026-10-05
excerpt: "Una frase breve che riassume l'articolo, comparira' nell'elenco del blog."
---

3. Sotto, scrivi il contenuto in Markdown semplice:
   - Un titolo di sezione: ## Nome sezione
   - Testo normale: scrivilo cosi' com'e', a capo per un nuovo paragrafo
   - Grassetto: **testo**
   - Corsivo: *testo*
   - Immagine: ![descrizione](/assets/nome-file.jpg)
     (metti prima l'immagine dentro la cartella assets/)
   - Link: [testo del link](https://indirizzo.com)

4. Salva il file.

5. Da VS Code: Source Control > stage changes > scrivi messaggio di commit
   (es. "Nuovo articolo: test VO2max") > Commit > Push.

6. Il sito online si aggiorna da solo in 1-3 minuti. Il nuovo articolo comparira'
   automaticamente in cima al blog (index.html mostra sempre il piu' recente,
   blog.html li mostra tutti in ordine di data) senza che tu debba modificare
   altri file a mano.

## Card servizi scorrevoli (mobile-friendly)

Nella sezione Servizi, le card ora scorrono lateralmente (swipe su mobile,
scroll con mouse/trackpad su desktop) grazie a CSS scroll-snap, senza bisogno
di librerie JavaScript esterne. Per modificare o aggiungere un servizio, apri
index.html e cerca il blocco <div class="services-scroller">: ogni card e' un
blocco <div class="service-card">...</div>, puoi copiarne uno e modificarlo per
aggiungerne un altro.

## Come personalizzare il resto del sito
1. Sostituisci "Nome Rosso" con il tuo nome reale in index.html, blog.html,
   _layouts/default.html e _layouts/post.html.
2. Sostituisci i contatti placeholder (email, WhatsApp, Instagram, Strava, LinkedIn)
   in index.html.
3. Sostituisci i riquadri grigi "image-placeholder" con le tue foto reali:
   <img src="/assets/tuafoto.jpg" alt="Nome Rosso" style="width:100%; border-radius:6px;">
4. Per il modulo di contatto funzionante, registrati gratis su https://formspree.io,
   crea un form e sostituisci YOUR_FORM_ID nell'attributo action del tag <form>.

## Note tecniche
- Non serve installare Ruby o Jekyll sul tuo Mac per pubblicare: il "build" avviene
  sui server di GitHub ad ogni push. Se in futuro vuoi vedere in anteprima le
  modifiche in locale prima di pubblicarle, serve installare Jekyll via Ruby,
  ma non e' obbligatorio.
- Se noti che il sito non si aggiorna dopo un push, controlla la tab "Actions"
  del repository su GitHub: mostra se la build di Jekyll e' andata a buon fine
  o se c'e' un errore di formattazione nel front matter di un articolo
  (es. i tre trattini scritti male, o le virgolette dimenticate nel titolo).
