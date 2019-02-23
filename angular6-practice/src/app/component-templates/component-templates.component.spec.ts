import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTemplatesComponent } from './component-templates.component';

describe('ComponentTemplatesComponent', () => {
  let component: ComponentTemplatesComponent;
  let fixture: ComponentFixture<ComponentTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
