import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvolvimentosComponent } from './envolvimentos.component';

describe('EnvolvimentosComponent', () => {
  let component: EnvolvimentosComponent;
  let fixture: ComponentFixture<EnvolvimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvolvimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvolvimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
