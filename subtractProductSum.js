const example = 234
const example2 = 4421



const subtractProductAndSum = (n) => {
    const string = n.toString()
    const split = string.split('')
    let product = 1
    let sum = 0

    for (i=0;i<split.length;i++){
        product = product * parseInt(split[i])
        sum += parseInt(split[i])
    }
    return (product-sum);


}

subtractProductAndSum(example2)