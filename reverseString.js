const s = ["h","e","l","l","o"]


const reverseString = (s) => {
    let ans = []

    
    console.log(s.length);

    for (i=s.length-1;i>=0;i--){
        
        ans.push((s[i]))
    }
    console.log(ans);
    s = ans;

}

reverseString(s)