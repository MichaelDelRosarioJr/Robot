import React, {useState,useEffect} from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'
import BotSpecs from '../components/BotSpecs'

function BotsPage() {
  //start here with your code for step one
  // React.Component version
  // constructor() {
  //   super()

  //   this.state = {
  //     bots: [],
  //     selectedBots: [],
  //     robotSelected: null
  //   }
  // }

  // componentDidMount() {
  //   //Get Robots
  //   fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  //   .then(resp => resp.json())
  //   .then((botsArray) => { 
  //     this.setState({ 
  //       bots: botsArray
  //     })
  //     //console.log(this.state.bots) 
  //     return "Completed"}
  //   )}

  
  const [bots, setBots] = useState([])
  const [selectedBots, setSelectedBots] = useState([])
  const [robotSelected, setRobotSelect] = useState(null)

  useEffect( () => {
    //Get Robots
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then((botsArray) => { 
      setBots(botsArray)
      return "Completed"}
    )}
    ,[])
  
    //This functions adds a robot to robotSeletected state and will display the BotSpecs form
  const selectBot = (bot) => {
    // console.log("Add Robot", bot.name)

    setRobotSelect(bot)

    // this.setState({
    //   robotSelected: bot
    // })
  }

  //Clear the selected robot and return to the BotCollection forms
  const deselectBot = (event) => {
    event.preventDefault()

    setRobotSelect(null)

    // this.setState({
    //   robotSelected: null
    // })

    console.log("Pick me... =(")
  }

  //Add the selected robot to the YourBotArmy form and selectedBots array
  const addBots = (event, bot) => {
    //console.log(id)
    event.preventDefault()

    //Player can only select up to 5 robots
    if (selectedBots !== null && selectedBots.length > 4)
    {
      return
    }
      else {
        if(selectedBots.includes(bot))
          return

        setBots(bots.filter(thisBot => thisBot.id !== bot.id))
        setSelectedBots(selectedBots.concat(bot))
        setRobotSelect(null)

        // this.setState({
        //   bots: this.state.bots.filter(thisBot => thisBot.id !== bot.id),
        //   selectedBots: this.state.selectedBots.concat(bot),
        //   robotSelected: null
        // })
        //TEST: Print robot length
        // console.log(this.state.selectedBots.length)
      }
    
  }

  //Remove the robot from selectedBots array and display robot on BotCollection form
  const removeBots = (removeBot) => {

    setBots(bots.concat(removeBot))
    setSelectedBots(selectedBots.filter(bot => bot.id !== removeBot.id))

    // this.setState({
    //   bots: this.state.bots.concat(removeBot),
    //   selectedBots: this.state.selectedBots.filter(bot => bot.id !== removeBot.id)
    //   })
  }

  //Go to battle when there are 5 robots in the player's army
  const goToBattleClick = (event) => {
    event.preventDefault()

    //Go to battle if robot army is at 5
    if (selectedBots.length === 5) {
      console.log("To Battle!")
    }
    else {
      console.log('We need more robots!', selectedBots.length)
    }
  }

  return (
    <div>
      {/* put your components here */}
      <YourBotArmy selectedBots = {selectedBots} 
      removeBots = {removeBots} 
      goToBattleClick = {goToBattleClick}/>
      {robotSelected === null ? <BotCollection bots = {bots} selectBot={selectBot}/> 
          : <BotSpecs bot = {robotSelected} deselectBot = {deselectBot} addBots ={addBots}/>}
      
    </div>
  );

  
}

export default BotsPage;
