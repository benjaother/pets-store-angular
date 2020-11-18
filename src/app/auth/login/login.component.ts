import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formSubmited = false;

  public loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private _userService: UsuarioService,
    private router: Router) {

   }

  ngOnInit(): void {
  }


  login() {
    this.formSubmited = true;
    
    if(this.loginForm.invalid) 
      return;

    console.log(this.loginForm.value.email);
    

    this._userService.login(this.loginForm.value.email, 
      this.loginForm.value.password).subscribe((data: any) => {
        console.log(data);
        
        if (data.ok) {
          // si se pudo hacer login
          localStorage.setItem('username', 'admin');
          localStorage.setItem('password', 'admin');

          this.router.navigateByUrl('/pets');
        } else {
          // si no se pudo hacer login
          alert('Usuario/Password invalidos');
        }
      }, (error: any) => {
        console.error(error);
        
        alert('Usuario/Password invalidos');
      });
  }

  campoNoValido(campo: string): boolean {
    if (this.loginForm.get(campo).invalid && this.formSubmited) {
      return true;
    }

    return false;
  }
}
