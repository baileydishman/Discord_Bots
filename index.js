// Author: Bailey Dishman
// File: index.js
// File Created: 10/27/2019

const Discord = require('discord.js');
const GabeBot = new Discord.Client(); 

const response = new Array
(

	{
		
		'id' : 0,
		'trigger' : 'ps3',
		'quote' : "The PS3 is a total disaster on so many levels, I think it's really clear that Sony lost track of what customers and what developers wanted."
		
	},
	{

		'id' : 1,
		'trigger' : 'crab',
		'quote' : "I've always wanted to be a giant space crab."

	},
	{
	
		'id' : 2,
		'trigger' : 'half-life',
		'quote' : 'No'
	
	}

);

GabeBot.on('message', (message) => 
{
	
	// IF previous message is NOT from Gabebot, proceed
	if(message.author.bot === false)
	{
		
		let messageContent = message.content;
		messageContent = messageContent.toLowerCase();
		
		for(let i = 0; i < response.length; i++)
		{
			
			if(messageContent.includes(response[i]['trigger']))
			{
			
				message.channel.send(response[i]['quote']);
				
			}
		
		}
		
	}
	
});

GabeBot.login('ENTERTOKENHERE');
