$(function() {
		var sticker = $("#wrap nav div").not("#mixer"); //not(선택자): 선택자만 빼고 의미
		var mixer = $("#mixer");
		var mix_btn = $("#mix_btn");
		var vegetables = $("p#vegetables");
		var select_juice =$("#select_juice");
		var x_btn = $("#select_juice span");

		select_juice.hide();
		

	    sticker.draggable({
	      drag: function( event, ui ) {
	        txt = $( this ).text();
	    	}
	    });
	    mixer.droppable({
	      drop: function( event, ui ) {
	        $( this ).find("p").append(txt);
	      }
	    });

	    mix_btn.click(function(){
	    	var mixFruit=vegetables.text();
	    	// alert(mixFruit);
	    	if(mixFruit=="포도가지" || mixFruit=="가지포도"){
	    		alert("카카오 캐슈 제품을 선택하였습니다.");
	    		select_juice.css("background-image","url(img/juice/juice_img5.png").show();
	    		setTimeout(function(){
	    			location.reload();
	    		},5000);
	    	}else if(mixFruit=="당근오렌지" || mixFruit=="오렌지당근"){
	    		alert("진저 그로우 선택하였습니다.");
	    		select_juice.css("background-image","url(img/juice/juice_img6.png").show();
	    		setTimeout(function(){
	    			location.reload();
	    		},5000);
	    	}else{
	    		alert("해당 제품은 준비중입니다.");
	    		location.reload();
	    	}
	    })

	    x_btn.click(function(){
	    	// select_juice.hide();
	    	location.reload();
	    })

	  });