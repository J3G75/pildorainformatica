// importacion 
import { style } from "@angular/animations";
import { Component } from "@angular/core";

// decorador
@Component({

    selector:"app-empleados", // Si se crea manual hay que declararlo en el componente html principal (app-component.html)
    templateUrl:"./empleados.component.html",
    styleUrls:["./empleados.component.css"]

})

// clase
// Si se crea el componente manual, hay que ir al componente ts principal (app.module.ts) y declararlo
export class EmpleadosComponent{

}