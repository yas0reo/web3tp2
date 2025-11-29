import { VFX } from "https://esm.sh/@vfx-js/core";

const vfx = new VFX();
document.querySelectorAll("img").forEach((target) => {
  vfx.add(target, {
    shader: "glitch",
    overflow: 10,
  });
});
