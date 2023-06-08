import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopExampleComponent } from './loop-example.component';

describe('LoopExampleComponent', () => {
  let component: LoopExampleComponent;
  let fixture: ComponentFixture<LoopExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoopExampleComponent]
    });
    fixture = TestBed.createComponent(LoopExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
