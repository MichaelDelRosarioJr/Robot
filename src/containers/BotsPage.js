import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super()

    this.state = {
      bots: [],
      selectedBots: [],
      robotSelected: null
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy selectedBots = {this.state.selectedBots} 
        removeBots = {this.removeBots} 
        goToBattleClick = {this.goToBattleClick}/>
        {this.state.robotSelected === null ? <BotCollection bots = {this.state.bots} selectBot={this.selectBot}/> 
            : <BotSpecs bot = {this.state.robotSelected} deselectBot = {this.deselectBot} addBots ={this.addBots}/>}
        
      </div>
    );
  }

  //This functions adds a robot to robotSeletected state and will display the BotSpecs form
  selectBot = (bot) => {
    console.log("Add Robot", bot.name)

    this.setState({
      robotSelected: bot
    })
  }

  //Clear the selected robot and return to the BotCollection forms
  deselectBot = (event) => {
    event.preventDefault()
    this.setState({
      robotSelected: null
    })

    console.log("Pick me... =(")
  }

  //Add the selected robot to the YourBotArmy form and selectedBots array
  addBots = (event, bot) => {
    //console.log(id)
    event.preventDefault()

    //Player can only select up to 5 robots
    if (this.selectedBots !== null && this.state.selectedBots.length > 4)
    {
      return
    }
      else {
            if(this.state.selectedBots.includes(bot))
          return
        this.setState({
          bots: this.state.bots.filter(thisBot => thisBot.id !== bot.id),
          selectedBots: this.state.selectedBots.concat(bot),
          robotSelected: null
        })
        //TEST: Print robot length
        // console.log(this.state.selectedBots.length)
      }
    
  }

  //Remove the robot from selectedBots array and display robot on BotCollection form
  removeBots = (removeBot) => {

    this.setState({
      bots: this.state.bots.concat(removeBot),
      selectedBots: this.state.selectedBots.filter(bot => bot.id !== removeBot.id)
      })
  }

  //Go to battle when there are 5 robots in the player's army
  goToBattleClick = (event) => {
    event.preventDefault()

    //Go to battle if robot army is at 5
    if (this.state.selectedBots.length === 5) {
      console.log("To Battle!")
    }
    else {
      console.log('We need more robots!', this.state.selectedBots.length)
    }
  }

  componentDidMount() {
    //Get Robots
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then((botsArray) => { 
      this.setState({ 
        bots: botsArray
      })
      //console.log(this.state.bots) 
      return "Completed"}
    )}
}

export default BotsPage;
