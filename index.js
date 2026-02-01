// var currentImage = 1;
// var totalImage = 4;

// function changeImg() {
//     var imgChange = document.getElementById('img1');
//     imgChange.src = "/assets/bear" + currentImage + currentImage + ".png";
// }

// function buttonSwap() {
//     if (currentImage < totalImage) {
//         currentImage++;
//         changeImg();
//     } else {
//         document.getElementById('fastBtn').style.display = "inline-block";
//         document.getElementById('noBtn').style.display = "none";
//     }
// }

// function yesClicked() {
//     imgChange = document.getElementById('img1');
//     imgChange.src = "/assets/bear55.png";
//     var headerChange = document.getElementById('header');
//     headerChange.innerHTML = "❤ YAY ❤ <br> Malibu Farm <br> Feb 14 @ 4:30PM <br> Appointment Booked!";
//     headerChange.style.top = "50%";

//     var hideBtn = document.getElementsByClassName('btn');
    
//     for (var i = 0; i < hideBtn.length; i++) {
//         hideBtn[i].style.display = "none";
//     }
// }
    const config = window.VALENTINE_CONFIG;

let currentImage = 2;
let totalImage = 4;
let headerArray = ["Really...", "WHAT?! WHY NOT?!", "GUESS WHAT...it's inevitable!!!"]
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    createFloatingElements();
}
);
function changeImg() {
    const imgChange = document.getElementById('img1');
    if (currentImage <= totalImage) {
        imgChange.src = "assets/bear" + currentImage + currentImage +".png";

        const headerChange = document.getElementById('header');
        let currentHeader = currentImage - 2;

        if (currentHeader < headerArray.length) {
            headerChange.innerHTML = headerArray[currentHeader]
        }

        if (currentImage === totalImage) {
            document.getElementById('noBtn').style.display = "none";
            document.getElementById('fastBtn').style.display = "inline-block";
        }
        currentImage++;
    }
}


const jsConfetti = new JSConfetti();
const canvas = document.getElementById('confetti');
const yayAudio = new Audio('assets/yay.mp3')
document.getElementById('yesBtn').addEventListener('click', () => {
  jsConfetti.addConfetti({
    emojis: ['🌸', '❤️', '💕','💗']
  })


  yayAudio.play();
})
// Initialize love meter

function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Create floating hearts and bears
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}
// Celebration function
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Set celebration messages
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    // Create heart explosion effect
    createHeartExplosion();
}

// Create heart explosion animation
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

function yesClicked() {
  // celebrate()
    imgChange = document.getElementById('img1');
    imgChange.src = "assets/bear55.png";
    var headerChange = document.getElementById('header');
    headerChange.innerHTML = "❤ YAY! ❤ <br> I'm the luckiest person in the world! 🎉💝💖💝💓<br> Now come get your gift, a big warm hug and a huge kiss!";
    headerChange.style.top = "50%";

    var hideBtn = document.getElementsByClassName('btn');

    for (var i = 0; i < hideBtn.length; i++) {
        hideBtn[i].style.display = "none";
    }
}

function buttonSwap() {
    changeImg();
}



const button = document.getElementById('fastBtn');

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};



