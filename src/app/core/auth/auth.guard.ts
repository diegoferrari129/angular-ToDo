import { inject } from '@angular/core';

import { Router } from '@angular/router';
import { AppPaths } from '../../shared/app.paths';

import { AuthService } from './auth.service';

export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isLoggedIn()) {
        return true;
    }

    return router.parseUrl(AppPaths.LOGIN);
};