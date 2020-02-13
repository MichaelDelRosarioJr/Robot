import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	constructor(props) {
		super(props)

		this.state  = {	
		}
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {this.props.bots.map(bot => {
				  return <BotCard 
				  					bot = {bot} 
									key ={bot.id} 
									clickBots = {this.props.addBots}/>
			  })}

    		</div>
  	  </div>
  	);
  }

  onClickBot =( event => {

  })

};

export default BotCollection;
