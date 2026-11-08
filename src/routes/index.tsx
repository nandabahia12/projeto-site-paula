import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, ChevronDown, Leaf, MoveUpRight, ShieldCheck } from "lucide-react";
import { SiteShell, Seo, ClinicalNote } from "../components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => Seo({
    title: "Prazer, Fernanda Bahia | Sua saúde não acontece em partes",
    description: "Conheça Fernanda Bahia, médica de Família e Comunidade em Salvador. Ciência, escuta e decisões compartilhadas, considerando a história e a realidade de cada pessoa."
  }),
  component: Home,
});

const chapters = [
  { id: "inicio", name: "Início" },
  { id: "voce", name: "Sua história" },
  { id: "especialidade", name: "A especialidade" },
  { id: "fernanda", name: "Quem sou" },
  { id: "cuidar", name: "O cuidado" },
  { id: "conhecimento", name: "Ciência" },
  { id: "duvidas", name: "Dúvidas" },
  { id: "contato", name: "Contato" },
];

const situations = [
  {
    name: "Muitas informações",
    teaser: "“Tenho vários médicos, exames e orientações. Como juntar tudo isso?”",
    heading: "Quando a saúde parece estar espalhada em partes.",
    text: "Nem sempre o desafio é encontrar mais uma resposta. Às vezes, é entender o que já sabemos, organizar prioridades e avaliar o que precisa de atenção agora.",
    note: "Revisão de tratamentos, avaliação clínica e coordenação quando indicadas fazem parte das competências da Medicina de Família e Comunidade.",
  },
  {
    name: "Uma dúvida persistente",
    teaser: "“Meus exames estão normais, mas eu não me sinto bem.”",
    heading: "O que você sente também merece investigação.",
    text: "Resultados de exames são peças importantes, mas não substituem uma conversa clínica cuidadosa, a história dos sintomas e uma avaliação adequada.",
    note: "A investigação depende de cada situação; não significa solicitar todos os exames possíveis nem garantir uma explicação imediata.",
  },
  {
    name: "Rotina e autocuidado",
    teaser: "“Sei o que preciso fazer, mas não consigo encaixar tudo na minha vida.”",
    heading: "Saber o caminho não significa conseguir percorrê-lo.",
    text: "Orientações de saúde precisam considerar tempo, cansaço, recursos, vínculos e limites reais. Cuidar não deveria se transformar em mais uma cobrança.",
    note: "As decisões podem considerar alternativas viáveis, sem culpabilizar a pessoa quando um plano não funciona.",
  },
  {
    name: "Vínculo e continuidade",
    teaser: "“Queria não precisar contar minha história do zero toda vez.”",
    heading: "Sua história não deveria recomeçar em cada encontro.",
    text: "Conhecer o percurso de uma pessoa pode ajudar a dar sentido a problemas novos, revisar escolhas e construir continuidade conforme a necessidade clínica.",
    note: "Longitudinalidade é um princípio da especialidade, não uma promessa de acesso irrestrito ou assinatura de acompanhamento.",
  },
];

const faqs = [
  { q: "O que faz uma médica de Família e Comunidade?", a: "É uma especialista médica preparada para acompanhar pessoas em diferentes fases da vida, atender muitas demandas frequentes de saúde, trabalhar com prevenção e articular cuidados quando isso for necessário. Avalia o contexto individual, familiar e comunitário." },
  { q: "Preciso ter uma doença crônica para procurar esse tipo de cuidado?", a: "Não. A Medicina de Família e Comunidade também cuida de dúvidas, problemas novos, prevenção e decisões sobre saúde. A avaliação e a continuidade são individualizadas." },
  { q: "Acompanhamento significa contratar um plano ou mensalidade?", a: "Não. A continuidade clínica não depende necessariamente de um produto comercial recorrente. As modalidades e condições de atendimento da Fernanda ainda estão sendo definidas." },
  { q: "Como faço para agendar?", a: "Os canais profissionais de agendamento ainda estão em organização. A página de contato informa o canal público disponível no momento; nenhum horário é reservado diretamente por este site." },
];

function Chapters() {
  const [active, setActive] = useState("inicio");
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const elements = chapters.map((chapter) => document.getElementById(chapter.id)).filter((item): item is HTMLElement => Boolean(item));
    const observer = new IntersectionObserver((entries) => {
      const found = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (found) setActive(found.target.id);
    }, { rootMargin: "-12% 0px -62% 0px", threshold: [0, .1, .25, .45] });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <>
    <nav className="ed-chapter-rail" aria-label="Índice da página inicial">
      {chapters.map((chapter, i) => <a key={chapter.id} href={`#${chapter.id}`} aria-current={active === chapter.id ? "location" : undefined} className={active === chapter.id ? "current" : ""}>
        <span aria-hidden="true" className="ed-rail-number">{String(i + 1).padStart(2, "0")}</span><span>{chapter.name}</span>
      </a>)}
    </nav>
    <div className="ed-mobile-index">
      <button type="button" aria-expanded={opened} aria-controls="ed-mobile-index-links" onClick={() => setOpened((current) => !current)}>
        <span>Explorar a página <strong>{chapters.find((chapter) => chapter.id === active)?.name}</strong></span><ChevronDown size={18} className={opened ? "rotated" : ""}/>
      </button>
      {opened && <nav id="ed-mobile-index-links" aria-label="Ir para um capítulo">
        {chapters.map((chapter) => <a key={chapter.id} href={`#${chapter.id}`} onClick={() => setOpened(false)} aria-current={active === chapter.id ? "location" : undefined}>{chapter.name}</a>)}
      </nav>}
    </div>
  </>;
}

function Home() {
  const [selected, setSelected] = useState(0);
  const story = situations[selected];
  return <SiteShell>
    <div className="ed-site ed-home">
      <Chapters/>
      <section id="inicio" className="ed-opening">
        <div className="ed-wrap ed-opening-grid">
          <div className="ed-opening-copy">
            <span className="ed-eyebrow"><span className="ed-line" /> MEDICINA DE FAMÍLIA E COMUNIDADE · SALVADOR</span>
            <h1>Prazer,<br/><span>Fernanda Bahia.</span></h1>
            <p className="ed-opening-thesis">Sua saúde não<br/> acontece <em>em partes.</em></p>
            <div className="ed-opening-description">
              <p>Sou médica de Família e Comunidade. Acredito em um cuidado que considere sua saúde, sua história e a realidade da sua vida.</p>
              <p>Um encontro entre conhecimento científico, escuta e decisões construídas com você.</p>
            </div>
            <div className="ed-inline-actions">
              <a className="ed-action-primary" href="#especialidade">Conheça minha forma de cuidar <ArrowUpRight size={17}/></a>
              <Link className="ed-link" to="/sobre">Minha história <ArrowRight size={16}/></Link>
            </div>
          </div>
          <div className="ed-opening-composition" aria-label="Composição gráfica abstrata em tons de argila e verde, reservando espaço para retrato autoral da médica">
            <div className="ed-opening-shape ed-opening-shape-one" aria-hidden="true"/>
            <div className="ed-opening-shape ed-opening-shape-two" aria-hidden="true"/>
            <div className="ed-opening-graphic" aria-hidden="true">f<span>.</span>b</div>
            <div className="ed-image-caption"><span>Uma história.<br/>Muitas formas de cuidar.</span><small>Fotografia autoral ainda a definir</small></div>
          </div>
        </div>
        <div className="ed-wrap ed-opening-bottom"><span>01 / Um primeiro encontro</span><a href="#voce">Continue a leitura <ArrowDown size={16}/></a></div>
      </section>

      <section id="voce" className="ed-space ed-recognition">
        <div className="ed-wrap">
          <div className="ed-heading-row">
            <div><span className="ed-eyebrow">01 · A SUA HISTÓRIA</span><h2>Talvez você se<br/>reconheça <em>aqui.</em></h2></div>
            <p>Nem sempre as nossas necessidades de saúde chegam organizadas. Você pode começar pelo assunto que fizer mais sentido.</p>
          </div>
          <div className="ed-story-explorer">
            <div className="ed-story-choices" role="group" aria-label="Escolha uma situação para explorar">
              {situations.map((item, i) => <button type="button" key={item.name} onClick={() => setSelected(i)} aria-pressed={selected === i} className={selected === i ? "is-selected" : ""}>
                <span className="ed-story-count">0{i + 1}</span><span className="ed-story-choice-content"><strong>{item.name}</strong><span>{item.teaser}</span></span><ArrowUpRight size={18} aria-hidden="true"/>
              </button>)}
            </div>
            <article className="ed-story-detail" aria-live="polite">
              <span className="ed-eyebrow">UM OLHAR POSSÍVEL</span>
              <h3>{story.heading}</h3>
              <p>{story.text}</p>
              <p className="ed-story-footnote">{story.note}</p>
              <a href="#especialidade" className="ed-link">Conheça a especialidade <ArrowRight size={16}/></a>
            </article>
          </div>
          <p className="ed-citation-note">As frases são situações ilustrativas baseadas no acervo editorial; não são depoimentos de pacientes nem prometem resultados.</p>
        </div>
      </section>

      <section id="especialidade" className="ed-space ed-mfc">
        <div className="ed-wrap ed-mfc-layout">
          <div className="ed-mfc-side"><span className="ed-eyebrow">02 · A ESPECIALIDADE</span><div className="ed-mfc-symbol" aria-hidden="true"><span>+</span></div><span className="ed-side-note">Pessoas, famílias, comunidade.<br/>O contexto também importa.</span></div>
          <div className="ed-mfc-body">
            <h2>Uma medicina que<br/>enxerga <em>conexões.</em></h2>
            <p className="ed-lead">A Medicina de Família e Comunidade é uma especialidade médica que cuida de pessoas em diferentes fases da vida. Pode acolher problemas novos, acompanhar condições de saúde, trabalhar com prevenção e ajudar a organizar decisões clínicas.</p>
            <div className="ed-mfc-notes">
              <div><span>01</span><div><h3>Compreender antes de simplificar.</h3><p>Um sintoma não existe separado da história, das relações e das possibilidades de quem o vive.</p></div></div>
              <div><span>02</span><div><h3>Cuidar sem multiplicar intervenções.</h3><p>Mais exames e tratamentos não significam necessariamente mais cuidado. Benefícios, riscos e prioridades importam.</p></div></div>
              <div><span>03</span><div><h3>Construir continuidade quando faz sentido.</h3><p>Revisitar decisões, acompanhar mudanças e trabalhar com outros profissionais quando houver indicação.</p></div></div>
            </div>
            <Link className="ed-link" to="/acompanhamento">Entenda as possibilidades de cuidado <ArrowUpRight size={17}/></Link>
          </div>
        </div>
      </section>

      <section id="fernanda" className="ed-space ed-fernanda">
        <div className="ed-wrap ed-fernanda-layout">
          <div className="ed-fernanda-still" role="img" aria-label="Composição artística abstrata; espaço previsto para fotografia real de Fernanda"><span className="ed-still-word">Salvador,<br/><i>origem</i> e<br/>caminho.</span><small>Retrato real a escolher</small></div>
          <div className="ed-fernanda-copy">
            <span className="ed-eyebrow">03 · PRAZER, FERNANDA</span>
            <h2>Há uma história<br/>por trás <em>da médica.</em></h2>
            <p>Sou soteropolitana. A cidade onde cresci, as pessoas que conheci e minhas próprias experiências ajudaram a construir a forma como entendo a saúde.</p>
            <p>Aprendi que nem sempre saber o que precisa ser feito significa conseguir fazer. Por isso, acredito em uma medicina que considere os limites, as diferenças e as possibilidades reais de cada pessoa.</p>
            <Link className="ed-action-outline" to="/sobre">Entre na minha história <ArrowUpRight size={17}/></Link>
            <p className="ed-subnote">Na página Sobre mim: trajetória, formação, vida além do consultório, valores e escolha da especialidade.</p>
          </div>
        </div>
      </section>

      <section id="cuidar" className="ed-space ed-care">
        <div className="ed-wrap">
          <div className="ed-care-intro"><span className="ed-eyebrow">04 · COMO PENSO O CUIDADO</span><h2>Menos fórmulas prontas.<br/><em>Mais decisões possíveis.</em></h2><p>Uma abordagem clínica se constrói no encontro. A sequência a seguir é ilustrativa, não um pacote, protocolo rígido ou modalidade de atendimento já contratada.</p></div>
          <div className="ed-care-sequence">
            <article><span>01 / Escutar</span><h3>O que importa<br/>para você?</h3><p>Conhecer dúvidas, preocupações e prioridades, sem pressupor que todas as pessoas precisam da mesma coisa.</p></article>
            <article><span>02 / Compreender</span><h3>O que faz<br/>sentido agora?</h3><p>Considerar a avaliação clínica, as evidências e as opções proporcionais à sua situação.</p></article>
            <article><span>03 / Compartilhar</span><h3>Qual pode ser<br/>o próximo passo?</h3><p>Conversar sobre caminhos possíveis, barreiras e revisões quando houver necessidade.</p></article>
          </div>
        </div>
      </section>

      <section id="conhecimento" className="ed-space ed-evidence">
        <div className="ed-wrap ed-evidence-layout">
          <div><span className="ed-eyebrow">05 · CIÊNCIA E VIDA REAL</span><h2>Conhecimento não<br/>deveria ser <em>um peso.</em></h2></div>
          <div><p>Decisões sobre saúde precisam de informações compreensíveis, evidências confiáveis e espaço para perguntas.</p><div className="ed-evidence-links"><span><BookOpen size={19}/> Medicina baseada em evidências</span><span><ShieldCheck size={19}/> Prevenção de intervenções desnecessárias</span><span><Leaf size={19}/> Hábitos de vida com contexto e sem culpa</span></div><p className="ed-subnote">Biblioteca educativa e materiais complementares: em planejamento, sem conteúdo clínico simulado.</p></div>
        </div>
      </section>

      <section id="duvidas" className="ed-space ed-faq">
        <div className="ed-wrap ed-faq-layout">
          <div><span className="ed-eyebrow">06 · PERGUNTAS FREQUENTES</span><h2>Algumas coisas<br/>que vale <em>esclarecer.</em></h2><p>Informações diretas, sem exigir que você conheça a especialidade previamente.</p></div>
          <div className="ed-faq-list">{faqs.map((item, i) => <details key={item.q}><summary><span className="ed-faq-number">{String(i + 1).padStart(2, "0")}</span><span>{item.q}</span><ChevronDown size={20} aria-hidden="true"/></summary><p>{item.a}</p></details>)}</div>
        </div>
      </section>

      <section id="contato" className="ed-contact">
        <div className="ed-wrap ed-contact-layout"><div><span className="ed-eyebrow">07 · O PRÓXIMO PASSO</span><h2>Vamos<br/><em>conversar?</em></h2></div><div><p>Se essa maneira de compreender a saúde faz sentido para você, pode conhecer os canais de contato disponíveis e como obter informações sobre atendimento.</p><Link className="ed-action-primary ed-action-inverse" to="/contato">Ver informações de contato <MoveUpRight size={18}/></Link><small>Os canais profissionais de agendamento ainda estão em definição. Este link não reserva horário.</small></div></div>
      </section>
      <div className="ed-wrap ed-clinical"><ClinicalNote/></div>
    </div>
  </SiteShell>;
}
