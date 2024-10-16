function initiaze(){
    displayAce ();
    displayLowLevelCards();
    displayFaceCards();
}
class Card {
    static cardDesign(myCard){
        const card = document.createElement('div');
        card.style.width = "150px";
        card.style.height = "230px";
        card.style.border = "2px solid black"
        card.style.borderRadius = "15px"
        card.style.alignContent = "center"
        card.style.textAlign = "center"
        card.style.display = "block"
        card.style.position = "relative"
        
        const suit = document.createElement('img');
        suit.src = "./media/suit.png"
        suit.style.width = "75%"
        suit.style.height = "60%"
        card.appendChild(suit);
        

        const cardNumber = document.createElement('p');
        cardNumber.innerText = myCard;
        cardNumber.style.fontSize = "20px"
        cardNumber.style.position = "absolute"
        cardNumber.style.top = '3px'
        cardNumber.style.left = "10px"
        cardNumber.style.fontWeight = "bold"
        card.appendChild(cardNumber);

        const reversecardNumber = document.createElement('p');
        reversecardNumber.innerText = myCard;
        reversecardNumber.style.fontSize = "20px"
        reversecardNumber.style.position = "absolute"
        reversecardNumber.style.bottom = '-15px'
        reversecardNumber.style.right = "10px"
        reversecardNumber.style.fontWeight = "bold"
        reversecardNumber.style.transform = "rotate(180deg)"
        card.appendChild(reversecardNumber);
        return card;
    }
}

class HigherCards {

    static cardDesign(myImage, myCard){
        
        const card = document.createElement('div');
        card.style.width = "150px";
        card.style.height = "230px";
        card.style.border = "2px solid black"
        card.style.borderRadius = "15px"
        card.style.alignContent = "center"
        card.style.textAlign = "center"
        card.style.display = "block"
        card.style.position = "relative"
        
        const suit = document.createElement('img');
        
        suit.src = `${myImage}`
        suit.style.width = "75%"
        suit.style.height = "60%"

        //change image dimentions if card is upside down
        if (myCard  === ""){
            suit.style.display ="block"
            suit.style.margin = "auto"
            suit.style.width = "93%"
            suit.style.height = "93%"
        }
        card.appendChild(suit);

        const cardNumber = document.createElement('p');
        cardNumber.innerText = myCard;
        cardNumber.style.fontSize = "20px"
        cardNumber.style.fontWeight = "bold"
        cardNumber.style.position = "absolute"
        cardNumber.style.top = '3px'
        cardNumber.style.left = "10px"
        card.appendChild(cardNumber);

        const reversecardNumber = document.createElement('p');
        reversecardNumber.innerText = myCard;
        reversecardNumber.style.fontSize = "20px"
        reversecardNumber.style.position = "absolute"
        reversecardNumber.style.bottom = '-15px'
        reversecardNumber.style.fontWeight = "bold"
        reversecardNumber.style.right = "10px"
        reversecardNumber.style.transform = "rotate(180deg)"
        card.appendChild(reversecardNumber);
        
        return card
    }
    static setDownsideDimentions(width,height){
        this.suit.style.width = width;
        this.suit.style.height = height
    }
}
const card2 = Card.cardDesign(2)
let card3 = Card.cardDesign(3)
let card4 = Card.cardDesign(4)
const card5 = Card.cardDesign(5)
let card6 = Card.cardDesign(6)
const card7 = Card.cardDesign(7)
const card8 = Card.cardDesign(8)
const card9 = Card.cardDesign(9)
const card10 = Card.cardDesign(10)

let king = HigherCards.cardDesign("./media/king.png", "K")
const queen = HigherCards.cardDesign("./media/queen.png", "Q")
let jack = HigherCards.cardDesign("./media/jack.png",'J')
const ace = HigherCards.cardDesign("./media/ace.png", "A")





function displayLowLevelCards (){
    const cards2_7 = document.querySelector('#cards2_7');
    cards2_7.appendChild(card2);
    cards2_7.appendChild(card3);
    cards2_7.appendChild(card4);
    cards2_7.appendChild(card5);
    cards2_7.appendChild(card6);
    cards2_7.appendChild(card7);
    cards2_7.appendChild(card8);
    cards2_7.appendChild(card9);
    cards2_7.appendChild(card10);
}


function displayFaceCards (){
    const faceCards = document.querySelector('#face_cards');
    faceCards.appendChild(jack);
    faceCards.appendChild(queen);
    faceCards.appendChild(king);
}


function displayAce (){
    const aces = document.querySelector('#aces');
    aces.appendChild(ace);
}

const dealer_deal = document.querySelector('#step_1_div')
const player_deal = document.querySelector('#step_2_div')
const dealerRevealsCard = document.querySelector('#step_3_div')

function illustrateStepOne (step){
    
    

    //dealers' hand
    const dealer = document.createElement('div');
    dealer.style.width = '100%';   
    dealer.style.height = '270px';
    
    dealer.style.padding = "5px"
    dealer.style.display ="flex"
    dealer.style.position = "relative"

    const declareDealer = document.createElement('p');
    declareDealer.innerText = "Dealer";
    declareDealer.position = "absolute"    
    declareDealer.style.top = '0px'
    step.appendChild(dealer);
    step.appendChild(declareDealer);

    //players' hand
    const player = document.createElement('div');
    player.style.width = '100%';   
    player.style.height = '270px'; 
    player.style.marginTop = "110px"   
    player.style.padding = "5px"
    player.style.display ="flex"
    player.style.position = "relative"


    const declarePlayer = document.createElement('p');
    declarePlayer.innerHTML = `Player <span id ="points"class="color">POINTS = (10) + (3)</span>`;
    declarePlayer.position = "absolute"    
    declarePlayer.style.top = '0px'
    step.appendChild(player);
    step.appendChild(declarePlayer);
    const points= document.querySelector('#points');
    points.style.display = "none"

    const dealButton= document.querySelector('#deal_btn');
    dealButton.addEventListener('click', promptDeal);
    function promptDeal(){
        
        dealForDealer(dealer);
        dealForPlayer(player);      
        setTimeout(()=>{
            points.style.display = "block" 
        },4000)    
        dealButton.removeEventListener('click', promptDeal);
    }          
}

illustrateStepOne(dealer_deal);
illustrateStepTwo(player_deal);
illustrateStepThree(dealerRevealsCard);
function illustrateStepTwo (step){
     //dealers' hand
     const dealer = document.createElement('div');
     dealer.style.width = '100%';   
     dealer.style.height = '270px';
     
     dealer.style.padding = "5px"
     dealer.style.display ="flex"
     dealer.style.position = "relative"
 
     const declareDealer = document.createElement('p');
     declareDealer.innerText = "Dealer";
     declareDealer.position = "absolute"    
     declareDealer.style.top = '0px'
     step.appendChild(dealer);
     step.appendChild(declareDealer);
 
     //players' hand
     const player = document.createElement('div');
     player.style.width = '100%';   
     player.style.minHeight = '270px'; 
     player.style.marginTop = "110px"   
     player.style.padding = "5px"
     player.style.flexWrap = "wrap"
     player.style.display ="flex"
     player.style.position = "relative"
 
 
     const declarePlayer = document.createElement('p');
     declarePlayer.innerHTML = `Player <span id ="points2"class="color">POINTS = (10) + (3) +(4)</span>`;
     declarePlayer.position = "absolute"    
     declarePlayer.style.top = '0px'
     step.appendChild(player);
     step.appendChild(declarePlayer);
     const points= document.querySelector('#points2');
     points.style.display = "none"

     let king = HigherCards.cardDesign("./media/king.png", "K")
     let upsideDownCard = HigherCards.cardDesign("./media/playing-card.png", "")
     let jack = HigherCards.cardDesign("./media/jack.png",'J');
     let card3 = Card.cardDesign(3)
     dealer.appendChild(king);
     dealer.appendChild(upsideDownCard);
     player.appendChild(jack);
     player.appendChild(card3);
     
     const deal = document.querySelector('#deal_btn2');
     deal.addEventListener ('click', handler)
     
     function handler(){
        let card4 = Card.cardDesign(4);
        setTimeout(()=>{
            player.appendChild(card4);
            points.style.display = "block";
        },2000)
        
        deal.removeEventListener ('click', handler)
     }
 
}
function illustrateStepThree (step){
    const dealer = document.createElement('div');
    dealer.style.width = '100%';   
    dealer.style.height = '270px';
    
    dealer.style.padding = "5px"
    dealer.style.display ="flex"
    dealer.style.position = "relative"

    const declareDealer = document.createElement('p');
    declareDealer.innerText = "Dealer";
    declareDealer.position = "absolute"    
    declareDealer.style.top = '0px'
    step.appendChild(dealer);
    step.appendChild(declareDealer);

    //players' hand
    const player = document.createElement('div');
    player.style.width = '100%';   
    player.style.minHeight = '270px'; 
    player.style.marginTop = "110px"   
    player.style.padding = "5px"
    player.style.flexWrap = "wrap"
    player.style.display ="flex"
    player.style.position = "relative"


    const declarePlayer = document.createElement('p');
    declarePlayer.innerHTML = `Player <span id ="points2"class="color">POINTS = (10) + (3) +(4)</span>`;
    declarePlayer.position = "absolute"    
    declarePlayer.style.top = '0px'
    step.appendChild(player);
    step.appendChild(declarePlayer);
    const points= document.querySelector('#points2');
    points.style.display = "none"

    let king = HigherCards.cardDesign("./media/king.png", "K")
    let upsideDownCard = HigherCards.cardDesign("./media/playing-card.png", "")
    let jack = HigherCards.cardDesign("./media/jack.png",'J');
    let card4 = Card.cardDesign(4);
    let card3 = Card.cardDesign(3)
    dealer.appendChild(king);
    dealer.appendChild(upsideDownCard);
    player.appendChild(jack);
    player.appendChild(card3);
    player.appendChild(card4);
    
    const deal = document.querySelector('#deal_btn3');
    deal.addEventListener ('click', handler)
    
    function handler(){
       
       setTimeout(()=>{
        let card6 = Card.cardDesign(6)
        setTimeout (()=>{
            dealer.replaceChild(card6, upsideDownCard); 
        })      
           
           points.style.display = "block";
       },2000)
       
       deal.removeEventListener ('click', handler)
    }

}


function deal (card, container){
    container.appendChild(card);
}
function dealForDealer(dealer){
    let king = HigherCards.cardDesign("./media/king.png", "K")
    let upsideDownCard = HigherCards.cardDesign("./media/playing-card.png", "")
    
     setTimeout(() => {
        deal(king,dealer);     
     }, 1000);
     setTimeout(() => {
        deal(upsideDownCard,dealer)
     }, 2000);

}
function dealForPlayer(player){
   let jack = HigherCards.cardDesign("./media/jack.png",'J');
   let card3 = Card.cardDesign(3)
   setTimeout(() => {
    deal(jack,player); 
   }, 3000)     
    setTimeout(() => {
        deal(card3,player)
    },4000)
}
document.addEventListener("DOMContentLoaded", () => {
    initiaze();
})