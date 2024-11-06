import html from "html-literal";
export default () => html`
  <h1>This is the Q & A page</h1>
  <form id="qna">
    <label for="question">What's your question?</label>
<input name="Question" id="question" type="text" required>
<button type="submit">Submit</button>
 </form>
`;
