import React, {Component} from "react"

class App extends Component {
    constructor(){
        super()
        this.state = {
            wholeName:"",
            nameList:["Name1", "Name2"]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleButtonClick= this.handleButtonClick.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleButtonClick(){
        
    }

    render(){
        return (
            <form>
                <input 
                type = "text" 
                value={this.state.wholeName} 
                name="wholeName" 
                placeholder= "Name" 
                onChange={this.handleChange}
                />
                <h1>{this.state.wholeName}</h1>
                <button onClick={this.handleButtonClick}>Add to list</button>
                <ol>{this.state.nameList}</ol>
            </form>
        )
    }
}

export default App