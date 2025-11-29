import * as Tone from "https://esm.sh/tone@15.1.22";

const synth = new Tone.Synth().toDestination();

const player = new Tone.Player(
  "/assets/audio/BoredningningSolo.mp3"
).toDestination();

document.querySelector("button").addEventListener("click", async () => {
  await Tone.start();

  Tone.loaded().then(() => {
    player.start();
  });
});
