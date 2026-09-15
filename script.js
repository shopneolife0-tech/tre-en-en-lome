// Fonction pour scroller vers une section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Fonction pour traiter l'envoi du formulaire
function handleSubmit(event) {
    event.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const form = event.target;
    const nom = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Afficher un message de confirmation
    alert(`Merci ${nom}!\n\nVotre message a été reçu.\nNous vous répondrons à ${email} très bientôt.`);
    
    // Réinitialiser le formulaire
    form.reset();
    
    // Vous pouvez ajouter ici un appel API pour envoyer l'email
    // fetch('/api/send-email', { method: 'POST', body: ... })
}

// Ajouter des animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les témoignages et cartes
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.temoignage, .card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Ajouter un effet de navigation active
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-menu a').forEach(a => a.style.color = 'white');
        this.style.color = '#d8f3dc';
    });
});

// Mode sombre toggle (optionnel)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Charger le mode sombre s'il était activé
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
