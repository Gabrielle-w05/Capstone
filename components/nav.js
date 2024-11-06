import html from "html-literal";
import navItem from "./navItem.js";
export default navItems => html`
  <nav>
    <header class="topNav"></header>
    <ul>
      ${navItems.map(item => navItem(item)).join("")}
    </ul>
  </nav>
`;
