// traduire du Jquery au vanilla

var classes_to_remove = ["look-right","look-left", "look-down", "look-up","look-down-right","look-down-left","look-up-right","look-up-left"];

function removeClasses () {
	for(var x = 0;x<classes_to_remove.length;x++) {
		document.querySelector(".head").classList.remove(classes_to_remove[x]);	
		// document.querySelector(".behind").classList.remove(classes_to_remove[x]);		
		document.querySelector(".neck").classList.remove(classes_to_remove[x]);
	}
}

function direction(e) {
	//look left
	if( e.clientX<= window.innerWidth/2) { 
		removeClasses();
		document.querySelector(".head").classList.add("look-left");		
		// document.querySelector(".behind").classList.add("look-left");		
		document.querySelector(".neck").classList.add("look-left");
	}
 	//look right
	if( e.clientX >= (window.innerWidth-(window.innerWidth/2))) { 
		removeClasses();

		document.querySelector(".head").classList.add("look-right");		
		// document.querySelector(".behind").classList.add("look-right");		
		document.querySelector(".neck").classList.add("look-right");
	}
  	//look down
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5))) {
		removeClasses();

		document.querySelector(".head").classList.add("look-down");		
		// document.querySelector(".behind").classList.add("look-down");		
		document.querySelector(".neck").classList.add("look-down");
	}

	// look up  
	if( e.clientY <= ((window.innerHeight/2.5))) { 
		removeClasses();

		document.querySelector(".head").classList.add("look-up");		
		// document.querySelector(".behind").classList.add("look-up");		
		document.querySelector(".neck").classList.add("look-up");
	}

	// look down right 
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) { 
		removeClasses();

		document.querySelector(".head").classList.add("look-down-right");		
		// document.querySelector(".behind").classList.add("look-down-right");		
		document.querySelector(".neck").classList.add("look-down-right");
	}

	// look down left
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
		removeClasses();

		document.querySelector(".head").classList.add("look-down-left");		
		// document.querySelector(".behind").classList.add("look-down-left");		
		document.querySelector(".neck").classList.add("look-down-left");
	}

	// look up right 
	if( e.clientY <= ((window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) { 
		removeClasses();

		document.querySelector(".head").classList.add("look-up-right");		
		// document.querySelector(".behind").classList.add("look-up-right");		
		document.querySelector(".neck").classList.add("look-up-right");
	}

	// look down left
	if( e.clientY <= ((window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
		removeClasses();

		document.querySelector(".head").classList.add("look-up-left");		
		// document.querySelector(".behind").classList.add("look-up-left");		
		document.querySelector(".neck").classList.add("look-up-left");
	}

	if( e.clientX >  window.innerWidth/3 &&  e.clientX < (window.innerWidth - (window.innerWidth/3)) && 
	 e.clientY >  window.innerHeight/2.5 &&  e.clientY < (window.innerHeight - (window.innerHeight/2.5)) ) {
		removeClasses();
	}
}
window.addEventListener("mousemove", function (e) {
  	direction(e);
})