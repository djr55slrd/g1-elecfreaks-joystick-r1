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
let P16 = 0
let P15 = 0
let P14 = 0
let P13 = 0
let P8 = 0
let YWas = 0
let Y = 0
let XWas = 0
let X = 0
let RadioDisplay = 0
let RadioDly = 0
let RadioSwtch = 0
let RadioMax = 0
let RadioGroup = 0
RadioGroup = 5
RadioMax = 6
RadioSwtch = 1
RadioDly = 15
RadioDisplay = RadioDly
radio.setGroup(RadioGroup)
basic.showNumber(RadioGroup)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P1)
    if (X > 448 && X < 576) {
        X = 512
    }
    if (XWas != X) {
        radio.sendValue("X", X)
        XWas = X
    }
    Y = pins.analogReadPin(AnalogPin.P2)
    if (Y > 448 && Y < 576) {
        Y = 512
    }
    if (YWas != Y) {
        radio.sendValue("Y", Y)
        YWas = Y
    }
    if (P8 != pins.digitalReadPin(DigitalPin.P8)) {
        P8 = pins.digitalReadPin(DigitalPin.P8)
        radio.sendValue("Z", P8)
    } else if (P13 != pins.digitalReadPin(DigitalPin.P13)) {
        P13 = pins.digitalReadPin(DigitalPin.P13)
        radio.sendValue("S", P13)
    } else if (P14 != pins.digitalReadPin(DigitalPin.P14)) {
        P14 = pins.digitalReadPin(DigitalPin.P14)
        radio.sendValue("E", P14)
    } else if (P15 != pins.digitalReadPin(DigitalPin.P15)) {
        P15 = pins.digitalReadPin(DigitalPin.P15)
        radio.sendValue("N", P15)
    } else if (P16 != pins.digitalReadPin(DigitalPin.P16)) {
        P16 = pins.digitalReadPin(DigitalPin.P16)
        radio.sendValue("W", P16)
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
