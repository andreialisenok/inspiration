const btnLang = document.querySelector('.btnLang');
const btnScrollToTop = document.querySelector('.srollTop');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnScrollToTop.style.display = 'flex';
    } else {
      btnScrollToTop.style.display = 'none';
    }
  });
};

const scrollToTop = () => {
  btnScrollToTop.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
};

displayButton();
scrollToTop();
btnLang.addEventListener('click', function () {
  let lang = btnLang.textContent.trim().toLowerCase();
  if (lang === 'en') {
    i18next.changeLanguage('es');
    localStorage.setItem('lang', 'es');
  } else {
    i18next.changeLanguage('en');
    localStorage.setItem('lang', 'en');
  }
});

i18next.init(
  {
    lng: localStorage.getItem('lang') || 'en',
    resources: {
      en: {
        translation: {
          btnLang: 'en',
          menuLink1: 'DESTINATIONS',
          menuLink2: 'FOOD',
          menuLink3: 'WELL BEING',
          menuLink4: 'SPORT',
          menuLink5: 'FAMILY',
          menuLink6: 'LIFESTYLE',
          btnCall: 'Call to action',
          heroTitle: 'Inspiration for travel by real people',
          heroSubtitle: 'Book smart, travel simple',
          heroBtnStart: 'Start planning your trip',
          tag1: 'Aenean Eleifend',
          tag2: 'Aliquam',
          postTitle: 'Integer Maecenas Eget Viverra',
          postText:
            'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.',
          postView: 'View Post',
          blogTag: 'Travel',
          blogTitle: 'Richird Norton photorealistic rendering as real photos',
          blogText:
            'Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.',
          destinationTitle: 'Top Destinations',
          destinationText:
            'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
          destinationCountry: 'Dominican Republic',
          categoryFullTitle:
            'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
          categoryName: 'Category name',
          categoryText:
            'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
          categoryTitle: 'Akame Ga Kill: Season finale',
          categoryHead: 'Manga reads',
          categoryTitleRight:
            'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
          singleTitle: '5 Efficient Rules How to Organize Your Working Place',
          singleSubtitle:
            'Relationship tips couples therapists are giving all the time',
        },
      },
      es: {
        translation: {
          btnLang: 'es',
          menuLink1: 'DESTINOS',
          menuLink2: 'COMIDA',
          menuLink3: 'BIENESTAR',
          menuLink4: 'DEPORTE',
          menuLink5: 'FAMILIA',
          menuLink6: 'ESTILO DE VIDA',
          btnCall: 'Llamada a la acción',
          heroTitle: 'Inspiración para viajar de personas reales',
          heroSubtitle: 'Reserva inteligentemente, viaja sencillo',
          heroBtnStart: 'Empieza a planificar tu viaje',
          tag1: 'Aenean Eleifend',
          tag2: 'Aliquam',
          postTitle: 'Entero Mecenas Eget Viverra',
          postText:
            'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.',
          postView: 'Ver publicación',
          blogTag: 'Viajar',
          blogTitle:
            'Representación fotorrealista de Richard Norton como fotos reales',
          blogText:
            'Incentivar progresivamente los sistemas cooperativos mediante funcionalidades técnicamente sólidas. Generar datos fiables y sin interrupciones.',
          destinationTitle: 'Principales destinos',
          destinationText:
            'Marca un destino más de tu lista de deseos con una de nuestras vacaciones más populares en 2022',
          destinationCountry: 'República Dominicana',
          categoryFullTitle:
            'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',

          categoryName: 'Nombre de la categoría',
          categoryText:
            'iluminado. Phasellus aliquet nibh id iaculis pharetra. Mecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
          categoryTitle: 'Akame Ga Kill: Season finale',
          categoryHead: 'Manga reads',
          categoryTitleRight:
            'Marca un destino más de tu lista de deseos con una de nuestras vacaciones más populares en 2022',
          singleTitle: '5 reglas eficientes para organizar tu lugar de trabajo',
          singleSubtitle:
            'Consejos sobre relaciones que los terapeutas de pareja dan todo el tiempo',
        },
      },
    },
  },
  function (err, t) {
    updateContent();
  }
);

function updateContent() {
  const content = document.querySelectorAll('[data-i18n]');
  content.forEach((element) => {
    element.innerHTML = i18next.t(element.dataset.i18n);
  });
}

i18next.on('languageChanged', () => {
  updateContent();
});
