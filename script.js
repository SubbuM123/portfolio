window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 75) {
        nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark bg-transparent';
    } else {
        nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark bg-dark';
    }
};

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

window.addEventListener('scroll', () => {
    const indicator = document.querySelector('.scroll-indicator');
    indicator.style.opacity = window.scrollY > 600 ? '0' : '1';
});