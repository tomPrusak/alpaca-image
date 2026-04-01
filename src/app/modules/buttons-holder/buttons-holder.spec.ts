import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsHolder } from './buttons-holder';

describe('ButtonsHolder', () => {
  let component: ButtonsHolder;
  let fixture: ComponentFixture<ButtonsHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
