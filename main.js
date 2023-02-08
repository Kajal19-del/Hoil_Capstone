// ========== hamburger menu ==========
const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hambug-menu');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.setAttribute('style', 'display: block !important');
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

// Feature Section
const cards = [
  {
    id: 1,
    image: '/images/person1.jpg',
    alt: 'person1',
    name: 'Yash Chowdhury',
    title: 'Event organiser of Kolkata',
    description: 'Event Management Company in Kolkata among other companies that organize top class events for their clients at an affordable price.',
  },
  {
    id: 2,
    image: '/images/person2.jpg',
    alt: 'person2',
    name: 'Anita Sharma',
    title: 'Director of Art Centre of Delhi',
    description: 'The Royal Reception is a company that personifies excellence in organizing events.',
  },
  {
    id: 3,
    image: '/images/person3.jpg',
    alt: 'person3',
    name: 'Mukesh Shah',
    title: 'Executive Director of the Holi Event',
    description: 'Mukesh Shah is senior-level manager responsible for overseeing the day-to-day operations of an organization and ensuring that the organization achieves its goals and objectives.',
  },
  {
    id: 4,
    image: '/images/person4.jpg',
    alt: 'dog4',
    name: 'Suresh Kumar',
    title: 'Content Creator at Instagram',
    description: 'Suresh Kumar is responsible for producing and distributing various forms of digital or print content for an organization or for personal brand building.',
  },
  {
    id: 5,
    image: '/images/person5.jpg',
    alt: 'person5',
    name: 'Ravi Sharma',
    title: 'President of Young Pirates of UP',
    description: "Ravi Sharma is a professional who uses design elements such as typography, images, and color to create visual representations of ideas and messages.",
  },
  {
    id: 6,
    image: '/images/child.jpg',
    alt: 'child',
    name: 'Devanshu Shah',
    title: 'Party guests of Holi Events ',
    description: 'Devanshu Shah is a performing artist who interprets and communicates emotion, ideas, and stories through movement and gesture.',
  },
];

const feature = document.getElementById('feature');

feature.innerHTML = `
  <h2 class="sub">Featured Speakers</h2>
  <p class="line"></p>
  <div id="speakers"></div>
`;

const speakers = document.getElementById('speakers');

for (let i = 0; i < 2; i += 1) {
  const card = cards[i];
  speakers.innerHTML += `
  <div class="guest">
    <img class="guestImg" src="${card.image}" alt="${card.alt}">
    <div>
      <h2 class="sub">${card.name}</h2>
      <p class="guestTitle">${card.title}</p>
      <p class="guestDescription">${card.description}</p>
    </div>
  </div>
  `;
}