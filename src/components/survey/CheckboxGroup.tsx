interface CheckboxGroupProps {
  options: readonly string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  showOther?: boolean;
  otherValue?: string;
  onOtherChange?: (val: string) => void;
}

const CheckboxGroup = ({ options, selected, onChange, showOther, otherValue, onOtherChange }: CheckboxGroupProps) => {
  const toggle = (opt: string) => {
    onChange(
      selected.includes(opt)
        ? selected.filter((s) => s !== opt)
        : [...selected, opt]
    );
  };

  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm ${
            selected.includes(opt)
              ? 'border-primary bg-primary/5 text-foreground font-medium'
              : 'border-border bg-card text-foreground hover:border-primary/30'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all ${
              selected.includes(opt)
                ? 'border-primary bg-primary'
                : 'border-muted-foreground/30'
            }`}>
              {selected.includes(opt) && (
                <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            {opt}
          </div>
        </button>
      ))}
      {showOther && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Otro:</span>
          <input
            type="text"
            value={otherValue || ''}
            onChange={(e) => onOtherChange?.(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Especificar..."
          />
        </div>
      )}
    </div>
  );
};

export default CheckboxGroup;
