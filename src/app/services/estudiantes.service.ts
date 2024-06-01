import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { endpoints } from '../utils/endpoints';
import { Estudiante } from '../interfaces/estudiante.interface';


@Injectable({
providedIn: 'root'
})
export class EstudiantesService {
    private readonly http = inject(HttpClient);
    constructor() { }
    // Obtener lista de estudiantes
    obtenerEstudiantes() {
    return this.http.get<Estudiante[]>(endpoints.obtenerEstudiantes);
    }
    // Obtener estudiante por ID
    obtenerEstudiantePorID(idEstudiante: number){
    return
    this.http.get<Estudiante>(endpoints.obtenerEstudiantePorID.replace(':idEstudiante', idEstudiante.toString()));
    }
    // Insertar estudiante
    agregarEstudiante(estudiante: Estudiante){
    // Se arma el objeto a enviar
    let body = {
    "nombresEstudiante": estudiante.NombresEstudiante,
    "apellidosEstudiante": estudiante.ApellidosEstudiante,
    "codigoEstudiante": estudiante.CodigoEstudiante,
    "correoEstudiante": estudiante.CorreoEstudiante
    }
    return this.http.post<any>(endpoints.agregarEstudiante,body);
    }
    // Eliminar un estudiante
    eliminarEstudiante(idEstudiante: number){
    return
    this.http.delete<any>(endpoints.eliminarEstudiante.replace(':idEstudiante',
    idEstudiante.toString()));
    }
    // Actualizar estudiante
    actualizarEstudiante(idEstudiante: number, estudiante: Estudiante){
    // Se arma el objeto a enviar
    let body = {
    "idEstudiante": estudiante.IdEstudiante,
    "nombresEstudiante": estudiante.NombresEstudiante,
    "apellidosEstudiante": estudiante.ApellidosEstudiante,
    "codigoEstudiante": estudiante.CodigoEstudiante,
    "correoEstudiante": estudiante.CorreoEstudiante
    }
    return
    this.http.patch<number>(endpoints.actualizarEstudiante.replace(':idEstudiante',idEstudiante.toString()), body);
    }
    
}

