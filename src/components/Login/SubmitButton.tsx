import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SubmitButtonProps extends ButtonProps { // Extend Shadcn ButtonProps
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className,
  type = "submit", // Default type to submit for a submit button
  ...props
}) => {
  return (
    <Button
      type={type}
      className={cn(
        "w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground", // Uses --prd-accent-button
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
