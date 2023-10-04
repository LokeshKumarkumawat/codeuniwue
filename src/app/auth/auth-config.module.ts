import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';



@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-bs6p3t70je2ptu7r.us.auth0.com',
            redirectUrl: 'https://651db15f45bdfe3e677dff03--exquisite-haupia-ce85b6.netlify.app/callback',
            clientId: 'ycjEMZMARHBWQ7FfVYei0SLtSdU3F79y',
            scope: 'openid profile offline_access email',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            secureRoutes: ['http://3.84.84.60:8080/'],
            customParamsAuthRequest: {
              audience: 'http://localhost:8080'
            }

        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
