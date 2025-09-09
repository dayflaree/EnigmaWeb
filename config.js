// SCP: Enigma Website Configuration
// All text content is centralized here for easy editing

const CONFIG = {
    // Site Information
    site: {
        title: "SCP: Enigma",
        tagline: "A survival horror video game based on the SCP Foundation, set in the massive underground facility ARC Site-88.",
        description: "Play as a D-Class test subject during a major containment breach. Escape the facility whilst being hunted by SCPs."
    },

    // Navigation
    navigation: {
        home: "Home",
        whatIs: "What is SCP-Enigma?",
        howCanI: "How can I...",
        resources: "Resources"
    },

    // Dropdown Menus
    dropdowns: {
            howCanI: [
                { text: "Follow development", url: "https://discord.gg/MbKPDUyC4j" },
                { text: "Apply to contribute", url: "contributor.html" }
            ],
        resources: [
            { text: "Youtube channel", url: "https://www.youtube.com/@FemurBreakerOW" },
            { text: "Gamejolt", url: "https://gamejolt.com/games/enigmascp/712297" },
            { text: "Itch.io", url: "https://scp-enigma.itch.io/game" }
        ]
    },

    // Action Buttons
    buttons: {
        play: "Play",
        explore: "Explore", 
        support: "Support"
    },

    // News Section
    news: {
        title: "News",
        headline: "No new updates at the moment",
        content: "We're currently working hard on the next update. Stay tuned for more information coming soon!",
        linkText: "",
        linkUrl: "#",
        endText: ""
    },

    // What is SCP Enigma Page
    whatIs: {
        title: "What is SCP Enigma",
        intro: "SCP: Enigma is a survival horror video game based on stories and SCP entries from the SCP Foundation writing community. Set in a massive underground facility called ARC Site-88, you play as a D-Class disposable test subject when a major containment breach occurs and several anomalies called SCPs are released in the facility. The player must escape the facility whilst being hunted by SCPs, with Metroidvania-style randomly generated maps being a major element.",
        goal: "The game's goal is simple - Survive, if you can.",
        disclaimer: "Some assets used in SCP: Enigma are sourced from SCP: Unity with explicit permission from the artists (currently active under the Aethon Collective) who created them. Our project takes inspiration from SCP: Unity, as it started as a spiritual successor to the game, but has now diverged from the path Aerie Gaming Studios was taking.",
        galleryTitle: "Development Screenshots",
        galleryDisclaimer: "Everything shown here is early development and most definitely will be changed later in development.",
        galleryCategories: {
            "Level Design": [
                { src: "resources/development/map/0140eec1-ae8b-4263-892a-f4885cb1eb19-ctgrcumg.png", alt: "Level Design - Facility Layout" },
                { src: "resources/development/map/2f30df60-747b-4efc-b7b8-a4452ee98b0a-xwrwh2zr.png", alt: "Level Design - Corridor System" },
                { src: "resources/development/map/b21db3bd-b5a6-4e03-be4f-b222581945e6-d48v2eee.png", alt: "Level Design - Storage Area" },
                { src: "resources/development/map/capture-frqy44m3.png", alt: "Level Design - Map Overview" },
                { src: "resources/development/map/image_1.png", alt: "Level Design - Map Layout 1" },
                { src: "resources/development/map/image2.png", alt: "Level Design - Area Design" },
                { src: "resources/development/map/image6.png", alt: "Level Design - Navigation Map" },
                { src: "resources/development/map/unknown-5-jfvbnwe5.png", alt: "Level Design - Sector Planning" }
            ],
            "Modeling": [
                { src: "resources/development/models/cachedImage2.png", alt: "3D Model - Model Render" },
                { src: "resources/development/models/capture-rrefd2id.png", alt: "3D Model - Model Development" },
                { src: "resources/development/models/screen_shot_2022-09-27_at_3-20-05_pm-p2wcssik.png", alt: "3D Model - Character Design" },
                { src: "resources/development/models/screen_shot_2022-10-07_at_10-16-54_am-ehtiv3vd.png", alt: "3D Model - Environment Asset" },
                { src: "resources/development/models/unknown-10-hpepusk8.png", alt: "3D Model - Prop Creation" },
                { src: "resources/development/models/unknown-6-xahzjcgu.png", alt: "3D Model - Object Modeling" },
                { src: "resources/development/models/unknown-7-9zjvqycw.png", alt: "3D Model - Asset Development" },
                { src: "resources/development/models/unknown-9-r7cxdrhg.png", alt: "3D Model - Model Texturing" }
            ],
            "Art": [
                { src: "resources/development/art/2be34333-2bcd-4065-8a2e-de401f3299b0-mymbk4v7.png", alt: "Concept Art - Environment" },
                { src: "resources/development/art/61803270-5831-4a1c-bb56-0e6afada4ddd-zq8xqupr.png", alt: "Concept Art - SCP Design" },
                { src: "resources/development/art/bf8b0088-1c3b-4688-8da0-3c54373985a5-dgypsus2.png", alt: "Concept Art - Facility Design" },
                { src: "resources/development/art/e7b7e2da-d907-438f-a4f3-9c1d053ee017-wspedhuw.png", alt: "Concept Art - Atmospheric Design" },
                { src: "resources/development/art/e8536ee3-8019-4981-b1a6-6c34d2ed304e-jxzuyvp4.png", alt: "Concept Art - Visual Style" },
                { src: "resources/development/art/Engima106Poster.png", alt: "Art - SCP-106 Poster Design" },
                { src: "resources/development/art/Enigma049.png", alt: "Art - SCP-049 Character Art" },
                { src: "resources/development/art/sl2_T_junction_conceptB06.PNG", alt: "Concept Art - T-Junction Design B" }
            ]
        }
    },

    // Contributor Page
    contributor: {
        title: "Become a Contributor",
        content: "Thanks so much for your interest in working on SCP: Enigma! At this time, we are not currently looking to fill any positions, but check this page and keep in touch in our Discord server to get notified should that change!",
        goBack: "Go back"
    }
};

// Function to populate text content
function populateTextContent() {
    // Update page title
    document.title = CONFIG.site.title;
    
    // Update navigation text
    const navElements = {
        'nav-home': CONFIG.navigation.home,
        'nav-what-is': CONFIG.navigation.whatIs,
        'nav-how-can-i': CONFIG.navigation.howCanI,
        'nav-resources': CONFIG.navigation.resources
    };
    
    Object.entries(navElements).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) {
            // For dropdown toggles, preserve the arrow
            if (id === 'nav-how-can-i' || id === 'nav-resources') {
                const arrow = element.querySelector('.dropdown-arrow');
                if (arrow) {
                    element.innerHTML = text + ' <span class="dropdown-arrow">▼</span>';
                } else {
                    element.textContent = text;
                }
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update dropdown content
    updateDropdownContent('how-can-i-dropdown', CONFIG.dropdowns.howCanI);
    updateDropdownContent('resources-dropdown', CONFIG.dropdowns.resources);
    
    // Update main content based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        updateHomePage();
    } else if (currentPage === 'what-is.html') {
        updateWhatIsPage();
    } else if (currentPage === 'contributor.html') {
        updateContributorPage();
    }
}

function updateDropdownContent(dropdownId, items) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;
    
    dropdown.innerHTML = '';
    items.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.text;
        dropdown.appendChild(link);
    });
}

function updateHomePage() {
    // Update site title and description
    const titleElement = document.getElementById('site-title');
    if (titleElement) titleElement.textContent = CONFIG.site.title;
    
    const taglineElement = document.getElementById('site-tagline');
    if (taglineElement) taglineElement.textContent = CONFIG.site.tagline;
    
    const descriptionElement = document.getElementById('site-description');
    if (descriptionElement) descriptionElement.textContent = CONFIG.site.description;
    
    // Update buttons
    const playBtn = document.getElementById('play-btn');
    if (playBtn) playBtn.textContent = CONFIG.buttons.play;
    
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) exploreBtn.textContent = CONFIG.buttons.explore;
    
    const supportBtn = document.getElementById('support-btn');
    if (supportBtn) supportBtn.textContent = CONFIG.buttons.support;
    
    // Update news section
    const newsTitle = document.getElementById('news-title');
    if (newsTitle) newsTitle.textContent = CONFIG.news.title;
    
    const newsHeadline = document.getElementById('news-headline');
    if (newsHeadline) newsHeadline.textContent = CONFIG.news.headline;
    
    const newsContent = document.getElementById('news-content');
    if (newsContent) {
        newsContent.innerHTML = `${CONFIG.news.content} <a href="${CONFIG.news.linkUrl}" class="news-link">${CONFIG.news.linkText}</a> ${CONFIG.news.endText}`;
    }
}

function updateWhatIsPage() {
    const titleElement = document.getElementById('what-is-title');
    if (titleElement) titleElement.textContent = CONFIG.whatIs.title;
    
    const introElement = document.getElementById('what-is-intro');
    if (introElement) introElement.textContent = CONFIG.whatIs.intro;
    
    const goalElement = document.getElementById('what-is-goal');
    if (goalElement) goalElement.textContent = CONFIG.whatIs.goal;
    
    const disclaimerElement = document.getElementById('what-is-disclaimer');
    if (disclaimerElement) disclaimerElement.textContent = CONFIG.whatIs.disclaimer;
    
    const galleryTitleElement = document.getElementById('gallery-title');
    if (galleryTitleElement) galleryTitleElement.textContent = CONFIG.whatIs.galleryTitle;
    
    const galleryDisclaimerElement = document.getElementById('gallery-disclaimer');
    if (galleryDisclaimerElement) galleryDisclaimerElement.textContent = CONFIG.whatIs.galleryDisclaimer;
    
    // Initialize gallery
    initializeGallery();
}

function updateGoalSection(goalId, goalData) {
    const titleElement = document.getElementById(`${goalId}-title`);
    if (titleElement) titleElement.textContent = goalData.title;
    
    const descElement = document.getElementById(`${goalId}-description`);
    if (descElement) descElement.textContent = goalData.description;
}

function updateContributorPage() {
    const titleElement = document.getElementById('contributor-title');
    if (titleElement) titleElement.textContent = CONFIG.contributor.title;
    
    const contentElement = document.getElementById('contributor-content');
    if (contentElement) contentElement.textContent = CONFIG.contributor.content;
    
    const goBackBtn = document.getElementById('go-back-btn');
    if (goBackBtn) goBackBtn.textContent = CONFIG.contributor.goBack;
}

// Gallery functionality
let currentImageIndex = 0;
let currentCategory = "Level Design";
let currentImages = [];

function initializeGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    
    // Clear existing content
    galleryContainer.innerHTML = '';
    
    // Create category navigation
    const categoryNav = document.createElement('div');
    categoryNav.className = 'gallery-categories';
    
    Object.keys(CONFIG.whatIs.galleryCategories).forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.textContent = category;
        categoryBtn.className = `gallery-category-btn ${category === currentCategory ? 'active' : ''}`;
        categoryBtn.onclick = () => switchCategory(category);
        categoryNav.appendChild(categoryBtn);
    });
    
    // Create main image display
    const mainImage = document.createElement('img');
    mainImage.id = 'gallery-main-image';
    mainImage.className = 'gallery-main-image';
    
    // Create navigation arrows
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '❮';
    prevButton.className = 'gallery-arrow gallery-prev';
    prevButton.onclick = () => previousImage();
    
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '❯';
    nextButton.className = 'gallery-arrow gallery-next';
    nextButton.onclick = () => nextImage();
    
    // Create thumbnail navigation
    const thumbnailsContainer = document.createElement('div');
    thumbnailsContainer.className = 'gallery-thumbnails';
    
    // Assemble gallery
    galleryContainer.appendChild(categoryNav);
    galleryContainer.appendChild(prevButton);
    galleryContainer.appendChild(mainImage);
    galleryContainer.appendChild(nextButton);
    galleryContainer.appendChild(thumbnailsContainer);
    
    // Initialize with first category (after elements are in DOM)
    switchCategory(currentCategory);
}

function switchCategory(category) {
    currentCategory = category;
    currentImages = CONFIG.whatIs.galleryCategories[category];
    currentImageIndex = 0;
    
    // Update category button active states
    const categoryBtns = document.querySelectorAll('.gallery-category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.textContent === category);
    });
    
    // Update main image
    const mainImage = document.getElementById('gallery-main-image');
    if (mainImage && currentImages[0]) {
        mainImage.src = currentImages[0].src;
        mainImage.alt = currentImages[0].alt;
    }
    
    // Update thumbnails
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        currentImages.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image.src;
            thumbnail.alt = image.alt;
            thumbnail.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.onclick = () => showImage(index);
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
}

function showImage(index) {
    currentImageIndex = index;
    const mainImage = document.getElementById('gallery-main-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    
    if (mainImage && currentImages[index]) {
        mainImage.src = currentImages[index].src;
        mainImage.alt = currentImages[index].alt;
    }
    
    // Update thumbnail active state
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function nextImage() {
    const nextIndex = (currentImageIndex + 1) % currentImages.length;
    showImage(nextIndex);
}

function previousImage() {
    const prevIndex = currentImageIndex === 0 ? currentImages.length - 1 : currentImageIndex - 1;
    showImage(prevIndex);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', populateTextContent);
