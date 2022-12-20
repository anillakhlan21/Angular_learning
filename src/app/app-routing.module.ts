import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
