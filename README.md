
#Bling a Bot not a DIV

## Background

Welcome to this event where we will give you a quick introduction to Nodebots. Hardware will meet software, Arduino will meet Johnny-Five

## Getting started

	A basic Nodebots introduction is available here: http://node-ardx.org/	
	This is a good starting point, we will use that to get going. 

	Clone this repository: https://github.com/NodebotsCapeTown/NodeCptMeetupAug2014 

	### Setup Arduino
	
	Typically you would need to setup your Arduino for Nodebots by loading Firmata on there. If you use your own Arduino for Nodebots you will need to do that. If you use one of the supplied Arduinos it will already have Firmata on there.

	To setup your Arduino follow these (setup steps)[http://node-ardx.org/]

	### Install packages

	You will need johnny-five and the keypress packages installed.

	In the code folder do this:

	```npm install johnny-five```
	```npm install keypress```

	### Connect Soccerbot

	Now connect the Soccerbot to your laptop with the supplied USB cable.

	In the code folder there will be a file called soccerbot-basic.js

	Try to run it using:

		```node soccerbot-basic.js```

	You should now be able to control the Soccerbot with your up/down arrows on your keyboard.

	### Make it wireless:

	To make your Soccerbot wireless you will need to attach the supplied Bluetooth module and power it using a 9V battery.

	You will need to pair with your laptop, in the way specific to your OS.
	Once paired you will need to configure the port setup in the code. All the bluetooh modules have a preconfigured name - see the names on the sticker on the Soccerbot

	The typical setup look like this:

	On OSX:

	```
	board = new five.Board({
  		port : "/dev/tty.VivaBot-DevB"
	});
	```

	On windows:

	```
	board = new five.Board({
  		port : "/com9"
	});
	```

	Ubuntu (bluetooth setup) [https://gist.github.com/missinglink/5a290e5cb48801fb1b9a]

	All of the above setting is environment specific.


## Bling it on
	
	* Pimp your soccerbot - (bling and beep instructions)[./assignments/Bling and peep.md]
	* For the more adventurous - (Pan & Tilt)[./assignments/Pan and Tilt fun.md]

## Challenges

Program your Soccerbot to:

 	* navigate its way around 4 cones in a clockwise direction and back.
 	* zig-zag it way through 5 cones. 




