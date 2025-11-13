# Política de Privacidade do Sudokan

**Última Atualização: 9 de novembro de 2025**  
**Data de Vigência: 9 de novembro de 2025**

---

## Introdução

Obrigado por escolher **Sudokan** ("nós", "nos" ou "nosso"). Estamos comprometidos em proteger sua privacidade e ser transparentes sobre como lidamos com suas informações.

Esta Política de Privacidade explica:
- Quais informações coletamos (e o que não coletamos)
- Como usamos suas informações
- Seus direitos e escolhas em relação aos seus dados
- Como protegemos suas informações

**Importante**: O Sudokan foi projetado pensando na privacidade. A maioria dos seus dados permanece no seu dispositivo, e toda coleta de dados que sai do seu dispositivo requer seu consentimento explícito.

**Conformidade**: Esta Política de Privacidade está em conformidade com:
- **GDPR** (Regulamento Geral sobre a Proteção de Dados) - União Europeia
- **CCPA/CPRA** (Lei de Privacidade do Consumidor da Califórnia) - Califórnia, EUA
- **COPPA** (Lei de Proteção à Privacidade Online das Crianças) - Estados Unidos
- **LGPD** (Lei Geral de Proteção de Dados) - Brasil
- Outras leis internacionais de privacidade aplicáveis

### Quem Somos

**Nome do Aplicativo**: Sudokan  
**Desenvolvedor**: Bloom Byte SRL  
**Email de Contato**: contact@bloombyte.dev  
**Site**: bloombyte.dev

### Escopo desta Política

Esta Política de Privacidade se aplica a:
- O aplicativo móvel Sudokan (iOS e Android)
- Quaisquer atualizações ou novos recursos que adicionarmos ao aplicativo
- Dados coletados apenas através do aplicativo (não nosso site, se separado)

### Seu Consentimento

Ao usar o Sudokan, você concorda com esta Política de Privacidade. Se você não concordar, por favor não use o aplicativo.

**Você controla quais dados coletamos**: Na primeira inicialização, pedimos seu consentimento para coletar análises, relatórios de falhas e mostrar anúncios personalizados. Você pode alterar essas preferências a qualquer momento nas Configurações de Privacidade do aplicativo.

---

## Índice

1. [Informações que Coletamos](#1-informações-que-coletamos)
2. [Como Usamos suas Informações](#2-como-usamos-suas-informações)
3. [Base Legal para Processamento (GDPR)](#3-base-legal-para-processamento-gdpr)
4. [Compartilhamento de Dados e Terceiros](#4-compartilhamento-de-dados-e-terceiros)
5. [Retenção de Dados](#5-retenção-de-dados)
6. [Segurança de Dados](#6-segurança-de-dados)
7. [Seus Direitos e Escolhas](#7-seus-direitos-e-escolhas)
8. [Privacidade das Crianças](#8-privacidade-das-crianças)
9. [Transferências Internacionais de Dados](#9-transferências-internacionais-de-dados)
10. [Mudanças nesta Política](#10-mudanças-nesta-política)
11. [Entre em Contato](#11-entre-em-contato)
12. [Informações Específicas por Região](#12-informações-específicas-por-região)

---

## 1. Informações que Coletamos

Acreditamos na transparência. Aqui está exatamente quais informações o Sudokan coleta, divididas por categoria.

### 1.1 Informações Armazenadas Localmente (Apenas no Seu Dispositivo)

Os seguintes dados **nunca saem do seu dispositivo** e são armazenados usando armazenamento seguro do dispositivo:

#### Dados do Jogo
- **Estado atual do jogo**: Seu quebra-cabeça em andamento, incluindo os números que você inseriu, erros cometidos e tempo decorrido
- **Histórico de jogos**: Registros de jogos concluídos, incluindo dificuldade, tempo de conclusão, erros, dicas usadas e pontos de classificação ganhos
- **Estatísticas**: Suas métricas gerais de desempenho (total de jogos jogados, taxa de conclusão, tempo médio)
- **Progresso do tutorial**: Se você completou o tutorial de integração

**Método de Armazenamento**: Banco de dados Hive (armazenamento local criptografado)  
**Retenção**: Até você excluir o aplicativo ou limpar os dados manualmente  
**Seu Controle**: Você pode limpar o histórico de jogos através do botão "Limpar Histórico" na tela de Histórico de Jogos

#### Configurações e Preferências
- **Configurações do aplicativo**: Tema (claro/escuro), idioma, preferência de dificuldade, visibilidade do cronômetro, destaque de erros, vibração, animações
- **Preferência de dificuldade adaptativa**: Se você habilitou o Ajuste Dinâmico de Dificuldade (DDA)
- **Preferências de consentimento**: Suas escolhas para análises, relatórios de falhas e anúncios personalizados

**Método de Armazenamento**: SharedPreferences (armazenamento seguro do dispositivo)  
**Retenção**: Até você alterar as configurações ou desinstalar o aplicativo  
**Seu Controle**: Editável a qualquer momento nas telas de Configurações e Configurações de Privacidade

**Importante**: Estes dados locais NÃO são considerados "coleta de dados" sob as leis de privacidade porque nunca saem do seu dispositivo. No entanto, os divulgamos para total transparência.

---

### 1.2 Dados de Análise (Opcional - Requer Seu Consentimento)

Se você consentir com análises na tela de Consentimento de Privacidade, coletamos dados de uso para melhorar o aplicativo.

**Serviço Usado**: Firebase Analytics (fornecido pelo Google LLC)

#### O que Coletamos Automaticamente (Quando Análises Habilitadas)

**Informações do Dispositivo**:
- Modelo do dispositivo (por exemplo, "iPhone 14", "Samsung Galaxy S23")
- Sistema operacional e versão (por exemplo, "iOS 17.2", "Android 14")
- Versão do aplicativo (por exemplo, "1.0.0")
- Resolução da tela
- Configuração de idioma do dispositivo
- País/região (derivado do endereço IP, mas o IP em si não é armazenado)

**Informações de Uso do Aplicativo**:
- Eventos de abertura/fechamento do aplicativo
- Visualizações de tela (quais telas você visita)
- Duração da sessão (quanto tempo você usa o aplicativo)
- Data da primeira inicialização
- Data de atualização do aplicativo

#### Eventos Personalizados que Rastreamos (Quando Análises Habilitadas)

Registramos interações específicas de jogabilidade e do usuário para entender como o aplicativo é usado:

**Eventos de Fluxo de Jogo** (Exemplos):
- `game_started` (modo: freeplay/diário, dificuldade)
- `game_completed` (duração, erros, dicas usadas, pontos de classificação ganhos)
- `game_abandoned` (porcentagem de progresso, motivo)
- `puzzle_hint_requested` (dicas restantes)
- `notes_mode_toggled` (habilitado/desabilitado)

**Eventos de Tutorial**:
- `tutorial_started` (primeira vez ou repetição)
- `tutorial_step_shown` (número da etapa)
- `tutorial_completed` (duração)

**Eventos de Progressão**:
- `rank_changed` (classificação antiga, classificação nova, pontos)
- `streak_continued` (dias de sequência)
- `daily_challenge_completed` (dificuldade, tempo)

**Eventos de Configurações**:
- `difficulty_changed` (de, para)
- `theme_changed` (claro/escuro)
- `consent_updated` (tipo de consentimento, valor)

**Eventos de Publicidade**:
- `ad_impression` (tipo de anúncio, posicionamento)
- `rewarded_ad_watched` (tipo de recompensa: dicas/erros)

**Total de Eventos**: Rastreamos vários tipos de eventos em todo o aplicativo para entender as interações do usuário e melhorar sua experiência.

#### Propriedades do Usuário que Definimos (Quando Análises Habilitadas)

Para segmentar usuários e entender padrões, definimos as seguintes propriedades:

- `user_rank` (Não Classificado, Novato, Solucionador, Estrategista, Especialista, Lenda)
- `preferred_difficulty` (Muito Fácil, Fácil, Médio, Difícil, Especialista)
- `current_streak` (dias de sequência do desafio diário)
- `games_played_total` (contagem vitalícia)
- `dda_enabled` (verdadeiro/falso)
- `consent_analytics` (verdadeiro/falso)
- `consent_crash_reporting` (verdadeiro/falso)
- `consent_personalized_ads` (verdadeiro/falso)

**Total de Propriedades do Usuário**: Aproximadamente 25 propriedades.

#### O que as Análises NÃO Coletam

❌ Seu nome, email, telefone ou quaisquer identificadores pessoais  
❌ As soluções específicas de quebra-cabeças que você insere  
❌ Sua geolocalização exata (apenas nível de país)  
❌ Seu endereço IP (o Firebase o remove automaticamente)  
❌ Identificadores de dispositivo (IDFA/AAID) a menos que anúncios personalizados estejam habilitados  
❌ Dados de outros aplicativos no seu dispositivo  
❌ Seus contatos, fotos ou outros arquivos pessoais

**Seu Controle**: Desative as análises a qualquer momento em Configurações de Privacidade → botão "Melhorar o Jogo".

---

### 1.3 Dados de Relatório de Falhas (Opcional - Requer Seu Consentimento)

Se você consentir com o relatório de falhas, coletamos dados técnicos quando o aplicativo falha para nos ajudar a corrigir bugs.

**Serviço Usado**: Firebase Crashlytics (fornecido pelo Google LLC)

#### O que Coletamos Quando o Aplicativo Falha (Quando Relatório de Falhas Habilitado)

**Informações de Falha**:
- **Stack traces**: Detalhes técnicos sobre qual código estava sendo executado quando a falha ocorreu
- **Mensagens de exceção**: Descrições de erro geradas pelo aplicativo
- **Informações de thread**: Quais partes do aplicativo estavam ativas

**Estado do Dispositivo na Falha**:
- RAM livre (memória disponível)
- Espaço livre em disco
- Orientação do dispositivo (retrato/paisagem)
- Nível da bateria
- Status de conectividade de rede (WiFi/celular/offline)

**Informações do Dispositivo**:
- Modelo do dispositivo
- Versão do sistema operacional
- Versão do aplicativo

**Logs de Depuração** (Não Pessoais):
- Eventos recentes do aplicativo (por exemplo, "Usuário abriu configurações", "Quebra-cabeça carregado", "Etapa do tutorial mostrada")
- Contexto do estado do jogo (por exemplo, "Quebra-cabeça 45% completo", "Usuário na classificação: Solucionador")
- Nenhum dado pessoal ou soluções de quebra-cabeças

**Identificadores de Falha**:
- UUID de instalação (identificador aleatório gerado pelo Firebase, não vinculado a você)
- ID de sessão (identificador temporário para sessão de falha)

#### O que o Relatório de Falhas NÃO Coleta

❌ Suas informações pessoais  
❌ Seu endereço IP (removido pelo Firebase)  
❌ Identificadores de dispositivo (IDFA/AAID)  
❌ Sua localização precisa  
❌ Dados inseridos pelo usuário (soluções de quebra-cabeças, texto de feedback)

**Retenção de Dados**: Relatórios de falhas são automaticamente excluídos após **90 dias**.

**Seu Controle**: Desative o relatório de falhas a qualquer momento em Configurações de Privacidade → botão "Ajude-nos a Corrigir Problemas".

---

### 1.4 Dados de Publicidade (Coletados Quando Anúncios São Exibidos)

O Sudokan exibe anúncios para apoiar o acesso gratuito ao aplicativo. A coleta de dados de anúncios difere com base em se você consente com anúncios personalizados.

**Serviço Usado**: Google AdMob (fornecido pelo Google LLC)

#### Anúncios Não Personalizados (Padrão - Não Requer Consentimento)

Se você NÃO consentir com anúncios personalizados, mostramos **anúncios não personalizados** baseados apenas em:
- **Informações contextuais**: O conteúdo atual do aplicativo (por exemplo, mostrar anúncios relacionados a quebra-cabeças em um aplicativo de quebra-cabeças)
- **Localização aproximada**: Localização em nível de país derivada do endereço IP (não armazenada)
- **Informações limitadas do dispositivo**: Tamanho da tela, versão do SO (para compatibilidade de formato de anúncio)

**O que NÃO é coletado no modo não personalizado**:
❌ ID de publicidade (IDFA/AAID)  
❌ Rastreamento entre aplicativos  
❌ Segmentação baseada em interesses  
❌ Dados comportamentais

#### Anúncios Personalizados (Opcional - Requer Seu Consentimento)

Se você consentir com anúncios personalizados na tela de Consentimento de Privacidade, o AdMob pode coletar:

**Identificadores de Publicidade**:
- **IDFA** (Identificador para Anunciantes) no iOS
- **AAID** (ID de Publicidade Android) no Android

Estes são IDs específicos do dispositivo usados para mostrar anúncios relevantes com base em seus interesses.

**Rastreamento Entre Aplicativos**:
- Suas interações com anúncios em diferentes aplicativos que usam serviços de anúncios do Google
- Aplicativos que você instalou ou abriu
- Cliques e conversões de anúncios

**Dados Baseados em Interesses**:
- Interesses inferidos (por exemplo, "entusiasta de jogos de quebra-cabeças", "jogador casual")
- Demografia (faixa etária, gênero - estimado, não real)

**Dados da Conta Google** (se você estiver conectado ao Google no seu dispositivo):
- Vinculado à atividade da sua conta Google
- Pode usar dados de outros serviços do Google (Pesquisa, YouTube, etc.)

**Dados de Localização** (se permissões do dispositivo concedidas):
- Geolocalização precisa para anúncios baseados em localização

#### Parceiros de Redes de Anúncios

O Google AdMob trabalha com **mais de 100 redes de anúncios de terceiros** para veicular anúncios. Cada parceiro pode coletar dados de acordo com sua própria política de privacidade.

**Lista completa de parceiros de anúncios**: [Lista de Compradores Autorizados do Google](https://support.google.com/admob/answer/9012903)

Parceiros comuns incluem:
- Amazon Publisher Services
- AppLovin
- Chartboost
- InMobi
- ironSource
- Unity Ads
- Vungle

**Importante**: Quando você consente com anúncios personalizados, esses parceiros também podem coletar dados.

#### Anúncios Recompensados

Quando você assiste a um anúncio para ganhar recompensas (dicas extras ou aumento do limite de erros):
- Impressão de anúncio é registrada (em suas análises, se habilitadas)
- Cumprimento de recompensa é rastreado (para prevenir fraude)
- Nenhum dado pessoal adicional é coletado além da veiculação padrão de anúncios

**Seu Controle**: 
- Desative anúncios personalizados em Configurações de Privacidade → botão "Anúncios Personalizados"
- Opte por não participar em todo o dispositivo através das configurações do sistema:
  - **iOS**: Ajustes → Privacidade → Rastreamento → Negar
  - **Android**: Configurações → Google → Anúncios → Desativar personalização de anúncios

**Saiba Mais**:
- [Como o Google usa dados de aplicativos que usam serviços do Google](https://policies.google.com/technologies/partner-sites)
- [Configurações de Anúncios do Google](https://adssettings.google.com/) (gerencie suas preferências de anúncios)

---

### 1.5 Dados de Feedback (Opcional - Enviado Voluntariamente)

Quando você envia feedback através do formulário de feedback no aplicativo, coletamos:

**Serviço Usado**: Cloud Firestore (fornecido pelo Google LLC)

#### O que Coletamos Quando Você Envia Feedback

**Sua Entrada**:
- **Texto do feedback**: Sua mensagem (até 1000 caracteres)
- **Avaliação de satisfação**: Se você selecionou positivo ou negativo

**Contexto Anexado Automaticamente** (para nos ajudar a entender seu feedback):
- Versão do aplicativo
- Modelo do dispositivo (por exemplo, "iPhone 14", "Pixel 7")
- Versão do sistema operacional (por exemplo, "iOS 17.2", "Android 14")
- Configuração de idioma
- Carimbo de data/hora do envio
- Se análises estão habilitadas (booleano, não os dados em si)

**O que o Feedback NÃO Coleta**:
❌ Seu nome, email ou informações de contato  
❌ Identificadores de dispositivo (IDFA/AAID)  
❌ Endereço IP  
❌ Localização precisa  
❌ Seu progresso no quebra-cabeça ou dados do jogo

**Armazenamento de Dados**: 
- Armazenado no banco de dados Cloud Firestore (servidores Google na Europa - Bélgica, região `europe-west1`)
- Acessível apenas por nós (o desenvolvedor do aplicativo)
- NÃO compartilhado com terceiros

**Retenção de Dados**: O feedback é retido por **12 meses**, a menos que você solicite exclusão antes.

**Seu Controle**: 
- O envio de feedback é completamente opcional
- Uma vez enviado, você pode solicitar exclusão enviando-nos um email (veja a seção Entre em Contato)

---

### 1.6 O que NÃO Coletamos (Nunca)

Para ser absolutamente claro, o Sudokan **nunca** coleta:

❌ **Identificadores pessoais**: Nome, email, número de telefone, endereço postal  
❌ **Credenciais de conta**: Sem login necessário, sem senhas  
❌ **Dados de mídia social**: Sem login Facebook/Google  
❌ **Contatos**: Não acessamos sua lista de contatos  
❌ **Fotos/Vídeos**: Não acessamos seu rolo de câmera  
❌ **Microfone/Câmera**: Sem gravação de áudio ou vídeo  
❌ **Localização precisa**: Apenas nível de país para anúncios (quando consentido)  
❌ **Biometria**: Sem impressão digital, Face ID ou dados biométricos  
❌ **Informações financeiras**: Sem processamento de pagamento (aplicativo é gratuito)  
❌ **Dados de saúde**: Somos um jogo de quebra-cabeças, não um aplicativo de saúde  
❌ **Histórico de navegação**: Sem rastreamento web  
❌ **Dados de outros aplicativos**: Só acessamos os dados do Sudokan

---

## 2. Como Usamos suas Informações

Usamos suas informações apenas para os propósitos descritos abaixo. Não usamos seus dados para quaisquer outros propósitos sem seu consentimento.

### 2.1 Para Fornecer e Melhorar o Aplicativo (Funções Essenciais)

**Base Legal**: Interesse legítimo (GDPR Art. 6(1)(f))

**Dados armazenados localmente** (estado do jogo, preferências) são usados para:
- Salvar seu progresso no quebra-cabeça para que você possa continuar depois
- Lembrar suas configurações (tema, idioma, dificuldade)
- Rastrear seu histórico de jogos e estatísticas
- Calcular sua progressão de classificação
- Ajustar recomendações de dificuldade (se DDA habilitado)
- Restaurar seu progresso após reinicializações do aplicativo

**Nenhuma conexão com a internet necessária** para essas funções.

---

### 2.2 Para Analisar Uso e Melhorar Recursos (Análises)

**Base Legal**: Consentimento (GDPR Art. 6(1)(a))  
**Requer**: Seu consentimento na tela de Consentimento de Privacidade

Se você habilitar análises, usamos os dados coletados para:

**Entender Comportamento do Usuário**:
- Quais recursos são mais usados (por exemplo, dicas, modo de notas, desafios diários)
- Quais níveis de dificuldade são mais populares
- Onde os usuários ficam presos ou abandonam jogos
- Quais telas têm mais engajamento

**Otimizar Equilíbrio do Jogo**:
- Identificar se os quebra-cabeças são muito fáceis ou muito difíceis
- Ajustar eficácia do Algoritmo de Dificuldade Dinâmica (DDA)
- Equilibrar uso do sistema de dicas
- Ajustar taxas de progressão de classificação

**Corrigir Problemas de Experiência do Usuário**:
- Descobrir elementos de UI confusos
- Identificar telas de carregamento lentas
- Encontrar gargalos de navegação
- Detectar taxas de conclusão do tutorial

**Priorizar Desenvolvimento**:
- Decidir quais novos recursos construir
- Determinar quais bugs corrigir primeiro
- Entender preferências regionais (por exemplo, uso de modo escuro por país)

**Exemplos de Insights de Análises**:
- "60% dos usuários habilitam modo escuro" → Melhorar design do modo escuro
- "Usuários abandonam quebra-cabeças Expert em 45% de conclusão" → Tornar dicas mais acessíveis
- "Taxa de conclusão do tutorial é 85%" → Tutorial é eficaz, não precisa mudanças
- "Engajamento com desafio diário é maior no Japão" → Considerar otimização de fuso horário

**NÃO usamos análises para**:
❌ Vender seus dados para terceiros  
❌ Direcionar anúncios personalizados para você (esse é um consentimento separado)  
❌ Discriminar ou criar perfis sobre você  
❌ Tomar decisões automatizadas que o afetem legalmente

---

### 2.3 Para Corrigir Bugs e Falhas (Relatório de Falhas)

**Base Legal**: Consentimento (GDPR Art. 6(1)(a))  
**Requer**: Seu consentimento na tela de Consentimento de Privacidade

Se você habilitar o relatório de falhas, usamos os dados coletados para:

**Identificar e Corrigir Falhas**:
- Detectar quando e por que o aplicativo falha
- Priorizar correções para falhas mais comuns
- Testar se as correções funcionam em diferentes dispositivos
- Monitorar porcentagem de usuários sem falhas

**Melhorar Estabilidade do Aplicativo**:
- Encontrar vazamentos de memória
- Detectar problemas de desempenho
- Identificar problemas de compatibilidade com dispositivos/versões de SO específicos

**Exemplo**:
- Relatório de falha mostra "Usuários de iPhone 12 no iOS 17.1 têm falha ao abrir configurações"
- Reproduzimos o bug, corrigimos e lançamos uma atualização
- Todos os usuários de iPhone 12/iOS 17.1 se beneficiam da correção

**NÃO usamos dados de falha para**:
❌ Marketing ou publicidade  
❌ Rastrear seu comportamento  
❌ Identificá-lo pessoalmente

---

### 2.4 Para Exibir Anúncios (Veiculação de Anúncios)

**Base Legal**: 
- Interesse legítimo (GDPR Art. 6(1)(f)) para anúncios não personalizados
- Consentimento (GDPR Art. 6(1)(a)) para anúncios personalizados

Exibimos anúncios para apoiar o acesso gratuito ao Sudokan.

**Anúncios Não Personalizados** (padrão):
- Mostram anúncios genéricos de quebra-cabeças/jogos para todos
- Sem rastreamento entre aplicativos
- Baseado apenas no contexto do aplicativo (você está usando um aplicativo de quebra-cabeças)

**Anúncios Personalizados** (se você consentir):
- Mostram anúncios baseados em seus interesses
- Usam ID de publicidade para rastreamento entre aplicativos
- Podem mostrar anúncios de produtos/serviços pelos quais você demonstrou interesse em outro lugar

**Anúncios Recompensados**:
- Permitem que você ganhe recompensas no jogo (dicas, limite de erros)
- Voluntário - você escolhe assistir
- As mesmas regras de personalização se aplicam (com base no seu consentimento)

**NÃO fazemos**:
❌ Vender seus dados para anunciantes (Google veicula os anúncios)  
❌ Compartilhar suas informações pessoais com redes de anúncios  
❌ Controlar quais anúncios específicos são mostrados (sistema automatizado do Google)  
❌ Exigir assistir anúncios para jogar (totalmente opcional para recompensas)

---

### 2.5 Para Responder a Feedback (Suporte ao Usuário)

**Base Legal**: Consentimento (GDPR Art. 6(1)(a)) - implícito ao enviar feedback  
**Requer**: Envio voluntário de feedback

Quando você envia feedback, o usamos para:
- Entender satisfação do usuário
- Identificar solicitações de recursos
- Descobrir bugs ou problemas
- Priorizar melhorias
- Medir qualidade geral do aplicativo

**Podemos**:
- Ler seu feedback internamente
- Categorizar temas de feedback (por exemplo, "quer mais níveis de dificuldade")
- Rastrear tendências de feedback ao longo do tempo

**NÃO fazemos**:
❌ Responder a feedback individual (nenhuma informação de contato coletada)  
❌ Compartilhar feedback publicamente  
❌ Usar feedback para marketing  
❌ Vincular feedback à sua identidade (é anônimo)

**Nota**: Se você quiser uma resposta ao seu feedback, envie-nos um email diretamente para contact@bloombyte.dev em vez de usar o formulário no aplicativo.

---

### 2.6 Para Entregar Desafios Diários (Entrega de Conteúdo)

**Base Legal**: Interesse legítimo (GDPR Art. 6(1)(f))

Usamos um servidor para:
- Gerar configurações de quebra-cabeças diários
- Garantir que todos os usuários recebam o mesmo desafio diário
- Distribuir dados de quebra-cabeças de forma eficiente

**Nenhum rastreamento ocorre**: Chamadas de API do desafio diário não coletam dados de usuário, eventos de análise ou identificadores de dispositivo.

---

### 2.7 Propósitos para os Quais NÃO Usamos Seus Dados

Para ser transparente, aqui está o que **NÃO** fazemos com seus dados:

❌ **Vender seus dados**: Nunca vendemos dados de usuário para terceiros  
❌ **Enviar spam**: Não temos seu email, então não podemos  
❌ **Compartilhar com mídia social**: Sem integração com Facebook/Twitter/Instagram  
❌ **Pontuação de crédito**: Não somos um serviço financeiro  
❌ **Decisões de emprego**: Não somos um serviço de verificação de antecedentes  
❌ **Subscrição de seguros**: Somos um jogo de quebra-cabeças  
❌ **Discriminar**: Não usamos dados para discriminar com base em raça, religião, gênero, etc.  
❌ **Tomada de decisão automatizada**: Sem IA/ML tomando decisões que o afetem legalmente

---

## 3. Base Legal para Processamento (GDPR)

Se você está na União Europeia (UE) ou Espaço Econômico Europeu (EEE), o GDPR exige que expliquemos nossa base legal para processar seus dados.

### 3.1 Consentimento (GDPR Artigo 6(1)(a))

**O que significa**: Você concorda explicitamente com a coleta de dados.

**Contamos com consentimento para**:
- ✅ **Coleta de dados de análise** (Firebase Analytics)
- ✅ **Relatório de falhas** (Firebase Crashlytics)
- ✅ **Publicidade personalizada** (AdMob com ID de publicidade)
- ✅ **Envio de feedback** (Cloud Firestore)

**Seus direitos**:
- Você pode retirar o consentimento a qualquer momento nas Configurações de Privacidade
- A retirada não afeta o processamento passado (mas interrompe a coleta futura)
- Você ainda pode usar o aplicativo com todos os consentimentos desabilitados

---

### 3.2 Interesses Legítimos (GDPR Artigo 6(1)(f))

**O que significa**: O processamento é necessário para nossos interesses comerciais legítimos, equilibrados com seus direitos.

**Contamos com interesses legítimos para**:
- ✅ **Armazenamento de dados local** (estado do jogo, preferências) - necessário para funcionalidade do aplicativo
- ✅ **Anúncios não personalizados** - apoia acesso gratuito ao aplicativo sem rastreamento invasivo
- ✅ **Entrega de desafio diário** - fornece recurso principal do jogo
- ✅ **Medidas de segurança** - protege contra fraude e abuso

**Nosso teste de equilíbrio**:
- **Nosso interesse**: Fornecer um aplicativo de quebra-cabeças gratuito, funcional e sustentável
- **Seus direitos**: Privacidade, minimização de dados, sem rastreamento excessivo
- **Resultado**: Minimizamos a coleta de dados, usamos armazenamento local quando possível e exigimos consentimento para quaisquer dados que saiam do seu dispositivo

**Seus direitos**: Você pode se opor ao processamento baseado em interesses legítimos (veja Seção 7).

---

### 3.3 Contrato (GDPR Artigo 6(1)(b))

**O que significa**: O processamento é necessário para cumprir nosso acordo com você.

**NÃO contamos com contrato** porque:
- Não é necessária criação de conta ou login
- Sem serviços pagos (aplicativo é gratuito)
- O uso do aplicativo é regido por nossos Termos e Condições (documento separado)

---

### 3.4 Obrigação Legal (GDPR Artigo 6(1)(c))

**O que significa**: Devemos processar dados para cumprir leis.

**Podemos contar com obrigação legal para**:
- ✅ **Responder a solicitações legais válidas** (ordens judiciais, intimações)
- ✅ **Cumprir relatórios fiscais/financeiros** (se monetizarmos no futuro)

**Atualmente não aplicável**: Não temos dados que somos legalmente obrigados a coletar.

---

### 3.5 Interesses Vitais (GDPR Artigo 6(1)(d))

**O que significa**: O processamento é necessário para proteger a vida de alguém.

**Não aplicável**: Sudokan é um jogo de quebra-cabeças, não um aplicativo de saúde/segurança.

---

### 3.6 Interesse Público (GDPR Artigo 6(1)(e))

**O que significa**: O processamento é necessário para uma tarefa de interesse público.

**Não aplicável**: Somos uma empresa privada, não uma autoridade pública.

---

**Resumo**: Contamos principalmente com **consentimento** (para análises, relatório de falhas, anúncios personalizados) e **interesses legítimos** (para funções principais do aplicativo). Você controla todo o processamento baseado em consentimento através das Configurações de Privacidade.

---

## 4. Compartilhamento de Dados e Terceiros

Não vendemos seus dados pessoais. No entanto, trabalhamos com prestadores de serviços terceirizados confiáveis para fornecer funcionalidade ao aplicativo. Esta seção explica com quem compartilhamos dados e por quê.

### 4.1 Google LLC (Nosso Principal Prestador de Serviços)

Usamos vários serviços do Google para alimentar o Sudokan. Aqui está o detalhamento:

#### Firebase Analytics
- **Propósito**: Análises de uso do aplicativo (se você consentir)
- **Dados Compartilhados**: Informações do dispositivo, eventos de uso do aplicativo, propriedades do usuário (veja Seção 1.2)
- **Acordo de Processamento de Dados (DPA)**: Google atua como **processador de dados** sob GDPR
- **Localização**: Dados armazenados em servidores Google nos Estados Unidos (Iowa)
- **Política de Privacidade**: [Privacidade Firebase](https://firebase.google.com/support/privacy)
- **Seu Controle**: Desabilitar em Configurações de Privacidade → "Melhorar o Jogo"

#### Firebase Crashlytics
- **Propósito**: Relatório de falhas (se você consentir)
- **Dados Compartilhados**: Logs de falhas, rastreamentos de pilha, estado do dispositivo (veja Seção 1.3)
- **Acordo de Processamento de Dados (DPA)**: Google atua como **processador de dados** sob GDPR
- **Localização**: Dados armazenados em servidores Google nos Estados Unidos
- **Política de Privacidade**: [Privacidade Firebase](https://firebase.google.com/support/privacy)
- **Seu Controle**: Desabilitar em Configurações de Privacidade → "Nos Ajude a Corrigir Problemas"

#### Google AdMob
- **Propósito**: Veiculação de anúncios (para apoiar acesso gratuito ao aplicativo)
- **Dados Compartilhados**: 
  - **Anúncios não personalizados**: Informações do dispositivo, localização aproximada (país), interações com anúncios
  - **Anúncios personalizados** (se você consentir): ID de publicidade (IDFA/AAID), dados de rastreamento entre aplicativos, interesses inferidos
- **Acordo de Processamento de Dados (DPA)**: Google atua como **processador de dados** sob GDPR
- **Localização**: Dados armazenados em servidores Google globalmente
- **Política de Privacidade**: [Privacidade AdMob](https://support.google.com/admob/answer/6128543)
- **Seu Controle**: Desabilitar anúncios personalizados em Configurações de Privacidade → "Anúncios Personalizados"

#### Cloud Firestore
- **Propósito**: Armazenamento de feedback (se você enviar feedback)
- **Dados Compartilhados**: Texto do feedback, avaliação de satisfação, contexto do dispositivo (veja Seção 1.5)
- **Acordo de Processamento de Dados (DPA)**: Google atua como **processador de dados** sob GDPR
- **Localização**: Dados armazenados em servidores Google na Europa - Bélgica, região `europe-west1`
- **Política de Privacidade**: [Privacidade Firebase](https://firebase.google.com/support/privacy)
- **Seu Controle**: Envio de feedback é voluntário; você pode solicitar exclusão a qualquer momento

**Papel do Google**: Google é um **processador de dados**, o que significa que eles processam dados em nosso nome de acordo com nossas instruções. Temos um Acordo de Processamento de Dados (DPA) com o Google que inclui:
- Cláusulas Contratuais Padrão (SCCs) para transferências internacionais (veja Seção 9)
- Obrigações de conformidade com GDPR
- Requisitos de segurança de dados
- Divulgação de subprocessadores

**Saiba Mais**:
- [Como o Google usa dados de aplicativos que usam serviços do Google](https://policies.google.com/technologies/partner-sites)
- [Centro de Recursos GDPR do Google Cloud](https://cloud.google.com/privacy/gdpr)

---

### 4.2 Parceiros de Rede de Anúncios (Mais de 100 Terceiros)

Quando você consente com anúncios personalizados, o Google AdMob compartilha dados com **mais de 100 parceiros de rede de anúncios** para veicular anúncios direcionados.

**Parceiros Comuns** (lista não exaustiva):
- Amazon Publisher Services
- AppLovin
- Chartboost
- InMobi
- ironSource
- Unity Ads
- Vungle
- Meta Audience Network
- Twitter MoPub
- TikTok For Business

**O Que Eles Podem Coletar** (quando anúncios personalizados habilitados):
- ID de publicidade (IDFA/AAID)
- Informações do dispositivo (modelo, SO, tamanho da tela)
- Interações com anúncios (impressões, cliques, conversões)
- Interesses e dados demográficos inferidos
- Dados de rastreamento entre aplicativos

**Papel Deles**: Esses parceiros são **controladores de dados independentes**, o que significa que processam dados de acordo com suas próprias políticas de privacidade, não apenas as nossas.

**Lista Completa**: [Compradores Autorizados do Google](https://support.google.com/admob/answer/9012903)

**Seu Controle**:
- Desabilitar anúncios personalizados em Configurações de Privacidade → "Anúncios Personalizados" (muda para anúncios não personalizados)
- Opt out no dispositivo:
  - **iOS**: Configurações → Privacidade → Rastreamento → Negar
  - **Android**: Configurações → Google → Anúncios → Desativar personalização de anúncios

**Importante**: Se você desabilitar anúncios personalizados no Sudokan, esses parceiros NÃO receberão seu ID de publicidade do nosso aplicativo. No entanto, outros aplicativos no seu dispositivo ainda podem compartilhar dados com eles.

---

### 4.3 API de Desafio Diário (Compartilhamento Mínimo de Dados)

Nosso recurso de Desafio Diário busca quebra-cabeças diários de um servidor que controlamos.

**Dados Compartilhados**:
- Versão do aplicativo (para garantir compatibilidade)
- Data solicitada (para buscar quebra-cabeça diário correto)
- Nível de dificuldade (para gerar quebra-cabeça apropriado)

**Dados NÃO Compartilhados**:
❌ Identificadores de dispositivo  
❌ Comportamento do usuário ou análises  
❌ Seu progresso no jogo  
❌ Informações pessoais

**Localização do Servidor**: Hospedado na nuvem (provedor específico sujeito a alterações)

**Propósito**: Garantir que todos os usuários em todo o mundo recebam o mesmo quebra-cabeça de desafio diário.

---

### 4.4 O Que NÃO Compartilhamos

Para ser absolutamente claro, **nunca** compartilhamos:

❌ **Suas soluções de quebra-cabeças ou progresso no jogo**: Isso fica no seu dispositivo  
❌ **Suas configurações ou preferências locais**: Nunca sai do seu dispositivo  
❌ **Seus identificadores pessoais**: Não os coletamos, então não podemos compartilhá-los  
❌ **Seu texto de feedback**: Apenas armazenado em nosso banco de dados privado, não compartilhado com terceiros  
❌ **Dados para propósitos não relacionados**: Não compartilhamos dados com terceiros não relacionados (por exemplo, corretores de dados, profissionais de marketing)

---

### 4.5 Divulgações Legais (Circunstâncias Raras)

Podemos divulgar suas informações se exigido por lei:

**Quando Podemos Divulgar**:
- **Ordens judiciais ou intimações**: Se legalmente compelidos por uma ordem judicial válida
- **Solicitações de aplicação da lei**: Se necessário cumprir processos legais
- **Prevenção de fraude**: Para proteger contra atividade fraudulenta, abusiva ou ilegal
- **Ameaças à segurança**: Para proteger a segurança de nossos usuários ou do público
- **Transferências de negócios**: Se Sudokan for adquirido ou fundido (dados transferidos para novo proprietário)

**O Que Fazemos**:
- Revisamos todas as solicitações legais quanto à validade
- Notificamos usuários quando legalmente permitido
- Divulgamos apenas os dados mínimos necessários
- Contestamos solicitações excessivamente amplas ou inválidas

**Importante**: Como coletamos dados mínimos e a maioria fica em seu dispositivo, temos muito poucos dados para divulgar mesmo se legalmente obrigados.

---

### 4.6 Resumo do Acordo de Processamento de Dados (DPA)

Para conformidade com GDPR, temos Acordos de Processamento de Dados com todos os processadores:

| Serviço | Processador | DPA/SCCs | Localização dos Dados |
|---------|-------------|----------|----------------------|
| Firebase Analytics | Google LLC | ✅ Sim | EUA (Iowa) |
| Firebase Crashlytics | Google LLC | ✅ Sim | EUA |
| Google AdMob | Google LLC | ✅ Sim | Global |
| Cloud Firestore | Google LLC | ✅ Sim | Bélgica (UE) |

**Cláusulas Contratuais Padrão (SCCs)**: Google usa SCCs aprovadas pela UE para transferências internacionais de dados (veja Seção 9 para detalhes).

---

## 5. Retenção de Dados

Retemos seus dados apenas pelo tempo necessário para os propósitos descritos nesta política.

### 5.1 Dados Locais (No Seu Dispositivo)

**Estado do Jogo, Histórico, Estatísticas, Configurações**:
- **Retenção**: Até você excluir o aplicativo, limpar dados do aplicativo ou limpar manualmente o histórico do jogo
- **Seu Controle**: 
  - Limpar histórico do jogo: Tela de Histórico do Jogo → botão "Limpar Histórico"
  - Excluir todos os dados: Desinstalar o aplicativo

**Importante**: Não podemos excluir remotamente dados locais porque eles nunca saem do seu dispositivo.

---

### 5.2 Dados de Análise (Firebase Analytics)

**Período de Retenção**: **2 meses** (60 dias) - excluídos automaticamente pelo Firebase

**O Que Isso Significa**:
- Dados de eventos com mais de 60 dias são automaticamente eliminados
- Propriedades do usuário são atualizadas, mas valores históricos não são retidos
- Relatórios agregados podem reter resumos (por exemplo, "10.000 usuários jogaram em janeiro"), mas não eventos individuais

**Seu Controle**:
- Desabilitar análises em Configurações de Privacidade → "Melhorar o Jogo" (interrompe coleta futura)
- Solicitar exclusão de dados existentes enviando email para contact@bloombyte.dev (excluiremos dentro de 30 dias)

**Após Exclusão**:
- Consentimento de análises é definido como falso localmente
- Nenhum dado novo é enviado ao Firebase
- Dados existentes são excluídos dentro de 60 dias automaticamente (ou imediatamente mediante solicitação manual de exclusão)

---

### 5.3 Dados de Relatório de Falhas (Firebase Crashlytics)

**Período de Retenção**: **90 dias** - excluídos automaticamente pelo Firebase

**O Que Isso Significa**:
- Relatórios de falhas com mais de 90 dias são automaticamente eliminados
- Podemos exportar dados críticos de falhas para correção de bugs (despojados de identificadores de dispositivo)

**Seu Controle**:
- Desabilitar relatório de falhas em Configurações de Privacidade → "Nos Ajude a Corrigir Problemas" (interrompe coleta futura)
- Solicitar exclusão enviando email para contact@bloombyte.dev

**Após Exclusão**:
- Consentimento de relatório de falhas é definido como falso localmente
- Nenhum dado novo de falha é enviado ao Firebase
- Dados existentes são excluídos dentro de 90 dias automaticamente

---

### 5.4 Dados de Publicidade (Google AdMob)

**Período de Retenção**: Varia por parceiro de rede de anúncios

**Dados do Google AdMob**:
- **Anúncios não personalizados**: Dados mínimos, retidos por ~30 dias
- **Anúncios personalizados**: Associações de ID de publicidade retidas até você redefinir seu ID de publicidade ou opt out

**Seu Controle**:
- Desabilitar anúncios personalizados em Configurações de Privacidade → "Anúncios Personalizados"
- Redefinir ID de publicidade:
  - **iOS**: Configurações → Privacidade → Rastreamento → Redefinir Identificador de Publicidade
  - **Android**: Configurações → Google → Anúncios → Redefinir ID de publicidade
- Solicitar exclusão do Google: [Configurações de Anúncios do Google](https://adssettings.google.com/)

**Após Opt-Out**:
- Novas solicitações de anúncios usam segmentação não personalizada
- Associações existentes de ID de publicidade podem persistir por ~30 dias (política de retenção do Google)

---

### 5.5 Dados de Feedback (Cloud Firestore)

**Período de Retenção**: **12 meses** - excluídos automaticamente após 1 ano

**O Que Isso Significa**:
- Feedback enviado hoje é excluído 12 meses a partir de agora
- Podemos exportar temas de feedback anonimizados antes da exclusão (por exemplo, "usuários querem mais níveis de dificuldade")

**Seu Controle**:
- Solicitar exclusão antecipada enviando email para contact@bloombyte.dev com detalhes do seu dispositivo e timestamp de envio
- Excluiremos dentro de 30 dias da solicitação

**Após Exclusão**:
- Texto do feedback é permanentemente removido do Firestore
- Insights agregados podem permanecer (por exemplo, "85% de avaliação de satisfação positiva" - nenhum feedback individual)

---

### 5.6 Usuários Inativos

**Se você parar de usar Sudokan**:
- **Dados locais**: Permanecem no seu dispositivo até desinstalação do aplicativo
- **Dados de análise**: Excluídos automaticamente após 60 dias
- **Dados de falha**: Excluídos automaticamente após 90 dias
- **Feedback**: Excluído automaticamente após 12 meses
- **Dados de anúncios**: Varia por rede (tipicamente 30-90 dias para usuários não ativos)

**NÃO temos conceito de "contas de usuário"**, então não podemos detectar inatividade. Períodos de retenção automáticos se aplicam independentemente do uso.

---

### 5.7 Tabela de Resumo de Exclusão de Dados

| Tipo de Dados | Período de Retenção | Exclusão Automática? | Exclusão Manual |
|---------------|---------------------|---------------------|-----------------|
| **Dados locais** (estado do jogo, configurações) | Até desinstalação do aplicativo | ❌ Não (seu dispositivo) | Limpar dados no aplicativo ou desinstalar |
| **Dados de análise** | 60 dias | ✅ Sim | Email contact@bloombyte.dev |
| **Relatórios de falhas** | 90 dias | ✅ Sim | Email contact@bloombyte.dev |
| **Dados de anúncios** (não personalizados) | ~30 dias | ✅ Sim | N/A (automático) |
| **Dados de anúncios** (personalizados) | Até opt-out/redefinição de ID | ❌ Não | Redefinir ID de publicidade + opt out |
| **Feedback** | 12 meses | ✅ Sim | Email contact@bloombyte.dev |

---

## 6. Segurança de Dados

Tomamos medidas razoáveis para proteger seus dados de acesso não autorizado, perda ou uso indevido.

### 6.1 Dados Armazenados Localmente (No Seu Dispositivo)

**Medidas de Segurança**:
- **Armazenamento criptografado**: Banco de dados Hive usa criptografia AES-256 (armazenamento seguro do Flutter)
- **Acesso isolado**: Apenas Sudokan pode acessar seus próprios dados (proteção no nível do SO)
- **Sem transmissão de rede**: Dados locais nunca enviados pela internet (a menos que você habilite análises/relatório de falhas)

**Sua Responsabilidade**:
- Mantenha seu dispositivo seguro (use bloqueio de tela, autenticação biométrica)
- Não faça jailbreak/root do seu dispositivo (enfraquece proteções no nível do SO)
- Mantenha seu SO atualizado (patches de segurança)

**O Que Não Podemos Controlar**:
- Se seu dispositivo for roubado e desbloqueado, dados locais são acessíveis
- Se você usar serviços de backup de dispositivo (iCloud, Google Drive), seus dados do jogo podem ser copiados para a nuvem (controlado pela Apple/Google, não por nós)

---

### 6.2 Dados em Trânsito (Comunicação de Rede)

**Criptografia**:
- ✅ **Criptografia HTTPS/TLS** para todas as solicitações de rede:
  - Firebase Analytics: Criptografado
  - Firebase Crashlytics: Criptografado
  - Google AdMob: Criptografado
  - Cloud Firestore: Criptografado
  - API de Desafio Diário: Criptografado

**O Que Isso Significa**:
- Dados enviados pela internet são criptografados em trânsito
- Terceiros (ISPs, operadoras de rede) não podem interceptar e ler dados
- Ataques man-in-the-middle são prevenidos

---

### 6.3 Dados em Repouso (Servidores de Terceiros)

**Segurança do Google** (Firebase, AdMob, Firestore):
- Data centers com segurança física (guardas, acesso biométrico)
- Dados criptografados em repouso (AES-256)
- Auditorias de segurança regulares e certificações (ISO 27001, SOC 2)
- Controles de acesso (apenas pessoal autorizado do Google)

**Saiba Mais**:
- [Segurança do Google Cloud](https://cloud.google.com/security)
- [Documentação de Segurança do Firebase](https://firebase.google.com/support/privacy)

---

### 6.4 Nossas Práticas de Segurança

**Como desenvolvedores do aplicativo, nós**:
- ✅ Usamos práticas de codificação segura (evitamos vulnerabilidades comuns)
- ✅ Atualizamos regularmente dependências (patches de segurança)
- ✅ Conduzimos revisões de código antes de lançamentos
- ✅ Monitoramos relatórios de falhas para problemas de segurança
- ✅ Respondemos a vulnerabilidades de segurança prontamente

**Controles de Acesso**:
- Apenas pessoal autorizado (desenvolvedor do aplicativo) pode acessar:
  - Painel do Firebase Analytics
  - Relatórios do Crashlytics
  - Banco de dados de feedback do Firestore
- Nenhum terceiro tem acesso direto aos seus dados (exceto Google como processador)

**Resposta a Incidentes**:
- Se ocorrer uma violação de dados, nós:
  1. Investigaremos e conteremos a violação
  2. Notificaremos usuários afetados (se identificáveis)
  3. Reportaremos às autoridades de proteção de dados (se exigido por lei)
  4. Tomaremos ação corretiva para prevenir recorrência

---

### 6.5 Limitações e Riscos

**Nenhum Sistema é 100% Seguro**:
- Apesar de nossos esforços, nenhum método de transmissão ou armazenamento é completamente seguro
- Ataques cibernéticos, falhas de hardware ou erros humanos podem ocorrer
- Se uma violação acontecer, assumiremos responsabilidade e notificaremos você

**Riscos de Terceiros**:
- Contamos com a segurança do Google (Firebase, AdMob, Firestore)
- Parceiros de rede de anúncios (mais de 100) têm suas próprias práticas de segurança
- Não podemos garantir segurança de terceiros, mas escolhemos parceiros respeitáveis

**Seu Papel**:
- Use uma senha forte no dispositivo
- Evite usar Sudokan em dispositivos públicos/compartilhados
- Mantenha o SO do seu dispositivo atualizado
- Tenha cuidado com tentativas de phishing (nunca pediremos senhas ou informações de pagamento)

---

### 6.6 Contato de Segurança

**Se você descobrir uma vulnerabilidade de segurança**:
- **Email**: contact@bloombyte.dev
- **Assunto**: "Vulnerabilidade de Segurança no Sudokan"
- **Tempo de Resposta**: Responderemos dentro de 7 dias

**Por favor, NÃO**:
- Divulgue publicamente a vulnerabilidade antes de corrigirmos
- Explore a vulnerabilidade para propósitos maliciosos

Apreciamos divulgação responsável e creditaremos pesquisadores de segurança (com permissão).

---

## 7. Seus Direitos e Escolhas

Dependendo da sua localização, você tem direitos em relação aos seus dados pessoais. Respeitamos todos os direitos, independentemente de onde você mora.

### 7.1 Direitos Universais (Todos, Mundialmente)

Você sempre pode:

#### 1. **Controlar Consentimento**
- **Onde**: Configurações de Privacidade no aplicativo
- **O Quê**: Habilitar/desabilitar análises, relatório de falhas, anúncios personalizados
- **Efeito**: Imediato (interrompe coleta futura de dados)

#### 2. **Limpar Dados Locais**
- **Onde**: Tela de Histórico do Jogo → botão "Limpar Histórico"
- **O Quê**: Exclui histórico e estatísticas do jogo
- **Efeito**: Imediato (não pode ser desfeito)

#### 3. **Desinstalar o Aplicativo**
- **Onde**: Configurações do seu dispositivo
- **O Quê**: Exclui todos os dados locais
- **Efeito**: Imediato (progresso do jogo perdido)

#### 4. **Entre em Contato Conosco**
- **Email**: contact@bloombyte.dev
- **Para**: Perguntas, reclamações, solicitações de dados
- **Tempo de Resposta**: Dentro de 30 dias

---

### 7.2 Direitos GDPR (Residentes da UE/EEE/Reino Unido)

Se você está na União Europeia, Espaço Econômico Europeu ou Reino Unido, você tem direitos adicionais sob o GDPR:

#### Direito de Acesso (Artigo 15)
**O Quê**: Solicitar uma cópia dos seus dados pessoais que possuímos

**Como Exercer**:
- Envie email para contact@bloombyte.dev com assunto "Solicitação de Acesso a Dados GDPR"
- Inclua: Modelo do seu dispositivo, datas aproximadas de uso do aplicativo
- Forneceremos dados em formato estruturado e legível por máquina (JSON)

**O Que Você Receberá**:
- Cópia dos dados de análise (se análises habilitadas)
- Cópia dos relatórios de falhas (se relatório de falhas habilitado)
- Cópia dos envios de feedback (se você enviou algum)
- Nota: Dados locais (estado do jogo, configurações) já estão no seu dispositivo

**Prazo**: Dentro de **30 dias** (pode estender para 60 dias para solicitações complexas)

---

#### Direito de Retificação (Artigo 16)
**O Quê**: Corrigir dados pessoais imprecisos

**Como Exercer**:
- Envie email para contact@bloombyte.dev com assunto "Solicitação de Correção de Dados GDPR"
- Especifique quais dados estão incorretos e a correção

**Importante**: A maioria dos dados que coletamos é técnica (modelo do dispositivo, eventos do aplicativo), então retificação pode não ser aplicável. Se você acredita que os dados estão imprecisos, investigaremos.

**Prazo**: Dentro de **30 dias**

---

#### Direito ao Apagamento / "Direito ao Esquecimento" (Artigo 17)
**O Quê**: Solicitar exclusão dos seus dados pessoais

**Como Exercer**:
- Envie email para contact@bloombyte.dev com assunto "Solicitação de Exclusão de Dados GDPR"
- Inclua: Modelo do dispositivo, datas aproximadas de uso do aplicativo

**O Que Excluiremos**:
- ✅ Dados de análise (do Firebase, dentro de 30 dias)
- ✅ Relatórios de falhas (do Crashlytics, dentro de 30 dias)
- ✅ Envios de feedback (do Firestore, dentro de 30 dias)
- ✅ Dados de anúncios (instruiremos Google a excluir, mas não podemos controlar redes de anúncios de terceiros)

**O Que Não Podemos Excluir**:
- ❌ Dados locais (no seu dispositivo - você deve limpá-los ou desinstalar)
- ❌ Dados exigidos por lei para reter (por exemplo, registros financeiros - atualmente N/A)
- ❌ Dados agregados/anonimizados (não considerados dados pessoais)

**Prazo**: Dentro de **30 dias**

**Após Exclusão**:
- Confirmaremos exclusão por email
- Você pode continuar usando o aplicativo (toda coleta de dados permanece desabilitada a menos que você consinta novamente)

---

#### Direito de Restringir Processamento (Artigo 18)
**O Quê**: Limitar como usamos seus dados enquanto verificamos uma solicitação (por exemplo, disputa de precisão)

**Como Exercer**:
- Envie email para contact@bloombyte.dev com assunto "Solicitação de Restrição de Processamento GDPR"
- Explique o motivo da restrição

**Efeito**:
- Pausaremos processamento não essencial (por exemplo, análise de análises)
- Funções essenciais (por exemplo, veiculação de anúncios) podem continuar
- Dados não serão excluídos, mas uso é limitado

**Prazo**: Dentro de **30 dias**

---

#### Direito à Portabilidade de Dados (Artigo 20)
**O Quê**: Receber seus dados em formato portátil para transferir para outro serviço

**Como Exercer**:
- Envie email para contact@bloombyte.dev com assunto "Solicitação de Portabilidade de Dados GDPR"

**O Que Você Receberá**:
- Arquivo JSON com:
  - Eventos de análise (se aplicável)
  - Relatórios de falhas (se aplicável)
  - Envios de feedback (se aplicável)
  - Estatísticas do jogo (exportadas do armazenamento local, se você fornecer um backup)

**Formato**: JSON (legível por máquina)

**Prazo**: Dentro de **30 dias**

---

#### Direito de Objeção (Artigo 21)
**O Quê**: Objetar ao processamento baseado em interesses legítimos

**Como Exercer**:
- Envie email para contact@bloombyte.dev com assunto "Objeção ao Processamento GDPR"
- Especifique a qual processamento você objeta (por exemplo, anúncios não personalizados, API de desafio diário)

**Efeito**:
- Interromperemos o processamento a menos que tenhamos fundamentos legítimos convincentes para continuar
- Para análises/relatório de falhas: Já controlável via Configurações de Privacidade
- Para anúncios: Contamos com anúncios para oferecer um aplicativo gratuito, mas você pode desabilitar anúncios personalizados

**Prazo**: Dentro de **30 dias**

---

#### Direito de Objeção à Tomada de Decisão Automatizada (Artigo 22)
**O Quê**: Objetar a decisões tomadas apenas por sistemas automatizados que o afetem significativamente

**Status do Sudokan**: ❌ **Não aplicável** - não tomamos decisões automatizadas que o afetem legal ou significativamente. Exemplos do que NÃO fazemos:
- Pontuação de crédito
- Decisões de emprego
- Subscrição de seguros
- Julgamentos legais

**Ajuste de Dificuldade Dinâmica (DDA)**: O sistema DDA ajusta recomendações de dificuldade de quebra-cabeças, mas:
- É um recurso de jogabilidade, não uma decisão legal
- Você pode ignorar recomendações
- Você pode desabilitar DDA nas configurações
- Sem impacto legal ou significativo

---

#### Direito de Apresentar Reclamação
**O Quê**: Registrar reclamação com uma autoridade de proteção de dados

**Como**:
- **Residentes da UE**: Entre em contato com a autoridade supervisora do seu país
  - [Lista de Autoridades de Proteção de Dados da UE](https://edpb.europa.eu/about-edpb/about-edpb/members_en)
- **Residentes do Reino Unido**: [Information Commissioner's Office (ICO)](https://ico.org.uk/)

**Autoridades Comuns**:
- **Alemanha**: Bundesbeauftragter für den Datenschutz und die Informationsfreiheit (BfDI)
- **França**: Commission Nationale de l'Informatique et des Libertés (CNIL)
- **Itália**: Garante per la protezione dei dati personali
- **Espanha**: Agencia Española de Protección de Datos (AEPD)
- **Romênia**: Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)

**Quando Reclamar**:
- Se não respondermos à sua solicitação dentro de 30 dias
- Se você estiver insatisfeito com nossa resposta
- Se você acredita que violamos o GDPR

**Sem Penalidade**: Registrar reclamação não impede você de buscar remédios legais.

---

### 7.3 Direitos CCPA/CPRA (Residentes da Califórnia)

Se você é residente da Califórnia, você tem direitos sob a California Consumer Privacy Act (CCPA) e California Privacy Rights Act (CPRA):

#### Direito de Saber (CCPA § 1798.100)
**O Quê**: Solicitar divulgação de:
- Categorias de informações pessoais coletadas
- Fontes de informações pessoais
- Propósito comercial para coleta
- Terceiros com quem compartilhamos dados

**Como Exercer**:
- Envie email para contact@bloombyte.dev com assunto "Solicitação de Dados CCPA"

**O Que Você Receberá**:
- Relatório detalhado (veja Seções 1-4 desta política)
- Cópia de dados específicos (igual à solicitação de acesso GDPR)

**Prazo**: Dentro de **45 dias** (pode estender para 90 dias com aviso)

---

#### Direito de Excluir (CCPA § 1798.105)
**O Quê**: Solicitar exclusão de informações pessoais

**Como Exercer**: Igual ao apagamento GDPR (veja Seção 7.2)

**Exceções**: Podemos reter dados se necessário para:
- Completar transações
- Detectar incidentes de segurança
- Cumprir obrigações legais
- Usos internos legais (por exemplo, depuração)

**Prazo**: Dentro de **45 dias**

---

#### Direito de Opt-Out de Venda (CCPA § 1798.120)
**O Quê**: Opt-out de "venda" de informações pessoais

**Status do Sudokan**: ❌ **NÃO vendemos informações pessoais**
- Usamos Google AdMob para anúncios (compartilhamento de dados, não venda)
- Não vendemos dados para corretores de dados ou terceiros
- Sem troca financeira por dados de usuário

**No entanto**: Sob a definição ampla da CCPA, anúncios personalizados podem ser considerados "venda" em algumas interpretações.

**Seu Controle**:
- Desabilitar anúncios personalizados em Configurações de Privacidade → "Anúncios Personalizados"
- Efeito: Interrompe compartilhamento de ID de publicidade com redes de anúncios

**Sem Link "Não Venda Minhas Informações Pessoais"**: Não exibimos isso porque:
- Não vendemos dados no sentido tradicional
- Você pode controlar anúncios personalizados diretamente nas Configurações de Privacidade
- Anúncios não personalizados não são considerados "venda"

---

#### Direito de Opt-Out de Compartilhamento para Publicidade Comportamental entre Contextos (CPRA § 1798.135)
**O Quê**: Opt-out de compartilhamento de dados para publicidade direcionada em diferentes contextos (aplicativos, sites)

**Como Exercer**:
- Desabilitar anúncios personalizados em Configurações de Privacidade → "Anúncios Personalizados"
- Ou usar opt-out no nível do dispositivo (veja Seção 7.1)

**Prazo**: Imediato

---

#### Direito de Corrigir Informações Imprecisas (CPRA § 1798.106)
**O Quê**: Solicitar correção de informações pessoais imprecisas

**Como Exercer**: Igual à retificação GDPR (veja Seção 7.2)

**Prazo**: Dentro de **45 dias**

---

#### Direito de Limitar Uso de Informações Pessoais Sensíveis (CPRA § 1798.121)
**O Quê**: Limitar uso de informações pessoais sensíveis para certos propósitos

**Status do Sudokan**: ❌ **NÃO coletamos informações pessoais sensíveis** conforme definido pela CCPA:
- ❌ Número de Seguro Social, carteira de motorista, passaporte
- ❌ Credenciais de conta (sem login necessário)
- ❌ Geolocalização precisa (apenas nível de país para anúncios)
- ❌ Raça, etnia, religião, orientação sexual
- ❌ Dados biométricos (impressões digitais, reconhecimento facial)
- ❌ Dados de saúde, dados genéticos
- ❌ Conteúdos de emails ou mensagens

---

#### Direito de Não Discriminação (CCPA § 1798.125)
**O Quê**: Não podemos discriminá-lo por exercer direitos CCPA

**Compromisso do Sudokan**:
- ✅ Você pode usar o aplicativo totalmente com todos os consentimentos desabilitados
- ✅ Sem diferenças de preço (aplicativo é gratuito)
- ✅ Sem negação de serviço
- ✅ Sem funcionalidade degradada

**Divulgação de Incentivo Financeiro**: ❌ Não oferecemos incentivos financeiros para coleta de dados (por exemplo, descontos por optar), então isso não é aplicável.

---

### 7.4 Outros Direitos Regionais

#### Brasil (LGPD)
**Lei**: Lei Geral de Proteção de Dados (LGPD)  
**Direitos**: Similares ao GDPR (acesso, correção, exclusão, portabilidade, retirada de consentimento)  
**Como Exercer**: Envie email para contact@bloombyte.dev com assunto "Solicitação de Dados LGPD"  
**Prazo**: Dentro de **15 dias**

**Autoridade Supervisora**: Autoridade Nacional de Proteção de Dados (ANPD)

---

#### Japão (APPI)
**Lei**: Act on the Protection of Personal Information (APPI)  
**Direitos**: Divulgação, correção, suspensão de uso, exclusão  
**Como Exercer**: Envie email para contact@bloombyte.dev com assunto "Solicitação de Dados APPI"  
**Prazo**: Sem demora

**Autoridade Supervisora**: Personal Information Protection Commission (PPC)

---

#### Outros Países
**Se seu país tem leis de proteção de dados**, honraremos direitos equivalentes:
- Acesso aos seus dados
- Correção de dados imprecisos
- Exclusão de dados
- Retirada de consentimento

**Como Exercer**: Envie email para contact@bloombyte.dev com assunto "Solicitação de Proteção de Dados [País]"

---

### 7.5 Como Exercer Seus Direitos

**Para fazer qualquer solicitação de dados**:

1. **Envie-nos email**: contact@bloombyte.dev
2. **Linha de assunto**: Especifique o tipo de solicitação (por exemplo, "Solicitação de Exclusão de Dados GDPR")
3. **Inclua**:
   - Modelo do seu dispositivo (por exemplo, "iPhone 14", "Samsung Galaxy S23")
   - Seu país/região
   - Datas aproximadas de uso do aplicativo (ajuda a localizar seus dados)
   - Detalhes específicos da solicitação
4. **Responderemos** dentro do prazo legal (tipicamente 30-45 dias)

**Verificação**:
- Como não coletamos identificadores pessoais (nome, email), verificação é desafiadora
- Podemos fazer perguntas de acompanhamento sobre seu dispositivo/uso para confirmar identidade
- Para solicitações de exclusão, excluiremos dados correspondentes às características do seu dispositivo

**Sem Custo**: Exercer seus direitos é **gratuito**. Podemos cobrar uma taxa razoável por solicitações excessivas ou repetitivas.

---

## 8. Privacidade de Crianças

Sudokan é projetado para jogadores com **13 anos de idade ou mais**. Cumprimos a Children's Online Privacy Protection Act (COPPA) e outras leis de privacidade infantil.

### 8.1 Restrição de Idade

**Idade Mínima**: 13+

**Por Quê**: Coleta de dados (análises, relatório de falhas, anúncios) requer consentimento parental para crianças menores de 13 anos em muitas jurisdições (COPPA nos EUA, GDPR na UE).

**Aplicação**:
- NÃO coletamos informações de idade ou verificamos idades de usuários
- Contamos com classificações etárias de lojas de aplicativos:
  - **Apple App Store**: Classificado 4+ (público geral, mas Política de Privacidade indica 13+)
  - **Google Play Store**: ESRB Everyone (E) - indica "13+" no aviso de privacidade

---

### 8.2 Conformidade com COPPA (Estados Unidos)

**Requisitos da COPPA**: Sites/aplicativos direcionados a crianças menores de 13 anos devem:
1. Obter consentimento parental verificável antes de coletar informações pessoais
2. Divulgar práticas de coleta de dados
3. Oferecer aos pais a capacidade de revisar, excluir e controlar dados

**Status do Sudokan**: ❌ **Não direcionado a crianças menores de 13 anos**
- Público-alvo: Adolescentes e adultos (13+)
- Conteúdo não é especificamente projetado para crianças
- Sem recursos específicos para crianças (personagens de desenho animado, jogabilidade focada em crianças)

**Se uma Criança Menor de 13 Anos Usar Sudokan**:
- **Responsabilidade dos Pais/Responsáveis**: Pais devem supervisionar uso do dispositivo e desabilitar análises/anúncios nas Configurações de Privacidade
- **Nosso Compromisso**: Se descobrirmos que dados foram coletados de uma criança menor de 13 anos sem consentimento parental, excluiremos imediatamente

**Como Reportar**: Se você acredita que seu filho menor de 13 anos usou Sudokan e consentiu com coleta de dados, envie email para contact@bloombyte.dev com assunto "Solicitação de Exclusão de Dados COPPA". Excluiremos dados dentro de 30 dias.

---

### 8.3 GDPR-K (Privacidade Infantil na UE)

**Idade de Consentimento na UE para Processamento de Dados**: Varia por país (13-16 anos)
- **Alemanha, Reino Unido, França, Itália, Espanha, Romênia**: 16+
- **Holanda, Dinamarca**: 13+
- **Bélgica**: 13+

**Consentimento Parental**: Se uma criança abaixo da idade de consentimento usar Sudokan:
- Pai/responsável deve fornecer consentimento para análises, relatório de falhas, anúncios personalizados
- NÃO temos mecanismo de consentimento parental (sem sistema de conta)

**Recomendação**: Pais devem:
- Desabilitar toda coleta de dados nas Configurações de Privacidade
- Usar controles parentais no nível do dispositivo (Tempo de Uso no iOS, Family Link no Android)
- Monitorar uso do aplicativo

---

### 8.4 Pais: Como Proteger Seu Filho

**Para garantir segurança infantil**:

1. **Desabilitar Coleta de Dados**:
   - Vá para Configurações de Privacidade
   - Desabilitar "Melhorar o Jogo" (análises)
   - Desabilitar "Nos Ajude a Corrigir Problemas" (relatório de falhas)
   - Desabilitar "Anúncios Personalizados" (segmentação de anúncios)

2. **Usar Controles Parentais do Dispositivo**:
   - **iOS**: Configurações → Tempo de Uso → Restrições de Conteúdo e Privacidade
   - **Android**: Aplicativo Google Family Link

3. **Monitorar Uso**:
   - Verificar relatórios de Tempo de Uso
   - Revisar permissões do aplicativo periodicamente

4. **Restringir Compras no Aplicativo** (se adicionarmos no futuro):
   - **iOS**: Configurações → Tempo de Uso → Restrições de Conteúdo e Privacidade → Compras no iTunes e App Store → Compras no Aplicativo → Não Permitir
   - **Android**: Google Play Store → Configurações → Exigir autenticação para compras

**Entre em Contato**: Se você tem preocupações sobre privacidade do seu filho, envie email para contact@bloombyte.dev.

---

### 8.5 Responsabilidade de Terceiros

**Google AdMob** e **parceiros de rede de anúncios** têm suas próprias políticas de privacidade infantil:
- [Política de Famílias do Google AdMob](https://support.google.com/admob/answer/9283766)
- Muitas redes de anúncios restringem segmentação comportamental para crianças

**Não podemos controlar práticas de terceiros**, mas escolhemos parceiros respeitáveis comprometidos com segurança infantil.

---

## 9. Transferências Internacionais de Dados

Seus dados podem ser transferidos e processados em países fora do seu. Esta seção explica como protegemos seus dados durante transferências internacionais.

### 9.1 Onde Seus Dados São Processados

**Localizações de Armazenamento de Dados**:

| Tipo de Dados | Localização Principal | Processador | Base Legal para Transferência |
|---------------|----------------------|-------------|-------------------------------|
| **Dados locais** (estado do jogo, configurações) | Seu dispositivo (seu país) | N/A | Sem transferência (fica local) |
| **Dados de análise** | Estados Unidos (Iowa) | Google LLC (Firebase) | Cláusulas Contratuais Padrão (SCCs) |
| **Relatórios de falhas** | Estados Unidos | Google LLC (Crashlytics) | Cláusulas Contratuais Padrão (SCCs) |
| **Dados de anúncios** | Global (múltiplos países) | Google LLC + redes de anúncios | Cláusulas Contratuais Padrão (SCCs) / Decisões de Adequação |
| **Feedback** | Bélgica (UE) | Google LLC (Firestore) | Dentro da UE (sem transferência se você está na UE) |

**Por Que Dados Saem do Seu País**:
- **Firebase Analytics/Crashlytics**: Infraestrutura padrão do Google é baseada nos EUA
- **AdMob**: Anúncios veiculados globalmente do data center mais próximo para desempenho
- **Firestore**: Escolhemos especificamente servidores da UE (Bélgica) para minimizar transferências para usuários da UE

---

### 9.2 Base Legal para Transferências Internacionais (GDPR)

Se você está na UE/EEE/Reino Unido, transferir seus dados para fora dessas regiões requer salvaguardas legais sob GDPR Artigos 44-50.

#### Cláusulas Contratuais Padrão (SCCs)
**O Quê**: Modelos de contrato aprovados pela Comissão da UE que protegem legalmente dados transferidos para fora da UE

**Nossa Implementação**:
- ✅ Google LLC assinou **Cláusulas Contratuais Padrão da UE (2021/914)** conosco
- ✅ SCCs cobrem Firebase Analytics, Crashlytics, AdMob e Firestore
- ✅ Google se compromete com proteções de nível GDPR mesmo nos EUA
- ✅ Inclui direitos do titular dos dados, obrigações de segurança e notificações de violação

**Seus Direitos Sob SCCs**:
- Solicitar uma cópia das SCCs enviando email para contact@bloombyte.dev
- Fazer valer termos das SCCs diretamente contra Google (direitos de beneficiário terceiro)
- Registrar reclamações com autoridades supervisoras da UE

**Saiba Mais**:
- [Adendo de Processamento de Dados do Google Cloud](https://cloud.google.com/terms/data-processing-addendum)
- [Cláusulas Contratuais Padrão da UE](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en)

---

#### Decisões de Adequação
**O Quê**: Determinação da Comissão da UE de que um país fornece proteção de dados adequada

**Países Aplicáveis**:
- ✅ **Espaço Econômico Europeu (EEE)**: Noruega, Islândia, Liechtenstein
- ✅ **Reino Unido** (decisão de adequação pós-Brexit)
- ✅ **Suíça** (adequação parcial)
- ❌ **Estados Unidos**: Sem decisão de adequação geral (usa SCCs em vez disso)

**Região UE do Firestore**:
- Se você está na UE e seu feedback é armazenado na Bélgica (`europe-west1`), dados permanecem dentro da UE
- Nenhuma transferência internacional ocorre (GDPR Capítulo V não se aplica)

---

#### Quadro de Privacidade de Dados UE-EUA (DPF)
**Status em novembro de 2025**: O Quadro de Privacidade de Dados UE-EUA fornece base legal para transferências transatlânticas de dados.

**Certificação do Google**:
- Google LLC é certificado sob o Quadro de Privacidade de Dados UE-EUA
- Fornece salvaguardas adicionais para processamento de dados baseado nos EUA
- Complementa Cláusulas Contratuais Padrão

**Seus Direitos**:
- Registrar reclamações com o Departamento de Comércio dos EUA
- Invocar arbitragem vinculante para disputas não resolvidas

**Saiba Mais**: [Lista do Quadro de Privacidade de Dados](https://www.dataprivacyframework.gov/s/)

**Importante**: Mesmo sem DPF, nossas SCCs com Google garantem conformidade legal.

---

### 9.3 Transferências de Redes de Anúncios de Terceiros

**Desafio**: Mais de 100 redes de anúncios podem transferir dados globalmente

**Nossa Abordagem**:
1. **Anúncios não personalizados** (padrão): Dados mínimos compartilhados, apenas nível de país
2. **Anúncios personalizados** (se você consentir):
   - Google AdMob usa SCCs com parceiros de anúncios
   - Muitas redes de anúncios são certificadas pelo DPF UE-EUA
   - Algumas podem contar com outras bases legais (por exemplo, decisões de adequação, processamento local)

**Seu Controle**:
- Desabilitar anúncios personalizados nas Configurações de Privacidade para minimizar transferências internacionais
- Opt out no nível do dispositivo (configurações de Rastreamento do iOS, Configurações de Anúncios do Android)

**Transparência**: Não podemos garantir que todas as mais de 100 redes de anúncios cumpram perfeitamente o GDPR. Escolhemos parceiros respeitáveis e contamos com processo de verificação do Google.

---

### 9.4 Transferências de Dados para a Romênia (Nossa Localização)

**Localização do Desenvolvedor**: Bloom Byte SRL está baseada na Romênia (estado membro da UE)

**Transferências para a Romênia**:
- ❌ **Sem transferências diretas**: Não temos nossos próprios servidores; todos os dados são processados pelo Google
- ✅ **Dentro da UE**: Romênia está na UE, então transferências UE → Romênia não requerem salvaguardas adicionais
- ❌ **Não acessamos dados brutos de usuário**: Análises/relatórios de falhas visualizados via painéis do Google (dados ficam nos servidores do Google)

**Exceção**: Se você nos enviar email (contact@bloombyte.dev), seu email é processado na Romênia. Esta é uma transferência direta que você inicia voluntariamente.

---

### 9.5 Acesso Governamental a Dados (Preocupações com Vigilância)

**Preocupação**: Leis de vigilância do governo dos EUA (FISA Seção 702, Ordem Executiva 12333) podem permitir acesso a dados armazenados nos EUA.

**Nossa Posição**:
- **Coleta de dados limitada**: Minimizamos dados que saem do seu dispositivo
- **Compromissos do Google**: Google contesta solicitações governamentais excessivamente amplas e publica relatórios de transparência
- **Anonimização**: A maioria dos dados que coletamos é pseudônima (sem nomes, emails)
- **Seu controle**: Desabilitar análises/relatório de falhas para manter dados locais

**O Que Fazemos Se Recebermos uma Solicitação Legal**:
1. Revisar validade legal
2. Contestar solicitações excessivamente amplas ou ilegais
3. Notificar usuários afetados (se legalmente permitido)
4. Divulgar apenas dados mínimos necessários

**Relatório de Transparência**: Google publica solicitações de dados governamentais: [Relatório de Transparência do Google](https://transparencyreport.google.com/)

---

### 9.6 Seus Direitos em Relação a Transferências Internacionais

**Se você está na UE/EEE/Reino Unido**:
- ✅ **Objetar a transferências**: Envie email para contact@bloombyte.dev com assunto "Objeção GDPR a Transferência Internacional"
- ✅ **Solicitar processamento local**: Não podemos mudar a infraestrutura do Google, mas desabilitaremos coleta de dados para você
- ✅ **Registrar reclamação**: Entre em contato com sua autoridade nacional de proteção de dados (veja Seção 7.2)

**Se não pudermos fornecer salvaguardas adequadas**, interromperemos o processamento de seus dados (e você pode usar o aplicativo offline com todos os consentimentos desabilitados).

---

### 9.7 Mudanças Futuras nas Localizações de Dados

**Se mudarmos prestadores de serviços** ou localizações de dados:
- Atualizaremos esta Política de Privacidade (veja Seção 10)
- Garantiremos que novos provedores tenham salvaguardas adequadas (SCCs, decisões de adequação, DPF)
- Notificaremos usuários se a mudança afetar materialmente direitos de privacidade

**Compromisso atual**: Firestore permanecerá na UE (Bélgica) para armazenamento de feedback.

---

## 10. Mudanças nesta Política

Podemos atualizar esta Política de Privacidade de tempos em tempos para refletir mudanças em nossas práticas, requisitos legais ou recursos do aplicativo.

### 10.1 Como Notificamos Você sobre Mudanças

**Mudanças Materiais** (por exemplo, nova coleta de dados, propósitos alterados, novos terceiros):
- Atualizar data de "Última Atualização" no topo desta política
- Exibir uma **notificação no aplicativo** na próxima inicialização do aplicativo (caixa de diálogo de alerta)
- Exigir **novo consentimento** para mudanças no processamento baseado em consentimento (análises, relatório de falhas, anúncios personalizados)

**Mudanças Não Materiais** (por exemplo, esclarecimentos, erros de digitação, formatação, atualizações de informações de contato):
- Atualizar data de "Última Atualização"
- Nenhuma notificação no aplicativo necessária
- Mudanças efetivas imediatamente após postagem

**Onde Encontrar a Versão Mais Recente**:
- No aplicativo: Configurações → Política de Privacidade (abre este documento)
- Site: sudokan.bloombyte.dev/privacy/
- Listagens de lojas de aplicativos: Link na descrição do aplicativo

---

### 10.2 Seus Direitos Quando a Política Muda

**Se você discordar das mudanças**:
- ✅ **Retirar consentimento**: Desabilitar análises, relatório de falhas, anúncios personalizados nas Configurações de Privacidade
- ✅ **Parar de usar o aplicativo**: Desinstalar Sudokan (todos os dados locais excluídos)
- ✅ **Solicitar exclusão de dados**: Enviar email para contact@bloombyte.dev para excluir dados armazenados na nuvem

**Se exigirmos novo consentimento**:
- Você verá uma caixa de diálogo de consentimento na próxima inicialização do aplicativo
- Você pode aceitar ou recusar cada consentimento separadamente
- Recusar não impede uso do aplicativo (você pode jogar com todos os consentimentos desligados)

---

### 10.3 Histórico de Versões

**Versão Atual**: 9 de novembro de 2025

**Atualizações Principais**:
- **9 de novembro de 2025**: Política de Privacidade inicial criada para lançamento do aplicativo v1.0.0

**Atualizações futuras** serão listadas aqui com breves descrições.

---

### 10.4 Frequência de Revisão

Revisamos esta Política de Privacidade:
- **Anualmente** (no mínimo)
- **Antes de atualizações importantes do aplicativo** (novos recursos que afetam privacidade)
- **Quando leis mudam** (novas regulamentações de privacidade)
- **Mediante feedback do usuário** (se a política estiver pouco clara ou imprecisa)

**Data da Última Revisão**: 9 de novembro de 2025

---

## 11. Entre em Contato Conosco

Estamos comprometidos com transparência e responder suas perguntas sobre privacidade.

### 11.1 Consultas sobre Privacidade

**Para perguntas, solicitações ou reclamações relacionadas à privacidade**:

**Email**: contact@bloombyte.dev  
**Sugestões de Linha de Assunto**:
- "Pergunta sobre Privacidade: [Seu Tópico]"
- "Solicitação de Dados GDPR" / "Solicitação de Dados CCPA" / "Solicitação de Dados LGPD"
- "Solicitação de Exclusão de Dados"
- "Reclamação de Privacidade"

**Tempo de Resposta**: Dentro de **30 dias** (pode estender para 60 dias para solicitações complexas com aviso)

**O Que Incluir**:
- Modelo do seu dispositivo (por exemplo, "iPhone 14", "Samsung Galaxy S23")
- Seu país/região
- Datas aproximadas de uso do aplicativo (ajuda a localizar seus dados)
- Detalhes específicos da pergunta ou solicitação

---

### 11.2 Informações do Desenvolvedor

**Nome da Empresa**: Bloom Byte SRL  
**Endereço Registrado**: Bucareste, Romênia  
**Site**: bloombyte.dev  
**Email**: contact@bloombyte.dev

**Presença em Lojas de Aplicativos**:
- **Apple App Store**: Pesquise "Sudokan" ou desenvolvedor "Bloom Byte SRL"
- **Google Play Store**: Pesquise "Sudokan" ou desenvolvedor "Bloom Byte SRL"

---

### 11.3 Encarregado de Proteção de Dados (DPO)

**Requisito GDPR**: Empresas que processam dados pessoais da UE em larga escala devem nomear um DPO.

**Status do Sudokan**: ❌ **Não exigido**
- Somos um desenvolvedor pequeno (não uma autoridade pública)
- Processamento não é em larga escala (coleta de dados mínima)
- Sem processamento de dados sensíveis

**No entanto**: Tratamos consultas de privacidade com seriedade de nível DPO. Todas as solicitações de privacidade vão diretamente para o desenvolvedor/fundador.

---

### 11.4 Representante na UE (GDPR Artigo 27)

**Requisito GDPR**: Empresas não-UE processando dados da UE devem nomear um representante na UE.

**Status do Sudokan**: ✅ **Não exigido** - Bloom Byte SRL está baseada na Romênia (estado membro da UE)

**Se você é residente da UE**, pode nos contatar diretamente em contact@bloombyte.dev (já estamos na UE).

---

### 11.5 Autoridades Supervisoras (Agências de Proteção de Dados)

Se você estiver insatisfeito com nossa resposta, pode registrar reclamação com uma autoridade de proteção de dados:

#### União Europeia (GDPR)
**Autoridade supervisora do seu país**:
- [Lista de Autoridades de Proteção de Dados da UE](https://edpb.europa.eu/about-edpb/about-edpb/members_en)

**Autoridade do Desenvolvedor (Romênia)**:
- **Nome**: Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
- **Site**: [dataprotection.ro](https://www.dataprotection.ro/)
- **Endereço**: B-dul G-ral. Gheorghe Magheru 28-30, Setor 1, Bucareste, Romênia

#### Estados Unidos (CCPA/CPRA)
**Procurador-Geral da Califórnia**:
- **Site**: [oag.ca.gov/privacy](https://oag.ca.gov/privacy)
- **Formulário de Reclamação**: [Direitos de Privacidade da Califórnia](https://oag.ca.gov/contact/consumer-complaint-against-business-or-company)

#### Brasil (LGPD)
**Autoridade Nacional de Proteção de Dados (ANPD)**:
- **Site**: [gov.br/anpd](https://www.gov.br/anpd/pt-br)

#### Outros Países
Pesquise "autoridade de proteção de dados [Seu País]" ou "regulador de privacidade" para encontrar sua autoridade local.

---

### 11.6 Relatório de Vulnerabilidade de Segurança

**Se você descobrir um problema de segurança**:
- **Email**: contact@bloombyte.dev
- **Assunto**: "Vulnerabilidade de Segurança no Sudokan"
- **Inclua**: Descrição, passos para reproduzir, impacto potencial

**Responderemos dentro de 7 dias** e trabalharemos para corrigir o problema prontamente.

**Divulgação Responsável**: Por favor, não divulgue publicamente vulnerabilidades antes de corrigirmos. Apreciamos pesquisadores de segurança e creditaremos você (com permissão).

---

## 12. Informações Específicas por Região

Esta seção fornece detalhes adicionais para usuários em regiões específicas.

### 12.1 União Europeia (UE) / Espaço Econômico Europeu (EEE)

**Lei Aplicável**: Regulamento Geral de Proteção de Dados (GDPR)

**Pontos-Chave para Residentes da UE**:
- ✅ **Base legal**: Consentimento (análises, relatório de falhas, anúncios personalizados) + Interesses legítimos (funções principais do aplicativo)
- ✅ **Minimização de dados**: Coletamos apenas dados necessários
- ✅ **Direito de retirar consentimento**: A qualquer momento nas Configurações de Privacidade
- ✅ **Direito ao apagamento**: Envie email para contact@bloombyte.dev (resposta em 30 dias)
- ✅ **Direito de apresentar reclamação**: Entre em contato com sua autoridade supervisora nacional
- ✅ **Transferências internacionais**: Protegidas por SCCs e Quadro de Privacidade de Dados UE-EUA
- ✅ **Sem tomada de decisão automatizada**: Não tomamos decisões legais/significativas sobre você

**Armazenamento na UE do Firestore**: Dados de feedback armazenados na Bélgica (`europe-west1`) permanecem dentro da UE.

**Resumo dos Direitos GDPR** (veja Seção 7.2 para detalhes completos):
1. Direito de acesso (Artigo 15)
2. Direito de retificação (Artigo 16)
3. Direito ao apagamento (Artigo 17)
4. Direito de restringir processamento (Artigo 18)
5. Direito à portabilidade de dados (Artigo 20)
6. Direito de objeção (Artigo 21)
7. Direito de não estar sujeito a tomada de decisão automatizada (Artigo 22)
8. Direito de apresentar reclamação (Artigo 77)

**Autoridade Supervisora**: Entre em contato com a autoridade de proteção de dados do seu país ou ANSPDCP da Romênia (nossa localização).

---

### 12.2 Reino Unido (UK)

**Lei Aplicável**: UK GDPR + Lei de Proteção de Dados 2018

**Pontos-Chave para Residentes do Reino Unido**:
- ✅ **Mesmos direitos que GDPR da UE** (Reino Unido manteve GDPR pós-Brexit)
- ✅ **Decisão de adequação**: UE considera Reino Unido adequado, então transferências UE-Reino Unido são irrestritas
- ✅ **Supervisão do ICO**: Autoridade supervisora do Reino Unido é o Information Commissioner's Office

**Autoridade Supervisora**:
- **Nome**: Information Commissioner's Office (ICO)
- **Site**: [ico.org.uk](https://ico.org.uk/)
- **Linha de Ajuda**: 0303 123 1113
- **Reportar Preocupação**: [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/)

**Seus Direitos**: Idênticos ao GDPR da UE (veja Seção 7.2).

---

### 12.3 Califórnia, Estados Unidos (CCPA/CPRA)

**Lei Aplicável**: California Consumer Privacy Act (CCPA) + California Privacy Rights Act (CPRA)

**Pontos-Chave para Residentes da Califórnia**:
- ✅ **Direito de saber**: Solicitar divulgação de dados coletados (veja Seção 7.3)
- ✅ **Direito de excluir**: Solicitar exclusão (resposta em 45 dias)
- ✅ **Direito de opt-out**: Não ocorre "venda", mas você pode desabilitar anúncios personalizados
- ✅ **Direito de corrigir**: Solicitar correção de dados imprecisos
- ✅ **Direito de não discriminação**: Usar direitos não afeta acesso ao aplicativo
- ❌ **Sem coleta de dados sensíveis**: Não coletamos dados sensíveis definidos pela CCPA

**"Venda" de Informações Pessoais**:
- ❌ **NÃO vendemos dados** no sentido tradicional (sem troca financeira com corretores de dados)
- ⚠️ **Anúncios personalizados podem se qualificar como "compartilhamento"** sob definição ampla da CCPA
- ✅ **Seu controle**: Desabilitar "Anúncios Personalizados" nas Configurações de Privacidade → interrompe compartilhamento de ID de publicidade

**Não Venda ou Compartilhe Minhas Informações Pessoais**:
- Lei da Califórnia exige link "Não Vender" se venda/compartilhamento ocorrer
- Fornecemos controle equivalente via Configurações de Privacidade → alternância "Anúncios Personalizados"
- Opt-out no dispositivo: configurações de Rastreamento do iOS, Configurações de Anúncios do Android

**Resumo dos Direitos CCPA** (veja Seção 7.3 para detalhes completos):
1. Direito de Saber (§ 1798.100)
2. Direito de Excluir (§ 1798.105)
3. Direito de Opt-Out de Venda (§ 1798.120) - N/A (não vendemos)
4. Direito de Opt-Out de Compartilhamento para Publicidade Comportamental entre Contextos (CPRA § 1798.135)
5. Direito de Corrigir Informações Imprecisas (CPRA § 1798.106)
6. Direito de Limitar Uso de Informações Pessoais Sensíveis (CPRA § 1798.121) - N/A (não coletamos)
7. Direito de Não Discriminação (§ 1798.125)

**Agente Autorizado**: Você pode designar um agente autorizado para enviar solicitações em seu nome. O agente deve fornecer prova de autorização.

**Contato para Solicitações CCPA**: contact@bloombyte.dev (assunto: "Solicitação de Dados CCPA")

---

### 12.4 Brasil (LGPD)

**Lei Aplicável**: Lei Geral de Proteção de Dados (LGPD)

**Pontos-Chave para Residentes Brasileiros**:
- ✅ **Similar ao GDPR**: LGPD é modelada no GDPR com direitos similares
- ✅ **Direito de acesso**: Solicitar seus dados (resposta em 15 dias)
- ✅ **Direito de correção**: Corrigir dados imprecisos
- ✅ **Direito de exclusão**: Solicitar apagamento
- ✅ **Direito de portabilidade**: Receber dados em formato portátil
- ✅ **Direito de retirar consentimento**: A qualquer momento nas Configurações de Privacidade

**Base Legal** (LGPD Artigo 7):
- **Consentimento**: Análises, relatório de falhas, anúncios personalizados
- **Interesses legítimos**: Funções principais do aplicativo, anúncios não personalizados

**Controlador de Dados**: Bloom Byte SRL (contact@bloombyte.dev)

**Autoridade Supervisora**:
- **Nome**: Autoridade Nacional de Proteção de Dados (ANPD)
- **Site**: [gov.br/anpd](https://www.gov.br/anpd/pt-br)

**Contato para Solicitações LGPD**: contact@bloombyte.dev (assunto: "Solicitação de Dados LGPD")

**Tempo de Resposta**: Dentro de **15 dias** (pode estender para 30 dias para solicitações complexas)

---

### 12.5 Outras Regiões

#### Canadá (PIPEDA)
**Lei**: Personal Information Protection and Electronic Documents Act  
**Direitos**: Acesso, correção, retirada de consentimento  
**Contato**: contact@bloombyte.dev (assunto: "Solicitação de Dados PIPEDA")

#### Austrália (Lei de Privacidade)
**Lei**: Lei de Privacidade 1988 + Princípios Australianos de Privacidade (APPs)  
**Direitos**: Acesso, correção, reclamação ao OAIC  
**Contato**: contact@bloombyte.dev (assunto: "Solicitação de Lei de Privacidade")

#### Japão (APPI)
**Lei**: Ato de Proteção de Informações Pessoais  
**Direitos**: Divulgação, correção, suspensão de uso  
**Autoridade Supervisora**: Comissão de Proteção de Informações Pessoais (PPC)  
**Contato**: contact@bloombyte.dev (assunto: "Solicitação de Dados APPI")

#### Coreia do Sul (PIPA)
**Lei**: Lei de Proteção de Informações Pessoais  
**Direitos**: Acesso, correção, exclusão, suspensão  
**Autoridade Supervisora**: Comissão de Proteção de Informações Pessoais (PIPC)  
**Contato**: contact@bloombyte.dev (assunto: "Solicitação de Dados PIPA")

#### Índia (DPDPA)
**Lei**: Lei de Proteção de Dados Pessoais Digitais 2023 (quando aplicada)  
**Direitos**: Similar ao GDPR (acesso, correção, apagamento)  
**Contato**: contact@bloombyte.dev (assunto: "Solicitação de Dados DPDPA")

**Política Geral**: Se seu país tem leis de proteção de dados não listadas aqui, honraremos direitos equivalentes. Entre em contato conosco em contact@bloombyte.dev com o nome da lei do seu país.

---

## 13. Informações Adicionais

### 13.1 Lei "Shine the Light" da Califórnia (Código Civil § 1798.83)

**Lei**: Exige divulgação de informações pessoais compartilhadas com terceiros para marketing direto.

**Status do Sudokan**: ❌ **Não aplicável**
- NÃO compartilhamos informações pessoais com terceiros para propósitos de marketing direto deles
- Redes de anúncios podem mostrar anúncios, mas não compartilhamos informações de contato (não as coletamos)

**Se isso mudar**: Atualizaremos esta política e forneceremos mecanismos de opt-out.

---

### 13.2 Direitos de Privacidade de Nevada (SB 220)

**Lei**: Residentes de Nevada podem opt-out da "venda" de informações cobertas.

**Status do Sudokan**: ❌ **NÃO vendemos informações pessoais** (sem troca financeira)

**Seu Controle**: Desabilitar anúncios personalizados nas Configurações de Privacidade se preocupado com compartilhamento de dados com redes de anúncios.

---

### 13.3 Sinais "Do Not Track" (DNT)

**O Quê**: Navegadores web podem enviar sinais "Do Not Track" para sites.

**Status do Sudokan**: ❌ **Não aplicável** - somos um aplicativo móvel, não um site

**Controle Equivalente**: Configurações de Privacidade → Desabilitar "Anúncios Personalizados" (interrompe rastreamento entre aplicativos)

---

### 13.4 Links de Terceiros

**Links no aplicativo** (por exemplo, para políticas de privacidade do Google, listagens de lojas de aplicativos):
- ❌ **Não sob nosso controle**: Sites de terceiros têm suas próprias políticas de privacidade
- ✅ **Não somos responsáveis**: Por conteúdo ou práticas de sites vinculados
- ⚠️ **Revise suas políticas**: Antes de fornecer informações pessoais

**Links nesta Política de Privacidade**:
- Política de Privacidade do Google Firebase
- Política de Privacidade do Google AdMob
- Autoridades de Proteção de Dados da UE
- Relatório de Transparência do Google
- (Todos fornecidos para sua conveniência)

---

### 13.5 Acessibilidade

**Estamos comprometidos em tornar esta Política de Privacidade acessível**:
- ✅ Linguagem simples (evitando jargão jurídico quando possível)
- ✅ Títulos claros e índice
- ✅ Exemplos e explicações
- ✅ Disponível no aplicativo e online (bloombyte.dev/privacy)

**Se você precisa desta política em formato alternativo** (por exemplo, impressão grande, áudio), envie email para contact@bloombyte.dev.

---

### 13.6 Idioma e Traduções

**Idioma Original**: Inglês (esta versão é autoritativa)

**Traduções**: Podemos fornecer traduções no futuro para:
- Romeno (ro) - Idioma nativo do desenvolvedor
- Outros idiomas baseados na base de usuários (es, pt-BR, de, fr, ja, ko, etc.)

**Em caso de conflito**: A versão em inglês prevalece para interpretação legal.

---

## 14. Definições (Glossário)

Para ajudá-lo a entender esta política, aqui estão definições de termos-chave:

**Dados Pessoais / Informações Pessoais**: Informações que o identificam ou podem ser usadas para identificá-lo (por exemplo, identificadores de dispositivo, endereço IP). Sob leis de privacidade, isso inclui dados pseudônimos.

**Processamento**: Qualquer operação em dados pessoais (coleta, armazenamento, uso, compartilhamento, exclusão).

**Controlador de Dados**: A entidade que decide por que e como dados pessoais são processados. **Sudokan (Bloom Byte SRL) é o controlador de dados**.

**Processador de Dados**: Uma entidade que processa dados em nome do controlador. **Google LLC é nosso processador de dados**.

**Consentimento**: Seu acordo livremente dado, específico, informado e inequívoco para processamento de dados.

**Interesses Legítimos**: Base legal para processamento quando necessário para interesses do controlador, equilibrados com seus direitos.

**Pseudonimização**: Processar dados para que não possam identificá-lo sem informações adicionais (por exemplo, substituir nomes por IDs aleatórios).

**Anonimização**: Remover irreversivelmente todos os identificadores para que dados nunca possam identificá-lo (não são mais dados pessoais).

**Cláusulas Contratuais Padrão (SCCs)**: Termos contratuais aprovados pela UE que protegem dados transferidos para fora da UE.

**Decisão de Adequação**: Determinação da Comissão da UE de que um país fornece proteção de dados adequada.

**Autoridade Supervisora**: Agência governamental que aplica leis de proteção de dados (por exemplo, ICO no Reino Unido, ANSPDCP na Romênia).

**Titular dos Dados**: Você, o indivíduo cujos dados estão sendo processados.

**Terceiro**: Uma entidade diferente de você e de nós (por exemplo, Google, redes de anúncios).

**ID de Publicidade**: Um identificador específico do dispositivo para publicidade (IDFA no iOS, AAID no Android). Redefinível pelos usuários.

**Rastreamento entre Aplicativos**: Rastrear sua atividade em múltiplos aplicativos para construir um perfil.

**GDPR**: Regulamento Geral de Proteção de Dados (lei da UE).

**CCPA/CPRA**: California Consumer Privacy Act / California Privacy Rights Act (lei da Califórnia).

**COPPA**: Lei de Proteção da Privacidade Online de Crianças (lei dos EUA para crianças menores de 13 anos).

**LGPD**: Lei Geral de Proteção de Dados (lei de proteção de dados do Brasil).

---

## 15. Reconhecimentos

Esta Política de Privacidade foi elaborada com cuidado para cumprir:
- GDPR (UE)
- CCPA/CPRA (Califórnia)
- COPPA (privacidade infantil dos EUA)
- LGPD (Brasil)
- Outras leis internacionais de privacidade

**Recursos consultados**:
- [Texto Completo do GDPR](https://gdpr-info.eu/)
- [Texto Completo da CCPA/CPRA](https://oag.ca.gov/privacy/ccpa)
- [Guia de Conformidade COPPA](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)
- [Políticas de Privacidade do Google](https://policies.google.com/)
- [Orientação de Privacidade do ICO](https://ico.org.uk/)

**Revisão Legal**: Esta política foi criada pelo desenvolvedor. Recomendamos que os usuários a revisem cuidadosamente. Se você tiver preocupações legais, consulte um advogado de privacidade em sua jurisdição.

---

## 16. Data de Vigência e Aceitação

**Data de Vigência**: 9 de novembro de 2025

**Ao usar Sudokan após esta data**, você reconhece que leu, entendeu e concorda com esta Política de Privacidade.

**Se você não concordar**:
- Desabilite toda coleta de dados nas Configurações de Privacidade
- Ou desinstale o aplicativo

**Seu uso continuado** do aplicativo após atualizações da política constitui aceitação da política revisada.

---

## Resumo

Obrigado por ler a Política de Privacidade do Sudokan. Aqui está uma recapitulação rápida:

### O Que Coletamos
- **Dados locais** (estado do jogo, configurações) - ficam no seu dispositivo
- **Análises** (opcional) - dados de uso para melhorar o aplicativo
- **Relatórios de falhas** (opcional) - dados técnicos para corrigir bugs
- **Dados de anúncios** - mínimos (não personalizados) ou extensivos (personalizados, se você consentir)
- **Feedback** (opcional) - quando você envia feedback voluntariamente

### O Que NÃO Coletamos
- ❌ Seu nome, email, número de telefone
- ❌ Localização precisa
- ❌ Fotos, contatos ou outros arquivos pessoais
- ❌ Dados financeiros ou de saúde

### Seu Controle
- ✅ **Configurações de Privacidade**: Habilitar/desabilitar análises, relatório de falhas, anúncios personalizados
- ✅ **Limpar dados**: Excluir histórico do jogo a qualquer momento
- ✅ **Seus direitos**: Acessar, excluir, corrigir, portar seus dados
- ✅ **Entre em contato**: contact@bloombyte.dev para quaisquer perguntas sobre privacidade

### Nosso Compromisso
- 🔒 Coleta de dados mínima (privacidade por design)
- 🔒 Transparente sobre cada ponto de dados
- 🔒 Baseado em consentimento (você controla o que sai do seu dispositivo)
- 🔒 Armazenamento seguro (criptografia, HTTPS)
- 🔒 Exclusão automática (60-90 dias para a maioria dos dados)
- 🔒 Conforme GDPR, CCPA, COPPA, LGPD

**Perguntas?** Envie email para contact@bloombyte.dev - respondemos dentro de 30 dias.

**Aproveite jogar Sudokan!** 🎉

---

**FIM DA POLÍTICA DE PRIVACIDADE**

---

**Informações do Documento**:
- **Versão**: 1.0
- **Última Atualização**: 9 de novembro de 2025
- **Data de Vigência**: 9 de novembro de 2025
- **Desenvolvedor**: Bloom Byte SRL
- **Contato**: contact@bloombyte.dev
- **Site**: bloombyte.dev
- **Aplicativo**: Sudokan (iOS e Android)

