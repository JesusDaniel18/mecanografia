import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronavbarComponent } from './pronavbar.component';

describe('PronavbarComponent', () => {
  let component: PronavbarComponent;
  let fixture: ComponentFixture<PronavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PronavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PronavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
