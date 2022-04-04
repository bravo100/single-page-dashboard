/** @format */

export default class {
	constructor() {}

	setTitle(title) {
		document.title = title;
	}

	async getHtml() {
		return ``;
	}

	css(link) {
		[...document.querySelectorAll(`.nav-link`)].forEach(nav => {
			nav.classList.remove(`active`);

			if (nav.classList.contains(link)) {
				nav.classList.add(`active`);
				console.log(nav);
			}

			nav.addEventListener(`click`, () => {
				[...document.querySelectorAll(`.nav-link`)].forEach(item => {
					item.classList.remove(`active`);
				});

				if (nav.classList.contains(link)) {
					nav.classList.add(`active`);
					console.log(nav);
				}
			});
		});
	}
}
