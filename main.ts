joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    radio.sendValue("W", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("A", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("AB", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    RadioSwtch = 1
    RadioDisplay = RadioDly
    basic.showNumber(RadioGroup)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendValue("S", 0)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
    radio.sendValue("N", 1)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendValue("E", 0)
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
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    radio.sendValue("E", 1)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
    radio.sendValue("S", 1)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendValue("N", 0)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendValue("W", 0)
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
joystickbit.initJoystickBit()
RadioGroup = 2
RadioMax = 6
RadioSwtch = 1
RadioDly = 10
RadioDisplay = RadioDly
radio.setGroup(RadioGroup)
basic.showNumber(RadioGroup)
basic.forever(function () {
    X = 1023 - joystickbit.getRockerValue(joystickbit.rockerType.X)
    if (X > 448 && X < 576) {
        X = 512
    }
    if (XWas != X) {
        radio.sendValue("X", X)
        XWas = X
    }
    Y = joystickbit.getRockerValue(joystickbit.rockerType.Y)
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
