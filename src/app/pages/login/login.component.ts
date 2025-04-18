import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import this
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { computeSha256Hash } from 'src/app/Utils/Utils';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private userSvc: UserService) {}

  onSubmit() {
    console.warn(this.loginForm.value);
    if (this.loginForm.value.password) {
      const user = {
        ...this.loginForm.value,
        password: computeSha256Hash(this.loginForm.value.password),
        firstName: '',
        lastName: '',
      } as User;

      this.userSvc.login(user).subscribe((p) => {
        if (p.token) {
          localStorage.setItem('token', p.token ?? '');
          this.router.navigate(['/home']);
        }
      });
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
}
