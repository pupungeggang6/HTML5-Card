window.onload = main

let canvas
let context

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    context.font = '32px Opensans'
    context.textBaseline = 'top'
    context.lineWidth = 2

    context.strokeRect(UI.crystal[0], UI.crystal[1], UI.crystal[2], UI.crystal[3])

    for (let i = 0; i < 14; i++) {
        context.strokeRect(UI.field[i][0], UI.field[i][1], UI.field[i][2], UI.field[i][3])
    }

    for (let i = 0; i < 8; i++) {
        context.fillStyle = 'White'
        context.fillRect(UI.hand[i][0], UI.hand[i][1], UI.hand[i][2], UI.hand[i][3])
        context.strokeRect(UI.hand[i][0], UI.hand[i][1], UI.hand[i][2], UI.hand[i][3])
        context.fillStyle = 'Black'
    }

    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.equipment[i][0], UI.equipment[i][1], UI.equipment[i][2], UI.equipment[i][3])
    }

    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.item[i][0], UI.item[i][1], UI.item[i][2], UI.item[i][3])
    }

    context.strokeRect(UI.buttonTurnEnd[0], UI.buttonTurnEnd[1], UI.buttonTurnEnd[2], UI.buttonTurnEnd[3])

    drawCard()
}

function drawCard() {
    context.font = '16px Opensans'

    context.fillStyle = 'White'
    context.fillRect(UI.card.rect[0], UI.card.rect[1], UI.card.rect[2], UI.card.rect[3])
    context.strokeRect(UI.card.rect[0], UI.card.rect[1], UI.card.rect[2], UI.card.rect[3])
    context.fillStyle = 'Black'

    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.card.crystal[i][0], UI.card.crystal[i][1], UI.card.crystal[i][2], UI.card.crystal[i][3])
    }

    context.strokeRect(UI.card.image[0], UI.card.image[1], UI.card.image[2], UI.card.image[3])
    context.fillText(`Name`, UI.card.textName[0], UI.card.textName[1])
    
    context.font = '32px Opensans'
}
