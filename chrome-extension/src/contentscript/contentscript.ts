import './contentscript.scss';
import W3SchoolTracker from './progress-trackers/w3-schools';

const isThisContentscript = true;
console.log('isThisContentscript', isThisContentscript);

new W3SchoolTracker().track();