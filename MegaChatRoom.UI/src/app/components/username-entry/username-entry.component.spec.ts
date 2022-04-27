import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameEntryComponent } from './username-entry.component';

describe('UsernameEntryComponent', () => {
  let component: UsernameEntryComponent;
  let fixture: ComponentFixture<UsernameEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
