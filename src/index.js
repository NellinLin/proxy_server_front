import HeaderComp from './components/HeaderComp/HeaderComp.js';
import RequestCard from './components/RequestCard/RequestCard.js';

const header = new HeaderComp(document.getElementById('header'));
header.render();

const card = new RequestCard(document.getElementById('app'));
card.render();
