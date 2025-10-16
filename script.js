const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

const contentData = {
  about: "💚 About Me\n\n Hi to you; who joined my website! \n\n The name is Zoe but my nickname is Linn, \n\n I'm an ESTP. \n\n According to my calculations, my favourite song is Yukiakari. \n\n I'm half Greek, half Romanian.\n\n I'm named by friends and family members 'black silly cat'. Huge fan of Lucifer and Big Suki (i know these songs from the bottom of my heart)",
  
  facts: "✨ Random Facts\n\n• Born in March 5th 2002 \n\n • I play video games \n\n • I can understand Japanese and Korean \n\n • I love pokemon \n\n • I'm an F1 Fan \n\n • Outside kpop life, i care about modified cars \n\n if you play video games, let me know, really. I'll try to join yourself  so I can play with you and make you laugh. Mutuals say I talk a lot. I like teasing people, especially those who are so close to me because I love them dearly. ",
  
  favorites: "🎶 Favorites\n\nMusic: Rock, Alt-rock, J-pop, J-rock\nBiases:\n\n &team: Yuma, Nicholas, Euijoo, K. \n Stray Kids: Lee Know, I.N \n Ateez: Yeosang \n Boynextdoor: Taesan \n\n other groups i listen to: The Boyz, NCT, P1harmony, Xikers, NMIXX, aespa, Lesserafim",
  
  memories: "📸 Memories\n\n Still loading zzz... \n\n But the top three current time: \n\n • The people I meet on daily basis \n\n • When I went to Italy in 2022 \n\n • When I decided i'll go in Japan with people I had just met two weeks beforehand.",
  
  projects: "🧠 Projects\n\n Japan 2026 to happen. Website I'm creating for something special. \n\n My three songs i've written so far. \n See Enhypen, Stray Kids, &team and Ateez live. ",
  
  thoughts: "💭 Thoughts \n\n 'I had become an accomplished clown, a child who never spoke a single truthful word.' - OSAMU DAZAI, No Longer Human"
};

// Handle card clicks
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.content;
    modalBody.textContent = contentData[key]; // Use textContent so \n works
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
