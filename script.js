let count = 0;

const button = document.getElementById("showMsgBtn");
const messageArea = document.getElementById("messageArea");



// Click coounter Logic

button.addEventListener("click", function() {
    count++;
    messageArea.textContent = `Click count: ${count} 👆 Keep going!`;
 
    if (count === 5) {
    button.disabled = true;
    messageArea.textContent += "Button is now hidden!"; 
    }

});

// Mood suggetions with random message logic

const moodButtons = document.querySelectorAll(".moodBtn");
const moodMessage = document.getElementById("message");
const suggestionsBox = document.getElementById("suggestions");

moodButtons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const clickedMood = event.target.id;


     let suggestion = "";
    let bgColor = "";

    if (clickedMood === "happy") {
      suggestion = "Stay cheerful! Life is beautiful 🌈";
      bgColor = "#ffeaa7";
    } else if (clickedMood === "sad") {
      suggestion = "It's okay to feel sad. Take a deep breath 💙";
      bgColor = "#dfe6e9";
    } else if (clickedMood === "angry") {
      suggestion = "Try to relax, maybe drink some water or breathe 🧘‍♀️";
      bgColor = "#fab1a0";
    } else if (clickedMood === "love") {
      suggestion = "Spread love and joy 💖";
      bgColor = "#ffcccc";
    } else if (clickedMood === "Cool") {
      suggestion = "You're as cool as ice ❄️";
      bgColor = "#a29bfe";
    } else if (clickedMood === "funny") {
      suggestion = "Laughter is the best medicine 😄";
      bgColor = "#fdcb6e";
    }


    
    document.body.style.backgroundColor = bgColor;
     

//typewriter effect

typeWriter(suggestionsBox, suggestion);

// Emoji bounce animation

event.target.classList.add("animate");
    setTimeout(()=> {
        event.target.classList.remove("animate")
    } , 500);
  });
});



//typewriter effect function

function typeWriter(element, text, i = 0) {
    element.textContent = "";
    (function type() {
        if(i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    })();
}
