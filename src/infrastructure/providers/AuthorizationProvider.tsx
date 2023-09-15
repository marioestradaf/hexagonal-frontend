// AuthorizationProvider.tsx (UI Layer / Inbound Adapter)
import React, { createContext, useContext } from 'react';
import AuthRepository from '../../modules/auth/domain/AuthRepository';
import AuthRepositoryImpl from '../../modules/auth/infrastructure/AuthRespositoryImpl';
import { AuthUseCase } from '../../modules/auth/application/AuthUseCase';

// Create a context for the AuthRepository instance
const AuthRepositoryContext = createContext<AuthRepository | undefined>(undefined);

// Custom hook to access the AuthRepository instance
export function useAuthRepository() {
  const authRepository = useContext(AuthRepositoryContext);
  if (!authRepository) {
    throw new Error('useAuthRepository must be used within an AuthorizationProvider');
  }
  return authRepository;
}

// Props for the AuthorizationProvider
interface AuthorizationProviderProps {
  children: React.ReactNode;
}

// The AuthorizationProvider component
export function AuthorizationProvider({ children }: AuthorizationProviderProps) {
  // Instantiate the AuthRepositoryImpl in the provider
  const authRepository = new AuthRepositoryImpl();
  const authUseCase = new AuthUseCase(authRepository);

  return (
    <AuthRepositoryContext.Provider value={authUseCase}>
      {children}
    </AuthRepositoryContext.Provider>
  );
}
