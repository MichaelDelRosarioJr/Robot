import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.props.selectedBots.map(bot => {
				      return <BotCard 
				  					    bot = {bot} 
									      key ={bot.id}
                        clickBots = {this.props.removeBots}/>})
                        }
              
          </div>
          <button onClick = {(event) => this.props.goToBattleClick(event)}>Go to Battle</button>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
