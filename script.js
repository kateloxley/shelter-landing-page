const pets = [
  {
    name: 'Jennifer',
    img: '../../assets/images/pets-jennifer.svg',
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Sophia',
    img: '../../assets/images/pets-sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Woody',
    img: '../../assets/images/pets-woody.svg',
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    name: 'Scarlett',
    img: '../../assets/images/pets-scarlet.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Katrine',
    img: '../../assets/images/pets-katrine.svg',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Timmy',
    img: '../../assets/images/pets-timmy.svg',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
  {
    name: 'Freddie',
    img: '../../assets/images/pets-freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Charly',
    img: '../../assets/images/pets-charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },
];

// POPUP

const petsCard = document.querySelectorAll('.pets__card');
const petsCards = document.querySelector('.pets__cards');
const popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
const popupContent = document.querySelector('.popup__content');
let popupBack = document.querySelector('.popup__back');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title');
const popupSubTitle = document.querySelector('.popup__subtitle');
const popupText = document.querySelector('.popup__text');
const popupAge = document.querySelector('.popup__item.age');
const popupInoc = document.querySelector('.popup__item.inoc');
const popupDis = document.querySelector('.popup__item.disease');
const popupParas = document.querySelector('.popup__item.parasites');
const petsName = document.querySelectorAll('.pets__name');

// SLIDER
const body = document.querySelector('body');
const leftBtn = document.querySelector('.pets__arrow-container-left');
const rightBtn = document.querySelector('.pets__arrow-container-right');
const slider = document.querySelector('.pets__slider');
const leftItem = document.querySelector('#left');
const rightItem = document.querySelector('#right');
const activeItem = document.querySelector('#active');

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const getArrID = () => {
  let arrID = [];
  for (let i = 0; i < pets.length; i++) {
    arrID.push(i);
  }
  let shuffledID = shuffleArray(arrID);
  return shuffledID;
};

let shuffledID = getArrID();
let leftID = shuffledID.slice(0, 3);
let activeID = shuffledID.slice(3, 6);
let rightID = shuffledID.slice(6, 8).concat(shuffledID[0]);
let tmpID;

const openPopup = (e) => {
  let ID;
  const card = e.currentTarget;
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].name === card.children[1].innerHTML) {
      ID = i;
    }
  }
  popup.classList.add('active');
  body.classList.add('noscroll');
  createPopup(ID);
};

const createPopup = (number) => {
  popup.querySelector('.popup__title').innerHTML = pets[number].name;
  popup.querySelector(
    '.popup__subtitle'
  ).textContent = `${pets[number].type} - ${pets[number].breed}`;
  popup.querySelector('.popup__text').textContent = pets[number].description;
  popup.querySelector('.popup__image').src = pets[number].img;
  popup.querySelector('.popup__age').textContent = pets[number].age;
  popup.querySelector('.popup__inoc').textContent =
    pets[number].inoculations.join(', ');
  popup.querySelector('.popup__disease').textContent =
    pets[number].diseases.join(', ');
  popup.querySelector('.popup__parasites').textContent =
    pets[number].parasites.join(', ');
  popup.classList.add('active');
};

const createCardTemplate = (id) => {
  const petCard = document.createElement('div');
  petCard.classList.add('pets__card');
  const petsImage = petCard.appendChild(document.createElement('img'));
  petsImage.classList.add('pets__image');
  petsImage.src = pets[id].img;
  const petsName = petCard.appendChild(document.createElement('p'));
  petsName.classList.add('pets__name');
  petsName.textContent = pets[id].name;
  const petsLearnmore = petCard.appendChild(document.createElement('a'));
  petsLearnmore.classList.add('pets__learnmore');
  petsLearnmore.textContent = 'Learn more';
  petCard.addEventListener('click', openPopup);
  return petCard;
};

const openCards = () => {
  shuffledID = getArrID();
  leftID = shuffledID.slice(0, 3);
  activeID = shuffledID.slice(3, 6);
  rightID = shuffledID.slice(6, 8).concat(shuffledID[0]);

  if (leftItem && activeItem && rightItem) {
    leftItem.setAttribute('id', 'left');
    for (let i = 0; i < 3; i++) {
      card = createCardTemplate(leftID[i]);
      leftItem.appendChild(card);
    }

    activeItem.setAttribute('id', 'active');
    for (let i = 0; i < 3; i++) {
      card = createCardTemplate(activeID[i]);
      activeItem.appendChild(card);
    }

    rightItem.setAttribute('id', 'right');
    for (let i = 0; i < 3; i++) {
      card = createCardTemplate(rightID[i]);
      rightItem.appendChild(card);
    }
  }
};
openCards();

const moveRight = () => {
  slider.classList.add('transition-right');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight);
};

const moveLeft = () => {
  slider.classList.add('transition-left');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight);
};

leftBtn && leftBtn.addEventListener('click', moveLeft);
rightBtn && rightBtn.addEventListener('click', moveRight);

const createChangedItem = (changedItem, move) => {
  let newShuffledID = getArrID();
  shuffledID = newShuffledID;
  leftID = shuffledID.slice(0, 3);
  rightID = shuffledID.slice(6, 8).concat(shuffledID[0]);
  if (move === 'LEFT') {
    for (let i = 0; i < 3; i++) {
      card = createCardTemplate(leftID[i]);
      changedItem.appendChild(card);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      card = createCardTemplate(rightID[i]);
      changedItem.appendChild(card);
    }
  }
  return changedItem;
};

slider &&
  slider.addEventListener('animationend', (animationEvent) => {
    let changedItem;
    let move;
    if (animationEvent.animationName === 'move-left') {
      slider.classList.remove('transition-left');
      changedItem = leftItem;
      move = 'LEFT';
      activeItem.innerHTML = leftItem.innerHTML;
      tmpID = activeID;
      activeID = leftID;
    } else {
      slider.classList.remove('transition-right');
      changedItem = rightItem;
      move = 'RIGHT';
      activeItem.innerHTML = rightItem.innerHTML;
      tmpID = activeID;
      activeID = rightID;
    }
    for (let i = 0; i < activeItem.children.length; i++) {
      let items = activeItem.children[i];
      items.addEventListener('click', openPopup);
    }
    changedItem.innerHTML = '';
    shuffledID = getArrID();
    changedItem = createChangedItem(changedItem, move);
    leftBtn.addEventListener('click', moveLeft);
    rightBtn.addEventListener('click', moveRight);
  });

popupContent.addEventListener('mouseenter', function () {
  popupClose.classList.remove('hover');
});

popupContent.addEventListener('mouseleave', function () {
  popupClose.classList.add('hover');
});

popupBack.addEventListener('click', function () {
  popup.classList.toggle('active');
  body.classList.remove('noscroll');
});

popupClose.addEventListener('click', function () {
  popup.classList.toggle('active');
  body.classList.remove('noscroll');
});

// BURGER
const burgerContainer = document.querySelector('.header__burger-container');
const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const burgerStripes = document.querySelectorAll('.header__burger span');
const headerBack = document.querySelector('.header__back');
const headerLinks = document.querySelectorAll('.header__link');

burgerContainer.addEventListener('click', function () {
  body.classList.toggle('noscroll');
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  headerBack.classList.toggle('active');
  for (let stripe of burgerStripes) {
    stripe.classList.toggle('active');
  }
});

headerBack.addEventListener('click', function () {
  if (nav.classList.contains('active')) {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    headerBack.classList.remove('active');
    body.classList.toggle('noscroll');
  } else {
    headerBack.classList.remove('active');
  }
});

for (let headerLink of headerLinks) {
  headerLink.addEventListener('click', function () {
    if (nav.classList.contains('active')) {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
      headerBack.classList.remove('active');
      body.classList.toggle('noscroll');
    }
  });
}

//PAGINATION
const next = document.querySelector('#next');
const last = document.querySelector('#last');
const start = document.querySelector('#start');
const back = document.querySelector('#back');

const create48pets = () => {
  let pets48 = [];
  for (let i = 0; i < 6; i++) {
    pets48.push(...shuffleArray(pets));
  }
  return pets48;
};

const pets48 = create48pets();

let currentPage = 1;
let itemsAmount = 8;
let lastPage = Math.ceil(pets48.length / itemsAmount);

const createCards = () => {
  let itemsAmountTmp;
  let cards;
  if (window.innerWidth < 768) {
    itemsAmountTmp = 3;
    cards = Array.from(document.querySelectorAll('.pets__card')).slice(0, 3);
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    itemsAmountTmp = 6;
    cards = Array.from(document.querySelectorAll('.pets__card')).slice(0, 6);
  } else if (window.innerWidth >= 1280) {
    itemsAmountTmp = 8;
    cards = document.querySelectorAll('.pets__card');
  }
  itemsAmount = itemsAmountTmp;
  return cards;
};

const openPetsCards = (currentPage, itemsAmount) => {
  let cards = createCards();
  cards.forEach((card, index) => {
    let index48;
    if (currentPage <= 1) {
      index48 = index;
    } else {
      index48 = (currentPage - 1) * itemsAmount + index;
    }
    card.querySelector('.pets__image').src = pets48[index48].img;
    card.querySelector('.pets__name').textContent = pets48[index48].name;
    card.addEventListener('click', openPopup);
  });
};
openPetsCards(currentPage, itemsAmount);

start &&
  start.addEventListener('click', () => {
    currentPage = 1;
    paging();
  });

next &&
  next.addEventListener('click', () => {
    currentPage++;
    paging();
  });

back &&
  back.addEventListener('click', () => {
    currentPage--;
    paging();
  });

last &&
  last.addEventListener('click', () => {
    currentPage = Math.ceil(pets48.length / itemsAmount);
    paging();
  });

const paging = () => {
  document.getElementById('activePage').textContent = currentPage;
  openCards(currentPage, itemsAmount);
  if (currentPage === 1) {
    last.classList.remove('disabled');
    last.disabled = false;

    next.classList.remove('disabled');
    next.disabled = false;

    start.classList.add('disabled');
    start.disabled = true;

    back.classList.add('disabled');
    back.disabled = true;
  } else if (
    currentPage > 1 &&
    currentPage < Math.ceil(pets48.length / itemsAmount)
  ) {
    start.classList.remove('disabled');
    start.disabled = false;

    back.classList.remove('disabled');
    back.disabled = false;

    last.classList.remove('disabled');
    last.disabled = false;

    next.classList.remove('disabled');
    next.disabled = false;
  } else if (currentPage == Math.ceil(pets48.length / itemsAmount)) {
    start.classList.remove('disabled');
    start.disabled = false;

    back.classList.remove('disabled');
    back.disabled = false;

    last.classList.add('disabled');
    last.disabled = true;

    next.classList.add('disabled');
    next.disabled = true;
  }
};
