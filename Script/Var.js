let canvas
let context

let scene = 'Title'
let state = ''
let menu = false

let gameInstance
let gameFramePrevious
let gameFrameCurrent
let delta

let pressed = {
    up : false,
    left : false,
    down : false,
    right : false,
}

let varSession = {
    
}

let varPlayer = {

}

let varField = {
    positionPlayer : [640, 360],
    enemy : [],
}

let varAdventure = {
    place : 'HomeTown',
    positionPlayer : [640, 360],
    village : false,
    deckCard : [],
    deckCrystal : [],
}

let varGame = {

}