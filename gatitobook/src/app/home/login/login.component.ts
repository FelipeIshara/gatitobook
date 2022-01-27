import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authSercive: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  // login chama o service de autenticação
  login(){
    this.authSercive.autenticar(this.usuario, this.senha).subscribe(
      ()=> this.router.navigate(['animais']),
      (error)=> console.log(error)


    )

  }

}
