import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import { home } from "./views";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.links)}
      ${main(state)}
      ${footer()}
    `;
    router.updatePageLinks();
};






router.hooks({
  before: (done, match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    switch (view) {
      case "gallery":
 axios.get(` https://api.thecatapi.com/v1/images/search?limit=10&api_key=${process.env.THE_CAT_API_KEY}`)
      .then(response => {
        let catImages = response?.data?.map(cat => {
          console.log(cat.url);
          return cat?.url
        });
        console.log(catImages, "cat images");


        if (!catImages) {
          console.log("No cat images");
        } else {
          store.gallery.url = catImages;
        };
//  const headers = new Headers({
//   "Content-Type": "application/json",
//     "x-api-key":"live_nQ7v9HyyCqs1Ne0Fj9HBtQxk2hAPzMnvyXjqJOMU36oWnyl9nYX2iNPoxRQ1Hjzd"
//  });
// let requestOption = {
//   method: 'GET',
//   headers: headers,
// redirect:'follow'
// };
  // .then((response) => {
  //   console.log(response);
  //   return response.json();
  // })
  // .then((json) => console.log(json));

// fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//   .then((response) => {
//     console.log(response);
//     return response.text();
//   })
//   .then((result) => console.log(result));

//         console.log("Cat Pictures", response.data);
//  store.gallery.url =  response.data;

//  response.data.url


        done();

      }).catch(error =>{
        console.log("oh no :<", error);
        done();
      });
      break;
      default:

      done();
    }
  },
  already: match => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: match => {
    router.updatePageLinks();

//     const catImg = document.getElementById("cat-img")
//     function getRandomCat() {
// const response =  fetch ("https://api.thecatapi.com/v1/images/search?limit=10");
// const data = response.json();
// return data[0];
//     };

//     function handleClick() {
// const img = getRandomCat();
// catImg.src = img.url;
//     };

    document.querySelector(".topNav").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }
});



router.on({
  "/": () => render(store.home),

  ":view": match => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view in store) {
      render(store[view]);

    } else {
      render(store.home);

      console.log(`View ${view} not defined`);
    }
  },
}).resolve();


