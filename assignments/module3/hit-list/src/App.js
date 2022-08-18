import React, {Component} from "react"
import ListItem from "./ListItem"

class App extends Component {
  constructor(){
    super()
    this.state ={
      hitList:[]
    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
          this.setState({
            hitList:data
          })
        })
}

  render(){
    //console.log(this.state.hitList)
    const theList = this.state.hitList.map((person , index) =>  <ListItem key={index} person={person}/>)
    return (
      
      <div className="hit-list">
        {theList}
      </div>
    )
  }

}



export default App