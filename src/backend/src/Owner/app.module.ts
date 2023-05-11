import { Module } from '@nestjs/common';
import { ApprovalProjectModule } from './approvalProject/app.module';

@Module({
    imports: [ApprovalProjectModule],
    exports: [ApprovalProjectModule],
})
export class OwnerModule {}
