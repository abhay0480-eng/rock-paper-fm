import React, { useContext, useState } from 'react'
import ScoreContext from '../context/ScoreContext'

const Home = () => {

 const pickedItems = ["paper","scissors","rock"]
 const [play,setPlay] = useState("")
 const [randomPick,setRandomPick] = useState("")
 const [result,setResult] = useState("")

  const {score,setScore} = useContext(ScoreContext)

  const playGame = (pick) => {
    setPlay(pick)
    const random = Math.floor(Math.random() * 3);
    const randomItems = pickedItems[random]
    setRandomPick(randomItems)
    if(pick === "paper") {
      if(randomItems === "scissors") {
        console.log("you lose");
        setResult("YOU LOSE")
        score>0 && setScore(pre=>pre-1)

      }else if(randomItems === "rock"){
        console.log("you win");
        setResult("YOU WIN")

        setScore(pre=>pre+1)
      }
    }else if(pick === "scissors"){
      if(randomItems === "paper"){
        console.log("you win");
        setResult("YOU WIN")

        setScore(pre=>pre+1)
      }else if(randomItems === "rock"){
        console.log("you lose");
        setResult("YOU LOSE")

        score>0 && setScore(pre=>pre-1)

      }
    }else if(pick === "rock"){
      if(randomItems === "paper"){
        console.log("you lose");
        setResult("YOU LOSE")

        score>0 && setScore(pre=>pre-1)

      }else if(randomItems === "scissors"){
        console.log("you win");
        setResult("YOU WIN")

        setScore(pre=>pre+1)
      }
    }

  }
    
  
  return (
    <>
    {!play?<div className='flex justify-center mt-36 relative '>
      <div>
      <div onClick={()=>playGame("paper")} className='absolute hover:shadow-2xl hover:shadow-white cursor-pointer -top-[60px] md:-top-[85px] border-[20px] border-[#2A45C2] left-[160px] md:left-[109px] bg-white rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] flex justify-center items-center'>
        <img src='/images/icon-paper.svg' alt='' className=''/>
      </div>
      <div onClick={()=>playGame("scissors")} className='absolute hover:shadow-2xl hover:shadow-white cursor-pointer -top-[60px] md:-top-[85px] border-[20px] border-[#EB9F0E]  right-[160px] md:right-[109px] bg-white rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] flex justify-center items-center'>
        <img src='/images/icon-scissors.svg' alt='' className=''/>
      </div>
      <div onClick={()=>playGame("rock")} className='absolute hover:shadow-white hover:shadow-2xl cursor-pointer -bottom-[85px] border-[20px] border-[#9D1634] left-1/2 transform -translate-x-1/2 bg-white rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] flex justify-center items-center'>
        <img src='/images/icon-rock.svg' alt='' className=''/>
      </div>

      <div className='hidden md:block'>
        <svg xmlns="http://www.w3.org/2000/svg" width="306" height="277" viewBox="0 0 306 277" fill="none">
        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M292.5 7.5C292.5 7.5 0.895138 7.5 5.57388 7.5C10.2526 7.5 153.466 261.5 153.466 261.5L292.5 7.5Z" stroke="black" stroke-width="15"/>
        </svg>
      </div>

      <div className='block md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="207" height="190" viewBox="0 0 207 190" fill="none">
        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M194 8C194 8 2.98358 8 6.0484 8C9.11322 8 102.925 174 102.925 174L194 8Z" stroke="black" stroke-width="15"/>
        </svg>
      </div>

      </div> 
      
    </div>
    :
    <div>
      <div className='grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 justify-items-center content-center md:mt-36 mt-20 text-center text-white'>
        <div>
          <p className='mb-10 '>YOU PICKED</p>
          <div className= {`hover:shadow-2xl hover:shadow-white cursor-pointer  border-[20px] ${play==="paper" ? "border-[#2A45C2]": play==="scissors" ? "border-[#EB9F0E]" : "border-[#9D1634]"}   bg-white rounded-full  w-[130px] h-[130px] md:w-[200px] md:h-[200px] flex justify-center items-center`}>
          <img src={`/images/icon-${play}.svg `}alt='' className=''/>
        </div>
        </div>

        <div className='md:flex justify-center items-center hidden '>
          <div>
          <p className='text-[56px] font-bold'>{result}</p>
          <div onClick={()=>setPlay("")} className='border-[1px] cursor-pointer rounded-lg hover:bg-white hover:text-[#DB2E4D]  border-[#fff] px-2 py-3 flex justify-center items-center'>
            <p>PLAY AGAIN</p>
          </div>
          </div>
        </div>

        <div>
          <p className='mb-10'>THE HOUSE PICKED</p>
          <div  className={` hover:shadow-2xl hover:shadow-white cursor-pointer  border-[20px] ${randomPick==="paper" ? "border-[#2A45C2]": randomPick==="scissors" ? "border-[#EB9F0E]" : "border-[#9D1634]"}    bg-white rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] flex justify-center items-center`}>
          <img src={`/images/icon-${randomPick}.svg `}alt='' className=''/>
        </div>
        </div>

      </div>
      <div className='flex justify-center items-center md:hidden text-white mt-10'>
          <div>
          <p className='text-[56px] font-bold'>{result}</p>
          <div onClick={()=>setPlay("")} className='border-[1px] cursor-pointer rounded-lg hover:bg-white hover:text-[#DB2E4D]  border-[#fff] px-2 py-3 flex justify-center items-center'>
            <p>PLAY AGAIN</p>
          </div>
          </div>
        </div>
    </div>}
    </>
  )
}

export default Home