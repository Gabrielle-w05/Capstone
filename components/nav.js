import html from "html-literal";
import navItem from "./navItem.js";
import websiteIcon from "../assets/img/website.jpeg";
export default navItems => html`
  <nav>
    <header class="topNav"></header>
    <ul>
    <img src="${websiteIcon}">
      ${navItems.map(item => navItem(item)).join("")}

    </ul>
  </nav>
`;
