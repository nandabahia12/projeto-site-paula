# Site profissional — Dra. Fernanda Bahia

Site editorial e institucional inicial para médica de família e comunidade, com interface em português, identidade em tons terrosos, rotas independentes, acessibilidade básica e páginas legais preliminares.

## Stack

React 19, TypeScript, Tailwind CSS 4, Vite e TanStack Start. Mantido o pacote `@lovable.dev/vite-tanstack-config` para continuidade da sincronização com o Lovable.

## Desenvolvimento

```bash
npm install
npm run dev
npm run build
```

O código está no repositório `nandabahia12/projeto-site-paula`, reaproveitado para Fernanda conforme orientação do proprietário. Branch principal: `main`.

## Páginas

`/`, `/sobre`, `/acompanhamento`, `/teleconsulta`, `/contato`, `/privacidade`, `/termos`, `/cookies`, `/cancelamentos` e `/obrigado`. A raiz oferece página 404 personalizada.

## Importante — não publicar como pronto

- RQE numérico, contatos profissionais, domínio, endereço, agenda, pagamentos, plataforma clínica e condições de prestação do serviço precisam de confirmação.
- O formulário não foi habilitado para evitar envio ou coleta fictícios; a página de contato encaminha ao perfil Instagram público sem solicitar informações de saúde.
- Analytics, pixels publicitários e integrações médicas não estão instalados.
- Políticas legais são rascunhos que exigem revisão especializada.
- `robots.txt` bloqueia indexação. `sitemap.xml` está vazio até existir domínio real.
- A arte OG está em SVG como fonte visual; faltam imagem raster final e URL absoluta por página para compartilhamento universal.
- Esta sessão não executou instalação limpa/build e isso é obrigatório antes do deploy.

Veja [o checklist de publicação](docs/publication-checklist.md).
