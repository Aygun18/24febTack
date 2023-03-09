//Verilmiş ədədin 2nin qüvvəti olub-olmadığını tapın. Məsələn 8 daxil olunarsa true, 5 daxil olunarsa false çap etməlidir.
var num = 17;
var Power =true;
while (num>1) {
    if (num %2 != 0) {
        Power = false;
        break;
    }
    num = num % 2;
}
if (Power){
    console.log(true);
}
else {
    console.log(false);
}