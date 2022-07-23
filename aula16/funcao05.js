//fatorial de maneira recursiva (função chamando ela mesma)

function fatorial(n){
    if (n==1){
        return 1
    } else{
        return n * fatorial(n-1) 
    }
}

/*

5! = 5x4x3x2x1
5! = 5 x 4!


n! = n x (n-1)!
1! = 1

*/

console.log(fatorial(5))