$(function(){
			var sticker = $("#wrap nav div").not("#mixer");
			var mixer = $("#mixer");
			var mix_btn = $("#mix_btn");
			var product = $("#select_juice");
			var x_btn = $("#select_juice span");

			sticker.draggable({
		      drag: function( event, ui ) {
		        txt = $( this ).text();
		      }
		    });
			mixer.droppable({
		      drop: function( event, ui ) {
		        $( this ).find( "p" ).append(txt);
		      }
		    });
		    
		    mix_btn.click(function(){
		    	var vegetables = $("p#vegetables").text();
		    	if(vegetables=="포도가지" || vegetables=="가지포도"){
		    		alert("면역력장군 보라돌이 제품을 선택하였습니다.");
		    		product.css({"background-image":"url(img/juice/juice_img5.png","display":"block"});
		    		// product.show();
		    		setTimeout(function(){
		    			location.reload();
		    		},8000);
		    		
		    	}else if(vegetables=="당근오렌지" || vegetables=="오렌지당근"){
		    		alert("힘내라 오란토끼씨 제품을 선택하였습니다.");
		    		product.css({"background-image":"url(img/juice/juice_img3.png","display":"block"});
		    		// product.show();
		    		setTimeout(function(){
		    			location.reload();
		    		},8000);
		    	}else{
		    		alert("해당 제품은 준비중입니다.");
		    		location.reload();
		    	}
		    })
		    x_btn.click(function(){
		    	location.reload();
		    })
		})