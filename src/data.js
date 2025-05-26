import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/canva.png";
import Tools3 from "/assets/tools/github.png";
import Tools4 from "/assets/tools/laragon.png";
import Tools5 from "/assets/tools/nodejs.png";
import Tools6 from "/assets/tools/php.png";
import Tools7 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/laravel.png";
import Tools9 from "/assets/tools/reactjs.png";
import Tools10 from "/assets/tools/bootstrap.png";
import Tools11 from "/assets/tools/tailwind.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad : 100
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Figma",
    ket: "Design UI/UX",
    dad: 200
  },
  {
    id: 3,
    gambar: Tools12,
    nama: "Canva",
    ket: "Design Graphics",
    dad: 300
  },
  {
    id: 4,
    gambar: Tools3,
    nama: "GitHub",
    ket: "Version Control",
    dad: 400
  },
  {
    id: 5,
    gambar: Tools4,
    nama: "Laragon",
    ket: "Server Environment",
    dad: 500
  },
  {
    id: 6,
    gambar: Tools5,
    nama: "NodeJS",
    ket: "JavaScript Runtime",
    dad : 600
  },
  {
    id: 7,
    gambar: Tools6,
    nama: "PHP",
    ket: "Server-side Language",
    dad : 700
  },
  {
    id: 8,
    gambar: Tools7,
    nama: "JavaScript",
    ket: "Programming Language",
    dad : 800
  },
  {
    id: 9,
    gambar: Tools8,
    nama: "Laravel",
    ket: "PHP Framework",
    dad: 900
  },
  {
    id: 10,
    gambar: Tools9,
    nama: "React",
    ket: "JavaScript Library",
    dad:1000
  },
  {
    id: 11,
    gambar: Tools10,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad:1100
  },
  {
    id: 12,
    gambar: Tools11,
    nama: "TailwindCSS",
    ket: "Utility-first CSS Framework",
    dad:1200
  },
]

import Kastistik from "/assets/proyek/kas.webp"
import Inventaris from "/assets/proyek/inventaris.webp"
import Perpustakaan from "/assets/proyek/perpus.webp"
import Kamus from "/assets/proyek/kamus.webp"
import Portofolio from "/assets/proyek/portofolio.webp"

export const listProyek = [
  {
    id: 1,
    gambar: Kastistik,
    nama: "Web Apps Kastistik",
    desk: "Web Apps Kastistik is a web application designed to manage financial data, includding income, expenses, and financial reports for Statistics Employees",
    tools: ["Laravel", "Tailwind CSS", "Chart Js", "DataTables", "SweetAlert"],
    dad: "100",
  },
  {
    id: 2,
    gambar: Inventaris,
    nama: "Web Apps Inventaris",
    desk: "Web Apps Inventaris is a web application designed to manage inventory data, including items, categories, and stock levels for Statistics Employees",
    tools: ["Laravel", "Tailwind CSS", "Javascript", "DataTables", "SweetAlert"],
    dad: "200",
  },
  {
    id: 3,
    gambar: Perpustakaan,
    nama: "Web Apps Perpustakaan",
    desk: "Simple Web Perpustakaan to manage library books, members and borrowiing transactions",
    tools: ["PHP", "Bootstrap", "Laragon", "DataTables"],
    dad: "300",
  },
  {
    id: 4,
    gambar: Kamus,
    nama: "Website Kamus",
    desk: "Simple Web Kamus to search for word definitions and translations",
    tools: ["HTML", "CSS", "Node JS", "Vercel"],
    dad: "400",
    demo: "https://kamus-app.vercel.app/",
  },{
    id: 5,
    gambar: Portofolio,
    nama: "Portofolio",
    desk: "My personal portfolio website to showcase my projects and skills",
    tools: ["React JS", "Tailwind CSS", "Vite Js", "Remix Icons", "Flowbite"],
    dad: "500",
    demo: "",
  }
];
