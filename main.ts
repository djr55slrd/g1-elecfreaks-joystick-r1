bitcommander.onEvent(BCPins.Green, BCEvents.Up, function () {
    radio.sendValue("S", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("A", 1)
})
bitcommander.onEvent(BCPins.Yellow, BCEvents.Down, function () {
    radio.sendValue("W", 0)
})
bitcommander.onEvent(BCPins.Joystick, BCEvents.Up, function () {
    radio.sendValue("Z", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("AB", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    RadioSwtch = 1
    RadioDisplay = RadioDly
    basic.showNumber(RadioGroup)
})
bitcommander.onEvent(BCPins.Blue, BCEvents.Down, function () {
    radio.sendValue("E", 0)
})
bitcommander.onEvent(BCPins.Green, BCEvents.Down, function () {
    radio.sendValue("S", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (RadioSwtch != 0) {
        RadioGroup += -1
        if (RadioGroup < 1) {
            RadioGroup = RadioMax
        }
        RadioDisplay = RadioDly
        basic.showNumber(RadioGroup)
    } else {
        radio.sendValue("A", 0)
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("B", 1)
})
bitcommander.onEvent(BCPins.Yellow, BCEvents.Up, function () {
    radio.sendValue("W", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (RadioSwtch != 0) {
        RadioGroup += 1
        if (RadioGroup > RadioMax) {
            RadioGroup = 1
        }
        RadioDisplay = RadioDly
        basic.showNumber(RadioGroup)
    } else {
        radio.sendValue("B", 0)
    }
})
bitcommander.onEvent(BCPins.Joystick, BCEvents.Down, function () {
    radio.sendValue("Z", 0)
})
bitcommander.onEvent(BCPins.Red, BCEvents.Down, function () {
    radio.sendValue("N", 0)
})
bitcommander.onEvent(BCPins.Red, BCEvents.Up, function () {
    radio.sendValue("N", 1)
})
bitcommander.onEvent(BCPins.Blue, BCEvents.Up, function () {
    radio.sendValue("E", 1)
})
let YWas = 0
let Y = 0
let XWas = 0
let X = 0
let RadioDisplay = 0
let RadioDly = 0
let RadioSwtch = 0
let RadioMax = 0
let RadioGroup = 0
RadioGroup = 4
RadioMax = 6
RadioSwtch = 1
RadioDly = 10
RadioDisplay = RadioDly
radio.setGroup(RadioGroup)
basic.showNumber(RadioGroup)
basic.forever(function () {
    X = bitcommander.readJoystick(BCJoystick.X)
    if (X > 448 && X < 576) {
        X = 512
    }
    if (XWas != X) {
        radio.sendValue("X", X)
        XWas = X
    }
    Y = bitcommander.readJoystick(BCJoystick.Y)
    if (Y > 448 && Y < 576) {
        Y = 512
    }
    if (YWas != Y) {
        radio.sendValue("Y", Y)
        YWas = Y
    }
    if (RadioDisplay > 0) {
        RadioDisplay += -1
        basic.pause(100)
        if (RadioDisplay == 0) {
            RadioSwtch = 0
            radio.setGroup(RadioGroup)
            basic.clearScreen()
        }
    }
})
