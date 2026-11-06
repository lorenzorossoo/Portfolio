# Verifiche eseguite

Sintassi JavaScript controllata con Node. Percorsi immagini verificati. Entrambi i riferimenti home usano imgSport.JPG. Il layout non contiene collegamenti remoti Google Fonts e carica fonts.css. Tre @font-face locali. Cinque FAQ e quattro schede servizi, senza bike fitting.

Chromium su copia statica della homepage, 1440 e 390 pixel: nessun overflow orizzontale o immagine mancante. Apertura FAQ e menu mobile/Escape verificati. Invio in errore simulato con richiesta intercettata localmente, senza invio reale: messaggio conservato e pulsante riabilitato. ZIP verificato per integrità.

LIMITI: i tre TTF e due OFL non erano disponibili nell'ambiente. Il test di rendering è quindi avvenuto con i font di fallback; caricamento reale, integrità, pesi e aspetto dei font locali vanno verificati nel repository già provvisto dei font. Non è stata eseguita una build Jekyll completa (Ruby non disponibile), né un test reale di ricezione email o pubblicazione online. L'informativa è una bozza da verificare, non una certificazione.
