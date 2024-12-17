import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAdoptionComponent } from './cat-adoption.component';

describe('CatAdoptionComponent', () => {
  let component: CatAdoptionComponent;
  let fixture: ComponentFixture<CatAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatAdoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
