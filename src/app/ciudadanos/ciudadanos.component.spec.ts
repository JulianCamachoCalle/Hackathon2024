import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanosComponent } from './ciudadanos.component';

describe('CiudadanosComponent', () => {
  let component: CiudadanosComponent;
  let fixture: ComponentFixture<CiudadanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiudadanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
