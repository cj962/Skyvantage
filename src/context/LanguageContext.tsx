import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.guardrails': 'AI Guardrail Verification',
    'nav.solver': 'GF2 Solver',
    'nav.deck': 'Technical Briefing Deck',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.products': 'Solutions',

    // Hero
    'hero.badge': 'FORMAL VERIFICATION OVER GF(2)',
    'hero.title': 'Quasilinearsolver',
    'hero.subtitle': 'A C++17 framework for formal verification over the binary field. Proving what an AI agent cannot do through algebraic guardrail compilation and EDA circuit analysis.',
    'hero.explore': 'Explore AI Guardrails',
    'hero.contact': 'Request Briefing',
    'hero.stat_field': 'Proof System',
    'hero.stat_field_val': 'GF(2) Algebra',
    'hero.stat_coverage': 'Context Coverage',
    'hero.stat_coverage_val': 'All 2^N States',
    'hero.stat_receipt': 'Verification',
    'hero.stat_receipt_val': 'Replayable DAG',
    'hero.stat_engine': 'Core Engine',
    'hero.stat_engine_val': 'C++17 Multi-Phase',

    // Features Section
    'features.title': 'FORMAL ASSURANCE FOR ENTERPRISE AI & CIRCUITS',
    'features.subtitle': "Testing samples. Language models predict likely tokens. Quasilinearsolver algebraically decides reachability, proving mathematically that protected actions cannot fire without preconditions.",
    'features.guardrails_desc': 'Compiles NeMo Guardrails Colang rules into quasilinear GF(2) systems. Proves safety preconditions hold across all 2^N context states and emits replayable derivation receipts.',
    'features.solver_desc': 'A multi-phase C++17 solver featuring lock-free bucketed Gaussian elimination in RREF, CryptoMiniSat CDCL hybrid integration, and Möller-Stetter quotient diagonalisation.',
    'features.deck_desc': 'Interactive executive presentation examining intent vs. context, Colang rule compilation, algebraic contradiction certificates, and sub-threshold OR-bypass resolution.',
    'features.learn_more': 'Explore Details',

    // Home Page Sections
    'home.tactical': 'ALGEBRAIC VERIFICATION BENCHMARKS',
    'home.tactical_desc': 'Real-world regulatory policies and industrial netlists decided through deterministic finite field elimination.',
    'home.case01': 'FCA Consumer Duty Advice Guardrail (410 Variables)',
    'home.case02': 'Middle-Office Trade Booking Dispatch Gate',
    'home.case03': 'Multi-Step Velocity Chain State Lookback ($prev.v)',
    'home.secure': 'VERIFY YOUR AI GUARDRAILS WITH MATHEMATICAL PROOF',
    'home.secure_desc': 'Move beyond sampling-based testing. Submit your Colang policies and MCP tool definitions for formal algebraic certification.',

    // Footer
    'footer.description': 'A C++17 framework for formal verification over GF(2). Proving what an AI agent cannot do.',
    'footer.products': 'Solutions',
    'footer.company': 'Company',
    'footer.rights': '© 2026 Stalwart Holdings Ltd. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // About
    'about.title': 'ABOUT QUASILINEARSOLVER',
    'about.subtitle': 'Stalwart Holdings Ltd is a UK-based research and development firm specializing in formal verification over the binary field GF(2), AI guardrail safety, and algebraic netlist verification.',
    'about.academic': 'Academic Foundations',
    'about.academic_desc': 'Our technology is rooted in rigorous mathematical research in finite field algebra, automated theorem proving, and quadratic constraint resolution over GF(2). We transform Boolean constraints into sparse polynomial systems, deciding satisfiability through evolutionary rank augmentation.',
    'about.who_we_are': 'Who We Are',
    'about.who_we_are_desc': 'We bridge the gap between applied computer science, formal methods, and high-assurance AI systems. Our engineering team develops ultra-low-latency C++17 algebraic solvers that provide mathematically verifiable guarantees for mission-critical software.',
    'about.strategy': 'Our Strategy',
    'about.strategy_desc': 'We focus on "Verification at Scale." By replacing probabilistic runtime samplers with deterministic algebraic refutations, we enable enterprise teams to certify AI agent boundaries and cryptographic circuits with total mathematical certainty.',
    'about.how_we_operate': 'How We Operate',
    'about.how_we_operate_desc': 'We compile high-level guardrail frameworks like NVIDIA NeMo Guardrails (Colang) into structured GF(2) polynomial systems. When a bypass is impossible, we deliver an independent, self-contained UNSAT certificate that third-party auditors can replay in a single page of script.',
    'about.innovation_focus': 'Innovation Focus',
    'about.innovation_focus_desc': 'Our core research spans lock-free reduced row echelon form (RREF) cascade elimination, degree-3 border basis prolongation, and automated Semantic Disruption Score (SDS) patch synthesis to repair vulnerable AI flows automatically.',
    'about.mission': 'Our Mission',
    'about.mission_desc': 'To provide enterprises and high-assurance institutions with the most rigorous, verifiable, and mathematically sound formal verification engine in the world.',

    // Contact
    'contact.title': 'CONTACT US',
    'contact.subtitle': 'Ready to formally verify your AI guardrails or evaluate the GF(2) solver engine? Contact our research team for technical briefings and formal verification reports.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.message': 'Brief Message',
    'contact.send': 'Send Message',
  },
  pt: {
    // Nav
    'nav.guardrails': 'Verificação de Guardrails de IA',
    'nav.solver': 'Solver GF2',
    'nav.deck': 'Deck de Apresentação Técnica',
    'nav.about': 'Sobre Nós',
    'nav.contact': 'Contato',
    'nav.products': 'Soluções',

    // Hero
    'hero.badge': 'VERIFICAÇÃO FORMAL EM GF(2)',
    'hero.title': 'Quasilinearsolver',
    'hero.subtitle': 'Um framework C++17 para verificação formal sobre o corpo binário. Provando o que um agente de IA não pode fazer através de compilação algébrica de guardrails e análise de circuitos EDA.',
    'hero.explore': 'Explorar Guardrails de IA',
    'hero.contact': 'Solicitar Briefing',
    'hero.stat_field': 'Sistema de Prova',
    'hero.stat_field_val': 'Álgebra GF(2)',
    'hero.stat_coverage': 'Cobertura de Contexto',
    'hero.stat_coverage_val': 'Todos os 2^N Estados',
    'hero.stat_receipt': 'Verificação',
    'hero.stat_receipt_val': 'DAG Reprodutível',
    'hero.stat_engine': 'Motor Principal',
    'hero.stat_engine_val': 'C++17 Multifase',

    // Features Section
    'features.title': 'GARANTIA FORMAL PARA IA CORPORATIVA E CIRCUITOS',
    'features.subtitle': 'Testes apenas amostram. Modelos de linguagem predizem tokens prováveis. O Quasilinearsolver decide a alcançabilidade algebricamente, provando matematicamente que ações protegidas não podem disparar sem pré-condições.',
    'features.guardrails_desc': 'Compila regras Colang do NeMo Guardrails em sistemas quasilineares GF(2). Prova que pré-condições de segurança se mantêm em todos os 2^N estados e emite recibos de derivação reproduzíveis.',
    'features.solver_desc': 'Um solver C++17 multifase com eliminação gaussiana em RREF lock-free em baldes, integração híbrida CryptoMiniSat CDCL e diagonalização de quociente de Möller-Stetter.',
    'features.deck_desc': 'Apresentação executiva interativa examinando intenção vs. contexto, compilação de regras Colang, certificados algébricos de contradição e resolução de bypass OR sub-limiar.',
    'features.learn_more': 'Explorar Detalhes',

    // Home Page Sections
    'home.tactical': 'BENCHMARKS DE VERIFICAÇÃO ALGÉBRICA',
    'home.tactical_desc': 'Políticas regulatórias reais e netlists industriais decididos através de eliminação determinística em corpos finitos.',
    'home.case01': 'Guardrail de Conselho FCA Consumer Duty (410 Variáveis)',
    'home.case02': 'Gate de Despacho de Trade Booking de Middle-Office',
    'home.case03': 'Cadeia de Velocidade Multi-Etapas com Lookback ($prev.v)',
    'home.secure': 'VERIFIQUE SEUS GUARDRAILS DE IA COM PROVA MATEMÁTICA',
    'home.secure_desc': 'Vá além dos testes baseados em amostragem. Envie suas políticas Colang e definições de ferramentas MCP para certificação algébrica formal.',

    // Footer
    'footer.description': 'Um framework C++17 para verificação formal sobre GF(2). Provando o que um agente de IA não pode fazer.',
    'footer.products': 'Soluções',
    'footer.company': 'Empresa',
    'footer.rights': '© 2026 Stalwart Holdings Ltd. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',

    // About
    'about.title': 'SOBRE O QUASILINEARSOLVER',
    'about.subtitle': 'A Stalwart Holdings Ltd é uma empresa de pesquisa e desenvolvimento sediada no Reino Unido, especializada em verificação formal sobre o corpo binário GF(2), segurança de guardrails de IA e verificação algébrica de netlists.',
    'about.academic': 'Fundações Acadêmicas',
    'about.academic_desc': 'Nossa tecnologia está enraizada em pesquisa matemática rigorosa em álgebra de corpos finitos, prova automática de teoremas e resolução de restrições quadráticas sobre GF(2). Transformamos restrições booleanas em sistemas polinomiais esparsos, decidindo a satisfatibilidade através de aumento de rank evolucionário.',
    'about.who_we_are': 'Quem Somos',
    'about.who_we_are_desc': 'Unimos a lacuna entre ciência da computação aplicada, métodos formais e sistemas de IA de alta segurança. Nossa equipe de engenharia desenvolve solvers algébricos C++17 de ultrabaixa latência que fornecem garantias matematicamente verificáveis para software de missão crítica.',
    'about.strategy': 'Nossa Estratégia',
    'about.strategy_desc': 'Focamos na "Verificação em Escala". Ao substituir amostradores probabilísticos de tempo de execução por refutações algébricas determinísticas, capacitamos equipes corporativas a certificar limites de agentes de IA e circuitos criptográficos com certeza matemática total.',
    'about.how_we_operate': 'Como Operamos',
    'about.how_we_operate_desc': 'Compilamos frameworks de guardrails de alto nível como o NVIDIA NeMo Guardrails (Colang) em sistemas polinomiais GF(2) estruturados. Quando um bypass é impossível, entregamos um certificado UNSAT independente e autocontido que auditores externos podem reproduzir em uma única página de script.',
    'about.innovation_focus': 'Foco em Inovação',
    'about.innovation_focus_desc': 'Nossa pesquisa principal abrange eliminação em cascata em forma escalonada reduzida por linhas (RREF) lock-free, prolongamento de base de borda de grau 3 e síntese de patches automatizada com Pontuação de Disrupção Semântica (SDS).',
    'about.mission': 'Nossa Missão',
    'about.mission_desc': 'Fornecer a empresas e instituições de alta segurança o motor de verificação formal mais rigoroso, verificável e matematicamente sólido do mundo.',

    // Contact
    'contact.title': 'CONTATE-NOS',
    'contact.subtitle': 'Pronto para verificar formalmente seus guardrails de IA ou avaliar o motor do solver GF(2)? Entre em contato com nossa equipe de pesquisa para briefings técnicos e relatórios de verificação formal.',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.message': 'Mensagem Breve',
    'contact.send': 'Enviar Mensagem',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('quasilinearsolver_lang');
    return (saved === 'pt' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('quasilinearsolver_lang', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
