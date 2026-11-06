# Rouge Lab — versione consolidata con font locali

Leggi ISTRUZIONI.txt per la copia dei file e NOTE-PRIVACY.md per gli aspetti operativi ancora da verificare.

## Contenuti
- Restyling bordeaux/carbone/avorio, layout responsive.
- Home, quattro schede servizi senza bike fitting, Come lavoriamo e cinque FAQ prima dei contatti.
- Blog e quattro articoli originali (corretti solo alcuni percorsi immagini).
- Pagina 404, grazie ed errore; il form JS mostra gli errori nella pagina senza cancellare il testo.
- fonts.css e layout con font locali; nessun collegamento remoto Google Fonts.
- Privacy aggiornata ai trattamenti dichiarati, email corretta e conservazione 12 mesi delle richieste senza seguito nella posta.
- Search Console conservato, nessun Analytics.
- Sfondo originale e prima copertina SVG per Instagram.

## Dipendenza esterna all'archivio
Conservare assets/fonts già nel repository: tre font variabili TTF e due licenze OFL. Non forniti all'assistente, quindi non inclusi. Lo ZIP non è autosufficiente per i font su un repository vuoto.

## Pubblicazione
Sovrascrivere e unire al progetto esistente, non cancellare. _config.yml è impostato per https://lorenzorossoo.github.io/Portfolio. Nessun workflow personalizzato è incluso. Il build Jekyll non è stato eseguito nell'ambiente; vedere VERIFICHE.md.

## Modifiche future
style.css contiene palette e layout. fonts.css contiene @font-face. _layouts/default.html è la shell condivisa. Scrivere nuovi articoli in _posts/AAAA-MM-GG-titolo.md con front matter title/date/excerpt. I vecchi articoli contengono alcuni link con /Portfolio scritto direttamente: aggiornarli se cambia baseurl o dominio.
