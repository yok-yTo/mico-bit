let soil = 0
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Heart)
} else {
    basic.showIcon(IconNames.Asleep)
}
esp8266.connectWiFi("", "")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.House)
} else {
    basic.showIcon(IconNames.Angry)
}
basic.forever(function () {
    soil = Environment.ReadSoilHumidity(AnalogPin.P0)
    esp8266.writeBlynk("PO5WZTgkGVxDwNGbDwe6HQkw-KofFPbd", "V0", convertToText(soil))
    basic.pause(2000)
})
