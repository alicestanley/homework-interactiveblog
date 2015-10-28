	console.log("hello");

	// function question3(){
	// 	$(".falseFact").text("true fact";
	// }

	// $("#button1").click(question3);


	function openReadmore1(){
		console.log("chicken");
		$('#showBlog1-on-click').slideDown();
		$('#readmorelink1').hide();
		$('#readlesslink1').show();
		event.preventDefault();
	}


	

	function openReadmore2(){
		console.log("next chicken");
		$('#showBlog2-on-click').slideDown();
		$('#readmorelink2').hide();
		$('#readlesslink2').show();
		event.preventDefault();
	}


	function openLearnmore(){
		console.log("next chicken");
		$('#showLearnMore-on-click').slideDown();
		$('.learnmorelink').hide();
		event.preventDefault();
	}


	$('#readmorelink1').click(openReadmore1)
	$('#readmorelink2').click(openReadmore2)
	$('.learnmorelink').click(openLearnmore)
