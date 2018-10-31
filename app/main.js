let choices = [
  {
    name: "Rock",
    id: 0,
    beats: 2
  },
  {
    name: 'Paper',
    id: 1,
    beats: 0
  },
  {
    name: 'Scissors',
    id: 2,
    beats: 1
  }
]

console.log("The loop is starting")

let appElem = document.getElementById("app")
let choicesTemplate = ''

for (let i = 0; i < choices.length; i++) {
  let choice = choices[i]
  choicesTemplate += `
    ${choice.name}
    <div>
      <button onclick="play(${choice.id})">Play</button>
    </div>
  `
}
appElem.innerHTML = choicesTemplate
console.log("The loop is over")



function play(id) {
  console.log("Do I have the id: ", id)

  let compChoice = choices[Math.floor(Math.random() * 3)];
  let playerChoice = choices[id];
  let result = `${playerChoice.name} vs ${compChoice.name} `
  if (playerChoice.beats == compChoice.id) {
    result += "You Won!"
  }
  else if (playerChoice.id == compChoice.id) {
    result += "Its a Tie!"
  }

  else {
    result += "You Lost!"
  }
  document.getElementById('result').innerHTML = result;
}

