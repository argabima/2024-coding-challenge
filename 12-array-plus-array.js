// function arrayPlusArray(arr1, arr2) {
//     let elm = 0;
//     let elm2 = 0;

//     for (i =0; i< arr1.length; i++){
//          elm += arr1[i]
//     }

//     for (i =0; i< arr2.length; i++){
//         elm2 += arr2[i]
//    }

//     return elm + elm2; //something went wrong
//   }

//   function arrayPlusArray(arr1, arr2) {
//     return [...arr1, ...arr2].reduce((acc, curr)=>(acc + curr)); //something went wrong
//   }

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr)=>(acc + curr)); //something went wrong

  

console.log(arrayPlusArray([1,2,3],[4,5,6]))