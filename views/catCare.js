import html from "html-literal";
import holdingPaw from "../assets/img/holding-paw.jpg";
import voidCat from "../assets/img/sleepy-kitty.jpg";
import catStare from "../assets/img/cat-staring.jpg";
export default () => html`
  <h1>
<div class="dropdown">
  <button>Articles</button>
  <div class="content">
  <a href="https://www.purina.com/articles/cat">purina</a>
  <a  href="https://moderncat.com/articles/tiny-cat-stories-spring-summer-2024/">moderncat</a>
  <a href="https://www.washingtonpost.com/home/2024/03/12/cats-behavior-misunderstood/">washingtonpost</a>
</div>
</div>
<div class="droplist">
<button>Healthcare</button>
<div class="content">
<a href="https://www.veterinaryemergencygroup.com/locations/brentwood-mo">VEG - VETERINARY EMERGENCY GROUP</a>
<a href="https://www.forbes.com/advisor/l/best-pet-insurance-2024/?utm_source=google&utm_medium=cpc&utm_campaign=20069123707&accountid=9901059182&utm_content=153803440772&utm_term=kwd-302283515989&network=g&device=c&placement=&location_physical=9022870&device_model=&creative=722600321210&gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc6FbWpPBqj93wAqYPZyi_RymaGM7cxTa50JSANVrfhRO9dix2turZBoCCycQAvD_BwE">
  Affordable Pet Insurance
</a>
<a href="https://hsmo.org/?utm_source=google&utm_medium=grant&utm_campaign=goggle_general_humane&gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc1YhhxVNRpSoMIi12k-0UumA8uLA913tDT_DAWuD_7sW1kSrBlinTBoCgTMQAvD_BwE">
Humane Society of Missouri
</a>
</div>
</div>

<div class="dropbar">
<button>Adoption</button>
<div class="content">
<a href="https://www.petfinder.com/">petfinder</a>
<a href="https://hsmo.org/?utm_source=google&utm_medium=grant&utm_campaign=goggle_general_humane&gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc1YhhxVNRpSoMIi12k-0UumA8uLA913tDT_DAWuD_7sW1kSrBlinTBoCgTMQAvD_BwE">
  Humane Society of Missouri
</a>
<a href="https://apamo.org/">apamo</a>
</div>

  </h1>

<div class="void-cat">
  <h2>
  <img src="${voidCat}">
</h2>
</div>
</div>
`;
