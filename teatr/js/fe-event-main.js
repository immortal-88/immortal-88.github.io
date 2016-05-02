/*===================================================



------------------ FE-EVENT-MAIN.JS  ---------------



===================================================*/




/*-------- Page Load --------*/



addEventListener("load",function()
{


	var loader = fe.g("i","loader");

	loader.style.display = "none";


	/* Плавная загрузка страницы */


	var feWrapper              = fe.g("i","fe-wrapper");

	feWrapper.style.transition = "opacity " + fe_s.loadSpeed + "s";
	feWrapper.style.opacity    = "1";



	/*======== Пользовательские события ========*/

	var headerLogo = fe.g("i","header_logo");

	if(screen.height < 800)
	{

		headerLogo = fe.g("i","header_logo");

		headerLogo.style.padding = "25px 0px 22px";

	}


	var categoryButton = fe.g("i","category-button");
	var category       = fe.g("i","category");

	categoryButton.addEventListener("mousemove",function()
	{

		 fe.open( fe.g("i","category"));

	});


	category.addEventListener("mouseleave",function()
	{

		 fe.close( fe.g("i","category"));

	});


	headerLogo.addEventListener("mouseover",function()
	{

		 fe.close( fe.g("i","category"));

	});

	/*---*/

	var smallMenuButtton = fe.g("i","small-menu-buttton");
	var btnState = false;

	smallMenuButtton.addEventListener("click",function()
	{
		if (btnState) {
			$('#small-menu-buttton').toggleClass('inverse-small-menu-buttton');
			btnState = false;
		}
		if ($('#menu-small').css('display') == 'none' && $('#small-menu-buttton').hasClass('inverse-small-menu-buttton')) {
			$('#small-menu-buttton').toggleClass('inverse-small-menu-buttton');
			btnState = true;
		}
		fe.click( fe.g("i","menu-small"));
	});

	/*---*/

	var headerLogoImage = fe.g("i","header_logo_image");

	headerLogoImage.addEventListener("mouseover",function()
	{
		var value = fe_g.logoDeg + 360;
		headerLogoImage.style.transform = "rotate(" + value.toString() + "deg)";

		fe_g.logoDeg = fe_g.logoDeg + 360 ;

	});


});



/*-------- Page Resize --------*/



addEventListener("resize",function()
{



});



/*-------- Page Scroll --------*/



addEventListener("scroll",function()
{



});
