import '../components/index.js'

function loadStylesheet(path) {
  if (document.querySelector(`link[href="${path}"]`)) return;
  const link = Object.assign(document.createElement('link'), {
    rel: 'stylesheet',
    href: path
  });
  document.head.appendChild(link);
}

loadStylesheet('/app/theme/global.css');