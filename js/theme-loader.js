
(function() {
  try {
        const theme = localStorage.getItem('tema') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    console.log("theme-loader.js çalışmıyor")
  }
})();