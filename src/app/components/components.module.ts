import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerDistributionComponent } from "./farmer-distribution/farmer-distribution.component";
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
  declarations: [
    FarmerDistributionComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FarmerDistributionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ]
})
export class ComponentsModule {}
