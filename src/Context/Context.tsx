export default {}
// import React, { useState } from 'react';

// export const contextFunction=(noOfQuestions:number,levelDifficulty:string)=>{
//     const apiString:string=`https://opentdb.com/api.php?amount=${noOfQuestions}&difficulty=${levelDifficulty}&type=multiple`;
//     let [api,setApi]=useState(apiString)
//     return <></>;
// }

// export const transaction= createContext(initialData);
// export const TransProvider=({children})=>{
//     let [state,dispatch]=useReducer(Reducer, api);
//     function addTransaction(transObj){
//         dispatch({
//             type:"Add-Transaction",
//             payload:{
//                 desc:transObj.desc,
//                 amount:transObj.amount
//             }
//         })

//     }
//     return(
//         <transaction.Provider value={
//             {
//                 trans : state,
//                 addTransaction,
//                 deleteTransaction
//             }
//         }>
//             {children}
//         </transaction.Provider>
//     )
// }