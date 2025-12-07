const members = {
  Giselle: {
    img: "/assets/img/giselle/giselle05.jpg",
    video: "/assets/video/giselle_video.MOV",
    audio: "/assets/audio/DopamineGiselleSolo.mp3",
  },
  Karina: {
    img: "/assets/img/karina/karina01.jpg",
    video: "/assets/video/karina_video.MOV",
    audio: "/assets/audio/UPKarinaSolo.mp3",
  },
  Ningning: {
    img: "/assets/img/ningning/ningning08.jpg",
    video: "/assets/video/ningning_video.MOV",
    audio: "/assets/audio/BoredningningSolo.mp3",
  },
  Winter: {
    img: "/assets/img/winter/winter04.jpg",
    video: "/assets/video/winter_video.MOV",
    audio: "/assets/audio/SparkWinterSolo.mp3",
  },
};

const imgElem = document.querySelector(".NingNingImg img");
const videoElem = document.getElementById("ningning");
const videoSource = videoElem.querySelector("source");
const audioBtn = document.getElementById("playAudio");
const dropdownItems = document.querySelectorAll(".dropdown-item");

let currentMember = "Ningning";

function showMember(name) {
  const m = members[name];
  if (!m) return;

  imgElem.src = m.img;

  videoSource.src = m.video;
  videoElem.load();

  player.load(m.audio);
}

dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const name = item.textContent.trim();
    showMember(name);
  });
});
