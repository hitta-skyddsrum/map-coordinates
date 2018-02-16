const proj4 = require('proj4');
const shelters = require('./skyddsrum.json');

const swerefProjection = [
  'EPSG:3006',
  '+title=Sweref99 +proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
];

proj4.defs(swerefProjection[0], swerefProjection[1])

const coordinates = proj4(swerefProjection[0], 'WGS84', shelters[0].geometry.coordinates);

console.log(coordinates);
