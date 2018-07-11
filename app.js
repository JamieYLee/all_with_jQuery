var person = {
  name: "Jamie",
  age: 22
}

var main = document.getElementById("main");

// title
var title = document.createTextNode(`${person.name}`);
var header = document.createElement("h1");
header.appendChild(title);
main.appendChild(header);

// menu
var nav = document.createElement("nav");
var menulist = document.createElement("ul");
nav.appendChild(menulist);
main.appendChild(nav);

$("ul").html(`<li><a href='#'>Page 1</a></li><li><a href='#'>Page 2</a></li><li id='right'>${person.age}</li>`)

// main section
var mainSection = document.createElement("div");
$(mainSection).attr('id', 'mainSection');
main.appendChild(mainSection);

var mainBox1 = document.createElement("div");
$(mainBox1).addClass('mainBox');
mainSection.appendChild(mainBox1);

var mainTitle_1_1 = document.createTextNode('Lorem Ipsum');
var mainTitle_1_2 = document.createElement("h2");
mainTitle_1_2.appendChild(mainTitle_1_1);
mainBox1.appendChild(mainTitle_1_2);

var mainContent_1_1 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
var mainContent_1_2 = document.createElement("p");
mainContent_1_2.appendChild(mainContent_1_1);
mainBox1.appendChild(mainContent_1_2);

var mainBox2 = document.createElement("div");
$(mainBox2).addClass('mainBox');
mainSection.appendChild(mainBox2);

var mainTitle_2_1 = document.createTextNode('Lorem Ipsum');
var mainTitle_2_2 = document.createElement("h2");
mainTitle_2_2.appendChild(mainTitle_2_1);
mainBox2.appendChild(mainTitle_2_2);

var mainContent_2_1 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
var mainContent_2_2 = document.createElement("p");
mainContent_2_2.appendChild(mainContent_2_1);
mainBox2.appendChild(mainContent_2_2);

// side section
var sideSection = document.createElement("div");
$(sideSection).attr('id', 'sideSection');
main.appendChild(sideSection);

var sideBox = document.createElement("div");
$(sideBox).addClass('sideBox');
sideSection.appendChild(sideBox);

var sideTitle1 = document.createTextNode('Lorem Ipsum');
var sideTitle2 = document.createElement("h2");
sideTitle2.appendChild(sideTitle1);
sideBox.appendChild(sideTitle2);

var sideContent1 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
var sideContent2 = document.createElement("p");
sideContent2.appendChild(sideContent1);
sideBox.appendChild(sideContent2);
