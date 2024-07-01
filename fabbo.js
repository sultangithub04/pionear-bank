// function fibonaci(n){
//     var fibo= [0,1];
//     for(var i=2; i<=n; i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];
//         //console.log(fibo[i], fibo[i-1], fibo[i-2] )
//     }
//     return fibo;


// }
// var result= fibonaci(10);
// console.log(result);


function fibonaci(n){
    if(n==0){
        return 0;
    }
    elseif(n==1){
        return 1;
    }
    else{
        return fibonaci(n-1)+fibonaci(n-2);
    }

}
var result =fibonaci(10);
console.log(result);