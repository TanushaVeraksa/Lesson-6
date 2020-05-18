/**
 * 1. Написать код, чтобы при нажатии на li его текст становился жирным, 
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */

 const ulEl = document.getElementById('ul');
 const contEl = document.getElementById('container');


ulEl.addEventListener('click', function (ev) {
   if(ev.target.nodeName === 'LI') {
      ev.target.classList.add('boldText');
   }
 });

 contEl.addEventListener('click', function () {
   let el = document.getElementsByClassName('boldText');
   for(let i = 0; i<el.length; i++) {
      el[i].classList.remove('boldText');
 }
 });

/**
 * 2. Написать код, чтобы при нажатии на li 
 *  2.1 его текст становился жирным 
 *  2.2 его текст (!) выводился в alert 

    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */

const exClass1 = document.getElementsByClassName('example_class_1')[0];
const bodyEl = document.getElementsByTagName("body")[0];

exClass1.addEventListener('click', function(ev) {
   if(ev.target.nodeName === 'LI') {
      alert(ev.target.innerHTML);
      ev.target.classList.add('boldText');
   }
});




