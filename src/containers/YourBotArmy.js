import React from "react";
import BotCard from "../components/BotCard";

function YourBotArmy({selectedBots,removeBots,goToBattleClick}) {
  //your bot army code here...

  
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {selectedBots.map(bot => {
				      return <BotCard 
				  					    bot = {bot} 
									      key ={bot.id}
                        clickBots = {removeBots}/>})
                        }
              
          </div>
          <button onClick = {(event) => goToBattleClick(event)}>Go to Battle</button>
        </div>
      </div>
    );
};

export default YourBotArmy;
