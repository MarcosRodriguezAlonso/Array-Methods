//Años:

let years: number[] = [];

for (let yearIndex = 2000; yearIndex <= 2024; yearIndex++) {
  if (yearIndex >= 2000 && yearIndex <= 2024) {
    years.push(yearIndex);
  }
}

//Words:

const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura,",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar,",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa,",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];

console.log(`
Canción del pirata reza así:

${words.reverse().join(" ")}`);

//Notas:

let notes: number[] = [];

notes.push(2, 8, 3, 4, 9);

console.log(`
Las notas aprovadas son:
`);

for (const aprovedNotes of notes) {
  if (aprovedNotes >= 5) {
    console.log(aprovedNotes);
  }
}

console.log(`
El promedio de las notas es:
`);

let notesAdition = notes.reduce((a, b) => a + b, 0);
let notesAverage = notesAdition / notes.length;

console.log(notesAverage);

let highestNote = Math.max(...notes);
let lowestNote = Math.min(...notes);

console.log(`
La nota más alta es: ${highestNote}
a nota más baja es: ${lowestNote}`);
