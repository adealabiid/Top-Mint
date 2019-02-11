(() => {
	const links = document.getElementsByClassName('link');
	const navbar = document.getElementById("navbar");
	const logoMobile = document.getElementById("logo-mobile");
	const navbarMobile = document.getElementById("navbar-mobile");
	const level = document.getElementsByClassName("level-item");
	const logo = document.querySelector("a.link>img");
	console.log(logoMobile.currentSrc)
	const scrollFunction = () => {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			navbar.style.backgroundColor = "white";
			navbarMobile.style.backgroundColor = "white";
			navbar.style.height = "100px";
			navbar.style.boxShadow = "-5px 1px 8px 4px green";
			logo.style.margin = '-30px 0 0';
			logoMobile.src = "./images/svg/menu_alt.svg"
			for (let i = 0; i < links.length; i++) {
				const el = links[i];
				const par = level[i];
				el.style.color = 'green';
				par.style.alignItems = 'center';
			}
		} else {
			navbar.style.backgroundColor = "transparent";
			navbarMobile.style.backgroundColor = "transparent";
			logoMobile.src = "./images/svg/menu.svg"
			navbar.style.boxShadow = "none";
			for (let i = 0; i < links.length; i++) {
				const el = links[i];
				el.style.color = 'white';
			}
		}
	}

	window.onscroll = () => scrollFunction();

	document.addEventListener('DOMContentLoaded', function () {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems);
	});
})()