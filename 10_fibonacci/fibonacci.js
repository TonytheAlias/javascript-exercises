const fibonacci = function(num) {
let intNum = parseInt(num);
const sequence = [0,1];

if(intNum < 0){
    return 'OOPS';
}
else if (intNum === 0){
    return 0;
}
else if (intNum === 1){
    return 1;
}
else {
    for(let i = 2; i <= intNum; i++){
        
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[intNum];
}
};

// Do not edit below this line
module.exports = fibonacci;
