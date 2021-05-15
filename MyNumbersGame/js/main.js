'use strict';
{
  class Panel {
    constructor() {
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
      this.el.addEventListener('click', () =>{
        this.check();
      })
    }

    getEl() {
      return this.el;
    }
    activate(num) {
      this.el.classList.remove('pressed');
      this.el.textContent = num;
    }

    check(){
      if(currentNum === parseInt(this.el.textContent, 10)){
        this.el.classList.add('pressed');
        currentNum++;
      }
    }

  }

  class Board {
    constructor() {
      this.panels = [];
      for (let i = 0; i < 4; i++) {
        this.panels.push(new Panel());
      }
      this.setup();
    }

    setup() {
      const board = document.getElementById('board');
      this.panels.forEach(panel => {
        board.appendChild(panel.getEl());
      });
    }

    activate() {
      const nums = [0,1,2,3];

      this.panels.forEach(panel => {
        const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
        panel.activate(num);
      });
    }
  }

  const board = new Board();

  let currentNum = 0;

  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    board.activate();
  })
}