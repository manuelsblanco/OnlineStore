import { Component } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { Router } from "@angular/router";

@Component
(
  { selector: 'auth',
    templateUrl: "auth.component.html"
  }
)

export class AuthComponent
{
  public username: string="";
  public password: string="";
  public errorMessage: string="";

  constructor(private router: Router)
  {

  }

  authenticate(form: NgForm)
  {
    if(form.valid)
    {
      //Perform the authentication
      this.router.navigateByUrl("/Admin/main");
    }
    else
    {
      this.errorMessage= "Form Data Invalid";
    }
  }
}
