import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifeCycleHooksComponent } from './topics/life-cycle-hooks/life-cycle-hooks.component';
import { DataBindingComponent } from './topics/data-binding/data-binding.component';
import { ComponentCommunicationComponent } from './topics/component-communication/component-communication.component';
import { ServicesDependencyComponent } from './topics/services-dependency/services-dependency.component';
import { HttpComponent } from './topics/http/http.component';
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
import { NgIfDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-if-directive/ng-if-directive.component';
import { NgForDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-for-directive/ng-for-directive.component';
import { NgSwitchCaseDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-switch-case-directive/ng-switch-case-directive.component';
import { NgStyleDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-style-directive/ng-style-directive.component';
import { NgClassDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-class-directive/ng-class-directive.component';
import { NgModelDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-model-directive/ng-model-directive.component';
import { PipeTheoryComponent } from './topics/pipes/pipe-theory/pipe-theory.component';
import { DatePipeComponent } from './topics/pipes/built-in/date-pipe/date-pipe.component';
import { UpperCasePipeComponent } from './topics/pipes/built-in/upper-case-pipe/upper-case-pipe.component';
import { LowerCasePipeComponent } from './topics/pipes/built-in/lower-case-pipe/lower-case-pipe.component';
import { SlicePipeComponent } from './topics/pipes/built-in/slice-pipe/slice-pipe.component';
import { NumberPipeComponent } from './topics/pipes/built-in/number-pipe/number-pipe.component';
import { PercentPipeComponent } from './topics/pipes/built-in/percent-pipe/percent-pipe.component';
import { CurrencyPipeComponent } from './topics/pipes/built-in/currency-pipe/currency-pipe.component';


import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { JsonPipeComponent } from './topics/pipes/built-in/json-pipe/json-pipe.component';
import { AsyncPipeComponent } from './topics/pipes/built-in/async-pipe/async-pipe.component';
import { TitleCasePipeComponent } from './topics/pipes/built-in/title-case-pipe/title-case-pipe.component';
import { CustomPipesComponent } from './topics/pipes/custom/custom-pipes/custom-pipes.component';
import { PluralPipe } from './topics/pipes/custom/pluralization/plural.pipe';
import { CustomAttributeDirectivesComponent } from './topics/directives/attribute-directives/custom/custom-attribute-directives/custom-attribute-directives.component';
import { CustomStructuralDirectivesComponent } from './topics/directives/structural-directives/custom/custom-structural-directives/custom-structural-directives.component';
import { ImageZoomDirective } from './topics/directives/attribute-directives/custom/image-zoom/image-zoom.directive';
import { FormsTheoryComponent } from './topics/forms/forms-theory/forms-theory.component';
import { ReactiveFormsComponent } from './topics/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './topics/forms/template-driven-forms/template-driven-forms.component';
import { KeyValuePipeComponent } from './topics/pipes/built-in/key-value-pipe/key-value-pipe.component';
import { TemplateFormValidationComponent } from './topics/forms/template-driven-forms/template-form-validation/template-form-validation.component';
import { RoutingTheoryComponent } from './topics/routing/routing-theory/routing-theory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RHomeComponent } from './topics/routing/inner-routing/rhome/rhome.component';
import { RContactComponent } from './topics/routing/inner-routing/rcontact/rcontact.component';
import { RProductsComponent } from './topics/routing/inner-routing/rproducts/rproducts.component';
import { InnerRoutingComponent } from './topics/routing/inner-routing/inner-routing.component';
import { InnerAppRoutingModule } from './topics/routing/inner-routing/innerRouting.module';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './profile/profile.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LifeCycleHooksComponent,
    DataBindingComponent,
    ComponentCommunicationComponent,
    ServicesDependencyComponent,
    HttpComponent,
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
    CustomPipesComponent,
    PluralPipe,
    CustomAttributeDirectivesComponent,
    CustomStructuralDirectivesComponent,
    ImageZoomDirective,
    FormsTheoryComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    KeyValuePipeComponent,
    TemplateFormValidationComponent,
    RoutingTheoryComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe,AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
