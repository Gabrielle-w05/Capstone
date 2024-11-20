import html from "html-literal";
export default state => {
  console.log(state);

return html`
  <h1>Cat Facts</h1>
  <h3>Wanna expand you knowledge on these purrfect creatures?
    Well this is the page for you! Welcome to the fun fact page!</h3>
<h3 id="fact-api">Did you know: ${state.info.funFacts} </h3>


`
};
