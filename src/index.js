const ninja1 = document.querySelector(".opener-img-2");
const ninja2 = document.querySelector(".opener-img-1");
const ninja3 = document.querySelector(".opener-img-3");
const firstOpener = document.querySelector(".first-half-wrapper");
const secondOpener = document.querySelector(".second-half-wrapper");
const title = document.querySelector(".logo-title");
const clouds = document.querySelectorAll(".clouds");
const family = document.querySelector(".akatsuki-group");

function introAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "sine.in" } });

  tl.fromTo(
    ninja1,
    4,
    { x: "120%", opacity: 1, display: "block" },
    { x: "-150%", opacity: 0, display: "none" }
  );
  tl.fromTo(
    ninja2,
    4,
    { x: "-120%", opacity: 1, display: "block" },
    { x: "150%", opacity: 0, display: "none" },
    "-=2"
  );
  tl.fromTo(
    ninja3,
    3,
    { y: "-100%", opacity: 1 },
    { y: "100%", opacity: 0 },
    "-=1"
  );
  tl.fromTo(
    firstOpener,
    1,
    { x: "0%", opacity: 1 },
    { x: "-120%", opacity: 0 },
    "-=1.7"
  );
  tl.fromTo(
    secondOpener,
    1,
    { x: "0%", opacity: 1 },
    { x: "100%", opacity: 0 },
    "-=1.7"
  );
  tl.fromTo(title, 2, { scale: 0, rotation: 0 }, { scale: 1, rotation: 360 });
  tl.fromTo(family, 3, { y: "50%", opacity: 0 }, { y: "-6%", opacity: 1 });
  tl.fromTo(clouds, 2, { opacity: 0 }, { opacity: 1 });
  tl.fromTo(
    clouds,
    2,
    { x: "0.5%", y: "-0.5%" },
    { x: "-0.5%", y: "0.5%", repeat: -1, yoyo: true, ease: "power1.inOut" }
  );
}

introAnimation();
