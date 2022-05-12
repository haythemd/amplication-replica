import { Module } from "@nestjs/common";
import { CertificationModuleBase } from "./base/certification.module.base";
import { CertificationService } from "./certification.service";
import { CertificationController } from "./certification.controller";
import { CertificationResolver } from "./certification.resolver";

@Module({
  imports: [CertificationModuleBase],
  controllers: [CertificationController],
  providers: [CertificationService, CertificationResolver],
  exports: [CertificationService],
})
export class CertificationModule {}
