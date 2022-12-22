import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UsuarioService } from '../service/usuario.service';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private usuarioService: UsuarioService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.usuarioService.usuarioLogado;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (user?.token && isApiUrl) {
            request = request.clone({ setHeaders: { Authorization: `Bearer ${user.token}` } });
        }

        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && this.usuarioService.usuarioLogado) {
                this.usuarioService.logout();
            }
            return throwError(() => err);
        }))
    }
}