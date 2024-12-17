import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogAdoptionComponent } from './dog-adoption.component';

describe('DogAdoptionComponent', () => {
  let component: DogAdoptionComponent;
  let fixture: ComponentFixture<DogAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogAdoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
