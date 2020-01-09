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
	$('#drupalexperience').html('Experience in the development of web applications based on this popular CMS, in its version 7 as in the 8. Creating both custom modules and themes to adapt this tool to customer needs. I acquired this experience in the company <a href="https://www.neenot.com/" target="_blank">"Neenot Online Marketing"</a> (Valencia), <a href="https://www.altran.com/es/es/" target="_blank">"Altran"</a> (Barcelona) and in "Fhios Smart Knowledge" (Barcelona).');
	$('#wordpressexperience').html('Experience in the development of corporate websites for different clients such as <a href="https://www.lafruteria.es/" target="_blank" >La frutería</a>,<a href="https://academialallibreta.es/" target="_blank"> Academia la llibreta</a>, etc, under this CMS. Creating plugins, adapting themes, etc. during my stay at <a href="https://www.neenot.com/" target="_bank">"Neenot Online Marketing" </a>(Valencia) and <a href="https://aheaddata.com/" target="_blank">"AhheadData SL" </a> (Alicante).');
	$('#githubexpecience').html('Experience in the use of git version control, for the correct development of group projects Following the rules of the game of <a href="https://datasift.github.io/gitflow/IntroducingGitFlow.html" target="_blank">GitFlow</a>, the repository is never chaotic or messy, which makes it much easier to develop the project correctly from start to finish.');
	$('#phpexperience').html('Experience in the use of this famous programming language. developing applications, modules <a href="https://www.drupal.org/docs/user_guide/en/understanding-modules.html" target="_blank">custom</a> for <a href="https://www.drupal.org/" target="_blank">Drupal</a> or <a href="https://www.wpbeginner.com/beginners-guide/what-are-wordpress-plugins-how-do-they-work/" target="_blank">plugins</a> for <a href="https://es.wordpress.com/" target="_blank">Wordpress</a>, etc.');
	$('#htmlexperience').text('Experience as a web developer using state-of-the-art languages such as HTML5/CSS3');
	$('#cssexperience').html('Before finishing my studies in Multiplatform Application Development I have already done an internship at Luhu People & Tech and have been hired at <a href="https://aheaddata.com/en/" target="_blank">Ahead Data SL</a>, developing websites with the most modern standards: <a href="https://www.w3schools.com/html/html5_intro.asp" target="_blank">HTML5</a> and <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">CSS3');
	$('#javascriptexperience').html('During my studies in the CFGS of "DAW, development of web applications", I have learned to use this language to contribute dynamism to the webs in which I have worked, making use of the possibilities that this one offers like; validation of forms by means of the use of regular expressions, requests <a href="https://www.w3schools.com/xml/ajax_intro.asp" target="_blank">AJAX</a> and treating this result either through Json or XML objects, visual effects through the library <a href="https://jqueryui.com/" target="_blank">JQuery UI</a>, <a href="https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos" target="_blank">POO</a>, etc. At present, you could say that it is my second most used language.');
	$('#androidexperience').text('I\'m started in the development of corporate, entertainment or internal use (management) Android, even using the device\'s own sensors (accelerometer, gps, compass, etc.)');
	$('#javaexperience').html('I have developed applications focused on the end user or for internal management, with access to databases, <a href="https://es.wikipedia.org/wiki/Mapeo_objeto-relacional" target="_blank">ORM</a> as <a href="http://hibernate.org/orm/" target="_blank">hibernate</a>, reading/writing files, <i>sockets</i>, graphic interfaces using the library <a href="https://es.wikipedia.org/wiki/Swing_(biblioteca_gr%C3%A1fica)" target="_blank">Java Swing</a>, etc.');
	$('#mysqlexperience').html('I have worked in all phases of database related projects (mainly for Java and web development), such as design, implementation, maintenance of the data system, establishment of policies and procedures related to management, <i>backups</i>, security policies, as well as in the correct compliance with the <a href="https://rgpd.es/" target="_blank">Data Protection Organic Law</a>');
	$('#dockerexperience').html('During my time at <a href="https://www.neenot.com/" target="_blank">Neenot Online Marketing</a>, I have learned how to use this container-based technology, making the most of its speed in raising \'<a href="https://es.wikipedia.org/wiki/Arquitectura_de_microservicios" target="_blank">microservices</a> on demand\' ');
	$('#maintenanceexperiencetitle').html('Assembly, maintenance and repair of equipment');
	$('#maintenanceexperience').html('I have experience both in software (operating system maintenance, installation, updates, <i>backups</i>, operating system cloning, etc.) and in hardware (assembly/repair/installation of pcs, installation of projectors/wiring/etc.) and networks (router configuration, network security, VLAN, etc.)');
	$('#virtualboxexperience').html('I have created complete enterprise architectures in virtualized systems: Windows/Linux server, several Windows/Linux clients, <a href="https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio" target="_blank">DNS</a> server, <a href="https://es.wikipedia.org/wiki/Protocolo_de_configuraci%C3%B3n_din%C3%A1mica_de_host" target="_blank">DHCP</a> server, <i>backups</i> server, domain user management, etc.');
	$('.btn-default').text(' Close ');
}

function translateToSpanish (event) {
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
	$('#drupalexperience').html('Experiencia en el desarrollo de aplicaciones web basadas en este popular CMS, en su versión 7 como en la 8. Creando tanto módulos custom, como temas para adaptar esta herramienta a las necesidades del cliente. Esta expericencia la adquirí en la empresa <a href="https://www.neenot.com/" target="_blank">"Neenot Online Marketing"</a> (Valencia), <a href="https://www.altran.com/es/es/" target="_blank">"Altran"</a> (Barcelona) y en "Fhios Smart Knowledge" (Barcelona).');
	$('#wordpressexperience').html('Experiencia en el desarrollo webs corporativas para diferentes clientes como <a href="https://www.lafruteria.es/" target="_blank" >La frutería</a>,<a href="https://academialallibreta.es/" target="_blank"> Academia la llibreta</a>, etc, bajo este CMS. Creando plugins, adaptando temas, etc durante mi estancia en <a href="https://www.neenot.com/" target="_bank">"Neenot Online Marketing" </a>(Valencia) y <a href="https://aheaddata.com/" target="_blank">"AhheadData SL" </a> (Alicante).');
	$('#githubexpecience').html('Experiencia en el uso de control de versiones git, para el correcto desarrollo de proyectos en grupo. Siguiendo las reglas de juego de <a href="https://datasift.github.io/gitflow/IntroducingGitFlow.html" target="_blank">GitFlow</a>, en el repositorio nunca reina el caos, ni el desorden, lo que facilita mucho el correcto desarrollo del proyecto desde el principio hasta el final.');
	$('#phpexperience').html('Experiencia en el uso de este famoso lenguaje de programación. desarrollando aplicaciones, módulos <a href="https://www.drupal.org/docs/user_guide/en/understanding-modules.html" target="_blank">custom</a> para <a href="https://www.drupal.org/" target="_blank">Drupal</a> o <a href="https://www.wpbeginner.com/beginners-guide/what-are-wordpress-plugins-how-do-they-work/" target="_blank">plugins</a> para <a href="https://es.wordpress.com/" target="_blank">Wordpress</a>, etc.');
	$('#htmlexperience').text('Experiencia como desarrollador web mediante el uso de lenguajes de última generación como HTML5/CSS3');
	$('#cssexperience').html('Antes de terminar mis estudios de ciclo superior de Desarrollo de Aplicaciones Multiplataforma ya he hecho prácticas en <a href="https://luhueditorial.com/" target="_blank">Luhu <i>People & Tech</i></a> y he estado contratado en <a href="https://aheaddata.com/es/" target="_blank">Ahead Data SL</a>,  desarrollando webs con los estándares más modernos: <a href="https://www.w3schools.com/html/html5_intro.asp" target="_blank">HTML5</a> y <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">CSS3');
	$('#javascriptexperience').html('Durante mis estudios en el CFGS de "DAW, desarrollo de aplicaciones web", he aprendido a utilizar este lenguaje para aportar dinamismo a las webs en las que he trabajado, haciendo uso de las posibilidades que este ofrece como; validación de formularios mediante al uso de expresiones regulares, peticiones <a href="https://www.w3schools.com/xml/ajax_intro.asp" target="_blank">AJAX</a> y tratando este resultado ya sea mediante objetos Json o XML, efectos visuales mediante la libreria <a href="https://jqueryui.com/" target="_blank">JQuery UI</a>, <a href="https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos" target="_blank">POO</a>, etc. En la actualidad se podría decir que es en segundo lugar mi lenguaje más utilizado.');
	$('#androidexperience').html('Estoy iniciado en el desarrollo de <i>apps</i> Android corporativas, de entretenimiento o de uso interno (gestión), incluso usando los sensores propios del dispositivo (acelerómetro, gps, brújula, etc.)');
	$('#javaexperience').html('He desarrollado aplicaciones enfocadas al usuario final o para gestión interna, con acceso a bases de datos, <a href="https://es.wikipedia.org/wiki/Mapeo_objeto-relacional" target="_blank">ORM</a> como <a href="http://hibernate.org/orm/" target="_blank">hibernate</a>, lectura/escritura de ficheros, <i>sockets</i>, interfaces gráficas mediante el uso de la libreria <a href="https://es.wikipedia.org/wiki/Swing_(biblioteca_gr%C3%A1fica)" target="_blank">Java Swing</a>, etc.');
	$('#mysqlexperience').html('He trabajado en todas las fases de los proyectos relacionados con bases de datos (principalmente para desarrollo en Java y web), como el diseño, la implementación, el mantenimiento del sistema de datos, establecimiento de políticas y procedimientos relativos a la gestión, <i>backups</i>, políticas de seguridad, así como en el correcto cumplimiento de la <a href="https://rgpd.es/" target="_blank">Ley Orgánica de Protección de Datos</a>');
	$('#dockerexperience').html('Durante en mi estancia en <a href="https://www.neenot.com/" target="_blank">Neenot Online Marketing</a>, he aprendido a utilizar esta tecnología basada en contenedores, aprovechando al máximo su rapidez a la hora de levantar \'<a href="https://es.wikipedia.org/wiki/Arquitectura_de_microservicios" target="_blank">microservicios</a> a la carta\' ');
	$('#maintenanceexperiencetitle').html('Montaje, mantenimiento y reparacion de equipos');
	$('#maintenanceexperience').html('Tengo experiencia tanto en la vertiente de sofware (mantenimiento de sistemas operativos, instalación, actualizaciones, <i>backups</i>, clonación de sistemas operativos, etc.) como en el hardware (montaje/repación/instalación de pcs, instalación de proyectores/cableado/etc.) y redes (configuración de routers, seguridad de redes, redes VLAN, etc.)');
	$('#virtualboxexperience').html('He creado arquitecturas de empresa completas en sistemas virtualizados: servidor Windows/Linux, diversos clientes Windows/Linux, servidor de <a href="https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio" target="_blank">DNS</a>, servidor de <a href="https://es.wikipedia.org/wiki/Protocolo_de_configuraci%C3%B3n_din%C3%A1mica_de_host" target="_blank">DHCP</a>, servidor de <i>backups</i>, gestión de usuarios en dominios, etc.');
	$('.btn-default').text(' Cerrar ');
}


