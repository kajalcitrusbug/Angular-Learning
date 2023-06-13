import { Directive, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BasicAngularExampleComponent } from './basic-angular-example/basic-angular-example.component';
import { BasicFormExampleComponent } from './basic-form-example/basic-form-example.component';
import { BootStrapExampleComponent } from './boot-strap-example/boot-strap-example.component';
import { CounterExampleComponent } from './counter-example/counter-example.component';
import { CountryListComponent } from './country-list/country-list.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { DynamicRoutingExampleComponent } from './dynamic-routing-example/dynamic-routing-example.component';
import { EventExampleComponent } from './event-example/event-example.component';
import { IfelseExampleComponent } from './ifelse-example/ifelse-example.component';
import { InputboxExampleComponent } from './inputbox-example/inputbox-example.component';
import { LoginComponent } from './login/login.component';
import { LoopExampleComponent } from './loop-example/loop-example.component';
import { MultipleconditionExampleComponent } from './multiplecondition-example/multiplecondition-example.component';
import { NoPageFoundExampleComponent } from './no-page-found-example/no-page-found-example.component';
import { ParentComponent } from './parent/parent.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PipsExampleComponent } from './pips-example/pips-example.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { RegisterComponent } from './register/register.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StyleBindingExampleComponent } from './style-binding-example/style-binding-example.component';
import { SwitchcaseExampleComponent } from './switchcase-example/switchcase-example.component';
import { TodoListExampleComponent } from './todo-list-example/todo-list-example.component';
import { TwoWayBindingExampleComponent } from './two-way-binding-example/two-way-binding-example.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'basic-angular', component: BasicAngularExampleComponent },
  { path: 'event-example', component: EventExampleComponent },
  { path: 'inputbox-example', component: InputboxExampleComponent },
  { path: 'conuter-example', component: CounterExampleComponent },
  { path: 'property-binding-example', component: PropertybindingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'person-list', component: PersonListComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'if-else-example', component: IfelseExampleComponent },
  {
    path: 'multiple-condition-example',
    component: MultipleconditionExampleComponent,
  },
  { path: 'switch-case-example', component: SwitchcaseExampleComponent },
  { path: 'loop-example', component: LoopExampleComponent },
  { path: 'style-binding-example', component: StyleBindingExampleComponent },
  { path: 'basic-form-example', component: BasicFormExampleComponent },
  { path: 'bootStrap-example', component: BootStrapExampleComponent },
  { path: 'todo-list-example', component: TodoListExampleComponent },
  { path: 'child-parent-example', component: ParentComponent },
  { path: 'two-way-binding-example', component: TwoWayBindingExampleComponent },
  { path: 'student-details-example', component: StudentDetailsComponent },
  { path: 'pipes-example', component: PipsExampleComponent },
  { path: 'reactive-form-example', component: ReactiveFormExampleComponent },
  { path: 'directive-example', component: DirectiveExampleComponent },
  {
    path: 'dynamic-routing-example/:id',
    component: DynamicRoutingExampleComponent,
  },
  {
    path: '**',
    component: NoPageFoundExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
