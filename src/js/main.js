console.log(" _____________________________________________________________________\n  \n                                                        \n        _|    _|    _|_|    _|      _|  _|_|_|_|        _|_|    \n        _|    _|  _|    _|  _|      _|  _|            _|    _|  \n        _|_|_|_|  _|_|_|_|  _|      _|  _|_|_|        _|_|_|_|  \n        _|    _|  _|    _|    _|  _|    _|            _|    _|  \n        _|    _|  _|    _|      _|      _|_|_|_|      _|    _|  \n                                                                \n                                                                \n                                                \n        _|      _|  _|_|_|    _|_|_|  _|_|_|_|  \n        _|_|    _|    _|    _|        _|        \n        _|  _|  _|    _|    _|        _|_|_|    \n        _|    _|_|    _|    _|        _|        \n        _|      _|  _|_|_|    _|_|_|  _|_|_|_|  \n                                                \n                                                \n                                            \n        _|_|_|      _|_|    _|      _|  _|  \n        _|    _|  _|    _|    _|  _|    _|  \n        _|    _|  _|_|_|_|      _|      _|  \n        _|    _|  _|    _|      _|          \n        _|_|_|    _|    _|      _|      _|  \n\n\n\n        WEBSITE DESIGNED AND BUILT BY VIKRAM PROCTER  ______________________________________________________________\n\n\n                \n  ")

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle("nav-open");
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

