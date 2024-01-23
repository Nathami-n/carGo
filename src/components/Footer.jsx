import {Socials} from '../utils/Constants'
import { IconButton } from "@mui/material"

const Footer = () => {
  return (
 <footer className='w-full h-[40vh] flex justify-between items-center text-white'>
    <div> 
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