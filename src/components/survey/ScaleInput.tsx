interface ScaleInputProps {
  value: number | null;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  minLabel: string;
  maxLabel: string;
  extraOption?: { value: number; label: string };
}

const ScaleInput = ({ value, onChange, min = 1, max = 5, minLabel, maxLabel, extraOption }: ScaleInputProps) => {
  const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs text-muted-foreground px-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        {options.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`w-12 h-12 rounded-xl text-lg font-semibold transition-all duration-200 ${
              value === n
                ? 'bg-primary text-primary-foreground shadow-md scale-110'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
            }`}
          >
            {n}
          </button>
        ))}
        {extraOption && (
          <button
            key={extraOption.value}
            type="button"
            onClick={() => onChange(extraOption.value)}
            className={`px-4 h-12 rounded-xl text-sm font-medium transition-all duration-200 ${
              value === extraOption.value
                ? 'bg-primary text-primary-foreground shadow-md scale-105'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
            }`}
          >
            {extraOption.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default ScaleInput;
