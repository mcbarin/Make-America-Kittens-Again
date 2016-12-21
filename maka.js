// maka.js - part of make america kittens again
// by Tom Royal 
// tomroyal.com


// Image source is changed.

function makanow(){

	// called on page load. Searches all img alt text and srcs for the strings in blacklist, replaces with random photos
	var pagepics=document.getElementsByTagName("img"), i=0, img;	
	var blacklist = ["trump","recep", "tayyip", "erdogan", "erdoğan", "rte","binali", "gökçek", "gokcek", "basbakan", "başbakan"];
	while (img = pagepics[i++])
	{	
		blacklist.forEach(function(blist) {	
			var alttext = String(img.alt);
			alttext = alttext.toLowerCase();
			var imgsrc = String(img.src);
			imgsrc = imgsrc.toLowerCase();
			if ((alttext.indexOf(blist) != -1) || (imgsrc.indexOf(blist) != -1)){
				var randk = Math.floor(Math.random() * 39) + 1
				img.src = 'http://s3.eu-central-1.amazonaws.com/molocatebucket/random-photos/'+ randk + '.jpg';
				img.alt = 'Photo by Tayyipless';
			};
		});		
	}	    
};

// add listener
document.addEventListener('DOMContentLoaded', makanow(), false);
