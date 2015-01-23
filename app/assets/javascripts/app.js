$(document).ready(function(){

  $('.add-song').on('click',function(e){
    var track_parent = $(this).closest('div[class="track"]');
    var track_title = track_parent.find('h3[class="title"]').text();
    var art_url = track_parent.find('span[class="artwork"]').text()
    var track_url = track_parent.find('span[class="track_url]').text();

  });

  $('.track').on('click', function(){
    var track_url = $(this).find('span[class="track_url"]').text();
    console.log(track_url);

    soundManager.onready(function() {
    // SM2 is ready to go!
    // soundManager.createSound(), etc.
    var mySound = soundManager.createSound({
      id: 'mySound',
      url: 'https://api.soundcloud.com/tracks/94513154/stream?client_id=1931311a85d3f849f5e5cf60070cffad',
      autoLoad: true,
      autoPlay: false,
      onload: function() {
      alert('The sound '+this.id+' loaded!');
        },
      volume: 50
      });
    mySound.play();
    });

  });

});