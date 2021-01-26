// your javascript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

//make a <p> with red text
const pTag = document.createElement("p");
pTag.style.color = "red";
pTag.innerText = "Hey I'm red!";

const h3Tag = document.createElement("h3");
h3Tag.style.cssText = "color: blue";
h3Tag.innerText = "I'm a blue h3!";

const divPink = document.createElement("div");
divPink.style.cssText = "background-color: pink; border: medium solid black";

const h1Tag = document.createElement("h1");
h1Tag.innerText = "I'm in a div";

const pTagDiv = document.createElement("p");
pTagDiv.innerText = "ME TOO!";

container.appendChild(content);
container.appendChild(pTag);
container.appendChild(h3Tag);

divPink.appendChild(h1Tag);
divPink.appendChild(pTagDiv);
container.appendChild(divPink);
