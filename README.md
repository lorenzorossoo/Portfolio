# Sito web personale - Chinesiologo

Sito statico in HTML, CSS e JavaScript puro, pronto per essere pubblicato gratuitamente.

## Struttura file
- index.html -> struttura e contenuti del sito
- style.css -> stile grafico (colori, layout, responsive)
- script.js -> menu mobile

## Come personalizzarlo
1. Apri index.html con un editor di testo (es. VS Code, gratuito).
2. Sostituisci "NOME COGNOME" con il tuo nome in tutte le occorrenze.
3. Sostituisci i placeholder email, Instagram, Strava, LinkedIn, WhatsApp con i tuoi contatti reali.
4. Nella sezione "Servizi" e "Chi sono", modifica i testi con la tua storia ed offerta reale.
5. Sostituisci i box grigi "Foto professionale" con vere immagini: crea una cartella assets/ e usa
   <img src="assets/foto.jpg" alt="Nome Cognome"> al posto del div .image-placeholder.
6. Per il modulo di contatto, crea un account gratuito su https://formspree.io, ottieni il tuo
   Form ID e sostituisci YOUR_FORM_ID nell'attributo action del tag <form>.

## Come pubblicarlo GRATIS

### Opzione 1: GitHub Pages (consigliata)
1. Crea un account su https://github.com (gratuito).
2. Crea un nuovo repository pubblico, es. "mio-sito".
3. Carica i tre file (index.html, style.css, script.js) nel repository.
4. Vai su Settings > Pages, seleziona il branch "main" come source.
5. Il sito sara online su https://tuonomeutente.github.io/mio-sito in pochi minuti.

### Opzione 2: Netlify
1. Crea un account gratuito su https://www.netlify.com.
2. Trascina la cartella del sito nella dashboard di Netlify (drag and drop deploy).
3. Netlify genera un link pubblico gratuito, personalizzabile.

### Dominio personalizzato (opzionale, a pagamento)
Se in futuro vuoi un dominio tipo tuonome.it (circa 10-15 euro/anno), puoi collegarlo sia a
GitHub Pages che a Netlify seguendo le loro guide ufficiali, mantenendo l'hosting gratuito.

## Note
- Il sito e responsive: si adatta automaticamente a smartphone e tablet.
- Non richiede alcun framework, database o backend: e completamente statico e veloce da caricare.
- Puoi aggiungere altre pagine (es. blog.html) copiando la struttura di index.html.
