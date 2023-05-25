import { ModelSelect } from './../../models/modelSelect';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServices {
    constructor(
        private readonly modelSelect: ModelSelect,
        private readonly jwtServices: JwtService,
    ) {}

    async login(email: string, password: string) {
        // console.log('email:', email, 'password:', password);
        const user = await this.validate(email, password);
        // console.log(user);
        if (!user) {
            throw new Error('Invalid email or password');
        }
        const payload = { email,password };

        const tokens = this.jwtServices.sign(payload);
        console.log(tokens)

        return {
            user: user,
            tokens:tokens
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

            
        return user;
    }
}
