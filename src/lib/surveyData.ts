export const MARCAS = [
  'KOPLAST', 'TUBOPLAST', 'EUROTUBO', 'PAVCO',
  'NICOLL', 'MATUSITA (TIGRE)', 'PLASTISUR', 'INDECO'
] as const;

export const MEDIOS = [
  'TV', 'Radio', 'Redes Sociales', 'YouTube',
  'Punto de Venta', 'Vía Pública'
] as const;

export const PUNTOS_VENTA = [
  'Ferreterías de barrio',
  'Ferreterías de cadena',
  'Centros ferreteros (Malvinas, Tomas Marsano)',
  'Tiendas Retail (Promart, Sodimac)'
] as const;

export const MENSAJES_ANUNCIO = [
  'Nuevo producto de tubos eléctricos',
  'Mayor resistencia',
  'Innovación y tecnología',
  'Mayor calidad y durabilidad',
  'Tubos de PVC'
] as const;

export const ROTACIONES = [
  ['AQ', 'AK', 'AL'],
  ['AK', 'AL', 'AQ'],
  ['AL', 'AQ', 'AK'],
] as const;

export const PROFESIONES = [
  'Electricista',
  'Técnico electricista',
  'Ingeniero eléctrico',
  'Contratista',
  'Maestro de obra',
  'Otro'
] as const;

export const MEDIOS_MOVILIZACION = [
  'Carro propio',
  'Transporte público',
  'Moto',
  'Taxi',
  'Otros'
] as const;

export const ULTIMA_COMPRA = [
  'Ayer/Hoy',
  'Hace una semana',
  'Hace 15 días',
  'Hace un mes',
  'Hace dos meses',
  'Hace tres meses',
  'Más de tres meses'
] as const;

export const FRECUENCIA_USO = [
  'Frecuencia alta (semanal o menor)',
  'Frecuencia media (mensual)',
  'Frecuencia baja'
] as const;

export type SurveyData = {
  // Section A
  p1_edad: number | null;
  p2_genero: string;
  p3_profesion: string;
  p3_profesion_otro: string;
  p4_anos_profesion: string;
  p5_proyecto_activo: string;
  p6_medio_movilizacion: string;
  p7_usa_tubos_electricos: string;
  p8_ultima_compra: string;
  p9_frecuencia_uso: string;

  // Section I
  p1_marcas_conocidas_espontanea: string[];
  p2_otras_marcas_conocidas: string[];
  p2_otras_marcas_otro: string;
  p3_marcas_publicidad_vista: string[];
  p3_marcas_publicidad_otro: string;
  p4_marcas_conocidas_lista: string[];
  p4_marcas_conocidas_otro: string;
  p5_marcas_usadas: string[];
  p5_marcas_usadas_otro: string;
  p6_marca_preferida: string;
  p6_marca_preferida_otro: string;
  p1_otras_especificar: string;
  p7_punto_venta: string[];
  p7_punto_venta_otro: string;

  // Section II
  p8_publicidad_marcas: string[];
  p9_medios: Record<string, string[]>;
  p9_medios_otro: Record<string, string>;
  p10_recuerdo_indeco: string;

  // Section III - per ad
  rotacion_orden: string;
  anuncios: Array<{
    recuerda: string;
    marca: string;
    marca_otra: string;
    donde_vio: string[];
    donde_vio_otro: string;
    mensaje: string[];
    mensaje_otro: string;
    atractivo: number | null;
    relevancia: number | null;
    calidad: number | null;
    intencion_compra: number | null;
    diferenciacion: number | null;
    visibilidad: number | null;
    medio_sugerido: string[];
    medio_sugerido_otro: string;
  }>;

  // Section IV
  p44_confianza_indeco: number | null;
  p45_satisfaccion_indeco: number | null;
};

export const initialSurveyData: SurveyData = {
  p1_edad: null,
  p2_genero: '',
  p3_profesion: '',
  p3_profesion_otro: '',
  p4_anos_profesion: '',
  p5_proyecto_activo: '',
  p6_medio_movilizacion: '',
  p7_usa_tubos_electricos: '',
  p8_ultima_compra: '',
  p9_frecuencia_uso: '',
  p1_marcas_conocidas_espontanea: [],
  p2_otras_marcas_conocidas: [],
  p2_otras_marcas_otro: '',
  p3_marcas_publicidad_vista: [],
  p3_marcas_publicidad_otro: '',
  p4_marcas_conocidas_lista: [],
  p4_marcas_conocidas_otro: '',
  p5_marcas_usadas: [],
  p5_marcas_usadas_otro: '',
  p6_marca_preferida: '',
  p6_marca_preferida_otro: '',
  p1_otras_especificar: '',
  p7_punto_venta: [],
  p7_punto_venta_otro: '',
  p8_publicidad_marcas: [],
  p9_medios: {},
  p9_medios_otro: {},
  p10_recuerdo_indeco: '',
  rotacion_orden: '',
  anuncios: [
    { recuerda: '', marca: '', marca_otra: '', donde_vio: [], donde_vio_otro: '', mensaje: [], mensaje_otro: '', atractivo: null, relevancia: null, calidad: null, intencion_compra: null, diferenciacion: null, visibilidad: null, medio_sugerido: [], medio_sugerido_otro: '' },
    { recuerda: '', marca: '', marca_otra: '', donde_vio: [], donde_vio_otro: '', mensaje: [], mensaje_otro: '', atractivo: null, relevancia: null, calidad: null, intencion_compra: null, diferenciacion: null, visibilidad: null, medio_sugerido: [], medio_sugerido_otro: '' },
    { recuerda: '', marca: '', marca_otra: '', donde_vio: [], donde_vio_otro: '', mensaje: [], mensaje_otro: '', atractivo: null, relevancia: null, calidad: null, intencion_compra: null, diferenciacion: null, visibilidad: null, medio_sugerido: [], medio_sugerido_otro: '' },
  ],
  p44_confianza_indeco: null,
  p45_satisfaccion_indeco: null,
};
