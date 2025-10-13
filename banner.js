// Simple announcement banner script
(function() {
  function createBanner() {
    // Create banner HTML
    const banner = document.createElement('div');
    banner.className = 'announcement-banner';
    banner.innerHTML = `
      <div class="announcement-banner-text">
        <strong>The Melodi platform will be discontinued on November 1, 2025.</strong><br>
        Please <a href="/getting-started/exporting-data" style="color: #1e1e1e; text-decoration: underline; font-weight: bold; display: inline-flex; align-items: center; gap: 4px;">export your data <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a> before this date. Thank you for being part of our journey.
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