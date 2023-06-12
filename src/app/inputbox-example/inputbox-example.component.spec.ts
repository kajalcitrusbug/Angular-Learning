import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputboxExampleComponent } from './inputbox-example.component';

describe('InputboxExampleComponent', () => {
  let component: InputboxExampleComponent;
  let fixture: ComponentFixture<InputboxExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputboxExampleComponent]
    });
    fixture = TestBed.createComponent(InputboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
