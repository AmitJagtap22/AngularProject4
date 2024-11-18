import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstComponent,SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssignment7';
  public motto:string=""
  public str:string="Marvellous Infosystems"

  public fun(){
    return "Marvellous Infosystems"
  }

  public purpose(){
    this.motto="Educating for Better tomorrow"
  }

  public upper(){
    this.str=this.str.toUpperCase()
    return this.str
  }

  public lower(){
    this.str=this.str.toLowerCase()
    return this.str
  }
}
