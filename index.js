/*часть 1*/
function RightPart() {
    let newRecord = document.createElement('div');
    let spot = document.getElementsByName('spot');
    let text = document.getElementById('text').value;
    let colorTable = document.getElementById('colorTable').value;
    newRecord.innerHTML = text;
    newRecord.onclick = delDiv;
  
    function delDiv() {
      list.removeChild(this);
    };
  
    Element.prototype.setAttributes = function(acct) {
      for (var id in acct) {
        if ((id === 'styles' || id === 'style') && typeof acct[id] === 'object') {
          for (var prop in acct[id]) {
            this.style[prop] = acct[id][prop];
          }
        } else {
          this.setAttribute(id, acct[id]);
        }
      }
    };
  
    newRecord.setAttributes({
      'styles': {
        'backgroundColor': colorTable,
      },
    });
  
    for (let i = 0; i < spot.length; i++) {
      if (spot[i].type == "radio" && spot[i].checked) {
        list.appendChild(newRecord);
      } else {
        list.insertBefore(newRecord, list.firstChild);
      }
    }
  }
  
  function statistic() {
    let ch = document.getElementById('list');
    let elementss = ch.children;
    let AllElements = new Array();
    elementss = Array.prototype.slice.call(elementss);
    for (let i = 0; i < elementss.length; i++) {
      AllElements[i] = elementss[i].textContent;
    }
    alert(AllElements.join());
  }



/*--------------------------------------------------------часть 2----------------------------------------------*/

  function addRectangle() {
    let newRectangle = document.createElement('div');
    newRectangle.innerHTML;
    let task2 = document.getElementById('usl2');
    task2.appendChild(newRectangle);
  
    let r = Math.floor(Math.random() * (223));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
    let widthNumber = getRandomInt(40, 150);
    let widthPX = widthNumber.toString(10) + 'px';
    let heightNumber = getRandomInt(40, 150);
    let heightPX = heightNumber.toString(10) + 'px';
  
    let leftNumber = getRandomInt(0, 600);
    let leftPX = leftNumber.toString(10) + 'px';
    let topNumber = getRandomInt(0, 300);
    let topPX = topNumber.toString(10) + 'px';
  
    Element.prototype.setAttributes = function(acct) {
      for (var id in acct) {
        if ((id === 'styles' || id === 'style') && typeof acct[id] === 'object') {
          for (var prop in acct[id]) {
            this.style[prop] = acct[id][prop];
          }
        } else {
          this.setAttribute(id, acct[id]);
        }
      }
    };
  
    newRectangle.setAttributes({
      'styles': {
        'height': heightPX,
        'width': widthPX,
        'backgroundColor': color,
        'left': leftPX,
        'top': topPX,
      },
    });
  
    newRectangle.setAttribute('class', 'rectitac');
  
    task2.onclick = function(event) {
      let target = event.target; // где был клик?
      if (target.className != 'rectitac') return; // не на rectitac? тогда не интересует
      light(target); // подсветить div
      target.style.zIndex = 1000;
    };
  }
  
  function moveRect(e) {
    let Rect = document.getElementById("highlight");
  
    let cs = window.getComputedStyle(Rect); // получаем стиль для blueRect
  
    let left = parseInt(cs.left);
    let top = parseInt(cs.top);
  
    switch (e.keyCode) {
      case 37: // если нажата клавиша влево
          Rect.style.left = left - 20 + "px";
        break;
      case 38: // если нажата клавиша вверх
          Rect.style.top = top - 20 + "px";
        break;
      case 39: // если нажата клавиша вправо
          Rect.style.left = left + 20 + "px";
        break;
      case 40: // если нажата клавиша вниз
          Rect.style.top = top + 20 + "px";
        break;
    }
  }
  
  addEventListener("keydown", moveRect);
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let selectedDiv;
  
  function light(node) {
    if (selectedDiv) {
      selectedDiv.removeAttribute('id');
    }
    selectedDiv = node;
    selectedDiv.setAttribute('id', 'highlight');
  }




  /*--------------------------------------------------------часть 3----------------------------------------------*/
  function addBlock() {
    let newRectangle = document.createElement('div');
    newRectangle.innerHTML;
    let task3 = document.getElementById('usl3');
    task3.appendChild(newRectangle);
  
    let r = Math.floor(Math.random() * (223));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
    let widthNumber = getRandomInt(40, 150);
    let widthPX = widthNumber.toString(10) + 'px';
    let heightNumber = getRandomInt(40, 150);
    let heightPX = heightNumber.toString(10) + 'px';
  
    let leftNumber = getRandomInt(0, 600);
    let leftPX = leftNumber.toString(10) + 'px';
    let topNumber = getRandomInt(0, 300);
    let topPX = topNumber.toString(10) + 'px';
  
    Element.prototype.setAttributes = function(acct) {
      for (var id in acct) {
        if ((id === 'styles' || id === 'style') && typeof acct[id] === 'object') {
          for (var prop in acct[id]) {
            this.style[prop] = acct[id][prop];
          }
        } else {
          this.setAttribute(id  , acct[id]);
        }
      }
    };
  
    newRectangle.setAttributes({
      'styles': {
        'backgroundColor': color,
        'width': widthPX,
        'height': heightPX,
        'left': leftPX,
        'top': topPX,
  
      },
    });
  
    newRectangle.setAttribute('class', 'draggable')
  }
  
  document.onmousedown = function(e) { //нажали на мышь
    let elem = e.target; //элемент, на который нажали
    if (elem.className && elem.className.indexOf('draggable') >= 0) { //фильтрует эелементы (только с классом draggable)
      elem.ondragstart = function() {
        return false
      }; //убираем перетаскивание от HTML5
      let coor = elem.getBoundingClientRect(); //получаем координыты елемента относительно окна браузера
      let osx = e.offsetX; //получаем смещение по Х указателя мыши относительно начала координат эелемента
      let osy = e.offsetY; // тоже по У
      elem.style.position = 'fixed'; //фиксируем элемент относительно окна
      elem.style.top = coor.top + 'px'; //задаем начальные координаты У
      elem.style.left = coor.left + 'px'; //тоже по Х
  
      document.onmousemove = function(ev) { //тянем (функция в функции - тянем при нажатой кнопке)
        let x = ev.clientX; //координата Х относительно окна браузера
        let y = ev.clientY; //тоже по Х
  
        elem.style.left = x - osx + 'px'; //задаем координату Х без смещения для движения элемента
        elem.style.top = y - osy + 'px'; // тоже по У
        removeSelect(); //запретить стандартное выделение
      }
    }
  }
  
  document.onmouseup = function(e) { //отпустили кнопку
    var elem = e.target; //наш элемент
    document.onmousemove = function() {
      return false
    }; //отменяем перемещение элемента
  }
  
  function removeSelect() { //функция - убрать стандартное выделение
    var b = document.body; //по всему документу
    b.style.webkitUserSelect = b.style.mozUserSelect = b.style.msUserSelect = 'none'; //добавляем свойство CSS - запретить выделение
  }