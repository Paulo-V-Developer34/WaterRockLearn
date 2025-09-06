// __mocks__/next/router.js
export const useRouter = () => ({
  route: '/',
  pathname: '',
  query: {},
  asPath: '',
  push: vi.fn(),
  events: {
    on: vi.fn(),
    off: vi.fn(),
  },
  beforePopState: vi.fn(() => null),
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: {},
    asPath: '',
    push: vi.fn(),
  }),
});