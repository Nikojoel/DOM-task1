// Put code of task B here
'use strict';

const main = document.getElementsByTagName("main")[0];
const article = document.getElementsByTagName("article")[0];

main.innerHTML += "<article>" + article.innerHTML + "</article>";

