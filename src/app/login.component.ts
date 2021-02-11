import { Component, Input,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error:string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid  
    if (this.loginForm.invalid) {
      return;
    }   
    if (String(this.f.username.value)=='blogger@grapecity.com'&& String(this.f.password.value) == '1qaz!QAZ') {
      
      localStorage.setItem("UserId", this.f.username.value);
      localStorage.setItem("Password", this.f.password.value);
      this.router.navigate(['/list']);
      this.error="";
    }
    else {
this.error="Wrong Username or Password";
      this.router.navigate(['/login']);
    }





  }
}
