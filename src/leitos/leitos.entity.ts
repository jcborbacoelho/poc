import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('OCUPACAO_SETORES_V')
export class OcupacaoSetores {

  @PrimaryColumn({ type: 'int', name: 'CD_SETOR_ATENDIMENTO' })
  cdSetorAtendimento: number;

  @Column({ type: 'varchar', length: 100, name: 'DS_SETOR_ATENDIMENTO', nullable: true })
  dsSetorAtendimento: string | null;

  @Column({ type: 'int', name: 'CD_ESTABELECIMENTO_BASE', nullable: true })
  cdEstabelecimentoBase: number | null;

  @Column({ type: 'varchar', length: 10, name: 'CD_CLASSIF_SETOR', nullable: true })
  cdClassifSetor: string | null;

  @Column({ type: 'varchar', length: 100, name: 'NM_UNIDADE', nullable: true })
  nmUnidade: string | null;

  @Column({ type: 'varchar', length: 100, name: 'DS_OCUP_HOSP', nullable: true })
  dsOcupHosp: string | null;

  @Column({ type: 'int', name: 'NR_SEQ_APRESENTACAO', nullable: true })
  nrSeqApresentacao: number | null;

  @Column({ type: 'int', name: 'NR_UNIDADES_SETOR', nullable: true })
  nrUnidadesSetor: number | null;

  @Column({ type: 'int', name: 'NR_UNIDADES_TEMPORARIAS', nullable: true })
  nrUnidadesTemporarias: number | null;

  @Column({ type: 'int', name: 'NR_UNIDADES_OCUPADAS', nullable: true })
  nrUnidadesOcupadas: number | null;

  @Column({ type: 'int', name: 'QT_UNIDADE_ACOMP', nullable: true })
  qtUnidadeAcomp: number | null;

  @Column({ type: 'int', name: 'NR_UNIDADES_INTERDITADAS', nullable: true })
  nrUnidadesInterditadas: number | null;

  @Column({ type: 'int', name: 'NR_UNIDADES_LIVRES', nullable: true })
  nrUnidadesLivres: number | null;

  @Column({ type: 'int', name: 'NR_UNIDADES_HIGIENIZACAO', nullable: true })
  nrUnidadesHigienizacao: number | null;

  @Column({ type: 'int', name: 'NR_UNIDADES_RESERVADAS', nullable: true })
  nrUnidadesReservadas: number | null;

  @Column({ type: 'int', name: 'QT_UNIDADES_ISOLAMENTO', nullable: true })
  qtUnidadesIsolamento: number | null;

  @Column({ type: 'int', name: 'QT_UNIDADES_ALTA', nullable: true })
  qtUnidadesAlta: number | null;

  @Column({ type: 'int', name: 'QT_UNIDADE_SAIDA_INTER', nullable: true })
  qtUnidadeSaidaInter: number | null;

  @Column({ type: 'int', name: 'QT_UNIDADE_CHAMAD_MANUT', nullable: true })
  qtUnidadeChamadManut: number | null;

  @Column({ type: 'int', name: 'QT_UNIDADE_MANUTENCAO', nullable: true })
  qtUnidadeManutencao: number | null;

  @Column({ type: 'int', name: 'NR_UNID_TEMP_OCUP', nullable: true })
  nrUnidTempOcup: number | null;

  @Column({ type: 'int', name: 'NR_UNID_TEMP_OCUPADAS', nullable: true })
  nrUnidTempOcupadas: number | null;

  @Column({ type: 'int', name: 'QT_UNID_TEMP_ACOMP', nullable: true })
  qtUnidTempAcomp: number | null;

  @Column({ type: 'int', name: 'NR_UNID_TEMP_INTERDITADAS', nullable: true })
  nrUnidTempInterditadas: number | null;

  @Column({ type: 'int', name: 'NR_UNID_TEMP_LIVRES', nullable: true })
  nrUnidTempLivres: number | null;

  @Column({ type: 'int', name: 'NR_UNID_TEMP_HIGIENIZACAO', nullable: true })
  nrUnidTempHigienizacao: number | null;

  @Column({ type: 'int', name: 'NR_UNID_TEMP_RESERVADAS', nullable: true })
  nrUnidTempReservadas: number | null;

  @Column({ type: 'int', name: 'QT_UNID_TEMP_ISOLAMENTO', nullable: true })
  qtUnidTempIsolamento: number | null;

  @Column({ type: 'int', name: 'QT_UNID_TEMP_SAID_INTERD', nullable: true })
  qtUnidTempSaidInterd: number | null;

  @Column({ type: 'int', name: 'QT_UNID_TEMP_ALTA', nullable: true })
  qtUnidTempAlta: number | null;

  @Column({ type: 'int', name: 'NR_UNIDADES_RESERVA', nullable: true })
  nrUnidadesReserva: number | null;

  @Column({ type: 'char', length: 1, name: 'IE_OCUP_HOSPITALAR', nullable: true })
  ieOcupHospitalar: string | null;

  @Column({ type: 'char', length: 1, name: 'IE_SITUACAO', nullable: true })
  ieSituacao: string | null;

  @Column({ type: 'int', name: 'QT_DISPONIVEIS', nullable: true })
  qtDisponiveis: number | null;

  @Column({ type: 'int', name: 'QT_PAC_ISOLADO', nullable: true })
  qtPacIsolado: number | null;
}
