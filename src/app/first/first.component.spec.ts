import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { TestingService } from '../testing.service';
import { calcBindingFlags } from '@angular/core/src/view/util';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let tServ: TestingService;

  beforeEach(() => {
    tServ = new TestingService(null);
    component = new FirstComponent(tServ);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include the string in the message', ()=>{
    expect(component.stringTest('kevin')).toContain('Welcome kevin');
  });

  it('should add one to the total', ()=>{
    component.add();

    expect(component.total).toBe(1);
  });
  it('should subtract one to the total', ()=>{
    component.subtract();

    expect(component.total).toBe(-1);
  });
  
  it('should emit the total', ()=>{
    let total = null;
    component.totalEmiter.subscribe(v=> total = v);

    component.add();

    expect(total).toBe(1);
  });

  it('should set allTasks to the tasks returned by the service', ()=>{
    let serverResponse = [1,2,3];
    spyOn(tServ, 'all').and.callFake((cb)=>{
      cb(serverResponse);
    });

    component.ngOnInit();

    expect(component.allTasks.length).toBe(serverResponse.length);
    expect(component.allTasks).toBe(serverResponse);
  });
});
