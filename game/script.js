
// Character: "character.KEY" is the way to reference character stats
const character =  {
    name: "Slayer",
    lvl: 1,
    hp: 100,
    mp: 100,
    attack: 10,
    defense: 10,
    gold: 50,
    inventory: [],
    battle: , 
    state:
};

const enemy = [
    {
        name: "slime",
        hp: 15,
        power: 2,
        defense: 2,
        gold: 2,
 }
]

const state = [
    {
        name: "battle";
    }
]



//  Set stats to HTML 
let nameText = document.querySelector(".nameText");
let lvlText = document.querySelector(".lvlText");
let hpText = document.querySelector(".hpText");
let mpText = document.querySelector(".mpText");
let goldText = document.querySelector(".goldText");
let powerText = document.querySelector(".powerText");
let defenseText = document.querySelector(".defenseText");
let inventoryText = document.querySelector(".inventoryText")

let text = document.querySelector(".text");

// Control buttons
let button = document.querySelector(".button");
let fight = document.querySelector(".fight");

fight.onclick = goFight;

function goFight() {
    character.state = state[0];
    
}



// Basic tester function 
function attack(enemySelect) {
    let resolve = enemySelect.hp - character.attack;
    console.log("attack")
    console.log(enemySelect.name)

} 
