//-----------------------------------CHAPTER 21-25 (STRING METHODS)----------------------------------
//TASK 01
var firstname = prompt("Enter your first name");
var lastname = prompt("Enter your last name");
var fullname = firstname + " " + lastname;
alert("Welcome here!" + " " + fullname)



//TASK 02
var favouritephone = prompt("Write your favourite phone");
document.write("<br/> <h3> Task 02: Lenght of the favourite mobile </h3>")
document.write("My Favourite Phone is:" + " " + favouritephone);
document.write("<br/> Lenght of string: " + " " + favouritephone.length)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 03
var pakistani = "Pakistani";
document.write("<br/> <h3>Task 03: Index of N</h3>")
document.write("String:" + " " + pakistani);
document.write("<br/> Index of 'n':" + " " + pakistani.indexOf('n'))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 04
var HelloWorld = "Hello World";
document.write("<br/> <h3> Task 04: Index of Last L </h3>")
document.write("String:" + " " + HelloWorld);
document.write("<br/> Last ndex of 'L':" + " " + HelloWorld.lastIndexOf('l'))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 05
var pakistani = "Pakistani";
document.write("<br/> <h3> Task 05: Character at 3 </h3>")
document.write("String:" + " " + pakistani);
document.write("<br/> String at index 3:" + " " + pakistani.charAt(3))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 06
var firstnames = prompt("Enter your first name");
var lastnames = prompt("Enter your last name");
var fullnames = firstnames.concat(lastnames);
alert("Welcome here!" + " " + fullnames)



//TASK 07 
var Hyderabad = "Hyderabad";
var replace = Hyderabad.replace("Hyder", "Islam");
document.write("<br/> <h3> Replacemnet in city </h3>")
document.write("City:" + " " + Hyderabad);
document.write("<br/> After replacement:" + " " + replace)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 08
var message = "Ali and Sami are best friends. They play cricket and football together"
var replacemessage = message.replace(/and/g, "&");
document.write("<br/> <h3> Replacement of and with & </h3>")
document.write(replacemessage);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 09 
var numtostring = 472;
var numtostring1 = numtostring.toString();
var string = typeof numtostring1;
document.write("<br/> <h3> showing Number and string type </h3>")
document.write("Value:" + " " + numtostring)
document.write("<br/> Type:" + " " + string)
var numtostring2 = Number("472");
var num = typeof numtostring2;
document.write("<br/> Value:" + " " + numtostring)
document.write("<br/> type:" + " " + num)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 10  
var peanut = "peanut";
var peanutuppercase = peanut.toUpperCase();
document.write("<br/> <h3> To Upper case conversion </h3>")
document.write("User Input:" + " " + peanut)
document.write("<br/> Upper Case: " + " " + peanutuppercase)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 11
var js = "javascript";
var jsslice1 = js.slice(0, 1);
var jsslice2 = js.slice(1);
jsslice1 = jsslice1.toUpperCase();
jsslice2 = jsslice2.toLowerCase();
var slicecombine = jsslice1 + jsslice2;
document.write("<br/> <h3> To Title Case Conversion </h3>")
document.write("User Input:" + " " + js)
document.write("<br/> Title Case: " + " " + slicecombine)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 12
var decimal = 35.36;
var newnumber = parseInt(decimal.toString().replace(".", ""));
document.write("<br/> <h3> Removal of decimal </h3>")
document.write("\Value: " + " " + decimal)
document.write("<br/> Result:" + " " + newnumber)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




// TASK 13 
var usernamevalid = prompt("enter name");
var lengthofthename = usernamevalid.length;
for (var i = 1; i < usernamevalid.length; i++) {
    if (usernamevalid.slice(i, i + 1) == '!' || usernamevalid.slice(i, i + 1) == '.' || usernamevalid.slice(i, i + 1) == "," || usernamevalid.slice(i, i + 1) == "@") {
        alert("Enter a valid user name");
    }
}




// TASK 14
var user = prompt('Welcome to ABC bakery, what do you want to order sir/ maam');
var user = user.toLowerCase();
var Arrr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var bakery;
for (bakery = 0; bakery < Arrr.length; bakery++) {
    if (Arrr[bakery] === user) {
        alert(user + "  " + 'available at index' + "  " + bakery + 'in our bakery');
        break;
    }
    if (bakery == Arrr.length - 1) {
        alert('we are sorry!' + "  " + user + "  " + 'is not available in our bakery');
        break;
    }
}



// TASK 15
// var password = prompt("Enter Password")
// var passw=  /^[A-Za-z]\w{6,14}$/;
// document.write("<br/> Entered Password:" + " " + password);
// if(password == passw) 
// { 
// document.write('<br/> You have entered the right password')
// }
// else if (password != passw)
// { 
// document.write(" <br/> Password can not begin with a number please enter a valid password")
// }
// document.write("<br/>");




// TASK 16
var uok = 'University Of Karachi';
var ar = uok.split("");
document.write(ar);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




//TASK 17
var Userinput = " Pakistan";
document.write("<br/>User input:" + " " + Userinput);
var totallenghtofword = "";
totallenghtofword = Userinput.length - 1;
var letteratlast = "";
letteratlast = Userinput.charAt(totallenghtofword);
document.write("<br/> <h3> Last character finding </h3>")
document.write("Last Character of input:" + " " + letteratlast);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 18
var temp = "the quick brown fox jumps over the lazy dog";
var count = (temp.match(/the/g) || []).length;
document.write("<br/> <h3> Replacemnet of the with The </h3>")
document.write("Text:" + " " + temp)
document.write("<br/> there are" + " " + count + " " + "occurence(S) of word 'the'");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//--------------------------------------CHAPTER 26-30 (MATH METHODS)----------------------------------
//TASK 01
var convertnumber = 3.45214;
var roundoff = Math.round(convertnumber)
document.write("<br/> <h3> Conversion into float and ceil </h3>")
document.write("Number:" + " " + convertnumber);
document.write("<br/> Number:" + " " + roundoff);
var floor = Math.floor(convertnumber)
var ceil = Math.ceil(convertnumber)
document.write("<br/> Floor Value:" + " " + floor);
document.write("<br/> Ceil Value:" + " " + ceil);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 02
var negnumbers = +prompt("Enter Number in Positive Float, It will be converted by the method in negative")
var negnumber = -Math.abs(negnumbers);
var roundoff = Math.round(negnumber)
document.write("<br/> <h3> Number in Positive Float, It will be converted by the method in negative</h3>")
document.write("Number:" + " " + negnumber);
document.write("<br/> Number:" + " " + roundoff);
var floor = Math.floor(negnumber)
var ceil = Math.ceil(negnumber)
document.write("<br/> Floor Value:" + " " + floor);
document.write("<br/> Ceil Value:" + " " + ceil);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 03
var absnumber = +prompt("Enter Negative Number")
var abs = Math.abs(absnumber);
document.write("<br/> <h3> Abstraction of Number </h3>");
document.write("the Absolute value of" + " " + absnumber + " " + "is" + " " + abs);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 04
var dice = Math.random() * 6;
var dice2 = Math.floor(dice);

var dice1 = Math.random() * 6;
var dice3 = Math.floor(dice);

document.write("<br/> <h3>Random number</h3>")
document.write("Random dice value:" + " " + dice2)
document.write("<br/> Random dice value:" + " " + dice3)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 05
var floorvalue = Math.floor(Math.random() * 2);
if (floorvalue === 1) {
    document.write("<br/> <h3>Heads and tails</h3>")
    document.write(floorvalue)
    document.write("<br/> Random coin value: Head")
}
else if (floorvalue === 2) {
    document.write("<br/> <h3> Heads and tails </h3>")
    document.write(floorvalue)
    document.write("<br/> Random coin value: Tail")
}
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 06
var floorvaluetill100 = Math.floor(Math.random() * 100);
document.write("<br/> <h3>random number from 1 -100 </h3>")
document.write("Random Number Between 1 and 100:" + " " + floorvaluetill100)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 07
var weight = prompt(" Enter your Weight in kilograms ")
var converted = parseInt(weight);
document.write("<br/> <h3> Weight in kilograms </h3>")
document.write("The weight of user is:" + " " + converted + " " + "Kilograms")
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 08
var secret = 6
var ask_user = +prompt("Enter you Number between 1 to 10");
if (secret === ask_user) {
    alert("Congratulation!!!");
}
else {
    alert("Try Again!!!")
}


//--------------------------------------CHAPTER 31-34 (DATA METHODS)----------------------------------
//TASK 01
var currentdate = new Date();
document.write("<br/> <h3>Cuurent date</h3>")
document.write(currentdate);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


// //TASK 02
var currentm = new Date();
var currentmonth = currentm.getMonth();
document.write("<br/> <h3> Cuurent Month </h3>")
document.write("\Current Month" + " " + currentmonth);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


//TASK 03
var day = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"]
var currentday = new Date();
var currentdays = currentday.getDay();
alert("Today is " + "" + day[currentdays]);



//TASK 04
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"]
var currentdays = new Date();
var currentdayss = currentdays.getDay();
if (days[currentdayss] == "Sunday" || days[currentdayss] == "Saturday") {
    document.write("<br/> <h3> Funday calculations </h3>")
    document.write("It's a Fun Day")
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}



//TASK 05
var currentmonthdate = new Date();
if (currentmonthdate <= 15) {
    document.write("<br/> <h3> identify the days last fifteen or first fifteen </h3>")
    document.write("First fifteen Days of the Month");
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}
else if (currentmonthdate > 15) {
    document.write("<br/> <h3> Identify the days, Last fifteen or first fifteen </h3>")
    document.write("<br/> Last fifteen Days of the Month");
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}



//TASK 06
var d = new Date();
document.write("<br/> Current Date:" + " " + d);
var millisecond = d.getTime();
var milli = millisecond / 1000;
document.write("<br/> <h3>Time elapsed</h3>")
document.write("Elapsed Milliseconds since january 1, 1970: " + " " + milli)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
var minutes = d.getTime();
var minute = minutes / (1000 * 60);
document.write("Elapsed Milliseconds since january 1, 1970: " + " " + minute)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 07
var time = new Date();
var times = time.getHours();
alert(times)
if (time > 12) {
    alert("It's PM")
}
else if (time <= 12) {
    alert("It's AM")
}



//TASk 08
var my_date = new Date("December 31, 2020")
document.write("<br/> <h3> Time of 31 decemeber 2020 </h3>")
document.write("Later Date" + " " + my_date)


//TASK 09
var daytoday = new Date()
var dayfrom1970toyet = daytoday.getTime();
dayfrom1970toyet = dayfrom1970toyet / (1000 * 60 * 60 * 24)
var floattime1 = Math.floor(dayfrom1970toyet)
document.write("<br/> <h3>Time calculation </h3>")
document.write("<br/>" + floattime1)

var dayramzan = new Date("June 18, 2015");
var dayfrom1970tillramazan = dayramzan.getTime();
dayfrom1970tillramazan = dayfrom1970tillramazan / (1000 * 60 * 60 * 24)
var floattime2 = Math.floor(dayfrom1970tillramazan)
document.write("<br/>" + floattime2)

var total = floattime1 - floattime2;
document.write("<br/>" + " " + total + " " + "days have passed since 1st ramzan 2015")
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


//TASK 10
var daydecember = new Date("December 1, 2015")
var dayfrom1970tobeg = daydecember.getTime();
dayfrom1970tobeg = dayfrom1970tobeg / (1000)
var floattimebeg = Math.floor(dayfrom1970tobeg)


var dayend = new Date("December 5, 2015");
var dayfrom1970tillend = dayend.getTime();
dayfrom1970tillend = dayfrom1970tillend / (1000)
var floattimeend = Math.floor(dayfrom1970tillend)
document.write("<br/> On REFERENCE: " + dayend)

var totaldecemeber = floattimeend - floattimebeg;
document.write("<br/>" + " " + totaldecemeber + " " + "SECONDS have passed since the beginig of 2015")
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 11
var d = new Date();
d.setHours(d.getHours() + 1);
document.write("<br/> One hour ago, It was " + " " + d)

//TASK 12
var years100 = new Date();
years100.setFullYear(years100.getFullYear() - 100);
document.write("<br/>100 years back " + " " + years100)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




//TASK 13
var bithdate = prompt("enter your age")
document.write("your age is:" + " " + bithdate)
var dateage = new Date();
dateage.setFullYear(dateage.getFullYear() - bithdate);
document.write("<br/>Your birth year is" + " " + dateage)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 14
document.write("<br/> K-ELECTRIC BILL")
var customername = "ABC Customer";
var month = "Feburay";
var numberofunits = 410;
var chargesperunit = 16
var net = numberofunits * chargesperunit;
var latepayment = 350;
var gross = net + latepayment;
document.write("<br/> Customer Name:" + " " + customername)
document.write("<br/> Month:" + " " + month)
document.write("<br/> Number of units" + " " + numberofunits)
document.write("<br/> Charges" + " " + chargesperunit)
document.write("<br/> Net Amount payable (within Due Date)" + " " + net)
document.write("<br/> Late PAyment surcharge:" + " " + latepayment)
document.write("<br/>Gross Amount Payable (after Due Date)" + " " + gross)




//-------------------------------------------CHAPTER 35-38 (Function)----------------------------------
//TASK 01
function dataandtime() {
    var timeanddate1 = new Date();
    document.write("<br/>" + " " + timeanddate1)
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");

} dataandtime();



//TASK 02
function greet() {
    var firstname = prompt("Enter first Name")
    var lastname = prompt("Enter Last Name")
    alert("Hello" + " " + firstname + " " + lastname)

} greet();




//TASK 03
function add(add1, add2, add3) {
    add1 = +prompt("Enter Number one");
    add2 = +prompt("Enter Number two");
    add3 = add1 + add2;
    return add3;
} alert(add());





//TASK 04
function operator(num1, num2, oper) {
    num1 = +prompt("Enter Number one");
    num2 = +prompt("Enter Number two");
    oper = prompt("Enter any operator")
    if (oper === '+') {
        return num1 + num2;
    }
    else if (oper === '-') {
        return num1 - num2;
    }
    else if (oper === '*') {
        return num1 * num2;
    }
    else if (oper === '/') {
        return num1 / num2;
    }
} alert(operator());




//TASK 05
function square(number1 = 2, number2 = 4) {
    number1 = number1 * number1;
    number2 = number2 * number2;
    alert("square of number 1 is" + "" + number1)
    alert("square of number 2 is" + "" + number2)
}
square();



//TASK 06
function factorial() {
    var b = 1;
    var n = prompt("Enter a number");
    for (var i = n; i >= 1; i--) {
        b = b * i;
    }
    alert("factorial of the number is" + " " + b);
}
factorial();



//TASK 07
function counting(lastnumber, firstnumber) {
    firstnumber = +prompt("Enter First Number")
    lastnumber = +prompt("Enter Last Number")
    for (var i = firstnumber; i <= lastnumber; i++) {
        document.write(i);
    }
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}
counting();




//TASK 08
function hypotaneous(base, Perpendicular, hypotaneous) {
    base = + prompt("Enter Base value");
    Perpendicular = + prompt("Enter Perpendicular value");
    base1 = base * base;
    Perpendicular1 = Perpendicular * Perpendicular;
    var hypotaneous = base1 + Perpendicular1;
    alert("the hypotaneous value is" + " " + hypotaneous);
}
hypotaneous();



//TASK 09
function area(width = 10, height = 2) {
    var area = width * height;
    alert("The Area is" + area);
}
area();



//TASK 10
function palindrom() {
    var name = prompt("Enter any Word for checking Palindrom");
    var check = "";
    for (var i = name.length - 1; i >= 0; i--) {
        check += name[i];
    }
    if (check === name) {
        alert("This is the Palindrom")
    }
    else if (check != name) {
        alert("This is not the Palindrom")
    }
}
palindrom();



//TASK 11
function titleCaseinstring(stringline) {
    stringline = prompt("Enter line for title case")
    var splitString = stringline.toLowerCase().split(' ');
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');

}
document.write(titleCaseinstring());



//TASK 12
function longword(string) {
    string = prompt("Enter string")
    var array = string.match(/\w[a-z]{0,}/gi);
    var res = array[0];

    for (var x = 1; x < array.length; x++) {
        if (res.length < array[x].length) {
            res = array[x];
        }
    }
    alert("the longest word is:" + " " + res);
}
longword();


//TASK 13
function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}
alert("the charachter found in string is" + char_count('variablexyz', 'x'));


//TASK 14
function calcCircumferenc(radiusofcircle) {
    var pi;
    var circumference = 2 * pi * radiusofcircle;
    alert("The Circumference is" + " " + circumference);
}
function calcArea(radiusofcircle) {
    var pi;
    radiusofcircle = radiusofcircle * 2;
    var area = pi * radiusofcircle;
    alert("The Area is " + " " + area);
}
calcCircumferenc();
calcArea();