// Mapeo de etiquetas (labels) a códigos. Si la respuesta es "Otro",
// se devuelve el TEXTO escrito por el usuario en lugar de un código numérico.

import { MARCAS, MEDIOS, PUNTOS_VENTA, MENSAJES_ANUNCIO, PROFESIONES, MEDIOS_MOVILIZACION, ULTIMA_COMPRA, FRECUENCIA_USO, ZONAS } from './surveyData';

// --- Sección A ---
export const GENERO_COD: Record<string, number> = {
  'Femenino': 1,
  'Masculino': 2,
};

export const PROFESION_COD: Record<string, number> = Object.fromEntries(
  PROFESIONES.map((p, i) => [p, i + 1])
);

export const anosProfesionCod = (val: string): string | null => {
  if (!val) return null;
  return val;
};

export const SI_NO_COD: Record<string, number> = {
  'Sí': 1, 'Si': 1, 'SI': 1,
  'No': 2, 'NO': 2,
};

export const MOVILIZACION_COD: Record<string, number> = Object.fromEntries(
  MEDIOS_MOVILIZACION.map((m, i) => [m, i + 1])
);

export const ULTIMA_COMPRA_COD: Record<string, number> = Object.fromEntries(
  ULTIMA_COMPRA.map((u, i) => [u, i + 1])
);

export const FRECUENCIA_COD: Record<string, number> = Object.fromEntries(
  FRECUENCIA_USO.map((f, i) => [f, i + 1])
);

export const cuotaEdadCod = (edad: number | null): number | null => {
  if (edad === null) return null;
  if (edad >= 25 && edad <= 36) return 1;
  if (edad >= 37 && edad <= 50) return 2;
  return null;
};

// --- Marcas ---
export const MARCA_COD: Record<string, number> = Object.fromEntries(
  MARCAS.map((m, i) => [m, i + 1])
);

// Devuelve código como string. Si la marca no está en el catálogo, devuelve el texto tal cual (caso "Otro").
export const marcasToCodArray = (arr: string[]): string[] =>
  arr.map((m) => (MARCA_COD[m] !== undefined ? String(MARCA_COD[m]) : m));

// Para campo único de marca preferida (P6) — si es "Otro", recibe el texto especificado
export const marcaCodOrText = (val: string, otroText?: string): string | null => {
  if (!val) return null;
  if (val === 'Otro' || val === 'Otros') return otroText?.trim() || 'Otro';
  return MARCA_COD[val] !== undefined ? String(MARCA_COD[val]) : val;
};

// --- Punto de venta ---
export const PUNTO_VENTA_COD: Record<string, number> = Object.fromEntries(
  PUNTOS_VENTA.map((p, i) => [p, i + 1])
);

export const puntoVentaToCodArray = (arr: string[], otroText?: string): string[] =>
  arr.map((p) => {
    if (PUNTO_VENTA_COD[p] !== undefined) return String(PUNTO_VENTA_COD[p]);
    if (p === 'Otro' || p === 'Otros') return otroText?.trim() || 'Otro';
    return p;
  });

// --- Medios ---
export const MEDIO_COD: Record<string, number> = Object.fromEntries(
  MEDIOS.map((m, i) => [m, i + 1])
);

export const mediosToCodArray = (arr: string[], otroText?: string): string[] =>
  arr.map((m) => {
    if (MEDIO_COD[m] !== undefined) return String(MEDIO_COD[m]);
    if (m === 'Otro' || m === 'Otros') return otroText?.trim() || 'Otro';
    return m;
  });

// --- Mensajes ---
export const MENSAJE_COD: Record<string, number> = Object.fromEntries(
  MENSAJES_ANUNCIO.map((m, i) => [m, i + 1])
);

export const mensajesToCodArray = (arr: string[], otroText?: string): string[] =>
  arr.map((m) => {
    if (MENSAJE_COD[m] !== undefined) return String(MENSAJE_COD[m]);
    if (m === 'Otro' || m === 'Otros') return otroText?.trim() || 'Otro';
    return m;
  });

// --- Marca del anuncio (1=INDECO, otro=texto especificado) ---
export const marcaAnuncioCod = (val: string, otraText?: string): string | null => {
  if (!val) return null;
  if (val === 'INDECO') return '1';
  if (val === 'Otro' || val === 'Otros') return otraText?.trim() || 'Otro';
  return val;
};

// --- Recuerdo Sí/No ---
export const recuerdoCod = (val: string): string | null => {
  if (!val) return null;
  const c = SI_NO_COD[val];
  return c !== undefined ? String(c) : val;
};

// Profesión: si es "Otro", devuelve el texto
export const profesionCod = (val: string, otroText?: string): string | null => {
  if (!val) return null;
  if (val === 'Otro' || val === 'Otros') return otroText?.trim() || 'Otro';
  return PROFESION_COD[val] !== undefined ? String(PROFESION_COD[val]) : val;
};

// Movilización: si es "Otros", devuelve el texto
export const movilizacionCod = (val: string): string | null => {
  if (!val) return null;
  if (val === 'Otros' || val === 'Otro') return 'Otro';
  return MOVILIZACION_COD[val] !== undefined ? String(MOVILIZACION_COD[val]) : val;
};

// --- Datos de Control ---
export const ZONA_COD: Record<string, number> = Object.fromEntries(
  ZONAS.map((z, i) => [z, i + 1])
);
