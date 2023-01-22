import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgClassDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-class-directive/ng-class-directive.component';
import { NgModelDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-model-directive/ng-model-directive.component';
import { NgStyleDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-style-directive/ng-style-directive.component';
import { NgForDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-for-directive/ng-for-directive.component';
import { ConstructorComponent } from './topics/life-cycle-hooks/constructor/constructor.component';
import { NgAfteContentCheckedComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentChecked/ngAfterContentChecked.component';
import { NgAfteContentInitComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentInit/ngAfteContentInit.component';
import { NgAfterViewCheckedComponent } from './topics/life-cycle-hooks/hooks/ngAfterViewChecked/ngAfterViewChecked.component';
import { NgAfteViewInitComponent } from './topics/life-cycle-hooks/hooks/ngAfteViewInit/ngAfteViewInit.component';
import { NgDoCheckComponent } from './topics/life-cycle-hooks/hooks/ngDoCheck/ngDoCheck.component';
import { NgOnChangesComponent } from './topics/life-cycle-hooks/hooks/ngOnChanges/ngOnChanges.component';
import { NgOnDestroyComponent } from './topics/life-cycle-hooks/hooks/ngOnDestroy/ngOnDestroy.component';
import { NgOnInitComponent } from './topics/life-cycle-hooks/hooks/ngOnInit/ngOnInit.component';
import { LifeCycleHooksTheoryComponent } from './topics/life-cycle-hooks/life-cycle-hooks-theory/life-cycle-hooks-theory.component';
import { LifeCycleHooksComponent } from './topics/life-cycle-hooks/life-cycle-hooks.component';
import { TheoryComponent } from './topics/directives/theory/theory.component';
import { PipeTheoryComponent } from './topics/pipes/pipe-theory/pipe-theory.component';
import { DatePipeComponent } from './topics/pipes/built-in/date-pipe/date-pipe.component';
import { UpperCasePipeComponent } from './topics/pipes/built-in/upper-case-pipe/upper-case-pipe.component';
import { LowerCasePipeComponent } from './topics/pipes/built-in/lower-case-pipe/lower-case-pipe.component';
import { CurrencyPipeComponent } from './topics/pipes/built-in/currency-pipe/currency-pipe.component';
import { NumberPipeComponent } from './topics/pipes/built-in/number-pipe/number-pipe.component';
import { PercentPipeComponent } from './topics/pipes/built-in/percent-pipe/percent-pipe.component';
import { SlicePipeComponent } from './topics/pipes/built-in/slice-pipe/slice-pipe.component';
import { ComponentDirectiveComponent } from './topics/directives/component-directive/component-directive.component';
import { JsonPipeComponent } from './topics/pipes/built-in/json-pipe/json-pipe.component';
import { TitleCasePipeComponent } from './topics/pipes/built-in/title-case-pipe/title-case-pipe.component';
import { AsyncPipeComponent } from './topics/pipes/built-in/async-pipe/async-pipe.component';
import { NgIfDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-if-directive/ng-if-directive.component';
import { NgSwitchCaseDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-switch-case-directive/ng-switch-case-directive.component';
import { CustomPipesComponent } from './topics/pipes/custom/custom-pipes/custom-pipes.component';
import { CustomAttributeDirectivesComponent } from './topics/directives/attribute-directives/custom/custom-attribute-directives/custom-attribute-directives.component';
import { CustomStructuralDirectivesComponent } from './topics/directives/structural-directives/custom/custom-structural-directives/custom-structural-directives.component';
import { FormsTheoryComponent } from './topics/forms/forms-theory/forms-theory.component';
import { ReactiveFormsComponent } from './topics/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './topics/forms/template-driven-forms/template-driven-forms.component';
import { KeyValuePipeComponent } from './topics/pipes/built-in/key-value-pipe/key-value-pipe.component';
import { RoutingTheoryComponent } from './topics/routing/routing-theory/routing-theory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RHomeComponent } from './topics/routing/inner-routing/rhome/rhome.component';
import { RProductsComponent } from './topics/routing/inner-routing/rproducts/rproducts.component';
import { RContactComponent } from './topics/routing/inner-routing/rcontact/rcontact.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { DeactivateGuard } from './services/deactivate.guard';
import { NgTemplateComponent } from './topics/template-elements/ng-template/ng-template.component';
import { NgTemplateOutlet } from '@angular/common';
import { NgContainerComponent } from './topics/template-elements/ng-container/ng-container.component';
import { NgContentComponent } from './topics/template-elements/ng-content/ng-content.component';
import { NgTemplateOutletComponent } from './topics/template-elements/ng-template-outlet/ng-template-outlet.component';
import { ServiceTheoryComponent } from './topics/services-dependency/service-theory/service-theory.component';
import { ServicesDependencyComponent } from './topics/services-dependency/services-dependency.component';
import { HttpComponent } from './topics/http/http.component';
import { ParentToChildComponent } from './topics/component-communication/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './topics/component-communication/child-to-parent/child-to-parent.component';
import { NoParentChildRelationComponent } from './topics/component-communication/no-parent-child-relation/no-parent-child-relation.component';
import { SiblingsComponent } from './topics/component-communication/siblings/siblings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [DeactivateGuard]
      },
      {
        path: 'life-cycle-hooks',
        children: [
          {
            path: 'theory',
            component: LifeCycleHooksTheoryComponent
          },
          {
            path: 'constructor',
            component: ConstructorComponent
          },
          {
            path: 'ngOnChanges',
            component: NgOnChangesComponent
          },
          {
            path: 'ngOnInit',
            component: NgOnInitComponent
          },
          {
            path: 'ngDoCheck',
            component: NgDoCheckComponent
          },
          {
            path: 'ngAfterContentInit',
            component: NgAfteContentInitComponent
          },
          {
            path: 'ngAfterContentChecked',
            component: NgAfteContentCheckedComponent
          },
          {
            path: 'ngAfteViewInit',
            component: NgAfteViewInitComponent
          },
          {
            path: 'ngAfterViewChecked',
            component: NgAfterViewCheckedComponent
          },
          {
            path: 'ngOnDestroy',
            component: NgOnDestroyComponent
          }
        ]
      },
      {
        path: 'directives',
        children: [
          {
            path: 'theory',
            component: TheoryComponent
          },
          {
            path: 'component',
            component: ComponentDirectiveComponent,
          },
          {
            path: 'structural',
            children: [{
              path: 'built-in',
              children: [
                {
                  path: 'ngIf',
                  component: NgIfDirectiveComponent
                },
                {
                  path: 'ngSwitchCase',
                  component: NgSwitchCaseDirectiveComponent
                },
                {
                  path: 'ngFor',
                  component: NgForDirectiveComponent
                },
              ]
            },
            {
              path: 'custom',
              component: CustomStructuralDirectivesComponent
            }
            ]
          },
          {
            path: 'attribute',
            children: [
              {
                path: 'built-in',
                children: [
                  {
                    path: 'ngClass',
                    component: NgClassDirectiveComponent
                  },
                  {
                    path: 'ngStyle',
                    component: NgStyleDirectiveComponent
                  },
                  {
                    path: 'ngModel',
                    component: NgModelDirectiveComponent
                  }
                ]
              },
              {
                path: 'custom',
                component: CustomAttributeDirectivesComponent
              }
            ]
          }

        ]
      },
      {
        path: 'pipes',
        children: [
          {
            path: 'theory',
            component: PipeTheoryComponent,
          },
          {
            path: 'date-pipe',
            component: DatePipeComponent
          },
          {
            path: 'upper-case-pipe',
            component: UpperCasePipeComponent,
          },
          {
            path: 'lower-case-pipe',
            component: LowerCasePipeComponent
          },
          {
            path: 'title-case-pipe',
            component: TitleCasePipeComponent
          },
          {
            path: 'currency-pipe',
            component: CurrencyPipeComponent,
          },
          {
            path: 'number-pipe',
            component: NumberPipeComponent,
          },
          {
            path: 'percent-pipe',
            component: PercentPipeComponent,
          },
          {
            path: 'slice-pipe',
            component: SlicePipeComponent,
          },
          {
            path: 'json-pipe',
            component: JsonPipeComponent
          },
          {
            path: 'async-pipe',
            component: AsyncPipeComponent
          },
          {
            path: 'keyValue-pipe',
            component: KeyValuePipeComponent
          },
          {
            path: 'custom',
            component: CustomPipesComponent
          }

        ]
      },
      {
        path: 'forms',
        children: [
          {
            path: 'theory',
            component: FormsTheoryComponent
          },
          {
            path: 'reactive-forms',
            component: ReactiveFormsComponent,
          },
          {
            path: 'template-driven-forms',
            component: TemplateDrivenFormsComponent,
          }
        ]
      },
      {
        path: 'routing',
        children: [
          {
            path: 'theory',
            component: RoutingTheoryComponent
          },
          {
            path: 'inner-routing',
            loadChildren: () => import('./topics/routing/inner-routing/innerRouting.module').then(m => m.InnerAppRoutingModule)
          }
        ]
      },
      {
        path: 'template-elements',
        children: [
          {
            path: 'ng-template',
            component: NgTemplateComponent
          },
          {
            path: 'ng-template-outlet',
            component: NgTemplateOutletComponent
          },
          {
            path: 'ng-container',
            component: NgContainerComponent
          },
          {
            path: 'ng-content',
            component: NgContentComponent
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: 'theory',
            component: ServiceTheoryComponent
          },
          {
            path: 'services-and-dependency-injection',
            component: ServicesDependencyComponent
          }
        ]
      },
      {
        path: 'http',
        component: HttpComponent
      },
      {
        path: 'component-communication',
        children: [
          {
            path: 'parent-to-child',
            component: ParentToChildComponent
          },
          {
            path: 'child-to-parent',
            component: ChildToParentComponent
          },
          {
            path: 'siblings',
            component: SiblingsComponent
          },
          {
            path: 'no-parent-child-relation',
            component: NoParentChildRelationComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
