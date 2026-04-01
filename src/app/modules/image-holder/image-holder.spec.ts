import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHolder } from './image-holder';

describe('ImageHolder', () => {
  let component: ImageHolder;
  let fixture: ComponentFixture<ImageHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
