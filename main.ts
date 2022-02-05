radio.onReceivedString(function (receivedString) {
    comanda = receivedString
})
let comanda = ""
radio.setGroup(2)
Drones.initModule(Drones.Runmodes.Master)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (comanda == "Fata") {
        basic.showArrow(ArrowNames.North)
        Drones.Move_action(Drones.Directionoptions.Forward, 30)
        comanda = "hover"
    } else if (comanda == "Spate") {
        basic.showArrow(ArrowNames.South)
        Drones.Move_action(Drones.Directionoptions.Backward, 30)
        comanda = "hover"
    } else if (comanda == "Stanga") {
        basic.showString("S")
        Drones.Rotation_action(Drones.Angleoptions.Left, 45)
        comanda = "hover"
    } else if (comanda == "Dreapta") {
        basic.showString("D")
        Drones.Rotation_action(Drones.Angleoptions.Right, 45)
        comanda = "hover"
    } else if (comanda == "Decoleaza") {
        basic.showString("T")
        Drones.Basic_action(Drones.Basicoptions.Takeoff)
        comanda = "hover"
    } else if (comanda == "Stop") {
        basic.showString("A")
        Drones.Basic_action(Drones.Basicoptions.Landing)
        comanda = "hover"
    } else {
        Drones.Hovering(1)
    }
})
