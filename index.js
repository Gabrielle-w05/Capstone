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
        axios.get(` https://api.thecatapi.com/v1/images/search?limit=20&api_key=${process.env.THE_CAT_API_KEY}`)
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

            done();

          }).catch(error => {
            console.log("oh no :<", error);
            done();
          });
        break;

      case "facts":

        axios
          .get(`${process.env.THE_CAT_FACT_API_URL}/facts`)
          .then(response => {

            // let catFacts = response?.data?.map(fact => {
            //   console.log(fact.data);
            //   return fact?.data
            // });
            // console.log(catFacts, "cat facts");

            // if (!catFacts) {
            //   console.log("no cat facts");
            // } else {
            //   store.facts.data[0] = catFacts;
            // };
            console.log("fact response data",  response.data);
            store.facts.info = {
              funFacts: response.data.data[0]
            };

            // console.log("response", response);
            // store.facts.info = response.data;

            done();
          })
          .catch(error => {
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

