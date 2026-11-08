import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Music2 } from "lucide-react";
import { SiteShell, Seo, ClinicalNote } from "../components/SiteShell";

export const Route = createFileRoute("/sobre")({
  head: () => Seo({
    title: "Prazer, Fernanda Bahia | Minha história",
    description: "Conheça a história, os valores e a trajetória de Fernanda Bahia, médica de Família e Comunidade em Salvador."
  }),
  component: Sobre,
});

const subsections = [
  { id: "prazer", label: "Prazer, Fernanda" },
  { id: "historia", label: "A história por trás" },
  { id: "formacao", label: "Formação e trajetória" },
  { id: "alem", label: "Além do consultório" },
  { id: "acredito", label: "No que acredito" },
  { id: "escolha", label: "Por que MFC?" },
];

function AboutIndex() {
  const [active, setActive] = useState("prazer");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const item = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (item) setActive(item.target.id);
    }, { rootMargin: "-15% 0px -60% 0px", threshold: [0, .15, .4] });
    subsections.forEach(({ id }) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return <nav aria-label="Capítulos da minha história" className="ed-about-index">{subsections.map((chapter, i) => <a href={`#${chapter.id}`} key={chapter.id} aria-current={active === chapter.id ? "location" : undefined}><span>{String(i + 1).padStart(2, "0")}</span>{chapter.label}</a>)}</nav>;
}

function Sobre() {
  return <SiteShell>
    <div className="ed-site ed-about-page">
      <section id="prazer" className="ed-about-opening">
        <div className="ed-wrap ed-about-opening-layout">
          <div><span className="ed-eyebrow">SOBRE MIM · UMA HISTÓRIA EM SEIS CAPÍTULOS</span><h1>Prazer,<br/><em>Fernanda Bahia.</em></h1><p>Sou soteropolitana e médica de Família e Comunidade. Minha história não começa no consultório — e é justamente isso que me ajuda a lembrar que ninguém chega a uma consulta separado da própria vida.</p><a className="ed-link" href="#historia">Conheça o caminho <ArrowDown size={16}/></a></div>
          <div className="ed-about-cover-art" role="img" aria-label="Composição abstrata evocando a luz e as paisagens de Salvador; retrato autoral a definir"><span>origem<br/><i>& pertencimento</i></span><small>Fotografia real a definir</small></div>
        </div>
      </section>
      <div className="ed-wrap ed-about-body-grid">
        <AboutIndex/>
        <div className="ed-about-content">
          <section id="historia" className="ed-about-chapter ed-about-first">
            <span className="ed-eyebrow">01 · A HISTÓRIA POR TRÁS DA MÉDICA</span>
            <h2>Antes de cuidar de pessoas,<br/>aprendi a olhar para <em>a minha própria história.</em></h2>
            <p>Por muito tempo, procurei dar conta de tudo: estudar, corresponder às expectativas, não incomodar, estar disponível. Em algum momento, precisei aprender que respeitar os meus limites não era desistir de mim.</p>
            <p>Essa experiência ajudou a transformar meu entendimento sobre saúde. Orientações não existem no vazio. Entre saber o que fazer e conseguir fazer, há uma vida inteira acontecendo.</p>
            <blockquote>“Eu sabia o que precisava fazer. Mas saber não significava conseguir.”</blockquote>
            <details className="ed-personal-more"><summary>Leia mais sobre essa reflexão <ChevronDown size={18}/></summary><div><p>Conhecer minhas dificuldades e aprender a respeitar meu jeito de funcionar me fez olhar de outra forma para as barreiras que uma pessoa encontra ao tentar cuidar da saúde. Culpa não organiza uma rotina, não cria tempo e não substitui apoio.</p><p>Quero levar essa atenção à realidade de cada pessoa para a prática médica, sem transformar trajetórias diferentes em uma única história.</p></div></details>
          </section>
          <section id="formacao" className="ed-about-chapter">
            <span className="ed-eyebrow">02 · FORMAÇÃO E TRAJETÓRIA PROFISSIONAL</span>
            <h2>Uma escolha construída <em>no encontro.</em></h2>
            <p>Minha formação médica e minha trajetória na Atenção Primária e no Sistema Único de Saúde aproximaram conhecimento científico, realidade social e o trabalho cotidiano de cuidar.</p>
            <p>Encontrei na Medicina de Família e Comunidade uma especialidade que reconhece a complexidade das pessoas, valoriza a continuidade e acolhe questões que não cabem em uma única lista de sintomas.</p>
            <div className="ed-facts-line"><span>Medicina de Família e Comunidade</span><span>Experiência na Atenção Primária e no SUS</span><span>Compromisso com educação e cuidado em saúde</span></div>
            <p className="ed-subnote">Instituições, títulos, cargos e datas devem passar por conferência documental e revisão da médica antes de publicação.</p>
          </section>
          <section id="alem" className="ed-about-chapter ed-about-life">
            <span className="ed-eyebrow">03 · ALÉM DO CONSULTÓRIO</span>
            <h2>Também sou feita de <em>outros encontros.</em></h2>
            <div className="ed-life-layout"><div className="ed-life-art"><Music2 size={32} aria-hidden="true"/><span>O som, a cidade,<br/>os caminhos.</span></div><div><p>Salvador atravessa minha história. A cidade me ensinou sobre encontros, diferenças, oportunidades e desigualdades que nem sempre estão visíveis à primeira vista.</p><p>A música também faz parte da minha vida. Não como um título ou desempenho, mas como uma forma de sentir, experimentar e estar no mundo.</p><p>Ser uma pessoa LGBT e neurodivergente integra minha experiência pessoal. Isso não define quem posso atender, mas reforça o valor que atribuo ao respeito às singularidades e a uma escuta sem pressupostos.</p></div></div>
            <p className="ed-subnote">Esta narrativa pessoal é uma proposta interna sujeita à revisão final de Fernanda antes de qualquer divulgação.</p>
          </section>
          <section id="acredito" className="ed-about-chapter">
            <span className="ed-eyebrow">04 · NO QUE ACREDITO</span>
            <h2>Respeito não é detalhe.<br/><em>É ponto de partida.</em></h2>
            <p>Para mim, cuidado clínico envolve escuta, evidências, autonomia e equidade. Nem todas as pessoas chegam ao mesmo lugar com os mesmos recursos — e uma orientação só é útil quando considera essa diferença.</p>
            <div className="ed-beliefs"><div><span>01</span><strong>Escutar antes de presumir.</strong></div><div><span>02</span><strong>Decidir com a pessoa, não por ela.</strong></div><div><span>03</span><strong>Evitar intervenções que não tragam benefício.</strong></div><div><span>04</span><strong>Considerar o que é viável em cada vida.</strong></div></div>
          </section>
          <section id="escolha" className="ed-about-chapter ed-about-last">
            <span className="ed-eyebrow">05 · POR QUE ESCOLHI A MEDICINA DE FAMÍLIA E COMUNIDADE</span>
            <h2>Porque a saúde tem <em>contexto.</em></h2>
            <p>A especialidade me oferece a possibilidade de pensar sobre a pessoa, sua família e sua comunidade, lidar com diferentes necessidades de saúde e construir decisões compartilhadas ao longo do tempo, quando isso é indicado.</p>
            <p>É uma medicina que me desafia a estudar, escutar, reconhecer incertezas e cuidar sem reduzir ninguém a um diagnóstico.</p>
            <div className="ed-about-ending"><span>Que bom que você chegou até aqui.</span><Link className="ed-action-outline" to="/acompanhamento">Conheça a proposta de cuidado <ArrowUpRight size={17}/></Link><Link className="ed-link" to="/contato">Informações de contato <ArrowRight size={16}/></Link></div>
          </section>
        </div>
      </div>
      <div className="ed-wrap ed-clinical"><ClinicalNote/></div>
    </div>
  </SiteShell>;
}
