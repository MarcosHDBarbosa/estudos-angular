export type Status =
  | 'Pendente'
  | 'Cursando'
  | 'Concluido';

export interface Topico{
  id: string;
  titulo: string;
  descricao: string;
  status: Status;
  horasEstimadas: number;
  inativa?: boolean
}