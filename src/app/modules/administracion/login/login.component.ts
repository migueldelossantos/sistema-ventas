import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/shared/models/administracion/usuarios.model';
import { UsuariosService } from 'src/app/shared/services/administracion/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = new UsuarioModel();
  loginForm = new FormGroup({});
  mensajeError = "";


  constructor(
    private usuariosServices:UsuariosService,
    private fb:FormBuilder,
    private router:Router
  ){

    this.crearLoginForm();
  }

  ngOnInit(): void {
    
  }

  crearLoginForm(){
    this.loginForm = this.fb.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  login(){

    if( this.loginForm.invalid ){
      return Object.values( this.loginForm.controls ).forEach(control=>{
        control.markAsTouched();
      })
    }

    this.usuario.email = this.loginForm.get('email')?.value;
    this.usuario.password = this.loginForm.get('password')?.value;

    this.usuariosServices.login(this.usuario).subscribe({
      next : data=>{
        //Guardan Token
        localStorage.setItem('sesion', JSON.stringify(data));
        this.router.navigate(['menu'])
      },
      error : error=>{
        //console.log('error :>> ', error);
        this.mensajeError = error.error.message;
      }
    })
  }

  validaCampo(campo:string){
    return this.loginForm.get(campo)?.touched && this.loginForm.get(campo)?.invalid;
  }

}
