import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthModule } from './user-auth/user-auth.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { IfelseExampleComponent } from './ifelse-example/ifelse-example.component';
import { MultipleconditionExampleComponent } from './multiplecondition-example/multiplecondition-example.component';
import { SwitchcaseExampleComponent } from './switchcase-example/switchcase-example.component';
import { LoopExampleComponent } from './loop-example/loop-example.component';
import { StyleBindingExampleComponent } from './style-binding-example/style-binding-example.component';
import { HeaderComponent } from './header/header.component';
import { BasicFormExampleComponent } from './basic-form-example/basic-form-example.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListExampleComponent } from './todo-list-example/todo-list-example.component';
import { ChildComponent } from './child/child.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TwoWayBindingExampleComponent } from './two-way-binding-example/two-way-binding-example.component';
import { PipsExampleComponent } from './pips-example/pips-example.component';
import { UsdInrPipe } from './pips-example/usd-inr.pipe';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { RedElDirective } from './red-el.directive';
import { AppRoutingModule } from './app-routing.module';
import { BootStrapExampleComponent } from './boot-strap-example/boot-strap-example.component';
import { ParentComponent } from './parent/parent.component';
import { ChildStudentDetailsComponent } from './student-details/child-student-details/child-student-details.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { BasicAngularExampleComponent } from './basic-angular-example/basic-angular-example.component';
import { EventExampleComponent } from './event-example/event-example.component';
import { InputboxExampleComponent } from './inputbox-example/inputbox-example.component';
import { CounterExampleComponent } from './counter-example/counter-example.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { DynamicRoutingExampleComponent } from './dynamic-routing-example/dynamic-routing-example.component';
import { NoPageFoundExampleComponent } from './no-page-found-example/no-page-found-example.component';
import { FooterComponent } from './footer/footer.component';
import { ModelAndInterfaceExampleComponent } from './model-and-interface-example/model-and-interface-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    PersonListComponent,
    StudentListComponent,
    CountryListComponent,
    IfelseExampleComponent,
    MultipleconditionExampleComponent,
    SwitchcaseExampleComponent,
    LoopExampleComponent,
    StyleBindingExampleComponent,
    HeaderComponent,
    BasicFormExampleComponent,
    TodoListExampleComponent,
    ChildComponent,
    StudentDetailsComponent,
    TwoWayBindingExampleComponent,
    PipsExampleComponent,
    UsdInrPipe,
    ReactiveFormExampleComponent,
    RedElDirective,
    BootStrapExampleComponent,
    ParentComponent,
    ChildStudentDetailsComponent,
    DirectiveExampleComponent,
    BasicAngularExampleComponent,
    EventExampleComponent,
    InputboxExampleComponent,
    CounterExampleComponent,
    PropertybindingComponent,
    DynamicRoutingExampleComponent,
    NoPageFoundExampleComponent,
    FooterComponent,
    ModelAndInterfaceExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserAuthModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
