import {QuestionType,UsefulQuestion} from './../Types/quiz_types'

const shuffleArray = (array:any[])=>
[...array].sort(()=>Math.random()-0.5)

//export let amount1:number,difficulty1:string;

export const getQuestions = async (amount:number,difficulty:string)=> {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
    //amount1=amount;
  //  difficulty1=difficulty;
    let {results} = await res.json();
    const quiz:UsefulQuestion[] = results.map((questObj:QuestionType,ind:number)=>{
        return{
            question:questObj.question,
            options:shuffleArray(questObj.incorrect_answers.concat(questObj.correct_answer)),
            answer:questObj.correct_answer
        }
    })
    return quiz
}