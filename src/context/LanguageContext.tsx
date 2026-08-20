import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand & Header
    'brand.company': 'Stalwart Technologies',
    'brand.product': 'Quasilinear',
    'brand.tagline': 'Formal AI Guardrail & Netlist Verification Engine',

    // Nav
    'nav.guardrails': 'AI Guardrail Verification',
    'nav.solver': 'GF2 Solver',
    'nav.docs': 'Product Documentation',
    'nav.deck': 'Technical Briefing Deck',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.products': 'Solutions',

    // Hero
    'hero.badge': 'FORMAL VERIFICATION OVER GF(2)',
    'hero.title': 'Quasilinear',
    'hero.subtitle': 'A C++ framework for formal verification over the binary field. Proving what an AI agent cannot do through algebraic guardrail compilation and EDA circuit analysis.',
    'hero.explore': 'Explore AI Guardrails',
    'hero.contact': 'Request Briefing',
    'hero.stat_field': 'Proof System',
    'hero.stat_field_val': 'GF(2) Algebra',
    'hero.stat_coverage': 'Context Coverage',
    'hero.stat_coverage_val': 'All 2^N States',
    'hero.stat_receipt': 'Verification',
    'hero.stat_receipt_val': 'Replayable DAG',
    'hero.stat_engine': 'Core Engine',
    'hero.stat_engine_val': 'C++ Multi-Phase',

    // Features Section
    'features.title': 'FORMAL ASSURANCE FOR ENTERPRISE AI & CIRCUITS',
    'features.subtitle': 'Testing samples. Language models predict likely tokens. Quasilinear algebraically decides reachability, proving mathematically that protected actions cannot fire without preconditions.',
    'features.guardrails_desc': 'Compiles NeMo Guardrails Colang rules into structured GF(2) polynomial systems. Proves safety preconditions hold across all 2^N context states and emits replayable derivation receipts.',
    'features.solver_desc': 'A multi-phase C++ solver featuring lock-free bucketed Gaussian elimination in RREF, CryptoMiniSat CDCL hybrid integration, and Möller-Stetter quotient diagonalisation.',
    'features.deck_desc': 'Interactive executive presentation examining intent vs. context, Colang rule compilation, algebraic contradiction certificates, and sub-threshold OR-bypass resolution.',
    'features.learn_more': 'Explore Details',

    // GF2 Solver Page & Applications
    'solver.title': 'GF2 Solver',
    'solver.badge': 'C++ ALGEBRAIC RESOLUTION FRAMEWORK',
    'solver.subtitle': 'A high-performance C++ framework for formal verification over the binary field GF(2). Translating Boolean netlists into sparse quadratic polynomial systems and deciding them with mathematical refutation certificates.',
    'solver.pipeline_title': 'The 5-Stage Hybrid Pipeline',
    'solver.pipeline_desc': 'The solver executes a deterministic sequence of phases, individually configurable via --config JSON parameters.',
    'solver.apps_title': 'Industrial & Cryptographic Applications',
    'solver.apps_badge': 'CORE VERIFICATION SUITES',
    
    // Explicit 4 Applications (including EDA Circuit Testing and Diffuse SAT Solving)
    'app.eda_title': 'EDA Circuit Testing',
    'app.eda_sub': 'Gate-Level Netlist Verification',
    'app.eda_desc': 'Deciding industrial Boolean circuits (AND, XOR, INV gate netlists) at massive scale, verifying gate equivalences and structural invariant safety with sub-cubic cascade scaling.',
    
    'app.diffuse_title': 'Diffuse SAT Solving',
    'app.diffuse_sub': 'Dense Non-Local Constraint Resolution',
    'app.diffuse_desc': 'Solving highly diffuse, dense 3-SAT instances and algebraic systems where standard DPLL/CDCL solvers thrash due to non-local clause diffusion, resolved via evolutionary rank augmentation.',
    
    'app.guardrails_title': 'AI Guardrail Formal Verification',
    'app.guardrails_sub': 'NeMo Guardrails & Colang Compilation',
    'app.guardrails_desc': 'Compiling Colang policies into GF(2) polynomial equations and proving algebraically that protected bot actions or tool calls cannot fire without requisite safety context assertions.',
    
    'app.enumeration_title': 'Complete Context Enumeration',
    'app.enumeration_sub': 'Quotient Ring Möller–Stetter Decomposition',
    'app.enumeration_desc': 'Splitting finite-dimensional quotient algebras into exact eigenspaces to enumerate every valid bypass context and mathematically prove that no other bypass exists.',

    // Hybrid CDCL Section
    'hybrid.badge': 'HYBRID CDCL ALGEBRAIC ENGINE',
    'hybrid.title': 'CryptoMiniSat CDCL + Lock-Free Gaussian Elimination',
    'hybrid.desc': 'Our engine combines CryptoMiniSat CDCL with lock-free Gaussian elimination in reduced row echelon form (RREF) over GF(2). Under a bounded conflict budget, the CDCL engine extracts Level-0 implied units and learned XOR equivalence relations, injecting them directly into the algebraic netlist to accelerate rank growth before linear and quadratic cascade elimination.',
    'hybrid.p1': 'Fast Bounded CDCL seeds the polynomial basis with short learned constraints without getting trapped in exponential clause explosions.',
    'hybrid.p2': 'Lock-free CAS pivot claiming allows multiple worker threads to reduce sparse polynomial rows concurrently without mutex contention.',

    // Product Documentation Section
    'docs.badge': 'PRODUCT ARCHITECTURE & SPECIFICATION',
    'docs.title': 'Product Documentation',
    'docs.subtitle': 'Comprehensive technical specifications covering how Quasilinear transforms high-level policies into verified algebraic proofs.',
    'docs.mod1_title': 'Circuit → Algebra',
    'docs.mod1_sub': 'Policy & Netlist Translation',
    'docs.mod1_desc': 'Translating Colang guardrails, MCP tool specs, and Boolean netlists (Bristol format) into sparse polynomial systems of quadratic equations over GF(2).',
    'docs.mod2_title': 'Multi-Stage Pipeline',
    'docs.mod2_sub': '5-Phase Hybrid Solver',
    'docs.mod2_desc': 'The C++ pipeline combines bounded CDCL, linear constraint expansion, lock-free RREF cascade Gaussian elimination, degree-3 border basis prolongation, and condensation with fast exhaustive search.',
    'docs.mod3_title': 'Verdicts & Certificates',
    'docs.mod3_sub': 'Deterministic Soundness Receipts',
    'docs.mod3_desc': 'Emitting self-contained post-order DAG UNSAT derivation receipts (replayable in a 1-page script without solver binaries) or exact SAT counterexample execution traces.',
    'docs.mod4_title': 'AI Guardrail Verification',
    'docs.mod4_sub': 'Mathematical Safety Assurance',
    'docs.mod4_desc': 'Proving algebraically that protected bot actions and MCP tool dispatch calls cannot trigger without prerequisite safety context assertions across all 2^N states, with automated SDS patch synthesis.',

    // Home Page Sections
    'home.tactical': 'ALGEBRAIC VERIFICATION BENCHMARKS',
    'home.tactical_desc': 'Real-world regulatory policies, tool dispatch gates, and netlists decided through deterministic finite field elimination.',
    'home.case01': 'FCA Consumer Duty Advice Guardrail (410 Variables)',
    'home.case02': 'Middle-Office Trade Booking Dispatch Gate',
    'home.case03': 'Multi-Step Velocity Chain State Lookback ($prev.v)',
    'home.secure': 'VERIFY YOUR AI GUARDRAILS WITH MATHEMATICAL PROOF',
    'home.secure_desc': 'Move beyond sampling-based testing. Submit your Colang policies and MCP tool definitions for formal algebraic certification by Stalwart Technologies.',

    // Footer & Company Details
    'footer.company_name': 'Stalwart Technologies',
    'footer.description': 'A C++ framework for formal verification over GF(2). Proving what an AI agent cannot do.',
    'footer.products': 'Solutions',
    'footer.company': 'Company',
    'footer.rights': '© 2026 Stalwart Technologies. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.address': 'Ceme Campus, Marsh Way, Rainham, England, RM13 8EU',
    'footer.phone': '02035760737',
    'footer.email': 'crm@stalwart.vg',

    // About
    'about.title': 'ABOUT STALWART TECHNOLOGIES',
    'about.subtitle': 'Stalwart Technologies is a UK-based research and development firm specializing in formal verification over the binary field GF(2), AI guardrail safety, and algebraic netlist verification.',
    'about.academic': 'Academic Foundations',
    'about.academic_desc': 'Our technology is rooted in rigorous mathematical research in finite field algebra, automated theorem proving, and quadratic constraint resolution over GF(2). We transform Boolean constraints into sparse polynomial systems, deciding satisfiability through evolutionary rank augmentation.',
    'about.who_we_are': 'Who We Are',
    'about.who_we_are_desc': 'We bridge the gap between applied computer science, formal methods, and high-assurance AI systems. Our engineering team develops ultra-low-latency C++ algebraic solvers that provide mathematically verifiable guarantees for mission-critical software.',
    'about.strategy': 'Our Strategy',
    'about.strategy_desc': 'We focus on "Verification at Scale." By replacing probabilistic runtime samplers with deterministic algebraic refutations, we enable enterprise teams to certify AI agent boundaries and cryptographic circuits with total mathematical certainty.',
    'about.how_we_operate': 'How We Operate',
    'about.how_we_operate_desc': 'We compile high-level guardrail frameworks like NVIDIA NeMo Guardrails (Colang) into structured GF(2) polynomial systems. When a bypass is impossible, we deliver an independent, self-contained UNSAT certificate that third-party auditors can replay in a single page of script.',
    'about.innovation_focus': 'Innovation Focus',
    'about.innovation_focus_desc': 'Our core research spans lock-free reduced row echelon form (RREF) cascade elimination, degree-3 border basis prolongation, and automated Semantic Disruption Score (SDS) patch synthesis to repair vulnerable AI flows automatically.',
    'about.mission': 'Our Mission',
    'about.mission_desc': 'To provide enterprises and high-assurance institutions with the most rigorous, verifiable, and mathematically sound formal verification engine in the world.',

    // Contact
    'contact.title': 'CONTACT STALWART TECHNOLOGIES',
    'contact.subtitle': 'Ready to formally verify your AI guardrails or evaluate the Quasilinear engine? Contact our research team for technical briefings and verification engagements.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.message': 'Brief Message',
    'contact.send': 'Send Message',
  },
  pt: {
    // Brand & Header
    'brand.company': 'Stalwart Technologies',
    'brand.product': 'Quasilinear',
    'brand.tagline': 'Motor de Verificação Formal de Guardrails de IA e Netlists',

    // Nav
    'nav.guardrails': 'Verificação de Guardrails de IA',
    'nav.solver': 'Solver GF2',
    'nav.docs': 'Documentação do Produto',
    'nav.deck': 'Deck de Apresentação Técnica',
    'nav.about': 'Sobre Nós',
    'nav.contact': 'Contato',
    'nav.products': 'Soluções',

    // Hero
    'hero.badge': 'VERIFICAÇÃO FORMAL EM GF(2)',
    'hero.title': 'Quasilinear',
    'hero.subtitle': 'Um framework C++ para verificação formal sobre o corpo binário. Provando o que um agente de IA não pode fazer através de compilação algébrica de guardrails e análise de circuitos EDA.',
    'hero.explore': 'Explorar Guardrails de IA',
    'hero.contact': 'Solicitar Briefing',
    'hero.stat_field': 'Sistema de Prova',
    'hero.stat_field_val': 'Álgebra GF(2)',
    'hero.stat_coverage': 'Cobertura de Contexto',
    'hero.stat_coverage_val': 'Todos os 2^N Estados',
    'hero.stat_receipt': 'Verificação',
    'hero.stat_receipt_val': 'DAG Reprodutível',
    'hero.stat_engine': 'Motor Principal',
    'hero.stat_engine_val': 'C++ Multifase',

    // Features Section
    'features.title': 'GARANTIA FORMAL PARA IA CORPORATIVA E CIRCUITOS',
    'features.subtitle': 'Testes apenas amostram. Modelos de linguagem predizem tokens prováveis. O Quasilinear decide a alcançabilidade algebricamente, provando matematicamente que ações protegidas não podem disparar sem pré-condições.',
    'features.guardrails_desc': 'Compila regras Colang do NeMo Guardrails em sistemas polinomiais estruturados em GF(2). Prova que pré-condições de segurança se mantêm em todos os 2^N estados e emite recibos de derivação reproduzíveis.',
    'features.solver_desc': 'Um solver C++ multifase com eliminação gaussiana em RREF lock-free em baldes, integração híbrida CryptoMiniSat CDCL e diagonalização de quociente de Möller-Stetter.',
    'features.deck_desc': 'Apresentação executiva interativa examinando intenção vs. contexto, compilação de regras Colang, certificados algébricos de contradição e resolução de bypass OR sub-limiar.',
    'features.learn_more': 'Explorar Detalhes',

    // GF2 Solver Page & Applications
    'solver.title': 'Solver GF2',
    'solver.badge': 'FRAMEWORK DE RESOLUÇÃO ALGÉBRICA EM C++',
    'solver.subtitle': 'Um framework C++ de alto desempenho para verificação formal sobre o corpo binário GF(2). Traduzindo netlists booleanos em sistemas polinomiais quadráticos esparsos e decidindo-os com certificados matemáticos de refutação.',
    'solver.pipeline_title': 'O Pipeline Híbrido de 5 Fases',
    'solver.pipeline_desc': 'O solver executa uma sequência determinística de fases, configuráveis individualmente via parâmetros JSON --config.',
    'solver.apps_title': 'Aplicações Industriais e Criptográficas',
    'solver.apps_badge': 'SUÍTES PRINCIPAIS DE VERIFICAÇÃO',

    // Explicit 4 Applications (including EDA Circuit Testing and Diffuse SAT Solving)
    'app.eda_title': 'Teste de Circuitos EDA',
    'app.eda_sub': 'Verificação de Netlists a Nível de Portas',
    'app.eda_desc': 'Decisão de circuitos booleanos industriais (netlists de portas AND, XOR, INV) em escala massiva, verificando equivalências e invariantes estruturais com escalabilidade subcúbica.',
    
    'app.diffuse_title': 'Resolução SAT Difusa',
    'app.diffuse_sub': 'Resolução de Restrições Densas Não-Locais',
    'app.diffuse_desc': 'Resolução de instâncias densas e altamente difusas de 3-SAT e sistemas algébricos onde solvers DPLL/CDCL padrão falham devido à difusão de cláusulas não-locais, resolvidas por rank evolucionário.',
    
    'app.guardrails_title': 'Verificação Formal de Guardrails de IA',
    'app.guardrails_sub': 'Compilação de NeMo Guardrails e Colang',
    'app.guardrails_desc': 'Compilação de políticas Colang em equações polinomiais GF(2), provando algebricamente que ações protegidas de bots ou chamadas de ferramentas não disparam sem contexto de segurança.',
    
    'app.enumeration_title': 'Enumeração Completa de Contextos',
    'app.enumeration_sub': 'Decomposição em Anel Quociente de Möller–Stetter',
    'app.enumeration_desc': 'Divisão de álgebras quocientes de dimensão finita em autoespaços exatos para enumerar cada contexto de bypass válido e provar matematicamente que nenhum outro contexto existe.',

    // Hybrid CDCL Section
    'hybrid.badge': 'MOTOR ALGÉBRICO HÍBRIDO CDCL',
    'hybrid.title': 'CryptoMiniSat CDCL + Eliminação Gaussiana Lock-Free',
    'hybrid.desc': 'Nosso motor combina CryptoMiniSat CDCL com eliminação gaussiana lock-free em forma escalonada reduzida por linhas (RREF) sobre GF(2). Sob um orçamento de conflito limitado, o motor CDCL extrai unidades implícitas de Nível-0 e relações de equivalência XOR aprendidas, injetando-as diretamente no netlist algébrico para acelerar o crescimento de rank antes da eliminação em cascata.',
    'hybrid.p1': 'O CDCL Bounded rápido alimenta a base polinomial com restrições aprendidas curtas sem sofrer com explosão exponencial de cláusulas.',
    'hybrid.p2': 'A reivindicação de pivô por CAS atômico lock-free permite que múltiplas threads de execução reduzam linhas polinomiais concorrentemente sem contenção de mutex.',

    // Product Documentation Section
    'docs.badge': 'ARQUITETURA E ESPECIFICAÇÃO DO PRODUTO',
    'docs.title': 'Documentação do Produto',
    'docs.subtitle': 'Especificações técnicas detalhadas cobrindo como o Quasilinear transforma políticas de alto nível em provas algébricas verificadas.',
    'docs.mod1_title': 'Circuito → Álgebra',
    'docs.mod1_sub': 'Tradução de Políticas e Netlists',
    'docs.mod1_desc': 'Tradução de guardrails Colang, especificações de ferramentas MCP e netlists booleanos (formato Bristol) em sistemas polinomiais esparsos de equações quadráticas sobre GF(2).',
    'docs.mod2_title': 'Pipeline Multifase',
    'docs.mod2_sub': 'Solver Híbrido de 5 Fases',
    'docs.mod2_desc': 'O pipeline C++ combina CDCL bounded, expansão linear, eliminação gaussiana lock-free em RREF, prolongamento de base de borda de grau 3 e condensação com busca exaustiva rápida.',
    'docs.mod3_title': 'Vereditos e Certificados',
    'docs.mod3_sub': 'Recibos de Correção Determinística',
    'docs.mod3_desc': 'Emissão de recibos de derivação DAG UNSAT autocontidos (reproduzíveis em script de 1 página sem o binário do solver) ou traços exatos de contra-exemplos SAT.',
    'docs.mod4_title': 'Verificação de Guardrails de IA',
    'docs.mod4_sub': 'Garantia Matemática de Segurança',
    'docs.mod4_desc': 'Provando algebricamente que ações de bot e chamadas de despacho MCP não disparam sem pré-condições em todos os 2^N estados, com síntese automática de patches com score SDS.',

    // Home Page Sections
    'home.tactical': 'BENCHMARKS DE VERIFICAÇÃO ALGÉBRICA',
    'home.tactical_desc': 'Políticas regulatórias reais, gates de ferramentas e netlists decididos através de eliminação determinística em corpos finitos.',
    'home.case01': 'Guardrail de Conselho FCA Consumer Duty (410 Variáveis)',
    'home.case02': 'Gate de Despacho de Trade Booking de Middle-Office',
    'home.case03': 'Cadeia de Velocidade Multi-Etapas com Lookback ($prev.v)',
    'home.secure': 'VERIFIQUE SEUS GUARDRAILS DE IA COM PROVA MATEMÁTICA',
    'home.secure_desc': 'Vá além dos testes baseados em amostragem. Envie suas políticas Colang e definições de ferramentas MCP para certificação algébrica formal pela Stalwart Technologies.',

    // Footer & Company Details
    'footer.company_name': 'Stalwart Technologies',
    'footer.description': 'Um framework C++ para verificação formal sobre GF(2). Provando o que um agente de IA não pode fazer.',
    'footer.products': 'Soluções',
    'footer.company': 'Empresa',
    'footer.rights': '© 2026 Stalwart Technologies. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.address': 'Ceme Campus, Marsh Way, Rainham, England, RM13 8EU',
    'footer.phone': '02035760737',
    'footer.email': 'crm@stalwart.vg',

    // About
    'about.title': 'SOBRE A STALWART TECHNOLOGIES',
    'about.subtitle': 'A Stalwart Technologies é uma empresa de pesquisa e desenvolvimento sediada no Reino Unido, especializada em verificação formal sobre o corpo binário GF(2), segurança de guardrails de IA e verificação algébrica de netlists.',
    'about.academic': 'Fundações Acadêmicas',
    'about.academic_desc': 'Nossa tecnologia está enraizada em pesquisa matemática rigorosa em álgebra de corpos finitos, prova automática de teoremas e resolução de restrições quadráticas sobre GF(2). Transformamos restrições booleanas em sistemas polinomiais esparsos, decidindo a satisfatibilidade através de aumento de rank evolucionário.',
    'about.who_we_are': 'Quem Somos',
    'about.who_we_are_desc': 'Unimos a lacuna entre ciência da computação aplicada, métodos formais e sistemas de IA de alta segurança. Nossa equipe de engenharia desenvolve solvers algébricos C++ de ultrabaixa latência que fornecem garantias matematicamente verificáveis para software de missão crítica.',
    'about.strategy': 'Nossa Estratégia',
    'about.strategy_desc': 'Focamos na "Verificação em Escala". Ao substituir amostradores probabilísticos de tempo de execução por refutações algébricas determinísticas, capacitamos equipes corporativas a certificar limites de agentes de IA e circuitos criptográficos com certeza matemática total.',
    'about.how_we_operate': 'Como Operamos',
    'about.how_we_operate_desc': 'Compilamos frameworks de guardrails de alto nível como o NVIDIA NeMo Guardrails (Colang) em sistemas polinomiais GF(2) estruturados. Quando um bypass é impossível, entregamos um certificado UNSAT independente e autocontido que auditores externos podem reproduzir em uma única página de script.',
    'about.innovation_focus': 'Foco em Inovação',
    'about.innovation_focus_desc': 'Nossa pesquisa principal abrange eliminação em cascata em forma escalonada reduzida por linhas (RREF) lock-free, prolongamento de base de borda de grau 3 e síntese de patches automatizada com Pontuação de Disrupção Semântica (SDS).',
    'about.mission': 'Nossa Missão',
    'about.mission_desc': 'Fornecer a empresas e instituições de alta segurança o motor de verificação formal mais rigoroso, verificável e matematicamente sólido do mundo.',

    // Contact
    'contact.title': 'CONTATE A STALWART TECHNOLOGIES',
    'contact.subtitle': 'Pronto para verificar formalmente seus guardrails de IA ou avaliar o motor Quasilinear? Entre em contato com nossa equipe de pesquisa para briefings técnicos e projetos de verificação.',
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
