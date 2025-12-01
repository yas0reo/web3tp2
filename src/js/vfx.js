import { VFX } from "https://esm.sh/@vfx-js/core";

const vfx = new VFX();
document.querySelectorAll(".effect").forEach((target) => {
  vfx.add(target, {
    shader: "glitch",
    overflow: 40,
  });
});
