import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleconditionExampleComponent } from './multiplecondition-example.component';

describe('MultipleconditionExampleComponent', () => {
  let component: MultipleconditionExampleComponent;
  let fixture: ComponentFixture<MultipleconditionExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleconditionExampleComponent]
    });
    fixture = TestBed.createComponent(MultipleconditionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
