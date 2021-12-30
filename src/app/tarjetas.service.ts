import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  private apiTarjetas = environment.urlBackend + "/api/tarjetas";

  constructor(
    private http:HttpClient
  ) { }

  isExist(id:string):Observable<boolean> {
    console.log('isExist', this.apiTarjetas + "/" + id );
    try {
      return this.http.get<boolean>(this.apiTarjetas + "/" + id);  
    } catch (error) {
      console.log('isExist error',error);
    }
    return new BehaviorSubject(false).asObservable();
  }
}
