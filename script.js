/**
 * 1. Написать код, чтобы при нажатии на li его текст становился жирным, 
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */

 const ulEl = document.getElementById('ul');
 const bodyEl = document.getElementById('container');


ulEl.addEventListener('click', function (ev) {
   if(ev.target.nodeName === 'LI') {
      ev.target.classList.add('boldText');
   }
 });

 bodyEl.addEventListener('click', function () {
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