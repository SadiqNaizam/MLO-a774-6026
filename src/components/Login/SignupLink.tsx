import React from 'react';
import { cn } from '@/lib/utils';

interface SignupLinkProps {
  text?: string;
  linkText: string;
  onLinkClick?: () => void;
  className?: string;
}

const SignupLink: React.FC<SignupLinkProps> = ({
  text = "or, ",
  linkText,
  onLinkClick,
  className,
}) => {
  return (
    <p className={cn("text-sm text-center text-muted-foreground", className)}> 
      {text}
      <button
        type="button"
        onClick={onLinkClick}
        className="italic font-medium underline hover:text-primaryText focus:outline-none focus:ring-1 focus:ring-ring rounded transition-colors duration-150"
      >
        {linkText}
      </button>
    </p>
  );
};

export default SignupLink;
