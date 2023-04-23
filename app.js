// Accordion

const accordions = document.querySelectorAll('.accordion');

for (const accordion of accordions) {
  const panels = accordion.querySelectorAll('.accordion-panel');
  for (const panel of panels) {
    const head = panel.querySelector('.accordion-header');
    head.addEventListener('click', () => {
      for (const otherPanel of panels) {
        if (otherPanel !== panel) {
          otherPanel.classList.remove('accordion-expanded');

          if (
            otherPanel
              .querySelector('.accordion-arrow')
              .classList.contains('arrow-up')
          ) {
            otherPanel
              .querySelector('.accordion-arrow')
              .classList.toggle('arrow-up');
            otherPanel
              .querySelector('.accordion-arrow')
              .classList.toggle('arrow-down');
          }
        }
      }
      panel.classList.toggle('accordion-expanded');
      panel.querySelector('.accordion-arrow').classList.toggle('arrow-down');
      panel.querySelector('.accordion-arrow').classList.toggle('arrow-up');
    });
  }
}

// Pop up

function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
