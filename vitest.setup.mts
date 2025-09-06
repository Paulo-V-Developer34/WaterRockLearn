// vitest.setup.ts
import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock('next/router', () => require('next-router-mock'))
// Alternativa mais simples usando uma biblioteca:
// pnpm add -D next-router-mock
// No setup: require('next-router-mock/vitest')

//Podemos modificar as variáveis de ambiente para realizarmos os mocks
process.env.NEXT_PUBLIC_API_URL='http://localhost:3000/api'     //este é apenas 1 exemplo