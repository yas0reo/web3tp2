import { animate, spring } from "animejs";

animate(".fly", {
  x: [0, "0.5vw", 0, "-0.5vw", 0],
  y: [0, "-0.5vh", "0.5vh", 0],
  duration: 2000,
  loop: true,
  ease: spring({
    bounce: 0.83,
    duration: 796,
  }),
});
