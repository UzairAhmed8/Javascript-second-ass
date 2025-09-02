//City Prompt // 
function userCityfunction(){

    let userCity = prompt("What is your City? \n Karachi , Islamabad , Lahore , Sialkot");
    let resultCity = userCity;
    
    if(resultCity == "Karachi"){
        alert("You are From Karachi \n you will be availing special \n offers..")
    }else if(resultCity == "Islamabad"){
        alert("You are From Islamabad \n you will be availing special \n offers..")
    }else if(resultCity == "Lahore"){
        alert("You are From Lahore \n you will be availing special \n offers..")
    }else if(resultCity == "Sialkot"){
        alert("You are From Sialkot \n you will be availing special \n offers..")
    }else{
        alert("You have not entered The city \n please enter the City to continue..")
    };
}
//==================//

//gender prompt // 
function genderFunction(){

    let userGender = prompt("Enter Your Gender \ Male , Female");
    let resultantGender = userGender;
    
    if(resultantGender == "Male"){
        alert("Good morning Sir!");
    }else if(resultantGender == "Female"){
        alert("Good morning Ma'am");
    }else{
        alert("Please Enter your Gender before continuing..")
    };

}

//=============//

//traffic light game//
function trafficLightfunction(){

    let userLight = prompt("Enter A specific Light Color \n given Below \n Red , Yellow , Green");
    let resultantLight = userLight;

    if(resultantLight == "Red"){
        alert("Stop here!");
    }else if(resultantLight == "Yellow"){
        alert("Start Your Vehicle!");
    }else if(resultantLight == "Green"){
        alert("Go Go Go!!!");
    }else{
        alert("Specify a Number before entering next time..");
    };
}

//fuel report//

function fuelIndcationfunction(){
    let userFuel = prompt("Enter the fuel you have put in.. \n enter in Liters \n car tank is of 5 liters \n")
    let resultantFuel = userFuel;
    
    if(resultantFuel == 5){
        alert("You Are full with the 'Fuel'!")
    }else if(resultantFuel <= 1){
        alert("you are 'Low on Fuel' Fill up!");
    }else if(resultantFuel != 5){
        alert("You have enough 'Fuel lefted'")
    }
}

//checking script //
function sciptCheckingfunction(){

    var a = 4;  
    if (++a === 5){
    alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    if("car" < "cat"){
    alert("car is smaller than cat");
    }
}

//===================//

//Grade checker // 

function gradeCheckingfunction(){
    let userGrade = prompt("Enter your Grade on the scale of 10-100%");
    resultantGrade = userGrade;

    if(resultantGrade >= 90){
        alert("Congratulations You got A1 Grade");
    }else if(resultantGrade >= 80){
        alert("Congratulations You got A+ Grade");
    }else if(resultantGrade >= 70){
        alert("Congratulations You got A Grade");
    }else if(resultantGrade >= 65){
        alert("Congratulations You got B+ Grade");
    }else if(resultantGrade >= 60){
        alert("Congratulations You got B Grade");
    }else if(resultantGrade >= 50){
        alert("Congratulations You got C Grade");
    }else if(resultantGrade >= 40){
        alert("Congratulations You got E Grade");
    }else if(resultantGrade >= 33){
        alert("Congratulations You are Passed");
    }else{
        alert("Congratulations You got F you are Failed");
    }
}

//Guess Game //

function guessGamefuntion(){

    let userGuess = prompt("Guess game \n Guess a Number from the Range of 1-10 \n")
    let userGuessresults = userGuess;

    if(userGuessresults == 4){
        alert("Bingo You got The Correct one")
    }else{
        alert("You loosed")
    }
}

//=============//

// divisible Check // 

function divisibleFunction() {
    let divisbleInput = prompt("Enter a Number to \nDivide it with 3");
    let divisbleResult = Number(divisbleInput);
    let dividingNum = 3;

    if (divisbleResult % dividingNum === 0) { 
        alert("It can be divided by three");
    } else {
        alert("It cannot be divided by three");
    }
}

//==========//

// Even odd Checker //

function evenNumberchecker(){
    let userInpchecker = prompt("Enter a number to check wether its even or odd!");
    let userInpcheckerResult = parseInt(userInpchecker);

    if(isNaN(userInpcheckerResult)){
        alert("Please Enter a Valid number")
    }else if(userInpcheckerResult % 2 === 0){
        alert(userInpcheckerResult + " is Even")
    }else{
        alert(userInpcheckerResult + " is Odd")
    }

}

//========//

//Temprature Check//

function tempCheckfunc(){

    let userTemp = prompt("Enter The Degrees you wanna check!");
    let userTempresult = parseInt(userTemp);

    if(userTempresult >= 40){
        alert("its Too much Hot out side!")
    }else if(userTempresult >= 30){
        alert("The weather today is normal!")
    }else if(userTempresult >= 20){
        alert("The weather today is Cool!")
    }else{
        alert("OMG! its Too much Cold outside")
    }
}

//================//

function calculatorFunc(){

    let num1 = prompt("Enter 1st number");
    let num2 = prompt("Enter 2nd number");
    let operator = prompt("Enter an operator \n add,sub,mul,divid ")
    let convertedNum1 = Number(num1);
    let convertedNum2 = Number(num2);

    if(operator == "add"){
        alert(convertedNum1 + convertedNum2)
    }else if(operator == "sub"){
        alert(convertedNum1 - convertedNum2)
    }else if(operator == "mul"){
        alert(convertedNum1 * convertedNum2)
    }else{
        alert(convertedNum1 / convertedNum2)
    }
}