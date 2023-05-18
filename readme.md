PROBLEMA: Creare un programma che permette all'utente di calcolare il prezzo del biglietto del treno tramite una form HTML

1 - Dichiarare le variabili, dichiarare e inizializzare le constanti

    1.1 - Variabili

        1.1.1 - nome_completo_utente                                                                            (INPUT = da chiedere all'utente)

        1.1.2 - numero_chilometri_utente                                                                        (INPUT = da chiedere all'utente)

        1.1.3 - fascia_età_utente                                                                               (INPUT = da chiedere all'utente)

        1.1.4 - sconto_biglietto

        1.1.5 - prezzo_biglietto_totale


    1.2 - Constanti

        1.2.1 - prezzo_biglietto_unitario                                                                       (0.21€)

        1.2.2 - sconto_minorenni                                                                                (20%)

        1.2.3 - sconto_over_65                                                                                  (40%)



2 - Chiedere all'utente il suo nome completo tramite un input HTML

    2.1 - Controllare che l'utente abbia effettivamente inserito una stringa


3 - Chiedere all'utente il numero di chilometri che vuole percorrere tramite un input HTML

    3.1 - Controllare che l'utente abbia effettivamente inserito un numero


4 - Chiedere all'utente la sua fascia d'età tramite una select HTML

    4.1 - Option 1 : Maggiorenne

    4.2 - Option 2 : Minorenne

    4.3 - Option 3 : Over 65



5 - Appena l'utente cliccherà il bottone "Genera":

    5.1 - Calcolare il prezzo totale del biglietto                                                              (prezzo_biglietto_unitario * numero_chilometri_utente)


    5.2 - ? SE la fascia di età dell'utente è: Maggiorenne

        5.2.1 - Inserire nome passeggero nel Form                                                               (nome_completo_utente)

        5.2.2 - Inserire Tipo di Biglietto nel Form                                                             (Biglietto Standard)

        5.2.3 - Inserire Numero Carrozza nel Form                                                               (Math.Random())

        5.2.4 - Inserire CODICE CP nel Form                                                                     (Math.Random())


    5.3 - ALTRIMENTI SE la fascia di età dell'utente è: Minorenne

        5.3.1 - Inserire nome passeggero nel Form                                                               (nome_completo_utente)

        5.3.2 - Inserire Tipo di Biglietto nel Form                                                             (Biglietto Scontato)

        5.3.3 - Inserire Numero Carrozza nel Form                                                               (Math.Random())

        5.3.4 - Inserire CODICE CP nel Form                                                                     (Math.Random())

        5.3.5 - Calcolare sconto_minorenni                                                                      (sconto_biglietto = prezzo_biglietto_totale * sconto_minorenni / 100)

        5.3.6 - Applicare sconto_minorenni                                                                      (prezzo_biglietto_totale -= sconto_biglietto)


    5.4 - ALTRIMENTI SE la fascia di età dell'utente è: Over 65

        5.4.1 - Inserire nome passeggero nel Form                                                               (nome_completo_utente)

        5.4.2 - Inserire Tipo di Biglietto nel Form                                                             (Biglietto Scontato)

        5.4.3 - Inserire Numero Carrozza nel Form                                                               (Math.Random())

        5.4.4 - Inserire CODICE CP nel Form                                                                     (Math.Random())

        5.4.5 - Calcolare sconto_over_65                                                                        (sconto_biglietto = prezzo_biglietto_totale * sconto_over_65 / 100)

        5.4.6 - Applicare sconto_over_65                                                                        (prezzo_biglietto_totale -= sconto_biglietto)


    5.5 - Stampare il prezzo totale del biglietto nel Form                                                      (OUTPUT = prezzo_biglietto_totale.toFixed(2))

        
6 - Appena l'utente cliccherà il bottone "Annulla":

    6.1 - Riportare il form alla versione default svuotando tutto
