import { Module } from '@nestjs/common';

import { USE_CASES } from './use-cases';
import { LayoutsController } from './layouts.controller';

import { AuthModule } from '../auth/auth.module';
import { MessageTemplateModule } from '../message-template/message-template.module';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule, AuthModule, MessageTemplateModule],
  providers: [...USE_CASES],
  exports: [...USE_CASES],
  controllers: [LayoutsController],
})
export class LayoutsModule {}
