function expandVideo(videoContainer) {
    let expanded = videoContainer.classList.contains("fullscreen");

    if (!expanded) {
        // Expand the video
        videoContainer.classList.add("fullscreen");
        let video = videoContainer.querySelector("video");
        video.play();

        // Close the video if clicked again
        videoContainer.addEventListener("click", function closeVideo(event) {
            if (event.target.closest("video")) {
                videoContainer.classList.remove("fullscreen");
                video.pause();
                videoContainer.removeEventListener("click", closeVideo);
            }
        });
    }
}

function expandImage(picture) {
    if (picture.classList.contains("expanded")) {
        picture.classList.remove("expanded");
    } else {
        picture.classList.add("expanded");
    }
}