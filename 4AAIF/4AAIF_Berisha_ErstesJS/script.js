let text1 = "Hallo 4AAIF";
let anzahl = 18;
alert(text1)
console.log(text1+", Heute sind " + anzahl + " Schüler anwesend!")
const wert = 10.9;
//wert = 20; <--- unmöglich bei const
console.log(typeof wert);
let wert2 = 18
console.log(typeof wert2);
console.log(typeof text1);

let o = {vorname: "Hans", nachname: "Mustermann"};
console.log(typeof o);
console.log("Objekt: "+ o);

let x1 = "18";
let x2 = 18;

console.log('18 == "18" ?', (x1 == x2) ); // Inhaltsgleichheit wird geprüft
console.log('18 === "18" ?', (x1 === x2) ); // Inhalts- und Typgleichheit wird geprüft