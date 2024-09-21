const imgArr = [
    {
        name: 'cat',src: 'app2images/cat.png'
    },
    {
        name: 'dragon',src: 'app2images/dragon.png'
    },
    {
        name: 'fish',src: 'app2images/fish.png'
    },
    {
        name: 'fox',src: 'app2images/fox.png'
    },
    {
        name: 'tiger',src: 'app2images/tiger.jpg'
    },
    {
        name: 'penguin',src: 'app2images/penguin.png'
    },
    {
        name: 'cat',src: 'app2images/cat.png'
    },
    {
        name: 'dragon',src: 'app2images/dragon.png'
    },
    {
        name: 'fish',src: 'app2images/fish.png'
    },
    {
        name: 'fox',src: 'app2images/fox.png'
    },
    {
        name: 'tiger',src: 'app2images/tiger.jpg'
    },
    {
        name: 'penguin',src: 'app2images/penguin.png'
    }
]

imgArr.sort(()=>0.5 - Math.random());
const pBoard = document.getElementById('puzzleBoard');
const seeIfTouch = 'ontouchstart' in window || navigator.maxTouchPoints>0
let imgCompare = []
let clickedCardIds = []
let score = 0;



function boardCreate(){
    for(let i = 0; i<imgArr.length; i++){
        let imgTagCreate = document.createElement('img')
        imgTagCreate.setAttribute('src', 'app2images/blank.jpg')
        imgTagCreate.setAttribute('data-id', i)
        imgTagCreate.setAttribute('class', 'blankImg')
        if(seeIfTouch){
            imgTagCreate.addEventListener('touchstart', cardClick)
        }else{
            imgTagCreate.addEventListener('click', cardClick)
        }
        pBoard.append(imgTagCreate)
        
    }
}
boardCreate();

function checkMatch(){
    let targetImg=document.querySelectorAll('img')
    if(imgCompare[0]==imgCompare[1]){
        targetImg[clickedCardIds[0]].setAttribute('src', 'app2images/match.png')
        targetImg[clickedCardIds[1]].setAttribute('src', 'app2images/match.png')
        score+=10
        document.getElementById('score').innerHTML = score
        imgCompare = []
        clickedCardIds = []
    }else{
        
            targetImg[clickedCardIds[0]].setAttribute('src', 'app2images/blank.jpg')
            targetImg[clickedCardIds[1]].setAttribute('src', 'app2images/blank.jpg')
            
            if(seeIfTouch){
                targetImg[clickedCardIds[0]].addEventListener('touchstart', cardClick)
                targetImg[clickedCardIds[1]].addEventListener('touchstart', cardClick)
            }else{
                targetImg[clickedCardIds[0]].addEventListener('click', cardClick)
                targetImg[clickedCardIds[1]].addEventListener('click', cardClick)
            }
            imgCompare = []
            clickedCardIds = []
    }
    
}

function cardClick(){
    let cardId = this.getAttribute('data-id')
    this.setAttribute('src', imgArr[cardId].src)
    this.removeEventListener('click', cardClick)
    clickedCardIds.push(cardId)
    imgCompare.push(imgArr[cardId].name)

    if(imgCompare.length===2){
        setTimeout(checkMatch, 500)
        
    }
}
