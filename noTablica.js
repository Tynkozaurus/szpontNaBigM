// ==UserScript==
// @name        New script eduvulcan.pl
// @namespace   Violentmonkey Scripts
// @match       *://uczen.eduvulcan.pl/*
// @grant       none
// @version     1.0
// @author      -
// @description 27.04.2026, 19:42:32
// ==/UserScript==

const run = () => {
if (!location.pathname.includes('/tablica')) {
  return;
}

const noNoNo = document.querySelectorAll('.frequency-position__bg');

noNoNo.forEach(el => {
    el.style.display = 'none';
});




 };

 setInterval(run, 100);