import { LogInForm } from "./LogInForm";

//yoinked from shadcn examples
export default function LogInPage() {
  return (
   <div>

      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img src="logo_white.png" alt="logo" className="mr-2 h-12 w-12"/>
            RLFRNDS
          </div>
          <div className="relative z-20 mt-auto">
            
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Log in
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to log in
              </p>
            </div>
            <LogInForm />
          </div>
        </div>
      </div>
    </div>
  );
}
