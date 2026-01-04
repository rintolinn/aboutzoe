// small interactivity: follow toggle and avatar fallback
const followBtn = document.getElementById('followBtn');
const avatarImg = document.getElementById('avatarImg');


followBtn.addEventListener('click', ()=>{
const isFollowing = followBtn.classList.toggle('following');
followBtn.textContent = isFollowing ? 'following' : 'follow';
});


// avatar fallback if image fails to load
avatarImg.addEventListener('error', ()=>{
avatarImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="%23e6e6e6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="28" fill="%236f8db3">RY</text></svg>';
});


// optional: keyboard shortcut to toggle follow (f key)
document.addEventListener('keydown',(e)=>{ if(e.key.toLowerCase()==='f') followBtn.click(); });