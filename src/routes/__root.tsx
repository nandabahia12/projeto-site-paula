import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import editorialCss from "../editorial-v2.css?url";
import { SiteShell } from "../components/SiteShell";
import { reportLovableError } from "../lib/lovable-error-reporting";
function NotFoundComponent() { return <SiteShell><section className="notfound container"><p className="eyebrow">Página não encontrada</p><h1>404</h1><h2>Este caminho não está por aqui.</h2><p>Talvez a página tenha mudado de endereço.</p><Link className="button" to="/">Voltar ao início</Link></section></SiteShell>; }
function ErrorComponent({ error, reset }: ErrorComponentProps) {
 const router = useRouter();
 useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"});},[error]);
 return <SiteShell><section className="notfound container"><h1>Ops!</h1><h2>Não foi possível carregar a página.</h2><p>Você pode tentar novamente ou voltar à página inicial.</p><button className="button" type="button" onClick={()=>{router.invalidate();reset();}}>Tentar novamente</button> <Link className="button outline" to="/">Início</Link></section></SiteShell>;
}
export const Route = createRootRouteWithContext<{queryClient:QueryClient}>()({
 head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Dra. Fernanda Bahia | Medicina de Família e Comunidade"},{name:"description",content:"Cuidado médico individualizado, com ciência, escuta e respeito à singularidade de cada pessoa. Salvador e teleconsultas conforme avaliação."},{name:"theme-color",content:"#f8f5ef"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"stylesheet",href:appCss},{rel:"stylesheet",href:editorialCss},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}]}),
 shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent
});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}
