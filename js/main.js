window.onload = function() {

	if (window.jQuery) {
		//Quand jQuery est chargé
		document.getElementById('jquery-test').classList.add('loaded');
	}

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

		$(invisible).hide();
		$(dropdown).hide();

		$(btnRule).mouseover('on', function() {
			$(dropdown).slideToggle();
		});

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

		//Nav Bar
		
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

	});
}