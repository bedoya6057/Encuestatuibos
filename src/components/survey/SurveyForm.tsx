import { useState } from 'react';
import { SurveyData, initialSurveyData } from '@/lib/surveyData';
import {
  cuotaEdadCod, GENERO_COD, anosProfesionCod, SI_NO_COD,
  ULTIMA_COMPRA_COD, FRECUENCIA_COD,
  marcasToCodArray, marcaCodOrText, puntoVentaToCodArray,
  mediosToCodArray, mensajesToCodArray, marcaAnuncioCod, recuerdoCod,
  profesionCod, movilizacionCod, ZONA_COD,
} from '@/lib/surveyCodes';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import ProgressBar from './ProgressBar';
import SectionA from './SectionA';
import SectionI from './SectionI';
import SectionII from './SectionII';
import SectionIII from './SectionIII';
import SectionIV from './SectionIV';
import SectionControl from './SectionControl';

const SECTION_NAMES = [
  'Datos del Entrevistado',
  'Recordación de Marcas',
  'Recordación Publicitaria',
  'Evaluación Anuncio 1',
  'Evaluación Anuncio 2',
  'Evaluación Anuncio 3',
  'Evaluación de Marca',
  'Datos de Control',
];

const TOTAL_STEPS = 8;

const SurveyForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<SurveyData>(initialSurveyData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Rotación es seleccionada manualmente por el encuestador en SectionA


  const update = (partial: Partial<SurveyData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  };

  const canProceed = (): boolean => {
    if (step === 0) {
      if (data.p1_edad !== null && (data.p1_edad < 25 || data.p1_edad > 50)) return false;
      if (data.p5_proyecto_activo === 'No') return false;
      if (data.p7_usa_tubos_electricos === 'No') return false;
      if (data.p8_ultima_compra === 'Más de tres meses') return false;
    }
    if (step === 3 && !data.rotacion_orden) return false;
    return true;
  };

  const next = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prev = () => {
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      const row: Record<string, unknown> = {
        p1_edad: data.p1_edad,
        p2_genero: data.p2_genero,
        p3_profesion: data.p3_profesion === 'Otro' ? data.p3_profesion_otro : data.p3_profesion,
        p4_anos_profesion: data.p4_anos_profesion,
        p5_proyecto_activo: data.p5_proyecto_activo,
        p6_medio_movilizacion: data.p6_medio_movilizacion,
        p7_usa_tubos_electricos: data.p7_usa_tubos_electricos,
        p8_ultima_compra: data.p8_ultima_compra,
        p9_frecuencia_uso: data.p9_frecuencia_uso,
        p1_marcas_conocidas_espontanea: data.p1_marcas_conocidas_espontanea,
        p2_otras_marcas_conocidas: data.p2_otras_marcas_conocidas,
        p3_marcas_publicidad_vista: data.p3_marcas_publicidad_vista,
        p4_marcas_conocidas_lista: data.p4_marcas_conocidas_lista,
        p5_marcas_usadas: data.p5_marcas_usadas,
        p6_marca_preferida: data.p6_marca_preferida,
        p1_otras_especificar: data.p1_otras_especificar,
        p7_punto_venta: data.p7_punto_venta,
        p7_punto_venta_otro: data.p7_punto_venta_otro,
        p8_publicidad_marcas: data.p8_publicidad_marcas,
        p9_medios_koplast: data.p9_medios['KOPLAST'] || [],
        p9_medios_tuboplast: data.p9_medios['TUBOPLAST'] || [],
        p9_medios_eurotubo: data.p9_medios['EUROTUBO'] || [],
        p9_medios_pavco: data.p9_medios['PAVCO'] || [],
        p9_medios_nicoll: data.p9_medios['NICOLL'] || [],
        p9_medios_matusita: data.p9_medios['MATUSITA (TIGRE)'] || [],
        p9_medios_plastisur: data.p9_medios['PLASTISUR'] || [],
        p9_medios_indeco: data.p9_medios['INDECO'] || [],
        p10_recuerdo_indeco: data.p10_recuerdo_indeco,
        rotacion_orden: data.rotacion_orden,
        p44_confianza_indeco: data.p44_confianza_indeco,
        p45_satisfaccion_indeco: data.p45_satisfaccion_indeco,
        codigo_encuestador: data.codigo_encuestador,
        zona: data.zona,
        distrito: data.distrito,
        nombre_encuestado: data.nombre_encuestado,
        telefono: data.telefono,

        // ===== CÓDIGOS (texto: nombre escrito si es "Otro", número si es opción del catálogo) =====
        cuota_edad_cod: cuotaEdadCod(data.p1_edad)?.toString() ?? null,
        p2_genero_cod: GENERO_COD[data.p2_genero] !== undefined ? String(GENERO_COD[data.p2_genero]) : null,
        p3_profesion_cod: profesionCod(data.p3_profesion, data.p3_profesion_otro),
        p4_anos_profesion_cod: anosProfesionCod(data.p4_anos_profesion),
        p5_proyecto_activo_cod: SI_NO_COD[data.p5_proyecto_activo] !== undefined ? String(SI_NO_COD[data.p5_proyecto_activo]) : null,
        p6_medio_movilizacion_cod: movilizacionCod(data.p6_medio_movilizacion),
        p7_usa_tubos_electricos_cod: SI_NO_COD[data.p7_usa_tubos_electricos] !== undefined ? String(SI_NO_COD[data.p7_usa_tubos_electricos]) : null,
        p8_ultima_compra_cod: ULTIMA_COMPRA_COD[data.p8_ultima_compra] !== undefined ? String(ULTIMA_COMPRA_COD[data.p8_ultima_compra]) : null,
        p9_frecuencia_uso_cod: FRECUENCIA_COD[data.p9_frecuencia_uso] !== undefined ? String(FRECUENCIA_COD[data.p9_frecuencia_uso]) : null,

        p1_marcas_conocidas_espontanea_cod: marcasToCodArray([...data.p1_marcas_conocidas_espontanea, ...(data.p1_otras_especificar?.trim() ? [data.p1_otras_especificar.trim()] : [])]),
        p2_otras_marcas_conocidas_cod: marcasToCodArray([...data.p2_otras_marcas_conocidas, ...(data.p2_otras_marcas_otro?.trim() ? [data.p2_otras_marcas_otro.trim()] : [])]),
        p3_marcas_publicidad_vista_cod: marcasToCodArray([...data.p3_marcas_publicidad_vista, ...(data.p3_marcas_publicidad_otro?.trim() ? [data.p3_marcas_publicidad_otro.trim()] : [])]),
        p4_marcas_conocidas_lista_cod: marcasToCodArray([...data.p4_marcas_conocidas_lista, ...(data.p4_marcas_conocidas_otro?.trim() ? [data.p4_marcas_conocidas_otro.trim()] : [])]),
        p5_marcas_usadas_cod: marcasToCodArray([...data.p5_marcas_usadas, ...(data.p5_marcas_usadas_otro?.trim() ? [data.p5_marcas_usadas_otro.trim()] : [])]),
        p6_marca_preferida_cod: marcaCodOrText(data.p6_marca_preferida, data.p6_marca_preferida_otro),
        p7_punto_venta_cod: puntoVentaToCodArray(data.p7_punto_venta, data.p7_punto_venta_otro),

        p8_publicidad_marcas_cod: marcasToCodArray(data.p8_publicidad_marcas),
        p9_medios_koplast_cod: mediosToCodArray(data.p9_medios['KOPLAST'] || []),
        p9_medios_tuboplast_cod: mediosToCodArray(data.p9_medios['TUBOPLAST'] || []),
        p9_medios_eurotubo_cod: mediosToCodArray(data.p9_medios['EUROTUBO'] || []),
        p9_medios_pavco_cod: mediosToCodArray(data.p9_medios['PAVCO'] || []),
        p9_medios_nicoll_cod: mediosToCodArray(data.p9_medios['NICOLL'] || []),
        p9_medios_matusita_cod: mediosToCodArray(data.p9_medios['MATUSITA (TIGRE)'] || []),
        p9_medios_plastisur_cod: mediosToCodArray(data.p9_medios['PLASTISUR'] || []),
        p9_medios_indeco_cod: mediosToCodArray(data.p9_medios['INDECO'] || []),
        p10_recuerdo_indeco_cod: recuerdoCod(data.p10_recuerdo_indeco),
        zona_cod: ZONA_COD[data.zona] !== undefined ? String(ZONA_COD[data.zona]) : null,
      };

      // Flatten ad data
      data.anuncios.forEach((ad, i) => {
        const prefix = `a${i + 1}_`;
        row[`${prefix}recuerda`] = ad.recuerda;
        row[`${prefix}marca`] = ad.marca === 'Otro' ? ad.marca_otra : ad.marca;
        row[`${prefix}marca_otra`] = ad.marca_otra;
        row[`${prefix}donde_vio`] = ad.donde_vio;
        row[`${prefix}mensaje`] = ad.mensaje;
        row[`${prefix}mensaje_otro`] = ad.mensaje_otro;
        row[`${prefix}atractivo`] = ad.atractivo;
        row[`${prefix}relevancia`] = ad.relevancia;
        row[`${prefix}calidad`] = ad.calidad;
        row[`${prefix}intencion_compra`] = ad.intencion_compra;
        row[`${prefix}diferenciacion`] = ad.diferenciacion;
        row[`${prefix}visibilidad`] = ad.visibilidad;
        row[`${prefix}medio_sugerido`] = ad.medio_sugerido;

        // Códigos del anuncio (texto si fue "Otro")
        row[`${prefix}recuerda_cod`] = recuerdoCod(ad.recuerda);
        row[`${prefix}marca_cod`] = marcaAnuncioCod(ad.marca, ad.marca_otra);
        row[`${prefix}donde_vio_cod`] = mediosToCodArray(ad.donde_vio, ad.donde_vio_otro);
        row[`${prefix}mensaje_cod`] = mensajesToCodArray(ad.mensaje, ad.mensaje_otro);
        row[`${prefix}medio_sugerido_cod`] = mediosToCodArray(ad.medio_sugerido, ad.medio_sugerido_otro);
      });

      const { error } = await supabase.from('survey_responses').insert(row as never);
      if (error) throw error;

      setSubmitted(true);
      toast({ title: '¡Encuesta enviada!', description: 'Gracias por su participación.' });
    } catch (err: any) {
      console.error(err);
      toast({ title: 'Error', description: `No se pudo enviar la encuesta: ${err.message || JSON.stringify(err)}`, variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-foreground">¡Gracias!</h2>
          <p className="text-sm text-muted-foreground">Su respuesta ha sido registrada exitosamente.</p>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setData(initialSurveyData); }}
            className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm"
          >
            Nueva encuesta
          </button>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 0: return <SectionA data={data} onChange={update} />;
      case 1: return <SectionI data={data} onChange={update} />;
      case 2: return <SectionII data={data} onChange={update} />;
      case 3: return <SectionIII data={data} onChange={update} adIndex={0} />;
      case 4: return <SectionIII data={data} onChange={update} adIndex={1} />;
      case 5: return <SectionIII data={data} onChange={update} adIndex={2} />;
      case 6: return <SectionIV data={data} onChange={update} />;
      case 7: return <SectionControl data={data} onChange={update} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar currentStep={step + 1} totalSteps={TOTAL_STEPS} sectionName={SECTION_NAMES[step]} />

      <div className="max-w-lg mx-auto px-4 py-6 pb-28">
        {renderStep()}
      </div>

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 safe-bottom">
        <div className="max-w-lg mx-auto flex gap-3">
          {step > 0 && (
            <button
              onClick={prev}
              className="flex-1 py-3 rounded-xl border-2 border-border text-foreground font-medium text-sm transition-colors hover:bg-secondary"
            >
              ← Anterior
            </button>
          )}
          {step < TOTAL_STEPS - 1 ? (
            <button
              onClick={next}
              disabled={!canProceed()}
              className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={submitting}
              className="flex-1 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm transition-all disabled:opacity-50"
            >
              {submitting ? 'Enviando...' : '✓ Enviar encuesta'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
