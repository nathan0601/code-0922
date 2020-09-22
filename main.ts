input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # . # #
        # . . . #
        # . # . #
        `)
    basic.showIcon(IconNames.EigthNote)
    basic.pause(1000)
    basic.showNumber(0)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
})
