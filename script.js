const toggle = document.getElementById('Toggle');
const menu = document.getElementById('navMenu');

function aturMenu(opened) {
    toggle.classList.toggle('active', opened);
    menu.classList.toggle('active', opened);

    toggle.setAttribute('aria-expanded', String(opened));
    toggle.setAttribute(
        'aria-label',
        opened ? 'close' : 'open'
    );}

toggle.addEventListener('click', function () {
    const opened = toggle.getAttribute('aria-expanded') === 'true';
    aturMenu(!opened);
});

    //tutup menu kalo ada yang di pilih
menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        aturMenu(false);
    });
});

    //tutup menu dengan escape key
document.addEventListener('keydown', function (event) {
    if (
        event.key === 'Escape' &&
        toggle.getAttribute('aria-expanded') === 'true'
    ) {
        aturMenu(false);
        toggle.focus();
    }
});