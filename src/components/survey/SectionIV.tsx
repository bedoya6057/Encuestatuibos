import { SurveyData } from '@/lib/surveyData';
import QuestionCard from './QuestionCard';
import ScaleInput from './ScaleInput';

interface Props {
  data: SurveyData;
  onChange: (data: Partial<SurveyData>) => void;
}

const SectionIV = ({ data, onChange }: Props) => {
  return (
    <div className="space-y-4">
      <div className="px-1 mb-2">
        <h2 className="text-lg font-bold text-foreground">IV. Evaluación de Marca</h2>
        <p className="text-xs text-muted-foreground mt-1">Evaluación final de la marca INDECO</p>
      </div>

      <QuestionCard number="P44" question="Después de ver estas publicidades, ¿qué tan confiable le parece la marca INDECO dentro de la categoría de tubos eléctricos?">
        <ScaleInput
          value={data.p44_confianza_indeco}
          onChange={(val) => onChange({ p44_confianza_indeco: val })}
          minLabel="Nada confiable"
          maxLabel="Muy confiable"
        />
      </QuestionCard>

      {data.p5_marcas_usadas.includes('INDECO') ? (
        <QuestionCard number="P45" question="¿Qué tan satisfecho está con la calidad de la marca INDECO en tubos eléctricos?" instruction="Solo aplica porque marcó INDECO en P5">
          <ScaleInput
            value={data.p45_satisfaccion_indeco}
            onChange={(val) => onChange({ p45_satisfaccion_indeco: val })}
            minLabel="Nada satisfecho"
            maxLabel="Muy satisfecho"
          />
        </QuestionCard>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-4">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">P45 omitida:</span> esta pregunta solo aplica a quienes marcaron INDECO en P5 (marcas usadas).
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionIV;
