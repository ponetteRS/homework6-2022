var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	video.autoplay = false
	video.loop = false

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Current speed is " + video.playbackRate)
	video.playbackRate *= 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	video.currentTime += 15
	 
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
		video.play()
	}

	console.log("New location " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted == true) {

		video.muted = false
		this.innerHTML = 'Mute'
	}

	else {

		video.muted = true
		this.innerHTML = 'Unmute'
	}
});

document.querySelector("#slider").addEventListener("input", function() {

	video.volume = this.value / 100
	console.log(this.value / 100)
	document.querySelector("#volume").innerHTML = video.volume * 100 
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});


document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});