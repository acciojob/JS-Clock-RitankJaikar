//your code here
let hourHand= document.querySelector(".hour-hand");
let minHand= document.querySelector(".min-hand");
let secondHand= document.querySelector(".second-hand");
let hands= document.querySelectorAll(".hand");

function setPosition() {
	let time= new Date();
	let hours= time.getHours();  //0-23
	let minutes= time.getMinutes();  //0-59
	let seconds= time.getSeconds();  //0-59
	
	//in deg: 0-359
	let secondsDeg= Math.floor((seconds / 60) * 360 + 90);
	let minutesDeg= Math.floor((minutes / 60) * 360 + 90);
	let hoursDeg= Math.floor(((hours % 12) / 12) * 360 + 90 + (minutes / 60) * 30);
	console.log(hoursDeg, minutesDeg, secondsDeg);

	if(seconds===0) {
		hands.forEach(hand => {
			hand.style.transition= "none";
		})
	}
	else {
		hands.forEach(hand => {
			hand.style.transition= "all 0.05s";
			hand.style.transitionTimingFunction= "cubic-bezier(0.1, 2.7, 0.58, 1)";
		})
	}

	hourHand.style.transform= `rotate(${hoursDeg}deg)`;
	minHand.style.transform= `rotate(${minutesDeg}deg)`;
	secondHand.style.transform= `rotate(${secondsDeg}deg)`;
}

setPosition();

setInterval(() => {
	setPosition();
}, 1000);



