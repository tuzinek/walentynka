const pages = [...document.querySelectorAll('.page')];
const openLetter = document.getElementById('openLetter');
const toPage3 = document.getElementById('toPage3');

// przejścia
openLetter.addEventListener('click', () => transitionTo(1, 2));
toPage3.addEventListener('click', () => transitionTo(2, 3));

function transitionTo(from, to) {
  pages[from - 1].classList.add('exit');
  setTimeout(() => {
    pages[from - 1].classList.remove('active', 'exit');
    pages[to - 1].classList.add('active');
  }, 600);
}

// Serduszka
const p2 = document.getElementById('page2');
const heartsContainer = p2.querySelector('.hearts-container');

const reasonsText = [
  "Kocham Cię bo nawet milczenie jest przyjemniejsze z Tobą ♡","Kocham Cię za twoje wsparcie ♡","Kocham Cię za twój uśmiech ♡","Kocham Cię za twoją dobroć ♡",
  "Kocham Cię za twoje oczy ♡","Kocham Cię bo jesteś osobą której ufam najbardziej ♡","Kocham Cię za twój głos ♡","Kocham Cię za twoją obecność ♡",
  "Kocham Cię za twój humor ♡","Kocham Cię za twoją troskę ♡","Kocham Cię bo potrafisz mnie wysłuchać ♡","Kocham Cię za twoje gesty ♡",
  "Kocham Cię bo oddał bym za ciebie życie ♡","Kocham Cię bo dzięki tobie mam sens życia ♡","Kocham Cię bo mamy ze sobą wiele pięknych wspomnień ♡","Kocham Cię za twoje ciepło ♡",
  "Kocham Cię bo zawsze mnie wspierasz ♡","Kocham Cię bo potrafisz poprawić mi dzień samą swoją obecnością ♡","Kocham Cię bo nie wyobrażam sobie życia bez Ciebie ♡","Kocham Cię bo bez ciebie bym sobie nie poradził ♡",
  "Kocham Cię bo tylko z tobą mogę porozmawiać na niektóre tematy ♡","Kocham Cię bo poświęcasz mi swój wolny czas ♡","Kocham Cię bo uwielbiam gdy widzę jak jesteś radosna ♡","Kocham Cię za twoją pewność siebie ♡",
  "Kocham Cię bo wiem, że mnie nie zdradzisz ♡","Kocham Cię bo jesteś zazdrosna o każdą dziewczynę z którą mam kontakt ♡","Kocham Cię bo masz najlepsze stópki na świecie ♡","Kocham Cię bo wiem, że chcę z tobą spędzić resztę życia ♡",
  "Kocham Cię bo nigdy nie umiałabym o tobie zapomnieć ♡","Kocham Cię bo chcę zostać twoim mężem ♡","Kocham Cię bo jesteś najcudowniejsza ♡"
];

const heartPositions = [
  {top:10,left:7},{top:13,left:20},{top:16,left:35},{top:17,left:50},{top:13,left:69},
  {top:16,left:87},{top:27,left:13},{top:29,left:28},{top:33,left:52},{top:29,left:77},
  {top:39,left:18},{top:35,left:40},{top:35,left:65},{top:40,left:5},{top:45,left:30},
  {top:50,left:57},{top:43,left:85},{top:55,left:10},{top:53,left:44},{top:52,left:72},
  {top:74,left:5},{top:63,left:34},{top:72,left:61},{top:81,left:87},{top:60,left:20},
  {top:67,left:80},{top:77,left:72},{top:79,left:18},{top:67,left:49},{top:64,left:90},
  {top:80,left:35}
];

reasonsText.forEach((text, i) => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.top = heartPositions[i].top + '%';
  heart.style.left = heartPositions[i].left + '%';
  heart.innerHTML = '❤';

  const reason = document.createElement('div');
  reason.classList.add('reason');
  reason.textContent = text;
  reason.style.top = '70px';
  reason.style.left = '50%';
  reason.style.transform = 'translateX(-50%)';

  heart.addEventListener('click', () => {
    document.querySelectorAll('.reason').forEach(r => r.style.opacity = '0');
    reason.style.opacity = '1';
  });

  heart.appendChild(reason);
  heartsContainer.appendChild(heart);
});
