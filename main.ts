input.onButtonPressed(Button.A, function () {
    basic.showString("L")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("R")
})
// animate this
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . #
        . . . . .
        . . . . .
        `)
})
