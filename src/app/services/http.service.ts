import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class HttpService {
  baseURL = 'https://cloud-api-gateway.altorumleren.com';
  bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWVhYzMzNzQtNTlkYS00NTFkLTk3MzAtMjQzZmU4ZDQyOGRlIiwiY2xpZW50IjoiYjNjYWY0NjUtMjM1YS00ZDE1LWE5OWQtZmZiZmY1ZjI0NTUyIiwidGVuYW50IjoiYjU0NzliZTAtMzE1Ny00N2ZkLWJlZGItMjA3NDkxNmJlMzc3IiwiY3VzdG9tZXIiOm51bGwsInR5cGUiOiJ0ZW5hbnRVc2VyIiwiY2xhaW1zIjp7InByb2R1Y3RtYW5hZ2VtZW50LWluc3RhbGxlZHByb2R1Y3RzIjpbIioiXSwiY3JtLXVzZXJzIjpbIioiXSwiY3JtLWRlcGFydG1lbnRzIjpbIioiXSwicHJvZHVjdG1hbmFnZW1lbnQiOlsiKiJdLCJkbS1jcm9uSm9iU2V0dGluZ3MiOlsiKiJdLCJsb2NhdGlvbnMtbG9jYXRpb25zIjpbIioiXSwiYWNjb3VudHMiOlsiKiJdLCJ0ZWFtcyI6WyIqIl0sImRldmljZXMiOlsiKiJdLCJoZWxwZGVzay1jYXNlcyI6WyIqIl0sImhlbHBkZXNrLXRpY2tldHMiOlsiKiJdLCJjcm0tdGVuYW50cyI6WyIqIl0sImNybS10ZWFtcyI6WyIqIl0sInN1YnNjcmlwdGlvbi1oZWxwZGVzayI6WyIqIl0sInRpY2tldHMiOlsiKiJdLCJzY29wZS1vZi13b3JrIjpbIioiXSwidGVuYW50LXJvbGVzIjpbIioiXSwiaGVscGRlc2siOlsiKiJdLCJjb250cmFjdHMiOlsiKiJdLCJpbS1wcm9kdWN0cyI6WyIqIl0sImNybS10ZW5hbnRwZXJzb25zIjpbIioiXSwic2xhIjpbIioiXSwiZG0tdGFncyI6WyIqIl0sImNybS1yb2xlcyI6WyIqIl0sImhlbHBkZXNrLXNldHRpbmciOlsiKiJdLCJwYXltZW50cyI6WyIqIl0sInRlbmFudC11c2VycyI6WyIqIl0sImFsYXJtcy10cmFpbnMiOlsiKiJdLCJzZXR0aW5ncy10cG1zIjpbIioiXSwicGFja2FnZXMiOlsiKiJdLCJzdWJzY3JpcHRpb25zIjpbIioiXSwiYWxhcm1zLW1hcHBpbmciOlsiKiJdLCJkZXBhcnRtZW50cyI6WyIqIl0sImNybS1ncm91cHMiOlsiKiJdLCJkbS1nYXRld2F5cyI6WyIqIl0sImtub3dsZWRnZWJhc2UiOlsiKiJdLCJjcm0tY3VzdG9tZXJzIjpbIioiXSwiZG0tZGV2aWNlcyI6WyIqIl0sInNldHRpbmdzIjpbIioiXSwic2V0dGluZ3Mtbm90aWZpY2F0aW9uIjpbIioiXSwidGFncyI6WyIqIl0sImxvY2F0aW9ucy1sb2NhdGlvbl90eXBlcyI6WyIqIl0sInByb2R1Y3RtYW5hZ2VtZW50LXByb2R1Y3RzIjpbIioiXSwidGVuYW50LXN5c3RlbUFkbWluIjpbIioiXSwiZG0tYXNzZXRzIjpbIioiXSwiYWxhcm1zLXNldHRpbmdzIjpbIioiXSwidGVuYW50LWNvbXBhbnlEZXRhaWxzIjpbIioiXSwibG9jYXRpb25zLWFkZHJlc3MiOlsiKiJdLCJhbGFybXMtdHlyZXMiOlsiKiJdLCJncm91cHMiOlsiKiJdLCJzZXR0aW5ncy1kZXZpY2UiOlsiKiJdLCJhbGFybXMtZGV2aWNlcyI6WyIqIl0sInByaW9yaXR5IjpbIioiXSwicHJvcG9zYWxzIjpbIioiXSwiZG0tdXNlcnMiOlsiKiJdLCJsb2NhdGlvbnMtd29ya2luZ19ob3VycyI6WyIqIl0sImFsYXJtcy10b3BpY3MiOlsiKiJdLCJhbGFybXMtdXNlcnMiOlsiKiJdfSwicm9sZSI6IlRlc3QgUm9sZSBMZXZlbCAyIiwicm9sZUlkIjoiMDY3Mzg1NzEtZGU0MS00ZDYwLTg0NTQtYWI3Yzg1NjAzMTkyIiwiZGFzaEJvYXJkTmFtZSI6IlRlbmFudCBBZG1pbiIsInNjb3BlIjoiT1BFTklEJTIwUFJPRklMRSUyMEFMTSUyMExPQyUyMERNJTIwVElDS0VUSU5HJTIwQ1JNJTIwUFJPRCUyME5PVElGWSUyMEhFTFBERVNLJTIwSU5WRU5UT1JZJTIwSEQlMjBTVUIiLCJpc3MiOiJhbC1PYXRoU2VydmVyIiwiaWF0IjoxNjc0MzYxOTE1LCJleHAiOjE2NzQ0MDUxMTV9.xROxzNis0R6nmlM3_ZXSAwrtGIurMd1g5QKSkAe5HAw'
    constructor(private http: HttpClient){}

    getRandomData(): Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }

    getSports(location: string):Observable<any>{
      let headers = new HttpHeaders({'X-RapidAPI-Key':environment.WEATHER_API_KEY});
      // headers.set('X-RapidAPI-Key', environment.WEATHER_API_KEY)
      return this.http.get(`https://weatherapi-com.p.rapidapi.com/sports.json?q=${location}`, {headers: headers})
    }

    getAllCustomers(tenantId: string): Observable<any>{
      return this.http.get(`${this.baseURL}/crm/api/v1/${tenantId}/customers`)
    }

    getCustomerById(tenantId: string, customerId: string): Observable<any>{
      return this.http.get(`${this.baseURL}/crm/api/v1/${tenantId}/customer/${customerId}`)
    }

    createCustomer(tenantId:string, body: any): Observable<any>{
      let headers = new HttpHeaders({'Authorization':`Bearer ${this.bearerToken}`})
      return this.http.post(`${this.baseURL}/crm/api/v1/${tenantId}/customers`,body, {headers: headers})
    }

    updateCustomer(tenantId: string, customerId: string, body: any):Observable<any>{
      let headers = new HttpHeaders({'Authorization':`Bearer ${this.bearerToken}`})
      return this.http.put(`${this.baseURL}/crm/api/v1/${tenantId}/customers/${customerId}`,body,{headers})
    }

    deleteCustomer(tenantId: string, customerId: string):Observable<any>{
      let headers = new HttpHeaders({'Authorization':`Bearer ${this.bearerToken}`})
      return this.http.delete(`${this.baseURL}/crm/api/v1/${tenantId}/customers/${customerId}`,{headers})
    }
}