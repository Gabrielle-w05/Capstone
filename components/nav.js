import html from "html-literal";
import navItem from "./navItem.js";
import webIcon from "../assets/img/website-icon.JPG";
export default navItems => html`
  <nav>
    <header class="topNav"></header>
    <ul>
      ${navItems.map(item => navItem(item)).join("")}
      <img src="${webIcon}">
    </ul>
  </nav>
`;
