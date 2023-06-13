import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageFoundExampleComponent } from './no-page-found-example.component';

describe('NoPageFoundExampleComponent', () => {
  let component: NoPageFoundExampleComponent;
  let fixture: ComponentFixture<NoPageFoundExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPageFoundExampleComponent]
    });
    fixture = TestBed.createComponent(NoPageFoundExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
