control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    Switch = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (Switch) {
        Radio += -1
        if (Radio < 1) {
            Radio = RadioMax
        }
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (Switch) {
        Radio += 1
        if (Radio > RadioMax) {
            Radio = 1
        }
        Switch = 1
        basic.showNumber(Radio)
    }
})
let Y = 0
let XX = 0
let X = 0
let Switch = 0
let Radio = 0
let RadioMax = 0
joystickbit.initJoystickBit()
RadioMax = 6
Radio = 1
radio.setGroup(Radio)
Switch = 0
basic.forever(function () {
    X = joystickbit.getRockerValue(joystickbit.rockerType.X)
    if (X > 448 && X < 576) {
        X = 512
    }
    if (XX != X) {
        XX = X
        radio.sendValue("X", XX)
    }
    Y = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    if (Y > 448 && Y < 576) {
        Y = 512
    }
    if (XX != X) {
        XX = X
        radio.sendValue("Y", XX)
    }
    if (Switch) {
        radio.setGroup(Radio)
        basic.showNumber(Radio)
        basic.pause(2000)
        basic.clearScreen()
        Switch = 0
    }
})
