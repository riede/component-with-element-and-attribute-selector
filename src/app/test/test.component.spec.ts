import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent, RequiredInput } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    component.requiredInput = { anyKey: 'anyValue'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not fail', () => {
    const expectedResult: RequiredInput = { anyKey: 'anyValue' };
    expect(component.requiredInput).toEqual(expectedResult);
  })
});
