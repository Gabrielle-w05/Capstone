import html from "html-literal";
export default state => {


return state.url.map((url) => {
  return html`<div id="cat-api"><img src="${url}" /></div>`
} ).join("");
};


