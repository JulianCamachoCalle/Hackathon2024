import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapawalComponent } from './mapawal.component';

describe('MapawalComponent', () => {
  let component: MapawalComponent;
  let fixture: ComponentFixture<MapawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapawalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
