const toggle = document.getElementById('twoLineToggle');
const panel = document.getElementById('navPanel');

toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
        panel.classList.remove('open');
    }
});

document.querySelectorAll('.panel a').forEach(link => {
    link.addEventListener('click', () => panel.classList.remove('open'));
});

// THEME LOGIC
document.querySelectorAll('.theme-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        const colors = {
            'red': '#e11d48',
            'green': '#10b981',
            'blue': '#3b82f6',
            'purple': '#A855F7',
            'gold': '#A7834f'
        };
        document.documentElement.style.setProperty('--accent', colors[theme]);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease-out";
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 100);
    });
});
