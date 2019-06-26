$(document).ready(function() {
	var panelControl = '<div class=\"panelControl\"><button class=\"darkT\">Thème Dark</button><button class=\"defaultT\">Thème par defaut</button></div>';
	var topPage = $('#topPage'); // background-color: rgba(255,255,255,0.9);
	var jQueryTest = $('#jquery-test'); // background:#f4364c;
	var JqueryTestLoad = $('#jquery-test.loaded'); // background:#45b29d;
	var logoBorder = $('.logo'); // border-bottom: 2px solid grey;
	var teamNameBorder = $('.teamName'); // border-bottom: 1px solid black; et border-top: 1px solid black;
	var navTitre = $('.navTitle'); // background-color: rgba(200,200,200,0.45);
	var themePanel = $('.theme');

	// base color text nav
	$('nav a').css({
		color: 'darkblue',
		fontSize: '16px'
	});

    // Panel Control du theme.
    $(themePanel).append(panelControl);
	$('.panelControl').css({
		fontSize: '18px',
		textAlign: 'center',
	    marginRight: 'auto',
	    marginLeft: 'auto',
	    fontSize: '17px',
	    width: '200px',
	    borderBottom: '1px solid'
	});

	$('.teamName').on('mouseover', function() {
		$('.teamName').css({
			cursor : 'pointer'
		});
	});

	$('.darkT, .defaultT').css({
		border: 'none',
		backgroundColor: 'rgba(0,0,0,0)',
		cursor : 'pointer'
	});

	$(themePanel).hide();

	$('.teamName').on('click', function() {
		$(themePanel).slideToggle();
		// Couleur des textes des boutons theme
		$('.panelControl *').css({
			fontSize: '16px',
			color: 'darkblue'
		});

		// Btn theme
		
	    $('.darkT').mouseover('on', function() {
	        $('.darkT').css({
	        	boxShadow: '0px 0px 5px 1px gray'
	    	});
	    });

	    $('.darkT').mouseout('on', function() {
	        $('.darkT').css({
	        	boxShadow: 'none'
	    	});
	    });

	    //Btn default
	    $('.defaultT').mouseover('on', function() {
	        $('.defaultT').css('boxShadow', '0px 0px 5px 1px gray');
	    });

	    $('.defaultT').mouseout('on', function() {
	        $('.defaultT').css('boxShadow', 'none');
	    });

	    //Changement de theme pour un theme sombre
		$('.darkT').on('click', function() {
			
 			// Apparence Sombre
			$(topPage).css({
				backgroundColor : 'rgba(12,12,12,0.9)'
			});
			$(jQueryTest).css({
				backgroundColor: 'green'//'rgba(200,200,200,0.85)'
				
			});
			$(JqueryTestLoad).css({
				backgroundColor : 'navy'
			});
			$(logoBorder).css({
				borderBottom: '2px solid grey'
			});
			$(teamNameBorder).css({
				color: 'rgba(240,210,50,0.9)',
				borderBottom: '1px solid white',
				borderTop: '1px solid white'
			});
			$(navTitre).css({
				backgroundColor : 'rgba(48,48,48,0.65)'
			});

			$('nav a').css({
				color: 'beige'
			});
			
			$('.panelControl').css({
				borderBottom: '3px double beige',
				borderRight: '2px dashed white',
				borderLeft: '2px dashed white'
			});
			$('.panelControl *, nav a').css({
				color: 'beige'
			});
			$('footer').css({
				backgroundColor: 'rgba(12,12,12,0.9)'
			});
			$('footer span').css({
				color: 'grey',
				fontSize: '16px'
			});

		});

		$('.defaultT').on('click', function() {
			// Apparence par defaut du site
			$(topPage).css({
				backgroundColor : 'rgba(255,255,255,0.9)'
			});
			$('.panel').css({
				backgroundColor : '#f4364c',
				color: '#fff'
			});
			$('.panel').css({
				backgroundColor : '#45b29d'
			});
			$(logoBorder).css({
				borderBottom: '2px solid grey'
			});
			$(teamNameBorder).css({
				color: 'black',
				borderBottom: '1px solid black',
				borderTop: '1px solid black'
			});
			$(navTitre).css({
				backgroundColor : 'rgba(200,200,200,0.45)'
			});
			$('nav a').css({
				color: 'darkblue'
			});
			$('.panelControl').css({
				borderBottom: '1px solid',
				borderRight: 'none',
				borderLeft: 'none'
			});
			$('.panelControl *, nav a').css({
				color: 'darkblue'
			});
			$('footer').css({
				backgroundColor: 'rgba(200,200,200,0.65)'
			});
			$('footer span').css({
				color: 'black',
				fontSize: '15px'
			});
		});
	});
});