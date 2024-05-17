function downloadVideo() {
    // Replace the URL with the actual URL of the video file
    const wickFileUrl = 'ocean.wick';
    const anchor = document.createElement('a');
    anchor.href = wickFileUrl;
    anchor.download = 'ocean.wick';
    anchor.click();
}