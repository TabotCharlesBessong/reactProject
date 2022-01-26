
import React from 'react'
// import {makeStyles} from "@material-ui/core"
import Cell from './Cell'

// const useStyles = makeStyles((theme)=>({

// }))

const Stage = ({stage}) => {
  // const classes = useStyles()

  return (
    <>
      <Cell/>
      {/* {stage.map(row => row.map((cell,x)=> <Cell key={x} type={cell[0]} /> ))} */}
    </>
  )
}

export default Stage
