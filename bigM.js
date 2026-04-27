// ==UserScript==
// @name        New script
// @namespace   Violentmonkey Scripts
// @match       *://uczen.eduvulcan.pl/*
// @grant       none
// @version     1.0
// ==/UserScript==

const run = () => {

    document.querySelectorAll('.column').forEach(div => {
  if (div.textContent.includes('27') &&    div.textContent.includes('poniedziałek')) {
    div.classList.add("tenDiv");
  }
});





  const elements = document.querySelectorAll('.frequency-position__one-item.nieobecnosc');

  console.log("elements:", elements.length);

  elements.forEach(el => {

if(el.closest('.tenDiv')){


    el.style.borderTopColor = '#2f7d42';
    el.style.borderBottomColor = '#2f7d42';
    el.style.backgroundColor = '#f7f8fb';
}


  });

  const elements2 = document.querySelectorAll('.frekwencja-symbol.nieobecnosc');

  elements2.forEach(el => {
    if (el.closest('.frekwencja-symbol-kontener')   && el.closest('.tenDiv')) {
      el.style.backgroundColor = '#2f7d42';
      el.innerHTML = "O";
    }
  });
};

setInterval(run, 100);
