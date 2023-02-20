import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgMonthsChartComponent } from './avg-months-chart.component';

describe('AvgMonthsChartComponent', () => {
  let component: AvgMonthsChartComponent;
  let fixture: ComponentFixture<AvgMonthsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgMonthsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgMonthsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
