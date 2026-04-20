interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  sectionName: string;
}

const ProgressBar = ({ currentStep, totalSteps, sectionName }: ProgressBarProps) => {
  const progress = ((currentStep) / totalSteps) * 100;

  return (
    <div className="sticky top-0 z-10 bg-card px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-bold tracking-widest text-primary/70 uppercase">ABRIL 2026</span>
        <span className="text-xs font-semibold text-primary">
          {currentStep} / {totalSteps}
        </span>
      </div>
      <div className="mb-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {sectionName}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
