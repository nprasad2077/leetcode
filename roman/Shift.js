let nums = [1,2,3,4,5,6,7]

function rotate(nums){
    for (i=0;i<3;i++) {
        nums.unshift(nums.pop())
}
return nums;

}

rotate(nums);
console.log(nums);