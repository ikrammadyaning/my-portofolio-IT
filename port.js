const Kalkulator = {
  title: "Kalkulator Zakat Emas",
  description:
    "Alikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
  image: "",
  tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
};

const projects = [Kalkulator];

const projectsLagi = [
  {
    title: "Kalkulator Zakat Emas",
    description:
      "Aplikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
    image: "img/zakat.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/ikrammadyaning/tugas-kalkulator-zakat/tree/main/tugas-kalkulator-emas",
  },
  {
    title: "Kalkulator Digital",
    description: "aplikasi web untuk menggunakan kalkulator digital versi web nya dengan menggunakan js",
    image: "img/kalku.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/ikrammadyaning/tugas-kalkulator-zakat/tree/main/tugas-kalkulator",
  },
  {
    title: "Simulasi Traffic Lamp",
    description: "aplikasi web ini untuk melihat cara kerja nya traffic lap lewat gadget",
    image: "img/traffic.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/ikrammadyaning/tugas-kalkulator-zakat/tree/main/belajar-css-animasi/tugas-css-animasi",
  },
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < projectsLagi.length; i++) {
  let project = projectsLagi[i];

  let card = document.createElement("div");
  card.className = "card";

  let title = document.createElement("h2");
  title.textContent = project.title;

  let description = document.createElement("p");
  description.textContent = project.description;

  let image = document.createElement("img");
  image.src = project.image;

  let link = document.createElement("a");
  link.href = project.link;

  let tags = document.createElement("h1");
  tags.textContent = project.tags;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(tags);
  card.appendChild(link);
  link.textContent = "Lihat lebih detail"


  gallery.appendChild(card);
}


// audio
// const audio = document.getElementById("nasyid");
//         const button = document.getElementById("toggleBtn");

//         button.addEventListener("click", function () {
//             if (audio.paused) {
//                 audio.play();
//                 button.textContent = "Stop Nasyid";
//                 button.style.backgroundColor = "yellow";
//             } else {
//                 audio.pause();
//                 button.textContent = "Play Nasyid";
//                 button.style.backgroundColor = "white"
//             }
//         });
const select = document.getElementById("nasyidPilih");
const player = document.getElementById("audio");

select.addEventListener("change", () => {
  if (select.value !== "") {
    player.src = select.value;
    player.play();
  }
});