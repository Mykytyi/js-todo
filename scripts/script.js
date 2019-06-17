'use strict';


class Todo {
  constructor() {
    this.list = [];
    this.codeCount = 1;
  }
  addItem(title, priority) {
    const object = {
      'title': title,
      'priority': priority,
      'uniqueNum': this.codeCount
    }
    this.list.push(object);
    this.codeCount += 1;
    return (this.codeCount - 1);
  }
  removeItem(id) {
    const idForDeleting = this.list.findIndex(item => item['uniqueNum'] === id);
    if(idForDeleting) {
      this.list.splice(idForDeleting, 1);
      return true;
    } else {
      return false;
    }
  }
  getItem(id) {
    const objForShare = this.list.find(item => item['uniqueNum'] === id);
    if(objForShare !== -1) {
      return objForShare;
    } else {
      return null;
    }
  }
  next() {
    let theHighestPrior = 0;
    let theHighestPriorIndex = 0;
    for(let i = 0; i < this.list.length; i++) {
        if (this.list[i]['priority'] > theHighestPrior) {
          theHighestPrior = this.list[i]['priority'];
          theHighestPriorIndex = i;
        }
    }

    return this.list[theHighestPriorIndex];
  }
}

let item = new Todo();
item.addItem('qqwert hello world', 23);
item.addItem('mama mia, jklj lkj;aqw', 23);
item.addItem('slush, gruzd, poshel ot suda', 3);
item.addItem('Holla Putini', 1);
item.addItem('Holla Putini', 4);
item.addItem('Holla Putini', 14);
item.addItem('Hekja jkaj, lqkwjer, sak', 0);

item.getItem(3);
item.next();
