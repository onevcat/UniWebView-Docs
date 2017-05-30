
var urlMapping = {
  '/release-note': 'https://raw.githubusercontent.com/onevcat/Kingfisher/master/CHANGELOG.md',

  '/installation': '/latest/installation',
  '/using-prefab': '/latest/using-prefab',
  '/working-with-code': '/latest/working-with-code',
  '/position-and-size': '/latest/position-and-size',
  '/transition': '/latest/transition',
  '/browsing': '/latest/browsing',
  '/memory-management': '/latest/memory-management',
  '/messaging-system': '/latest/messaging-system',
  '/using-javascript': '/latest/using-javascript',
  '/loading-local-files': '/latest/loading-local-files',
  '/playing-videos': '/latest/playing-videos',
  '/faq': '/latest/faq'
};

var arrayValues = new Array();

for (var key in urlMapping) {
  const value = urlMapping[key];
  if (value.lastIndexOf('http', 0) !== 0) {
    arrayValues.push(value);
  }
}

window.urlMapping = urlMapping;
window.searchs = arrayValues;