# Sito web personale - Nome Rosso, Chinesiologo

Sito statico in HTML, CSS e JavaScript puro. Palette minimal (bianco/nero/grigio)
con rosso scuro come colore di accento, legato al cognome "Rosso".

## Struttura file
- index.html          -> homepage (chi sono, servizi, anteprima blog, contatti)
- blog.html            -> elenco completo di tutti gli articoli
- blog/articolo-esempio.html -> template di un singolo articolo
- style.css            -> stile grafico e palette colori
- script.js            -> menu mobile

## Palette colori usata
- Rosso scuro (accento):  #7a1f2b
- Rosso scuro hover:       #5c1620
- Testo principale:        #1a1a1a
- Grigio testo secondario: #5f5f5f
- Sfondo alternato:        #fafafa
- Bordi/linee:             #e8e6e3

Per cambiare la tonalità di rosso, modifica solo le variabili --red e --red-dark
in cima al file style.css: si aggiornano automaticamente in tutto il sito.

## Come aggiungere un nuovo articolo al blog (con VS Code)

1. Nella cartella "blog", duplica il file articolo-esempio.html e rinominalo
   in modo descrittivo, es. blog/test-vo2max-atleta.html
   (in VS Code: click destro sul file > Copy, poi click destro sulla cartella > Paste,
   poi rinomina il file copiato)

2. Apri il nuovo file e modifica:
   - Il tag <title> in alto
   - Il testo dentro <p class="article-meta"> (es. "Ottobre 2026")
   - Il testo dentro <h1> (titolo dell'articolo)
   - Il contenuto dentro <div class="article-body">: scrivi i tuoi paragrafi
     tra i tag <p>...</p>, aggiungi eventuali sottotitoli con <h3>...</h3>

3. (Opzionale) Per aggiungere un'immagine, sostituisci il div con classe
   "image-placeholder article" con:
   <img src="../assets/nome-immagine.jpg" alt="Descrizione immagine" style="width:100%; border-radius:6px; margin-bottom:20px;">
   Ricorda di salvare l'immagine nella cartella assets/.

4. Apri blog.html e copia il blocco <a class="blog-item">...</a> del primo
   articolo, incollalo sopra o sotto, poi aggiorna:
   - href="blog/nome-nuovo-file.html"
   - Il titolo, la descrizione breve e la data

5. Se vuoi, fai lo stesso nella sezione "Dal blog" dentro index.html per
   mostrare in homepage l'articolo più recente al posto di quello di esempio.

6. Salva tutti i file, poi da VS Code: Source Control > stage changes >
   scrivi un messaggio di commit (es. "Nuovo articolo: test VO2max") > Commit > Push.
   Il sito online si aggiorna da solo in 1-3 minuti tramite GitHub Pages.

## Come personalizzare il resto del sito
1. Sostituisci "Nome Rosso" con il tuo nome reale in tutte le pagine
   (index.html, blog.html, blog/articolo-esempio.html).
2. Sostituisci i contatti placeholder (email, WhatsApp, Instagram, Strava, LinkedIn).
3. Sostituisci i riquadri grigi "image-placeholder" con le tue foto reali:
   <img src="assets/tuafoto.jpg" alt="Nome Rosso" style="width:100%; border-radius:6px;">
4. Per il modulo di contatto funzionante, registrati gratis su https://formspree.io,
   crea un form e sostituisci YOUR_FORM_ID nell'attributo action del tag <form>.

## Pubblicazione gratuita
Vedi la guida GitHub Pages / Netlify già condivisa in precedenza: basta caricare
questi file in un repository pubblico GitHub e attivare Pages nelle Settings.
