#Pan and Tilt fun.

Control the servos on the Pan & Tilt kit and use the attached Ultrasonic sensor to measure distance.
The Pan & Tilt kit have 2 servos that one use to move it around.

##Background

Here are some usefull links to get you going with servos and the Ultrasonic sensor.

*Servos*

	*(A basic servo example)[http://node-ardx.org/exercises/4]
	*(The Servo API)[https://github.com/rwaldron/johnny-five/wiki/Servo]
	*(Move a Servo using the keyboard)[https://github.com/rwaldron/johnny-five/blob/master/docs/servo-keypress.md]

Load more examples at: https://github.com/rwaldron/johnny-five/blob/master/docs

*Ping*

The Ultrasonic sensor we are using, HC-SR04, is called a Ping object in Johnny-Five.

	*(A basic Ping example)[https://github.com/rwaldron/johnny-five/blob/master/docs/ping.md]
	*(The Ping API) https://github.com/rwaldron/johnny-five/wiki/Ping]

##Project ideas

###Find the closest object in the room:
	* Sweep the sensor across the room
	* Measure the distance using the Ping object
	* Stop if an object is closer than 1 meter

###Integrate it with Socket.io:

	* Display the distance in the browser
	* Control the panning and tilting from the browser using sliders
	* Measure the distance by clicking a button in the browser

Feel free to try anything interesting. Integrate it with the HTML5 canvas maybe. What else...