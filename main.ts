input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showArrow(ArrowNames.North)
        basic.showArrow(ArrowNames.NorthEast)
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.SouthEast)
        basic.showArrow(ArrowNames.South)
        basic.showArrow(ArrowNames.SouthWest)
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.NorthWest)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.No)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Angry)
})
basic.showIcon(IconNames.Angry)
