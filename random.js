// Notes

// Jitna digit tak range chahiye (Math.random() * requiredDigit)

random= Math.random(10) * 16
console.log(random)

const letter= '0123456789ABCDF'
let color= '#'
for (let index = 0; index < 6; index++) {
    color += letter[Math.floor(Math.random()*16)] 
}
console.log(color)



const colors = [  "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque",   "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",   "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk",   "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray",   "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange",   "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",   "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",   "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia",   "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow",   "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",   "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",   "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",   "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",   "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",   "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",   "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",   "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",   "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",   "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",   "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple",   "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon",   "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",   "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal",   "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke",   "yellow", "yellowgreen"];

console.log(colors.length)

const getColor= ()=>{
    return colors[Math.floor(Math.random()*141)]
}
console.log(getColor())
