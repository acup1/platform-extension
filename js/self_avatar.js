setTimeout(() => {
	const script = document.createElement("script");
	script.textContent = `
function setav(avatar) {
  console.log("SETTING YOUR AVATAR");
	const cache = window.__APOLLO_CLIENT__.cache.data.data;
	const userRef = cache.ROOT_QUERY?.user?.getCurrentUser?.__ref;
	const login = cache[userRef].login;
  console.log(login);

  if (!login) {
	  setTimeout(() => {setav(avatar);}, 500);
    return;
  }

	avatar.src = "https://rocketchat-student.21-school.ru/avatar/" + login;
  avatar.dataset.avSet = 'true';
}

new MutationObserver(function(mutations) {
	avatar = document.querySelector('[data-testid="UserMenuWidget.MoreInfoButton"]').querySelector(".MuiAvatar-img");
	if (avatar && !avatar.dataset.avSet) {
		setav(avatar);
	}
	avatar = document.querySelector('.MuiAvatar-root').querySelector(".MuiAvatar-img");
	if (avatar && !avatar.dataset.avSet) {
		setav(avatar);
	}
}).observe(document.body, {
	childList: true,
	subtree: true
});
  `;
	document.documentElement.appendChild(script);

	// script.remove();
}, 1000);
