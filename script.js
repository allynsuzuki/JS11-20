
//Given an array of integers, this function returns true if 6 appears as either the first or last element in the array.
function firstLast6(array) {
    if (array[0]==6 || array [array.length-1]==6){
        return true;
    }else{
        return false;
    }

}

//Given an array of length 2, this function returns true if it contains a 2 or a 3.
function has23(array){
    if (array[0]  == 2 || array[0]==3) {
        return true;
    }
    if (array[1] == 2|| array[1] ==3){
        return true;
    }else{
        return false;
    }
}

//Given an int array length 3, if there is a 2 in the array immediately followed by a 3, this function sets the
// 3 element to 0. Return the changed array.
function fix23(array){
    if(array[0]==2 && array[1]==3){
        array[1]=0
    }
    if(array[1]==2 && array[2]==3){
        array[2]=0
    }
    return array
}

//Given a string, this function counts the number of words ending in 'y' or 'z'.
function countYZ(string){
    string = string.toLowerCase();
    var x = 0;
    if(string[string.length-1]=="y" || string[string.length-1]=="z"){
         x +=1;
    }
    for(var i=0; i<string.length; i++) {
        if (string[i] == " ") {
            var end = string[i-1];
            if (end == "z" || end == "y") {
                x += 1;
            }
        }
    }
    return x;
}

//Given two strings, return true if either of the strings appears at the very end of the other string, ignoring
// upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase()
// returns the lowercase version of a string.
function endOther(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    var firstEnd = string1.endsWith(string2)
    var secondEnd = string2.endsWith(string1)
    if (firstEnd != secondEnd || (firstEnd == true && secondEnd == true)) {
        return true;
    }
        return false;
}

//This function returns a version of the given string, where for every star (*) in the string the star and the chars
// immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
function starOut(str){
    var newstr = ""
    for(i=0; i<str.length; i++){
        if(str[i-1] != "*" && str[i+1]!="*" && str[i]!= "*"){
            newstr += str[i]
        }
    }
    return newstr;
}

// This function returns the string that is between the first and last appearance of "bread" in the given string, or
// return the empty string "" if there are not two pieces of bread.
function getSandwich(str){
    var where1 = str.indexOf("bread");
    var where2 = str.lastIndexOf("bread");
    if(where1 != where2) {
        var neww = str.substring(where1+5, where2)
        return neww;
    }
    return "";
}

//Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side
// is equal to the sum of the numbers on the other side.
function canBalance(array){
    var sum1 = 0;
    var sum2 = 0;
    for(var i=0; i<array.length; i++){
        sum1+=array[i];
        for(var j=i+1; j<array.length; j++){
            sum2+= array[j];
        }
     if (sum1==sum2){
        return true;
        }
        sum2=0
     }
    return false;

}

//Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value.
// Return the number of clumps in the given array.
function countClumps(array){
    var clumps=0;
    for(var i=0; i<array.length; i++){
        if(array[i]==array[i+1] && array[i] !== array[i-1]){
            clumps+=1
        }
    }
    return clumps
}

//Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are
// evenly spaced, so the difference between small and medium is the same as the difference between medium and large.
function evenlySpaced(a, b, c){
    var lar = Math.max(a, b, c);
    var sma = Math.min(a, b , c);
    var med = (lar + sma) / 2
    if(med==a || med==c || med==b){
        return true;
    }
    return false;
}



function tester() {

    document.getElementById("output").innerHTML = countClumps([1, 1, 2, 1, 1]);


}


