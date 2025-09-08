
(function() {
  try {
        const theme = localStorage.getItem('tema') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    console.log("theme-loader.js çalışmıyor")
  }
})();
//try catch yapısı maliyetli bir işlem olduğu için mümkün olan daha az maliyetli bir kullanım varsa öğren try catch yapısını zorunlu olmadukça kullanma 