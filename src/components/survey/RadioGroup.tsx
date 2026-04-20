interface RadioGroupProps {
  options: readonly string[];
  value: string;
  onChange: (val: string) => void;
  showOther?: boolean;
  otherValue?: string;
  onOtherChange?: (val: string) => void;
}

const RadioGroup = ({ options, value, onChange, showOther, otherValue, onOtherChange }: RadioGroupProps) => {
  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm ${
            value === opt
              ? 'border-primary bg-primary/5 text-foreground font-medium'
              : 'border-border bg-card text-foreground hover:border-primary/30'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex-shrink-0 border-2 flex items-center justify-center transition-all ${
              value === opt ? 'border-primary' : 'border-muted-foreground/30'
            }`}>
              {value === opt && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
            </div>
            {opt}
          </div>
        </button>
      ))}
      {showOther && (
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={() => onChange('Otro')}
            className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm ${
              value === 'Otro'
                ? 'border-primary bg-primary/5 font-medium'
                : 'border-border bg-card hover:border-primary/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex-shrink-0 border-2 flex items-center justify-center ${
                value === 'Otro' ? 'border-primary' : 'border-muted-foreground/30'
              }`}>
                {value === 'Otro' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
              </div>
              Otro
            </div>
          </button>
          {value === 'Otro' && (
            <input
              type="text"
              value={otherValue || ''}
              onChange={(e) => onOtherChange?.(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Especificar..."
              autoFocus
            />
          )}
        </div>
      )}
    </div>
  );
};

export default RadioGroup;
