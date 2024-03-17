function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText('Desserterria', UI.textTitle[0], UI.textTitle[1])
    
    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonNew[0], UI.title.buttonNew[1], UI.title.buttonNew[2], UI.title.buttonNew[3])
    context.fillText('New', UI.title.textNew[0], UI.title.textNew[1])
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'Field'
                    state = ''
                } else if (pointInsideRectArray(x, y, UI.title.buttonNew)) {
                    scene = 'Field'
                    state = ''
                }
            }
        }
    }
}

function keyDownTitle(key) {

}

function keyUpTitle(key) {
    
}