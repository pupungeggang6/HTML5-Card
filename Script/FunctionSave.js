function saveInit() {
    if (localStorage.getItem(fileName) === null) {
        localStorage.setItem(fileName, JSON.stringify(emptySave))
    }

    varSession = JSON.parse(localStorage.getItem(fileName))
}

function saveData() {
    localStorage.setItem(fileName, JSON.stringify(varSession))
}

function loadData() {
    varSession = JSON.parse(localStorage.getItem(fileName))
}

function eraseData() {
    localStorage.setItem(fileName, JSON.stringify(emptySave))
    varSession = JSON.parse(localStorage.getItem(fileName))
}

function loadSession() {
    varSession = JSON.parse(localStorage.getItem(fileName))

    varPlayer.level = varSession.level
    varPlayer.exp = varSession.exp
    varPlayer.gold = varSession.gold
    varPlayer.skill = varSession.skill
    varPlayer.cardList = varSession.cardList
    varPlayer.deckList = varSession.deckList
}

function saveSession() {
    varSession.level = varPlayer.level
    varSession.exp = varPlayer.exp
    varSession.gold = varPlayer.gold
    varSession.skill = varPlayer.skill
    varSession.cardList = varPlayer.cardList
    varSession.deckList = varPlayer.deckList

    localStorage.setItem(fileName, JSON.stringify(varSession))
}