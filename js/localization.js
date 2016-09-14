(function() {
    var app = angular.module('localization', []);

    app.controller('LocaleController', function(){
        this.locale = 'en';
        this.strings = strings;

        this.toggleLang = function() {
            this.locale = this.locale === 'en' ? 'fr' : 'en';
        };

        this.getLocalizedString = function(component, name) {
            if (typeof strings[component][name] === 'undefined') {
                console.log('cannot resolve component: '+component+' and name: '+name);
            }
            return strings[component][name][this.locale];
        };
    });

    var age = function() {
        var birthdate = new Date(1989, 5, 29);
        var ageDifMs = Date.now() - birthdate.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    var currentYear = function() {
        var date = new Date();
        return date.getFullYear();
    };

    var strings = {
        'header' : {
            'homeTab' : {
                'en' : 'Home',
                'fr' : 'Accueil'
            },
            'blogTab' : {
                'en' : 'Blog',
                'fr' : 'Blog'
            },
            'resumeTab' : {
                'en' : 'CV',
                'fr' : 'CV'
            },
            'portfolioTab' : {
                'en' : 'Portfolio',
                'fr' : 'Portfolio'
            },
            'photosTab' : {
                'en' : 'Pics',
                'fr' : 'Photos'
            },
            'downloadsTab' : {
                'en' : 'Downloads',
                'fr' : 'Téléchargements'
            },
            'linksTab' : {
                'en' : 'Links',
                'fr' : 'Liens'
            },
            'contactTab' : {
                'en' : 'Contact',
                'fr' : 'Contact'
            },
            'changeLangTitle' : {
                'en' : 'Voir le site en français',
                'fr' : 'Change language to english'
            },
            'changeLangImgUrl' : {
                'en' : 'img/header/lang-french.png',
                'fr' : 'img/header/lang-english.png'
            }
        },
        'footer' : {
            'copyright' : {
                'en' : 'Copyright © '+currentYear()+' | Arnaud Hebert | All rights reserved',
                'fr' : 'Copyright © '+currentYear()+' | Arnaud Hebert | All rights reserved'
            }
        },
        'home' : {
            'presentation' : {
                'en' : 'Presentation',
                'fr' : 'Présentation'
            },
            'whereAmI' : {
                'en' : 'Where am I ?',
                'fr' : 'Où suis-je?'
            },
            'presentationText' : {
                'en' : 'Welcome! My name is Arnaud, I am '+age()+' and I am a UI Developer/Front-end Software Engineer, blogger, traveller. I have a Master\'s degree in Computer Science. My speciality is front-end development. I thrive in an environment where I can diversify my knowledge, learn more every day and improve my skills in Web Development by learning cutting edge technologies and work on innovative products as part of a disruptive company.',
                'fr' : 'Bienvenue sur ce site. Je m\'appelle Arnaud, j\'ai '+age()+' ans et je suis UI développeur/ingénieur informaticien, je suis un blogueur et voyageur. Je suis diplômé de Polytech\'Marseille - ESIL. Ma specialité est le développement web. Je prospère dans un environnement où je peux diversifier et améliorer mes connaissances et mon savoir-faire en développement web en utilisant les technologies à la pointe et en travaillant sur des produits innovants.'
            },
            'toVisitNext' : {
                'en' : 'To visit next',
                'fr' : 'Prochaines visites'
            },
            'nothingPlanned' : {
                'en' : 'Nothing planned yet.',
                'fr' : 'Aucun voyage de prévu.'
            },
            'cancunDate' : {
                'en' : 'Oct 2015',
                'fr' : 'Oct 2015'
            },
            'cancun' : {
                'en' : 'Cancun, MX',
                'fr' : 'Cancun, Mexique'
            },
            'corsicaDate' : {
                'en' : 'Aug 2015',
                'fr' : 'Août 2015'
            },
            'corsica' : {
                'en' : 'Corsica',
                'fr' : 'Corse'
            },
            'jan2016' : {
                'en' : 'Jan 2016',
                'fr' : 'Jan 2016'
            },
            'miami' : {
                'en' : 'Miami, FL',
                'fr' : 'Miami'
            },
            'toronto' : {
                'en' : 'Toronto, ON',
                'fr' : 'Toronto'
            },
            'niagara' : {
                'en' : 'Niagara Falls, ON',
                'fr' : 'Les chutes du Niagara'
            },
            'bahamas' : {
                'en' : 'The Bahamas',
                'fr' : 'Bahamas'
            },
            'may2016' : {
                'en' : 'May 2016',
                'fr' : 'Mai 2016'
            },
            'havasu' : {
                'en' : 'Havasu Waterfalls',
                'fr' : "Cascade d'Havasu"
            },
            'nov2016' : {
                'en' : 'Nov 2016',
                'fr' : 'Nov 2016'
            },
            'colombia' : {
                'en' : 'Colombia',
                'fr' : "Colombie"
            },
            'dec2016' : {
                'en' : 'Dec 2016',
                'fr' : 'Dec 2016'
            },
            'singapore' : {
                'en' : 'Singapore',
                'fr' : "Singapour"
            },
            'bali' : {
                'en' : 'Bali',
                'fr' : "Bali"
            },
            'london' : {
                'en' : 'London, UK',
                'fr' : 'Londres'
            },
            'prague' : {
                'en' : 'Prague, CZ',
                'fr' : 'Prague'
            },
            'done' : {
                'en' : 'Done!',
                'fr' : 'Vu!'
            },
            'yellowstoneDate' : {
                'en' : 'Jun 2015',
                'fr' : 'Juin 2015'
            },
            'yellowstone' : {
                'en' : 'Yellowstone NP, WY',
                'fr' : 'Yellowstone NP, WY'
            },
            'indiaDate' : {
                'en' : 'Mar 2015',
                'fr' : 'Mar 2015'
            },
            'india' : {
                'en' : 'India',
                'fr' : 'Inde'
            },
            'montrealDate' : {
                'en' : 'Dec 2014',
                'fr' : 'Déc 2014'
            },
            'montreal' : {
                'en' : 'Montréal, Québec',
                'fr' : 'Montréal, Québec'
            },
            'ncDate' : {
                'en' : 'Sep 2014',
                'fr' : 'Sep 2014'
            },
            'nc' : {
                'en' : 'New Caledonia, France',
                'fr' : 'Nouvelle Calédonie'
            },
            'nationalParksDate' : {
                'en' : 'Jun 2014',
                'fr' : 'Juin 2014'
            },
            'nationalParks' : {
                'en' : 'National Parks, UT, AZ',
                'fr' : 'Parcs Nationaux, UT, AZ'
            },
            'nolaDate' : {
                'en' : 'May 2014',
                'fr' : 'Mai 2014'
            },
            'nola' : {
                'en' : 'New Orleans, LA',
                'fr' : 'New Orleans, LA'
            },
            'lasVegasDate' : {
                'en' : 'Mar 2014',
                'fr' : 'Mar 2014'
            },
            'lasVegas' : {
                'en' : 'Las Vegas, NV',
                'fr' : 'Las Vegas, NV'
            },
            'sanDiegoDate' : {
                'en' : 'Feb 2014',
                'fr' : 'Fév 2014'
            },
            'sanDiego' : {
                'en' : 'San Diego, CA',
                'fr' : 'San Diego, CA'
            },
            'mauiDate' : {
                'en' : 'Nov 2013',
                'fr' : 'Nov 2013'
            },
            'maui' : {
                'en' : 'Maui, HI',
                'fr' : 'Maui, HI'
            },
            'seattleDate' : {
                'en' : 'Oct 2013',
                'fr' : 'Oct 2013'
            },
            'seattle' : {
                'en' : 'Seattle, WA',
                'fr' : 'Seattle, WA'
            },
            'chicagoDate' : {
                'en' : 'Aug 2013',
                'fr' : 'Août 2013'
            },
            'chicago' : {
                'en' : 'Chicago, IL',
                'fr' : 'Chicago, IL'
            },
            'oregonDate' : {
                'en' : 'Aug 2013',
                'fr' : 'Août 2013'
            },
            'oregon' : {
                'en' : 'Oregon',
                'fr' : 'Oregon'
            },
            'nycDate' : {
                'en' : 'Jul 2013',
                'fr' : 'Juil 2013'
            },
            'nyc' : {
                'en' : 'New York City, NY',
                'fr' : 'New York City, NY'
            },
            'latestArticles' : {
                'en' : 'Latest articles of the blog tab',
                'fr' : 'Les derniers articles du blog'
            },
            'latestArticlesText' : {
                'en' : 'Read these articles on the blog tab, or,',
                'fr' : 'Lisez ces articles dans le tab blog ou '
            },
            'latestArticlesLink' : {
                'en' : 'click here.',
                'fr' : 'cliquez ici.'
            }
        },
        'contact' : {
            'formTitle' : {
                'en' : 'Contact form',
                'fr' : 'Formulaire de contact'
            },
            'formTip' : {
                'en' : 'Any comment, feedback or question about my website...',
                'fr' : 'Pour toute suggestion, commentaire ou question, remplissez ce formulaire! Votre avis m\'intéresse!'
            },
            'firstNameLabel' : {
                'en' : 'First name:',
                'fr' : 'Prénom :'
            },
            'lastNameLabel' : {
                'en' : 'Last name:',
                'fr' : 'Nom :'
            },
            'emailLabel' : {
                'en' : 'E-mail address:',
                'fr' : 'Adresse e-mail :'
            },
            'messagePlaceholder' : {
                'en' : 'Write a message here',
                'fr' : 'Ecrivez un message ici...'
            },
            'submitButtonLabel' : {
                'en' : 'Send',
                'fr' : 'Envoyer'
            },
            'resetButtonLabel' : {
                'en' : 'Reset',
                'fr' : 'Effacer'
            },
            'errorMsg' : {
                'en' : 'There was an error.',
                'fr' : 'Une erreur s\'est produite.'
            },
            'tryAgainLater' : {
                'en' : 'Try again later.',
                'fr' : 'Réessayez plus tard.'
            },
            'success' : {
                'en' : 'The form was successfully submitted. I\'ll reply to your message soon!',
                'fr' : 'Le formulaire a été soumis avec succès. Je vous répondrai dans les plus brefs délais.'
            }
        },
        'downloads' : {
            'softwares' : {
                'en' : 'Softwares',
                'fr' : 'Quelques logiciels en vrac'
            },
            'dropbox' : {
                'en' : 'Dropbox:',
                'fr' : 'Dropbox :'
            },
            'dropboxDescription' : {
                'en' : 'An online hard drive',
                'fr' : 'Disque Dur en ligne'
            },
            'skype' : {
                'en' : 'Skype:',
                'fr' : 'Skype :'
            },
            'skypeDescription' : {
                'en' : 'See and talk to people online',
                'fr' : 'Logiciel pour discuter de vive voix sur internet'
            },
            'virtualDJ' : {
                'en' : 'VirtualDJ:',
                'fr' : 'VirtualDJ :'
            },
            'virtualDJDescription' : {
                'en' : 'Virtual DJing software',
                'fr' : 'Logiciel de simulation pour DJ'
            },
            'super' : {
                'en' : 'SUPER:',
                'fr' : 'SUPER :'
            },
            'superDescription' : {
                'en' : 'Video Converter (3GP to AVI for example)',
                'fr' : 'Un logiciel pour convertir des vidéos (3GP en AVI par exemple)'
            },
            'lupasRename' : {
                'en' : 'Lupas Rename:',
                'fr' : 'Lupas Rename :'
            },
            'lupasRenameDescription' : {
                'en' : 'Interesting software for renaming several files',
                'fr' : 'Logiciel pour renommer un grand nombre de fichier de façon automatique'
            },
            'idea' : {
                'en' : 'IntelliJ IDEA',
                'fr' : 'IntelliJ IDEA :'
            },
            'ideaDescription' : {
                'en' : 'Code-centric IDE, focused on your productivity. My prefered IDE.',
                'fr' : 'IDE Java commercial développé par JetBrains. Mon iDE préféré.'
            },
            'vlc' : {
                'en' : 'VLC:',
                'fr' : 'VLC :'
            },
            'vlcDescription' : {
                'en' : 'Free and open source multimedia player that plays almost everything.',
                'fr' : 'Lecteur multimédia gratuit et libre capable de presque tout lire.'
            },
            'audacity' : {
                'en' : 'Audacity:',
                'fr' : 'Audacity :'
            },
            'audacityDescription' : {
                'en' : 'Free audio editor and recorder',
                'fr' : 'Editeur et enregistreur audio gratuit'
            },
            'spotify' : {
                'en' : 'Spotify:',
                'fr' : 'Spotify :'
            },
            'spotifyDescription' : {
                'en' : 'Music for everyone.',
                'fr' : 'Musique pour tout le monde.'
            },
            'chrome' : {
                'en' : 'Google Chrome:',
                'fr' : 'Google Chrome :'
            },
            'chromeDescription' : {
                'en' : 'Web browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier.',
                'fr' : 'Navigateur Web rapide, simple et sécurisé, conçu pour le Web d\'aujourd\'hui'
            },
            'libFramework' : {
                'en' : 'Libraries, frameworks',
                'fr' : 'Librairies, frameworks'
            },
            'bootstrap' : {
                'en' : 'Bootstrap:',
                'fr' : 'Bootstrap :'
            },
            'bootstrapDescription' : {
                'en' : 'The most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
                'fr' : 'Le plus populaire des frameworks HTML, CSS, et JS pour développer des projects \'responsive\' et mobile sur le web.'
            },
            'angular' : {
                'en' : 'AngularJS:',
                'fr' : 'AngularJS :'
            },
            'angularDescription' : {
                'en' : 'AngularJS lets you extend HTML vocabulary for your application.',
                'fr' : 'AngularJS est un framework Javascript qui adapte et étend le HTML'
            },
            'jQuery' : {
                'en' : 'jQuery:',
                'fr' : 'jQuery :'
            },
            'jQueryDescription' : {
                'en' : 'Fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
                'fr' : 'Librairie JavaScript de petite taille, rapide, et qui propose de nombreuses fonctionnalitées. jQuery simplifie la traversée et la manipulation du DOM, la gestion des évènements, les animations, et l\'Ajax avec une API très facile d\'utilisation qui fonctionne sur de nombreux navigateurs.'
            },
            'googleMaps' : {
                'en' : 'Google Maps:',
                'fr' : 'Google Maps :'
            },
            'googleMapsDescription' : {
                'en' : 'Provides directions, interactive maps, and satellite/aerial imagery of many countries. ',
                'fr' : 'Remplace votre GPS, affichage de cartes intéractives et imagerie satellite/aérienne de nombreux pays.'
            },
            'nodeJs' : {
                'en' : 'Node.js:',
                'fr' : 'Node.js :'
            },
            'nodeJsDescription' : {
                'en' : 'Platform built on Chrome\'s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.',
                'fr' : 'Platforme construite sur le runtime JavaScript de Chrome pour simplifier la construction d\'applications rapides. Node.js est basé sur les évènements et utilise un modèle I/O non bloquant qui le rend plus léger et optimal. Parfait pour le support d\'applications temps réel qui gèrent un grand volume de données.'
            }
        },
        'links' : {
            'myLinks' : {
                'en' : 'My links',
                'fr' : 'Mes liens'
            },
            'myLinksText' : {
                'en' : 'Connect with me on:',
                'fr' : 'Retrouvez moi sur :'
            },
            'assomTitle' : {
                'en' : 'ASSOM',
                'fr' : 'ASSOM'
            },
            'veryBikeTrip' : {
                'en' : 'Very Bike Trip',
                'fr' : 'Very Bike Trip'
            },
            'manVsCorsica' : {
                'en' : 'Man Vs Corsica',
                'fr' : 'Man Vs Corsica'
            },
            'family' : {
                'en' : 'My family',
                'fr' : 'Ma famille'
            },
            'motherSisterBlog' : {
                'en' : 'My sister and mother\'s blog',
                'fr' : 'Blog de ma soeur et de ma mère'
            },
            'brotherBlog' : {
                'en' : 'My brother\'s blog',
                'fr' : 'Blog de mon frère Antoine'
            },
            'fatherBlog' : {
                'en' : 'My father\'s blog',
                'fr' : 'Site de mon père'
            },
            'fatherSportsBlog' : {
                'en' : 'My father\'s blog (motor sports)',
                'fr' : 'Site de mon père (Sports mécaniques)'
            },
            'friends' : {
                'en' : 'My friends',
                'fr' : 'Mes amis'
            },
            'simonWirthBlog' : {
                'en' : 'Website of Simon Wirth (music)',
                'fr' : 'Site musical de Simon Wirth'
            },
            'mattSniderBlog' : {
                'en' : 'Website of Matt Snider (web developer)',
                'fr' : 'Site de Matt Snider (développeur web)'
            },
            'miscellaneous' : {
                'en' : 'Miscellaneous',
                'fr' : 'Divers'
            },
            'wikipediaUrl' : {
                'en' : 'http://en.wikipedia.org/wiki/Main_Page',
                'fr' : 'http://fr.wikipedia.org/wiki/Accueil'
            },
            'sportUrl' : {
                'en' : 'http://espn.go.com/',
                'fr' : 'http://www.lequipe.fr/'
            },
            'sport' : {
                'en' : 'ESPN',
                'fr' : 'L\'équipe'
            }
        },
        'portfolio' : {
            'thisWebsite' : {
                'en' : 'This website',
                'fr' : 'Ce site internet'
            },
            'thisWebsiteText' : {
                'en' : 'As an front-end software engineer, a website is essential. This website is made of HTML5, CSS3, Ajax, jQuery, PHP, Bootstrap, AngularJS, several computer science skills that I learnt at school or on my own. It is also very usefull to share data and to introduce myself. As I am adding more and more code to this website, this is becoming a show-case of my skills. You can check out the code here:',
                'fr' : 'En tant que développeur web, un site web est essentiel. Ce site est fait en HTML5, CSS3 et utilise les technologies PHP, Ajax, Bootstrap, AngularJS et jQuery que j\'ai pu apprendre soit à l\'école soit par moi-même. Cela me permet d\'avoir un site pour me présenter, pour que l\'on se renseigne sur moi et pour partager des fichiers. Vous pouvez voir le code ici: '
            },
            'gitHub' : {
                'en' : 'My GitHub',
                'fr' : 'Mon Github'
            },
            'gitHubText' : {
                'en' : 'GitHub is a web-based Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features. I have added some code snippets, small games and single page applications to my GitHub. Check this out to see how my coding skills are:',
                'fr' : 'GitHub est un service web d\'hébergement et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions Git. J\'ai uploadé quelques extraits de code, des petits jeux et des applications web monopage sur mon GitHub. Allez-y jeter un coup d\'oeil pour voir comment mon code est organisé.'
            },
            'openSourceContribution' : {
                'en' : 'Open source contribution',
                'fr' : 'Contribution à un projet Open source'
            },
            'openSourceContributionText1' : {
                'en' : 'I was part of the Ariba\'s UI team in charge of the platform. The platform runs all Ariba applications and has a small Open source part which is called AribaWeb (',
                'fr' : 'Je faisais partie de l\'équipe UI platforme d\'Ariba. La platforme est la base de toutes les applications d\'Ariba et est composée d\'une partie Open source appelée AribWeb ('
            },
            'openSourceContributionText2' : {
                'en' : '). My duties included:',
                'fr' : '). Mes différentes tâches étaient :'
            },
            'tableToDivLayout' : {
                'en' : 'Moving from table layout to div layout',
                'fr' : 'Transition d\'une disposition en table vers une disposition en div'
            },
            'reSkinOfComponents' : {
                'en' : 'Re-skin of components',
                'fr' : 'Modernisation de composants existant'
            },
            'implementComponents' : {
                'en' : 'Implementation and unit testing of new re-usable components',
                'fr' : 'Implémentation et tests unitaires de nouveaux composants réutilisables'
            },
            'troubleshooting' : {
                'en' : 'Troubleshooting, bug fixing',
                'fr' : 'Résolution de problèmes'
            },
            'crossBrowserCompatibility' : {
                'en' : 'Cross-browser compatibility',
                'fr' : 'Support des majeurs navigateurs web'
            },
            'semanticCSS' : {
                'en' : 'Creation of semantic CSS rules, removing inline styles',
                'fr' : 'Création de règles CSS sémantiques et suppression des \'inline styles\''
            },
            'addJQuery' : {
                'en' : 'Addition of jQuery to the framework',
                'fr' : 'Ajout et utilisation de jQuery plutôt que JavaScript natif'
            },
            'newDashboard' : {
                'en' : 'New dashboard',
                'fr' : 'Nouveau tableau de bord'
            },
            'newDashboardText' : {
                'en' : 'This is a \'tweet\' from the AribaLive event in Las Vegas that occurred at the middle of April 2015. What we have been working on for the past two years is not released yet.',
                'fr' : 'Ceci est un \'tweet\' de la conférence AribaLive à Las Vegas d\'Avril 2015. Ce sur quoi nous travaillons depuis 2 ans n\'est pas encore délivré.'
            },
            'before' : {
                'en' : 'Before',
                'fr' : 'Avant'
            },
            'beforeText' : {
                'en' : 'Extract from a demo video of Ariba Sourcing:',
                'fr' : 'Ceci est un extrait d\'une vidéo de démonstration d\'Ariba Sourcing :'
            },
            'realtimeVisuApp' : {
                'en' : 'Real-time data visualization web application',
                'fr' : 'Application web permettant la visualisation de données en temps réel'
            },
            'realtimeVisuAppText' : {
                'en' : 'Building from scratch a data visualization web application. The project involved real-time data from Ariba\'s cloud platform, aggregating the data, and creating real-time graphical representation of various network activites. Examples include, business transactions per second per location and between locations, spend in the Network, customer growth, business transactions between global regions, etc. This was a team intern project with direct interaction with senior Ariba engineering leaders. Technologies: Java, Jetty, Hadoop, AribaWeb, HTML5, CSS3, JavaScript, Google Charts et Google Maps.',
                'fr' : 'De la conception à la réalisation d\'une application de data visualisation. Le projet consiste à recupérer, agréger les données de Ariba Network pour créer des visualisations en temps réel des activités du réseau. Par exemple, le traitement de données concernant une transaction d\'une région à une autre, son montant et son volume. Ce projet se réalise en lien direct avec plusieurs Senior Ariba leaders. Technologies : Java, Jetty, Hadoop, AribaWeb, HTML5, CSS3, JavaScript et Google Maps.'
            },
            'visuMenu' : {
                'en' : 'Menu of the web application:',
                'fr' : 'Menu de l\'application :'
            },
            'visuExamples' : {
                'en' : 'Examples of visualizations:',
                'fr' : 'Exemples de visualisations :'
            },
            'circleDescription' : {
                'en' : 'Circles as a big as the transaction amount or volume',
                'fr' : 'Cercles représentant un volume plus ou moins important pour des transactions'
            },
            'curveDescription' : {
                'en' : 'Curve from supplier to buyer',
                'fr' : 'Courbes partant des vendeurs vers les acheteurs'
            },
            'movingDotsDescription' : {
                'en' : 'Moving dots on curves from supplier to buyer',
                'fr' : 'Points bougeant progressivement sur des courbes depuis les vendeurs vers les acheteurs'
            }
        },
        'photos' : {
            'mapPhotos' : {
                'en' : 'Map of my trips',
                'fr' : 'Carte de mes voyages!'
            },
            'technologies' : {
                'en' : 'Albums are built in HTML5 and CSS3 technologies.',
                'fr' : 'Les albums sont faits à l\'aide des technologies HTML5 et CSS3.'
            },
            'animation' : {
                'en' : 'jQuery and Prettify make the animation pretty.',
                'fr' : 'L\'animation est réalisée avec jQuery et Prettify.'
            },
            'clickAnyAlbum' : {
                'en' : 'Click any marker on the map to locate what cities I have visited and click any album on the list on the panel on the right side to see the photos.',
                'fr' : 'Les marqueurs sur la carte Google Maps sont les endroits que j\'ai visité. Cliquez sur l\'album que vous souhaitez visualiser dans la liste ci-contre.'
            },
            'states' : {
                'en' : 'So far, I\'ve been to 15 US states: California, Oregon, Washington, Nevada, Arizona, Utah, Montana, Idaho, Wyoming, Illinois, Connecticut, Louisiana, Florida, New-York and Hawaii.',
                'fr' : 'J\'ai visité 15 états: Californie, Oregon, Washington, Nevada, Arizona, Utah, Montana, Idaho, Wyoming, Illinois, Connecticut, Louisiane, Floride, New-York et Hawaii.'
            },
            'countries' : {
                'en' : 'And I\'ve visited 11 countries: Canada, France, Hungary, India, Italy, the Czech Republic, New Caledonia, Spain, the United Kingdom, Mexico and the United States. Here is a cool website that helps you keep track:',
                'fr' : 'Et j\'ai visité 11 pays: Canada, France, Hongrie, Inde, Italie, République Tchèque, Nouvelle Calédonie, Espagne, Royaume-Uni, Mexique et Etats-Unis. Voici un site web pratique qui vous aide à garder le compte:'
            },
            'upToDateWebBrowser' : {
                'en' : 'Attention! In order to see the album, your web browser must be up-to-date.',
                'fr' : 'Attention! Votre navigateur doit être à jour pour pouvoir visualiser correctement les albums.'
            },
            'albumPhotosSectionTitle' : {
                'en' : 'Photo albums',
                'fr' : 'Albums photos'
            },
            'keyToolTip' : {
                'en' : 'Press left/right keys or the following arrows to move:',
                'fr' : 'Appuyez sur les flèches droite/gauche du clavier ou ces icônes :'
            },
            'page' : {
                'en' : 'Page',
                'fr' : 'Page'
            },
            'of' : {
                'en' : 'of',
                'fr' : 'sur'
            },
            'goto' : {
                'en' : 'Go to page:',
                'fr' : 'Aller page :'
            },
            'enterToolTip' : {
                'en' : '(Press Enter)',
                'fr' : '(Appuyez sur entrée)'
            },
            'backBtnLabel' : {
                'en' : 'Back',
                'fr' : 'Retour'
            }
        },
        'blog' : {
            'linkText' : {
                'en' : 'Read the article here.',
                'fr' : 'Lisez l\'article en cliquant ici.'
            },
            'codeLinkText' : {
                'en' : 'See the code here.',
                'fr' : 'Pour voir le code, cliquez le lien ici.'
            },
            'imgLinkText' : {
                'en' : 'Click the image to read the article.',
                'fr' : 'Cliquez sur l\'image pour lire l\'article'
            },
            'imgCodeLinkText' : {
                'en' : 'Click the image to see the code.',
                'fr' : 'Cliquez sur l\'image pour voir le code'
            },
            'memoizationTitle' : {
                'en' : 'JavaScript \'memoization\' small example',
                'fr' : 'Petit exemple de JavaScript \'Mémoïsation\''
            },
            'memoizationDate' : {
                'en' : 'May 4th, 2015',
                'fr' : '4 mai 2015'
            },
            'memoizationText' : {
                'en' : '"In computing, \'memoization\' is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."',
                'fr' : '"En informatique, la \'mémoïsation\' est une technique d\'optimisation de code consistant à réduire le temps d\'exécution d\'une fonction en mémorisant ses résultats d\'une fois sur l\'autre. Bien que liée à la notion de cache, la mémoïsation désigne une technique bien distincte de celles mises en œuvre dans les algorithmes de gestion de la mémoire cache."'
            },
            'memoizationLink' : {
                'en' : 'Here is a home-made small example: ',
                'fr' : 'Voici un petit exemple :'
            },
            'usaRoadTrip' : {
                'en' : 'The Perfect American Road Trip Has Finally Been Planned',
                'fr' : 'Le parfait road trip américain'
            },
            'usaRoadTripDate' : {
                'en' : 'May 25th, 2015',
                'fr' : '25 mai 2015'
            },
            'usaRoadTripText' : {
                'en' : '"Be honest with yourself: at some point you’ve probably thought about going on a cross-country road trip. Whether it be driving across Canada, United Kingdom, United States, or wherever you’re from, it’s probably crossed your mind at some point. Luckily, for those in the United States, the “perfect road trip” has finally been planned."',
                'fr' : '"Si vous vous êtes au moins une fois posé la question de quel serait le chemin le plus éfficace et court pour traverser les Etats-Unis de part en part en voyant le maximum de choses, alors remerciez l\'informatique pour vous avoir créé le chemin le plus optimal."'
            },
            'europeRoadTrip' : {
                'en' : 'The Perfect European Road Trip',
                'fr' : 'Voici le road trip optimal pour découvrir l’Europe'
            },
            'europeRoadTripDate' : {
                'en' : 'April 18th, 2015',
                'fr' : '18 avril 2015'
            },
            'europeRoadTripText' : {
                'en' : '"Randal Olson, blogger and data analyst, wrote an algorithm to calculate the best possible way of seeing 50 different sights in all Europe."',
                'fr' : '"Armé d’un algorithme et d’une liste de cinquante lieux incontournables en Europe, Randal Olson, blogueur et analyste de données, propose son parcours optimal sur le Vieux Continent."'
            },
            'gr20' : {
                'en' : 'GR 20 - the toughest long distance trail in Europe',
                'fr' : 'Le GR 20 - le chemin le plus difficile d’Europe'
            },
            'gr20Date' : {
                'en' : 'June 3rd, 2015',
                'fr' : '3 juin 2015'
            },
            'gr20Text' : {
                'en' : 'GR 20 is a long distance trail that traverses Corsica diagonally from north to south. It is considered to be the most difficult of all the GR routes and one of the most beautiful mountain trail in Europe. It\'s 180km long with variation in height of about 10 000 metres and can be walked in 15 days. Even though the GR20 doesn\'t require any climbing techniques, perfect fitness level and confidence in walking over a variety of rugged terrains is necessary.',
                'fr' : 'Le sentier de grande randonnée 20 (GR 20) traverse en diagonale la Corse du nord au sud en passant par la chaîne de montagnes. C\'est considéré comme le plus difficile et le plus beau des GR d\'Europe. Le GR 20 fait 180 km de long avec des variations d\'altitude de 10 000 mètres et peut être complété en 15 jours. Même si le GR 20 ne nécisste pas d\'équipement d\'escalade, il est impératif d\'être en parfaite condition physique et d\'être capable de grimper des chemins très pentus.'
            },
            'cs40Concepts' : {
                'en' : '40 Key Computer Science Concepts Explained In Layman’s Terms',
                'fr' : '40 concepts de l\'informatique expliqué avec des mots simples'
            },
            'cs40ConceptsDate' : {
                'en' : 'May 2nd, 2015',
                'fr' : '2 mai 2015'
            },
            'cs40ConceptsText' : {
                'en' : '"To make learning more fun and interesting, here’s a list of important computer science theories and concepts explained with analogies and minimal technical terms. It’s like an ultra-fast-track computer science degree program for everyone, just to get you to understand the general concepts."',
                'fr' : '"On sait comme apprendre des concepts de l\'informatique peut être fastidueux et ennuyant. Pour rendre cela intéressant et ludique, voici un article qui explique des théories et des concepts de l\'informatique avec des analogies et le moins de termes techniques possible. C\'est comme si vous passiez une licence d\'informatique en version accélérée!"'
            },
            'calendar' : {
                'en' : 'Layout events on a calendar',
                'fr' : 'Affichage d\'évènements dans un calendrier'
            },
            'calendarDate' : {
                'en' : 'June 5th, 2015',
                'fr' : '5 juin 2015'
            },
            'calendarIns1' : {
                'en' : 'Given a set of events, each with a start time and end time, render the events on a single day calendar (similar to Outlook, Calendar.app, and Google Calendar). There are several properties of the layout:',
                'fr' : 'L\'exercice consiste, à partir d\'une série d\'évènements, chacun avec un temps de début et un temps de fin, de positionner les évènements dans un conteneur similaire à Outlook, Calendar.app ou Google Calendar en respectant les propriétés suivantes:'
            },
            'calendarRule1' : {
                'en' : 'No events may visually overlap.',
                'fr' : 'Deux évènements ne doivent pas se superposés.'
            },
            'calendarRule2' : {
                'en' : 'If two events collide in time, they MUST have the same width. This is an invariant. Call this width W. W should be the maximum value possible without breaking the previous invariant.',
                'fr' : 'Si deux évènements se déroulent en même temps, ils doivent avoir la même longueur. C\'est un invariant appelé W. W doit avoir la maximum valeur possible sans cassé la condition précédente.'
            },
            'calendarIns2' : {
                'en' : 'Each event is represented by a JavaScript object with a start and end attribute. The value of these attributes is the number of minutes since 9am. So {start:30, end:90} represents an event from 9:30am to 10:30am. The events should be rendered in a container that is 620px wide (600px + 10px padding on the left/right) and 720px long (the day will end at 9pm). The function takes in an array of events and will lay out the events according to the above description.',
                'fr' : 'Chaque évènement est représenté par un objet JavaScript avec un attribut \'start\' et un attribut \'end\'. La valeur de ces attributs est le nombre de minutes depuis 9h du matin. Par exemple, {start:30, end:90} représente un évènement de 9h30 à 10h30. Les évènements doivent être placés dans un conteneur de longueur 620px (600px + 10px de padding à droite et à gauche) et de 720px de hauteur (le jour finit à 21h). La fonction prend un tableau d\'évènements comme paramètre et positionne les évènements sur le calendrier en respectant les conditions ci-dessus.'
            },
            'calendarCode' : {
                'en' : 'function layOutDay(events) {\n\t...\n}',
                'fr' : 'function layOutDay(events) {\n\t...\n}'
            },
            'calendarTest' : {
                'en' : 'This function is idempotent and can be invoked from the console for testing purposes.',
                'fr' : 'La fonction principale est idempotente and peut êre invoquée de la console JavaScript pour tests.'
            },
            'connectFour' : {
                'en' : 'Connect Four game',
                'fr' : 'Le jeu du puissance 4'
            },
            'connectFourDate' : {
                'en' : 'May 28th, 2015',
                'fr' : '28 mai 2015'
            },
            'connectFourText' : {
                'en' : 'I built a single page application which reproduces the connect four game. Go ahead, play it and have fun!',
                'fr' : 'J\'ai codé le jeu du puissance 4. Allez-y, amusez vous en y jouant!'
            },
            'ticktacktoe' : {
                'en' : 'Tick Tack Toe game',
                'fr' : 'Le jeu du morpion'
            },
            'ticktacktoeDate' : {
                'en' : 'May 4th, 2015',
                'fr' : '4 mai 2015'
            },
            'ticktacktoeText' : {
                'en' : 'I wrote a simple single page application which simulates the tick tack toe game. Have fun!',
                'fr' : 'J\'ai codé le jeu du morpion en HTML et JavaScript avec une interface simpliste. Bon jeu!'
            },
            'reproduceBtn' : {
                'en' : 'CSS interview question: Reproduce button style',
                'fr' : 'Question d\'entretien en CSS: reproduire le style du bouton'
            },
            'reproduceBtnDate' : {
                'en' : 'May 1st, 2015',
                'fr' : '1 mai 2015'
            },
            'reproduceBtnText' : {
                'en' : 'Given this PNG image, write CSS to reproduce as close as possible the style of this button. Source: https://css-tricks.com/interview-questions-css/',
                'fr' : 'A partir de cette image PNG, &eacute;crire du CSS pour reproduire au plus proche le style de ce bouton. Source: https://css-tricks.com/interview-questions-css/'
            },
            'integrationCalc' : {
                'en' : 'Numerical Integration Calculator',
                'fr' : 'Calculateur d\'intégrateur numérique'
            },
            'integrationCalcDate' : {
                'en' : 'May 1st, 2015',
                'fr' : '1 mai 2015'
            },
            'integrationCalcText' : {
                'en' : 'Given a function, calculates its true area and an estimation of the area using X rectangles.',
                'fr' : 'Pour une fonction données, calculer l\'aire de la surface de l\'abscisse à la courbe et son estimation en utilisant X rectangles dans son interval.'
            },
            'stickyMenu' : {
                'en' : 'Simple sticky menu example',
                'fr' : 'Exemple d\'un simple menu collant'
            },
            'stickyMenuDate' : {
                'en' : 'June 4th, 2015',
                'fr' : '4 juin 2015'
            },
            'stickyMenuText' : {
                'en' : 'This code snippet shows a simple sticky menu: it always stays to its position or at the far top edge even if you scroll down.',
                'fr' : 'Ce fragment de code est la démonstration d\'un simple menu qui reste visible et positionné en haut de la page même après défilement vertical descendant.'
            },
            'tracker' : {
                'en' : 'Tiny example of tracker',
                'fr' : 'Exemple de traqueur'
            },
            'trackerDate' : {
                'en' : 'June 4th, 2015',
                'fr' : '4 juin 2015'
            },
            'trackerText' : {
                'en' : 'The purpose of this exercise is to create a tracker that will send data about user activity to the server every X period of time to avoid overload.',
                'fr' : 'Le but de cet exercice est de cr&eacute;er un traqueur qui va envoyer un object au serveur contenant des informations sur l\'activité de l\'utilisateur. Les informations sont envoy&eacute;s au serveur que tous les intervals X de temps pour éviter une surcharge de messages.'
            },
            'movingDivs' : {
                'en' : 'CSS interview question',
                'fr' : 'Question d\'entretien en CSS'
            },
            'movingDivsDate' : {
                'en' : 'May 12th, 2015',
                'fr' : '12 mai 2015'
            },
            'movingDivsText' : {
                'en' : 'The question is, using CSS, jQuery allowed, write the code that will move the top green container to the right and move the bottom blue container to the left in the same time and change z-index when you click the \'Switch places\' link. This is the second state and clicking the link again should transition back to the first state.',
                'fr' : 'La question est d\'écrire du JavaScript, jQuery autorisé, pour qu\'en cliquant le lien, le conteneur vert du haut bouge vers la droite et le conteneur bleu du bas bouge sur la gauche tout en changeant de z-index. Cela créé un deuxième état et en cliquant à nouveau sur le lien, l\'on doit revenir à l\'état initial.'
            },
            'gridLayout' : {
                'en' : 'Simple responsive grid layout',
                'fr' : 'Simple affichage en quadrillage responsive'
            },
            'gridLayoutDate' : {
                'en' : 'June 4th, 2015',
                'fr' : '4 juin 2015'
            },
            'gridLayoutText' : {
                'en' : 'Display 100 products with an ad which is double the size of a product every 15 products after the 19th product. Avoid blank spaces.',
                'fr' : 'Créer et positionner 100 produits avec une publicité qui est de taille le double d\'un produit tous les 15 produits après le 19ième produit. Eviter les espaces vides.'
            },
            'parallel' : {
                'en' : 'Parallelization in JavaScript',
                'fr' : 'Parallélisation en JavaScript'
            },
            'parallelDate' : {
                'en' : 'June 23rd, 2015',
                'fr' : '23 juin 2015'
            },
            'parallelQuote' : {
                'en' : 'JavaScript is fast, no doubt, but lacks the parallel computing capabilites of its peer languages due to its single-threaded computing model. In a world where the numbers of cores on a CPU are increasing faster than the speed of the cores themselves, isn\'t it a shame that we can\'t take advantage of this raw parallelism?',
                'fr' : 'JavaScript est sans aucun doute rapide mais manque de système d\'éxécution parallèle par rapport aux autres langages dû au fait qu\'il soit basé sur un modèle \'single-threaded\'. Dans un monde où le nombre de coeurs dans un CPU augmente plus vite que la vitesse des coeurs eux-mêmes, n\'est-il pas dommage de ne pas tirer avantage de cette possibilité?'
            },
            'parallelText' : {
                'en' : 'This code snippet goal is to trigger the execution of functions from a list pretty much at the same time (parallelization) and when the last function is done executing, trigger a callback. It was created to take full advantage of the ever-maturing web-workers API.',
                'fr' : 'Ce fragment de code a pour but de déclancher au même moment l\'éxécution d\'une série de fonctions (parallélisation) et quand la dernière de toute les fonctions a finit d\'éxécuter, un \'callback\' se déclanche. Cet exemple tire avantage des nouveaux web-workers.'
            },
            'filters' : {
                'en' : 'Filters',
                'fr' : 'Filtres'
            },
            'computer' : {
                'en' : 'Computer science',
                'fr' : 'Informatique'
            },
            'voyage' : {
                'en' : 'Travel',
                'fr' : 'Voyages'
            },
            'game' : {
                'en' : 'Game',
                'fr' : 'Jeux'
            }
        },
        'common' : {
            'fastNavigation' : {
                'en' : 'Fast Navigation',
                'fr' : 'Navigation rapide'
            },
            'clickHere' : {
                'en' : 'Click here.',
                'fr' : 'Cliquez ici.'
            }
        },
        'resume' : {
            'title' : {
                'en' : 'Web Developer - Front-end Software Engineer',
                'fr' : 'Ingénieur Informatique Front-end - Développeur web'
            },
            'name' : {
                'en' : 'Arnaud HEBERT',
                'fr' : 'Arnaud HEBERT'
            },
            'resident' : {
                'en' : 'Resident of the United States Of America',
                'fr' : 'Résident aux Etats-Unis'
            },
            'birthDate' : {
                'en' : age()+' years old',
                'fr' : age()+' ans'
            },
            'email' : {
                'en' : 'E-mail: pro (at) arnaudhebert.com',
                'fr' : 'E-mail : pro (at) arnaudhebert.com'
            },
            'driverLicense' : {
                'en' : 'CA Driver\'s license',
                'fr' : 'Permis B - Voiture'
            },
            'phoneNumber' : {
                'en' : '+1 (415) 326 4540',
                'fr' : '+1 (415) 326 4540'
            },
            'objectiveSection' : {
                'en' : 'Objective',
                'fr' : 'Objectif'
            },
            'objectiveText' : {
                'en' : 'I always want to diversify my knowledge and improve my skills in Web Development through learning about cutting edge technologies and working on innovative products as part of a disruptive company.',
                'fr' : 'Je veux continuellement diversifier mes compétences et gagner de l\'expérience en développement web en apprenant des technologies à la pointe et en travaillant sur des produits innovants.'
            },
            'skillsSection' : {
                'en' : 'Skills',
                'fr' : 'Compétences professionnelles'
            },
            'programmingLanguages' : {
                'en' : 'Programming languages:',
                'fr' : 'Langages de Programmation :'
            },
            'python' : {
                'en' : 'Python',
                'fr' : 'Python'
            },
            'ccpp' : {
                'en' : 'C, C++',
                'fr' : 'C, C++'
            },
            'javaJ2ee' : {
                'en' : 'Java, J2EE',
                'fr' : 'Java, J2EE'
            },
            'htmlCss' : {
                'en' : 'HTML5, CSS3, LESS, SASS',
                'fr' : 'HTML5, CSS3, LESS, SASS'
            },
            'xmlJsp' : {
                'en' : 'XML, JSP',
                'fr' : 'XML, JSP'
            },
            'JavaScript' : {
                'en' : 'JavaScript: jQuery, AngularJS, Backbone.js, RequireJS, Underscore.js, Jasmine',
                'fr' : 'JavaScript: jQuery, AngularJS, Backbone.js, RequireJS, Underscore.js, Jasmine'
            },
            'gmapsgcharts' : {
                'en' : 'Google Maps, Google Charts',
                'fr' : 'Google Maps, Google Charts'
            },
            'softwares' : {
                'en' : 'Softwares:',
                'fr' : 'Logiciels maitrisés :'
            },
            'netBeans' : {
                'en' : 'NetBeans',
                'fr' : 'NetBeans'
            },
            'eclipse' : {
                'en' : 'Eclipse',
                'fr' : 'Eclipse'
            },
            'idea' : {
                'en' : 'IntelliJ IDEA, WebStorm',
                'fr' : 'IntelliJ IDEA, WebStorm'
            },
            'photoShop' : {
                'en' : 'Adobe PhotoShop CS6',
                'fr' : 'Adobe PhotoShop CS6'
            },
            'jira' : {
                'en' : 'JIRA, Crucible, Stash, Confluence',
                'fr' : 'JIRA, Crucible, Stash, Confluence'
            },
            'cvs' : {
                'en' : 'Perforce, Git',
                'fr' : 'Perforce, Git'
            },
            'languages' : {
                'en' : 'Spoken languages:',
                'fr' : 'Langues parlées :'
            },
            'french' : {
                'en' : 'French:',
                'fr' : 'Français :'
            },
            'frenchDescription' : {
                'en' : 'Native proficiency',
                'fr' : 'Langue maternelle'
            },
            'english' : {
                'en' : 'English:',
                'fr' : 'Anglais :'
            },
            'englishDescription' : {
                'en' : 'Bilingual proficiency',
                'fr' : 'Bilingue'
            },
            'spanish' : {
                'en' : 'Spanish:',
                'fr' : 'Espagnol :'
            },
            'spanishDescription' : {
                'en' : 'Limited working proficiency',
                'fr' : 'Bases solides'
            },
            'jobExperience' : {
                'en' : 'Work Experience',
                'fr' : 'Expériences professionnelles'
            },
            'splunkEngineer' : {
                'en' : 'Splunk, Inc (San Francisco, CA - USA), Software Engineer, since September 2015',
                'fr' : 'Splunk, Inc (San Francisco, CA - USA), Ingénieur informatique, depuis septembre 2015'
            },
            'splunkEngineerText' : {
                'en' : 'Member of the User Interface Splunk Light team, which is responsible for the development of new features and maintenance of the User Interface of the Splunk Light.',
                'fr' : 'Membre de l\'équipe responsable du développement des nouvelles fonctionnalités et de la maintenance de l\'interface utilisateur de Splunk Light'
            },
            'splunkTechnologies' : {
                'en' : 'JavaScript, Backbone.js, RequireJS, Underscore,js, Jasmine, LESS, Python, C++',
                'fr' : 'JavaScript, Backbone.js, RequireJS, Underscore.js, Jasmine, LESS, Python, C++'
            },
            'aribaEngineer' : {
                'en' : 'Ariba, Inc (Sunnyvale, CA - USA), Software Engineer, January 2013 - April 2015',
                'fr' : 'Ariba, Inc (Sunnyvale, CA - USA), Ingénieur informatique, Janvier 2013 - Avril 2015'
            },
            'aribaEngineerPromotion' : {
                'en' : 'I was promoted from associate software engineer to software engineer in early 2015.',
                'fr' : 'J\'ai été promu de \'associate software engineer\' à \'software engineer\' en début d\'année 2015.'
            },
            'aribaEngineerAward' : {
                'en' : 'I was given an excellence award in December 2014 for my contribution to the Visual Renewal project.',
                'fr' : 'J\'ai reçu un prix d\'excellence en décembre 2014 pour ma contribution au project \'Visual Renewal\''
            },
            'aribaEngineerText' : {
                'en' : 'I was a member of the platform UI team, which is responsible for the development of new features and maintenance of the User Interface of the platform framework, used by Ariba\'s applications.',
                'fr' : 'J\'étais un membre de l\'équipe responsable du développement des nouvelles fonctionnalités et de la maintenance de l\'interface utilisateur du framework AribaWeb, utilisé par les applications d\'Ariba.'
            },
            'multiTabProject' : {
                'en' : '1. Add support to the platform of MultiTab: allow user to be able to do all actions in separate windows/tabs.',
                'fr' : '1. Ajout du support de la navigation Multi-tab : permettre à l\'utilisateur de faire toutes des actions dans des fenêtres ou des tabs différents.'
            },
            'technologies' : {
                'en' : 'Technologies:',
                'fr' : 'Technologies :'
            },
            'multiTabTechnologies' : {
                'en' : 'Java, AribaWeb, JavaScript, SSO, Servlets, cross-browser tests, cookies, HttpSession',
                'fr' : 'Java, AribaWeb, JavaScript, SSO, Servlets, cross-browser tests, cookies, HttpSession'
            },
            'mockTool' : {
                'en' : '2. Creation of a page generation tool for testing: building on top of the platform framework a tool to generate a response from an Ariba application only using Java and by mocking as few objects as possible. Mockito is used to mock objects such as HttpRequest, the response is a JSON java object (Jackson) and Jsoup is used to parse the response.',
                'fr' : '2. Creation d\'un outil de test qui permet de générer des pages : construit sur les bases du framework, cet outil utilise une fausse requête avec quelques faux objects pour générerla réponse (la page) à partir d\'une application Ariba. Utilisation de pour \'mocker\' la HttpRequest,la réponse est sous forme d\'un objet JSON java (Jackson) et Jsoup est utilisé pour parser la réponse.'
            },
            'nextGenUi' : {
                'en' : '3. Creation of a next generation User Interface for AribaWeb.',
                'fr' : '3. Creation d\'une nouvelle génération d\'interface utilisateur pour AribaWeb.'
            },
            'semanticCSS' : {
                'en' : '- Improvement of CSS management: creation of scripts parsing files, replacing inline styles with classes. Creation of semantic rules for new CSS class names.',
                'fr' : '- Meilleure gestion du CSS : creation de scripts qui parsent les fichiers et replacent les \'inline styles\' par des classes. Creation de règles basées sur la sémantique pour les nouvelles classes CSS.'
            },
            'newTechnologies' : {
                'en' : '- Improvement of JavaScript by including new framework like jQuery.',
                'fr' : '- Amélioration du JavaScript avec l\'utilisation de nouveau framework comme jQuery.'
            },
            'newWidgets' : {
                'en' : '- Creation of new widgets and reskin of widgets. Design, implementation and testing.',
                'fr' : '- Creation de nouveaux widgets et nouveau look pour d\'anciens widgets. A partir du design, implémentation et tests.'
            },
            'cssTool' : {
                'en' : '- Creation of a CSS tool for testing purpose: Capture of computed CSS files for application pages. Comparison between baseline and test to validate changes and to insure backwards compatibility.',
                'fr' : '- Creation d\'un outil de test basé sur la comparaison de CSS : Computation et capture de CSS pour une page de l\'application. Comparison entre la référence et le test pour valider d\'éventuels changements et pour valider la compatibilité avec les versions précédentes.'
            },
            'crossBrowserTesting' : {
                'en' : '- Cross-browser testing: Safari, Chrome, Firefox, Internet Explorer',
                'fr' : '- Cross-browser tests : Safari, Chrome, Firefox, Internet Explorer'
            },
            'maintenance' : {
                'en' : '4. Maintenance/Improvement of AribaWeb. This framework has an open source part. Debugging, bug resolution and testing for Ariba\'s applications.',
                'fr' : '4. Maintenance/Améliorations d\'AribaWeb. Le framework est en partie open-source. Résolution de bugs et tests pour les applications d\'Ariba.'
            },
            'technologiesList' : {
                'en' : 'Java, AribaWeb, HTML5, CSS3, JavaScript, jQuery, QUnit',
                'fr' : 'Java, AribaWeb, HTML5, CSS3, JavaScript, jQuery, QUnit'
            },
            'internships' : {
                'en' : 'Internships',
                'fr' : 'Stages'
            },
            'aribaInternshipTitle' : {
                'en' : 'Ariba, Inc (Sunnyvale, CA - USA) - February - end of August 2012 - 6-month internship as an Engineering Intern to complete my masters degree:',
                'fr' : 'Ariba, Inc (Sunnyvale, CA - USA) - De Février à fin Août 2012 - 6 mois de stage de fin d\'études :'
            },
            'aribaInternshipDescription' : {
                'en' : 'From conception to production of a data visualization application.  The project involved real-time data from Ariba\'s cloud platform, aggregating the data, and creating real-time graphical representation of various network activities. Examples include: business transactions per second per location and between locations, spend in the Network, customer growth, business transactions between global regions, etc. This was a team intern project with direct interaction with senior Ariba engineering leaders.',
                'fr' : 'De la conception à la production d\'une application de data visualisation. Recupérer, agréger les données de Ariba Network pour créer des visualisations en temps réel des activités du réseau. Par exemple, le traitement de données concernant une transaction d\'une région à une autre, son montant et son volume. Ce projet se réalisa en lien direct avec plusieurs Senior Ariba leaders.'
            },
            'aribaInternshipAward' : {
                'en' : 'In June 2013, the project was the winner of the \'DemoJam Session\' at the SAP DKOM 2013 in San Jose, CA. Among 13 projects from SAP developers from all around the world and our project came first.',
                'fr' : 'En juin 2013, le projet était le vainqueur d\'une \'DemoJam Session\' à une conférence internationale SAP DKOM 2013 à San José, CA. Notre projet termina à la première place devant 12 autres projets de développeurs SAP du monde entier.'
            },
            'aribaInternshipTechnologies' : {
                'en' : 'Java, Jetty, Hadoop, AribaWeb, HTML5, CSS3, JavaScript, Google Charts et Google Maps.',
                'fr' : 'Java, Jetty, Hadoop, AribaWeb, HTML5, CSS3, JavaScript, Google Charts et Google Maps.'
            },
            'aribaTextToPortfolio' : {
                'en' : 'You can see some screenshots of the application on the portfolio tab:',
                'fr' : 'Vous pouvez voir quelques captures d\'écran de l\'application dans le tab portfolio :'
            },
            'aribaLinkToPortfolio' : {
                'en' : 'click here.',
                'fr' : 'cliquez ici:'
            },
            'atosInternshipTitle' : {
                'en' : 'Atos (Aix-En-Provence, France) - June - August 2011 - 3-month internship as an Engineer Assistant:',
                'fr' : 'Atos (Aix-En-Provence) - De Juin à Août 2011 - Stage de 3 mois Assistant Ingénieur :'
            },
            'atosInternshipDescription' : {
                'en' : 'Migration in architecture Web / Java / JEE of an application of management of an information system orders including analysis, re-conception and its development: hiring, hr management, training, skills, salesforce, staffing, delivery, expenses, production, finance - Generation of Business Intelligence\'s reports and dashboards in various formats using a open source reporting tool and data in Oracle DataBase',
                'fr' : 'Migration sous architecture Web / Java / JEE d\'une application de gestion d\'un système d\'information agence incluant l\'analyse de l\'existant, la re-conception du système et son développement : hiring, hr management, training, skills, salesforce, staffing, delivery, expenses, production, finance - Génération de rapports de Business Intelligence et de tableaux de bords dans différents formats html, pdf en utilisant un outil de reporting et des données contenus dans un SGBD de type Oracle.'
            },
            'atosInternshipTechnologies' : {
                'en' : 'Business Intelligence, Java, J2EE, Oracle et BIRT',
                'fr' : 'Business Intelligence, Java, J2EE, Oracle et BIRT'
            },
            'education' : {
                'en' : 'Education',
                'fr' : 'Formation'
            },
            'esilDates' : {
                'en' : '2009-2012',
                'fr' : '2009-2012'
            },
            'esilEducation' : {
                'en' : '- Master\'s Degree in Computer Science Engineering at (Polytech\'Marseille - ESIL) Aix-Marseille University - France',
                'fr' : '- Cycle Ingénieur filière Informatique Réseaux et Multimédia (Polytech\'Marseille - ESIL - Marseille)'
            },
            'esilList' : {
                'en' : 'List of courses:',
                'fr' : 'Liste des cours suivis :'
            },
            'ooProgramming' : {
                'en' : 'Oriented Object Programming (mostly Java)',
                'fr' : 'Programmation orientée objet (Java)'
            },
            'database' : {
                'en' : 'Database',
                'fr' : 'Bases de données'
            },
            'html' : {
                'en' : 'HTML basics',
                'fr' : 'Les Bases du HTML'
            },
            'networking' : {
                'en' : 'Networking (Terrestrial, Wireless & Mobile)',
                'fr' : 'Réseaux'
            },
            'os' : {
                'en' : 'Operating Systems',
                'fr' : 'Systèmes d\'exploitation'
            },
            'webApps' : {
                'en' : 'Web Applications (JSP, J2EE)',
                'fr' : 'Applications web (JSP, J2EE)'
            },
            'graph' : {
                'en' : 'Graph Theory',
                'fr' : 'Théorie des graphes'
            },
            'algo' : {
                'en' : 'Algorithmic (Writing, Understanding)',
                'fr' : 'Algorithmique'
            },
            'law' : {
                'en' : 'Computer Science and internet law',
                'fr' : 'Droit de l\'informatique'
            },
            'movie' : {
                'en' : 'Movie Writing Realization',
                'fr' : 'Création de film'
            },
            'imaging' : {
                'en' : 'Imaging analysis',
                'fr' : 'Analyse d\'images'
            },
            'iPhone' : {
                'en' : 'iPhone development',
                'fr' : 'Développement iPhone'
            },
            'management' : {
                'en' : 'Project Management',
                'fr' : 'Management de projet'
            },
            'marketing' : {
                'en' : 'Marketing',
                'fr' : 'Marketing'
            },
            'english' : {
                'en' : 'English (TOEIC 925 in 2012)',
                'fr' : 'Anglais (TOEIC 925 en 2012)'
            },
            'prepaDates' : {
                'en' : '2007-2009',
                'fr' : '2007-2009'
            },
            'prepa' : {
                'en' : '- Two-year University Degree In Prépa - two-year selective preparatory classes leading to French elite institutes at Université d\'Avignon et des Pays de Vaucluse - France',
                'fr' : '- Classe Préparatoire aux Concours Polytechniques (Université D\'Avignon et des Pays de Vaucluse - Avignon)'
            },
            'projects' : {
                'en' : 'Projects',
                'fr' : 'Projets'
            },
            'roadSimulation' : {
                'en' : 'Road Simulation:',
                'fr' : 'Simulation Routière :'
            },
            'roadSimulationDescription' : {
                'en' : 'Synthesis project realized in C++ involving project management qualities and human-machine interface',
                'fr' : 'Projet de synthèse réalisé en C++ introduisant du management de projet, de l\'interface homme-machine'
            },
            'supermarketAisle' : {
                'en' : 'Management of a supermarket aisle:',
                'fr' : 'Gestion Des Rayons d\'un Supermarché :'
            },
            'supermarketAisleDescription' : {
                'en' : 'Project realized in Java - Graphic game implementing Object Programming',
                'fr' : 'Projet en Java - Jeu graphique mettant en oeuvre les notions de Programmation Orientée Objet'
            },
            'adaptiveHuffmanCoding' : {
                'en' : 'Adaptive Huffman Coding:',
                'fr' : 'Algorithme de Huffman Adaptatif :'
            },
            'adaptiveHuffmanCodingDescription' : {
                'en' : 'Algorithm Project realized in C - Data compression without loss based on the redundancy of the characters - Reading and coding in the air with modification of the real-time tree',
                'fr' : 'Projet Algorithmique en C - Compression de données sans perte basé sur la redondance des caractères - Lecture et codage à la volée avec modification de l\'arbre en temps réel'
            },
            'openingProject' : {
                'en' : 'Opening Project:',
                'fr' : 'Projet d\'Ouverture :'
            },
            'openingProjectDescription' : {
                'en' : 'Representation of ESIL at careers and studies fair (Studyrama and Salon de l\'Etudiant) - Welcome, inform and direct the visitors',
                'fr' : 'Représentation de l\'ESIL dans les salons de l\'Etudiant et salon Studyrama - Présence sur le stand : accueillir, renseigner et orienter les visiteurs'
            },
            'securityProject' : {
                'en' : 'Security Project:',
                'fr' : 'Projet de Sécurité :'
            },
            'securityProjectDescription' : {
                'en' : 'Initiation to a logical programming language: Prolog',
                'fr' : 'Découverte d\'un langage de programmation logique Prolog'
            },
            'summerJobs' : {
                'en' : 'Summer Jobs',
                'fr' : 'Stages d\'été'
            },
            'macdoDates' : {
                'en' : 'From June to September and December 2010',
                'fr' : 'Juin-Septembre 2010'
            },
            'macdo' : {
                'en' : '- General-purpose team member (McDonald\'s RealPanier - Le Pontet) Cook and Cashier - Entering orders on a cash register - Fast, organized and used to team work',
                'fr' : '- Equipier polyvalent (McDonald\'s RealPanier - Le Pontet) Cuisinier et Caissier  - Saisie des commandes sur une caisse enregistreuse - Travail rapide, organisé et en équipe'
            },
            'sg1Dates' : {
                'en' : 'August 2009',
                'fr' : 'Août 2009'
            },
            'sg1' : {
                'en' : '- Bank clerk (Société Générale - Avignon République) In charge of the digitalization and organization in a data base of customers file',
                'fr' : '- Assistant administratif (Société Générale, - Avignon République) Chargé de la conformité - Numérisation et organisation en base de donnée des dossiers clients'
            },
            'sg2Dates' : {
                'en' : 'August 2008 and 2007',
                'fr' : 'Août 2008 et 2007'
            },
            'sg2' : {
                'en' : '- Bank clerk (Société Générale - Avignon Europe) Remote transmissions Transfers - Use of an interface with many software specialized for bank transactions',
                'fr' : '- Assistant administratif (Société Générale - Avignon Europe) Service Trésorerie (Télétransmissions Virements) - Utilisation d\'une interface avec de nombreux logiciels spécialisés pour les opérations bancaires'
            },
            'miscellaneous' : {
                'en' : 'Miscellaneous',
                'fr' : 'Centres d\'intérêts'
            },
            'sports' : {
                'en' : 'Practice of sports:',
                'fr' : 'Pratique du sport :'
            },
            'sportsDescription' : {
                'en' : 'Soccer, Running, Biking, Tennis and Body-building',
                'fr' : 'Football, course à pied, vélo de route, tennis et musculation'
            },
            'cinema' : {
                'en' : 'Cinema:',
                'fr' : 'Cinéma :'
            },
            'cinemaDescription' : {
                'en' : 'War related movies and American television series',
                'fr' : 'Films de guerre, comédies et séries américaines'
            },
            'computer' : {
                'en' : 'Computer:',
                'fr' : 'Informatique :'
            },
            'computerDescription' : {
                'en' : 'Online video games and reading articles about new technologies',
                'fr' : 'Jeux vidéo en ligne et lecture d\'articles sur les nouvelles technologies'
            },
            'music' : {
                'en' : 'Music:',
                'fr' : 'Animateur :'
            },
            'musicDescription' : {
                'en' : 'Disc Jockey at weddings and student parties',
                'fr' : 'Disc Jockey de mariages et de soirées étudiantes'
            },
            'communityLife' : {
                'en' : 'Community Life',
                'fr' : 'Vie Associative'
            },
            'assom' : {
                'en' : 'Director, Sports Sector',
                'fr' : 'Responsable Sport au Bureau de l\'ASSOM en 2011'
            },
            'assomDescription' : {
                'en' : '- (Association of Students From Marseille ASSOM) - I was elected in 2011 as the director and organized student events, music festivals, carnivals and sports meetings for 450-8000 students.',
                'fr' : '- Association des Etudiants Marseillais - Organisation de soirées étudiantes, carnaval, traversée du Vieux Port, Fête de la Musique et de rencontres sportives'
            },
            'assoLink' : {
                'en' : 'See the association\'s website here:',
                'fr' : 'Le site web de l\'association, ici :'
            },
            'esil' : {
                'en' : 'In charge of relations between ASSOM and BDESIL in 2011',
                'fr' : 'Responsable ASSOM au Bureau Des Elèves de l\'ESIL en 2011'
            },
            'esilDescription' : {
                'en' : '(the Students Bureau of ESIL)',
                'fr' : '- Gestion des relations entre les deux associations'
            },
            'downloadResume' : {
                'en' : 'My resume in PDF',
                'fr' : 'Mon CV en PDF'
            },
            'downloadResumeTitle' : {
                'en' : 'Download',
                'fr' : 'Téléchargement'
            },
            'topOfPage' : {
                'en' : 'Go to page top',
                'fr' : 'Haut de page'
            }
        }
    };

})();