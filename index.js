import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

import * as states from './store';

import { capitalize } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';

// router is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);


const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Main(state)}
    ${Footer(state)}
`;

    router.updatePageLinks();
}


function  handleRoutes(params){
    render(states[capitalize(params.path)]);
}

router
    .on(':path', (handleRoutes))
    .on('/', () => render(states.Welcome))
    .resolve();

// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         console.log('before each');
//         response.data.forEach((post) => states.Blog.posts.push(post));
//         if(router.lastRouteResolved().params && router.lastRouteResolved().params.path === 'blog'){
//             render(states.Blog);
//             console.log(states);
//         }
//     });

document.querySelector("#globe").addEventListener("click", function change() {
  let colors = document.body.style.backgroundColor;
  console.log(colors);
  if (colors === "white") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

document.querySelector("#globe").addEventListener("click", function() {
  let colors = document.body.style.backgroundColor;
  let x = document.getElementsByClassName("list");
  var i;
  if (colors === "white") {
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "black";
    }
  } else {
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "white";
    }
  }
});