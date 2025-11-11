var Direction;
(function (Direction) {
    Direction[Direction["east"] = 501] = "east";
    Direction[Direction["west"] = 502] = "west";
    Direction[Direction["north"] = 5010] = "north";
    Direction[Direction["south"] = 5011] = "south";
})(Direction || (Direction = {}));
console.log(Direction.west);
