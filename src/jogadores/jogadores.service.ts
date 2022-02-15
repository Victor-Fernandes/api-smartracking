import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criarJogador.dto';
import { Jogador } from './interface/jogador.interface';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);

  private jogadores: Jogador[] = [];

  async CriarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    await this.criar(criarJogadorDto);
  }

  private criar(criarJogadorDTO: CriarJogadorDto): void {
    const { nome, email, telefoneCelular } = criarJogadorDTO;

    const jogador: Jogador = {
      _id: uuidV4(),
      nome,
      email,
      telefoneCelular,
      ranking: 'A',
      posicaoRanking: 69,
      urlFotoJogador: 'linkDaImage',
    };

    this.logger.log(`criarJogadorDTO: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador);
  }
}
