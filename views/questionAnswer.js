import html from "html-literal";
import grumpyCat from "../assets/img/mewing.jpg";
export default () => html`
  <h1>Have a question? Leave it here!</h1>
  <form id="question-form">
    <label for="question">What's your question?</label>
    <input name="Question" id="question" type="text" required Placeholder="type your question here!">
    <button type="submit">Submit</button>
    <img src= ${grumpyCat}/>
  </form>
`;
