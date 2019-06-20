window.onload = function() {

	if (window.jQuery) {
		//Quand jQuery est chargé
		document.getElementById('jquery-test').classList.add('loaded');
	}

    var messEvent = "<p>Tournois Flash: <br/></br> Bientôt les informations</p>";
    var monthPlayer = '<p> <span>El Nachos</span> <br/><br/> Pour un superbe Kill au Taser.</p>';
    var pubLast = '<p>Recrutement Ouvert:<br/> rejoingner le groupe steam pour avoir accès a notre discord et pouvoir postuler</p>';
    var event = "<div class=\"plus\">plusEvent</div>";

	$(document).ready(function() {
		//Le code jQuery commence ici
		var nav = $('.navTitle');
		var carousel = $('.carousel');
		var discord = $('.discord');
		var evenement = $('.event');
		var playerMonth = $('.playerMonth');
		var publication = $('.pub');
		var dropdown = $('.dropdown');
		var btnRule = $('.rule');
		var invisible = $('.no');

        //Nav Bar 
		$(invisible).hide();
		$(dropdown).hide();

		$(btnRule).mouseover('on', function() {
			$(dropdown).show();
		});

        //Evènement player of month et publication on main page
        $(evenement).append(messEvent);
        $(playerMonth).append(monthPlayer);
        $(publication).append(pubLast);

		var carouselImg = [
		"images/20190424130402_1.jpg",
		"images/20190426154905_1.jpg",
		"images/28449230087_b9bd4f54f2_z.png",
		"images/43318585051_863a55223e_z.png",
		"images/CSGO-BADGES.png",
		"images/fortnite-4129124_960_720.jpg",
		"images/fortnite-4129124_960_720.png",
		"images/IMG_2484.jpg",
		"images/rank_images.jpg"
		];

		var imgNum = 0;
		
		//Carrousel
        var nextImg = function() {

        	imgNum++;

        	if (imgNum >= carouselImg.length) {
                imgNum = 0;
            } else if (imgNum < 0) {
                imgNum = carouselImg.length - 1;
            }

            carousel.attr('src', carouselImg[imgNum]);
            setTimeout(nextImg, 1500);
        
        }; nextImg();

        //La Page Staff
        var staff = $('.fondateur, .sO');
        var teamA = $('.sA');
        var teamB = $('.sB');
        var teamC = $('.sC');
        $(staff).hide();
        $(teamA).hide();
        $(teamB).hide();
        $(teamC).hide();

        //Staff Panel
        $('.overS').on('click', function() {
        	$(staff).slideDown( function() {
        		$('.sO .idBloc, .fondateur').css({
        			backgroundImage: 'url("../images/bg/bgOrtest.png")',
        			backgroundSize: 'cover'
        		});
        	});
        	$('.overS').css({
        		boxShadow: '0px 0px 5px 1px gray',
        		backgroundImage: 'url("../images/bg/1.png")',
        		backgroundSize: 'cover'
        	});
        });

        $('.overS').on('mouseover', function() {
        	$(staff).slideUp(1500, function() {
        		$('.overS').css({
        		backgroundImage: 'none',
        		backgroundColor: 'rgba(0,0,0,0)',
        		boxShadow: 'none'
        		});
        	});
        });

        //Team Alpha
        $('.overA').on('click', function() {
        	$(teamA).show(1500, function() {
        		$('.sA .idBloc').css({
        			backgroundImage: 'url("../images/bg/bgOrtest.png")',
        			backgroundSize: 'cover'
        		});
        	}).fadeIn();
        	$('.overA').css({
        		boxShadow: '0px 0px 5px 1px gray',
        		backgroundImage: 'url("../images/bg/1.png")',
        		backgroundSize: 'cover'
        	});
        });

        $('.overA').on('mouseover', function() {
        	$(teamA).hide(1500, function() {
        		$('.overA').css({
        		backgroundImage: 'none',
        		backgroundColor: 'rgba(0,0,0,0)',
        		boxShadow: 'none'
        		});
        	}).fadeOut();
        });

        //Team Bravo
        $('.overB').on('click', function() {
        	$(teamB).show(1500, function() {
        		$('.sB .idBloc').css({
        			backgroundImage: 'url("../images/bg/rondale.png")',
        			backgroundSize: 'cover'
        		});
        		$('.sB h4').css('color', 'goldenrod');
        		$('.sB h5').css('color', 'gold');
        		$('.sB p').css('color', 'white');
        	});
        	$('.overB').css({
        		boxShadow: '0px 0px 5px 1px gray',
        		backgroundImage: 'url("../images/bg/1.png")',
        		backgroundSize: 'cover'
        	});
        });

        $('.overB').on('mouseover', function() {
        	$(teamB).hide(1500, function() {
        		$('.overB').css({
        		backgroundImage: 'none',
        		backgroundColor: 'rgba(0,0,0,0)',
        		boxShadow: 'none'
        		});
        	});
        });

        //Team Charlie
        $('.overC').on('click', function() {
        	$(teamC).show(1500, function() {
        		$('.sC .idBloc').css({
        			backgroundImage: 'url("../images/bg/bg.png")',
        			backgroundSize: 'cover'
        		});
        		$('.sC h4').css('color', 'gold');
        		$('.sC h5').css('color', 'navy');
        		$('.sC p').css('backgroundColor', 'rgba(200,200,200,0.4)')
                .css('color', 'rgb(66,0,255)');
        	});
        	$('.overC').css({
        		boxShadow: '0px 0px 5px 1px gray',
        		backgroundImage: 'url("../images/bg/1.png")',
        		backgroundSize: 'cover'
        	});
        });

        $('.overC').on('mouseover', function() {
        	$(teamC).hide(1500, function() {
        		$('.overC').css({
        		backgroundImage: 'none',
        		backgroundColor: 'rgba(0,0,0,0)',
        		boxShadow: 'none'
        		});
        	});
        });
	});
}