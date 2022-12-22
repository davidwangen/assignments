import React, {useState} from "react"

function Background(){
  const [background, setBackground] = useState({
    color1:"#FF0000",
    color2:"#0000FF",
    angle: 45
  })

  function displayColor(event) {
    const { name, value } = event.target;
    setBackground((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return(
    <div>
      <div 
        className="background" 
        style={{
          backgroundImage: `linear-gradient(${background.angle}deg, ${background.color1} , ${background.color2})`,
          width: '600px',
          height: '500px',
          border: 'solid',
          margin: '1px',
          display: 'flex'
        }}>
      
      </div>

      <textarea readOnly
         value= {`
          background: linear-gradient(${background.angle}deg, ${background.color1} , ${background.color2})
          -moz-background: linear-gradient(${background.angle}deg, ${background.color1} , ${background.color2})
          -webkit: linear-gradient(${background.angle}deg, ${background.color1} , ${background.color2})
          `} 
         style={{
          width: '600px',
          height:'100px', 
          border: 'solid',
        }}>  
      </textarea>
     
      <h2>Pick your colors</h2>

      <div>
        <h3>Color1 </h3>
        <input type="color" name="color1" onChange={displayColor}/>
        <h3>Color2</h3>
        <input type="color" name="color2" onChange={displayColor}/>
        <h3>Angle</h3>
        <input type ="number" name= "angle" onChange={displayColor}/>
        
      </div>
    </div>
  )
}


export default Background;