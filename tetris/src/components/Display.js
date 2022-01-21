
import React from 'react'
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({

}))

const Display = ({gameOver,text}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes}>
        {text}
      </div>
    </>
  )
}

export default Display
