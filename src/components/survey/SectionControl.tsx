import { SurveyData, ZONAS } from '@/lib/surveyData';
import QuestionCard from './QuestionCard';
import RadioGroup from './RadioGroup';

interface Props {
  data: SurveyData;
  onChange: (data: Partial<SurveyData>) => void;
}

const SectionControl = ({ data, onChange }: Props) => {
  return (
    <div className="space-y-4">
      <div className="px-1 mb-2">
        <h2 className="text-lg font-bold text-foreground">Datos de Control</h2>
        <p className="text-xs text-muted-foreground mt-1">Información de contacto y control de la encuesta</p>
      </div>

      <QuestionCard number="C1" question="Código del Encuestador">
        <input
          type="text"
          value={data.codigo_encuestador}
          onChange={(e) => onChange({ codigo_encuestador: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-base focus:outline-none focus:border-primary transition-colors"
          placeholder="Ingrese código"
        />
      </QuestionCard>

      <QuestionCard number="C2" question="Zona">
        <RadioGroup
          options={ZONAS}
          value={data.zona}
          onChange={(val) => onChange({ zona: val })}
        />
      </QuestionCard>

      <QuestionCard number="C3" question="Distrito">
        <input
          type="text"
          value={data.distrito}
          onChange={(e) => onChange({ distrito: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-base focus:outline-none focus:border-primary transition-colors"
          placeholder="Ingrese distrito"
        />
      </QuestionCard>

      <QuestionCard number="C4" question="Nombre del Encuestado">
        <input
          type="text"
          value={data.nombre_encuestado}
          onChange={(e) => onChange({ nombre_encuestado: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-base focus:outline-none focus:border-primary transition-colors"
          placeholder="Ingrese nombre"
        />
      </QuestionCard>

      <QuestionCard number="C5" question="Teléfono">
        <input
          type="tel"
          value={data.telefono}
          onChange={(e) => onChange({ telefono: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-base focus:outline-none focus:border-primary transition-colors"
          placeholder="Ingrese teléfono"
        />
      </QuestionCard>
    </div>
  );
};

export default SectionControl;
