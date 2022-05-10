import React from "react"
import "./App.css"
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            color: ["white","white","white","white"],
        }
        this.smallTimeClick = this.smallTimeClick.bind(this)
        this.partyDj = this.partyDj.bind(this)
    }
    
    smallTimeClick(){
        if(this.state.color[0]=== "white"){
            this.setState(prevState => {
                return {
                    color: prevState = ["black","black","black","black"]
                }
            })
        }else{
           this.setState(prevState => {
               return {
                   color: prevState = ["white","white","white","white"]
               }
           }) 
        }
    }
    partyDj(){
        this.setState(prevState => {
            return {
                color: prevState=["purple","purple"]
            }
        })
    }
        
    render(){
        return (
            <div>
                <div className="grid">
                    <div className="gridBox" style={{backgroundColor:this.state.color[0]}}></div>
                    <div className="gridBox" style={{backgroundColor:this.state.color[1]}}></div>
                    <div className="gridBox" style={{backgroundColor:this.state.color[2]}}></div>
                    <div className="gridBox" style={{backgroundColor:this.state.color[3]}}></div>
                </div>

                <div>
                    <button className="Btn" onClick= {this.smallTimeClick}>DJ Small</button>
                    <button className="Btn" onClick= {this.partyDj}> Party DJ</button>
                </div>
            </div>

            
        )
    }

    
}

export default App






/*if (this.state.color[0] === "white") {
    this.setState({color:["black","black","black","black"]})
} else {
    this.setState({color:["white","white","white","white"]})
}

*/