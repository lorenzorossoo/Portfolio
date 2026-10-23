---
title: "La mia prossima stagione"
date: 2026-10-23
excerpt: "Cosa farò, come organizzerò gli allenamenti e perché: le scelte per la mia prossima stagione [NERD POST] - (updating)"
---

#### Premessa

> Questo articolo è un diario di preparazione in continuo aggiornamento. Man mano che la stagione proseguirà, aggiungerò la programmazione degli allenamenti, i risultati dei test e le riflessioni sui diversi blocchi di lavoro: cosa ha funzionato, cosa meno e quali modifiche avrò deciso di apportare.

#### Da dove parto: gli strumenti e i dati

Prima di parlare di allenamenti, volumi e obiettivi, voglio spiegare da dove arriveranno i dati che utilizzerò per raccontare questa stagione. Non soltanto i watt delle singole uscite, ma anche le informazioni raccolte nella vita quotidiana, che mi aiuteranno a contestualizzare le prestazioni e le sensazioni.

Il dispositivo che mi accompagna durante la giornata è un Garmin Forerunner 955 (con una possibile conversione a Garmin Cirqa, rimanendo comunque nell'ecosistema con lo stesso sensore). Tra le informazioni disponibili ci sono:

- frequenza cardiaca durante la giornata e a riposo;
- HRV;
- durata, fasi e punteggio del sonno;
- stima dello stress e Body Battery;
- frequenza respiratoria;
- saturazione periferica dell’ossigeno, tramite Pulse Ox.

A queste informazioni si aggiungono gli indicatori legati all’allenamento, come il carico acuto, il tempo di recupero e la Training Readiness. Quest’ultima combina dati sul sonno, stato dell’HRV, carico recente e stress per fornire una stima della disponibilità ad allenarsi. Non sono quindi misure tutte indipendenti: alcuni punteggi riassumono informazioni già presenti negli altri parametri.

L’idea non è trasformare il punteggio dell’orologio in un semaforo che decide automaticamente come allenarmi. Anzi verrà usato per vedere le tendenze dei valori, per capire se il lavoro sta funzionando o meno. Il valore sarà sempre preso grezzo per poi analizzarlo io in prima persona.

Per le uscite in bici all’aperto utilizzo un Garmin Edge 830, abbinato a un misuratore di potenza INPEAK. Negli allenamenti indoor utilizzo invece un rullo Van Rysel D500, insieme al misuratore di potenza SRAM Quarq montato sulla bici.
>NB: Sul rullo utilizzo una bici destinata solo a quello scopo, sono state riportate le stesse misure della bici da outdoor, per non ritrovare differenze nella cinematica di pedalata

## I primi test: costruire un riferimento

Le ultime settimane di ottobre saranno dedicate a una prima valutazione della prestazione. L’obiettivo è ottenere un riferimento iniziale da confrontare con i risultati dei successivi blocchi di allenamento.

Per stimare Critical Power (CP) e W′ utilizzerò tre prove massimali a durata fissa, distribuite su giornate separate:

| Seduta | Prova | Dato registrato |
| --- | --- | --- |
| 1 | 3 minuti | Potenza media sui 180 secondi |
| 2 | 5 minuti | Potenza media sui 300 secondi |
| 3 | 12 minuti | Potenza media sui 720 secondi |

Tra le sedute lascerò indicativamente 24/48 ore, con riposo o allenamento facile, cercando di arrivare alle prove in condizioni di recupero comparabili.

L’obiettivo di ogni test sarà ottenere la massima potenza media possibile sull’intera durata. Non partirò quindi con uno sprint massimale, ma cercherò di distribuire lo sforzo senza compromettere il finale.

#### Il riscaldamento

Prima di ciascun test svolgerò lo stesso riscaldamento:

- 10 minuti in Z2, circa 60–70% della FTP attualmente stimata;
- 3 × 30 secondi al 110–120% della FTP, con 90 secondi di pedalata facile in Z1 dopo ciascuna accelerazione;
- altri 3 minuti facili in Z1, quindi partenza del test.

Il riscaldamento durerà complessivamente 19 minuti. Le accelerazioni saranno controllate, non sprint massimali.

Questa sequenza è una scelta pratica basata sui principi del riscaldamento attivo: aumentare gradualmente l’impegno, inserire brevi accelerazioni e lasciare recupero prima della prestazione. Non è un protocollo dimostrato come ottimale per tutte le durate.

La letteratura mostra che il riscaldamento può migliorare la prestazione ciclistica, ma anche che aumentarne l’intensità non garantisce un beneficio aggiuntivo: bisogna bilanciare preparazione e fatica residua (Hajoglou et al., 2005).


#### Dai risultati a CP e W′

Inserirò durata e potenza media delle tre prove nel [calcolatore di High North Performance](https://www.highnorth.co.uk/critical-power-calculator), utilizzando la soluzione con tre test.

I dati inseriti saranno le potenze medie dei singoli intervalli, non le potenze normalizzate.

Il modello a due parametri descrive la relazione tra potenza e durata:

$$P(t) = CP + \frac{W'}{t}$$


Nell’equazione, P è la potenza in watt, t la durata in secondi e W′ il lavoro in joule. Per una lettura più immediata, riporterò W′ in kilojoule.

CP e W′ saranno quindi stime ottenute da un modello applicato alle mie prestazioni, non misure fisiologiche dirette.

### Che cosa significano CP, W′ e FTP?

Per le definizioni utilizzo come riferimento McGrath e colleghi (2021), che hanno studiato il rapporto tra Critical Power e Functional Threshold Power in ciclisti e triatleti altamente allenati.

##### Critical Power — CP

La CP è il parametro di potenza della relazione potenza–durata, espresso in watt. Matematicamente rappresenta l’asintoto della curva: aumentando la durata, la potenza prevista dal modello si avvicina alla CP.

Dal punto di vista fisiologico è associata al confine tra i domini di intensità heavy e severe. Al di sopra di questo confine non è possibile stabilizzare le risposte metaboliche e la tolleranza allo sforzo diventa limitata.

Questo non significa che la CP possa essere sostenuta indefinitamente: è una proprietà del modello, non una capacità reale di durata illimitata.

##### W′ — lavoro disponibile sopra CP

W′, che si legge “W prime”, è il parametro di lavoro del modello, espresso in joule o kilojoule. Rappresenta una quantità finita di lavoro eseguibile sopra CP.

A parità di CP e W′, una potenza molto superiore alla CP corrisponde a una durata inferiore rispetto a una potenza che la supera di poco.

Non lo interpreterò come un “serbatoio anaerobico” puro: W′ non misura direttamente una singola riserva energetica e la sua interpretazione fisiologica è più complessa.

##### Functional Threshold Power — FTP

La FTP è tradizionalmente definita come la massima potenza sostenibile in uno stato quasi stazionario per circa un’ora.

Una modalità comune per stimarla consiste nell’utilizzare il 95% della potenza media di una prova di 20 minuti, eseguita secondo un protocollo specifico. Si tratta però di una stima, non di un’equivalenza garantita per ogni atleta.

Nel mio caso, i test di 3, 5 e 12 minuti serviranno principalmente a stimare CP e W′. L’eventuale FTP proposta dall’applicativo sarà considerata un’approssimazione operativa aggiuntiva, non una terza misura indipendente.

Nello studio di McGrath e colleghi, CP e FTP erano correlate, ma non intercambiabili. Le terrò quindi distinte anche nell’analisi della mia stagione.

#### Come confronterò i risultati

Per ogni valutazione conserverò:

- potenza media sui 3, 5 e 12 minuti;
- peso corporeo e potenza relativa in W/kg;
- CP in watt e W/kg;
- W′ in kJ;
- metodo di calcolo e indice di adattamento del modello;
- protocollo di riscaldamento;
- condizioni di prova e sensazioni.

Ripeterò la stessa batteria nei successivi momenti di valutazione, mantenendo invariate le durate e il metodo di analisi.

Le prime prove serviranno anche a familiarizzare con la gestione dello sforzo. Non interpreterò quindi ogni piccola variazione come un adattamento: confronterò prima le prestazioni realmente misurate, poi i parametri ricavati dal modello e le condizioni in cui saranno stati ottenuti.












***
#### Letture scientifiche

- Hajoglou, A., Foster, C., de Koning, J. J., Lucia, A., Kernozek, T. W., & Porcari, J. P. (2005). Effect of warm-up on cycle time trial performance. *Medicine & Science in Sports & Exercise, 37*(9), 1608–1614.  
  Studio sperimentale sul beneficio del riscaldamento prima di una cronometro ciclistica. È il riferimento per i principi generali, non per l’esatta sequenza di riscaldamento scelta qui.

- McGrath, E., Mahony, N., Fleming, N., Raleigh, C., & Donne, B. (2021). Do critical and functional threshold powers equate in highly-trained athletes? *International Journal of Exercise Science, 14*(4), 45–59.  
  Riferimento per le definizioni di CP, W′ e FTP e per la distinzione tra CP e FTP.