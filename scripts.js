let userhp = 5;
let comphp = 5;
const hpplayer_div = document.querySelector(".hpplayer");
const hpcomp_div = document.querySelector(".hpcomp");
const outcome = document.getElementById("outcome")
const Attack_button = document.getElementById("Attack");
const Skill_button = document.getElementById("Skill");
const Defend_button = document.getElementById("Defend");
const playersprite = document.querySelector(".charsprite");
const computersprite = document.querySelector(".enemysprite");
const playagain_button = document.querySelector('button');




function gameOver(comphp,userhp){
    if (comphp === 0 || userhp ===0) {
        overlayon();
    }
}   

function resetgame() {   
    playagain_button.addEventListener('click', () => {
        window.location.reload();
    })
}

resetgame()

function gameplay(userChoice) {
    const computerChoice = computerplay();
    if (
        (userChoice === "Attack" && computerChoice === "Skill") ||
        (userChoice === "Skill" && computerChoice === "Defend") ||
        (userChoice === "Defend" && computerChoice === "Attack" && comphp >= 0)
    ) {
           comphp--;
           hpcomp_div.innerHTML = ("HP: " + comphp);
           hpplayer_div.innerHTML = ("HP: " + userhp);
           switch(userChoice,computerChoice) {
            case ("Attack","Skill"):
                console.log("player Attacks" + "Enemy use skill");
                useratkanimation();
                compskillanimation();
                outcome.innerHTML = ("you Attack the enemy wolf while he is trying to pounce on you but you strike him mid-air: Deal 1 point of DMG");
                break;
            case ("Skill","Defend"):
                console.log("player uses Skill" + "Enemy Defends")
                userskillanimation();
                compdefanimation();
                outcome.innerHTML = ("you realease a mighty warcry, the enemy tried to defend but it is no use: Deal 1 point of DMG");
                break;
            case ("Defend","Attack"): 
                console.log("player Defends" + "Enemy uses Attack");
                userdefendanimation();
                compatkanimation();
                outcome.innerHTML = ("you defend against the enemy Attack and are able to counter Attack: Deal 1 point of DMG");
                break ;          
           }
    } else if (
        (userChoice === "Attack" && computerChoice === "Defend") ||
        (userChoice === "Defend" && computerChoice === "Skill") ||
        (userChoice === "Skill" && computerChoice === "Attack")
    ) {
            userhp--;
            hpcomp_div.innerHTML = ("HP: " + comphp);
            hpplayer_div.innerHTML = ("HP: " + userhp);
            switch(userChoice,computerChoice) {
                case ("Attack","Defend"):
                    useratkanimation();
                    compdefanimation();
                    outcome.innerHTML = ("You take a big swing but the enemy dodges out of the way and is able to counter Attack: Take 1 point of DMG");
                    console.log("player Attacks" + "enemy defends");
                break;
                case ("Skill","Attack"):
                    userskillanimation();
                    compatkanimation();
                    outcome.innerHTML = ("you Attempt a war Cry hoping to intimidate the wolf but he is too fast and able to strike before you: Take 1 point of DMG");
                    console.log("player uses Skill" + "Enemy Attacks");
                break
                case ("Defend","Skill"):
                    userdefendanimation();
                    compskillanimation(); 
                    outcome.innerHTML = ("you brace for an attack but didnt expect the wolf to pounce over you shielf and strike: Take 1 Point of DMG");
                    console.log("player Defends" + "Enemy used Skill");
                break;       
            }
        }
        else if (userChoice === computerChoice)
            {
            console.log("tie");
            switch(userChoice,computerChoice) {
                case("Attack","Attack"):
                    useratkanimation();
                    compatkanimation();
                    outcome.innerHTML = ("you go in for a stike, but the wolf grabs you blade with his teeth, resulting in a stalemate: Tie");
                    console.log ("you both attack");
                break;
                case("skill","skill"):
                    userskillanimation();
                    compskillanimation();
                    outcome.innerHTML = ("you Attempt a War Cry just as the wolf pounces in the air, he becomes intimidated and is unable to attack: Tie ");
                    console.log("you both used skill");
                break;
                case("Defend","Defend"):
                    userdefendanimation();
                    compdefanimation();
                    outcome.innerHTML = ("you brace for an attack as the wolf dodges around neither of you are able to find an opening: Tie");
                    console.log("you both Defend");
                break;
            }
        }
        gameOver(userhp,comphp);
        resetgame ()         
}

/* Animations for moves (User)*/
function useratkanimation() {
    playersprite.setAttribute("id","charatk");
    setTimeout(function() { playersprite.removeAttribute("id")}, 300);
}
function userskillanimation() {
    playersprite.setAttribute("id","charskl");
    setTimeout(function() { playersprite.removeAttribute("id")}, 300);
}
function userdefendanimation() {
    playersprite.setAttribute("id","chardef");
    setTimeout(function() { playersprite.removeAttribute("id")}, 300);
}

/* Animations for moves (comp)*/
function compatkanimation() {
    computersprite.setAttribute("id","enemyatk");
    setTimeout(function() { computersprite.removeAttribute("id")}, 300);
}
function compskillanimation() {
    computersprite.setAttribute("id","enemyskl");
    setTimeout(function() { computersprite.removeAttribute("id")}, 300);
}
function compdefanimation() {
    computersprite.setAttribute("id","chardef");
    setTimeout(function() { computersprite.removeAttribute("id")}, 300);
}

function overlayon() {
    document.getElementById("overlay").style.display = "block";
}
    


function playeroptions() {
    Attack_button.addEventListener('click', () => gameplay("Attack"));
    Defend_button.addEventListener('click', () => gameplay("Defend"));
    Skill_button.addEventListener('click', () => gameplay("Skill"));
}

playeroptions();

function computerplay() {
    const RandomAction = Math.floor(Math.random()*3)
    switch (RandomAction) {
        case 0:
            return "Attack";
        case 1: 
            return "Defend";
        case 2:
            return "Skill";
    }
}