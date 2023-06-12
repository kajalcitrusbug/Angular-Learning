import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAngularExampleComponent } from './basic-angular-example.component';

describe('BasicAngularExampleComponent', () => {
  let component: BasicAngularExampleComponent;
  let fixture: ComponentFixture<BasicAngularExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicAngularExampleComponent]
    });
    fixture = TestBed.createComponent(BasicAngularExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
