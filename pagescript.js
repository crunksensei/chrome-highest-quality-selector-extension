console.log('External script loaded');

function setYouTubeVideoQualityToFirstAvailable() {
  const player = document.getElementById("movie_player");
  if (player && typeof player.getAvailableQualityLevels === 'function') {
    const availableQualities = player.getAvailableQualityLevels();
    if (availableQualities && availableQualities.length > 0) {
      player.setPlaybackQualityRange(availableQualities[0]);
      console.log(`Playback quality set to ${availableQualities[0]}`);
    } else {
      console.log("No available qualities found or player not available.");
    }
  }
}

function waitForVideoChangeAndReact() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          setYouTubeVideoQualityToFirstAvailable();
          break; 
        } 
      } 
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true 
    });
  }

    waitForVideoChangeAndReact();

