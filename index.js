// Factorial
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }

  factorial(4);

  //genap
function genap(param) {
   if((param === 0) || (param === 1)) {
       console.log(0);
   } else if(param % 2 === 0) {
        genap(param -2);
        console.log(param)
   } else {
       genap(param-3);
        console.log(param-1);
   }
}

genap(5);



//fungsi 
/*
f1 = 3 => 3 X 2^0
f2 = 6 => 3 x 2^1
f3 = 12 => 3 x 2^2
f4 = 24 => 3 x 2^3
f5 = 48
*/

function fungsi(exp) {
    if(exp === 1) {
        return 3;
    } else {
        return 2 * fungsi(exp-1);
    }
}

console.log(fungsi(1));     // 3
console.log(fungsi(2));     // 6
console.log(fungsi(3));     // 12
console.log(fungsi(4));     // 24
console.log(fungsi(5));     // 28


