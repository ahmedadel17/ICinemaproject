import React from 'react'
import Timelinecomponent from '../components/Timelinecomponent';
import Controltop from '../components/Controltop';
const Timeline = () => {
  return (
    <>
    <Controltop entry='movies_about' left='Movies' right='Timeline'/>
  <Timelinecomponent/>
    </>
  )
}

export default Timeline