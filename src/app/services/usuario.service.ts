import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8080/api/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private htttp: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    console.log('email:', email, 'pass:', password);

    const data = {
      "email": email,
      "password": password
    }

    return this.htttp.post(baseUrl, data, 
      {
        headers : new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  validaSesion() {
    return (localStorage.getItem('username') == null || localStorage.getItem('password') == null) ? false : true;
  }


  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
