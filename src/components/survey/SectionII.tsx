import { useEffect, useMemo } from 'react';
import { SurveyData, MEDIOS } from '@/lib/surveyData';
import QuestionCard from './QuestionCard';
import CheckboxGroup from './CheckboxGroup';

interface Props {
  data: SurveyData;
  onChange: (data: Partial<SurveyData>) => void;
}

const SectionII = ({ data, onChange }: Props) => {
  // Marcas traídas desde P2 del capítulo I (incluye "Otros" si fue especificado)
  const marcasFromP2 = useMemo(() => {
    const list = [...data.p2_otras_marcas_conocidas];
    if (data.p2_otras_marcas_otro?.trim()) {
      list.push(data.p2_otras_marcas_otro.trim());
    }
    return list;
  }, [data.p2_otras_marcas_conocidas, data.p2_otras_marcas_otro]);

  // Sincronizar P8 con las marcas traídas de P2
  useEffect(() => {
    const same =
      marcasFromP2.length === data.p8_publicidad_marcas.length &&
      marcasFromP2.every((m) => data.p8_publicidad_marcas.includes(m));
    if (!same) {
      onChange({ p8_publicidad_marcas: marcasFromP2 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marcasFromP2]);

  const updateMedios = (marca: string, medios: string[]) => {
    onChange({ p9_medios: { ...data.p9_medios, [marca]: medios } });
  };

  const updateMediosOtro = (marca: string, value: string) => {
    onChange({ p9_medios_otro: { ...data.p9_medios_otro, [marca]: value } });
  };

  return (
    <div className="space-y-4">
      <div className="px-1 mb-2">
        <h2 className="text-lg font-bold text-foreground">II. Recordación Publicitaria</h2>
      </div>

      <QuestionCard number="P8" question="Marcas de tubos eléctricos de las que ha visto, escuchado o leído publicidad recientemente" instruction="Marcas traídas automáticamente de P2 (capítulo I)">
        {marcasFromP2.length === 0 ? (
          <p className="text-sm text-muted-foreground italic px-1">
            No hay marcas seleccionadas en P2. Vuelva al capítulo I para seleccionarlas.
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {marcasFromP2.map((marca) => (
              <span
                key={marca}
                className="px-3 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium border border-primary/20"
              >
                {marca}
              </span>
            ))}
          </div>
        )}
      </QuestionCard>

      {marcasFromP2.length > 0 && (
        <QuestionCard number="P9" question="¿Dónde vio o escuchó la publicidad de cada una de estas marcas?" instruction="Para cada marca, indique los medios">
          <div className="space-y-4">
            {marcasFromP2.map((marca) => (
              <div key={marca} className="border border-border rounded-xl p-3">
                <p className="text-sm font-semibold text-primary mb-2">{marca}</p>
                <CheckboxGroup
                  options={MEDIOS}
                  selected={data.p9_medios[marca] || []}
                  onChange={(medios) => updateMedios(marca, medios)}
                  showOther
                  otherValue={data.p9_medios_otro[marca] || ''}
                  onOtherChange={(val) => updateMediosOtro(marca, val)}
                />
              </div>
            ))}
          </div>
        </QuestionCard>
      )}

      {marcasFromP2.includes('INDECO') && (
        <QuestionCard number="P10" question="¿Qué recuerda del anuncio/publicidad de INDECO?" instruction="RM y espontánea">
          <textarea
            value={data.p10_recuerdo_indeco}
            onChange={(e) => onChange({ p10_recuerdo_indeco: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            rows={3}
            placeholder="Describa lo que recuerda..."
          />
        </QuestionCard>
      )}
    </div>
  );
};

export default SectionII;
