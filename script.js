function setLanguage(language) {
  const eusTexts = document.querySelectorAll('.lang-eu');
  const esTexts = document.querySelectorAll('.lang-es');

  if (language === 'eu') {
    eusTexts.forEach(text => text.style.display = 'inline');
    esTexts.forEach(text => text.style.display = 'none');

    document.getElementById('btn-eu').classList.add('active');
    document.getElementById('btn-es').classList.remove('active');
  }

  if (language === 'es') {
    eusTexts.forEach(text => text.style.display = 'none');
    esTexts.forEach(text => text.style.display = 'inline');

    document.getElementById('btn-es').classList.add('active');
    document.getElementById('btn-eu').classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setLanguage('eu');
});