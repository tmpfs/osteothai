class Application {

  constructor() {
    const moreLink = document.querySelector('[href="#read-more"]');
    moreLink.addEventListener('click', (e) => {
      e.preventDefault();
      const el = document.querySelector('.more');
      el.classList.remove('hidden');
      el.classList.add('block');
      e.currentTarget.classList.add('hidden');
    });

  }

}

module.exports = Application
