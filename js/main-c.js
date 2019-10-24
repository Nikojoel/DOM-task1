// Put code of task C here
'use strict';

const main = document.getElementsByTagName("main")[0];

const newArticle = document.createElement("article");
const header = document.createElement("header");
const h2 = document.createElement("h2");
const figure = document.createElement("figure");
const image = document.createElement("img");
const figCap = document.createElement("figcaption");
const p = document.createElement("p");

const h2Text = document.createTextNode("Article header");
const figCapText = document.createTextNode("Caption");
const pText = document.createTextNode("Here is some text. Here is some text. Here is some text. Here is some text.");

h2.appendChild(h2Text);
image.setAttribute("src","http://placekitten.com/320/160");
image.setAttribute("alt","title");
figCap.appendChild(figCapText);
p.appendChild(pText);

header.appendChild(h2);
figure.appendChild(image);
figure.appendChild(figCap);

newArticle.appendChild(header);
newArticle.appendChild(figure);
newArticle.appendChild(p);

main.appendChild(newArticle);


/* Using cloneNode method
const newArticle = article.cloneNode(true);
main.appendChild(newArticle);
*/