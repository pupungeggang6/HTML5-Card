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

    context.strokeRect(UI.info.tabProfile[0], UI.info.tabProfile[1], UI.info.tabProfile[2], UI.info.tabProfile[3])
    context.fillText('Profile', UI.info.textProfile[0], UI.info.textProfile[1])

    context.strokeRect(UI.info.tabSkill[0], UI.info.tabSkill[1], UI.info.tabSkill[2], UI.info.tabSkill[3])
    context.fillText('Skill', UI.info.textSkill[0], UI.info.textSkill[1])

    context.strokeRect(UI.info.tabDeck[0], UI.info.tabDeck[1], UI.info.tabDeck[2], UI.info.tabDeck[3])
    context.fillText('Deck', UI.info.textDeck[0], UI.info.textDeck[1])

    context.strokeRect(UI.info.tabCard[0], UI.info.tabCard[1], UI.info.tabCard[2], UI.info.tabCard[3])
    context.fillText('Card', UI.info.textCard[0], UI.info.textCard[1])

    context.strokeRect(UI.info.tabCrystal[0], UI.info.tabCrystal[1], UI.info.tabCrystal[2], UI.info.tabCrystal[3])
    context.fillText('Crystal', UI.info.textCrystal[0], UI.info.textCrystal[1])

    context.strokeRect(UI.info.tabProgress[0], UI.info.tabProgress[1], UI.info.tabProgress[2], UI.info.tabProgress[3])
    context.fillText('Progress', UI.info.textProgress[0], UI.info.textProgress[1])
    
    context.strokeRect(UI.info.tabMap[0], UI.info.tabMap[1], UI.info.tabMap[2], UI.info.tabMap[3])
    context.fillText('Map', UI.info.textMap[0], UI.info.textMap[1])

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