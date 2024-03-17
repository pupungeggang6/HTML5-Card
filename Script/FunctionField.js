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