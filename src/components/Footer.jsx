import {Socials, About} from '../utils/Constants'
import { IconButton } from "@mui/material"
const Footer = () => {
  return (
 <footer className='w-full h-[40vh] border-t flex items-center justify-around border-gray-200 mt-7 mx-auto bg-slate-500 text-white opacity-80'>
    <div className='flex justify-center gap-3 mb-4'> 
    {Socials.map((item,index)=>{
      return <IconButton key={index}>
        {item.logo}
      </IconButton>
    })}
    </div>
    <div className='flex flex-col justify-center items-center md:ml-[25%]'>
      <h1 className='mb-3 text-lg font-bold'>About</h1>
      {
        About.map((item, index)=>{
           return <p className='cursor-pointer' key={index}>{item}</p>
        })
      }

    </div>
    <div className='ml-[20%]'>
      <h1>Got any questions?</h1>
      <p> <a href='#'>georgenathan010@gmail.com</a></p>
    </div>


 </footer>
  )
}

export default Footer 