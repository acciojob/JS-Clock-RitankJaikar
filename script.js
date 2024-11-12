//your code here
let hourHand= document.querySelector(".hour-hand");
let minHand= document.querySelector(".min-hand");
let secondHand= document.querySelector(".second-hand");

setInterval(() => {
	let time= new Date();
	let hours= time.getHours();  //0-23
	let minutes= time.getMinutes();  //0-59
	let seconds= time.getSeconds();  //0-59
	
	//in deg: 0-359
	let secondsDeg= Math.floor(((time.getSeconds())/60)*360) + 90;
	let minutesDeg= Math.floor(((time.getMinutes())/60)*360) + 90;
	let hoursDeg= Math.floor(((time.getHours())/24)*360) + 90 + Math.floor(minutesDeg/60);
	console.log(hoursDeg, minutesDeg, secondsDeg);

	hourHand.style.transform= `rotate(${hoursDeg}deg)`;
	minHand.style.transform= `rotate(${minutesDeg}deg)`;
	secondHand.style.transform= `rotate(${secondsDeg}deg)`;
	
}, 1000);



