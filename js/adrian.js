$( document ).ready(function() {

    //Get default language of browser
    let browserLanguage = navigator.language;

    //console.log(browserLanguage);

    if (browserLanguage.indexOf("es-ES") >= 0) {
    	console.log("El lenguaje es spanish");
    }else {
    	console.log("El lenguaje es english");
    }

    $("#language-icon-en").click(function(event){    	
    	translateToEnglish(event);
    });
    $("#language-icon-es").click(function(event){    	
    	translateToSpanish(event);
    });
    
});



function translateToEnglish (event) {
	console.log( "ENGLISH ICON IS CLICKED" );
}

function translateToSpanish (event) {
	console.log( "ESPANISH ICON IS CLICKED" );
}


