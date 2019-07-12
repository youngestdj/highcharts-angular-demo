import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDistributionComponent } from './farmer-distribution.component';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';

describe('FarmerDistributionComponent', () => {
  let component: FarmerDistributionComponent;
  let fixture: ComponentFixture<FarmerDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerDistributionComponent, HighchartsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
