//Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın.
 //Məsələn, 1243 ədədində tək yerdə duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb bu cəmlərin hasilini ekrana yazdırın.

 var num = 1234;
 var NumSum = 0;
 var NumSum1 = 0;
 var result = num;
 var digit;
 for (let i = 1; result > 0; i++) {
     digit = result % 10;
     result = Math.floor(result / 10);
     if (i % 2 == 0) {
 
         NumSum1 += digit;
     }
     else {
         NumSum += digit;
     }
 }
 console.log(NumSum1 * NumSum);

 