$(document).ready(function(){
    //AJAX poziv
    $('#search').on('click', function(){
        if($('#artist').val().trim() != '' && $('#song').val().trim() != ''){
            var prx = 'https://thingproxy.freeboard.io/fetch/';
            $.ajax({
                type: 'GET',
                //koristim ovaj proxy kako bi izbjegao CORS grešku
                url: 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect',
                data: {artist: $('#artist').val().trim(), song: $('#song').val().trim()},
                dataType: 'xml',
            }).done(function( xml ) {
                var izv = $(xml).find('LyricArtist').text();
                var nasl = $(xml).find('LyricSong').text();
                var header = '<h2>'+izv+'</h2><h1>'+nasl+'</h1></br>';
                var tekst = '';
                if($(xml).find('Lyric').text()!=''){
                    tekst = $(xml).find('Lyric').text();
                }else(tekst = '<p>Tekst za ovu pjesmu jos nije unesen!</p>')
                $('#tekst').html(header+tekst).wrap('<pre />');
                $('#cover').attr('src',$(xml).find("LyricCovertArtUrl").html());
            }).fail(function(jqXHR, textStatus, errorThrown) {
                alert(textStatus);
            });
        }
        else{
            alert('Morate unijeti izvođača i pjesmu!');

        }
    });

    //PROMJENA TEME
    var dan = '<i class="fas fa-sun sjaj"></i>';
    var noc = '<i class="fas fa-moon sjaj"></i>';

    $( ".change" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
            $( "body" ).removeClass( "dark" );
            $( "body" ).addClass( "light" );
            $( ".change" ).html( dan );
        } else {
            $( "body" ).removeClass( "light" );
            $( "body" ).addClass( "dark" );
            $( ".change" ).html( noc );
        }
    });
    var x = ($('nav').outerHeight(true)*1.5+'px');
    $('.dan-noc').css('top',$('nav').outerHeight(true));
    $('#box').css('margin-top',x);
    $('#box').css('margin-bottom',x);


    //PRIJEDLOZI ZA PRETRAZIVANJE IZ BAZE
    var odabir = false;
    $('#artist, #song').keyup(function(){
        if($('#artist').val()!='' || $('#song').val()!=''){
            
            if($('#song').is(":focus")){
                $('#livesearch').css('left',$('#song').offset().left);
                odabir = true;
            }else{$('#livesearch').css('left',$('#artist').offset().left);odabir=false;}
        
            $.ajax({
                type: 'POST',
                url: 'dodaci/pretraga.php',
                data:{
                    artist:$('#artist').val(),
                    title:$('#song').val(),
                    odabir:odabir,
                },
                function(data, status){
                    alert("Data: " + data + "\nStatus: " + status);
                },
                success:function(data){
                    $('#livesearch').html(data);
                }

            });
        }
    });
    
    //ZATVARA SE LISTA KOD INPUTA KOJI NIJE AKTIVAN
    $("body").on('click','li', function(){
        if(odabir){
            $('#song').val($(this).html());

        }else{
            $('#artist').val($(this).html());
        }
        $('#livesearch').html('');
    });

    //LISTA PRIJEDLOGA :IZGLED I PREMJESTANJE ISPOD ODABRANOG INPUTA
    $('#livesearch').css('width', $('#artist').css('width'));
    $('#livesearch').css('top', $('#artist').outerHeight(true)+$('#artist').offset().top);
    $('#livesearch').css('left',$('#artist').offset().left);
    $('#livesearch').css('background-color',$('nav').css('background-color'));
});
