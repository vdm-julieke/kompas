let Richting = 0
basic.forever(function () {
    Richting = input.compassHeading()
})
basic.forever(function () {
    if (Richting > 45 && Richting < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (Richting > 135 && Richting < 225) {
        basic.showArrow(ArrowNames.South)
    }
    if (Richting > 225 && Richting < 315) {
        basic.showArrow(ArrowNames.East)
    }
    if (Richting > 315) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (Richting < 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
