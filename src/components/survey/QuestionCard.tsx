import { ReactNode } from 'react';

interface QuestionCardProps {
  number?: string;
  question: string;
  instruction?: string;
  children: ReactNode;
}

const QuestionCard = ({ number, question, instruction, children }: QuestionCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm border border-border space-y-4">
      <div>
        {number && (
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md mb-2">
            {number}
          </span>
        )}
        <h3 className="text-sm font-semibold text-foreground leading-relaxed">{question}</h3>
        {instruction && (
          <p className="text-xs text-muted-foreground mt-1 italic">{instruction}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default QuestionCard;
