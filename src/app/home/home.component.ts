import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  email: string = '';
  password: string = '';

  constructor(
    private router: Router
  ) { }

 ngOnInit() {

  }

  redireccion(variable:number){
    if(variable == 1)
      this.router.navigate(['/login']);
    else{
      alert('Sin condiciones necesarias');
    }
  }

}
