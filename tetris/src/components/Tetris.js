
import React from 'react'
import {makeStyles} from "@material-ui/core"
import Stage from './Stage'
import Display from './Display'
import Start from './Start'
import { createStage } from '../GameHelper'

const useStyles = makeStyles((theme)=>({

}))

const Tetris = () => {
  const classes = useStyles()

  
  return (
    <>
      <Stage
        stage={createStage()}
      />
      <aside>
      <div className={classes}>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
      <Start/>
      </aside>
    </>
  )
}

export default Tetris
