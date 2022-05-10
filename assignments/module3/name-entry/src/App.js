import React, {Component} from "react"

class App extends Component {
    constructor(){
        super()
        this.state = {
            wholeName:"",
            nameList:[]
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
    handleButtonClick(e){
        e.preventDefault()
      this.setState(prevState => ({
          nameList: [...prevState.nameList ,this.state.wholeName]
      }))
    }

    render(){
        return (
            <form>
                <input
                name="wholeName"  
                value={this.state.wholeName} 
                placeholder= "Name" 
                onChange={this.handleChange}
                />
                <br />
                <h1>{this.state.wholeName}</h1>
                <br />
                <button onClick={this.handleButtonClick}>Add to list</button>
                <br />
                <div name="nameList">{this.state.nameList}</div>
            </form>
        )
    }
}

export default App