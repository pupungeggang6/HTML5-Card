function loadField(place) {
    varField = JSON.parse(JSON.stringify(dataField[place]))
}

function movePlayer() {
    let tempPosition = [varAdventure.positionPlayer[0], varAdventure.positionPlayer[1]]

    if (pressed.up === true) {
        tempPosition[1] -= 200.0 * delta / 1000
    }
    if (pressed.left === true) {
        tempPosition[0] -= 200.0 * delta / 1000
    }
    if (pressed.down === true) {
        tempPosition[1] += 200.0 * delta / 1000
    }
    if (pressed.right === true) {
        tempPosition[0] += 200.0 * delta / 1000
    }

    varAdventure.positionPlayer = [tempPosition[0], tempPosition[1]]
}

function moveField() {
    for (let i = 0; i < varField['Connection'].length; i++) {
        if (pointInsideRectArray(varAdventure.positionPlayer[0], varAdventure.positionPlayer[1], varField['Connection'][i][0])) {
            varAdventure.place = varField['Connection'][i][1]
            varAdventure.positionPlayer = [varField['Connection'][i][2][0], varField['Connection'][i][2][1]]
            loadField(varAdventure.place)
            break
        }
    }
}