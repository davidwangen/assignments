import React, {useState} from "react"

function Background(){
  const [background, setBackground] = useState({
    
    
    
  })
  
  return(
    <div>
      <div 
        className="background" 
        style={{
          backgroundColor: 'blue',
          width: '600px',
          height: '600px',
          border: 'solid',
          margin: '1px',
          display: 'flex'
        }}>
        
      </div>

      <div 
        className="color-code"
        style={{
          width: '600px',
          height:'100px', 
          border: 'solid',
        }}>  
        This is where the color code will go
      </div>
     
      <h2>Pick your colors</h2>

      <div>
        <h3>Color1</h3>
        <input type="color" className="color1"/>
        <h3>Color2</h3>
        <input type="color" className="color2"/>
      </div>
    </div>
  )
}

  

export default Background