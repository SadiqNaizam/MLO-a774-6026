import React from 'react';
import { Input, type InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface InputFieldProps extends InputProps {
  label: string;
  id: string;
  containerClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  className,
  containerClassName,
  ...props
}) => {
  return (
    <div className={cn("grid w-full items-center gap-1.5", containerClassName)}>
      <Label 
        htmlFor={id} 
        className="text-sm font-medium text-primaryText"
      >
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        className={cn(
          "focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0", // Consistent focus style
          className
        )}
        {...props}
      />
    </div>
  );
};

export default InputField;
