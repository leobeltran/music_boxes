$(document).ready(function(){

$(".box").mousedown(function(){
		playNote(this.id);
});

	function playNote(letter){
	document.getElementById(letter+"Audio").currentTime=0;
	document.getElementById(letter+"Audio").play();
	};

		var eNote = document.getElementById("eAudio");

$("#e").mousedown(function(){
	eNote.currentTime=0;
	eNote.play();
	});

		var fNote = document.getElementById("fAudio");

$("#f").mousedown(function(){
	fNote.currentTime=0;
	fNote.play();
	});

		var gNote = document.getElementById("gAudio");

$("#g").mousedown(function(){
	gNote.currentTime=0;
	gNote.play();
	});

		var aNote = document.getElementById("aAudio");

$("#a").mousedown(function(){
	aNote.currentTime=0;
	aNote.play();
	});

	var bNote = document.getElementById("bAudio");

$("#b").mousedown(function(){
	bNote.currentTime=0;
	bNote.play();
	});


	var cNote = document.getElementById("cAudio");

	var dNote = document.getElementById("dAudio");



		$(window).keypress(function(letter) {
			var key= letter.keyCode
			if (key === 97)
		{
			cNote.currentTime=0;
			cNote.play();
		}
			else if(key===115)
			{
				dNote.currentTime=0;
				dNote.play();
			}

			else if(key===100)
			{
				eNote.currentTime=0;
				eNote.play();
			}

			else if(key===102)
			{
				fNote.currentTime=0;
				fNote.play();
			}

			else if(key===103)
			{
				gNote.currentTime=0;
				gNote.play();
			}

			else if(key===104)
			{
				aNote.currentTime=0;
				aNote.play();
			}

			else if(key===106)
			{
				bNote.currentTime=0;
				bNote.play();
			}

})
});
