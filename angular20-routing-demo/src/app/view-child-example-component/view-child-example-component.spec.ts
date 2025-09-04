import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildExampleComponent } from './view-child-example-component';

describe('ViewChildExampleComponent', () => {
  let component: ViewChildExampleComponent;
  let fixture: ComponentFixture<ViewChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
