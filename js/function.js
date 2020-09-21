function addDot(ID) {
	var oDiv = document.getElementById(ID);
	oDiv.style.visibility = 'visible';
	oDiv.style.opacity = '100%';
};
function currentTime(){
	var vWeek,vWeek_s,vDay;
	vWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var date =  new Date();
	hours = date.getHours();
	minutes = date.getMinutes();
	if(minutes < 10) {
		minutes = '0' + minutes;
	}
	vWeek_s = date.getDay();
	document.getElementById("currentTime").innerHTML = vWeek[vWeek_s] + ' ' + hours + ":" + minutes;
};
setInterval("currentTime()", 200);