let AUDIO_DIE_CORONA_FLEDERMAUS = new Audio('audio/diecoronafledermaus.mp3');
let AUDIO_ASTRARAKETE = new Audio('audio/astrarakete.mp3');
let AUDIO_KENN_DEIN_LIMIT = new Audio('audio/kenndeinlimit.mp3');
let AUDIO_MEISTER_GUCCI = new Audio('audio/meistergucci.mp3');
let AUDIO_NOCH_MEHR_KORN = new Audio('audio/nochmehrkorn.mp3');
let AUDIO_JOHNNYS_ROTES_AUTO = new Audio('audio/johnnysrotesauto.mp3');
let AUDIO_STAFFELSAUFEN = new Audio('audio/staffelsaufen.mp3');

let currentsong = 0;

let producers = [
    {
        'user': 'Johannes Günther',
        'image': 'img/marmor2.jpg',
        'description': 'Aufgewachsen im schönen Moisburg an der Este studierte Johannes Musik und Audioproduktion. Seit 2022 betreibt er JG Tonkunst, wo er neben vielfältigen Musikdienstleistungen wie Live Musik oder Auftragsproduktionen auch vielen jungen talentierten Künstlern eine Plattform zum Aufstieg bietet.'
    }
];

let labelartists = [
    {
        'user': 'Pamy Deluxe',
        'image': 'img/pamydeluxe.png',
        'description': 'Pamy Deluxe, ist eine Singer & Songwriterin aus Hamburg. Mit ihrer Ukulele "Lilly" singt sie schöne Songs, oder sie stellt ihre bezauberne Stimme für elektronische Beats zur Verfügung.'
    },
    {
        'user': 'DJ Möwenfick',
        'image': 'img/djmöwenfick.jpg',
        'description': 'DJ Möwenfick ist Hamburger DJ und Musikproduzent aus der deutschsprachigen Schlager und Trash Szene.'
    },
    {
        'user': 'Janybody',
        'image': 'img/janybody.jpg',
        'description': 'Janybody, gebürtige Hamburgerin, ist ein absolutes allround Talent. Neben Songs aus dem Rock, Pop oder Akkustik Bereich, ist sie auch für elektronische Musik zu haben und überzeugt mit einer unglaublich vielfältigen Stimme'
    },
    {
        'user': 'Green Dave',
        'image': 'img/greendave.png',
        'description': 'Green Dave, die Grasvernichtungmaschiene, Songwriter und Sänger'
    },
    {
        'user': 'Lenny King',
        'image': 'img/lenny.jpg',
        'description': 'Einfach nur Lennard'
    }
];


let posts = [
    {
        'postimage': 'img/fledermaus.jpg',
        'description': 'Frohe Halloween!',
        'music': AUDIO_DIE_CORONA_FLEDERMAUS,
        'title': "Die Corona Fledermaus",
        'artist': "DJ Möwenfick feat. Janybody",
        'smartlink': "https://ditto.fm/die-corona-fledermaus-halloween_998ffb5352",
        'mp3': 'audio/diecoronafledermaus.mp3',
        'comments': [
            {'commentator': 'Pamy Deluxe', 'comment': 'Gruuuselig'},
            {'commentator': 'Janybody', 'comment': 'Einen Fledermausblutt Cocktail bitte!'},
            {'commentator': 'DJ Möwenfick', 'comment': 'Liebe Grüße aus der Unterwelt :$'}
        ]
    },
    {
        'postimage': 'img/24.png',
        'description': 'Astrarakete bis zum Mars!',
        'music': AUDIO_ASTRARAKETE,
        'title': "Astrarakete",
        'artist': "DJ Möwenfick feat. Green Dave, Pamy Deluxe, Janybody",
        'smartlink': "",
        'mp3': 'audio/astrarakete.mp3',
        'comments': [
            {'commentator': 'Green Dave', 'comment': 'Ab zum Mars! :D'}
        ]
    },
    {
        'postimage': 'img/rotesauto.jpg',
        'description': 'Vatertag letztes Jahr tanken wir bei 6 kmh!',
        'music': AUDIO_JOHNNYS_ROTES_AUTO,
        'title': "Johnnys Rotes Auto",
        'artist': "DJ Möwenfick feat. Green Dave, Lenny King, Janybody, Pamy Deluxe",
        'smartlink': "https://ditto.fm/johnnys-rotes-auto-vatertag-remastered-2022",
        'mp3': 'audio/johnnysrotesauto.mp3',
        'comments': [
            {'commentator': 'Green Dave', 'comment': 'Vollgas!!!'},
            {'commentator': 'Lenny King', 'comment': 'Voll wie die Bollerwagen'},
            {'commentator': 'Pamy Deluxe', 'comment': 'Tretboot fahren <3'},
            {'commentator': 'DJ Möwenfick', 'comment': 'ÖÖÖÖÖÖ!!!'},
        ]
    },
    {
        'postimage': 'img/kdl.png',
        'description': 'Dont drink and drive!',
        'music': AUDIO_KENN_DEIN_LIMIT,
        'title': "Kenn dein Limit",
        'artist': "DJ Möwenfick",
        'smartlink': "https://ditto.fm/kenn-dein-limit",
        'mp3': 'audio/kenndeinlimit.mp3',
        'comments': [
            {'commentator': 'DJ Möwenfick', 'comment': 'Special THANKS to Nick & Theseus! Und Pamy Deluxe natürlich auch!'},
            {'commentator': 'Janybody', 'comment': 'Don´t drink and drive!'}
        ]

    },
    {
        'postimage': 'img/gucci.png',
        'description': 'Bleibe immer in deiner inneren Mitte',
        'music': AUDIO_MEISTER_GUCCI,
        'title': "Meister Gucci",
        'artist': "DJ Möwenfick feat. GucciMcNuggets",
        'smartlink': "https://ditto.fm/meister-gucci_90bf01ab31",
        'mp3': 'audio/meistergucci.mp3',
        'comments': []
    },
    {
        'postimage': 'img/korn.jpg',
        'description': 'Appelbeck am See einen Tanklaster bitte!',
        'music': AUDIO_NOCH_MEHR_KORN,
        'title': "Noch mehr Korn",
        'artist': "DJ Möwenfick feat. Pamy Deluxe",
        'smartlink': "https://ditto.fm/noch-mehr-korn",
        'mp3': 'audio/diecoronafledermaus.mp3',
        'comments': [{'commentator': 'Pamy Deluxe', 'comment': 'Appelbeck <333'}]

    },
    {
        'postimage': 'img/staffelsaufen.jpg',
        'description': 'Herzlich Willkommen zum diesjährigen olympischen Staffelsaufen',
        'music': AUDIO_STAFFELSAUFEN,
        'title': "Staffelsaufen",
        'artist': "DJ Möwenfick feat. Janybody",
        'smartlink': "https://ditto.fm/staffelsaufen",
        'mp3': 'audio/staffelsaufen.mp3',
        'comments': []
    }
];

function ShowBurgerMenu(i) {
    let idname = 'burgermenu' + i;
    document.getElementById(idname).classList.remove('d-none');

}


function showArtistSongs(n) {
    for (i = 0; i < posts.length; i++) {
        const element = posts[i];
        if (element['artist'].includes(labelartists[n]['user'])) {
            document.getElementById('viewusersonglist').innerHTML += /*html*/ `
        <div onclick="playSong(${i})" class="viewusersongcontainer margin">
            <img src="${element['postimage']}" class="viewusersongimg">
                <div class="viewusersongdata">
                    <span>${element['artist']}</span>
                    <span>${element['title']}</span>
                </div>
        </div>
    `;
        }
    }
}

function showArtistPage(i) {
    let bgrgrey = document.getElementById('bgr-grey');
    bgrgrey.classList.remove('d-none');
    bgrgrey.innerHTML = /*html*/ `
    <div onclick="donotclose(event);" id="bgr-viewuser" class="bgr-viewuser scroll">
        <h2>${labelartists[i]['user']}</h2>
        <img src="${labelartists[i]['image']}" class="viewuser-img">
        <p>ARTIST</p>
        <!-- <div class="viewuser-likes-container">
            <img class="margin" src="img/favorite-3-24.jpg">
            <div>
                <span>Gefällt
                    <span class="viewuseramountoflikes" id="amountoflikes">1.288.384</span>
                    Mal</span>
            </div>
        </div> -->
        <p class="viewuserinfotext text-center margin">
            ${labelartists[i]['description']}
        </p>

        <div id="viewusersonglist" class="viewusersonglist">
    </div>
</div>
    `;
    showArtistSongs(i);
}

function donotclose(event) {
    event.stopPropagation();
}

function closeArtistPage() {
    document.getElementById('bgr-grey').classList.add('d-none');
}

let searchedpost = '';
function setSearch() {
    searchedpost = document.getElementById('search').value;
    searchedpost = searchedpost.toLowerCase();
}

function changePlayButtonToPause(i) {
    document.getElementById('playandpausecontainer').innerHTML = `
    <img onclick="pauseSong(${i})" id="playandpausebutton" class="soundplayericon" src="icons/pause.png"">
    `;
}

function showAudioPlayerData(i) {
    document.getElementById('songplayertitle').innerHTML = posts[i]['title'];
    document.getElementById('songplayerartist').innerHTML = posts[i]['artist'];
    document.getElementById('songplayerimg').src = posts[i]['postimage'];
}

function playSong(i) {
    if (currentsong >= 0) {
        pauseSong(currentsong);
    }
    posts[i]['music'].play();
    currentsong = i;
    showAudioPlayerData(i);
    changePlayButtonToPause(i);
}

function pauseSong(i) {
    posts[i]['music'].pause(i);
    changePauseButtonToPlay(i);
}

function changePauseButtonToPlay(i) {
    document.getElementById('playandpausecontainer').innerHTML = `
    <img onclick="playSong(${i})" id="playandpausebutton" class="soundplayericon" src="icons/play.png"">
    `;
    // document.getElementById('playandpausebutton').onclick="playSong();"
}

function nextSong() {
    pauseSong(currentsong);
    currentsong++;
    if (currentsong == posts.length) {
        currentsong = 0;
    }
    playSong(currentsong);
}

function previousSong() {
    pauseSong(currentsong);
    currentsong--;
    playSong(currentsong);
}

function showposts() {
    let postcontainer = document.getElementById('postcontainer');
    postcontainer.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (post['artist'].toLowerCase().includes(searchedpost) || post['title'].toLowerCase().includes(searchedpost)) {
            returnPostTemplate(postcontainer, post, i);
            showComments(post, i);
        }
       
    }
}

function showProducersPage() {
    let bgrgrey = document.getElementById('bgr-grey');
    bgrgrey.classList.remove('d-none');
    for (let i = 0; i < producers.length; i++) {
        const element = producers[i];
        bgrgrey.innerHTML = /*html*/ `
    <div onclick="donotclose(event)" id="bgr-viewuser" class="bgr-viewuser scroll">
        <h2>${element['user']}</h2>
        <img src="${element['image']}" class="viewuser-img">
        <p>Producer, A&R, Artist</p>
        <p class="viewuserinfotext text-center margin">
            ${element['description']}
        </p>

        <div id="viewusersonglist" class="viewusersonglist">
         </div>
    </div>
    `;
    }
    showProducersSongs();
}

function showProducersSongs() {
    for (i = 0; i < posts.length; i++) {
        const element = posts[i];
        document.getElementById('viewusersonglist').innerHTML += /*html*/ `
        <div onclick="playSong(${i})" class="viewusersongcontainer margin">
            <img src="${element['postimage']}" class="viewusersongimg">
                <div class="viewusersongdata">
                    <span>${element['artist']}</span>
                    <span>${element['title']}</span>
                </div>
        </div>
    `;
    }
}


function showLabelArtists() {
    let producer = document.getElementById('usercontainer')
    for (let i = 0; i < producers.length; i++) {
        const element = producers[i];
        producer.innerHTML = /* html */ `
                    <div class="usercontainerleft">
                        <img onclick="showProducersPage(${i})" class="userprofilpicture" src="${element['image']}">
                        <div class="usernamecontainer d-none-mobile">
                            <span onclick="showProducersPage(${i})" class="username"><b>${element['user']}</b></span>
                            <span class="usersrealname">Producer, A&R, Artist</span>
                        </div>
                    </div>
                    <a onclick="showProducersPage(${i})" class="changeaccount d-none-mobile"><b>Profil anzeigen</b></a>    
        `;
    }

    let suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = ``;
    for (i = 0; i < labelartists.length; i++) {
        const suggest = labelartists[i];
        suggestions.innerHTML += /*html*/ `
            <div class="otherusercontainer">
                <div class="otherusercontainerleft">
                    <img onclick="showArtistPage(${i})" class="otheruserprofilpicture" src="${suggest['image']}">
                    <div class="otherusernamecontainer d-none-mobile">
                        <span onclick="showArtistPage(${i})" class="otherusername"><b>${suggest['user']}</b></span>
                        <span class="otherusersrealname">Artist</span>
                    </div>
                </div>
                <a onclick="showArtistPage(${i})" class="changeaccount d-none-mobile"><b>Profil anzeigen</b></a>
            </div>
    `;
    }
}

function showContactWindow() {
    document.getElementById('contactwindow').classList.remove('d-none');
}

function closeContactWindow() {
    document.getElementById('contactwindow').classList.add('d-none');
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}