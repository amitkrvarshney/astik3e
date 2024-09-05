let p = game.askForNumber("Pricipal",7)
let r = game.askForNumber("Rate (annual %)",7)
let t = game.askForNumber("Time period (in years)",7)
let si = r*p*t/100
game.splash("Simple Interest is Rs. ",si)