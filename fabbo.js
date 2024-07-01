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


// function fibonaci(n){
//     if(n==0){
//         return 0;
//     }
//     elseif(n==1){
//         return 1;
//     }
//     else{
//         return fibonaci(n-1)+fibonaci(n-2);
//     }

// }
// var result =fibonaci(10);
// console.log(result);
        // function primeNumber(n){
        //     for(let i=2; i<n; i++){
        //     if(n%i==0){
        //         return "not a prime number"
        //     }
        //     return "prime number"
        //     }

        // }
        // var result =primeNumber(18)
        // console.log(result)

function fibonaci(n){
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0,1];
    }
    else{
        var fibo= fibonaci(n-1);
        var nexelement= fibo[n-1]+fibo[n-2];
        fibo.push(nexelement);
        return fibo;
    }
}
    var result=fibonaci(10);
    console.log(result);

