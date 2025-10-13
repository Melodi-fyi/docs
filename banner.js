// Simple announcement banner script
(function() {
  function createBanner() {
    // Create banner HTML
    const banner = document.createElement('div');
    banner.className = 'announcement-banner';
    banner.innerHTML = `
      <div class="announcement-banner-text">
        <strong>The Melodi platform will be discontinued on November 1, 2025.</strong><br>
        Please download any data you wish to keep before this date. Thank you for being part of our journey.
      </div>
    `;

    // Insert at the beginning of body
    document.body.insertBefore(banner, document.body.firstChild);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBanner);
  } else {
    createBanner();
  }
})();