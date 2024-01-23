import {Socials} from '../utils/Constants'
import { IconButton } from "@mui/material"

const Footer = () => {
  return (
 <footer className='w-full h-[40vh] flex justify-between items-center text-white border-t border-gray-200 mt-7 mx-auto'>
    <div className='border  border-red-400  flex flex-col md:flex-row'> 
    {Socials.map((item,index)=>{
      return <IconButton key={index}>
        {item.logo}
      </IconButton>
    })}
    </div>


 </footer>
  )
}

export default Footer 