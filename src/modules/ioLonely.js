const observerEaseInOptions = {
  root: null,
  threshold: 0.2,
  // rootMargin: "0px 0px -100px 0px",
};

const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("fadeIO");
      observerFade.unobserve(entry.target);
      console.log(entry);
    }
  });
}, observerEaseInOptions);

const callObserverFade = () => {
  console.log("in obser io");
  console.log(document.querySelectorAll(".artist__profile"));
  let fadeins = document.querySelectorAll(".artist__profile");
  fadeins.forEach((fade) => {
    observerFade.observe(fade);
  });
};

const observerPlayer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  },
  {
    threshold: 0.8,
  }
);

const callObserverPlayer = () => {
  let videos = document.querySelectorAll(".iovideo");
  videos.forEach((video) => {
    observerPlayer.observe(video);
  });
};

export { callObserverFade, callObserverPlayer };
