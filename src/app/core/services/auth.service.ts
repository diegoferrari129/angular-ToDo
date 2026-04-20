import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://localhost:7169/api/auth';
    private tokenKey = 'token';

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string) {
        const body = { email, password };

        this.http.post<{ token: string }>(`${this.apiUrl}/login`, body)
            .subscribe({
                next: (response) => {
                    localStorage.setItem(this.tokenKey, response.token);
                    this.router.navigate(['/tasks']);
                },
                error: (err) => {
                    console.error('Login fallito', err);
                }
            });
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/login']);
    }

    getToken(): string | null {
        const token = localStorage.getItem(this.tokenKey);
        return token;
    }

    isLoggedIn(): boolean {
        return this.getToken() !== null;
    }
}