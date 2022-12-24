import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgClassDirectiveComponent } from './topics/Directives/Attribute-Directives/ng-class-directive/ng-class-directive.component';
import { NgModelDirectiveComponent } from './topics/Directives/Attribute-Directives/ng-model-directive/ng-model-directive.component';
import { NgStyleDirectiveComponent } from './topics/Directives/Attribute-Directives/ng-style-directive/ng-style-directive.component';
import { NgForDirectiveComponent } from './topics/Directives/Structural-Directives/ng-for-directive/ng-for-directive.component';
import { NgIfDirectiveComponent } from './topics/Directives/Structural-Directives/ng-if-directive/ng-if-directive.component';
import { NgSwitchCaseDirectiveComponent } from './topics/Directives/Structural-Directives/ng-switch-case-directive/ng-switch-case-directive.component';
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
import { TheoryComponent } from './topics/Directives/theory/theory.component';
import { PipeTheoryComponent } from './topics/pipes/pipe-theory/pipe-theory.component';
import { DatePipeComponent } from './topics/pipes/built-in-pipes/date-pipe/date-pipe.component';
import { UpperCasePipeComponent } from './topics/pipes/built-in-pipes/upper-case-pipe/upper-case-pipe.component';
import { LowerCasePipeComponent } from './topics/pipes/built-in-pipes/lower-case-pipe/lower-case-pipe.component';
import { CurrencyPipeComponent } from './topics/pipes/built-in-pipes/currency-pipe/currency-pipe.component';
import { NumberPipeComponent } from './topics/pipes/built-in-pipes/number-pipe/number-pipe.component';
import { PercentPipeComponent } from './topics/pipes/built-in-pipes/percent-pipe/percent-pipe.component';
import { SlicePipeComponent } from './topics/pipes/built-in-pipes/slice-pipe/slice-pipe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
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
          }


        ]
      }
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
