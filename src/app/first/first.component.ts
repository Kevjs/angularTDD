import { Component, OnInit, EventEmitter} from '@angular/core';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  total:number = 0;
  totalEmiter = new EventEmitter();
  allTasks = null;
  constructor(private tServ:TestingService) { }

  ngOnInit() {
    this.tServ.all((tasks)=>this.allTasks = tasks);
  }

  stringTest(str){
    return `Welcome ${str}!`;
  }

  add(){
    this.total += 1;
    this.totalEmiter.emit(this.total);
  }

  subtract(){
    this.total -= 1;
  }
}
