import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import this
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { computeSha256Hash } from 'src/app/Utils/Utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private userSvc: UserService, private router : Router) {}

  loginForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  navigateToLogin(){
    this.router.navigate(["/login"])
  }

  onSubmit() {
    console.warn(this.loginForm.value);
    if (this.loginForm.value.password)
      this.loginForm.patchValue({
        ...this.loginForm.value,
        password: computeSha256Hash(this.loginForm.value.password),
      });

    this.userSvc.saveUser(this.loginForm.value as User).subscribe(p => console.log(p));
  }
}
