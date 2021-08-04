import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPorfolioComponent } from './main-porfolio.component';

describe('MainPorfolioComponent', () => {
  let component: MainPorfolioComponent;
  let fixture: ComponentFixture<MainPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPorfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
