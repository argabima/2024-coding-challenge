// function smash (words) {
//     return words.join(' ');
//  };

//const smash = (words) => words.join(' ')

function smash (words){
    let result = '';

    
    for (i = 0; i < words.length; i++){
        result += words[i];
        if (i != words.length - 1){
            result += ' '
        }
    }
    
    return result
}
   
 console.log(smash(['hello', 'world', 'this', 'is', 'great']))