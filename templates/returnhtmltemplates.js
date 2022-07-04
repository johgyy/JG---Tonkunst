function returnPostTemplate(postcontainer, post, i) {
    return postcontainer.innerHTML += /*html*/ `
    <div class="post">
        <div class="postheadcontainer">
            <div class="postheadleft">
                <img onclick="playSong(${i})" class="postheadimg" src="${post['postimage']}">
                <div class="postheadlefttext">
                    <span onclick="playSong(${i})" class="otherusername"><b>${post['title']}</b></span>
                    <span class="location">${post['artist']}</span>
                </div>
            </div>
            <img onclick="ShowBurgerMenu(${i})" class="postheadoptions cursor-pointer" src="icons/3points.jpg">
        </div>
       <!-- ab hier das burgermenu -->
        <div id="burgermenu${i}" class="burgermenu d-none text-center">
            <a class="download-button" href="${posts[i]['mp3']}" download>Download mp3</a>
            <a class="download-button" href="${posts[i]['postimage']}" download>Download Cover</a>
        </div>


        <img onclick="playSong(${i})" src="${post['postimage']}" class="postimg">
        <div class="postinfo">
            <div class="postinfo1bar">
            <span class="comment"><b> ${post['description']}</b></span>
            </div>
            <div class="comments-container">
            <span class="links"><b><a class="smartlink" href="${post['smartlink']}">VIEW SMARTLINK</a></b></span>
            
            <!-- hier die kommentarsektion -->
            <div id="comments-container${i}" class="comments-container">
                        <!-- <a class="comment text-grey" href="#"><span>Alle Kommentare anzeigen</span></a> -->
                        <!-- <div class="timepoint text-grey">VOR 21 Stunden</div> -->
            </div>

        </div>
`
}

function showComments(post, i) {
    let nameofcommentid = 'comments-container' + i;
    for (j = 0; j < post['comments'].length; j++) {
        document.getElementById(nameofcommentid).innerHTML += /*html*/ `
    <div class="commentcontainer">
        <span class="comment"><b>${post['comments'][j]['commentator']}</b> ${post['comments'][j]['comment']}</span>
        <a href=""><img class="likecomment" src="icons/favorite-3-24.jpg"></a>
    </div>`        
    };
}