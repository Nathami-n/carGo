import { IconButton } from "@mui/material"

const CustomButton = ({title, containerStyles, handleClick, btnIcon}) => {

  return (
    <button
        disabled={false}
        type = {'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
            <div>
              <IconButton>
              {btnIcon && btnIcon}
              </IconButton>
            </div>
    </button>
  )
}

export default CustomButton