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

const highestToLowestNotes = notes.sort();

console.log(`
Las notas aprobadas son:
`);

for (const approvedNotes of notes) {
  if (approvedNotes >= 5) {
    console.log(approvedNotes);
  }
}

console.log(`
La nota media es:
`);

let notesTotal = 0;

for (let singleNote of notes) {
  notesTotal += singleNote;
}

const noteAverage = notesTotal / notes.length;

console.log(noteAverage);

console.log(`
La nota más alta es:

${highestToLowestNotes.slice(highestToLowestNotes.length - 1)}

La nota más baja es:

${highestToLowestNotes.at(0)}
`);
