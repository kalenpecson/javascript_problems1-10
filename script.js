/**
 * Created by h205p3 on 9/25/17.
 */

function sleep_in(weekday,holiday) {



        if (holiday== true){
           return true;
       }else if (weekday==true){
           return false;
       }else if(weekday == false){
           return true;
       }
    }
function monkey_trouble(x,y){
    if (x==y){
        return true;
    }else{
        return false;
    }
}
function string_times(word,times){
    if (times==0){
        var repeat="";
    }else{
        var repeat= word;
    }

    for (var i=0; i<(times-1); i++){

        var repeat2= repeat + word;
        repeat =repeat2 ;
    }
    return (repeat);
}
function front_times(word,times){
    var x= word.substring(0,3);
    if (times==0){
        var repeat="";
    }else{
        var repeat= x;
    }

    for (var i=0; i<(times-1); i++){

        var repeat2= repeat + x;
        repeat =repeat2 ;
    }
    return (repeat);


}
function string_bits(word){
    var fun="";
    for (var i=0; i<(word.length); i +=2) {
        fun += word[i];

    }
    return fun;

}
function caughtSpeeding(x,y){
    var bday= y;
    var speed=x;
    var ticketsize= 0;
    if (bday==true){
        if (speed<=65){
            ticketsize= 0
        }else if(speed>65 && speed<=85){
            ticketsize= 1
        }else if(speed>=86){
            ticketsize=2
        }
    }else{
        if (speed<=60){
            ticketsize= 0
        }else if(speed>60 && speed<=80){
            ticketsize= 1
        }else if(speed>=81){
            ticketsize= 2
        }
    }
    return ticketsize;
}
function fizz_buzz(x){

    if(x%3==0 && x%5==0){
            return("FizzBuzz");

    }else if (x%5==0 && x%3!=0 ){
        return("Buzz");
    }else if (x%5!=0 && x%3==0){
        return ("Fizz");
    }else{
        return (x+ "!");
    }
}
function teaParty(x,y){
    if (x>=5 && y>=5 && x/y<2 && y/x<2){
        return 1;
    }else if (x>=5 && y>=5 && (x/y<2 || y/x<2)){
        return 2;
    }else if (x<5 || y<5){
        return 0;
    }
}
function blackjack(x,y){
    if (x>21 && y<21){
        return y;
    }else if (y>21 && x<21){
        return x;
    }else if(x>21 && y>21){
        return 0;
    }else{
        var d1= 21-x;
        var d2= 21-y;
        if (d1> d2){
            return y;
        }else {
            return x;
        }
    }
}
function loneSum(a,b,c){
    if (a==b || b==c || a==c){
        if (a==b && b!=c && a!=c) {
            return c;
        }else if (b==c && a!=c && b!= a){
            return a;
        }else if (a==c && a!=b && b!=c){
            return b;
        }else if (a==b && b==c && a==c){
            return 0;
        }
    }else{
        var sum = a+b+c;
        return sum;
    }
}







function tester() {

     document.getElementById("output3").innerHTML = sleep_in(false, false);
     // document.getElementById("output1").innerHTML = sleep_in(false, false);
    // document.getElementById("output2").innerHTML = monkey_trouble(false, false);
    //  document.getElementById("output3").innerHTML = string_bits('mbappé',23);
    // document.getElementById("output4").innerHTML = sleep_in(false ,true);
}