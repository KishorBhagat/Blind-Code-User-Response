import React, { useEffect, useRef, useState } from 'react'

const Contestants = ({ contestData, currentContestant, setCurrentContestant }) => {

  const [selectedIndex, setSelectedIndex] = useState(1);

  const ref = useRef(null);

  const handleClick = (contestant, e) => {
    setCurrentContestant(contestant);
    console.log(e.currentTarget.id)
  }

  const handleOnClick = (contestant, idx) => {
    console.log(contestData[0])
    setCurrentContestant(contestant);
    setSelectedIndex(idx)
  }
  


  return (
    <div className='contestants'>
      <div className='container'>
        <div className='row heading'>
          {/* <div className='data'>C</div> */}
          <div className='sno'>Sno.</div>
          <div className='data'>Name</div>
          <div className='data'>Regd no</div>
          <div className='data'>Branch</div>
          <div className='data'>View count</div>
        </div>
        {/* <div className={`contestant row`}>
          <div className='sno'>.</div>
          <div className='data'>Sample</div>
          <div className='data'>Sample</div>
          <div className='data'>Sample</div>
          <div className='data'>Sample</div>
        </div> */}
        {
          contestData.map((contestant, idx) => {
            return (
              <div className={`contestant row`} 
              id={idx+1}
              onClick={() => handleOnClick(contestant, idx+1)} 
              key={contestant._id} 
              ref={ref}
              style={{backgroundColor: `${idx+1===selectedIndex ? "#fff": "transparent"}`, color: `${idx+1===selectedIndex ? "#000": "#fff"}`}}
              >
                {/* <div className='data'><input type="checkbox"/></div> */}
                <div className='sno'>{idx + 1}.</div>
                <div className='data'>{contestant.name}</div>
                <div className='data'>{contestant.regdNo}</div>
                <div className='data'>{contestant.branch}</div>
                <div className='data'>{contestant.viewCount}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Contestants