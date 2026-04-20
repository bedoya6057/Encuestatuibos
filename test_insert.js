import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

// Leer .env manual
const envFile = fs.readFileSync('.env', 'utf-8');
const envVars = {};
envFile.split('\n').forEach(line => {
  const [key, ...values] = line.split('=');
  if (key && values.length > 0) {
    envVars[key.trim()] = values.join('=').trim().replace(/^"|"$/g, '');
  }
});

const url = envVars.VITE_SUPABASE_URL;
const key = envVars.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(url, key);

async function testInsert() {
  const row = {
    p1_edad: 30,
    p2_genero: "Masculino",
    p3_profesion: "Electricista",
    p4_anos_profesion: "5 a 10 años",
    p5_proyecto_activo: "Sí",
    p6_medio_movilizacion: "Transporte público",
    p7_usa_tubos_electricos: "Sí",
    p8_ultima_compra: "Hace una semana",
    p9_frecuencia_uso: "Frecuencia media (mensual)",
    p1_marcas_conocidas_espontanea: ["INDECO"],
    p2_otras_marcas_conocidas: [],
    p3_marcas_publicidad_vista: ["INDECO"],
    p4_marcas_conocidas_lista: ["INDECO"],
    p5_marcas_usadas: ["INDECO"],
    p6_marca_preferida: "INDECO",
    p1_otras_especificar: "",
    p7_punto_venta: ["Ferreterías de barrio"],
    p7_punto_venta_otro: "",
    p8_publicidad_marcas: ["INDECO"],
    p9_medios_koplast: [],
    p9_medios_tuboplast: [],
    p9_medios_eurotubo: [],
    p9_medios_pavco: [],
    p9_medios_nicoll: [],
    p9_medios_matusita: [],
    p9_medios_plastisur: [],
    p9_medios_indeco: ["TV"],
    p10_recuerdo_indeco: "Sí",
    rotacion_orden: "AQ AK AL",
    p44_confianza_indeco: 5,
    p45_satisfaccion_indeco: 5,
    cuota_edad_cod: "2",
    p2_genero_cod: "1",
    p3_profesion_cod: "1",
    p4_anos_profesion_cod: "2",
    p5_proyecto_activo_cod: "1",
    p6_medio_movilizacion_cod: "2",
    p7_usa_tubos_electricos_cod: "1",
    p8_ultima_compra_cod: "2",
    p9_frecuencia_uso_cod: "2",
    p1_marcas_conocidas_espontanea_cod: ["8"],
    p2_otras_marcas_conocidas_cod: [],
    p3_marcas_publicidad_vista_cod: ["8"],
    p4_marcas_conocidas_lista_cod: ["8"],
    p5_marcas_usadas_cod: ["8"],
    p6_marca_preferida_cod: "8",
    p7_punto_venta_cod: ["1"],
    p8_publicidad_marcas_cod: ["8"],
    p9_medios_koplast_cod: [],
    p9_medios_tuboplast_cod: [],
    p9_medios_eurotubo_cod: [],
    p9_medios_pavco_cod: [],
    p9_medios_nicoll_cod: [],
    p9_medios_matusita_cod: [],
    p9_medios_plastisur_cod: [],
    p9_medios_indeco_cod: ["1"],
    p10_recuerdo_indeco_cod: "1",
    
    a1_recuerda: "No", a1_marca: "", a1_marca_otra: "", a1_donde_vio: [], a1_mensaje: [], a1_mensaje_otro: "",
    a1_atractivo: null, a1_relevancia: null, a1_calidad: null, a1_intencion_compra: null, a1_diferenciacion: null, a1_visibilidad: null, a1_medio_sugerido: [],
    a1_recuerda_cod: "2", a1_marca_cod: null, a1_donde_vio_cod: [], a1_mensaje_cod: [], a1_medio_sugerido_cod: [],
    
    a2_recuerda: "No", a2_marca: "", a2_marca_otra: "", a2_donde_vio: [], a2_mensaje: [], a2_mensaje_otro: "",
    a2_atractivo: null, a2_relevancia: null, a2_calidad: null, a2_intencion_compra: null, a2_diferenciacion: null, a2_visibilidad: null, a2_medio_sugerido: [],
    a2_recuerda_cod: "2", a2_marca_cod: null, a2_donde_vio_cod: [], a2_mensaje_cod: [], a2_medio_sugerido_cod: [],

    a3_recuerda: "No", a3_marca: "", a3_marca_otra: "", a3_donde_vio: [], a3_mensaje: [], a3_mensaje_otro: "",
    a3_atractivo: null, a3_relevancia: null, a3_calidad: null, a3_intencion_compra: null, a3_diferenciacion: null, a3_visibilidad: null, a3_medio_sugerido: [],
    a3_recuerda_cod: "2", a3_marca_cod: null, a3_donde_vio_cod: [], a3_mensaje_cod: [], a3_medio_sugerido_cod: []
  };

  const { data, error } = await supabase.from('survey_responses').insert(row);
  if (error) {
    console.error("Insert error:", error);
  } else {
    console.log("Insert success!");
  }
}

testInsert();
