import { Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { GruposComponent } from './grupos/grupos.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AgregarEstudianteComponent } from './estudiantes/agregar-estudiante/agregar-estudiante.component';

export const routes: Routes = [
    {path: '', component: EstudiantesComponent, pathMatch: 'full'}, // Ruta pordefecto
    { path:'agregarEstudiante', component: AgregarEstudianteComponent},
    { path:'agregarEstudiante/:idEstudiante', component:AgregarEstudianteComponent},
    //{path: '**', redirectTo: '', pathMatch: 'full'}, // Rutas no existentes

{path: '', component: CarrerasComponent, pathMatch: 'full'}, // Ruta pordefecto
{path: '**', redirectTo: '', pathMatch: 'full'}, // Rutas no existentes

{path: '', component: GruposComponent, pathMatch: 'full'}, // Ruta pordefecto
{path: '**', redirectTo: '', pathMatch: 'full'},// Rutas no existentes

{path: '', component: MateriasComponent, pathMatch: 'full'}, // Ruta pordefecto
{path: '**', redirectTo: '', pathMatch: 'full'},// Rutas no existentes

{path: '', component: ProfesoresComponent, pathMatch: 'full'}, // Ruta pordefecto
{path: '**', redirectTo: '', pathMatch: 'full'} // Rutas no existentes
];

