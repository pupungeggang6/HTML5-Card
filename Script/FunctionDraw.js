function drawSceneInit() {
    context.strokeStyle = 'Black'
    context.fillStyle = 'Black'
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.lineWidth = 2

    context.clearRect(0, 0, 1280, 720)
}

function drawField() {
    context.fillStyle = 'Cyan'
    for (let i = 0; i < varField['Connection'].length; i++) {
        context.fillRect(varField['Connection'][i][0][0], varField['Connection'][i][0][1], varField['Connection'][i][0][2], varField['Connection'][i][0][3])
    }
    context.fillStyle = 'Black'

    context.fillRect(Math.floor(varAdventure.positionPlayer[0] - 20), Math.floor(varAdventure.positionPlayer[1] - 20), 40, 40)
}

function drawInfo() {
    context.fillStyle = 'White'
    context.fillRect(UI.info.rect[0], UI.info.rect[1], UI.info.rect[2], UI.info.rect[3])
    context.strokeRect(UI.info.rect[0], UI.info.rect[1], UI.info.rect[2], UI.info.rect[3])
    context.fillStyle = 'Black'

    context.fillRect(UI.info.buttonClose[0], UI.info.buttonClose[1], UI.info.buttonClose[2], UI.info.buttonClose[3])
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Paused', UI.menu.textPause[0], UI.menu.textPause[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText('Resume [Esc]', UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText('Exit to title [E]', UI.menu.textExit[0], UI.menu.textExit[1])
}