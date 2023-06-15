import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//IMPORTAR COMPONENTES
import {RegisterComponent} from './components/Forum/register.component';



const appRoutes: Routes = [
    {path:'',component:RegisterComponent},
    {path:'inicio',component:RegisterComponent},
   
    {path:'register',component:RegisterComponent},
    
]

//EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);