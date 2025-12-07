import * as Tone from "https://esm.sh/tone@15.1.22";

const player = new Tone.Player(
  "/assets/audio/BoredningningSolo.mp3"
).toDestination();

const btn = document.getElementById("playAudio");

btn.addEventListener("click", async () => {
  await Tone.start();

  Tone.loaded().then(() => {
    player.start();
  });
});
