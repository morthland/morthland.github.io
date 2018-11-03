function PortCtrl ($scope) {
  $scope.portfolio = [
  {
    name: 'Hero 2 Hired',
    url: 'http://andrewmorthland.com/work/h2h',
	type: 'Web Design - UI - Mobile - Print',
	img: 'http://andrewmorthland.com/img/h2h.jpg'
   },
  {
    name: 'Program Apollo',
    url: 'http://andrewmorthland.com/work/programapollo',
	  type: 'Web Design - UX - UI',
	  img: 'http://andrewmorthland.com/img/programapollo.jpg'
    },
  {
    name: 'H2H Career Assistant App',
    url: 'http://andrewmorthland.com/work/careerassistant',
	  type: 'Mobile -Tablet - UX - UI',
	  img: 'http://andrewmorthland.com/img/careerassistant.jpg'
    },
	{
    name: 'picSnack',
    url: 'http://andrewmorthland.com/work/picsnack',
	  type: 'Web Design - UX - UI',
	  img: 'http://andrewmorthland.com/img/picsnack.jpg'
    },
	{
    name: 'Anchorman Poster',
    url: 'http://andrewmorthland.com/work/anchorman',
	  type: 'Illustration Project',
	  img: 'http://andrewmorthland.com/img/anchorman.jpg'
    },
	{
    name: 'Guitaropedia',
    url: 'http://andrewmorthland.com/work/guitaropedia',
    type: 'Web Design - UX - UI - Project',
    img: 'http://andrewmorthland.com/img/guitaropedia-2.jpg'
    },
	{
    name: 'H2H Mobile App',
    url: 'http://andrewmorthland.com/work/h2h-mobile',
	  type: 'Mobile - UX - UI',
	  img: 'http://andrewmorthland.com/img/h2hmobile.jpg'
    },
	{
    name: 'Orlando Utilities Commission',
    url: 'http://andrewmorthland.com/work/ouc',
	  type: 'Web Design',
	  img: 'http://andrewmorthland.com/img/ouc.jpg'
    },
	{
    name: 'Ferrari Redesign',
    url: 'http://andrewmorthland.com/work/ferrari',
	  type: 'Web Design - UI - Project',
	  img: 'http://andrewmorthland.com/img/ferrari.jpg'
    },
	{
    name: 'Hooah Interactive',
    url: 'http://andrewmorthland.com/work/hooah',
	  type: 'Web Design - UI',
	  img: 'http://andrewmorthland.com/img/hooah-2010.jpg'
    },
	{
    name: 'OUC - Orlando Magic PSA',
    url: 'http://andrewmorthland.com/work/ouc-psa',
	  type: 'Video - Graphic Design',
	  img: 'http://andrewmorthland.com/img/ouc-magic.jpg'
    },
	{
    name: 'Spectrum Bridge',
    url: 'http://andrewmorthland.com/work/spectrumbridge',
	  type: 'Web Design - UI',
	  img: 'http://andrewmorthland.com/img/spectrumbridge.jpg'
    },
	{
    name: 'SpecEx',
    url: 'http://andrewmorthland.com/work/specex',
	  type: 'Web Design - UI',
	  img: 'http://andrewmorthland.com/img/specex.jpg'
    },
	{
    name: 'UGS Carpet Cleaners',
    url: 'http://andrewmorthland.com/work/ugscarpet',
	  type: 'Web Design - UI',
	  img: 'http://andrewmorthland.com/img/carpet-1.jpg'
    },
	{
    name: 'Smartwaves',
    url: 'http://andrewmorthland.com/work/smartwaves',
	  type: 'Web Design - UI',
	  img: 'http://andrewmorthland.com/img/smartwaves.jpg'
    },
	{
    name: 'Thrice Tour Poster',
    url: 'http://andrewmorthland.com/work/thrice',
	  type: 'Poster Project',
	  img: 'http://andrewmorthland.com/img/thrice.jpg'
    },
	{
    name: 'Thursday Cityscape',
    url: 'http://andrewmorthland.com/work/thursday',
	  type: 'Graphic Design Project',
	  img: 'http://andrewmorthland.com/img/thursday.jpg'
    },
  ];
}


/*-----------------------------------------------------------------------------------*/
/* Isotope
/*-----------------------------------------------------------------------------------*/

jQuery.noConflict()(function($){
var $container = $('#portfolio-items');
        
        if($container.length) {
            $container.waitForImages(function() {
                
                // initialize isotope
                $container.isotope({
                  itemSelector : '.block',
                  layoutMode : 'fitRows'
                });
                
                // filter items when filter link is clicked
                $('#filters li a').click(function(){
                  var selector = $(this).attr('data-filter');
                  $container.isotope({ filter: selector });
                  $(this).parent().addClass('current').siblings().removeClass('current');
                  return false;
                });
                
            },null,true);
        }});