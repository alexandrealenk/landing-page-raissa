import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  MapPin,
  Phone,
  Award,
  Shield,
  MessageCircle,
  Target,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Menu,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "5591992040482";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20para%20CNH.`;

function CTAButton({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_4px_14px_0_rgba(255,193,7,0.39)] ${className}`}
    >
      <MessageCircle className="w-6 h-6" />
      <span>{text}</span>
    </a>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Para quem é", href: "#para-quem" },
    { name: "Sobre", href: "#sobre" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Dúvidas", href: "#faq" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-green-dark/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => scrollToSection(e, "#inicio")}
          className="text-white font-black text-2xl tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-green-dark">
            <Award className="w-5 h-5" />
          </div>
          Raissa
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white/90 hover:text-brand-yellow font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-green-dark font-bold py-2 px-6 rounded-full transition-all text-sm uppercase tracking-wider"
          >
            Falar no WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-green-dark border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/90 hover:text-brand-yellow font-medium transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-yellow text-brand-green-dark font-bold py-3 px-6 rounded-full text-center mt-2"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-green-dark to-brand-green overflow-hidden pt-32 pb-24 lg:pt-20 lg:pb-20"
    >
      <div className="absolute inset-0 bg-diagonal-lines opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <MapPin className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-medium">
                Bragança, Capanema, Viseu, Capitão Poço e região
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
              Você pode dirigir com segurança —{" "}
              <span className="text-brand-yellow italic">
                eu te acompanho do início ao fim
              </span>
            </h1>

            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-200">
              Perca o medo e conquiste sua CNH com segurança e confiança
            </h2>

            <p className="text-base lg:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Você não precisa passar por isso sozinha. Com orientação certa e
              acompanhamento de verdade, você pode tirar sua CNH sem sofrimento
              e sem enrolação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                text="Quero começar minha formação agora"
                className="w-full sm:w-auto text-center"
              />
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Aluno"
                    className="w-8 h-8 rounded-full border-2 border-brand-green-dark"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p>Junte-se a dezenas de alunos aprovados</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative flex flex-col justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg lg:max-w-xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-6 pb-12 lg:p-12 lg:pb-16">
              <img
                src="/cnh-do-brasil.png"
                alt="CNH do Brasil"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="-mt-8 lg:-mt-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20 z-20 w-max"
            >
              <div className="bg-brand-yellow p-3 rounded-full text-black shadow-sm">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs text-white/90 font-bold uppercase tracking-wider">
                  Garantia de
                </p>
                <p className="text-lg font-black text-white">
                  Aprovação
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const quotes = [
    "Eu morro de medo de dirigir.",
    "Fico muito nervoso na prova.",
    "Já reprovei e fiquei com vergonha.",
    "Não consigo aprender só com a autoescola.",
    "Tenho medo de travar no meio da rua.",
  ];

  return (
    <section id="para-quem" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-brand-green-dark mb-6 tracking-tight">
            SE VOCÊ TEM MEDO DE DIRIGIR,{" "}
            <span className="text-brand-green">EU ENTENDO</span>
          </h2>
          <p className="text-xl text-gray-600">Talvez você pense:</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=2070&auto=format&fit=crop"
                alt="Pessoa apreensiva no carro"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-4 mb-10">
              {quotes.map((quote, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4"
                >
                  <MessageCircle className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium italic">"{quote}"</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
              <p className="text-lg lg:text-xl font-semibold mb-4 relative z-10">
                E no fundo você só quer passar logo nessa prova e dirigir com
                segurança.
              </p>
              <p className="text-xl lg:text-2xl font-black text-brand-yellow relative z-10">
                O problema não é você.
                <br />É a falta de acompanhamento certo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const checklist = [
    "Organização da formação",
    "Orientação estratégica para prova",
    "Preparação emocional",
    "Aulas práticas extras",
    "Apoio até a aprovação",
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto bg-brand-green-dark">
              {/* Masked image simulation using a clean portrait */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Instrutora Raissa"
                className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="text-3xl font-black text-white mb-1">
                  Instrutora Raissa
                </h3>
                <p className="text-brand-yellow font-medium">
                  +3 anos de experiência
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-black text-brand-green-dark mb-6 tracking-tight">
              ACOMPANHAMENTO COMPLETO DO INÍCIO AO FIM
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sou Instrutora Raissa, com mais de 3 anos de experiência na
              formação de novos condutores. Meu trabalho é acompanhar você em
              todas as etapas do processo:
            </p>

            <ul className="space-y-4 mb-10">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="bg-brand-green rounded-full p-1 shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 border-l-4 border-brand-yellow p-6 rounded-r-xl mb-8">
              <p className="text-xl font-bold text-brand-green-dark mb-2">
                Aqui você não recebe pressão.
              </p>
              <p className="text-lg text-gray-600">
                Você recebe orientação e paciência.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow shrink-0 mt-1" />
                <p className="text-gray-600 italic">
                  "Com você foi muito rápido para tirar, sem enrolação."
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow shrink-0 mt-1" />
                <p className="text-gray-600 italic">
                  "Teve paciência para esclarecer todas as minhas dúvidas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-brand-yellow" />,
      title: "Segurança real ao dirigir",
      desc: "Você aprende a dirigir com confiança, não apenas para passar na prova.",
      img: "https://images.unsplash.com/photo-1516962080544-eac695c93791?q=80&w=1974&auto=format&fit=crop",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-yellow" />,
      title: "Paciência e explicação clara",
      desc: "Sem gritos. Sem constrangimento. Você aprende no seu ritmo.",
      img: "https://images.unsplash.com/photo-1588196749597-9ff0464ac839?q=80&w=1974&auto=format&fit=crop",
    },
    {
      icon: <Target className="w-8 h-8 text-brand-yellow" />,
      title: "Processo organizado e rápido",
      desc: "Menos ansiedade. Mais clareza. Mais foco na aprovação.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="beneficios"
      className="py-24 bg-gradient-to-br from-brand-green-dark to-brand-green relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-diagonal-lines opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            O QUE VOCÊ CONQUISTA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={benefit.img}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="bg-brand-green-dark w-16 h-16 rounded-2xl flex items-center justify-center mb-6 -mt-16 relative z-10 border-4 border-white shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-black text-brand-green-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      text: "Eu tinha muito medo de dirigir, mas a paciência da Raissa foi fundamental. Hoje dirijo para o trabalho todos os dias!",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "João Pedro",
      text: "Já tinha reprovado duas vezes antes de conhecer a instrutora. Com o método dela, passei de primeira na próxima tentativa.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Ana Costa",
      text: "Aulas muito tranquilas, sem gritos e sem pressão. Recomendo para todos que têm ansiedade no trânsito.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-brand-green-dark mb-6 tracking-tight">
            O QUE DIZEM <span className="text-brand-green">MEUS ALUNOS</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 sm:px-8">
          <div className="overflow-hidden relative rounded-2xl bg-gray-50 p-8 md:p-12 shadow-sm border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
                  <img
                    src={testimonials[currentIndex].img}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-brand-yellow fill-brand-yellow"
                    />
                  ))}
                </div>
                <p className="text-lg md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <h4 className="text-xl font-bold text-brand-green-dark">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 text-sm">Aluno Aprovado</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-brand-green-dark hover:text-brand-yellow hover:scale-110 transition-all focus:outline-none z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-brand-green-dark hover:text-brand-yellow hover:scale-110 transition-all focus:outline-none z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-brand-yellow w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Você atende homens e mulheres?",
      a: "Sim. Atendo ambos e adapto o acompanhamento para cada perfil.",
    },
    {
      q: "Já reprovei. Ainda posso conseguir?",
      a: "Sim. Muitos alunos que já reprovaram conseguiram aprovação com acompanhamento estratégico.",
    },
    {
      q: "Como funciona o atendimento online?",
      a: "O acompanhamento teórico, preparação emocional e organização da formação são feitos online, permitindo que você estude no seu tempo com meu suporte direto via WhatsApp.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-brand-green-dark mb-6 tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-brand-green-dark">
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-green" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">
            ESTÁ NA HORA DE PARAR DE ADIAR
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Você pode continuar adiando por medo…
            <br />
            Ou pode começar hoje a construir sua segurança no trânsito.
          </p>
          <p className="text-2xl font-bold text-brand-yellow mb-10">
            Eu vou caminhar com você até a sua aprovação.
          </p>

          <CTAButton
            text="Fale comigo no WhatsApp"
            className="text-lg px-10 py-5"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10 mt-10 max-w-fit mx-auto md:max-w-none">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-brand-yellow" />
            </div>
            <div className="text-left">
              <p className="font-bold">Atendimento Online</p>
              <p className="text-sm text-gray-400">
                Bragança, Capanema, Viseu e região
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-brand-yellow" />
            </div>
            <div className="text-left">
              <p className="font-bold">WhatsApp</p>
              <p className="text-sm text-gray-400">(91) 99204-0482</p>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-end gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Award className="w-6 h-6 text-brand-yellow" />
            </div>
            <div className="text-left">
              <p className="font-bold">Experiência</p>
              <p className="text-sm text-gray-400">
                +3 anos formando condutores
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Instrutora Raissa. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-yellow selection:text-black">
      <Header />
      <Hero />
      <PainPoints />
      <About />
      <Benefits />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
