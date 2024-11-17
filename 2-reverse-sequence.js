// const reverseSeq = n => {
//     const arr = [];

//     for (i = n; i >= 1; i--) {
//         arr.push(i);
//     }

//     return arr;
//   };   

reverseSeq = (n) => {
    return Array(n).fill().map((elemen, i)=> (2^i) - 1 );
}

//reverseSeq = (n) => [...Array(n)].map((elemen, i)=> n -i);
  
   console.log(reverseSeq(10))