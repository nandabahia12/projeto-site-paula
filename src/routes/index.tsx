import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, BookOpen, Compass, HeartHandshake, Leaf, MoveUpRight, ShieldCheck } from "lucide-react";
import { SiteShell, Seo, ClinicalNote } from "../components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => Seo({
    title: "Prazer, Fernanda Bahia — Sua saúde não acontece em partes",
    description: "Conheça Dra. Fernanda Bahia, médica de Família e Comunidade em Salvador. Uma perspectiva de cuidado que conecta ciência, escuta, história e contexto de vida."
  }),
  component: Home
});

const chapters = [
  { id: "inicio", label: "Início" },
  { id: "historias", label: "Sua história" },
  { id: "medicina", label: "A medicina" },
  { id: "fernanda", label: "Fernanda" },
  { id: "cuidado", label: "O cuidado" },
  { id: "contato", label: "Contato" },
];

function ChapterNavigation() {
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-18% 0px -55% 0px", threshold: [0, .1, .3, .6] });
    chapters.forEach(({ id }) => { const target = document.getElementById(id); if (target) observer.observe(target); });
    return () => observer.disconnect();
  }, []);
  return <nav className="v2-chapters" aria-label="Capítulos da página inicial">
    {chapters.map((chapter, index) => <a key={chapter.id} href={`#${chapter.id}`} className={active === chapter.id ? "is-active" : ""} aria-current={active === chapter.id ? "location" : undefined}>
      <span className="v2-chapter-dot" aria-hidden="true" />
      <span className="v2-chapter-name"><span className="v2-chapter-number">{String(index + 1).padStart(2, "0")}</span> {chapter.label}</span>
    </a>)}
  </nav>;
}

function Home() {
  return <SiteShell>
    <div className="v2-home">
      <ChapterNavigation />
      <section id="inicio" className="v2-hero" aria-labelledby="v2-title">
        <div className="container v2-hero-grid">
          <div className="v2-hero-copy">
            <div className="v2-overline"><span className="v2-mini-line" /> MÉDICA DE FAMÍLIA E COMUNIDADE · SALVADOR, BA</div>
            <h1 id="v2-title"><span className="v2-intro">Prazer, Fernanda Bahia.</span><span className="v2-statement">Sua saúde não acontece em partes.</span></h1>
            <p className="v2-hero-description">Sou médica de Família e Comunidade. Acredito em um cuidado que considere não apenas os sintomas, mas também sua história, suas necessidades e a realidade da sua vida.</p>
            <p className="v2-hero-description v2-second-description">Com ciência, escuta e decisões compartilhadas, podemos compreender melhor o que importa para a sua saúde.</p>
            <div className="v2-actions"><a className="v2-pill v2-pill-primary" href="#medicina">Conheça minha forma de cuidar <ArrowUpRight size={19}/></a><a className="v2-text-link" href="#fernanda">Minha história <ArrowUpRight size={17}/></a></div>
          </div>
          <div className="v2-hero-visual" aria-label="Composição gráfica inspirada em luz natural e formas orgânicas; fotografia autoral da médica ainda será escolhida">
            <div className="v2-sun-disc" aria-hidden="true" />
            <div className="v2-shadow-leaf v2-leaf-a" aria-hidden="true" />
            <div className="v2-shadow-leaf v2-leaf-b" aria-hidden="true" />
            <div className="v2-photo-message"><span>Um encontro entre<br/>ciência e vida real.</span><small>Fotografia autoral a definir</small></div>
          </div>
        </div>
        <div className="container v2-hero-foot"><span>01 / 06 · UM PRIMEIRO ENCONTRO</span><a href="#historias">Continue a leitura <ArrowDown size={16}/></a></div>
      </section>
      <section id="historias" className="v2-section v2-stories" aria-labelledby="stories-title">
        <div className="container">
          <div className="v2-section-heading"><span className="v2-kicker">01 · RECONHECIMENTO</span><h2 id="stories-title">Cada pessoa tem <em>uma história.</em></h2><p>A saúde também acontece fora das consultas — nas responsabilidades, relações, preocupações e possibilidades de cada dia.</p></div>
          <div className="v2-story-lines" aria-label="Exemplos ilustrativos de situações de saúde, não depoimentos reais">
            <div><span>01</span><p>“Tenho vários assuntos de saúde e nem sei por onde começar.”</p></div>
            <div><span>02</span><p>“Quero entender melhor minhas opções e participar das decisões.”</p></div>
            <div><span>03</span><p>“Preciso de orientações que façam sentido na minha rotina.”</p></div>
          </div>
          <p className="v2-disclaimer">Situações ilustrativas, inspiradas em necessidades comuns. Não são relatos de pacientes.</p>
        </div>
      </section>
      <section id="medicina" className="v2-section v2-medicine" aria-labelledby="medicine-title">
        <div className="container v2-medicine-layout">
          <div><span className="v2-kicker">02 · MEDICINA DE FAMÍLIA E COMUNIDADE</span><h2 id="medicine-title">Uma medicina que <em>conecta.</em></h2><p className="v2-intro-copy">A Medicina de Família e Comunidade é uma especialidade médica voltada ao cuidado de pessoas ao longo da vida. Ela considera problemas de saúde, prevenção e o contexto em que cada pessoa vive.</p><Link className="v2-text-link" to="/acompanhamento">Entenda a proposta de cuidado <ArrowUpRight size={17}/></Link></div>
          <div className="v2-principles">
            <article><HeartHandshake aria-hidden="true"/><h3>Escuta e contexto</h3><p>Compreender preocupações, objetivos e circunstâncias que influenciam a saúde.</p></article>
            <article><Compass aria-hidden="true"/><h3>Visão integrada</h3><p>Organizar prioridades e olhar para diferentes necessidades sem perder de vista a pessoa.</p></article>
            <article><BookOpen aria-hidden="true"/><h3>Ciência e escolhas</h3><p>Considerar evidências, benefícios, riscos e preferências nas decisões clínicas.</p></article>
          </div>
        </div>
      </section>
      <section id="fernanda" className="v2-section v2-about" aria-labelledby="about-title">
        <div className="container v2-about-layout">
          <div className="v2-about-art" role="img" aria-label="Espaço reservado para futura fotografia real e autorizada da Dra. Fernanda Bahia"><span>Um olhar pessoal<br/>sobre o cuidado</span><small>Retrato autoral a definir</small></div>
          <div className="v2-about-copy"><span className="v2-kicker">03 · QUEM ESTÁ POR TRÁS DO CUIDADO</span><h2 id="about-title">Prazer, sou a <em>Fernanda.</em></h2><p>Sou soteropolitana e médica de Família e Comunidade. Minha maneira de compreender a medicina parte de uma convicção: cada pessoa tem uma história que merece ser considerada com respeito.</p><p>Acredito em uma prática clínica que una conhecimento científico, atenção às diferenças e cuidado possível na vida real.</p><Link className="v2-text-link" to="/sobre">Conheça minha trajetória <ArrowUpRight size={18}/></Link></div>
        </div>
      </section>
      <section id="cuidado" className="v2-section v2-process" aria-labelledby="process-title">
        <div className="container"><div className="v2-process-heading"><span className="v2-kicker">04 · COMO PENSO O CUIDADO</span><h2 id="process-title">Conversar. Compreender. <em>Decidir juntos.</em></h2><p>Esses são princípios da abordagem clínica — não etapas de um serviço ou pacote de acompanhamento já contratado.</p></div>
          <div className="v2-steps">
            <article><span className="v2-step-number">01</span><h3>Conversar</h3><p>Ouvir sua história, compreender suas preocupações e identificar prioridades.</p></article>
            <article><span className="v2-step-number">02</span><h3>Compreender</h3><p>Avaliar o contexto, os conhecimentos científicos e as possibilidades de cuidado.</p></article>
            <article><span className="v2-step-number">03</span><h3>Construir caminhos</h3><p>Discutir escolhas e próximos passos de forma compartilhada, conforme a necessidade.</p></article>
          </div>
        </div>
      </section>
      <section className="v2-reading-strip" aria-labelledby="reading-title"><div className="container"><Leaf size={29} aria-hidden="true"/><div><span className="v2-kicker">05 · CONHECIMENTO E AUTONOMIA</span><h2 id="reading-title">Cuidar também é <em>compreender.</em></h2><p>Prevenção, decisões clínicas e hábitos de vida merecem informações claras e fundamentadas — sem fórmulas prontas para todas as pessoas.</p></div></div></section>
      <section id="contato" className="v2-contact" aria-labelledby="contact-title"><div className="container v2-contact-layout"><div><span className="v2-kicker">06 · PRÓXIMO PASSO</span><h2 id="contact-title">Vamos <em>conversar?</em></h2></div><div><p>Se esta forma de pensar a saúde faz sentido para você, conheça as informações de contato disponíveis. Os canais profissionais de agendamento ainda estão em definição.</p><Link className="v2-pill v2-pill-light" to="/contato">Informações de contato <MoveUpRight size={19}/></Link><small>Nenhum horário ou atendimento é reservado por este botão.</small></div></div></section>
      <div className="container v2-clinical-wrap"><ClinicalNote/></div>
    </div>
  </SiteShell>;
}
