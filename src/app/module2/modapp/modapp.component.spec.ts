import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModappComponent } from './modapp.component';

describe('ModappComponent', () => {
  let component: ModappComponent;
  let fixture: ComponentFixture<ModappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModappComponent]
    });
    fixture = TestBed.createComponent(ModappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
