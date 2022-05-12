import { Module } from "@nestjs/common";
import { NotePaperModuleBase } from "./base/notePaper.module.base";
import { NotePaperService } from "./notePaper.service";
import { NotePaperController } from "./notePaper.controller";
import { NotePaperResolver } from "./notePaper.resolver";

@Module({
  imports: [NotePaperModuleBase],
  controllers: [NotePaperController],
  providers: [NotePaperService, NotePaperResolver],
  exports: [NotePaperService],
})
export class NotePaperModule {}
