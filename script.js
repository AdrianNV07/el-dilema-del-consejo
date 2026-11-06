const gameData = {
  nodes: [
    {
      number: "01",
      label: "Nodo 1 · Evidencia",
      title: "¿Cómo obtener evidencia suficiente?",
      context: "El Consejo debe decidir cómo leer una crisis en la que la información puede ser manipulada. Cada hora cuenta, pero una conclusión precipitada puede convertir una herramienta de paz en una fuente de escalada.",
      signals: ["alerta temprana", "sesgos del modelo", "conocimiento local"],
      question: "Como delegado o delegada, ¿qué enfoque defendes?",
      options: [
        {
          id: "A",
          title: "Activar la alerta temprana con IA",
          description: "Solicitar que un sistema de Naciones Unidas analice patrones de difusión, redes automatizadas y posibles vídeos manipulados, siempre con revisión humana.",
          consequenceTitle: "La señal llega antes que la certeza",
          consequence: "El sistema identifica en pocas horas una red coordinada y varios contenidos probablemente generados por IA. Sin embargo, también marca publicaciones legítimas de periodistas valtorienses porque el modelo fue entrenado con datos de otros contextos.",
          opportunity: "Anticipar nuevos episodios de violencia y localizar campañas coordinadas.",
          risk: "Sesgos, falsos positivos y una confianza excesiva en el sistema.",
          nextDilemma: "¿Compartir las alertas de inmediato o mantenerlas bajo reserva hasta contar con una verificación independiente?",
          route: "rapid"
        },
        {
          id: "B",
          title: "Priorizar la verificación humana",
          description: "Formar un equipo con analistas, periodistas locales, expertos técnicos y organizaciones de la sociedad civil antes de usar la IA para decisiones operativas.",
          consequenceTitle: "Más contexto, menos velocidad",
          consequence: "La investigación distingue mejor entre propaganda, crítica política legítima y rumores. No obstante, el proceso requiere varios días mientras la campaña de desinformación sigue expandiéndose.",
          opportunity: "Reducir el sesgo de automatización y aumentar la credibilidad de las conclusiones.",
          risk: "Perder una ventana de alerta temprana antes de que se produzcan nuevos ataques.",
          nextDilemma: "¿Actuar con información incompleta para evitar una escalada o esperar pruebas más sólidas aunque aumente el riesgo?",
          route: "cautious"
        }
      ]
    },
    {
      number: "02",
      label: "Nodo 2 · Respuesta",
      title: "¿Cómo convertir la información en una respuesta?",
      context: "Ya existe una lectura inicial de la crisis. Ahora el Consejo debe decidir si la información se convierte en coordinación técnica inmediata o en un proceso de verificación y mediación más amplio.",
      signals: ["coordinación regional", "atribución", "pérdida de control"],
      question: "La Presidencia solicita una decisión sobre el siguiente paso.",
      options: [
        {
          id: "A",
          title: "Coordinar una respuesta técnica rápida",
          description: "Compartir indicadores con las autoridades valtorienses, los Estados vecinos y las plataformas digitales para contener la red de desinformación.",
          consequenceTitle: "La coordinación corta el alcance, pero expone el método",
          consequence: "Las plataformas etiquetan contenidos manipulados y bloquean algunas cuentas automatizadas. Después, una filtración revela parte de los indicadores: el grupo insurgente adapta sus tácticas y acusa al Consejo de censura.",
          opportunity: "Reducir la velocidad de propagación antes de nuevos enfrentamientos.",
          risk: "Uso político de los datos, misión expansiva y eliminación de testimonios legítimos.",
          nextDilemma: "¿Respaldar medidas técnicas más contundentes o suspenderlas para abrir un espacio de diálogo y verificación?",
          route: "rapid"
        },
        {
          id: "B",
          title: "Crear un mecanismo independiente",
          description: "Integrar a Naciones Unidas, expertos técnicos, empresas, periodistas y sociedad civil, mientras se abren canales confidenciales de mediación.",
          consequenceTitle: "La confianza crece, pero la red sigue activa",
          consequence: "El mecanismo reduce la polarización y mejora la calidad de la evidencia. Sin embargo, tarda en producir conclusiones y el grupo insurgente aprovecha la demora para lanzar una nueva ola de contenidos falsos.",
          opportunity: "Usar la IA como apoyo, sin convertirla en la autoridad final de la decisión.",
          risk: "Que la prudencia sea interpretada como debilidad o falta de capacidad de respuesta.",
          nextDilemma: "¿Aprobar medidas tecnológicas limitadas mientras continúa la mediación o evitar cualquier acción que cierre la puerta al acuerdo?",
          route: "cautious"
        }
      ]
    },
    {
      number: "03",
      label: "Nodo 3 · Mandato",
      title: "¿Qué mandato debe defender el delegado?",
      context: "El Consejo debe votar un proyecto de resolución. La decisión final definirá si la tecnología será el instrumento principal, si la diplomacia tendrá prioridad o si ambas se someten a límites y controles compartidos.",
      signals: ["derechos fundamentales", "reversibilidad", "mediación"],
      question: "Elige la orientación que llevarás a la mesa de negociación.",
      options: [
        {
          id: "A",
          title: "Mandato tecnológico limitado y supervisado",
          description: "Autorizar alertas, etiquetado y medidas selectivas contra redes verificadas, con revisión humana, auditorías, apelación y cláusula de expiración.",
          consequenceTitle: "La tecnología actúa, pero no decide sola",
          consequence: "El Consejo demuestra capacidad de reacción y reduce la circulación de contenidos falsos. La respuesta solo conserva legitimidad si mantiene el control humano, la transparencia y la posibilidad de corregir errores.",
          opportunity: "Convertir la IA en una capacidad de prevención y protección de civiles.",
          risk: "Que una herramienta temporal se convierta en vigilancia política o pierda sus límites operativos.",
          nextDilemma: "La votación está lista. El desenlace dependerá de cómo combinaste rapidez, verificación y control.",
          route: "technology"
        },
        {
          id: "B",
          title: "Paquete de prudencia diplomática",
          description: "Priorizar mediación, investigación internacional independiente, comunicación pública, alfabetización mediática y protección de las comunidades amenazadas.",
          consequenceTitle: "La desescalada preserva el espacio de diálogo",
          consequence: "La decisión evita una reacción desproporcionada y reduce la tensión entre Valtoria y sus vecinos. Sin embargo, la red insurgente continúa operativa y puede reorganizarse durante las negociaciones.",
          opportunity: "Proteger la legitimidad del proceso y sostener canales de comunicación.",
          risk: "Que la amenaza digital persista por falta de una respuesta inmediata.",
          nextDilemma: "La votación está lista. El desenlace dependerá de cómo combinaste prudencia, tiempo y capacidad de prevención.",
          route: "diplomacy"
        }
      ]
    }
  ],
  endings: {
    technology: {
      badge: "Desenlace · Acción tecnológica",
      title: "El escudo tecnológico",
      summary: "El Consejo opta por una respuesta tecnológica firme. La red de desinformación pierde alcance y se evita parte de la violencia prevista. Sin embargo, quedan abiertos interrogantes sobre los sesgos del sistema, la protección de datos y la posibilidad de una escalada basada en una atribución incorrecta.",
      verdictTitle: "Votante de acción tecnológica",
      verdict: "Fuiste contundente y priorizaste la velocidad. Tu voto permitió detectar y contener la campaña antes de que provocara más violencia, pero también dejó más espacio para los falsos positivos, la atribución prematura y la pérdida de control sobre las herramientas utilizadas.",
      takeaways: [
        ["Fortaleza", "Rapidez para detectar y contener campañas coordinadas."],
        ["Tensión", "La velocidad puede superar a la verificación política y jurídica."],
        ["Pregunta", "¿Quién controla la herramienta cuando la crisis cambia de forma?"]
      ]
    },
    diplomacy: {
      badge: "Desenlace · Prudencia diplomática",
      title: "La mesa de diálogo",
      summary: "El Consejo opta por la prudencia diplomática. La decisión evita una reacción desproporcionada y protege la legitimidad del proceso internacional. La mediación reduce la polarización, aunque la amenaza digital no desaparece de inmediato.",
      verdictTitle: "Votante de prudencia diplomática",
      verdict: "Fuiste prudente y priorizaste la legitimidad, el diálogo y la protección frente a una reacción desproporcionada. Eso redujo el riesgo de escalada y preservó los canales de negociación, pero también concedió tiempo a la red insurgente para reorganizarse.",
      takeaways: [
        ["Fortaleza", "Preserva canales de comunicación y evita una escalada prematura."],
        ["Tensión", "El tiempo ganado puede ser utilizado por la red insurgente."],
        ["Pregunta", "¿Cuándo deja la prudencia de ser una virtud y se convierte en demora?"]
      ]
    },
    balance: {
      badge: "Desenlace · Equilibrio",
      title: "La respuesta con salvaguardas",
      summary: "El Consejo combina alerta temprana, supervisión humana y diplomacia. La IA ayuda a identificar patrones y prevenir nuevos ataques, pero no sustituye la investigación ni la negociación. Las medidas son temporales, reversibles y sometidas a auditoría.",
      verdictTitle: "Votante de equilibrio",
      verdict: "Mantuviste la cabeza fría y te quedaste justo a la medida. Eso permitió combinar prevención tecnológica con legitimidad diplomática: ganaste capacidad de respuesta sin entregar el control a un algoritmo. La contrapartida es que las salvaguardas hacen más lenta la acción y nunca eliminan por completo el riesgo.",
      takeaways: [
        ["Fortaleza", "Une prevención tecnológica con legitimidad diplomática."],
        ["Tensión", "Las salvaguardas pueden hacer más lenta la respuesta."],
        ["Pregunta", "¿Puede la tecnología servir a la paz sin convertirse en su propio riesgo?"]
      ]
    }
  }
};

const state = {
  screen: "home",
  nodeIndex: 0,
  selections: [],
  selectedOption: null,
  endingKey: null
};

const app = document.querySelector("#app");
const helpDialog = document.querySelector("#how-to-play");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  if (state.screen === "home") {
    app.innerHTML = renderHome();
  } else if (state.screen === "decision") {
    app.innerHTML = renderDecision();
  } else if (state.screen === "consequence") {
    app.innerHTML = renderConsequence();
  } else {
    app.innerHTML = renderEnding();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  return `
    <section class="screen hero" id="inicio">
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Simulación de decisión · Valtoria</span>
          <h1>Cuando la paz también se juega en el código.</h1>
          <p class="hero-lead">Asume el papel de un delegado o delegada del Consejo de Seguridad. Enfrenta una crisis de desinformación generada por IA y decide cómo responder sin perder de vista la diplomacia, los derechos y el control humano.</p>
          <div class="real-dilemma">
            <span class="real-dilemma-label">El dilema real</span>
            <p>La pregunta no es si la IA es buena o mala. El reto es decidir hasta dónde usarla para anticipar violencia, cómo corregir sus sesgos y quién conserva el control cuando el tiempo apremia.</p>
            <div class="real-dilemma-points"><span>Alerta temprana</span><span>Sesgos y derechos</span><span>Control humano</span></div>
          </div>
          <div class="hero-actions">
            <button class="primary-button" type="button" data-action="start">Comenzar la sesión <span class="button-arrow">→</span></button>
            <button class="secondary-button" type="button" data-action="how-to-play">Ver instrucciones</button>
          </div>
          <p class="hero-note">3 nodos · 2 decisiones por nodo · 3 desenlaces posibles</p>
        </div>
        <aside class="briefing-card" aria-label="Informe inicial sobre Valtoria">
          <p class="card-kicker">Informe reservado · 08:40 UTC</p>
          <h2>La crisis en Valtoria acaba de cambiar de escala.</h2>
          <p>Un grupo insurgente usa contenidos falsificados y redes automatizadas para desestabilizar la región.</p>
          <ul class="briefing-facts">
            <li><span class="fact-icon">↗</span><span>Vídeos manipulados llaman a atacar a una minoría.</span></li>
            <li><span class="fact-icon">◎</span><span>La atribución todavía no es concluyente.</span></li>
            <li><span class="fact-icon">◌</span><span>Los Estados vecinos piden actuar de inmediato.</span></li>
          </ul>
          <p class="briefing-source">Tu voto no es simbólico: puede cambiar el mandato del Consejo.</p>
        </aside>
      </div>
    </section>
  `;
}

function renderProgress() {
  const percent = ((state.nodeIndex + (state.screen === "consequence" ? 0.65 : 0)) / gameData.nodes.length) * 100;
  return `
    <div class="progress-wrap" aria-label="Progreso de la simulación">
      <span class="progress-label">Paso ${state.nodeIndex + 1} de ${gameData.nodes.length}</span>
      <div class="progress-line" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(percent)}">
        <span style="width: ${percent}%"></span>
      </div>
    </div>
  `;
}

function renderNodeHeader(node) {
  return `
    <div class="decision-header">
      <span class="eyebrow">${escapeHtml(node.label)}</span>
      <h1>${escapeHtml(node.title)}</h1>
      <p class="decision-context">${escapeHtml(node.context)}</p>
      <div class="signal-row" aria-label="Temas del nodo">
        ${node.signals.map((signal) => `<span class="signal">${escapeHtml(signal)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderDecision() {
  const node = gameData.nodes[state.nodeIndex];
  return `
    <section class="screen game-panel">
      ${renderProgress()}
      ${renderNodeHeader(node)}
      <p class="decision-question">${escapeHtml(node.question)}</p>
      <div class="options-grid" role="group" aria-label="Opciones de decisión">
        ${node.options.map((option, optionIndex) => `
          <button class="choice-card" type="button" data-action="choose" data-option-index="${optionIndex}">
            <span class="choice-topline">
              <span class="choice-letter">${escapeHtml(option.id)}</span>
              <span class="choice-index">Decisión ${escapeHtml(option.id)}</span>
            </span>
            <h3>${escapeHtml(option.title)}</h3>
            <p>${escapeHtml(option.description)}</p>
            <span class="choice-cta">Revelar consecuencia <span aria-hidden="true">→</span></span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderConsequence() {
  const node = gameData.nodes[state.nodeIndex];
  const option = state.selectedOption;
  return `
    <section class="screen game-panel">
      ${renderProgress()}
      <div class="consequence-layout">
        <div class="consequence-heading">
          <span class="eyebrow">${escapeHtml(node.label)}</span>
          <h1>Una decisión nunca llega sola.</h1>
          <p>Tu elección ya produjo un efecto inmediato. Ahora observa la tensión que aparece antes de pasar al siguiente nodo.</p>
          <div class="selected-decision">
            <span class="choice-letter">${escapeHtml(option.id)}</span>
            <div><strong>Tu decisión</strong><p>${escapeHtml(option.title)}</p></div>
          </div>
        </div>
        <div class="consequence-card">
          <span class="consequence-label">Consecuencia inmediata</span>
          <h2>${escapeHtml(option.consequenceTitle)}</h2>
          <p>${escapeHtml(option.consequence)}</p>
          <div class="risk-opportunity">
            <div class="insight-box insight-opportunity"><strong>Oportunidad</strong>${escapeHtml(option.opportunity)}</div>
            <div class="insight-box insight-risk"><strong>Riesgo</strong>${escapeHtml(option.risk)}</div>
          </div>
          <div class="next-dilemma"><strong>Nuevo dilema</strong><p>${escapeHtml(option.nextDilemma)}</p></div>
          <button class="primary-button continue-button" type="button" data-action="continue">Continuar al siguiente nodo <span class="button-arrow">→</span></button>
        </div>
      </div>
    </section>
  `;
}

function getEndingKey() {
  const finalChoice = state.selections[2];
  if (finalChoice === "B") return "diplomacy";
  const firstChoice = state.selections[0];
  const secondChoice = state.selections[1];
  if (firstChoice === "A" && secondChoice === "A") return "technology";
  return "balance";
}

function renderEnding() {
  const ending = gameData.endings[state.endingKey];
  return `
    <section class="screen game-panel">
      <div class="ending-header">
        <span class="ending-badge">${escapeHtml(ending.badge.replace("Desenlace · ", ""))}</span>
        <h1>${escapeHtml(ending.title)}</h1>
        <p>${escapeHtml(ending.summary)}</p>
      </div>
      <div class="ending-card">
        <blockquote>“La mejor respuesta no es necesariamente la más rápida. Es la que mantiene la paz sin renunciar a la verdad, la protección de las personas y la responsabilidad humana.”</blockquote>
        <div class="verdict-card">
          <span class="consequence-label">Tu veredicto como votante</span>
          <h2>${escapeHtml(ending.verdictTitle)}</h2>
          <p>${escapeHtml(ending.verdict)}</p>
        </div>
        <div class="ending-takeaways">
          ${ending.takeaways.map(([label, text]) => `<div class="takeaway"><h3>${escapeHtml(label)}</h3><p>${escapeHtml(text)}</p></div>`).join("")}
        </div>
      </div>
      <div class="ending-actions">
        <button class="primary-button" type="button" data-action="restart">Jugar de nuevo <span class="button-arrow">↻</span></button>
        <button class="secondary-button" type="button" data-action="how-to-play">Revisar instrucciones</button>
      </div>
    </section>
  `;
}

function startGame() {
  state.screen = "decision";
  state.nodeIndex = 0;
  state.selections = [];
  state.selectedOption = null;
  state.endingKey = null;
  render();
}

function chooseOption(optionIndex) {
  const node = gameData.nodes[state.nodeIndex];
  state.selectedOption = node.options[optionIndex];
  state.selections[state.nodeIndex] = state.selectedOption.id;
  state.screen = "consequence";
  render();
}

function continueGame() {
  if (state.nodeIndex < gameData.nodes.length - 1) {
    state.nodeIndex += 1;
    state.selectedOption = null;
    state.screen = "decision";
  } else {
    state.endingKey = getEndingKey();
    state.screen = "ending";
  }
  render();
}

function openHelp() {
  if (typeof helpDialog.showModal === "function") {
    helpDialog.showModal();
  } else {
    helpDialog.setAttribute("open", "");
  }
}

function closeHelp() {
  if (typeof helpDialog.close === "function") {
    helpDialog.close();
  } else {
    helpDialog.removeAttribute("open");
  }
}

document.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;

  const action = actionElement.dataset.action;
  if (action === "start" || action === "restart") startGame();
  if (action === "choose") chooseOption(Number(actionElement.dataset.optionIndex));
  if (action === "continue") continueGame();
  if (action === "how-to-play") openHelp();
  if (action === "close-dialog") closeHelp();
  if (action === "home") {
    closeHelp();
    state.screen = "home";
    state.nodeIndex = 0;
    state.selections = [];
    state.selectedOption = null;
    state.endingKey = null;
    render();
  }
});

helpDialog.addEventListener("click", (event) => {
  if (event.target === helpDialog) closeHelp();
});

render();
