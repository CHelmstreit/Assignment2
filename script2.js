//ASSIGNMENT 2, PART 2,
//PART 1

//STEP 1
/*
var varNumber = prompt('Please enter a number.');
console.log(Math.abs(varNumber));
*/
//STEP 2
/*
var decNumber = prompt('Please enter a number containing a decimal.');
console.log(Math.ceil(decNumber));
*/
//STEP 3
/*
var decNumber = prompt('Please enter a number containing a decimal.');
console.log(Math.floor(decNumber));
*/
//STEP 4
/*
var enterNumber = prompt('Please enter five numbers, each separated by a comma.');
var numArray = enterNumber.split(',');
var highNumber = Math.max.apply(Math, numArray);
var lowNumber = Math.min.apply(Math, numArray);
console.log('Highest number: ' + highNumber + '.');
console.log('Lowest number: ' + lowNumber + '.');
*/
//STEP 5
/*
var squareNumber = prompt('Please enter a number.');
console.log(Math.sqrt(squareNumber));
*/

//PART 2


//STEP 6
/*
var varDate = new Date();
console.log(varDate.getDate());
*/
//STEP 7
/*
var todaysDate = new Date();
console.log(todaysDate.monthFind());
*/
//STEP 8
/*
var todaysDate = new Date();
var monthFind = todaysDate.monthFind().split('');

console.log(monthFind[1]);

//STEP 9
/*
var todaysDate = new Date();
var isWeekend = (Date === 6) || (Date === 0);
if (isWeekend[6] === 'Sat' || isWeekend[0] === 'Sun') {
    console.log('It's the Weekend!');
} else {
    console.log('Nope, back to work.');
}
*/
//STEP 10
/*
var todaysDate = new Date();
var today = todaysDate.getDay() - 1;
switch (today) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
}
8?
//STEP 11
/*
var today = new Date();
var todayinitial = today.toDateString();
console.log(todayinitial.slice(0, 1));
*/

//PART 3


//STEP 12
/*
var firstNumber = prompt('Please enter a number.');
var secondNumber = prompt('Please enter a second number.');
if (firstNumber > secondNumber) {
    console.log('The larger number is ' + firstNumber + '.');
} else {
    console.log('The larger number is ' + secondNumber + '.');
}
*/
//STEP 13
/*
var studentList = ['Ursula', 'Paul', 'Henry', 'Tabitha', 'Lucy'];
var points = [80, 77, 88, 95, 68];
var studentArray = studentList.length;
var gradeBase;
var totalGrade;
for (gradeBase = 0; gradeBase < studentArray; gradeBase++) {
    switch (true) {
        case (points[gradeBase] < 60):
            totalGrade = 'F';
            break;
        case (points[gradeBase] < 70):
            totalGrade = 'D';
            break;
        case (points[gradeBase] < 80):
            totalGrade = 'C';
            break;
        case (points[gradeBase] < 90):
            totalGrade = 'B';
            break;
        case (points[gradeBase] < 100):
            totalGrade = 'A';
            break;
    }
    console.log('Student: ' + studentList[gradeBase] + ', Total points: ' + points[gradeBase] + ', Grade: ' + totalGrade);
}
*/
//STEP 14
/*
var numSum;
var numType;
for (numSum = 0; numSum <= 15; numSum++) {
    if (numSum % 2 === 0) {
        numType = 'even'
    } else {
        numType = 'odd'
    };
    console.log(numSum + ' is ' + numType + '.')
}
*/
//STEP 15
/*
var numSum;
var numType;
for (numSum = 0; numSum <= 100; numSum++) {
    if (numSum % 3 === 0 && numSum % 5 === 0) {
        numType = 'FizzBuzz'
    } else if (numSum % 3 === 0) {
        numType = 'Fizz'
    } else if (numSum % 5 === 0) {
        numType = 'Buzz'
    } else {
       numType = numSum
    };
    console.log(numType);
}
*/

//PART 4 

//HITCHHIKERS GUIDE TO THE GALAXY

//STEP 1
/*
var txt;
var r = confirm('Are you ready to play?');
if (r === true) {
    alert('Awesome, our hero is waiting!');
} else {
    alert('Too bad, we are going to play anyway because our hero desperately needs your help!');
}

//STEP 2
/*
alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the //sound of running water to your left. Your back is against the wall...');
*/
//STEP 3
/*
var direction = prompt('Which direction would you like to head (Please enter forward, left, or right)?');
*/
//STEP 4
/*
switch (chooseDirection) {
    case 'forward':
        alert('You walk about 100 yards and safely make your way out of the cave.');
        break;
    case 'left':
        alert('Your thrist has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.');
        break;
    case 'right':
        alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever');
        break;
    default:
        alert('The ghost of Captain Chingdaera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option...loser!');
}
*/
//STEP 5
/*
var rateGame = prompt('On a scale of 1 to 10, how awesome was this game?');

if (Number(rateGame) > 5) {
    alert('Thank you, we will continue to make improvements to the game!');
} else {
    alert('Whatever, you weren’t very good at this game anyway!');
}
*/

//PART 5

//COINFLIP GAME


//STEP 1
/*
var coinFlip = Math.round(Math.random() * 100);

//STEP 2

var choice = prompt('Please chose either heads or tails');

//STEP 4 

if (coinFlip < 50 && choice) {
    alert('The flip was heads and you chose heads... you win!');
}

//STEP 5

else if (coinFlip < 50 && choice) {
    alert('The flip was heads but you chose tails... you lose!');
}

//STEP 6

else if (coinFlip > 50 && choice) {
    alert('The flip was tails and you chose tails... you win!');
}

//STEP 7

else if (coinFlip > 50 && choice) {
    alert('The flip was tails but you chose heads... you lose!');
*/

//PART 6 

//COINFLIP GAME REDUX

//STEP 1
/*
var coinFlip;

//STEP 2

var varLoop;

//STEPS 3+4 

for (varLoop = 0; varLoop < 10; varLoop++) {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip);
    if (coinFlip === 0) {
        console.log('It's heads!');
    } else {
        console.log('It's tails!');
    }
}
*/


//PART 7

//COINFLIP STREAK


//STEP 1
/*
    var coinFlip;
*/
//STEP 2+3
/*
    var varLoop = 0;
*/
//STEP 4
/*
    do {
        coinFlip = Math.round(Math.random());
        
        console.log(coinFlip);
        
        if (coinFlip === 0) {
            console.log('heads');
        } else {
            console.log('tails')
        };
        varLoop += 1;

        //STEP 5
        /*
    } while (coinFlip === 0);
*/


//PART 8
//LOOPING A TRIANGLE
/*
var varLoop;
var varString = '#';
for (varLoop = '#'; varLoop <= '#######'; varLoop = varLoop + '#');
console.log(varString);
*/

//PART 9

//ODD OR EVEN
/*
    var varLoop;
    var numType;
    for (varLoop = 0; varLoop <= 15; varLoop++) {
        if (varLoop % 2 === 0) {
            numType = 'even'
        } else {
            numType = 'odd'
        };
        console.log(varLoop + ' is ' + numType);
    }
*/
