import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Material Modulos
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from "@angular/forms"
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';


//Componentes
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { NavesEspacialesComponent } from './naves-espaciales/naves-espaciales.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { EspeciesComponent } from './especies/especies.component';
import { PlanetasComponent } from './planetas/planetas.component';
//Services
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch:'full' },
  { path: 'Inicio', component: HomeComponent },
  { path: 'Personajes', component: PersonajesComponent },
  { path: 'Peliculas', component: PeliculasComponent },
  { path: 'NavesEspaciales', component: NavesEspacialesComponent },
  { path: 'Vehiculos', component: VehiculosComponent },
  { path: 'Especies', component: EspeciesComponent },
  { path: 'Planetas', component: PlanetasComponent },
  { path: 'Inicio', component: HomeComponent },
  { path: '**', redirectTo:'/',pathMatch:'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    PersonajesComponent,
    PeliculasComponent,
    NavesEspacialesComponent,
    VehiculosComponent,
    EspeciesComponent,
    PlanetasComponent
  ],
  imports: [
    MatTableModule,
    MatGridListModule,
    MatSidenavModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
