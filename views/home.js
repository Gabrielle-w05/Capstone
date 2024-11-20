import html from "html-literal";
import catPic from "../assets/img/cat-laying-down.jpeg";
import grumpyCat from "../assets/img/grumpy-cat.jpg";
import voidCat from "../assets/img/void-laptop.jpg";
import sleepyCat from "../assets/img/sleepy-kitty.jpg";
export default state => {
  return state.url.map((url) => {
    return html`
        <h1>Home Page</h1>

      <div id="cat-welcome"><img src="${url}" width=100% height=200%/></div>
      <div class="welcome">
  <p> Welcome to the official Fur Talk website!
    Want to learn more about the website? Head over to the <a href="about">About Page!</a> </p>
</div>`
  } ).join("")
};
