const button = document.getElementById('change-bg-button');
let currentImageIndex = 0;
const images = [
    'https://i.pinimg.com/originals/50/15/7f/50157f642817c455e2ed7028e6ad31a8.gif',
    'https://i.pinimg.com/originals/b5/f4/d4/b5f4d4ae946f150ad3189df1b927406a.gif',
    'https://animesher.com/orig/1/129/1297/12975/animesher.com_pink-anime-scenery-gif-1297530.gif',
    'https://i.pinimg.com/originals/38/b9/c1/38b9c12981f516494dc01836fd6b781e.gif',
];

button.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});

/*to do list*/
const draggableTimer = document.getElementById('draggable-timer');
const timerDisplay = document.getElementById('timer');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let countdown;

startButton.addEventListener('click', function() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    let totalTime = minutes * 60 + seconds;

    clearInterval(countdown);

    countdown = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "Time's Up!";
            return;
        }

        totalTime--;
        const mins = Math.floor(totalTime / 60);
        const secs = totalTime % 60;
        timerDisplay.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
});

stopButton.addEventListener('click', function() {
    clearInterval(countdown);
    timerDisplay.innerText = "00:00";
    minutesInput.value = '';
    secondsInput.value = '';
});

// Draggable functionality
draggableTimer.addEventListener('mousedown', (e) => {
    let offsetX = e.clientX - draggableTimer.getBoundingClientRect().left;
    let offsetY = e.clientY - draggableTimer.getBoundingClientRect().top;

    function mouseMoveHandler(e) {
        draggableTimer.style.left = `${e.clientX - offsetX}px`;
        draggableTimer.style.top = `${e.clientY - offsetY}px`;
    }

    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});

const button2 = document.getElementById('quote-button');
const quoteDisplay = document.getElementById('quote-display');

button.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        quoteDisplay.innerText = `${data.content} — ${data.author}`;
    } catch (error) {
        quoteDisplay.innerText = 'Failed to fetch a quote. Please try again later.';
        console.error('Error fetching quote:', error);
    }
});


const circle = document.getElementById('circle');
const button3 = document.getElementById('change-color');

button.addEventListener('click', () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    circle.style.backgroundColor = randomColor;
});