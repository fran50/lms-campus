import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModifiComponent } from './user-modifi.component';

describe('UserModifiComponent', () => {
  let component: UserModifiComponent;
  let fixture: ComponentFixture<UserModifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
