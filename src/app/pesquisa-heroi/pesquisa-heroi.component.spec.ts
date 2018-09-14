import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaHeroiComponent } from './pesquisa-heroi.component';

describe('PesquisaHeroiComponent', () => {
  let component: PesquisaHeroiComponent;
  let fixture: ComponentFixture<PesquisaHeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaHeroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
