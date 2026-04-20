import { SurveyData, MARCAS, PUNTOS_VENTA } from '@/lib/surveyData';
import QuestionCard from './QuestionCard';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';

interface Props {
  data: SurveyData;
  onChange: (data: Partial<SurveyData>) => void;
}

const SectionI = ({ data, onChange }: Props) => {
  return (
    <div className="space-y-4">
      <div className="px-1 mb-2">
        <h2 className="text-lg font-bold text-foreground">I. Recordación y Uso de Marcas</h2>
        <p className="text-xs text-muted-foreground mt-1">Marcas de tubos eléctricos</p>
      </div>

      <QuestionCard number="P1" question="¿Qué marcas de tubos eléctricos conoce?" instruction="Espontánea - Seleccione todas las que mencione">
        <CheckboxGroup
          options={MARCAS}
          selected={data.p1_marcas_conocidas_espontanea}
          onChange={(val) => onChange({ p1_marcas_conocidas_espontanea: val })}
          showOther
          otherValue={data.p1_otras_especificar}
          onOtherChange={(val) => onChange({ p1_otras_especificar: val })}
        />
      </QuestionCard>

      <QuestionCard number="P2" question="¿Alguna otra marca que conozca?" instruction="RM y espontánea">
        <CheckboxGroup
          options={MARCAS}
          selected={data.p2_otras_marcas_conocidas}
          onChange={(val) => onChange({ p2_otras_marcas_conocidas: val })}
          showOther
          otherValue={data.p2_otras_marcas_otro}
          onOtherChange={(val) => onChange({ p2_otras_marcas_otro: val })}
        />
      </QuestionCard>

      <QuestionCard number="P3" question="¿De qué marcas de tubos eléctricos recuerda haber visto publicidad recientemente?" instruction="RM y espontánea">
        <CheckboxGroup
          options={MARCAS}
          selected={data.p3_marcas_publicidad_vista}
          onChange={(val) => onChange({ p3_marcas_publicidad_vista: val })}
          showOther
          otherValue={data.p3_marcas_publicidad_otro}
          onOtherChange={(val) => onChange({ p3_marcas_publicidad_otro: val })}
        />
      </QuestionCard>

      <QuestionCard number="P4" question="De la siguiente lista de marcas, ¿cuáles conoce?" instruction="Leer marcas">
        <CheckboxGroup
          options={MARCAS}
          selected={data.p4_marcas_conocidas_lista}
          onChange={(val) => onChange({ p4_marcas_conocidas_lista: val })}
          showOther
          otherValue={data.p4_marcas_conocidas_otro}
          onOtherChange={(val) => onChange({ p4_marcas_conocidas_otro: val })}
        />
      </QuestionCard>

      <QuestionCard number="P5" question="¿Qué marcas de tubos eléctricos ha usado alguna vez?" instruction="Leer marcas mencionadas">
        <CheckboxGroup
          options={MARCAS}
          selected={data.p5_marcas_usadas}
          onChange={(val) => onChange({ p5_marcas_usadas: val })}
          showOther
          otherValue={data.p5_marcas_usadas_otro}
          onOtherChange={(val) => onChange({ p5_marcas_usadas_otro: val })}
        />
      </QuestionCard>

      <QuestionCard number="P6" question="¿Qué marca es la que usted prefiere usar?" instruction="Respuesta única">
        <RadioGroup
          options={MARCAS}
          value={data.p6_marca_preferida}
          onChange={(val) => onChange({ p6_marca_preferida: val })}
          showOther
          otherValue={data.p6_marca_preferida_otro}
          onOtherChange={(val) => onChange({ p6_marca_preferida: 'Otro', p6_marca_preferida_otro: val })}
        />
      </QuestionCard>

      <QuestionCard number="P7" question="¿En qué punto de venta suele comprar los tubos eléctricos?">
        <CheckboxGroup
          options={PUNTOS_VENTA}
          selected={data.p7_punto_venta}
          onChange={(val) => onChange({ p7_punto_venta: val })}
          showOther
          otherValue={data.p7_punto_venta_otro}
          onOtherChange={(val) => onChange({ p7_punto_venta_otro: val })}
        />
      </QuestionCard>
    </div>
  );
};

export default SectionI;
