import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.components";


let routing = RouterModule.forChild
([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent },
    { path: "**", redirectTo: "auth" }
]);

  @NgModule({
    imports: [CommonModule, routing, FormsModule],
    declarations: [AuthComponent,AdminComponent]
  })
  export class AdminModule
  {

  }
