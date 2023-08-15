import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBinindgComponent } from './class-binindg.component';

describe('ClassBinindgComponent', () => {
  let component: ClassBinindgComponent;
  let fixture: ComponentFixture<ClassBinindgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassBinindgComponent]
    });
    fixture = TestBed.createComponent(ClassBinindgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
