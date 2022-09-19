import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  public signUpForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  signUp() {
    this.http
      .post<any>(
        'https://soccer-arena.herokuapp.com/api/players',
        this.signUpForm.value
      )
      .subscribe(
        (res) => {
          alert('Signin succesful');
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
