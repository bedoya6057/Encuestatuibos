import { SurveyData, MEDIOS, MENSAJES_ANUNCIO, ROTACIONES } from '@/lib/surveyData';
import QuestionCard from './QuestionCard';
import RadioGroup from './RadioGroup';
import CheckboxGroup from './CheckboxGroup';
import ScaleInput from './ScaleInput';

interface Props {
  data: SurveyData;
  onChange: (data: Partial<SurveyData>) => void;
  adIndex: number;
}

const AD_NAMES = ['Primer', 'Segundo', 'Tercer'] as const;

const SectionIII = ({ data, onChange, adIndex }: Props) => {
  const ad = data.anuncios[adIndex];
  const adLabel = AD_NAMES[adIndex];
  const rotacion = data.rotacion_orden.split(',');
  const adCode = rotacion[adIndex] || `Anuncio ${adIndex + 1}`;

  const updateAd = (field: string, value: unknown) => {
    const newAnuncios = [...data.anuncios];
    newAnuncios[adIndex] = { ...newAnuncios[adIndex], [field]: value };
    onChange({ anuncios: newAnuncios });
  };

  const baseQ = adIndex * 11 + 11;

  return (
    <div className="space-y-4">
      {adIndex === 0 && (
        <QuestionCard number="ROT" question="Selección de rotación de anuncios" instruction="El encuestador escoge la rotación a aplicar (1, 2 o 3)">
          <RadioGroup
            options={ROTACIONES.map((r, i) => `Rotación ${i + 1}: ${r.join(' → ')}`)}
            value={
              data.rotacion_orden
                ? `Rotación ${ROTACIONES.findIndex((r) => r.join(',') === data.rotacion_orden) + 1}: ${data.rotacion_orden.split(',').join(' → ')}`
                : ''
            }
            onChange={(val) => {
              const idx = parseInt(val.match(/Rotación (\d)/)?.[1] || '1') - 1;
              onChange({ rotacion_orden: ROTACIONES[idx].join(',') });
            }}
          />
        </QuestionCard>
      )}

      <div className="px-1 mb-2">
        <h2 className="text-lg font-bold text-foreground">III. Evaluación de Anuncio</h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs font-bold text-primary-foreground bg-primary px-2 py-0.5 rounded-md">{adCode}</span>
          <span className="text-xs text-muted-foreground">{adLabel} anuncio de la rotación</span>
        </div>
      </div>

      <div className="bg-secondary/50 rounded-2xl p-6 text-center border-2 border-dashed border-primary/20">
        <p className="text-sm text-muted-foreground font-medium uppercase">📋 ENCUESTADOR: MOSTRAR MATERIAL SIN LOGO SEGÚN ROTACIÓN ({adCode})</p>
        <p className="text-xs text-muted-foreground mt-1">Muestre el anuncio sin marca al entrevistado para las preguntas de recordación espontánea</p>
      </div>

      <QuestionCard number={`P${baseQ}`} question="¿Recuerda haber visto esta publicidad/anuncio?">
        <RadioGroup options={['Sí', 'No']} value={ad.recuerda} onChange={(val) => updateAd('recuerda', val)} />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 1}`} question="¿De qué marca es el anuncio?">
        <RadioGroup
          options={['INDECO']}
          value={ad.marca}
          onChange={(val) => updateAd('marca', val)}
          showOther
          otherValue={ad.marca_otra}
          onOtherChange={(val) => { updateAd('marca', 'Otro'); updateAd('marca_otra', val); }}
        />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 2}`} question="¿Dónde recuerda haberlo visto?" instruction="Puede seleccionar varios">
        <CheckboxGroup
          options={MEDIOS}
          selected={ad.donde_vio}
          onChange={(val) => updateAd('donde_vio', val)}
          showOther
          otherValue={ad.donde_vio_otro}
          onOtherChange={(val) => updateAd('donde_vio_otro', val)}
        />
      </QuestionCard>

      <div className="bg-primary/5 rounded-2xl p-5 text-center border border-primary/20">
        <p className="text-sm text-primary font-semibold mb-1">Ahora se lo voy a volver a mostrar y quiero que me conteste algunas preguntas</p>
        <p className="text-xs font-bold text-primary uppercase">📋 ENCUESTADOR: MOSTRAR MATERIAL CON LOGO</p>
      </div>

      <QuestionCard number={`P${baseQ + 3}`} question="¿Cuál cree que es el mensaje principal de esta publicidad?" instruction="RM y espontánea">
        <CheckboxGroup
          options={MENSAJES_ANUNCIO}
          selected={ad.mensaje}
          onChange={(val) => updateAd('mensaje', val)}
          showOther
          otherValue={ad.mensaje_otro}
          onOtherChange={(val) => updateAd('mensaje_otro', val)}
        />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 4}`} question="ATRACTIVO DEL ANUNCIO: ¿Qué tan atractivo le pareció el diseño de este anuncio?">
        <ScaleInput value={ad.atractivo} onChange={(val) => updateAd('atractivo', val)} minLabel="Nada atractivo" maxLabel="Muy atractivo" />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 5}`} question="RELEVANCIA: ¿Qué tan relevante considera la información mostrada para su trabajo?">
        <ScaleInput value={ad.relevancia} onChange={(val) => updateAd('relevancia', val)} minLabel="Nada relevante" maxLabel="Muy relevante" />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 6}`} question="CALIDAD: ¿Qué impresión le da el producto mostrado en términos de calidad?">
        <ScaleInput value={ad.calidad} onChange={(val) => updateAd('calidad', val)} minLabel="Muy baja calidad" maxLabel="Muy alta calidad" />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 7}`} question="INTENCIÓN DE COMPRA: ¿Qué tan probable es que compre este producto?">
        <ScaleInput
          value={ad.intencion_compra}
          onChange={(val) => updateAd('intencion_compra', val)}
          minLabel="Nada probable"
          maxLabel="Muy probable"
          extraOption={{ value: 6, label: 'La uso actualmente' }}
        />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 8}`} question="DIFERENCIACIÓN: ¿Cómo percibe esta marca en comparación con la que normalmente usa?">
        <ScaleInput value={ad.diferenciacion} onChange={(val) => updateAd('diferenciacion', val)} minLabel="Mucho peor" maxLabel="Mucho mejor" />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 9}`} question="VISIBILIDAD: Si viera un anuncio como este en la calle, ¿qué tan probable sería que le preste atención?">
        <ScaleInput value={ad.visibilidad} onChange={(val) => updateAd('visibilidad', val)} minLabel="Nada probable" maxLabel="Muy probable" />
      </QuestionCard>

      <QuestionCard number={`P${baseQ + 10}`} question="¿Dónde debería estar un anuncio como este para que usted lo vea?" instruction="Puede seleccionar varios">
        <CheckboxGroup
          options={MEDIOS}
          selected={ad.medio_sugerido}
          onChange={(val) => updateAd('medio_sugerido', val)}
          showOther
          otherValue={ad.medio_sugerido_otro}
          onOtherChange={(val) => updateAd('medio_sugerido_otro', val)}
        />
      </QuestionCard>
    </div>
  );
};

export default SectionIII;
