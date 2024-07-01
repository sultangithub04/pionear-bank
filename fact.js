// var factorial=1;
// for(var i=1; i<=100; i++){
//     var factorial= factorial*i;
// console.log(i, factorial);
// }
// function factorial(n){
//     var factorial=1;
// for(var i=1; i<=n; i++){
//     var factorial= factorial*i;
//     }
//     return factorial;
// }
// var result=factorial(10);
// console.log(result);

// function factorial(n){
//             var factorial= 1;
//         for(let i=1; i<=n; i++){
//             factorial=factorial*i;
            
//         }
//         return factorial;
//         }
//         var result=factorial(10);
//         console.log(result);
        // var i=1;
        // factorial=1;
        // while(i<=10){
        //     factorial=factorial*i
        //     // console.log(i, factorial)
        //     i++

        // }
        // console.log(factorial);

                // function factorial(n){
                //     var i=1;
                //     fact=1;
                //     while(i<=n){
                //         fact=fact*i
                //         i++
            
                //     }
                //     return fact;
                // }
                // var result= factorial(10);
                // console.log(result)
// for(var i=10; i>=1; i--){


// }

// i=10;
// while(i>=1){
//  i-- 
// }

                    function factorial(n){
                    if(n==0){
                        return 1;
                    }
                    else{
                        var fact =n*factorial(n-1);
                        return  fact;
                    }
                    }
                     var result= factorial(5);
                     console.log(result)