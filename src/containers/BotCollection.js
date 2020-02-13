import React from "react";
import BotCard from "../components/BotCard";

function BotCollection({bots, selectBot}) {
  //your code here


  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {bots.map(bot => {
				  return <BotCard 
				  					bot = {bot} 
									key ={bot.id} 
									clickBots = {selectBot}/>
			  })}

    		</div>
  	  </div>
  	);
};

export default BotCollection;
