// DICHIARAZIONE VARIABILI DI INPUT
let nome_completo_utente;
let numero_chilometri_utente;
let fascia_età_utente;
let sconto_biglietto;
let prezzo_biglietto_totale;

// DICHIARAZIONE VARIABILI DI OUTPUT
let nome_completo_utente_output = document.getElementById('nome_completo_utente');
let prezzo_biglietto_totale_output = document.getElementById('prezzo_biglietto_totale');

// DICHIARAZIONE CONSTANTI
const prezzo_biglietto_unitario = 0.21;
console.log("prezzo_biglietto_unitario :", prezzo_biglietto_unitario, "€");

const sconto_minorenni = 20;
console.log("sconto_minorenni :", sconto_minorenni, "%");

const sconto_over_65 = 40;
console.log("sconto_over_65 :", sconto_over_65, "%");

const button_genera = document.getElementById('button_genera');

const button_annulla = document.getElementById('button_annulla');

// CONTROLLO BUTTON GENERA
if (button_genera){
    button_genera.addEventListener('click', function(){
        // INIZIALIZZAZIONE NOME COMPLETO UTENTE
        nome_completo_utente = document.getElementById('input_nome_completo').value;
        
        // INIZIALIZZAZIONE NUMERO CHILOMETRI UTENTE
        numero_chilometri_utente = parseInt(document.getElementById('input_km').value);

        // INIZIALIZZAZIONE FASCIA ETA UTENTE
        fascia_età_utente = document.getElementById('select_eta').value;

        // INIZIALIZZAZIONE PREZZO BIGLIETTO TOTALE
        prezzo_biglietto_totale = prezzo_biglietto_unitario * numero_chilometri_utente;

        // CONTROLLO NOME COMPLETO E NUMERO CHILOMETRI UTENTE
        if (nome_completo_utente === "" || numero_chilometri_utente === "" || numero_chilometri_utente === 0 || isNaN(numero_chilometri_utente)){
            // L'UTENTE HA LASCIATO UNO DEI CAMPI VUOTI, OPPURE HA INSERITO MALE I CHILOMETRI DA PERCORRERE
            alert("Devi inserire i dati correttamente!");
            throw new Error("Devi inserire i dati correttamente!");

        } else if (fascia_età_utente === "minorenne"){
            // INSERIMENTO TIPO DI BIGLIETTO IN OUTPUT
            document.getElementById('tipo_biglietto').innerHTML = "Biglietto Scontato";

            // CALCOLO PREZZO BIGLIETTO TOTALE SCONTO MINORENNE
            sconto_biglietto = prezzo_biglietto_totale * sconto_minorenni / 100;
            prezzo_biglietto_totale -= sconto_biglietto;

            // INSERIMENTO PREZZO BIGLIETTO TOTALE SCONTO MINORENNE IN OUTPUT
            let prezzo_biglietto_totale_output_fixed = prezzo_biglietto_totale.toFixed(2);
            prezzo_biglietto_totale_output.innerHTML = `${prezzo_biglietto_totale_output_fixed}€`;

        } else if (fascia_età_utente === "over_65"){
            // INSERIMENTO TIPO DI BIGLIETTO IN OUTPUT
            document.getElementById('tipo_biglietto').innerHTML = "Biglietto Scontato";

            // CALCOLO PREZZO BIGLIETTO TOTALE SCONTO OVER 65
            sconto_biglietto = prezzo_biglietto_totale * sconto_over_65 / 100;
            prezzo_biglietto_totale -= sconto_biglietto;

            // INSERIMENTO PREZZO BIGLIETTO TOTALE SCONTO MINORENNE IN OUTPUT
            let prezzo_biglietto_totale_output_fixed = prezzo_biglietto_totale.toFixed(2);
            prezzo_biglietto_totale_output.innerHTML = `${prezzo_biglietto_totale_output_fixed}€`;

        } else{
            // INSERIMENTO TIPO DI BIGLIETTO IN OUTPUT
            document.getElementById('tipo_biglietto').innerHTML = "Biglietto Standard";

            // INSERIMENTO PREZZO BIGLIETTO TOTALE NON SCONTATO IN OUTPUT
            let prezzo_biglietto_totale_output_fixed = prezzo_biglietto_totale.toFixed(2);
            prezzo_biglietto_totale_output.innerHTML = `${prezzo_biglietto_totale_output_fixed}€`;
        }

        // INSERIMENTO NOME COMPLETO IN OUTPUT
        nome_completo_utente_output.innerHTML = nome_completo_utente;

        // INSERIMENTO NUMERO CARROZZA IN OUTPUT
        document.getElementById('numero_carrozza').innerHTML = Math.floor(Math.random() * 10 + 1);

        // INSERIMENTO CODICE CP IN OUTPUT
        document.getElementById('numero_codice_cp').innerHTML = Math.floor(Math.random() * (99999-10000) + 10000);

        // CONSOLE LOG NOME COMPLETO UTENTE
        console.log("nome_completo_utente :", nome_completo_utente);

        // CONSOLE LOG NUMERO CHILOMETRI UTENTE
        console.log("numero_chilometri_utente :", numero_chilometri_utente, "km");

        // CONSOLE LOG FASCIA ETA UTENTE
        console.log("fascia_età_utente :", fascia_età_utente);

        // CONSOLE LOG PREZZO BIGLIETTO TOTALE
        console.log("prezzo_biglietto_totale :", prezzo_biglietto_totale, "€");
    })
    
} else{
    alert("Non trovo il bottone 'genera'!")
    throw new Error("Non trovo il bottone 'genera'!");
}

if (button_annulla){
    button_annulla.addEventListener("click", function(){
        // RESET NOME COMPLETO IN OUTPUT
        nome_completo_utente_output.innerHTML = "";

        // RESET TIPO DI BIGLIETTO IN OUTPUT
        document.getElementById('tipo_biglietto').innerHTML = "";

        // RESET NUMERO CARROZZA IN OUTPUT
        document.getElementById('numero_carrozza').innerHTML = "";

        // RESET CODICE CP IN OUTPUT
        document.getElementById('numero_codice_cp').innerHTML = "";

        // RESET PREZZO BIGLIETTO TOTALE IN OUTPUT
        prezzo_biglietto_totale_output.innerHTML = "";
    })

} else{
    alert("Non trovo il bottone 'annulla'!")
    throw new Error("Non trovo il bottone 'annulla'!");
}