import html from "html-literal";
import kittyCat from "../assets/img/cute-kitten.jpeg";
import lola from "../assets/img/lola.jpg";
import mavis from "../assets/img/mavis.jpg";
import bella from "../assets/img/bella.jpg";
import twins from "../assets/img/twins.jpg";
export default () => html`
 <h1>This is the about page</h1>
<div id ="icon">
  <img src="${kittyCat}">
<p>Are you a cat lover looking for a safe place to full of and made by ca fellow cat lover?
  Look no farther! Welcome to FurTalk! The website created by a cat parent for cat parents!.
</p>
<h2>A little about me</h2>
<p>I am a proud and dedicated cat mom of five little fur balls of joy. Cats are a very important part of my life.
I have been around cats for basically all my life,
  and I absolutely love learning and caring for them so much!
</p>
<h2>MY BABIES!!</h2>
<p>Here are my beautiful daughters</p>
</div>

<div id="my-cats">

<div class="lola">
<h3>Lola</h3>
  <img src="${lola}">
  <p>This is my eldest fur baby named Lola. My cousin found her in a box in front of her door. She couldn't keep her so she gave her to us
    I've had her for 7-8 years!</p>
</div>

<div class="mavis">
<h3>Mavis</h3>
  <img src="${mavis}">
  <p>This is my middle fur baby named Mavis. She used to be a stray on the street, and one day she decided she was tired of the street
    life and invited herself into my home! XD I've had her for 6 years"
  </p>
</div>
<div class="bella">
<h3>Bella</h3>
  <img src="${bella}">
  <p>This is Bella. She was also a stray kitty. She is a very vocal cat that loves when you talk to her! I've had her for 3 years now. </p>
</div>
<div class="twins">
<h3>Ace (stripey) and Sophie (void)</h3>
  <img src="${twins}">
  <p>And last but not least, my little baby twins. The stripey one is Ace and the little void is Sophie, and they stick together like glue!
    They were found outside on my balcony. They were about less than 4 weeks old. I've now had them for 7 months!
  </p>
</div>

</div>
`;
