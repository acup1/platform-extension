setTimeout(() => {
	function competition_av(avatar) {
		avatar.src =
			"https://rocketchat-student.21-school.ru/avatar/" +
			avatar.parentElement.parentElement.querySelector("h5").textContent;
		avatar.dataset.avSet = "true";
	}

	new MutationObserver(function (mutations) {
		avatars = document
			.querySelector("#root")
			.querySelectorAll(".MuiAvatar-img");
		for (let i = 0; i < avatars.length; i++) {
			if (!avatars[i].dataset.avSet) {
				competition_av(avatars[i]);
			}
		}
	}).observe(document.body, {
		childList: true,
		subtree: true,
	});
}, 1000);
