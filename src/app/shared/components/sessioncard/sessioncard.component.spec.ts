import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioncardComponent } from './sessioncard.component';

describe('SessioncardComponent', () => {
  let component: SessioncardComponent;
  let fixture: ComponentFixture<SessioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessioncardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
