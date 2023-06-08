import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseExampleComponent } from './ifelse-example.component';

describe('IfelseExampleComponent', () => {
  let component: IfelseExampleComponent;
  let fixture: ComponentFixture<IfelseExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfelseExampleComponent]
    });
    fixture = TestBed.createComponent(IfelseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
