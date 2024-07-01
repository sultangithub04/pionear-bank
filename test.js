// const year=7896;
// let remainder=year%4
// if(remainder==0){
//     console.log('leap year')
// }
// else{
//     console.log('Not a leap yerr')
// }
// console.log();

function isLeapYear(year){
    const remainder=year%4
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
  }
const check=isLeapYear(4410);
console.log(check);