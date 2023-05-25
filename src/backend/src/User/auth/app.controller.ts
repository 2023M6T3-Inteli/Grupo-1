import { AuthServices } from './app.service';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
    constructor(private readonly authServices: AuthServices) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(email: string, password: string) {
        // console.log('email:', email, 'password:', password);
        return await this.authServices.login(email,password);
    }
}
