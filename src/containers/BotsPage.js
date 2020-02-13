import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super()

    this.state = {
      bots: [],
      selectedBots: []
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy selectedBots = {this.state.selectedBots} removeBots = {this.removeBots}/>
        <BotCollection bots = {this.state.bots} addBots={this.addBots}/>
      </div>
    );
  }

  addBots = (bot) => {
    //console.log(id)
    if(this.state.selectedBots.includes(bot))
      return
    this.setState({
      selectedBots: this.state.selectedBots.concat(bot)
    })
  }

  removeBots = (removeBot) => {

    this.setState({
      selectedBots: this.state.selectedBots.filter(bot => bot.id !== removeBot.id)
      })
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
