# Rouge Lab — Restyling Editorial / Atmosphere

Progetto Jekyll completo. Testi e servizi originali mantenuti; nuova identità visiva bordeaux, carbone e avorio, con sfondi originali sfumati e materici.

## Pubblicazione
1. Estrai lo ZIP.
2. Apri la cartella Portfolio e copia il suo CONTENUTO nella root del repository esistente, sostituendo i file omonimi. Non creare una seconda cartella Portfolio nel repository.
3. Conserva eventuali file del repository non presenti nell'archivio, ad esempio CNAME o workflow GitHub personalizzati. Non erano inclusi nei materiali forniti.
4. Esegui commit e push con la modalità di pubblicazione già in uso.
5. Controlla la build in GitHub Actions e verifica il sito pubblicato.

La configurazione è per https://lorenzorossoo.github.io/Portfolio. Per un dominio differente modifica url e baseurl in _config.yml. Alcuni link originali negli articoli includono /Portfolio: aggiornali se cambi dominio o percorso.

## Struttura
- _config.yml: configurazione Jekyll (underscore necessario)
- _layouts/default.html: shell comune e metadati
- _layouts/post.html: articoli
- _posts/: quattro articoli originali
- index.html: home, servizi, contatti
- blog.html: archivio
- style.css: nuovo design responsive
- script.js: menu accessibile e modulo contatti
- assets/homePage/: foto, logo, favicon
- assets/everesting/: foto e altimetria
- assets/design/: sfondo originale e texture

## Modifiche
- Nuova homepage scura, tipografia editoriale e fotografia ad arco.
- Sezioni chiare avorio per la lettura, servizi numerati in griglia, blog e articoli uniformati.
- Modulo e footer scuri coordinati; splash iniziale rimosso.
- Formspree originale conservato. Fallback HTML senza JavaScript; errori AJAX mostrati nel modulo, mantenendo il testo. Il fallback senza JavaScript usa la risposta di Formspree, non la pagina grazie locale.
- Percorsi immagini corretti in base ai file effettivamente forniti.
- Metadati social dinamici, canonical e caricamenti duplicati rimossi.
- Font Google con fallback locali; il sito rimane leggibile senza rete ma l'aspetto tipografico può variare.
- Nessuna libreria JS esterna, nessun tracker aggiunto.

## Verifiche eseguite
Controllo sintassi JavaScript con Node, riferimenti alle immagini, bilanciamento CSS e rendering Chromium di una copia statica della homepage a 1440 e 390 px: nessun overflow orizzontale o immagine mancante; apertura menu e chiusura con Escape controllate.
Le anteprime allegate sono ottenute da questa copia statica: non sostituiscono la build Jekyll. Non è stata eseguita una build Jekyll perché Ruby non è disponibile nell'ambiente. Non sono stati inviati messaggi reali né verificati endpoint Formspree o pubblicazione online. Privacy originale non sottoposta a revisione legale.

## Design condiviso con Instagram
Colori in :root di style.css: bordeaux #78162F, carbone #141214, avorio #F5F1E9, corallo #E9A18C.
Fraunces per titoli e accenti corsivi, Inter per testi e dati. Lo sfondo originale assets/design/rouge-atmosphere.jpg può fungere da base per future copertine social. Non sono inclusi template Instagram già impaginati.

## Articoli
Crea un file _posts/AAAA-MM-GG-titolo.md con front matter:

---
title: "Titolo"
date: AAAA-MM-GG
excerpt: "Breve descrizione"
---

Scrivi il corpo in Markdown. Il layout post è assegnato dalla configurazione. Per immagini usa relative_url di Jekyll evitando percorsi con baseurl scritto a mano.
