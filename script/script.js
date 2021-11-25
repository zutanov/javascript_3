//1:
let a = 10

if (a === 10) {
    console.log("Верно")
} else  {
    console.log("Не верно")
}

//2:
a = 50
let b = 100

if (a > b) {
    console.log( "a больше b")
} else if (a < b){
    console.log( "a меньше b")
}

//3:
a = -2

if (a > 0) {
    console.log("positive")
} else if (a === 0){
    console.log("equal")
} else {
    console.log("negative")
}

//4:
number = 45

if ( number % 2) {
    console.log("Нечетное число")
} else {
    console.log("Четное число")
}

//5:
a = 10
b = 2

if (a/b === 5) {
    console.log("Нечетное число")
} else {
    console.log("Четное число")
}

//6:
let s = "10"

switch (typeof s) {
    case "boolean": console.log("boolean")
        break
    case "number": console.log("number")
        break
    case "string": console.log("string")
        break
}

//7:
a = 8

if (a > 1 && a < 9 ) {
    console.log("Верно")
} else  {
    console.log("Неверно")
}

//8:

a = 7

if ( a === 3 || a === 7) {
    console.log(a + 7)
} else {
    console.log(a / 10)
}

//9:

a = 0
b = 5

if (a <= 0 && b >= 5) {
    console.log( a + b)
} else {
    console.log( a - b)
}

//10:
a = 9
b = 12

if ( a > 4 && a < 10 || b >= 7 && b <17) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

//11:
 let month = 1

if (month === 12 || month === 1 || month === 2) {
    console.log("Зима")
} else if (month >= 3 && month <= 5) {
    console.log("Весна")
} else if (month >= 6 && month <= 8) {
    console.log("Лето")
} else if (month >= 9 && month <= 11) {
    console.log("Осень")
} else {
    console.log("Введите число от 1 до 12")
}

//12:
let day = 10

if (day >= 1 && day <= 10) {
    console.log("1я декада")
} else if (day > 10 && day <= 20) {
    console.log("2я декада")
} else if (day > 20 && day <= 31) {
    console.log("3я декада")
} else {
    console.log("Введите число от 1 до 31")
}

//13:
a = '12345'

if (+a[0] === 1 || +a[0] === 2 || +a[0] === 3) {
    console.log("Да")
} else  {
    console.log("Нет")
}

//14:
let age = 29
if (age === 21 || age === 31 || age === 41 || age === 51 || age === 61 || age === 71 || age === 81 || age === 91) {
    console.log("Мне "+ age + " год")
}
if (age > 21 && age <= 24 || age > 31 && age <= 34 || age > 41 && age <= 44 || age > 51 && age <= 54
    || age > 61 && age <= 64 || age > 71 && age <= 74 || age > 81 && age <= 84 || age > 91 && age <= 94) {
    console.log("Мне "+ age + " года")
}
else {
    console.log("Мне " + age + " лет")
}

//15:
let time = 59

if (time > 0 && time <= 12) {
    console.log("Первая четверть")
} else if (time > 12 && time <= 24) {
    console.log("Вторая четверь")
} else if (time > 24 && time <= 36) {
    console.log("Третья четверть")
} else if (time > 36 && time <= 48) {
    console.log("Четвертая четверть")
} else if (time > 48 && time <= 59) {
    console.log("Пятая четверть")
} else {
    console.log("Неверное число")
}