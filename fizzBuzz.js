


const fizzBuzz = (n) => {

    let ans = []

    for (i=1;i<n+1;i++){

        if (i % 3 === 0 && i%5===0){
            ans.push('FizzBuzz')
        } else if (i%3 === 0){
            ans.push('Fizz')
        } else if(i%5===0) {
            ans.push('Buzz')
        } else {
            ans.push(i.toString())
        }
    }

    console.log(ans);
    return ans;

}

fizzBuzz(15)