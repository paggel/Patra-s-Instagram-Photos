$(document).ready(function(){
		$.ajax({
		    url :"https://api.instagram.com/v1/media/search?access_token=MYTOKEN&lat=38.225177&lng=21.747078&distance=5000",
		    jsonp: "callback",
		    dataType :"jsonp",
		    success : function(instagramres){
		    		for(i=0; i<instagramres.data.length; i++){
		    			var photolink = instagramres.data[i].images.standard_resolution.url;
		    			console.log("OK");

		    		}
		    		$("#0").append("<img src="+instagramres.data[0].images.standard_resolution.url+">","<h2>"+instagramres.data[0].user.username+"</h2>");
		    		$("#1").append("<img src="+instagramres.data[1].images.standard_resolution.url+">","<h2>"+instagramres.data[1].user.username+"</h2>");
		    		$("#2").append("<img src="+instagramres.data[2].images.standard_resolution.url+">","<h2>"+instagramres.data[2].user.username+"</h2>");
		    		$("#3").append("<img src="+instagramres.data[3].images.standard_resolution.url+">","<h2>"+instagramres.data[3].user.username+"</h2>");
		    		$("#4").append("<img src="+instagramres.data[4].images.standard_resolution.url+">","<h2>"+instagramres.data[4].user.username+"</h2>");
		    		$("#5").append("<img src="+instagramres.data[5].images.standard_resolution.url+">","<h2>"+instagramres.data[5].user.username+"</h2>");
		    		$("#6").append("<img src="+instagramres.data[6].images.standard_resolution.url+">","<h2>"+instagramres.data[6].user.username+"</h2>");
		    		$("#7").append("<img src="+instagramres.data[7].images.standard_resolution.url+">","<h2>"+instagramres.data[7].user.username+"</h2>");
		    		$("#8").append("<img src="+instagramres.data[8].images.standard_resolution.url+">","<h2>"+instagramres.data[8].user.username+"</h2>");
		    		$("#9").append("<img src="+instagramres.data[9].images.standard_resolution.url+">","<h2>"+instagramres.data[9].user.username+"</h2>");
		    		$("#10").append("<img src="+instagramres.data[10].images.standard_resolution.url+">","<h2>"+instagramres.data[10].user.username+"</h2>");
		    		if (instagramres.data[11].images.standard_resolution.url != null){
		    			$("#11").append("<img src="+instagramres.data[11].images.standard_resolution.url+">","<h2>"+instagramres.data[11].user.username+"</h2>");
		    		}
		    		else{
		    			console.log("Error");
		    		}
		    		if (instagramres.data[12].images.standard_resolution.url != null){
		    			$("#12").append("<img src="+instagramres.data[12].images.standard_resolution.url+">","<h2>"+instagramres.data[12].user.username+"</h2>");
		    		}
		    		else{
		    			console.log("Error");
		    		}
					if (instagramres.data[12].images.standard_resolution.url != null){
						$("#13").append("<img src="+instagramres.data[13].images.standard_resolution.url+">","<h2>"+instagramres.data[13].user.username+"</h2>");
					}
					else{
						console.log("Error");
					}
					if (instagramres.data[12].images.standard_resolution.url != null){
						$("#14").append("<img src="+instagramres.data[14].images.standard_resolution.url+">","<h2>"+instagramres.data[14].user.username+"</h2>");
					}
					else{
						console.log("Error");
					}
					if (instagramres.data[12].images.standard_resolution.url != null){
						$("#15").append("<img src="+instagramres.data[15].images.standard_resolution.url+">","<h2>"+instagramres.data[15].user.username+"</h2>");
					}
					else {
						console.log("Error");
					}
		    		

		    		console.log("2 - OK");
		    }
	});
	    
});
