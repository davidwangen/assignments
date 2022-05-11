import React, {Component} from "react"

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            eMail:"",
            placeOfBirth:"",
            phoneNumber:"",
            favoriteFood:"",
            summary:"",
            badgeArray:[]
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
                badgeArray: [...prevState.badgeArray ,
                <h1>Badge</h1>,
                <p>Name: {this.state.firstName} {this.state.lastName} Phone: {this.state.phoneNumber}</p>,
                <p>Place of Birth: {this.state.placeOfBirth} Favorite food: {this.state.favoriteFood}</p>,
                <p>Email: {this.state.eMail}</p>,
                <p>{this.state.summary}</p> ] 
                
                
      }))
    }

    render(){
        return (
            <form>
                <input
                name="firstName"  
                value={this.state.firstName} 
                placeholder= "First Name" 
                onChange={this.handleChange}
                />
                <input
                name="lastName"  
                value={this.state.lastName} 
                placeholder= "Last Name" 
                onChange={this.handleChange}
                />
                <input
                name="eMail"  
                value={this.state.eMail} 
                placeholder= "Email" 
                onChange={this.handleChange}
                />
                <input
                name="placeOfBirth"  
                value={this.state.placeOfBirth} 
                placeholder= "Place of Birth" 
                onChange={this.handleChange}
                />
                <input
                name="phoneNumber"  
                value={this.state.phoneNumber} 
                placeholder= "Phone" 
                onChange={this.handleChange}
                />
                <input
                name="summary"  
                value={this.state.summary} 
                placeholder= "Tell us about yourself" 
                onChange={this.handleChange}
                />
                <br />
                <button onClick={this.handleButtonClick}>Submit</button>
                <br />
                <div name="badgeArray">{this.state.badgeArray}</div>
            </form>
        )
    }
}

export default App