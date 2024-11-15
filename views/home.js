import html from "html-literal";
import catPic from "../assets/img/cat-laying-down.jpeg";
export default () => html`
  <h1>Home Page</h1>
  <div id="laying-down">
  <img src="${catPic}" alt="meow"/>
</div>
<div class="Welcome">
  <p> Welcome to the official Fur Talk website!
    Want to learn more about the website? Head over to the<a href="about"> About Page</a> </p>
</div>
`;

