import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { AppPaths } from '../../shared/app.paths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;
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
        const token = this.getToken();
        return token !== null && token.length > 0;
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        this.router.navigate([AppPaths.LOGIN]);
    }

}