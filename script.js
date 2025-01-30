// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The greatest glory in living lies not in never falling,
    but in rising every time we fall."`,
    person: `Nelson Mandela`
},{
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: `Walt Disney`
},{
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
},{
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    person: `James Cameron`
},{
    quote: `"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."`,
    person: `John Lennon`
},{
    quote: `"You must be the change you wish to see in the world."`,
    person: `Mahatma Gandhi`
},{
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person: `Mother Teresa`
},{
    quote: `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
    person: `Martin Luther King Jr.`
},{
    quote: `"Do one thing every day that scares you."`,
    person: `Eleanor Roosevelt`
},{
    quote: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`,
    person: `Helen Keller`
},{
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: `Aristotle`
},{
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    person: `Ralph Waldo Emerson`
},];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})