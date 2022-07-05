/*
let js = 'amaizing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstNmae = "Jonas";

console.log(firstNmae);

let myFirstJob = 'Coder';
let mySecondJob = 'Teacher';

console.log(myFirstJob);
console.log(mySecondJob)


true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;

console.log(x);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstNmae = "Jonas";
const lastName = "kim";

console.log(firstNmae + ' ' + lastName);

let x = 10 + 5;
x += 10; // x = x + 10 .--> 25
x *= 4; // x = x * 4 --> 100
x++;
x--;
x++;



console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah);
console.log(averageAge);



Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.



const massmark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massmark / heightMark ** 2;
cost BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
console.log(BMIMark, BMIJohn);

const firstName = "Jonas";
const job = 'teacher';
const birthYear = 1991;
const year = 2037;


const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `
console.log(jonasNew);

console.log(`Just a regular stirng...`);

console.log("String with multiple lines");


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving licence ");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);;
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const massmark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massmark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn}!`);
} else {
    console.log(`John's BMI is higher than Mark's`);
}


const inputYear = `1991`;
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n -= 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 1;
if (money) {
    console.log("Don't spend it all ;");
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is Undefined');
}

const age = 18;
if (age == 18) console.log(`You just became an adult!`);

const favorite = Number(prompt("What's your favorite number?"))
console.log(favorite);

if (favorite === 23) {
    console.log(`Cool! 23 is an amazing number`);
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log(`Number is not 23 or 7`);
}


const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive`);
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);


const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;
const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;
const averageDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const averageKoala = (koalasScore1 + koalasScore2 + koalasScore3 / 3);

if () console.log('Dolphin win!');
else if (averageDolphin < averageKoala) console.log('Koala win!');
else if (averageDolphin = averageKoala) console.log('Draw!')


const day = 'sunday!';

switch (day) {
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day!`);
}

if (day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend :D`);
} else {
    console.log(`Not a valid day!`);
}

const age = 23;
age >= 18 ? console.log(`I like to drink wine`) :
    console.log(`I like to drink water`);


const drink = age >= 18 ? 'wine' : 'water'
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


const bill = 360;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;
console.log(`bill was ${bill}, tip was ${tip}, total ${bill + tip}`);
*/