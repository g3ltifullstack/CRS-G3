import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const hdr = new HttpHeaders().set('content-type', 'application/json');

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private userid:string=localStorage.getItem('userId');
  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns list of courses in catalog
   */
  getCourses() {
    return this.http.get('http://localhost:8080/admin/viewCoursesInCatalogue');
    
  }
  /**
   * 
   * @param data json data for adding course
   * @returns Custom Response Message
   */
  addCourse(data) {
    return this.http.post('http://localhost:8080/admin/addCourse', data, { headers: hdr, responseType: 'text' });
  }
  /**
   * 
   * @param courseCode coursecode which needs to be deleted from catalog
   * @returns Custom Response Message
   */
  deleteCourse(courseCode){
    return this.http.delete('http://localhost:8080/admin/deleteCourse/'+courseCode,{ headers: hdr, responseType: 'text' })
  }
  
}






