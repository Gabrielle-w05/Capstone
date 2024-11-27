import html from "html-literal";
export default () => html`
  <h1>
  <label for=Articles>Articles</label>
    <select name="articles">
      <option>1</option>
        <option>2</option>
</select>
<label for=Healthcare>Healthcare</label>
<select name="Healthcare">
      <option>1</option>
        <option>2</option>
</select>
<label for=Adoption>Adoption</label>
<select name="adoption">
      <option>1</option>
        <option>2</option>
</select>
  </h1>

`;
