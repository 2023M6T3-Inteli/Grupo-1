import { ModelSelect } from './../../models/modelSelect';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServices {
    constructor(
        private readonly modelSelect: ModelSelect,
        private readonly jwtServices: JwtService,
    ) {}
    async login(user) {
        const payload = { sub: user.id };

        return {
            user: user,
            token: this.jwtServices.sign(payload),
        };

    }

    async validate(email: string, password: string) {
        const user = await this.modelSelect.getUserByEmail(email);
        const pass = await this.modelSelect.getPassByEmail(email);
        //console.log(pass)

        if (pass.password != password) {
            console.log(email);
            return null;
        }
        if (!user) {
            throw new Error('Invalid email or password');
        }
        const payload = { email: user.email, sub: user.id };
        const tokens = this.jwtServices.sign(payload);
        console.log(tokens);
        console.log()
        return {
            user: user,
            tokens: tokens,
        };
    }
}
