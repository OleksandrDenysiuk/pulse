window.addEventListener('DOMContentLoaded', () => {

	const slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		nav: false
	});

	document.querySelector('.prev').addEventListener('click', function () {
		slider.goTo('prev');
	});

	document.querySelector('.next').addEventListener('click', function () {
		slider.goTo('next');
	});

	const tabsParent = document.querySelector('.catalog__tabs'),
		tabs = document.querySelectorAll('.catalog__tab'),
		catalogsContent = document.querySelectorAll('.catalog__content'),
		linksForward = document.querySelectorAll('.catalog-item__link'),
		linksBack = document.querySelectorAll('.catalog-item__back');

	function disactiveTabs(tabs) {
		tabs.forEach(tab => {
			tab.classList.remove('catalog__tab_active');
		});
	}

	function activateTab(tab) {
		tab.classList.add('catalog__tab_active');
	}

	function hideTabsCatalog(catalogs) {
		catalogs.forEach(catalog => {
			catalog.classList.remove('catalog__content_active');
		});
	}

	function showTabCatalog(catalog) {
		catalog.classList.add('catalog__content_active');
	}

	tabsParent.addEventListener('click', e => {
		const target = e.target;
		if (target && target.classList.contains('catalog__tab')) {
			disactiveTabs(tabs);
			activateTab(target);
			tabs.forEach((tab, i) => {
				if (tab == target) {
					hideTabsCatalog(catalogsContent);
					showTabCatalog(catalogsContent[i]);
				}
			});
		} else {
			const currentTab = target.parentElement;
			if (currentTab.classList.contains('catalog__tab')) {
				disactiveTabs(tabs);
				activateTab(currentTab);
				tabs.forEach((tab, i) => {
					if (tab == currentTab) {
						hideTabsCatalog(catalogsContent);
						showTabCatalog(catalogsContent[i]);
					}
				});
			}
		}
	});

	function setActionToLinks(links) {
		links.forEach((link, i) => {
			link.addEventListener('click', e => {
				e.preventDefault();
				document.querySelectorAll('.catalog-item__content')[i].classList.toggle('catalog-item__content_active');
				document.querySelectorAll('.catalog-item__list')[i].classList.toggle('catalog-item__list_active');
			});
		});
	}

	setActionToLinks(linksForward);
	setActionToLinks(linksBack);

});