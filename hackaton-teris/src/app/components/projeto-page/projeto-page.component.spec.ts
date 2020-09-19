import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoPageComponent } from './projeto-page.component';

describe('ProjetoPageComponent', () => {
  let component: ProjetoPageComponent;
  let fixture: ComponentFixture<ProjetoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
