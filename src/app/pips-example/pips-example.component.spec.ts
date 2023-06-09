import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipsExampleComponent } from './pips-example.component';

describe('PipsExampleComponent', () => {
  let component: PipsExampleComponent;
  let fixture: ComponentFixture<PipsExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipsExampleComponent]
    });
    fixture = TestBed.createComponent(PipsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
