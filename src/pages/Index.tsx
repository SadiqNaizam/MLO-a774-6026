import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import FormCard from '../components/Login/FormCard';

/**
 * LoginPage is the main entry point for user authentication.
 * It utilizes AuthLayout to provide a consistent centered appearance
 * and renders the FormCard component which contains the login form itself.
 */
const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <FormCard />
    </AuthLayout>
  );
};

export default LoginPage;
