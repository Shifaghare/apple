import React, { useState } from 'react'
import './apple.css'

const Abc = () => {
    const [shifa,setShifa] = useState([{name:"shifa",no : 123},{name:'yash',no:345},{name:'abv',no:890}])
    const [buttonactive,setButtonActive]=useState(false)

    function Changeactivebutton(){
        setButtonActive(!buttonactive)
        console.log(buttonactive)
    }

    const ButtonClass = buttonactive ? 'active-btn' : 'inactive-btn'
  return (
    <div>
      {shifa.map((value,index)=>(
        <div key={index}>
            <div>{index}
                {value.name}</div>
            <div>{value.no}</div>
            <hr />

        </div>
      ))}

      <div style={{width:'700px',height:'auto' ,display:'flex',flexWrap:"wrap",justifyContent:'space-evenly',border:'1px solid green'}}>
        <div style={{width:'200px',height:'200px',border:"1px solid red"}}></div>
        <div style={{width:'200px',height:'200px',border:"1px solid red"}}></div>
        <div style={{width:'200px',height:'200px',border:"1px solid red"}}></div>
        <div style={{width:'200px',height:'200px',border:"1px solid red"}}></div>
        <div style={{width:'200px',height:'200px',border:"1px solid red"}}></div>
        <div style={{width:'200px',height:'200px',border:"1px solid red"}}></div>

      </div>



      <button onClick={Changeactivebutton}>shifa</button>
      <div className={ButtonClass}>

        
      </div>
    </div>
  )
}

export default Abc
