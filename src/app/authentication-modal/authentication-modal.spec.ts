import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationModal } from './authentication-modal';

describe('AuthenticationModal', () => {
  let component: AuthenticationModal;
  let fixture: ComponentFixture<AuthenticationModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
