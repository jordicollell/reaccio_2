let joc = false
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    joc = false
    basic.pause(randint(1000, 4000))
    joc = true
    basic.showIcon(IconNames.Heart)
    while (joc) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            joc = false
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            joc = false
        }
    }
    basic.pause(1000)
    basic.clearScreen()
})
