import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {//essa função sempre é chamada antes que uma requisição HTTP seja terminada
        authorized({ auth, request: { nextUrl } }) { 
            const isLoggedIn = !!auth?.user; //a utilização de dois ! "!!" serve para converter um tipo qualquer em um boleano
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
    },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig //