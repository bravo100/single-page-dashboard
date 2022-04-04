import Dashbord from "./Views/Dashbord.js";
import Posts from "./Views/Posts.js";
import Settings from "./Views/Settings.js";

/** @format */
const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
	const routes = [
		{ path: '/', view: () => new Dashbord },
		{ path: '/posts', view: () => new Posts },
		{ path: '/settings', view: () => new Settings },
	];

	// test routes for potential match
	const potentialMatches = routes.map(route => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
  });

	let match = potentialMatches.find(
		potentialMatch => potentialMatch.isMatch === true,
  );
  
  if (!match) {
    match = {
			route: { path: '/error', view: () => console.log(`Viewing Error Page..`) },
			isMatch: true,
		};
  }

  const view = match.route.view();

  document.querySelector(`#app`).innerHTML = await view.getHtml();

	console.log(match.route.view());
};

window.addEventListener(`popstate`, router);

document.addEventListener(`DOMContentLoaded`, () => {
  document.body.addEventListener(`click`, e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

	router();
});
