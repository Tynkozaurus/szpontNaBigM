// .frequency-position__one-item.nieobecnosc{
//     border-top-color: #2f7d42;
//     border-bottom-color: #2f7d42;
//     background-color: #f7f8fb;
// }


const elements = document.querySelectorAll('.frequency-position__one-item.nieobecnosc');

elements.forEach(el => {
 el.style.borderTopColor = '#2f7d42';
el.style.borderBottomColor = '#2f7d42';
el.style.backgroundColor = '#f7f8fb';
});

const elements2 = document.querySelectorAll('.frekwencja-symbol.nieobecnosc');

elements2.forEach(el => {

if(el.closest('.frekwencja-symbol-kontener')){
el.style.backgroundColor = '#2f7d42';
el.innerHTML = "O";
}

});

