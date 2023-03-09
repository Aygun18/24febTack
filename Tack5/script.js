//1-dən M-ədək ədədlər içərisində 15-ə bölünən ədədlərin sayını tapan alqoritm.
var M =345;
var count =0;
for (let i = 1; i <= M; i++){
    if (i%15==0) {
        count++;   
    }
}
console.log(count);