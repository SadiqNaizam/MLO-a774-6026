import React from 'react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode; // Children will typically be the main content of the auth page, like a login form card
  className?: string; // Optional className for custom styling of the main layout container
}

/**
 * AuthLayout provides a consistent wrapper for authentication-related pages.
 * It centers its content vertically and horizontally within the viewport
 * and applies a standard background color.
 *
 * As per Layout Requirements:
 * - `overall.definition`: "flex items-center justify-center h-screen bg-background"
 *   This is applied to the main wrapper element.
 * - The children (e.g., FormCard, LoginPageLayout) are responsible for their own specific
 *   sizing (like `w-[400px]`) and internal styling (padding, card background, shadow).
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen items-center justify-center bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
