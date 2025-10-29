document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const overlay = document.getElementById('overlay');
    const notification = document.getElementById('notification');
    const cards = document.querySelectorAll('.card');
    const helpBtn = document.getElementById('helpBtn');
    window.addEventListener('load', () => document.body.classList.add('loaded'));

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open-sidebar');
        overlay.classList.toggle('active');
        document.body.classList.toggle('sidebar-open');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('open-sidebar');
        overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    });

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            showNotification('جاري التوجيه إلى الصفحة المطلوبة...');
            setTimeout(() => {
                window.open(link, '_blank');
            }, 1500);
        });
    });

    if (helpBtn) {
        helpBtn.addEventListener('click', function() {
            showNotification('جاري فتح نموذج المساعدة...');
            setTimeout(() => {
                window.open('https://forms.gle/DDrXWiVJXBqMLpgH7', '_blank');
            }, 1500);
        });
    }

    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 1400);
    }
});
