/**
 * Yeniden kullanılabilir bir buton HTML'i oluşturur.
 * @param {object} props - Butonun özelliklerini içeren obje.
 * @param {string} props.link - Butonun yönlendireceği URL.
 * @param {string} props.text - Butonun üzerinde yazacak metin.
 * @param {string} [props.styleClass=''] - Butona eklenecek ekstra CSS class'ı (isteğe bağlı).
 * @returns {string} - Oluşturulan A etiketi HTML'i.
 */
function ButtonComponent({ link, text, styleClass = "" }) {
  return `
    <a href="${link}" class="btn ${styleClass}">
      ${text}
    </a>
  `;
}
function HomeProjectCardComponent({
  imageSrc,
  altText,
  title,
  description,
  link,
}) {
  return `

      <div class="project-card">
        <img src="${imageSrc}" alt="${altText}" />
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
  
  `;
}

function ProjectPageCardComponent({ title, description, projectLink }) {
  return `
    <div class="project-card">
        <h3>${title}</h3>
        <p>${description}</p>
        
        ${ButtonComponent({
          link: projectLink,
          text: "Projeyi Gör",
          styleClass: "project-card-btn",
        })}

    </div>
  `;
}
function NavbarComponent() {
  return `
   <nav class="navbar">
          
    <div class="nav-container">
      
        <a href="home.html" class="nav-brand">👩‍💻 Rukiye Anar</a>
        <div class="nav-links">
            <a href="about.html" id="about">Hakkımda</a>
            <a href="project.html" id="project">Projelerim</a>
            <a href="contact.html" id="contact">İletişim</a>
        </div>
            <div id="theme-switcher-placeholder"></div>
        <div id="hamburger-link">☰</div>
    </div>
    <div id="side-menu">
    <a href="#" id="close-btn">×</a>
    <a href="about.html">Hakkımda</a>
    <a href="project.html">Projelerim</a>
    <a href="contact.html">İletişim</a>
    
  </div>
</nav>

  `;
}
function FooterComponent() {
  return `
<footer class="footer">
    <div class="footer-inner">

      <div class="footer-col brand">
        <h2>Rukiye ANAR</h2>
        <p>Modern ve yaratıcı web çözümleri. Web dünyasında iz bırakmak için buradayız.</p>
      </div>

      <div class="footer-col links">
        <h3>Bağlantılar</h3>
        <ul>
          <li><a href="home.html">Anasayfa</a></li>
          <li><a href="project.html">Projeler</a></li>
          <li><a href="about.html">Hakkımda</a></li>
          <li><a href="contact.html">İletişim</a></li>
        </ul>
      </div>

      <div class="footer-col contact">
        <h3>İletişim</h3>
        <p> erenrukk@gmail.com</p>
        <p> +90 534 730 2818</p>
        <div class="social-icons">
          <a href="https://github.com/rukiye-anar"><img src="img/github-icon.png" alt="GitHub"></a>
          <a href="https://linkedin.com/in/rukiyeanar"><img src="img/linkedin-icon.png" alt="LinkedIn"></a>
          <a href="#"></a>
           
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Rukiye ANAR | Tüm Hakları Saklıdır.</p>
    </div>
  </footer>

  `;
}
function ThemeSwitcherComponent() {
  return `
    <div class="theme-switcher">
        <select id="theme-select">
            <option value="light">Açık</option>
            <option value="dark">Koyu</option>
            <option value="soft">Yumuşak</option>
            <option value="sungerbob">Süngerbob</option>
        </select>
    </div>
  `;
}
