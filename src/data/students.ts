import type { Student } from "@/types/student";

// Keep hues cycling for visual variety; other fields left empty so content can be
// populated later or via CMS.
const hues = ["#C89B6D", "#6B8EAE", "#7a9e7e", "#a87c8e"];

function initialsOf(name: string) {
  const parts = name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "--";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

const names = [
  "Inez",
  "elen julia",
  "Lucetta",
  "kayana",
  "Michele",
  "Ghozi Cattleman",
  "Bintang abrar",
  "nadia",
  "Alex",
  "Aini",
  "Farizka Delisyah Putri",
  "Najya Zada",
  "Dzaky",
  "Syrin Alia Zahra Marin",
  "Eyikaaa",
  "Joaquin Richard",
  "Lulu Razita Griffin",
  "Qisha",
  "Aisyah Risqia Rahmadani",
  "Willy",
  "Raisa",
  "Sasa, Meiko, Latifa, Della (berempat)",
  "Brilliant",
  "Rafi (Achmad Fauzan)",
  "Silky",
  "bina",
  "Tama",
  "Tata cantik roomate Erika",
  "aurora shakila",
  "fasya",
  "Hosea Immanuel",
  "shifa",
  "Charlenee Mischa Chandra (Aline)",
  "Muhammad Dhiyaul Faizin",
  "ZAZAA",
  "rihadaa",
  "nesya",
  "hanaa ainul",
  "Dion J T",
  "vanka",
  "Frili",
  "ediwar",
  "Cordova Saldi Matta",
  "Kensha",
  "Naurahhhh",
  "Medinna Luna Ibrahim",
  "Nathanael Paskal",
  "Caca",
  "Marsela Putri delima",
  "aliem",
  "Keiran",
  "Rahman Atarrashid Khalafy",
  "Firaaa",
  "adiba",
  "Wisasongko",
  "Aldy",
  "Anggre",
  "harfi",
  "Jorgan",
  "Azka",
];

export const STUDENTS: Student[] = names.map((n, i) => ({
  id: i + 1,
  name: n,
  uni: "",
  major: "",
  fact: "",
  food: "",
  moment: "",
  message: "",
  song: "",
  word: "",
  initials: initialsOf(n),
  hue: hues[i % hues.length],
}));
