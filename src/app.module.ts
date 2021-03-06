import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { JogadoresService } from './jogadores/jogadores.service';

@Module({
  imports: [JogadoresModule],
  providers: [JogadoresService],
})
export class AppModule {}
