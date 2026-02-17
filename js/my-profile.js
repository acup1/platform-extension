setTimeout(() => {
	const script = document.createElement("script");
	script.textContent = `
function myprofile(avatar) {
	const cache = window.__APOLLO_CLIENT__.cache.data.data;
	const userRef = cache.ROOT_QUERY?.user?.getCurrentUser?.__ref;
	const login = cache[userRef].login;

  if (!login) {
	  setTimeout(() => {myprofile(avatar);}, 500);
    return;
  }

  avatar.src="https://rocketchat-student.21-school.ru/avatar/" + login;
  avatar.dataset.avSet = 'true';
}

new MutationObserver(function(mutations) {
	avatar = document.querySelector(".MuiPaper-root").querySelector(".MuiAvatar-img");
	if (avatar && !avatar.dataset.avSet) {
		myprofile(avatar);
	}
}).observe(document.body, {
	childList: true,
	subtree: true
});
  `;
	document.documentElement.appendChild(script);

	// script.remove();
}, 1000);
