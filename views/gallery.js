import html from "html-literal";
export default state =>
  setTimeout(() => {
    console.log(state, "state");
    html` ${state.gallery?.url ? state.gallery.url.map(image => `<div id="cat-img"> <img src="${image.url}" /> </div>` ) : 'Loading...'} `
    ;
  },5000)


