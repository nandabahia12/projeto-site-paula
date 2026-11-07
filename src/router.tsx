import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPendingComponent: () => <div role="status" aria-live="polite" className="loading-state"><span className="loading-spinner" aria-hidden="true" /> Carregando conteúdo...</div>,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
