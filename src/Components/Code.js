import React, { useEffect, useRef } from 'react'

const Code = ({currentContestant}) => {
  const ref = useRef(null);
  useEffect(() => {
    if(currentContestant.code === undefined){
      ref.current.value = "Loading...";

    } 
    else {
      if(currentContestant.code == ""){
        ref.current.value = "DISQUALIFIED";
      }
      else {
        ref.current.value = currentContestant.code;
      }
    }
  }, [currentContestant])
  
  return (
    <div className='code'>
        {
          <textarea className='' ref={ref} spellCheck={false} readOnly="on">
            {/* {currentContestant.code} */}
          </textarea>
        }
    </div>
  )
}

export default Code