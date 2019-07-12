import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ViewModuleComponent } from "./view.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    ViewModuleComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ViewModule {}
