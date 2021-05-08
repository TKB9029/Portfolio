'use strict';
{
  class Panel {
    constructor(){
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
    }

    getEl(){
      return this.el;
    }
  }

  class Board{
    constructor(){
      this.panels = [];
      for (let i = 0; i < 4; i++){
        this.panels.push(new Panel());
      }
      this.setup();
    }

    setup(){
      const board = document.getElementById('board');
      this.panels.forEach(panel =>{
        board.appendChild(panel.getEl());
      });
    }
  }

  const board = new Board();
}