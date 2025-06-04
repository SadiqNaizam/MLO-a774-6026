import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import SignupLink from './SignupLink';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';

const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const FormCard: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    console.log("Login data:", data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Example: show a toast on successful login
    // import { useToast } from "@/components/ui/use-toast";
    // const { toast } = useToast();
    // toast({ title: "Login Successful", description: `Welcome, ${data.username}!` });
    form.reset();
  };

  const handleSignupClick = React.useCallback(() => {
    console.log("Navigate to Sign Up page");
    // Placeholder for navigation logic, e.g., using react-router-dom:
    // navigate('/signup');
  }, []);

  return (
    <Card className={cn(
      "w-[400px] bg-card shadow-md rounded-lg", // bg-card maps to surface, rounded-lg, shadow-md as per layout requirements
      // cardContainer width is w-[400px]
    )}>
      <CardHeader> {/* Shadcn default p-6 */} 
        <CardTitle className="text-3xl font-bold text-primaryText text-left">Log in</CardTitle>
      </CardHeader>
      <CardContent> {/* Shadcn default p-6 pt-0 */} 
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5"> {/* Consistent spacing for form elements */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <InputField
                    id="username"
                    label="Username"
                    type="text"
                    placeholder="Username"
                    disabled={isLoading}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <InputField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    disabled={isLoading}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Logging in...' : 'Log in'}
            </SubmitButton>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center"> {/* Shadcn default p-6 pt-0, content centered */}
        <SignupLink text="or, " linkText="sign up" onLinkClick={handleSignupClick} />
      </CardFooter>
    </Card>
  );
};

export default FormCard;
