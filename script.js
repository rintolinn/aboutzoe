// Modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementById("close");

// Content for each card section
const sections = {
  about: {
    title: "About Me",
    text: "Zoe\n\n ENTP\n\n big love for big suki and daydream \n\n 23 years old\n\n nickname: linn / silly black cat \n pisces \n\n Greek-Romanian \n\n I speak: English, Greek, Romanian \n I can understand Japanese and Korean and I talk a bit of Spanish"
  },
  interests: {
    title: "Groups and biases",
    text: "Enhypen: Jay, Sunghoon\n\n Ateez: Yeosang, Yunho\n\n &Team: Nicholas, Yuma(if not obvious)\n\n Stray Kids: Leeknow\n\n BOYNEXTDOOR: Taesan \n\n Other groups i listen to: \n P1harmony, Xikers, Lesserafim, NMIXX, aespa, ITZY, i-dle"
  },
  music: {
    title: "Random Facts",
    text: "I play video games \n\nI listen to music 24/7 \n\n I listen to rock \n\n Studio Ghibli Movies my second addiction \n\n Pokemon addict \n\nI love literature \n\n Anime i love dearly: Fruits Basket \n\n F1 FAN \n\nOutside K-POP I spend my time in cars, especially modified cars\n\n  "
  },
  dni: {
    title: "DNI",
    text: "Basic DNI list: under 16, solo stan, argue with everything, \n doesn't accept options from others\n only bts stans or bp stans\n supports Super Junior"
  },
    favorites: {
    title: "Other Things",
    text: "Read Visual Novels: Steins;Gate and Chaos;Child \n Read: No Longer Human by Osamu Dazai \n\n Favourite songs: \nRubia - HOYOMIX \n Sailing - Aimer \n Sunsetz - CAS \n Lucifer - ENHYPEN \n Scar to Scar - &TEAM \n Big Suki -&TEAM  \n\n League of Legends Player \n\n If you play Honkai Star Rail, my UID:700060101"
  }
};

// Open modal with section content
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const section = card.getAttribute("data-section");
    if (sections[section]) {
      modalTitle.textContent = sections[section].title;
      modalText.textContent = sections[section].text;
      modal.style.display = "flex";
    }
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
