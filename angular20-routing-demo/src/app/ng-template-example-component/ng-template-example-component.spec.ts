import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateExampleComponent } from './ng-template-example-component';

describe('NgTemplateExampleComponent', () => {
  let component: NgTemplateExampleComponent;
  let fixture: ComponentFixture<NgTemplateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
