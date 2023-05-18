// DICHIARAZIONE VARIABILI
let nome_completo_utente;
let numero_chilometri_utente;
let fascia_età_utente;
let sconto_biglietto;
let prezzo_biglietto_totale;

// DICHIARAZIONE CONSTANTI
const prezzo_biglietto_unitario = 0.21;
console.log("prezzo_biglietto_unitario :", prezzo_biglietto_unitario, "€");

const sconto_minorenni = 20;
console.log("sconto_minorenni :", sconto_minorenni, "%");

const sconto_over_65 = 40;
console.log("sconto_over_65 :", sconto_over_65, "%");

const button_genera = document.getElementById('button_genera');
console.log("button_genera :", button_genera)

const button_annulla = document.getElementById('button_annulla');
console.log("button_annulla :", button_annulla)