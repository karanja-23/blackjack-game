function initiaze(){
    displayAce ();
    displayLowLevelCards();
    displayFaceCards();
    gameStructure();
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
        cardNumber.className = "card_number"
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
        card.value = cardNumber.innerText
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

        card.value = cardNumber.innerText
        
        return card
    }
    static setDownsideDimentions(width,height){
        this.suit.style.width = width;
        this.suit.style.height = height
    }
}
let card2 = Card.cardDesign(2)
let card3 = Card.cardDesign(3)
let card4 = Card.cardDesign(4)
let card5 = Card.cardDesign(5)
let card6 = Card.cardDesign(6)
let card7 = Card.cardDesign(7)
let card8 = Card.cardDesign(8)
let card9 = Card.cardDesign(9)
let card10 = Card.cardDesign(10)

let king = HigherCards.cardDesign("./media/king.png", "K")
let queen = HigherCards.cardDesign("./media/queen.png", "Q")
let jack = HigherCards.cardDesign("./media/jack.png",'J')
let ace = HigherCards.cardDesign("./media/ace.png", "A")





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

const gameDiv = document.querySelector('#try_it_out_container');
gameDiv.style.textAlign = "center";
gameDiv.style.position = "relative";

 function gameStructure (){
    //dealers' hand
    const dealer = document.createElement('div');
    dealer.id = "dealer_container"
    dealer.style.width = '100%';   
    dealer.style.minHeight = '170px';
    
    dealer.style.padding = "5px"
    dealer.style.display ="flex"
    dealer.style.position = "relative"

    const declareDealer = document.createElement('p');
    declareDealer.innerText = "Dealer";
    declareDealer.position = "absolute"  
    declareDealer.style.textAlign = "center"  
    declareDealer.style.top = '0px'
    declareDealer.style.marginBottom = "0px"
    gameDiv.appendChild(dealer);
    gameDiv.appendChild(declareDealer);

    //players' hand
    const player = document.createElement('div');
    player.style.width = '100%';   
    player.style.minHeight = '170px'; 
    player.style.marginTop = "110px"   
    player.style.padding = "5px"
    player.style.gap ="10px"
    player.style.display ="flex"
        
    player.style.position = "relative"
    
    const declarePlayer = document.createElement('p');
    declarePlayer.style.justifyContent ="baseline"
    declarePlayer.innerHTML = `Player`;
    declarePlayer.style.margin = "auto"
    declarePlayer.style.position = "absolute"
    declarePlayer.style.bottom = "-65px"
    declarePlayer.style.left = "50%"
    declareDealer.style.marginTop = "10px"
    
    player.id = "player-container";
    gameDiv.appendChild(player);
    player.appendChild(declarePlayer);
    
 }
 const playButton = document.querySelector('#try_it_out_btn');
 playButton.addEventListener('click', play);


 function play(){
    const playerContainer = document.querySelector('#player-container');
    playerContainer.style.flexWrap = "wrap"
    playerContainer.style.display ="flex"
    playerContainer.style.justifyContent = 'center'
    playerContainer.style.marginTop = "0px"

    const dealerContainer = document.querySelector('#dealer_container')
    dealerContainer.style.flexWrap = "wrap"
    dealerContainer.style.display ="flex"
    dealerContainer.style.justifyContent = 'center'
    dealerContainer.style.gap ="10px"
    //declare cards

    let card2 = Card.cardDesign(2)
    let card3 = Card.cardDesign(3)
    let card4 = Card.cardDesign(4)
    let card5 = Card.cardDesign(5)
    let card6 = Card.cardDesign(6)
    let card7 = Card.cardDesign(7)
    let card8 = Card.cardDesign(8)
    let card9 = Card.cardDesign(9)
    let card10 = Card.cardDesign(10)
    let king = HigherCards.cardDesign("./media/king.png", "K")
    let queen = HigherCards.cardDesign("./media/queen.png", "Q")
    let jack = HigherCards.cardDesign("./media/jack.png",'J')
    let ace = HigherCards.cardDesign("./media/ace.png", "A")

    let secondcard1 = Card.cardDesign(1)    
    let secondcard2 = Card.cardDesign(2)
    let secondcard3 = Card.cardDesign(3)
    let secondcard4 = Card.cardDesign(4)
    let secondcard5 = Card.cardDesign(5)
    let secondcard6 = Card.cardDesign(6)
    let secondcard7 = Card.cardDesign(7)
    let secondcard8 = Card.cardDesign(8)
    let secondcard9 = Card.cardDesign(9)
    let secondcard10 = Card.cardDesign(10)
    let secondcardking = HigherCards.cardDesign("./media/king.png", "K")
    let secondcardqueen = HigherCards.cardDesign("./media/queen.png", "Q")
    let secondcardjack = HigherCards.cardDesign("./media/jack.png",'J')
    let secondcardace = HigherCards.cardDesign("./media/ace.png", "A")

    let dealercard2 = Card.cardDesign(2)
    let dealercard3 = Card.cardDesign(3)
    let dealercard4 = Card.cardDesign(4)
    let dealercard5 = Card.cardDesign(5)
    let dealercard6 = Card.cardDesign(6)
    let dealercard7 = Card.cardDesign(7)
    let dealercard8 = Card.cardDesign(8)
    let dealercard9 = Card.cardDesign(9)
    let dealercard10 = Card.cardDesign(10)
    let dealercardking = HigherCards.cardDesign("./media/king.png", "K")
    let dealercardqueen = HigherCards.cardDesign("./media/queen.png", "Q")
    let dealercardjack = HigherCards.cardDesign("./media/jack.png",'J')
    let dealercardace = HigherCards.cardDesign("./media/ace.png", "A")

    let dealer2card2 = Card.cardDesign(2)
    let dealer2card3 = Card.cardDesign(3)
    let dealer2card4 = Card.cardDesign(4)   
    let dealer2card5 = Card.cardDesign(5)
    let dealer2card6 = Card.cardDesign(6)   
    let dealer2card7 = Card.cardDesign(7)
    let dealer2card8 = Card.cardDesign(8)
    let dealer2card9 = Card.cardDesign(9)
    let dealer2card10 = Card.cardDesign(10)
    let dealer2cardking = HigherCards.cardDesign("./media/king.png", "K")
    let dealer2cardqueen = HigherCards.cardDesign("./media/queen.png", "Q") 
    let dealer2cardjack = HigherCards.cardDesign("./media/jack.png",'J')
    let dealer2cardace = HigherCards.cardDesign("./media/ace.png", "A")
   
        
    //deal two cards randomly to the player
    const dealer2Cards = [dealer2card2,dealer2card3,dealer2card4,dealer2card5,dealer2card6,dealer2card7,dealer2card8,dealer2card9,dealer2card10,dealer2cardking,dealer2cardqueen,dealer2cardjack,dealer2cardace]
    const  myCards = [card2,card3,card4,card5,card6,card7,card8,card9,card10,king,queen,jack,ace]
    let dealerCards = [dealercard2,dealercard3,dealercard4,dealercard5,dealercard6,dealercard7,dealercard8,dealercard9,dealercard10,dealercardking,dealercardqueen,dealercardjack,dealercardace]
    let secondCards = [secondcard1,secondcard2,secondcard3,secondcard4,secondcard5,secondcard6,secondcard7,secondcard8,secondcard9,secondcard10,secondcardking,secondcardqueen,secondcardjack,secondcardace]
    setTimeout(()=>{
        let mycards = myCards[Math.floor(Math.random() * myCards.length)];
        playerContainer.appendChild(mycards)
    },1000);
    setTimeout(()=>{
        let secondCard = secondCards[Math.floor(Math.random() * myCards.length)]
        playerContainer.appendChild(secondCard)
    
    },2000)

    //randomly deal one card to the dealer and one upside deown card
    setTimeout(()=>{
        let cards = dealerCards[Math.floor(Math.random() * myCards.length)];
        setTimeout(()=>{
            dealerContainer.appendChild(cards)
        },4000)
    })
    setTimeout(()=>{
        let upsideDownCard = HigherCards.cardDesign("./media/playing-card.png", "")
        dealerContainer.appendChild(upsideDownCard)
    },5000)
    //send alert
    
    setTimeout(()=>{
    //get points from player

        const valueOfCard1 = playerContainer.childNodes[1].value  
        const valueOfCard2 = playerContainer.childNodes[2].value
        let pointsForCard1 = 0;
        if ( valueOfCard1 === "A"){
            const alert = document.querySelector('#my_alert')
            alert.innerHTML= `
                <div  class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Well dealt! You have  dealt an Ace. Would you like to count it as <span style = "cursor : pointer; color:black;" id="point_1" class="color">1 point</span> or <span style = "cursor : pointer; color: black;" id="points_11" class="color">11 points</span> </strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             `


                const onePoint = document.querySelector('#point_1')
                const elevenPoints = document.querySelector('#points_11')
                onePoint.addEventListener('click',()=>{
                    pointsForCard1 = 1
                        // get points for card 2
                        let pointsForCard2 = 0;
                        if (parseInt(valueOfCard2) >= 1 && parseInt(valueOfCard2) <= 10){
                           pointsForCard2 = parseInt(valueOfCard2)
                        
                        }
                        else if(valueOfCard2 === "K" || valueOfCard2 === "Q" || valueOfCard2 === "J"){
                            pointsForCard2 = 10           
                            
                        }
                        let totalPoints = pointsForCard1 + pointsForCard2
                        alert.innerHTML= `
                        <div  class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Well dealt! You have <span class="history">${totalPoints} points!</span> </strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `            
                    setTimeout(()=>{
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Dealer's turn</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `            
                    },2000)   
                    setTimeout(()=>{
                        alert.innerHTML= '';
                        dealerContainer.removeChild(dealerContainer.childNodes[1]);
                        dealerContainer.appendChild(dealer2Cards[Math.floor(Math.random() * myCards.length)])
                        
                    },5000)
                    let dealerCard1 = dealerContainer.childNodes[0].value;
                    setTimeout(()=>{
                        let pointsForCard1 = 0;
                        if (parseInt(dealerCard1) >= 1 && parseInt(dealerCard1) <= 10){
                           pointsForCard1 = parseInt(dealerCard1);
                        }
                        else if(dealerCard1 === "K" || dealerCard1 === "Q" || dealerCard1 === "J"){
                            pointsForCard1 = 10;
                        }
                        else if(dealerCard1 === "A"){
                            pointsForCard1 = 11;
                        }
                        let dealerCard2 = dealerContainer.childNodes[1].value;
                        if (parseInt(dealerCard2) >= 1 && parseInt(dealerCard2) <= 10){
                           pointsForCard2 = parseInt(dealerCard2);
                        }
                        else if(dealerCard2 === "K" || dealerCard2 === "Q" || dealerCard2 === "J"){
                            pointsForCard2 = 10;
                        }
                        else if(dealerCard2 === "A"){
                            pointsForCard2 = 11;
                        }
                        let totalDealersPoints = pointsForCard1 + pointsForCard2
                       
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Dealer's hand: <span class="history">${totalDealersPoints} points!</span> </strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `
                    if (totalPoints > totalDealersPoints){
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                         <strong><span class= "color" style="color: white; background-color: black;">You won!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                         <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      `
                      let resetButton = document.querySelector('#reset');
                      resetButton.addEventListener('click', resetGame)
                      }
                      else if(totalPoints === totalDealersPoints){
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong><span class= "color" style="color: white; background-color: black;">Draw!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                          <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        `
                        let resetButton = document.querySelector('#reset');
                        resetButton.addEventListener('click', resetGame)
                      }
                   else if(totalPoints < totalDealersPoints){
                         alert.innerHTML= `
                         <div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong><span class= "color" style="color: white; background-color: black;">You lost!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                          <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      `
                      let resetButton = document.querySelector('#reset');
                      resetButton.addEventListener('click', resetGame)
                       }
                    },6000)

                })
                elevenPoints.addEventListener('click',()=>{
                    pointsForCard1 = 11
                    // get points for card 2
                    let pointsForCard2 = 0;
                    if (parseInt(valueOfCard2) >= 1 && parseInt(valueOfCard2) <= 10){
                       pointsForCard2 = parseInt(valueOfCard2)
                    
                    }
                    else if(valueOfCard2 === "K" || valueOfCard2 === "Q" || valueOfCard2 === "J"){
                        pointsForCard2 = 10           
                        
                    }
                    let totalPoints = pointsForCard1 + pointsForCard2
                    if (totalPoints === 21){
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Blackjack! You win! <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                        <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `   
                    let resetButton = document.querySelector('#reset');
                    resetButton.addEventListener('click', resetGame)           
                    return;
                    }

                    else{
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Well dealt! You have <span class="history">${totalPoints} points!</span> </strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `   
                    }
                    setTimeout(()=>{
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Dealer's turn</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `            
                    },2000)   
                    setTimeout(()=>{
                        alert.innerHTML= '';
                        dealerContainer.removeChild(dealerContainer.childNodes[1]);
                        dealerContainer.appendChild(dealer2Cards[Math.floor(Math.random() * myCards.length)])
                        
                    },5000)
                    let dealerCard1 = dealerContainer.childNodes[0].value;
                    setTimeout(()=>{
                        let pointsForCard1 = 0;
                        if (parseInt(dealerCard1) >= 1 && parseInt(dealerCard1) <= 10){
                           pointsForCard1 = parseInt(dealerCard1);
                        }
                        else if(dealerCard1 === "K" || dealerCard1 === "Q" || dealerCard1 === "J"){
                            pointsForCard1 = 10;
                        }
                        else if(dealerCard1 === "A"){
                            pointsForCard1 = 11;
                        }
                        let dealerCard2 = dealerContainer.childNodes[1].value;
                        if (parseInt(dealerCard2) >= 1 && parseInt(dealerCard2) <= 10){
                           pointsForCard2 = parseInt(dealerCard2);
                        }
                        else if(dealerCard2 === "K" || dealerCard2 === "Q" || dealerCard2 === "J"){
                            pointsForCard2 = 10;
                        }
                        else if(dealerCard2 === "A"){
                            pointsForCard2 = 11;
                        }
                        let totalDealersPoints = pointsForCard1 + pointsForCard2

                    if (totalPoints > totalDealersPoints){
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                         <strong><span class= "color" style="color: white; background-color: black;">You won!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                        <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      `
                      let resetButton = document.querySelector('#reset');
                      resetButton.addEventListener('click', resetGame)
                      }
                      else if(totalPoints === totalDealersPoints){
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                         <strong><span class= "color" style="color: white; background-color: black;">Draw! </span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                          
                          <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        `
                        let resetButton = document.querySelector('#reset');
                        resetButton.addEventListener('click', resetGame)
                      }
                   else if(totalPoints < totalDealersPoints){
                         alert.innerHTML= `
                         <div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong><span class= "color" style="color: white; background-color: black;">You lost!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                          <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      `
                      let resetButton = document.querySelector('#reset');
                      resetButton.addEventListener('click', resetGame)
                       }
                    },6000)


        
                })
             
            
        }
        else if (valueOfCard2 === "A"){
            const alert = document.querySelector('#my_alert')
            alert.innerHTML= `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Well dealt! You have  dealt an Ace. Would you like to count it as <span style = "cursor : pointer; color:black;" id="point_1" class="color">1 point</span> or <span style = "cursor : pointer; color: black;" id="points_11" class="color">11 points</span> </strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             `


                const onePoint = document.querySelector('#point_1')
                const elevenPoints = document.querySelector('#points_11')
                onePoint.addEventListener('click',()=>{
                    let pointsForCard2 = 1
                        // get points for card 2
                        let pointsForCard1 = 0;
                        if (parseInt(valueOfCard1) >= 1 && parseInt(valueOfCard1) <= 10){
                           pointsForCard1 = parseInt(valueOfCard1)
                        
                        }
                        else if(valueOfCard1 === "K" || valueOfCard1 === "Q" || valueOfCard1 === "J"){
                            pointsForCard1 = 10           
                            
                        }
                        
                        let totalPoints = pointsForCard1 + pointsForCard2

                        
                        alert.innerHTML= `
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Well dealt! You have <span class="history">${totalPoints} points!</span> </strong>
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        ` 
                        setTimeout(()=>{
                            alert.innerHTML= `
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Dealer's turn</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        `            
                        },2000)   
                        setTimeout(()=>{
                            alert.innerHTML= '';
                            dealerContainer.removeChild(dealerContainer.childNodes[1]);
                            dealerContainer.appendChild(dealer2Cards[Math.floor(Math.random() * myCards.length)])
                            
                        },5000)
                        let dealerCard1 = dealerContainer.childNodes[0].value;
                        setTimeout(()=>{
                            let pointsForCard1 = 0;
                            if (parseInt(dealerCard1) >= 1 && parseInt(dealerCard1) <= 10){
                               pointsForCard1 = parseInt(dealerCard1);
                            }
                            else if(dealerCard1 === "K" || dealerCard1 === "Q" || dealerCard1 === "J"){
                                pointsForCard1 = 10;
                            }
                            else if(dealerCard1 === "A"){
                                pointsForCard1 = 11;
                            }
                            let dealerCard2 = dealerContainer.childNodes[1].value;
                            if (parseInt(dealerCard2) >= 1 && parseInt(dealerCard2) <= 10){
                               pointsForCard2 = parseInt(dealerCard2);
                            }
                            else if(dealerCard2 === "K" || dealerCard2 === "Q" || dealerCard2 === "J"){
                                pointsForCard2 = 10;
                            }
                            else if(dealerCard2 === "A"){
                                pointsForCard2 = 11;
                            }
                            let totalDealersPoints = pointsForCard1 + pointsForCard2
                           
                            alert.innerHTML= `
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Dealer's hand: <span class="history">${totalDealersPoints} points!</span> </strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        `
                        if (totalPoints > totalDealersPoints){
                            alert.innerHTML= `
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                             <strong><span class= "color" style="color: white; background-color: black;">You won!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                             <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          `
                          let resetButton = document.querySelector('#reset');
                          resetButton.addEventListener('click', resetGame)
                          }
                          else if(totalPoints === totalDealersPoints){
                            alert.innerHTML= `
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                              <strong><span class= "color" style="color: white; background-color: black;">Draw!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                              <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            `
                            let resetButton = document.querySelector('#reset');
                            resetButton.addEventListener('click', resetGame)
                          }
                       else if(totalPoints < totalDealersPoints){
                             alert.innerHTML= `
                             <div class="alert alert-warning alert-dismissible fade show" role="alert">
                              <strong><span class= "color" style="color: white; background-color: black;">You lost!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                              <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          `
                          let resetButton = document.querySelector('#reset');
                          resetButton.addEventListener('click', resetGame)
                           }
                        },6000)              
                        
                })
                elevenPoints.addEventListener('click',()=>{
                    let pointsForCard2 = 11
                    // get points for card 2
                    let pointsForCard1 = 0;
                    if (parseInt(valueOfCard1) >= 1 && parseInt(valueOfCard1) <= 10){
                       pointsForCard1 = parseInt(valueOfCard1)
                    
                    }
                    else if(valueOfCard1 === "K" || valueOfCard1 === "Q" || valueOfCard1 === "J"){
                        pointsForCard1 = 10           
                        
                    }
                    let totalPoints = pointsForCard1 + pointsForCard2
                    if (totalPoints === 21){
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Blackjack! You win! <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                        <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `   
                    let resetButton = document.querySelector('#reset');
                    resetButton.addEventListener('click', resetGame)             
                    return;
                    }
                    else{
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Well dealt! You have <span class="history">${totalPoints} points!</span> </strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `   
                    }
                    setTimeout(()=>{
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Dealer's turn</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `            
                    },2000)   
                    setTimeout(()=>{
                        alert.innerHTML= '';
                        dealerContainer.removeChild(dealerContainer.childNodes[1]);
                        dealerContainer.appendChild(dealer2Cards[Math.floor(Math.random() * myCards.length)])
                        
                    },5000)
                    let dealerCard1 = dealerContainer.childNodes[0].value;
                    setTimeout(()=>{
                        let pointsForCard1 = 0;
                        if (parseInt(dealerCard1) >= 1 && parseInt(dealerCard1) <= 10){
                           pointsForCard1 = parseInt(dealerCard1);
                        }
                        else if(dealerCard1 === "K" || dealerCard1 === "Q" || dealerCard1 === "J"){
                            pointsForCard1 = 10;
                        }
                        else if(dealerCard1 === "A"){
                            pointsForCard1 = 11;
                        }
                        let dealerCard2 = dealerContainer.childNodes[1].value;
                        if (parseInt(dealerCard2) >= 1 && parseInt(dealerCard2) <= 10){
                           pointsForCard2 = parseInt(dealerCard2);
                        }
                        else if(dealerCard2 === "K" || dealerCard2 === "Q" || dealerCard2 === "J"){
                            pointsForCard2 = 10;
                        }
                        else if(dealerCard2 === "A"){
                            pointsForCard2 = 11;
                        }
                        let totalDealersPoints = pointsForCard1 + pointsForCard2

                    if (totalPoints > totalDealersPoints){
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                         <strong><span class= "color" style="color: white; background-color: black;">You won!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                        <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      `
                      let resetButton = document.querySelector('#reset');
                      resetButton.addEventListener('click', resetGame)
                      }
                      else if(totalPoints === totalDealersPoints){
                        alert.innerHTML= `
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                         <strong><span class= "color" style="color: white; background-color: black;">Draw! </span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                          
                          <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        `
                        let resetButton = document.querySelector('#reset');
                        resetButton.addEventListener('click', resetGame)
                      }
                   else if(totalPoints < totalDealersPoints){
                         alert.innerHTML= `
                         <div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong><span class= "color" style="color: white; background-color: black;">You lost!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                          <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      `
                      let resetButton = document.querySelector('#reset');
                      resetButton.addEventListener('click', resetGame)
                       }
                    },6000)
                })

             
        }
        else{
            if (parseInt(valueOfCard1) >= 1 && parseInt(valueOfCard1) <= 10){
                pointsForCard1 = parseInt(valueOfCard1)
             
             }
             else if(valueOfCard1 === "K" || valueOfCard1 === "Q" || valueOfCard1 === "J" || valueOfCard1 === "A"){
                 pointsForCard1 = 10           
                 
             }
             //get points for card 2
             let pointsForCard2 = 0;
             if (parseInt(valueOfCard2) >= 1 && parseInt(valueOfCard2) <= 10){
                pointsForCard2 = parseInt(valueOfCard2)
             
             }
             else if(valueOfCard2 === "K" || valueOfCard2 === "Q" || valueOfCard2 === "J"){
                 pointsForCard2 = 10           
                 
             }
             let totalPoints = pointsForCard1 + pointsForCard2
     
             cardNumber = document.querySelector('.card_number')
              const alert = document.querySelector('#my_alert')
              alert.innerHTML= `
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                     <strong>Well dealt! You have <span class="history">${totalPoints} points!</span> </strong>
                     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                 `
            
                 setTimeout(()=>{
                    alert.innerHTML= `
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Dealer's turn</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `            
                },2000)   
                setTimeout(()=>{
                    alert.innerHTML= '';
                    dealerContainer.removeChild(dealerContainer.childNodes[1]);
                    dealerContainer.appendChild(dealer2Cards[Math.floor(Math.random() * myCards.length)])
                    
                },5000)
                let dealerCard1 = dealerContainer.childNodes[0].value;
                setTimeout(()=>{
                    let pointsForCard1 = 0;
                    if (parseInt(dealerCard1) >= 1 && parseInt(dealerCard1) <= 10){
                       pointsForCard1 = parseInt(dealerCard1);
                    }
                    else if(dealerCard1 === "K" || dealerCard1 === "Q" || dealerCard1 === "J"){
                        pointsForCard1 = 10;
                    }
                    else if(dealerCard1 === "A"){
                        pointsForCard1 = 11;
                    }
                    let dealerCard2 = dealerContainer.childNodes[1].value;
                    if (parseInt(dealerCard2) >= 1 && parseInt(dealerCard2) <= 10){
                       pointsForCard2 = parseInt(dealerCard2);
                    }
                    else if(dealerCard2 === "K" || dealerCard2 === "Q" || dealerCard2 === "J"){
                        pointsForCard2 = 10;
                    }
                    else if(dealerCard2 === "A"){
                        pointsForCard2 = 11;
                    }
                    let totalDealersPoints = pointsForCard1 + pointsForCard2
                   
                    alert.innerHTML= `
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Dealer's hand: <span class="history">${totalDealersPoints} points!</span> </strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `
                if (totalPoints > totalDealersPoints){
                    alert.innerHTML= `
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                     <strong><span class= "color" style="color: white; background-color: black;">You won!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                     <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  `
                  let resetButton = document.querySelector('#reset');
                  resetButton.addEventListener('click', resetGame)
                  }
                  else if(totalPoints === totalDealersPoints){
                    alert.innerHTML= `
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong><span class= "color" style="color: white; background-color: black;">Draw!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                      <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `
                    let resetButton = document.querySelector('#reset');
                    resetButton.addEventListener('click', resetGame)
                  }
               else if(totalPoints < totalDealersPoints){
                     alert.innerHTML= `
                     <div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong><span class= "color" style="color: white; background-color: black;">You lost!</span> You have <span class="history">${totalPoints} points</span>. Dealer has <span class="history">${totalDealersPoints} points</span>. <span id= "reset" style="cursor: pointer;" class="color">New Game<span/></strong>
                      <button id = "close_btn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  `
                  let resetButton = document.querySelector('#reset');
                  resetButton.addEventListener('click', resetGame)
                   }
                },6000)     

        }

    },6000)
    playButton.removeEventListener('click', play)
 }

 function resetGame() {
    // Reset game variables
    totalPoints = 0;
    pointsForCard1 = 0;
    pointsForCard2 = 0;

    // Reset DOM elements
    let playerContainer = document.querySelector('#player-container');
    let dealerContainer = document.querySelector('#dealer_container');
    let alert = document.querySelector('#my_alert');
    playerContainer.childNodes[2].remove();    
    playerContainer.childNodes[1].remove();    
    dealerContainer.innerHTML = '';
    alert.innerHTML = '';
    const playButton = document.querySelector('#try_it_out_btn');
    playButton.addEventListener('click', play);
    
}