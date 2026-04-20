import { SurveyData, PROFESIONES, MEDIOS_MOVILIZACION, ULTIMA_COMPRA, FRECUENCIA_USO } from '@/lib/surveyData';
import QuestionCard from './QuestionCard';
import RadioGroup from './RadioGroup';

interface Props {
  data: SurveyData;
  onChange: (data: Partial<SurveyData>) => void;
}

const SectionA = ({ data, onChange }: Props) => {
  return (
    <div className="space-y-4">
      <div className="px-1 mb-2">
        <h2 className="text-lg font-bold text-foreground">Datos del Entrevistado</h2>
        <p className="text-xs text-muted-foreground mt-1">Complete los datos de filtro del entrevistado</p>
      </div>

      <QuestionCard number="P1" question="¿Cuál es su edad exacta?">
        <input
          type="number"
          inputMode="numeric"
          value={data.p1_edad || ''}
          onChange={(e) => onChange({ p1_edad: e.target.value ? parseInt(e.target.value) : null })}
          className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-base focus:outline-none focus:border-primary transition-colors"
          placeholder="Ingrese su edad"
          min={18}
          max={99}
        />
        {data.p1_edad !== null && data.p1_edad >= 25 && data.p1_edad <= 50 && (
          <p className="text-xs font-medium mt-2 text-primary">
            Cuota: {data.p1_edad <= 36 ? '25-36 años (1)' : '37-50 años (2)'}
          </p>
        )}
        {data.p1_edad !== null && (data.p1_edad < 25 || data.p1_edad > 50) && (
          <p className="text-xs text-destructive font-medium mt-2">⚠️ Fuera de cuota (25-50 años). La encuesta termina aquí.</p>
        )}
      </QuestionCard>

      <QuestionCard number="P2" question="Género">
        <RadioGroup
          options={['Femenino', 'Masculino']}
          value={data.p2_genero}
          onChange={(val) => onChange({ p2_genero: val })}
        />
      </QuestionCard>

      <QuestionCard number="P3" question="¿Cuál es su profesión actual y principal?">
        <RadioGroup
          options={PROFESIONES}
          value={data.p3_profesion}
          onChange={(val) => onChange({ p3_profesion: val })}
          showOther
          otherValue={data.p3_profesion_otro}
          onOtherChange={(val) => onChange({ p3_profesion: 'Otro', p3_profesion_otro: val })}
        />
      </QuestionCard>

      <QuestionCard number="P4" question="¿Cuántos años se dedica a esa profesión?">
        <input
          type="text"
          inputMode="numeric"
          value={data.p4_anos_profesion}
          onChange={(e) => onChange({ p4_anos_profesion: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-base focus:outline-none focus:border-primary transition-colors"
          placeholder="Años de experiencia"
        />
      </QuestionCard>

      <QuestionCard number="P5" question="¿Actualmente tiene proyecto activo?">
        <RadioGroup
          options={['Sí', 'No']}
          value={data.p5_proyecto_activo}
          onChange={(val) => onChange({ p5_proyecto_activo: val })}
        />
        {data.p5_proyecto_activo === 'No' && (
          <p className="text-xs text-destructive font-medium mt-2">⚠️ Si no tiene proyecto activo, la encuesta termina aquí.</p>
        )}
      </QuestionCard>

      <QuestionCard number="P6" question="¿Cuál es su medio de movilización para realizar los trabajos?">
        <RadioGroup
          options={MEDIOS_MOVILIZACION}
          value={data.p6_medio_movilizacion}
          onChange={(val) => onChange({ p6_medio_movilizacion: val })}
        />
      </QuestionCard>

      <QuestionCard number="P7" question="¿Usted utiliza tubos eléctricos?">
        <RadioGroup
          options={['Sí', 'No']}
          value={data.p7_usa_tubos_electricos}
          onChange={(val) => onChange({ p7_usa_tubos_electricos: val })}
        />
        {data.p7_usa_tubos_electricos === 'No' && (
          <p className="text-xs text-destructive font-medium mt-2">⚠️ Si no utiliza tubos eléctricos, la encuesta termina aquí.</p>
        )}
      </QuestionCard>

      <QuestionCard number="P8" question="¿Cuándo fue la última vez que compró este producto?">
        <RadioGroup
          options={ULTIMA_COMPRA}
          value={data.p8_ultima_compra}
          onChange={(val) => onChange({ p8_ultima_compra: val })}
        />
        {data.p8_ultima_compra === 'Más de tres meses' && (
          <p className="text-xs text-destructive font-medium mt-2">⚠️ Si la última compra fue hace más de tres meses, la encuesta termina aquí.</p>
        )}
      </QuestionCard>

      <QuestionCard number="P9" question="¿Con qué frecuencia usa tubos en sus proyectos?">
        <RadioGroup
          options={FRECUENCIA_USO}
          value={data.p9_frecuencia_uso}
          onChange={(val) => onChange({ p9_frecuencia_uso: val })}
        />
      </QuestionCard>
    </div>
  );
};

export default SectionA;
