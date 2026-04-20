import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://localhost:7169/api/auth';
    private tokenKey = 'token';

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string): Observable<{ token: string }> {
        const body = { email, password };
        return this.http.post<{ token: string }>(`${this.apiUrl}/login`, body);
    }

    saveToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        return this.getToken() !== null;
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/login']);
    }


}