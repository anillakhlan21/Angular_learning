import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifeCycleHooksComponent } from './topics/life-cycle-hooks/life-cycle-hooks.component';
import { DataBindingComponent } from './topics/data-binding/data-binding.component';
import { DirectivesComponent } from './topics/directives/directives.component';
import { PipesComponent } from './topics/pipes/pipes.component';
import { FormsComponent } from './topics/forms/forms.component';
import { ComponentCommunicationComponent } from './topics/component-communication/component-communication.component';
import { ServicesDependencyComponent } from './topics/services-dependency/services-dependency.component';
import { HttpComponent } from './topics/http/http.component';
import { RouterComponent } from './topics/router/router.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOnChangesComponent } from './topics/life-cycle-hooks/hooks/ngOnChanges/ngOnChanges.component';
import { ChildAComponent } from './topics/life-cycle-hooks/hooks/ngOnChanges/child-A/child-A.component'
import { ChildBComponent } from './topics/life-cycle-hooks/hooks/ngDoCheck/child-B/child-B.component'
import { NgDoCheckComponent } from './topics/life-cycle-hooks/hooks/ngDoCheck/ngDoCheck.component';
import { ChildCComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentInit/child-c/child-c.component';
import { NgAfteContentInitComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentInit/ngAfteContentInit.component';
import { NgAfteContentCheckedComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentChecked/ngAfterContentChecked.component';
import { ChildDComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentChecked/child-d/child-d.component';
import { NgAfteViewInitComponent } from './topics/life-cycle-hooks/hooks/ngAfteViewInit/ngAfteViewInit.component';
import { NgAfterViewCheckedComponent } from './topics/life-cycle-hooks/hooks/ngAfterViewChecked/ngAfterViewChecked.component';
import { ChildEComponent } from './topics/life-cycle-hooks/hooks/ngOnDestroy/child-e/child-e.component';
import { NgOnDestroyComponent } from './topics/life-cycle-hooks/hooks/ngOnDestroy/ngOnDestroy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LifeCycleHooksComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    FormsComponent,
    ComponentCommunicationComponent,
    ServicesDependencyComponent,
    HttpComponent,
    RouterComponent,
    NgOnChangesComponent,
    ChildAComponent,
    ChildBComponent,
    NgDoCheckComponent,
    ChildCComponent,
    NgAfteContentInitComponent,
    NgAfteContentCheckedComponent,
    ChildDComponent,
    NgAfteViewInitComponent,
    NgAfterViewCheckedComponent,
    ChildEComponent,
    NgOnDestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
