import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { language } = useLanguage();
  const isPt = language === 'pt';

  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`w-full transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 bg-black p-4 sm:p-8 flex flex-col justify-center' : 'my-12'}`}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-white/90 border border-white/15">
              {isPt ? `SLIDE ${currentSlide + 1} DE ${totalSlides}` : `SLIDE ${currentSlide + 1} OF ${totalSlides}`}
            </span>
            <span className="hidden sm:inline text-xs font-sans text-white/50">
              {currentSlide === 0 && (isPt ? "Fiação do Guardrail" : "Wiring the Guardrail")}
              {currentSlide === 1 && (isPt ? "Colang vs Álgebra" : "Colang vs Algebra")}
              {currentSlide === 2 && (isPt ? "O Motor Algébrico" : "The Algebraic Engine")}
              {currentSlide === 3 && (isPt ? "Análise de Isenção Sub-limiar" : "Sub-threshold Exemption Analysis")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                    currentSlide === idx ? 'bg-white text-black shadow-sm' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors hidden sm:block"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Slide Canvas */}
        <div className="slide-container slide p-6 sm:p-10 md:p-12 relative overflow-hidden border border-[#D7DDE4] min-h-[520px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentSlide === 0 && (
              <motion.div
                key="slide-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full space-y-6"
              >
                <div>
                  <div className="deck-eyebrow">
                    {isPt ? "COMO O GUARDRAIL É CONECTADO" : "HOW THE RAIL IS WIRED"}
                  </div>
                  <h1 className="deck-h1">
                    {isPt 
                      ? "A intenção pode ser convencida de tudo. O contexto não. Ações precisam de um policial."
                      : "Intent can be talked into anything. Context cannot. Actions need a policeman."}
                  </h1>
                  <p className="deck-standfirst">
                    {isPt
                      ? "Três elementos estão em jogo. Eles não são do mesmo tipo."
                      : "Three things are in play. They are not the same kind of thing."}
                  </p>
                </div>

                {/* SVG Architecture Diagram */}
                <div className="stage w-full my-4 py-2">
                  <svg 
                    viewBox="0 0 300 86" 
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-auto max-h-[220px] block" 
                    role="img" 
                    aria-label="Intent and context feeding a gate rule that decides action"
                  >
                    <defs>
                      <marker id="a1r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L9,5 L0,9 z" fill="#A03E2F" />
                      </marker>
                      <marker id="a1g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L9,5 L0,9 z" fill="#2C6E49" />
                      </marker>
                      <marker id="a1b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L9,5 L0,9 z" fill="#1B4965" />
                      </marker>
                    </defs>

                    <rect x="0" y="2" width="92" height="28" rx="2.5" fill="#FFFFFF" stroke="#A03E2F" strokeWidth="0.8" />
                    <text className="lbl" x="7" y="12" fill="#A03E2F">{isPt ? "Intenção" : "Intent"}</text>
                    <text className="node" x="7" y="21" fill="#14181F">{isPt ? "O que foi pedido" : "What was asked"}</text>
                    <text className="tiny" x="7" y="27" fill="#A03E2F">{isPt ? "Manipulável" : "Manipulable"}</text>

                    <rect x="0" y="56" width="92" height="28" rx="2.5" fill="#FFFFFF" stroke="#2C6E49" strokeWidth="0.8" />
                    <text className="lbl" x="7" y="66" fill="#2C6E49">{isPt ? "Contexto" : "Context"}</text>
                    <text className="node" x="7" y="75" fill="#14181F">{isPt ? "O que seus sistemas sabem" : "What your systems know"}</text>
                    <text className="tiny" x="7" y="81" fill="#2C6E49">{isPt ? "Determinístico" : "Deterministic"}</text>

                    <path d="M94,16 L124,16 L124,39 L140,39" stroke="#A03E2F" strokeWidth="0.6" fill="none" markerEnd="url(#a1r)" />
                    <path d="M94,70 L124,70 L124,47 L140,47" stroke="#2C6E49" strokeWidth="0.6" fill="none" markerEnd="url(#a1g)" />

                    <rect x="142" y="29" width="68" height="28" rx="2.5" fill="#F2F5F8" stroke="#1B4965" strokeWidth="1" />
                    <text className="lbl" x="149" y="38" fill="#1B4965">{isPt ? "O Gate" : "The gate"}</text>
                    <text className="node" x="149" y="47" fill="#14181F">{isPt ? "Lê ambos" : "Reads both"}</text>
                    <text className="tiny" x="149" y="54" fill="#5B6674">{isPt ? "Uma regra escrita" : "A written rule"}</text>

                    <path d="M212,43 L228,43" stroke="#1B4965" strokeWidth="0.6" fill="none" markerEnd="url(#a1b)" />

                    <rect x="230" y="29" width="70" height="28" rx="2.5" fill="#FFFFFF" stroke="#1B4965" strokeWidth="0.8" />
                    <text className="lbl" x="237" y="38" fill="#1B4965">{isPt ? "Ação" : "Action"}</text>
                    <text className="node" x="237" y="47" fill="#14181F">{isPt ? "Executa ou recusa" : "Books, or refuses"}</text>
                    <text className="tiny" x="237" y="54" fill="#5B6674">{isPt ? "Nada mais" : "Nothing else"}</text>
                  </svg>
                </div>

                <p className="deck-kicker">
                  {isPt ? "Toda brecha tem a mesma forma.\u00A0" : "Every hole has the same shape.\u00A0"}
                  <span className="quiet">
                    {isPt 
                      ? "Uma intenção alcançável na frente de uma ação desprotegida."
                      : "A reachable intent, in front of an ungated action."}
                  </span>
                </p>

                <div className="deck-footer">
                  <span>
                    {isPt 
                      ? "O livro de regras é um arquivo. O modelo nunca o edita"
                      : "The rulebook is a file. The model never edits it"}
                  </span>
                  <span className="font-mono font-bold">1 / 4</span>
                </div>
              </motion.div>
            )}

            {currentSlide === 1 && (
              <motion.div
                key="slide-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full space-y-6"
              >
                <div>
                  <div className="deck-eyebrow">
                    {isPt ? "COMO O POLICIAL É CONSTRUÍDO" : "HOW THE POLICEMAN IS BUILT"}
                  </div>
                  <h1 className="deck-h1">
                    {isPt
                      ? "O policial é uma regra escrita. O solver prova que ela se mantém."
                      : "The policeman is a written rule. The solver is what proves it holds."}
                  </h1>
                  <p className="deck-standfirst">
                    {isPt
                      ? "A árvore de decisão de conformidade escrita para um solver ler. Uma regra, duas formas."
                      : "Your compliance officer’s decision tree, written so a solver can read it. One rule, twice."}
                  </p>
                </div>

                <div className="rosetta grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  <div className="deck-panel">
                    <h2>{isPt ? "Como o compliance declara" : "How your compliance officer says it"}</h2>
                    <p className="deck-plain">
                      <span className="deck-ask">
                        {isPt ? "Uma negociação só pode ser registrada" : "A trade may only be booked"}
                      </span>&nbsp;
                      {isPt ? "quando" : "when"}&nbsp;
                      <span className="deck-fact">
                        {isPt ? "um segundo aprovador tiver assinado" : "a second approver has signed off"}
                      </span>.&nbsp;
                      <span className="deck-stop">
                        {isPt ? "Caso contrário, recuse" : "Otherwise, refuse"}
                      </span>&nbsp;
                      {isPt ? "— e não diga mais nada." : "— and say nothing else."}
                    </p>

                    <ul className="deck-key">
                      <li>
                        <span className="deck-sw ask"></span>
                        <span><b>{isPt ? "Intenção" : "Intent"}</b> — {isPt ? "o que alguém pede." : "what someone wants done."}</span>
                      </li>
                      <li>
                        <span className="deck-sw fact"></span>
                        <span><b>{isPt ? "Contexto" : "Context"}</b> — {isPt ? "um fato dos seus sistemas, nunca da IA." : "a fact from your systems, never from the AI."}</span>
                      </li>
                      <li>
                        <span className="deck-sw stop"></span>
                        <span><b>{isPt ? "Ação" : "Action"}</b> — {isPt ? "o registro ou uma recusa fixa." : "the booking, or a fixed refusal."}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="deck-panel code-panel font-mono text-xs">
                    <h2>{isPt ? "Como o Colang expressa" : "How Colang says it"}</h2>
                    <pre className="deck-co leading-relaxed">
<span className="text-[#8A94A2]"># {isPt ? "o que alguém pode pedir" : "what someone may ask for"}</span>
define user <span className="deck-ask font-bold">request_trade_booking</span>
  "book this contract note"

<span className="text-[#8A94A2]"># {isPt ? "a regra em si" : "the rule itself"}</span>
define flow trade_booking_gate
  user <span className="deck-ask font-bold">request_trade_booking</span>

  if $<span className="deck-fact font-bold">four_eyes_approved</span>
    bot <span className="deck-ask font-bold">book_trade</span>
  else
    bot <span className="deck-stop font-bold">refuse_unapproved_booking</span>
                    </pre>
                  </div>
                </div>

                <p className="deck-kicker">
                  {isPt 
                    ? "Qualquer um pode escrever a regra. Provar que ela não pode ser contornada é a parte difícil.\u00A0" 
                    : "Anyone can write the rule. Proving it cannot be walked around is the hard part.\u00A0"}
                  <span className="quiet">
                    {isPt ? "O arquivo se torna álgebra. O gate é decidido matematicamente." : "The file becomes algebra. The gate is decided, not tested."}
                  </span>
                </p>

                <div className="deck-footer">
                  <span>
                    {isPt 
                      ? "Escrito em Colang — formato aberto da NVIDIA. O solver lê esse mesmo arquivo"
                      : "Written in Colang — NVIDIA’s open format, off the shelf. The solver reads that same file"}
                  </span>
                  <span className="font-mono font-bold">2 / 4</span>
                </div>
              </motion.div>
            )}

            {currentSlide === 2 && (
              <motion.div
                key="slide-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full space-y-6"
              >
                <div>
                  <div className="deck-eyebrow">
                    {isPt ? "O QUE O QUASILINEAR CONSTRUIU" : "WHAT QUASILINEAR HAS BUILT"}
                  </div>
                  <h1 className="deck-h1">
                    {isPt
                      ? "Todos os seus controles foram testados. Testar apenas amostra."
                      : "Every control you own was tested. Testing samples."}
                  </h1>
                  <p className="deck-standfirst">
                    {isPt
                      ? "Nosso motor lê o arquivo e decide todas as combinações de uma vez. Duas respostas retornam. Ambas são úteis."
                      : "Our engine reads that same file and decides every combination at once. Two answers come back. Both are useful."}
                  </p>
                </div>

                {/* SVG Engine Diagram */}
                <div className="stage w-full my-2">
                  <svg 
                    viewBox="0 0 300 101" 
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-auto max-h-[220px] block" 
                    role="img" 
                    aria-label="Rulebook enters engine returning proof of impossibility or exact breaking sequence"
                  >
                    <defs>
                      <marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L9,5 L0,9 z" fill="#5B6674" />
                      </marker>
                    </defs>

                    <rect x="0" y="28" width="50" height="26" rx="2.5" fill="#F2F5F8" stroke="#D7DDE4" strokeWidth="0.4" />
                    <text className="lbl" x="6" y="38" fill="#1B4965">{isPt ? "Regras" : "The rulebook"}</text>
                    <text className="sub" x="6" y="47" fill="#14181F">{isPt ? "Como escrito" : "As written"}</text>

                    <path d="M52,41 L66,41" stroke="#5B6674" strokeWidth="0.5" fill="none" markerEnd="url(#a2)" />

                    <rect x="68" y="22" width="54" height="38" rx="2.5" fill="#FFFFFF" stroke="#1B4965" strokeWidth="0.8" />
                    <text className="lbl" x="74" y="36" fill="#1B4965">{isPt ? "O Motor" : "The engine"}</text>
                    <text className="sub" x="74" y="46" fill="#14181F">{isPt ? "Uma questão," : "One question,"}</text>
                    <text className="sub" x="74" y="53" fill="#14181F">{isPt ? "todo caso" : "every case"}</text>

                    <path d="M124,34 L142,34 L142,16 L154,16" stroke="#2C6E49" strokeWidth="0.55" fill="none" markerEnd="url(#a2)" />
                    <path d="M124,48 L142,48 L142,62 L154,62" stroke="#A03E2F" strokeWidth="0.55" fill="none" markerEnd="url(#a2)" />

                    <rect x="156" y="2" width="144" height="30" rx="2.5" fill="#FFFFFF" stroke="#2C6E49" strokeWidth="0.8" />
                    <text className="lbl" x="163" y="14" fill="#2C6E49">{isPt ? "Não pode acontecer (UNSAT)" : "It cannot happen (UNSAT)"}</text>
                    <text className="sub" x="163" y="25" fill="#14181F">
                      {isPt ? "Impossível, com recibo auditável independente." : "Impossible, with a receipt your auditor re-checks."}
                    </text>

                    <rect x="156" y="44" width="144" height="53" rx="2.5" fill="#FFFFFF" stroke="#A03E2F" strokeWidth="0.8" />
                    <text className="lbl" x="163" y="56" fill="#A03E2F">{isPt ? "Como ocorre a brecha (SAT / Traço)" : "Here is how it breaks (SAT / Trace)"}</text>
                    <text className="sub" x="163" y="67" fill="#14181F">{isPt ? "A sequência exata de contexto que a aciona." : "The exact sequence that defeats it."}</text>
                    <text className="sub" x="163" y="76" fill="#14181F">{isPt ? "O controle ausente e a prova de que o patch fecha a brecha." : "The missing control, and a proof it closes the hole."}</text>
                    <text className="sub" x="163" y="88" fill="#A03E2F">{isPt ? "Ou todos os contextos de bypass, provados completos." : "Or every context that breaks it, proved complete."}</text>
                  </svg>
                </div>

                <div className="deck-footer">
                  <span>
                    {isPt
                      ? "Em tempo real: 8 de 10 obrigações provadas impossíveis · as 2 com brechas emitidas com o contexto exato"
                      : "Live: 8 of 10 obligations proved impossible · the 2 that break, each with the exact context that does it"}
                  </span>
                  <span className="font-mono font-bold">3 / 4</span>
                </div>
              </motion.div>
            )}

            {currentSlide === 3 && (
              <motion.div
                key="slide-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full space-y-6"
              >
                <div>
                  <div className="deck-eyebrow">
                    {isPt ? "O VALOR PARA A IA CORPORATIVA" : "WHAT THIS IS WORTH TO ENTERPRISE AI"}
                  </div>
                  <h1 className="deck-h1">
                    {isPt
                      ? "Abaixo do limite, o trade é registrado sozinho. Ninguém testa essa rota."
                      : "Below the threshold, the trade books itself. Nobody tests that route."}
                  </h1>
                  <p className="deck-standfirst">
                    {isPt
                      ? "Duas regras, cada uma correta individualmente, ambas executando a mesma ação. A isenção é a rota que o agente encontrará."
                      : "Two rules, each correct on its own page, both booking the same trade. The exemption is the one an agent will find."}
                  </p>
                </div>

                {/* SVG Sub-threshold Route Diagram */}
                <div className="stage w-full my-2">
                  <svg 
                    viewBox="0 0 300 78" 
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-auto max-h-[190px] block" 
                    role="img" 
                    aria-label="Two booking routes converging on the same action"
                  >
                    <defs>
                      <marker id="a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L9,5 L0,9 z" fill="#5B6674" />
                      </marker>
                      <marker id="a3r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L9,5 L0,9 z" fill="#A03E2F" />
                      </marker>
                    </defs>

                    <rect x="0" y="4" width="104" height="28" rx="2.5" fill="#F2F5F8" stroke="#D7DDE4" strokeWidth="0.4" />
                    <text className="lbl" x="6" y="13" fill="#1B4965">{isPt ? "Rota Padrão" : "Standard route"}</text>
                    <text className="sub" x="6" y="22" fill="#14181F">{isPt ? "Requer segundo aprovador" : "Requires a second approver"}</text>
                    <text className="code" x="6" y="29" fill="#2C6E49">if $four_eyes_approved</text>

                    <rect x="0" y="46" width="104" height="28" rx="2.5" fill="#FFFFFF" stroke="#A03E2F" strokeWidth="0.8" />
                    <text className="lbl" x="6" y="55" fill="#A03E2F">{isPt ? "Abaixo da Materialidade" : "Below materiality"}</text>
                    <text className="sub" x="6" y="64" fill="#14181F">{isPt ? "Checa apenas a contraparte" : "Checks the counterparty only"}</text>
                    <text className="code" x="6" y="71" fill="#A03E2F">if $counterparty_resolved</text>

                    <path d="M106,18 L134,18 L134,34 L150,34" stroke="#5B6674" strokeWidth="0.5" fill="none" markerEnd="url(#a3)" />
                    <path d="M106,60 L134,60 L134,44 L150,44" stroke="#A03E2F" strokeWidth="0.6" fill="none" markerEnd="url(#a3r)" />

                    <rect x="152" y="26" width="60" height="26" rx="2.5" fill="#FFFFFF" stroke="#1B4965" strokeWidth="0.9" />
                    <text className="lbl" x="158" y="35" fill="#1B4965">{isPt ? "Uma ação" : "One action"}</text>
                    <text className="node" x="158" y="45" fill="#14181F">book_trade</text>

                    <path d="M214,39 L230,39" stroke="#A03E2F" strokeWidth="0.6" fill="none" markerEnd="url(#a3r)" />

                    <rect x="232" y="24" width="68" height="30" rx="2.5" fill="#FFFFFF" stroke="#A03E2F" strokeWidth="0.8" />
                    <text className="lbl" x="238" y="36" fill="#A03E2F">{isPt ? "Posição criada" : "Position created"}</text>
                    <text className="tiny" x="238" y="46" fill="#14181F">{isPt ? "Sem segundo aprovador." : "No second approver."}</text>

                    <text className="tiny" x="152" y="70" fill="#5B6674">
                      {isPt ? "Duas regras em uma ação combinam como OR." : "Two guards on one action combine as OR."}
                    </text>
                    <text className="tiny" x="152" y="77" fill="#5B6674">
                      {isPt ? "A rota mais fraca decide." : "The weaker route decides."}
                    </text>
                  </svg>
                </div>

                <div className="compare deck-compare">
                  <div>
                    <dt>{isPt ? "Controle de Acesso a Ferramentas" : "Tool access control"}</dt>
                    <dd>{isPt ? "Quem pode chamar." : "Who may call it."}</dd>
                  </div>
                  <div>
                    <dt>{isPt ? "Observabilidade e Logs" : "Observability & Insights"}</dt>
                    <dd>{isPt ? "O que aconteceu." : "What happened."}</dd>
                  </div>
                  <div className="mine">
                    <dt>Quasilinear</dt>
                    <dd>{isPt ? "O que não pode acontecer." : "What cannot happen."}</dd>
                  </div>
                </div>

                <div className="deck-footer">
                  <span>
                    <strong>{isPt ? "O entregável:" : "The deliverable:"}</strong>&nbsp;
                    {isPt 
                      ? "Entrada de esquemas de ferramentas e políticas Colang. Retornamos um livro de regras certificado provando que aquele caminho não dispara sem os devidos controles."
                      : "Input tool schemas and Colang policies. We return a certified rulebook proving that path cannot fire without its controls."}
                  </span>
                  <span className="font-mono font-bold">4 / 4</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Interactive Quick Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {[
            { 
              title: isPt ? "1. A Fiação do Rail" : "1. The Rail Wiring", 
              subtitle: isPt ? "Intenção vs Contexto vs Gate" : "Intent vs Context vs Gate" 
            },
            { 
              title: isPt ? "2. O Policial" : "2. The Policeman", 
              subtitle: isPt ? "Colang para Álgebra GF(2)" : "Colang to GF(2) Algebra" 
            },
            { 
              title: isPt ? "3. O Motor" : "3. The Engine", 
              subtitle: isPt ? "Provas UNSAT e Explicações" : "UNSAT Proofs & Explanations" 
            },
            { 
              title: isPt ? "4. Bypass por Furo OR" : "4. OR-Hole Bypass", 
              subtitle: isPt ? "Provas de Isenção Sub-limiar" : "Sub-threshold Exemption Proofs" 
            }
          ].map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`p-3 rounded-2xl text-left border transition-all ${
                currentSlide === idx 
                  ? 'bg-white/15 border-white text-white shadow-lg' 
                  : 'bg-white/5 border-white/10 text-white/50 hover:text-white/80 hover:bg-white/10'
              }`}
            >
              <p className="text-xs font-bold font-sans">{s.title}</p>
              <p className="text-[11px] text-white/40 truncate">{s.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
