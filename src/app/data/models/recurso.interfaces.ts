export interface IRecursoPost {
  recursoId: string;
  escenaId: string;
  tipoRecurso: string;
  siguienteRecursoId?: string;
}

export interface IRecurso {
  recursoId: string;
  escenaId: string;
  primerRecurso: boolean;
  ultimoRecurso: boolean;
  tipoRecurso: string;
  personajeNombre: string;
  personajeUrl: string;
  backgroundUrl: string;
}

export interface IDecision extends IRecurso {
  decisionMensaje: string;
  opciones?: IDecisionOpcion[];
}

export interface IDecisionOpcionPost {
  opcionMensaje: string;
  siguienteRecursoId?: string;
  recursoDecisionId: string;
}

export interface IDecisionOpcion {
  recursoDecisionOpcionId: string;
  opcionMensaje: string;
  siguienteRecursoId?: string;
  recursoDecisionId: string;
}

export interface IConversacion extends IRecurso {
  mensaje: string;
  siguienteRecursoId?: string;
}

export function instanceOfIConversacion(
  object: MixRecursosType
): object is IConversacion {
  return object.tipoRecurso === RecursosEnum.conversacion;
}

export function instanceOfIDecision(
  object: MixRecursosType
): object is IDecision {
  return object.tipoRecurso === RecursosEnum.decision;
}

export type MixRecursosType = IConversacion | IDecision;

export enum RecursosEnum {
  conversacion = 'recurso_conversacion',
  decision = 'recurso_decision',
}
