import { 
    NavbarComponent, 
    FooterComponent, 
    ThemeSwitcherComponent,
    HomeProjectCardComponent,
    ProjectPageCardComponent,
    ButtonComponent 
} from './components.js'; // './' aynı klasörde demektir.


"use strict";

// --- 1. VERİ (DATA) ---
const allProjectsData = [
    {
      id: "weather-app",
      title: "🌤 Hava Durumu Uygulaması",
      description: "Şehir seçerek sahte JSON verilerle hava durumunu göster.",
      projectLink: "javascript/havadurumukartlari/index.html",
      tags: ['Arayüz', 'Veri İşleme']
    },
    {
      id: "movie-app",
      title: "🎬 Film Arama Uygulaması",
      description: "OMDb API ile film ara, detaylarını görüntüle. Modern arayüz!",
      projectLink: "javascript/findmovie/index.html",
      tags: ['Arayüz', 'API'] 
    },
    {
      id: "todo-app",
      title: "📝 Yapılacaklar Listesi",
      description: "Görev ekle, tamamla ve tarayıcı hafızasına kaydet.",
      projectLink: "javascript/basittodolist/index.html",
      tags: ['Arayüz', 'Veri Saklama'] 
    },
    {
      id: "color-app",
      title: "Renk Değiştirme",
      description: "Rasgele renk gösterir.",
      projectLink: "javascript/renkdegistirme/index.html",
      tags: ['Arayüz'] 
    },
    {
      id: "keyboard-app",
      title: "Klavye Eventleri",
      description: "JSON ile çekilmiş basit bir Klavye Eventi.",
      projectLink: "javascript/klavyeeventleri/index.html",
      tags: ['Veri İşleme', 'DOM']
    },
    {
      id: "counter-app",
      title: "Sayaç",
      description: "Sayacı azalt arttır sıfırla.",
      projectLink: "javascript/sayac/index.html",
      tags: ['Arayüz', 'DOM']
    },
    
];
const homeProjectsData = [
    {
      id: "weather-app-home",
      imageSrc: "img/weather.jpg",
      title: "🌤 Hava Durumu Uygulaması",
      description: "Şehir seçerek anlık hava durumunu gösterir.",
    },
    {
      id: "movie-app-home",
      imageSrc: "img/movie.jpg",
      title: "🎬 Film Arama Uygulaması",
      description: "OMDb API ile film ara, detaylarını görüntüle.",
    },
    {
      id: "todo-app-home",
      imageSrc: "img/todo.jpg",
      title: "📝 Yapılacaklar Listesi",
      description: "Kodla geliş, sadece zamanı yakala.",
    },
];

// --- 2. ANA UYGULAMA MANTIĞI ---
document.addEventListener("DOMContentLoaded", () => {

    // --- BİLEŞENLER ---
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = NavbarComponent();
    }
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = FooterComponent();
    }
    const themePlaceholder = document.getElementById("theme-switcher-placeholder");
    if (themePlaceholder) {
        themePlaceholder.innerHTML = ThemeSwitcherComponent();
    }
     const homeBtnPlaceholder = document.getElementById('home-hero-button-placeholder');
    if (homeBtnPlaceholder) {
        homeBtnPlaceholder.innerHTML = ButtonComponent({
            link: 'project.html',
            text: 'Projelerime Git',
            styleClass: 'hero-btn'
        });
    }

    // --- ELEMENTLER VE DEĞİŞKENLER---
    const themeSelect = document.getElementById("theme-select");
    const hamburger = document.getElementById("hamburger-link");
    const sideMenu = document.getElementById("side-menu");
    const closeBtn = document.getElementById("close-btn");
    const homeProjectList = document.querySelector(".project-list");
    const projectsSection = document.querySelector(".projects-section");
    const searchInput = document.getElementById('project-search-input');
    let bubbleIntervalId = null;

    // --- FONKSİYONLAR ---

    function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const blueTones = [
      "rgba(135, 206, 235, 0.7)",
      "rgba(144, 202, 249, 0.4)",
      "rgba(0, 191, 255, 0.6)",
    ];
    const bg = blueTones[Math.floor(Math.random() * blueTones.length)];
    bubble.style.background = `radial-gradient(circle, ${bg}, rgba(255,255,255,0.3))`;

    bubble.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 60 + 90;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.animationDuration = Math.random() * 0 + 1 + "s";

    document.getElementById("bubble-container").appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("tema", theme);
    if (bubbleIntervalId) {
      clearInterval(bubbleIntervalId);
    }

    if (theme === "sungerbob") {
      bubbleIntervalId = setInterval(createBubble, 7);
      console.log("Süngerbob modu AÇILDI! Animasyon başlamalı.");
      setTimeout(() => {
        clearInterval(bubbleIntervalId);
      }, 750);
    }
  };
    function renderProjects(projectsToRender) {
        if (!projectsSection) return;

        if (projectsToRender.length === 0) {
            projectsSection.innerHTML = `<p class="no-results">Aradığınız kriterlere uygun proje bulunamadı.</p>`;
            
            return;
        }
        const projectsHTML = projectsToRender.map(proje => ProjectPageCardComponent(proje)).join('');
        projectsSection.innerHTML = projectsHTML;
    }
    if (homeProjectList) {
        const homeProjectsHTML = homeProjectsData.map(proje => HomeProjectCardComponent(proje)).join('');
        homeProjectList.innerHTML = homeProjectsHTML;
    }

    if (projectsSection) {
        renderProjects(allProjectsData);
    }
 
    const savedTheme = localStorage.getItem("tema") || "light";
    if (themeSelect) {
        themeSelect.value = savedTheme;
    }
    applyTheme(savedTheme);

    if (searchInput) { 
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProjects = allProjectsData.filter(({ title, description }) => {
                return title.toLowerCase().includes(searchTerm) || description.toLowerCase().includes(searchTerm);
            });
            renderProjects(filteredProjects);
        });
    }
    if (themeSelect) {
        themeSelect.addEventListener("change", (e) => {
            applyTheme(e.target.value);
        });
    }
    if (hamburger && sideMenu) {
        hamburger.addEventListener("click", () => {
            sideMenu.classList.toggle("active");
        });
    }
    if (closeBtn && sideMenu) {
        closeBtn.addEventListener("click", () => {
            sideMenu.classList.remove("active");
        });
        sideMenu.addEventListener("mouseleave", () => {
            sideMenu.classList.remove("active");
        });
    }
// --- YENİ BÖLÜM: Proje İstatistiklerini Hesapla ---
const tagCounts = allProjectsData.reduce((sayac, proje) => {
    proje.tags.forEach(tag => {
        if (sayac[tag]) {
            sayac[tag]++;
        } else {
            sayac[tag] = 1;
        }
    });
    return sayac;
}, {});
console.log(tagCounts);
const statsContainer = document.getElementById('project-stats-container');

if (statsContainer && tagCounts) {
    let statsHTML = '<h3>Proje Kategorileri:</h3><div class="stats-list">';
    for (const tag in tagCounts) {
        statsHTML += `<span class="tag-stat">${tag}: <strong>${tagCounts[tag]}</strong> Proje</span>`;
    }

    statsHTML += '</div>';
    statsContainer.innerHTML = statsHTML;
}
});