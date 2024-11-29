import { Component, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hello-world',
    standalone: true, 
    imports: [MatButtonModule, MatInputModule, FormsModule],
    templateUrl: './hello-world.component.html',
    styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  title: string="Harjoittelua";
  text: string = "Homepage";
  itemImageUrl= "https://cdn.pixabay.com/photo/2018/10/16/09/11/pens-3750998_1280.jpg";

  onButtonClicked() {
    if (this.itemImageUrl === "https://cdn.pixabay.com/photo/2018/10/16/09/11/pens-3750998_1280.jpg") {
      this.itemImageUrl = "https://cdn.pixabay.com/photo/2018/08/08/12/59/school-3592121_1280.jpg";
    } else {
      this.itemImageUrl = "https://cdn.pixabay.com/photo/2018/10/16/09/11/pens-3750998_1280.jpg";
    };
  }

  
}
