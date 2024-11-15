import html from "html-literal";
export default state => {
  console.log(state);

return html`
  <h1>Cat Facts</h1>
  <h3>Wanna expand you knowledge on these purrfect creatures?
    well this is the page for you! Welcome to the fun fact page!</h3>
 <h3>Fact of the Day: ${state.info} </h3>


`
};
