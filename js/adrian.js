$( document ).ready(function() {

    let browserLanguage = navigator.language;
    
    if (browserLanguage.indexOf("es-ES") >= 0) {
    	translateToSpanish(event);
    }else {    	
    	translateToEnglish(event);
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
	$('#knowledge').text('Knowledge');
	$('#aboutme').text('About me');
	$('#contact').text('Contact');
	$('#resume').text('Senior Programming Technician - Microsystems and Networks Technician');
	$('#knowledgefront').text('Knowledge');
	$('#aboutmefront').text('About me');
	$('#aboutmeresume').text('I define myself as a dynamic person, passionate about new technologies, the world of computers and everything around it. I am committed to my work and my goals, both personal and professional. Self-taught by nature and used to working in a team or individually. Music lover and reader of Isaac Asimov. ');
	$('#aboutmenow').text('I am currently looking for a project in which I can face new challenges, where there is a solid development team, a good atmosphere, the desire to share knowledge, the desire to improve every day and with the desire to offer every day a better quality product to the market. If you think I fit in your development team, let me know by contacting me through my social networks or sending me a message.');
	$('#contactsection').text('Contact');
	$('#name').attr('placeholder', 'Name');
	$('#phone').attr('placeholder', 'Phone');
	$('#message').attr('placeholder', 'Message');
	$('#submit').text('Send');
	$('#follow').text('Follow me on:');
	$('#advertisement').html('Of course, <i>Java</i>, <i>Android</i>, <i>MySQL</i>, <i>VirtualBox</i> and others are registered trademarks of their respective owners. ');
}

function translateToSpanish (event) {
	console.log( "ESPANISH ICON IS CLICKED" );
	$('#knowledge').text('Conocimientos');
	$('#aboutme').text('Sobre mi');
	$('#contact').text('Contacto');
	$('#resume').text('Técnico superior en programación - Técnico en microsistemas y redes');
	$('#knowledgefront').text('Conocimientos');
	$('#aboutmefront').text('Sobre mi');
	$('#aboutmeresume').text('Me defino como una persona dinámica, apasionada de las nuevas tecnologías, del mundo de la informática y todo lo que la rodea. Comprometido con mi trabajo y mis metas, tanto personales como profesionales. Autodidacta por naturaleza y acostumbrado a trabajar en equipo o de forma individual. Amante de la música y lector de Isaac Asimov. ');
	$('#aboutmenow').text('En la actualidad estoy buscando proyecto en el que poder afrontar nuevos retos, donde exista un equipo sólido de desarrollo, reine el buen ambiente, las ganas de compartir conocimientos, la inquietud por mejorar día a día y con ganas de ofrecer cada día un producto de mejor calidad al mercado. Si crees que encajo en tu equipo de desarrollo, házmelo saber contactando conmigo a través de mis redes sociales o enviándome un mensaje.');
	$('#name').attr('placeholder', 'Nombre');
	$('#phone').attr('placeholder', 'Número de telefono');
	$('#message').attr('placeholder', 'Mensaje');
	$('#submit').text('Enviar');
	$('#follow').text('Sigueme en:');
	$('#advertisement').html('Lógicamente <i>Java</i>, <i>Android</i>, <i>MySQL</i>, <i>VirtualBox</i> y demás son marcas registradas de sus respectivos propietarios. ');
}


