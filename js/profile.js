setTimeout(() => {
	function setprofav(avatar) {
		avatar.src =
			"https://rocketchat-student.21-school.ru/avatar/" +
			window.location.toString().split("/").at(-1);
		avatar.dataset.avSet = "true";
	}

	new MutationObserver(function (mutations) {
		avatar = document
			.querySelector(".MuiPaper-root")
			.querySelector(".MuiAvatar-img");
		if (avatar && !avatar.dataset.avSet) {
			setprofav(avatar);
		}
	}).observe(document.body, {
		childList: true,
		subtree: true,
	});
}, 1000);
