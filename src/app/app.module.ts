import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifeCycleHooksComponent } from './topics/life-cycle-hooks/life-cycle-hooks.component';
import { DataBindingComponent } from './topics/data-binding/data-binding.component';
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
import { TheoryComponent } from './topics/directives/theory/theory.component';
import { ComponentDirectiveComponent } from './topics/directives/component-directive/component-directive.component';
import { NgIfDirectiveComponent } from './topics/directives/Structural-Directives/built-in/ng-if-directive/ng-if-directive.component';
import { NgForDirectiveComponent } from './topics/directives/Structural-Directives/built-in/ng-for-directive/ng-for-directive.component';
import { NgSwitchCaseDirectiveComponent } from './topics/directives/Structural-Directives/built-in/ng-switch-case-directive/ng-switch-case-directive.component';
import { NgStyleDirectiveComponent } from './topics/directives/Attribute-Directives/built-in/ng-style-directive/ng-style-directive.component';
import { NgClassDirectiveComponent } from './topics/directives/Attribute-Directives/built-in/ng-class-directive/ng-class-directive.component';
import { NgModelDirectiveComponent } from './topics/directives/Attribute-Directives/built-in/ng-model-directive/ng-model-directive.component';
import { PipeTheoryComponent } from './topics/pipes/pipe-theory/pipe-theory.component';
import { DatePipeComponent } from './topics/pipes/built-in-pipes/date-pipe/date-pipe.component';
import { UpperCasePipeComponent } from './topics/pipes/built-in-pipes/upper-case-pipe/upper-case-pipe.component';
import { LowerCasePipeComponent } from './topics/pipes/built-in-pipes/lower-case-pipe/lower-case-pipe.component';
import { SlicePipeComponent } from './topics/pipes/built-in-pipes/slice-pipe/slice-pipe.component';
import { NumberPipeComponent } from './topics/pipes/built-in-pipes/number-pipe/number-pipe.component';
import { PercentPipeComponent } from './topics/pipes/built-in-pipes/percent-pipe/percent-pipe.component';
import { CurrencyPipeComponent } from './topics/pipes/built-in-pipes/currency-pipe/currency-pipe.component';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { JsonPipeComponent } from './topics/pipes/built-in-pipes/json-pipe/json-pipe.component';
import { AsyncPipeComponent } from './topics/pipes/built-in-pipes/async-pipe/async-pipe.component';
import { TitleCasePipeComponent } from './topics/pipes/built-in-pipes/title-case-pipe/title-case-pipe.component';
import { HostBindingComponent } from './topics/directives/Attribute-Directives/custom/host-binding/host-binding.component';
import { HostListnerComponent } from './topics/directives/Attribute-Directives/custom/host-listner/host-listner.component';
import { AccessibilityHelperComponent } from './topics/directives/Attribute-Directives/custom/accessibility-helper/accessibility-helper.component';
import { ImageZoomComponent } from './topics/directives/Attribute-Directives/custom/image-zoom/image-zoom.component';
import { DraggableElementComponent } from './topics/directives/Attribute-Directives/custom/draggable-element/draggable-element.component';
import { CollapsibleElementComponent } from './topics/directives/Attribute-Directives/custom/collapsible-element/collapsible-element.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LifeCycleHooksComponent,
    DataBindingComponent,
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
    NgOnDestroyComponent,
    TheoryComponent,
    ComponentDirectiveComponent,
    NgIfDirectiveComponent,
    NgForDirectiveComponent,
    NgSwitchCaseDirectiveComponent,
    NgStyleDirectiveComponent,
    NgClassDirectiveComponent,
    NgModelDirectiveComponent,
    PipeTheoryComponent,
    DatePipeComponent,
    UpperCasePipeComponent,
    LowerCasePipeComponent,
    SlicePipeComponent,
    NumberPipeComponent,
    PercentPipeComponent,
    CurrencyPipeComponent,
    JsonPipeComponent,
    AsyncPipeComponent,
    TitleCasePipeComponent,
    HostBindingComponent,
    HostListnerComponent,
    AccessibilityHelperComponent,
    ImageZoomComponent,
    DraggableElementComponent,
    CollapsibleElementComponent
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
