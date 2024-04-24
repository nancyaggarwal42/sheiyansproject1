var scrollTimeout;

function stopScroll() {
  clearTimeout(scrollTimeout);
  document.querySelector('.image-container').style.overflowX = 'hidden';
}

function resumeScroll() {
  scrollTimeout = setTimeout(function() {
    document.querySelector('.image-container').style.overflowX = 'auto';
  }, 1000); // Adjust the delay as needed
}