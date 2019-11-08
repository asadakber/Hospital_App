import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocterDetailsComponent } from './docter-details.component';

describe('DocterDetailsComponent', () => {
  let component: DocterDetailsComponent;
  let fixture: ComponentFixture<DocterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
