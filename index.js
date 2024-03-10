function skipIntro() {
  var skipButton = document.querySelectorAll(
    'button[data-uia="player-skip-intro"]'
  );
  skipButton.forEach(function (skip) {
    skip.click();
  });
}
if (location.href && location.href.includes("netflix.com/watch")) {
  var mutationCallback = function (mutationsList) {
    for (var mutation of mutationsList) {
      if (mutation.type === "childList") {
        skipIntro();
      }
    }
  };
  var observer = new MutationObserver(mutationCallback);
  observer.observe(document.body, { childList: true, subtree: true });
  skipIntro();
}
