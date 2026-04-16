import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.sensor': 'Skyvantage Sensor',
    'nav.solver': 'GF2 Solver',
    'nav.guidance': 'Guidance Logic',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'hero.badge': 'Software-Defined Defence',
    'hero.title': 'Skyvantage',
    'hero.subtitle': 'Asymmetric Counter-UAS and Guidance Logic. Redefining aerial defence through high-fidelity software brains.',
    'hero.explore': 'Explore Products',
    'hero.contact': 'Contact Us',
    'features.title': 'THE SKYVANTAGE PRODUCT LINE',
    'features.subtitle': "We aren't building a better drone. We are building a cheaper brain. Defence at scale through asymmetric unit economics.",
    'footer.description': 'Asymmetric Counter-UAS and Guidance Logic. Redefining the limits of aerial defence through software-defined innovation.',
    'footer.products': 'Products',
    'footer.company': 'Company',
    'footer.rights': '© 2026 Stalwart Holdings. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'about.title': 'ABOUT SKYVANTAGE',
    'about.subtitle': 'Skyvantage is at the forefront of software-defined defence. We specialise in creating asymmetric advantages through algorithmic innovation, transforming standard hardware into precision-guided systems.',
    'about.academic': 'Academic Foundation',
    'about.academic_desc': 'Our technology is rooted in rigorous academic research and mathematical validation. We collaborate with leading institutions to ensure our algorithms are at the cutting edge of RF physics and cryptanalysis.',
    'about.vision': 'Strategic Vision',
    'about.vision_desc': 'We believe in "Defence at Scale." By reducing the cost of interception to the absolute floor, we enable symmetric responses to massed asymmetric threats.',
    'about.mission': 'Our Mission',
    'about.mission_desc': 'To provide allied forces with the most cost-effective, adaptable, and lethal software-defined defence systems in the world. We are redefining the unit economics of modern warfare through the Skyvantage platform.',
    'contact.title': 'CONTACT US',
    'contact.subtitle': 'Have questions about our software-defined defence solutions? Our team is ready to provide technical briefings and TRL4 validation reports.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Brief Message',
    'contact.send': 'Send Message',
    'sensor.title': 'SKYVANTAGE SENSOR',
    'sensor.subtitle': 'Universal Software Defined Terminal Guidance Sensor Suite for High Speed Counter UAS. A completely self-contained edge compute module for seamless integration.',
    'sensor.cost': 'Unit Cost',
    'sensor.speed': 'Tracking Speed',
    'solver.title': 'GF2 SOLVER',
    'solver.subtitle': 'Proprietary quasilinear solver for heavy NP-Complete applications. Optimised for structurally dense unique promise satisfiability problems.',
    'guidance.title': 'SKYVANTAGE LOGIC',
    'guidance.subtitle': 'Software-defined terminal guidance that transforms any allied drone into a precision kinetic weapon. Independent of GNSS and optical sensors.'
  },
  pt: {
    'nav.sensor': 'Sensor Skyvantage',
    'nav.solver': 'Solver GF2',
    'nav.guidance': 'Lógica de Orientação',
    'nav.about': 'Sobre Nós',
    'nav.contact': 'Contato',
    'hero.badge': 'Defesa Definida por Software',
    'hero.title': 'Skyvantage',
    'hero.subtitle': 'Contra-UAS Assimétrico e Lógica de Orientação. Redefinindo a defesa aérea através de cérebros de software de alta fidelidade.',
    'hero.explore': 'Explorar Produtos',
    'hero.contact': 'Contate-nos',
    'features.title': 'A LINHA DE PRODUTOS SKYVANTAGE',
    'features.subtitle': 'Não estamos construindo um drone melhor. Estamos construindo um cérebro mais barato. Defesa em escala através de economia unitária assimétrica.',
    'footer.description': 'Contra-UAS Assimétrico e Lógica de Orientação. Redefinindo os limites da defesa aérea através da inovação definida por software.',
    'footer.products': 'Produtos',
    'footer.company': 'Empresa',
    'footer.rights': '© 2026 Stalwart Holdings. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'about.title': 'SOBRE A SKYVANTAGE',
    'about.subtitle': 'A Skyvantage está na vanguarda da defesa definida por software. Especializamo-nos em criar vantagens assimétricas através de inovação algorítmica, transformando hardware padrão em sistemas guiados de precisão.',
    'about.academic': 'Fundação Acadêmica',
    'about.academic_desc': 'Nossa tecnologia está enraizada em pesquisa acadêmica rigorosa e validação matemática. Colaboramos com instituições líderes para garantir que nossos algoritmos estejam na vanguarda da física de RF e criptoanálise.',
    'about.vision': 'Visão Estratégica',
    'about.vision_desc': 'Acreditamos na "Defesa em Escala". Ao reduzir o custo de interceptação ao mínimo absoluto, permitimos respostas simétricas a ameaças assimétricas em massa.',
    'about.mission': 'Nossa Missão',
    'about.mission_desc': 'Fornecer às forças aliadas os sistemas de defesa definidos por software mais econômicos, adaptáveis e letais do mundo. Estamos redefinindo a economia unitária da guerra moderna através da plataforma Skyvantage.',
    'contact.title': 'CONTATE-NOS',
    'contact.subtitle': 'Tem perguntas sobre nossas soluções de defesa definidas por software? Nossa equipe está pronta para fornecer briefings técnicos e relatórios de validação TRL4.',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.message': 'Mensagem Breve',
    'contact.send': 'Enviar Mensagem',
    'sensor.title': 'SENSOR SKYVANTAGE',
    'sensor.subtitle': 'Conjunto de Sensores de Orientação Terminal Definido por Software Universal para Contra-UAS de Alta Velocidade. Um módulo de computação de borda completamente autônomo para integração perfeita.',
    'sensor.cost': 'Custo Unitário',
    'sensor.speed': 'Velocidade de Rastreamento',
    'solver.title': 'SOLVER GF2',
    'solver.subtitle': 'Solver quasilinear proprietário para aplicações NP-Completas pesadas. Otimizado para problemas de satisfatibilidade de promessa única estruturalmente densos.',
    'guidance.title': 'LÓGICA SKYVANTAGE',
    'guidance.subtitle': 'Orientação terminal definida por software que transforma qualquer drone aliado em uma arma cinética de precisão. Independente de GNSS e sensores ópticos.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

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
