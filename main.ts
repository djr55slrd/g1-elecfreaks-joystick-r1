control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (Switch) {
        Radio += -1
    }
})
let Y = 0
let XX = 0
let X = 0
let Switch = 0
joystickbit.initJoystickBit()
let RadioMax = 6
let Radio = 1
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
})
