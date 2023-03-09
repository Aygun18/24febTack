// Ədəddəki ən böyük rəqəmi çap edin. Məsələn 43192 ədədində ən böyük rəqəm 9-dur və 9 çap edilməlidir.

var number= 43192;
var residual= 0;
var number1= 0;

while(number>0){
    residual=number%10
    number=(number-residual)/10
    if(number1<residual){
        number1=residual
    }
}
console.log(number1)
