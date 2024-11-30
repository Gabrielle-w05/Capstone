import html from "html-literal";
import navItem from "./navItem.js";
import webIcon from "../assets/img/website-icon.jpg";
export default navItems => html`
  <nav>
    <header class="topNav"></header>
    <ul>
    <img src="${webIcon}">
      ${navItems.map(item => navItem(item)).join("")}

    </ul>
  </nav>
`;
