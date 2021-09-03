const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const duck_btn = document.getElementById('duck_btn');
const fox_btn = document.getElementById('fox_btn');
const food_btn = document.getElementById('food_btn');
const meme_btn = document.getElementById('meme_btn');
const joke_btn = document.getElementById('joke_btn');
const animeQuote_btn = document.getElementById('animeQuote_btn');
const messagesList = document.getElementById('messagesList');
const imgDiv = document.getElementById('imgDiv');

const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const duck_result = document.getElementById('duck_result');
const fox_result = document.getElementById('fox_result');
const food_result = document.getElementById('food_result');
const meme_result = document.getElementById('meme_result');
const joke_result = document.getElementById('joke_result');
const animeQuote_result = document.getElementById('animeQuote_result');


cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
duck_btn.addEventListener('click', getRandomDuck);
fox_btn.addEventListener('click', getRandomFox);
food_btn.addEventListener('click', getRandomFood);
meme_btn.addEventListener('click', getRandomMeme);
joke_btn.addEventListener('click', getRandomJoke);
animeQuote_btn.addEventListener('click', getRandomAnimeQuote);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
  // fetch('/cat')
		.then(res => res.json())
		.then(data => {
      if(data.file.includes('.mp4')) {
				getRandomCat();
			} else {
        cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
      }
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}

function getRandomDuck() {
  fetch('/duck') //or https://random-d.uk/api/v2 or https://random-d.uk/api
  .then(res => res.json())
		.then(data => {
      console.log(data)
			duck_result.innerHTML = `<img src=${data.url} alt="duck" />`;
		});
}

function getRandomFox() {
  fetch('https://randomfox.ca/floof/')
  .then(res => res.json())
		.then(data => {
			if(data.image.includes('.mp4')) {
				getRandomFox();
			}
			else {
				fox_result.innerHTML = `<img src=${data.image} alt="duck" />`;
			}
		});
}

function getRandomFood() {
  fetch('https://foodish-api.herokuapp.com/api/')
  .then(res => res.json())
		.then(data => {
				food_result.innerHTML = `<img src=${data.image} alt="duck" />`;
		});
}

function getRandomMeme() {
  fetch('https://api.imgflip.com/get_memes')
  .then(res => res.json())
  .then(data => {
      meme_result.innerHTML = `<img src=${data.data.memes[Math.floor(Math.random() * 100)].url} alt="duck" />`;
  });
}

function getRandomJoke() {
  fetch('https://icanhazdadjoke.com/slack')
  .then(res => res.json())
  .then(data => {
      joke_result.innerHTML = data.attachments[0].text;
  });
}

function getRandomAnimeQuote() {
  fetch('https://animechan.vercel.app/api/random')
  .then(res => res.json())
  .then(data => {
    animeQuote_result.innerHTML = `Anime: ${data.anime} <br /> <br />
    Character: ${data.character}, <br /> <br />
    Quote: ${data.quote}`;
    // animeQuote_result.innerHTML = data.character;
    // animeQuote_result.innerHTML = data.quote;
  })
}

function chatImg() {
  const dd = document.createElement('div');
  const img = `<img src="https://picsum.photos/id/${Math.floor(Math.random() * 250)}/150/225" alt="123">`
  dd.innerHTML = img;
  messagesList.prepend(dd);
  // dd.prepend = img;
}

