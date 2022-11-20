var Vid = document.querySelector("#videoplayer");
var VidVolume = document.querySelector("#volume");
var MuteStatus = document.querySelector("#mute");
var Slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	Vid.play();
	VidVolume.innerHTML = Vid.volume * 100 + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	Vid.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	if (Vid.playbackRate <= 0.5) {
        alert("Video is at slowest speed!");
	}
	else {
		Vid.playbackRate *= 0.5;
        console.log("new speed: " + Vid.playbackRate);
	}
});

document.querySelector("#faster").addEventListener("click", function() {
	if (Vid.playbackRate >= 1.5) {
        alert("Video is at fastest speed!");
	}
	else {
		Vid.playbackRate /= 0.5;
        console.log("new speed: " + Vid.playbackRate);
	}
});

document.querySelector("#skip").addEventListener("click", function() {

	if (Vid.currentTime < Vid.duration-15) {
		Vid.currentTime += 15;
	}
	else {
		Vid.currentTime = 0;
		Vid.play();
	}

	console.log('current time: ' + Vid.currentTime + 'seconds');

});

document.querySelector("#mute").addEventListener("click", function() {

	if (Vid.muted == true) {
		Vid.muted = false;
		MuteStatus.innerHTML = 'Mute'
	}
	else {
		Vid.muted = true;
		MuteStatus.innerHTML = 'Unmute'
	}

});

document.querySelector("#slider").addEventListener("change", function() {

	Vid.volume = Slider.value/100;
	VidVolume.innerHTML = Vid.volume * 100 + '%';
});