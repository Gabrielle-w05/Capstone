
import html from "html-literal";
export default (state) => html `
<section id="question-post">
<table id="questions-post">
<tr>
  <th scope="col">Questions</th>
</tr>
${state.question.map(questions => {
  return `<tr><td>${questions.question}</td></tr>`
})
.join("")}
;
</table>
</section>
`


