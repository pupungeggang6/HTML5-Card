function loopField() {
    if (menu === false) {
        if (state === '') {
            movePlayer()
        }
    }

    displayField()
}

function displayField() {
    drawSceneInit()

    context.strokeRect(UI.field.buttonMenu[0], UI.field.buttonMenu[1], UI.field.buttonMenu[2], UI.field.buttonMenu[3])
    context.strokeRect(UI.field.buttonInfo[0], UI.field.buttonInfo[1], UI.field.buttonInfo[2], UI.field.buttonInfo[3])

    drawField()

    if (state === 'Info') {
        drawInfo()
    }

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpField(x, y, button) {
    if (button === 0) {
        if (menu === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonExit)) {
                menu = false
                scene = 'Title'
                state = ''
            }
        } else if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.field.buttonMenu)) {
                    menu = true
                }

                if (pointInsideRectArray(x, y, UI.field.buttonInfo)) {
                    state = 'Info'
                }
            } else if (state === 'Info') {
                if (pointInsideRectArray(x, y, UI.info.buttonClose)) {
                    state = ''
                }
            }
        }
    }
}

function keyDownField(key) {
    if (menu === true) {
        if (key === 'Escape') {
            menu = false
        } else if (key === 'e') {
            menu = false
            scene = 'Title'
            state = ''
        }
    } else if (menu == false) {
        if (key === 'Escape') {
            menu = true
        }

        if (state === '') {
            if (key === 'w') {
                pressed.up = true
            }
            if (key === 'a') {
                pressed.left = true
            }
            if (key === 's') {
                pressed.down = true
            }
            if (key === 'd') {
                pressed.right = true
            }
            if (key === 'e') {
                moveField()
            }
            if (key === 'i') {
                state = 'Info'
            }
        } else if (state === 'Info') {
            if (key === 'i') {
                state = ''
            }
        }
    }
}

function keyUpField(key) {
    if (menu === false) {
        if (state === '') {
            if (state === '') {
                if (key === 'w') {
                    pressed.up = false
                }
                if (key === 'a') {
                    pressed.left = false
                }
                if (key === 's') {
                    pressed.down = false
                }
                if (key === 'd') {
                    pressed.right = false
                }
            }
        }
    }
}