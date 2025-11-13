# Política de Privacidad de Sudokan

**Última Actualización: 9 de noviembre de 2025**  
**Fecha de Entrada en Vigor: 9 de noviembre de 2025**

---

## Introducción

Gracias por elegir **Sudokan** ("nosotros", "nuestro" o "nos"). Estamos comprometidos a proteger su privacidad y ser transparentes sobre cómo manejamos su información.

Esta Política de Privacidad explica:
- Qué información recopilamos (y qué no)
- Cómo usamos su información
- Sus derechos y opciones con respecto a sus datos
- Cómo protegemos su información

**Importante**: Sudokan está diseñado pensando en la privacidad. La mayor parte de sus datos permanece en su dispositivo, y toda recopilación de datos que sale de su dispositivo requiere su consentimiento explícito.

**Cumplimiento**: Esta Política de Privacidad cumple con:
- **RGPD** (Reglamento General de Protección de Datos) - Unión Europea
- **CCPA/CPRA** (Ley de Privacidad del Consumidor de California) - California, EE. UU.
- **COPPA** (Ley de Protección de la Privacidad en Línea de los Niños) - Estados Unidos
- **LGPD** (Lei Geral de Proteção de Dados) - Brasil
- Otras leyes internacionales de privacidad aplicables

### Quiénes Somos

**Nombre de la Aplicación**: Sudokan  
**Desarrollador**: Bloom Byte SRL  
**Correo Electrónico de Contacto**: contact@bloombyte.dev  
**Sitio Web**: bloombyte.dev

### Alcance de Esta Política

Esta Política de Privacidad se aplica a:
- La aplicación móvil Sudokan (iOS y Android)
- Cualquier actualización o nueva función que agreguemos a la aplicación
- Datos recopilados solo a través de la aplicación (no nuestro sitio web, si es independiente)

### Su Consentimiento

Al usar Sudokan, usted acepta esta Política de Privacidad. Si no está de acuerdo, por favor no use la aplicación.

**Usted controla qué datos recopilamos**: En el primer inicio, solicitamos su consentimiento para recopilar análisis, informes de fallos y mostrar anuncios personalizados. Puede cambiar estas preferencias en cualquier momento en la Configuración de Privacidad de la aplicación.

---

## Tabla de Contenidos

1. [Información Que Recopilamos](#1-información-que-recopilamos)
2. [Cómo Usamos Su Información](#2-cómo-usamos-su-información)
3. [Base Legal para el Tratamiento (RGPD)](#3-base-legal-para-el-tratamiento-rgpd)
4. [Compartición de Datos y Terceros](#4-compartición-de-datos-y-terceros)
5. [Retención de Datos](#5-retención-de-datos)
6. [Seguridad de Datos](#6-seguridad-de-datos)
7. [Sus Derechos y Opciones](#7-sus-derechos-y-opciones)
8. [Privacidad de los Niños](#8-privacidad-de-los-niños)
9. [Transferencias Internacionales de Datos](#9-transferencias-internacionales-de-datos)
10. [Cambios en Esta Política](#10-cambios-en-esta-política)
11. [Contáctenos](#11-contáctenos)
12. [Información Específica por Región](#12-información-específica-por-región)

---

## 1. Información Que Recopilamos

Creemos en la transparencia. Aquí está exactamente qué información recopila Sudokan, desglosada por categoría.

### 1.1 Información Almacenada Localmente (Solo en Su Dispositivo)

Los siguientes datos **nunca salen de su dispositivo** y se almacenan usando almacenamiento seguro del dispositivo:

#### Datos del Juego
- **Estado actual del juego**: Su puzzle en progreso, incluidos los números que ha ingresado, errores cometidos y tiempo transcurrido
- **Historial del juego**: Registros de juegos completados, incluida la dificultad, tiempo de finalización, errores, pistas usadas y puntos de rango ganados
- **Estadísticas**: Sus métricas generales de rendimiento (total de juegos jugados, tasa de finalización, tiempo promedio)
- **Progreso del tutorial**: Si ha completado el tutorial de incorporación

**Método de Almacenamiento**: Base de datos Hive (almacenamiento local cifrado)  
**Retención**: Hasta que elimine la aplicación o borre los datos manualmente  
**Su Control**: Puede borrar el historial del juego mediante el botón "Borrar Historial" en la pantalla de Historial del Juego

#### Configuraciones y Preferencias
- **Configuraciones de la aplicación**: Tema (claro/oscuro), idioma, preferencia de dificultad, visibilidad del temporizador, resaltado de errores, vibración, animaciones
- **Preferencia de dificultad adaptativa**: Si ha habilitado el Ajuste Dinámico de Dificultad (DDA)
- **Preferencias de consentimiento**: Sus elecciones para análisis, informes de fallos y anuncios personalizados

**Método de Almacenamiento**: SharedPreferences (almacenamiento seguro del dispositivo)  
**Retención**: Hasta que cambie la configuración o desinstale la aplicación  
**Su Control**: Editable en cualquier momento en las pantallas de Configuración y Configuración de Privacidad

**Importante**: Estos datos locales NO se consideran "recopilación de datos" bajo las leyes de privacidad porque nunca salen de su dispositivo. Sin embargo, los divulgamos para total transparencia.

---

### 1.2 Datos de Análisis (Opcional - Requiere Su Consentimiento)

Si consiente los análisis en la pantalla de Consentimiento de Privacidad, recopilamos datos de uso para mejorar la aplicación.

**Servicio Utilizado**: Firebase Analytics (proporcionado por Google LLC)

#### Qué Recopilamos Automáticamente (Cuando los Análisis Están Habilitados)

**Información del Dispositivo**:
- Modelo del dispositivo (por ej., "iPhone 14", "Samsung Galaxy S23")
- Sistema operativo y versión (por ej., "iOS 17.2", "Android 14")
- Versión de la aplicación (por ej., "1.0.0")
- Resolución de pantalla
- Configuración de idioma del dispositivo
- País/región (derivado de la dirección IP, pero la IP en sí no se almacena)

**Información de Uso de la Aplicación**:
- Eventos de apertura/cierre de la aplicación
- Vistas de pantalla (qué pantallas visita)
- Duración de la sesión (cuánto tiempo usa la aplicación)
- Fecha del primer inicio
- Fecha de actualización de la aplicación

#### Eventos Personalizados Que Rastreamos (Cuando los Análisis Están Habilitados)

Registramos interacciones específicas de juego y usuario para comprender cómo se usa la aplicación:

**Eventos del Flujo del Juego** (Ejemplos):
- `game_started` (modo: juego libre/diario, dificultad)
- `game_completed` (duración, errores, pistas usadas, puntos de rango ganados)
- `game_abandoned` (porcentaje de progreso, razón)
- `puzzle_hint_requested` (pistas restantes)
- `notes_mode_toggled` (habilitado/deshabilitado)

**Eventos del Tutorial**:
- `tutorial_started` (primera vez o repetición)
- `tutorial_step_shown` (número de paso)
- `tutorial_completed` (duración)

**Eventos de Progresión**:
- `rank_changed` (rango antiguo, nuevo rango, puntos)
- `streak_continued` (días de racha)
- `daily_challenge_completed` (dificultad, tiempo)

**Eventos de Configuración**:
- `difficulty_changed` (desde, hasta)
- `theme_changed` (claro/oscuro)
- `consent_updated` (tipo de consentimiento, valor)

**Eventos Publicitarios**:
- `ad_impression` (tipo de anuncio, ubicación)
- `rewarded_ad_watched` (tipo de recompensa: pistas/errores)

**Total de Eventos**: Rastreamos varios tipos de eventos a lo largo de la aplicación para comprender las interacciones del usuario y mejorar su experiencia.

#### Propiedades de Usuario Que Establecemos (Cuando los Análisis Están Habilitados)

Para segmentar usuarios y comprender patrones, establecemos las siguientes propiedades:

- `user_rank` (Sin Rango, Novato, Resolvedor, Estratega, Experto, Leyenda)
- `preferred_difficulty` (Muy Fácil, Fácil, Medio, Difícil, Experto)
- `current_streak` (días de racha del desafío diario)
- `games_played_total` (conteo de por vida)
- `dda_enabled` (verdadero/falso)
- `consent_analytics` (verdadero/falso)
- `consent_crash_reporting` (verdadero/falso)
- `consent_personalized_ads` (verdadero/falso)

**Total de Propiedades de Usuario**: Aproximadamente 25 propiedades.

#### Qué NO Recopilan los Análisis

❌ Su nombre, correo electrónico, número de teléfono o cualquier identificador personal  
❌ Las soluciones específicas de puzzles que ingresa  
❌ Su geolocalización exacta (solo nivel de país)  
❌ Su dirección IP (Firebase la elimina automáticamente)  
❌ Identificadores del dispositivo (IDFA/AAID) a menos que los anuncios personalizados estén habilitados  
❌ Datos de otras aplicaciones en su dispositivo  
❌ Sus contactos, fotos u otros archivos personales

**Su Control**: Deshabilite los análisis en cualquier momento en Configuración de Privacidad → interruptor "Mejorar el Juego".

---

### 1.3 Datos de Informes de Fallos (Opcional - Requiere Su Consentimiento)

Si consiente los informes de fallos, recopilamos datos técnicos cuando la aplicación falla para ayudarnos a corregir errores.

**Servicio Utilizado**: Firebase Crashlytics (proporcionado por Google LLC)

#### Qué Recopilamos Cuando la Aplicación Falla (Cuando los Informes de Fallos Están Habilitados)

**Información del Fallo**:
- **Trazas de pila**: Detalles técnicos sobre qué código se estaba ejecutando cuando ocurrió el fallo
- **Mensajes de excepción**: Descripciones de error generadas por la aplicación
- **Información de hilos**: Qué partes de la aplicación estaban activas

**Estado del Dispositivo en el Fallo**:
- RAM libre (memoria disponible)
- Espacio libre en disco
- Orientación del dispositivo (retrato/paisaje)
- Nivel de batería
- Estado de conectividad de red (WiFi/celular/sin conexión)

**Información del Dispositivo**:
- Modelo del dispositivo
- Versión del sistema operativo
- Versión de la aplicación

**Registros de Depuración** (No Personales):
- Eventos recientes de la aplicación (por ej., "Usuario abrió configuración", "Puzzle cargado", "Paso del tutorial mostrado")
- Contexto del estado del juego (por ej., "Puzzle 45% completado", "Usuario en rango: Resolvedor")
- No se incluyen datos personales ni soluciones de puzzles

**Identificadores de Fallos**:
- UUID de instalación (identificador aleatorio generado por Firebase, no vinculado a usted)
- ID de sesión (identificador temporal para la sesión de fallo)

#### Qué NO Recopilan los Informes de Fallos

❌ Su información personal  
❌ Su dirección IP (eliminada por Firebase)  
❌ Identificadores del dispositivo (IDFA/AAID)  
❌ Su ubicación precisa  
❌ Datos ingresados por el usuario (soluciones de puzzles, texto de retroalimentación)

**Retención de Datos**: Los informes de fallos se eliminan automáticamente después de **90 días**.

**Su Control**: Deshabilite los informes de fallos en cualquier momento en Configuración de Privacidad → interruptor "Ayúdanos a Corregir Problemas".

---

### 1.4 Datos Publicitarios (Recopilados Cuando se Muestran Anuncios)

Sudokan muestra anuncios publicitarios para apoyar el acceso gratuito a la aplicación. La recopilación de datos publicitarios difiere según si usted consiente o no los anuncios personalizados.

**Servicio Utilizado**: Google AdMob (proporcionado por Google LLC)

#### Anuncios No Personalizados (Por Defecto - No Requiere Consentimiento)

Si NO consiente los anuncios personalizados, mostramos **anuncios no personalizados** basados únicamente en:
- **Información contextual**: El contenido actual de la aplicación (por ej., mostrar anuncios relacionados con puzzles en una aplicación de puzzles)
- **Ubicación aproximada**: Ubicación a nivel de país derivada de la dirección IP (no almacenada)
- **Información limitada del dispositivo**: Tamaño de pantalla, versión del SO (para compatibilidad de formato de anuncios)

**Qué NO se recopila en modo no personalizado**:
❌ ID de publicidad (IDFA/AAID)  
❌ Seguimiento entre aplicaciones  
❌ Segmentación basada en intereses  
❌ Datos de comportamiento

#### Anuncios Personalizados (Opcional - Requiere Su Consentimiento)

Si consiente los anuncios personalizados en la pantalla de Consentimiento de Privacidad, AdMob puede recopilar:

**Identificadores Publicitarios**:
- **IDFA** (Identificador para Anunciantes) en iOS
- **AAID** (ID de Publicidad de Android) en Android

Estos son IDs específicos del dispositivo utilizados para mostrarle anuncios relevantes basados en sus intereses.

**Seguimiento Entre Aplicaciones**:
- Sus interacciones con anuncios en diferentes aplicaciones que usan los servicios publicitarios de Google
- Aplicaciones que ha instalado o abierto
- Clics en anuncios y conversiones

**Datos Basados en Intereses**:
- Intereses inferidos (por ej., "entusiasta de juegos de puzzles", "jugador casual")
- Demografía (rango de edad, género - estimados, no reales)

**Datos de Cuenta de Google** (si ha iniciado sesión en Google en su dispositivo):
- Vinculado a la actividad de su cuenta de Google
- Puede usar datos de otros servicios de Google (Búsqueda, YouTube, etc.)

**Datos de Ubicación** (si los permisos del dispositivo están otorgados):
- Geolocalización precisa para anuncios basados en la ubicación

#### Socios de Red Publicitaria

Google AdMob trabaja con **más de 100 redes publicitarias de terceros** para servir anuncios. Cada socio puede recopilar datos según su propia política de privacidad.

**Lista completa de socios publicitarios**: [Lista de Compradores Autorizados de Google](https://support.google.com/admob/answer/9012903)

Los socios comunes incluyen:
- Amazon Publisher Services
- AppLovin
- Chartboost
- InMobi
- ironSource
- Unity Ads
- Vungle

**Importante**: Cuando consiente los anuncios personalizados, estos socios también pueden recopilar datos.

#### Anuncios con Recompensa

Cuando ve un anuncio para ganar recompensas (pistas adicionales o aumento del límite de errores):
- Se registra la impresión del anuncio (en sus análisis, si están habilitados)
- Se rastrea el cumplimiento de la recompensa (para prevenir fraudes)
- No se recopilan datos personales adicionales más allá del servicio estándar de anuncios

**Su Control**: 
- Deshabilite los anuncios personalizados en Configuración de Privacidad → interruptor "Anuncios Personalizados"
- Opte por no participar en todo el dispositivo mediante configuraciones del sistema:
  - **iOS**: Configuración → Privacidad → Seguimiento → Denegar
  - **Android**: Configuración → Google → Anuncios → Desactivar Personalización de Anuncios

**Más Información**:
- [Cómo Google usa datos de aplicaciones que utilizan servicios de Google](https://policies.google.com/technologies/partner-sites?hl=es)
- [Configuración de Anuncios de Google](https://adssettings.google.com/?hl=es) (administre sus preferencias de anuncios)

---

### 1.5 Datos de Retroalimentación (Opcional - Enviados Voluntariamente)

Cuando envía retroalimentación a través del formulario de retroalimentación dentro de la aplicación, recopilamos:

**Servicio Utilizado**: Cloud Firestore (proporcionado por Google LLC)

#### Qué Recopilamos Cuando Envía Retroalimentación

**Su Entrada**:
- **Texto de retroalimentación**: Su mensaje (hasta 1000 caracteres)
- **Calificación de satisfacción**: Si seleccionó positivo o negativo

**Contexto Adjunto Automáticamente** (para ayudarnos a comprender su retroalimentación):
- Versión de la aplicación
- Modelo del dispositivo (por ej., "iPhone 14", "Pixel 7")
- Versión del sistema operativo (por ej., "iOS 17.2", "Android 14")
- Configuración de idioma
- Marca de tiempo del envío
- Si los análisis están habilitados (booleano, no los datos en sí)

**Qué NO Recopila la Retroalimentación**:
❌ Su nombre, correo electrónico o información de contacto  
❌ Identificadores del dispositivo (IDFA/AAID)  
❌ Dirección IP  
❌ Ubicación precisa  
❌ Su progreso de puzzles o datos del juego

**Almacenamiento de Datos**: 
- Almacenado en la base de datos Cloud Firestore (servidores de Google en Europa - Bélgica, región `europe-west1`)
- Solo accesible por nosotros (el desarrollador de la aplicación)
- NO compartido con terceros

**Retención de Datos**: La retroalimentación se retiene durante **12 meses** a menos que solicite su eliminación antes.

**Su Control**: 
- El envío de retroalimentación es completamente opcional
- Una vez enviada, puede solicitar su eliminación enviándonos un correo electrónico (consulte la sección Contáctenos)

---

### 1.6 Qué NO Recopilamos (Nunca)

Para ser absolutamente claros, Sudokan **nunca** recopila:

❌ **Identificadores personales**: Nombre, correo electrónico, número de teléfono, dirección postal  
❌ **Credenciales de cuenta**: No se requiere inicio de sesión, no hay contraseñas  
❌ **Datos de redes sociales**: No hay inicio de sesión con Facebook/Google  
❌ **Contactos**: No accedemos a su lista de contactos  
❌ **Fotos/Videos**: No accedemos a su galería de fotos  
❌ **Micrófono/Cámara**: No hay grabación de audio o video  
❌ **Ubicación precisa**: Solo nivel de país para anuncios (cuando se consiente)  
❌ **Biometría**: No hay datos de huellas dactilares, Face ID o biométricos  
❌ **Información financiera**: No hay procesamiento de pagos (la aplicación es gratuita)  
❌ **Datos de salud**: Somos un juego de puzzles, no una aplicación de salud  
❌ **Historial de navegación**: No hay seguimiento web  
❌ **Datos de otras aplicaciones**: Solo accedemos a los datos de Sudokan

---

## 2. Cómo Usamos Su Información

Solo usamos su información para los fines descritos a continuación. No usamos sus datos para ningún otro propósito sin su consentimiento.

### 2.1 Para Proporcionar y Mejorar la Aplicación (Funciones Esenciales)

**Base Legal**: Interés legítimo (RGPD Art. 6(1)(f))

Los **datos almacenados localmente** (estado del juego, preferencias) se usan para:
- Guardar su progreso del puzzle para que pueda continuar más tarde
- Recordar su configuración (tema, idioma, dificultad)
- Rastrear su historial del juego y estadísticas
- Calcular su progresión de rango
- Ajustar recomendaciones de dificultad (si DDA está habilitado)
- Restaurar su progreso después de reinicios de la aplicación

**No se requiere conexión a internet** para estas funciones.

---

### 2.2 Para Analizar el Uso y Mejorar Funciones (Análisis)

**Base Legal**: Consentimiento (RGPD Art. 6(1)(a))  
**Requiere**: Su consentimiento en la pantalla de Consentimiento de Privacidad

Si habilita los análisis, usamos los datos recopilados para:

**Comprender el Comportamiento del Usuario**:
- Qué funciones se usan más (por ej., pistas, modo de notas, desafíos diarios)
- Qué niveles de dificultad son más populares
- Dónde los usuarios se atascan o abandonan juegos
- Qué pantallas tienen más interacción

**Optimizar el Equilibrio del Juego**:
- Identificar si los puzzles son demasiado fáciles o demasiado difíciles
- Ajustar la efectividad del Algoritmo de Dificultad Dinámica (DDA)
- Equilibrar el uso del sistema de pistas
- Ajustar las tasas de progresión de rango

**Corregir Problemas de Experiencia del Usuario**:
- Descubrir elementos de UI confusos
- Identificar pantallas de carga lentas
- Encontrar cuellos de botella de navegación
- Detectar tasas de finalización del tutorial

**Priorizar el Desarrollo**:
- Decidir qué nuevas funciones construir
- Determinar qué errores corregir primero
- Comprender preferencias regionales (por ej., uso del modo oscuro por país)

**Ejemplos de Insights de Análisis**:
- "60% de los usuarios habilita el modo oscuro" → Mejorar el diseño del modo oscuro
- "Los usuarios abandonan puzzles Experto al 45% de finalización" → Hacer las pistas más accesibles
- "La tasa de finalización del tutorial es 85%" → El tutorial es efectivo, no se necesitan cambios
- "La interacción con el desafío diario es más alta en Japón" → Considerar optimización de zona horaria

**NO usamos análisis para**:
❌ Vender sus datos a terceros  
❌ Dirigirle anuncios personalizados (eso es un consentimiento separado)  
❌ Discriminarlo o crear perfiles sobre usted  
❌ Tomar decisiones automatizadas que le afecten legalmente

---

### 2.3 Para Corregir Errores y Fallos (Informes de Fallos)

**Base Legal**: Consentimiento (RGPD Art. 6(1)(a))  
**Requiere**: Su consentimiento en la pantalla de Consentimiento de Privacidad

Si habilita los informes de fallos, usamos los datos recopilados para:

**Identificar y Corregir Fallos**:
- Detectar cuándo y por qué falla la aplicación
- Priorizar correcciones para los fallos más comunes
- Probar que las correcciones funcionan en diferentes dispositivos
- Monitorear el porcentaje de usuarios sin fallos

**Mejorar la Estabilidad de la Aplicación**:
- Encontrar fugas de memoria
- Detectar problemas de rendimiento
- Identificar problemas de compatibilidad con dispositivos/versiones de SO específicos

**Ejemplo**:
- El informe de fallos muestra "Los usuarios de iPhone 12 en iOS 17.1 fallan al abrir configuración"
- Reproducimos el error, lo corregimos y lanzamos una actualización
- Todos los usuarios de iPhone 12/iOS 17.1 se benefician de la corrección

**NO usamos datos de fallos para**:
❌ Marketing o publicidad  
❌ Rastrear su comportamiento  
❌ Identificarlo personalmente

---

### 2.4 Para Mostrar Anuncios Publicitarios (Servicio de Anuncios)

**Base Legal**: 
- Interés legítimo (RGPD Art. 6(1)(f)) para anuncios no personalizados
- Consentimiento (RGPD Art. 6(1)(a)) para anuncios personalizados

Mostramos anuncios publicitarios para apoyar el acceso gratuito a Sudokan.

**Anuncios No Personalizados** (por defecto):
- Mostrar anuncios genéricos de puzzles/juegos a todos
- Sin seguimiento entre aplicaciones
- Basado solo en el contexto de la aplicación (está usando una aplicación de puzzles)

**Anuncios Personalizados** (si consiente):
- Mostrar anuncios basados en sus intereses
- Usar ID de Publicidad para seguimiento entre aplicaciones
- Puede mostrar anuncios de productos/servicios en los que ha mostrado interés en otros lugares

**Anuncios con Recompensa**:
- Le permiten ganar recompensas dentro del juego (pistas, límite de errores)
- Voluntario - usted elige ver
- Se aplican las mismas reglas de personalización (según su consentimiento)

**NO**:
❌ Vendemos sus datos a anunciantes (Google sirve los anuncios)  
❌ Compartimos su información personal con redes publicitarias  
❌ Controlamos qué anuncios específicos se muestran (sistema automatizado de Google)  
❌ Requerimos ver anuncios para jugar (completamente opcional para recompensas)

---

### 2.5 Para Responder a Retroalimentación (Soporte al Usuario)

**Base Legal**: Consentimiento (RGPD Art. 6(1)(a)) - implícito al enviar retroalimentación  
**Requiere**: Envío voluntario de retroalimentación

Cuando envía retroalimentación, la usamos para:
- Comprender la satisfacción del usuario
- Identificar solicitudes de funciones
- Descubrir errores o problemas
- Priorizar mejoras
- Medir la calidad general de la aplicación

**Podemos**:
- Leer su retroalimentación internamente
- Categorizar temas de retroalimentación (por ej., "quiere más niveles de dificultad")
- Rastrear tendencias de retroalimentación a lo largo del tiempo

**NO**:
❌ Respondemos a retroalimentación individual (no se recopila información de contacto)  
❌ Compartimos retroalimentación públicamente  
❌ Usamos retroalimentación para marketing  
❌ Vinculamos retroalimentación a su identidad (es anónima)

**Nota**: Si desea una respuesta a su retroalimentación, envíenos un correo electrónico directamente a contact@bloombyte.dev en lugar de usar el formulario dentro de la aplicación.

---

### 2.6 Para Entregar Desafíos Diarios (Entrega de Contenido)

**Base Legal**: Interés legítimo (RGPD Art. 6(1)(f))

Usamos un servidor para:
- Generar configuraciones diarias de puzzles
- Asegurar que todos los usuarios obtengan el mismo desafío diario
- Distribuir datos de puzzles eficientemente

**No ocurre seguimiento**: Las llamadas a la API de desafío diario no recopilan datos de usuario, eventos de análisis o identificadores del dispositivo.

---

### 2.7 Propósitos para los que NO Usamos Sus Datos

Para ser transparentes, aquí está lo que **NO** hacemos con sus datos:

❌ **Vender sus datos**: Nunca vendemos datos de usuario a terceros  
❌ **Enviarle spam**: No tenemos su correo electrónico, así que no podemos  
❌ **Compartir con redes sociales**: No hay integración de Facebook/Twitter/Instagram  
❌ **Calificación crediticia**: No somos un servicio financiero  
❌ **Decisiones de empleo**: No somos un servicio de verificación de antecedentes  
❌ **Suscripción de seguros**: Somos un juego de puzzles  
❌ **Discriminar**: No usamos datos para discriminar basándonos en raza, religión, género, etc.  
❌ **Toma de decisiones automatizada**: No hay IA/ML tomando decisiones que le afecten legalmente  

---

## 3. Base Legal para el Tratamiento (RGPD)

Si usted está en la Unión Europea (UE) o el Espacio Económico Europeo (EEE), el RGPD requiere que expliquemos nuestra base legal para tratar sus datos.

### 3.1 Consentimiento (RGPD Artículo 6(1)(a))

**Qué significa**: Usted acepta explícitamente la recopilación de datos.

**Nos basamos en el consentimiento para**:
- ✅ **Recopilación de datos de análisis** (Firebase Analytics)
- ✅ **Informes de fallos** (Firebase Crashlytics)
- ✅ **Publicidad personalizada** (AdMob con ID de Publicidad)
- ✅ **Envío de retroalimentación** (Cloud Firestore)

**Sus derechos**:
- Puede retirar el consentimiento en cualquier momento en Configuración de Privacidad
- La retirada no afecta el tratamiento pasado (pero detiene la recopilación futura)
- Aún puede usar la aplicación con todos los consentimientos deshabilitados

---

### 3.2 Intereses Legítimos (RGPD Artículo 6(1)(f))

**Qué significa**: El tratamiento es necesario para nuestros intereses comerciales legítimos, equilibrados con sus derechos.

**Nos basamos en intereses legítimos para**:
- ✅ **Almacenamiento de datos locales** (estado del juego, preferencias) - necesario para la funcionalidad de la aplicación
- ✅ **Anuncios no personalizados** - apoya el acceso gratuito a la aplicación sin seguimiento invasivo
- ✅ **Entrega de desafío diario** - proporciona función central del juego
- ✅ **Medidas de seguridad** - protege contra fraudes y abusos

**Nuestra prueba de equilibrio**:
- **Nuestro interés**: Proporcionar una aplicación de puzzles gratuita, funcional y sostenible
- **Sus derechos**: Privacidad, minimización de datos, sin seguimiento excesivo
- **Resultado**: Minimizamos la recopilación de datos, usamos almacenamiento local donde sea posible y requerimos consentimiento para cualquier dato que salga de su dispositivo

**Sus derechos**: Puede oponerse al tratamiento basado en intereses legítimos (consulte la Sección 7).

---

### 3.3 Contrato (RGPD Artículo 6(1)(b))

**Qué significa**: El tratamiento es necesario para cumplir nuestro acuerdo con usted.

**NO nos basamos en contrato** porque:
- No se requiere creación de cuenta o inicio de sesión
- No hay servicios pagos (la aplicación es gratuita)
- El uso de la aplicación se rige por nuestros Términos y Condiciones (documento separado)

---

### 3.4 Obligación Legal (RGPD Artículo 6(1)(c))

**Qué significa**: Debemos tratar datos para cumplir con las leyes.

**Podemos basarnos en obligación legal para**:
- ✅ **Responder a solicitudes legales válidas** (órdenes judiciales, citaciones)
- ✅ **Cumplir con informes fiscales/financieros** (si monetizamos en el futuro)

**Actualmente no aplicable**: No tenemos datos que estemos legalmente obligados a recopilar.

---

### 3.5 Intereses Vitales (RGPD Artículo 6(1)(d))

**Qué significa**: El tratamiento es necesario para proteger la vida de alguien.

**No aplicable**: Sudokan es un juego de puzzles, no una aplicación de salud/seguridad.

---

### 3.6 Interés Público (RGPD Artículo 6(1)(e))

**Qué significa**: El tratamiento es necesario para una tarea de interés público.

**No aplicable**: Somos una empresa privada, no una autoridad pública.

---

**Resumen**: Nos basamos principalmente en el **consentimiento** (para análisis, informes de fallos, anuncios personalizados) y los **intereses legítimos** (para funciones centrales de la aplicación). Usted controla todo el tratamiento basado en consentimiento a través de la Configuración de Privacidad.

---

## 4. Compartición de Datos y Terceros

No vendemos sus datos personales. Sin embargo, trabajamos con proveedores de servicios de terceros de confianza para ofrecer la funcionalidad de la aplicación. Esta sección explica con quién compartimos datos y por qué.

### 4.1 Google LLC (Nuestro Proveedor de Servicios Principal)

Usamos varios servicios de Google para potenciar Sudokan. Aquí está el desglose:

#### Firebase Analytics
- **Propósito**: Análisis de uso de la aplicación (si consiente)
- **Datos Compartidos**: Información del dispositivo, eventos de uso de la aplicación, propiedades de usuario (consulte la Sección 1.2)
- **Acuerdo de Tratamiento de Datos (DPA)**: Google actúa como un **encargado del tratamiento** bajo el RGPD
- **Ubicación**: Datos almacenados en servidores de Google en Estados Unidos (Iowa)
- **Política de Privacidad**: [Privacidad de Firebase](https://firebase.google.com/support/privacy?hl=es)
- **Su Control**: Deshabilite en Configuración de Privacidad → "Mejorar el Juego"

#### Firebase Crashlytics
- **Propósito**: Informes de fallos (si consiente)
- **Datos Compartidos**: Registros de fallos, trazas de pila, estado del dispositivo (consulte la Sección 1.3)
- **Acuerdo de Tratamiento de Datos (DPA)**: Google actúa como un **encargado del tratamiento** bajo el RGPD
- **Ubicación**: Datos almacenados en servidores de Google en Estados Unidos
- **Política de Privacidad**: [Privacidad de Firebase](https://firebase.google.com/support/privacy?hl=es)
- **Su Control**: Deshabilite en Configuración de Privacidad → "Ayúdanos a Corregir Problemas"

#### Google AdMob
- **Propósito**: Servicio de anuncios (para apoyar el acceso gratuito a la aplicación)
- **Datos Compartidos**: 
  - **Anuncios no personalizados**: Información del dispositivo, ubicación aproximada (país), interacciones con anuncios
  - **Anuncios personalizados** (si consiente): ID de Publicidad (IDFA/AAID), datos de seguimiento entre aplicaciones, intereses inferidos
- **Acuerdo de Tratamiento de Datos (DPA)**: Google actúa como un **encargado del tratamiento** bajo el RGPD
- **Ubicación**: Datos almacenados en servidores de Google globalmente
- **Política de Privacidad**: [Privacidad de AdMob](https://support.google.com/admob/answer/6128543?hl=es)
- **Su Control**: Deshabilite los anuncios personalizados en Configuración de Privacidad → "Anuncios Personalizados"

#### Cloud Firestore
- **Propósito**: Almacenamiento de retroalimentación (si envía retroalimentación)
- **Datos Compartidos**: Texto de retroalimentación, calificación de satisfacción, contexto del dispositivo (consulte la Sección 1.5)
- **Acuerdo de Tratamiento de Datos (DPA)**: Google actúa como un **encargado del tratamiento** bajo el RGPD
- **Ubicación**: Datos almacenados en servidores de Google en Europa - Bélgica, región `europe-west1`
- **Política de Privacidad**: [Privacidad de Firebase](https://firebase.google.com/support/privacy?hl=es)
- **Su Control**: El envío de retroalimentación es voluntario; puede solicitar su eliminación en cualquier momento

**Rol de Google**: Google es un **encargado del tratamiento**, lo que significa que procesan datos en nuestro nombre según nuestras instrucciones. Tenemos un Acuerdo de Tratamiento de Datos (DPA) con Google que incluye:
- Cláusulas Contractuales Tipo (CCT) para transferencias internacionales (consulte la Sección 9)
- Obligaciones de cumplimiento del RGPD
- Requisitos de seguridad de datos
- Divulgación de sub-encargados

**Más Información**:
- [Cómo Google usa datos de aplicaciones que utilizan servicios de Google](https://policies.google.com/technologies/partner-sites?hl=es)
- [Centro de Recursos RGPD de Google Cloud](https://cloud.google.com/privacy/gdpr?hl=es)

---

### 4.2 Socios de Red Publicitaria (Más de 100 Terceros)

Cuando consiente los anuncios personalizados, Google AdMob comparte datos con **más de 100 socios de red publicitaria** para servir anuncios dirigidos.

**Socios Comunes** (lista no exhaustiva):
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

**Lo Que Pueden Recopilar** (cuando los anuncios personalizados están habilitados):
- ID de Publicidad (IDFA/AAID)
- Información del dispositivo (modelo, SO, tamaño de pantalla)
- Interacciones con anuncios (impresiones, clics, conversiones)
- Intereses y demografía inferidos
- Datos de seguimiento entre aplicaciones

**Su Rol**: Estos socios son **responsables del tratamiento independientes**, lo que significa que procesan datos según sus propias políticas de privacidad, no solo la nuestra.

**Lista Completa**: [Compradores Autorizados de Google](https://support.google.com/admob/answer/9012903?hl=es)

**Su Control**:
- Deshabilite los anuncios personalizados en Configuración de Privacidad → "Anuncios Personalizados" (cambia a anuncios no personalizados)
- Opte por no participar en todo el dispositivo:
  - **iOS**: Configuración → Privacidad → Seguimiento → Denegar
  - **Android**: Configuración → Google → Anuncios → Desactivar Personalización de Anuncios

**Importante**: Si deshabilita los anuncios personalizados en Sudokan, estos socios NO recibirán su ID de Publicidad de nuestra aplicación. Sin embargo, otras aplicaciones en su dispositivo aún pueden compartir datos con ellos.

---

### 4.3 API de Desafío Diario (Compartición Mínima de Datos)

Nuestra función de Desafío Diario obtiene puzzles diarios de un servidor que controlamos.

**Datos Compartidos**:
- Versión de la aplicación (para garantizar compatibilidad)
- Fecha solicitada (para obtener el puzzle diario correcto)
- Nivel de dificultad (para generar el puzzle apropiado)

**Datos NO Compartidos**:
❌ Identificadores del dispositivo  
❌ Comportamiento del usuario o análisis  
❌ Su progreso del juego  
❌ Información personal

**Ubicación del Servidor**: Alojado en la nube (el proveedor específico está sujeto a cambios)

**Propósito**: Asegurar que todos los usuarios en todo el mundo obtengan el mismo puzzle del desafío diario.

---

### 4.4 Qué NO Compartimos

Para ser absolutamente claros, **nunca** compartimos:

❌ **Sus soluciones de puzzles o progreso del juego**: Esto permanece en su dispositivo  
❌ **Su configuración local o preferencias**: Nunca sale de su dispositivo  
❌ **Sus identificadores personales**: No los recopilamos, así que no podemos compartirlos  
❌ **Su texto de retroalimentación**: Solo almacenado en nuestra base de datos privada, no compartido con terceros  
❌ **Datos para propósitos no relacionados**: No compartimos datos con terceros no relacionados (por ej., corredores de datos, mercadólogos)

---

### 4.5 Divulgaciones Legales (Circunstancias Raras)

Podemos divulgar su información si lo requiere la ley:

**Cuándo Podemos Divulgar**:
- **Órdenes judiciales o citaciones**: Si estamos legalmente obligados por una orden judicial válida
- **Solicitudes de aplicación de la ley**: Si se requiere cumplir con procesos legales
- **Prevención de fraudes**: Para proteger contra actividad fraudulenta, abusiva o ilegal
- **Amenazas de seguridad**: Para proteger la seguridad de nuestros usuarios o el público
- **Transferencias comerciales**: Si Sudokan es adquirido o fusionado (los datos se transfieren al nuevo propietario)

**Lo Que Hacemos**:
- Revisamos todas las solicitudes legales para validez
- Notificamos a los usuarios cuando la ley lo permite
- Solo divulgamos los datos mínimos necesarios
- Impugnamos solicitudes excesivamente amplias o inválidas

**Importante**: Debido a que recopilamos datos mínimos y la mayoría permanece en su dispositivo, tenemos muy pocos datos para divulgar incluso si la ley lo requiere.

---

### 4.6 Resumen del Acuerdo de Tratamiento de Datos (DPA)

Para cumplir con el RGPD, tenemos Acuerdos de Tratamiento de Datos con todos los encargados:

| Servicio | Encargado | DPA/CCT | Ubicación de Datos |
|---------|-----------|----------|---------------|
| Firebase Analytics | Google LLC | ✅ Sí | EE. UU. (Iowa) |
| Firebase Crashlytics | Google LLC | ✅ Sí | EE. UU. |
| Google AdMob | Google LLC | ✅ Sí | Global |
| Cloud Firestore | Google LLC | ✅ Sí | Bélgica (UE) |

**Cláusulas Contractuales Tipo (CCT)**: Google usa CCT aprobadas por la UE para transferencias internacionales de datos (consulte la Sección 9 para detalles).

---

## 5. Retención de Datos

Retenemos sus datos solo el tiempo necesario para los propósitos descritos en esta política.

### 5.1 Datos Locales (En Su Dispositivo)

**Estado del Juego, Historial, Estadísticas, Configuración**:
- **Retención**: Hasta que elimine la aplicación, borre los datos de la aplicación o borre manualmente el historial del juego
- **Su Control**:
  - Borrar historial del juego: Pantalla de Historial del Juego → botón "Borrar Historial"
  - Eliminar todos los datos: Desinstalar la aplicación

**Importante**: No podemos eliminar remotamente los datos locales porque nunca salen de su dispositivo.

---

### 5.2 Datos de Análisis (Firebase Analytics)

**Período de Retención**: **2 meses** (60 días) - eliminado automáticamente por Firebase

**Qué Significa Esto**:
- Los datos de eventos con más de 60 días se purgan automáticamente
- Las propiedades de usuario se actualizan pero los valores históricos no se retienen
- Los informes agregados pueden retener resúmenes (por ej., "10,000 usuarios jugaron en enero") pero no eventos individuales

**Su Control**:
- Deshabilite los análisis en Configuración de Privacidad → "Mejorar el Juego" (detiene la recopilación futura)
- Solicite la eliminación de datos existentes enviando un correo electrónico a contact@bloombyte.dev (eliminaremos en 30 días)

**Después de la Eliminación**:
- El consentimiento de análisis se establece en falso localmente
- No se envían nuevos datos a Firebase
- Los datos existentes se eliminan en 60 días automáticamente (o inmediatamente tras solicitud de eliminación manual)

---

### 5.3 Datos de Informes de Fallos (Firebase Crashlytics)

**Período de Retención**: **90 días** - eliminado automáticamente por Firebase

**Qué Significa Esto**:
- Los informes de fallos con más de 90 días se purgan automáticamente
- Podemos exportar datos críticos de fallos para corrección de errores (sin identificadores de dispositivo)

**Su Control**:
- Deshabilite los informes de fallos en Configuración de Privacidad → "Ayúdanos a Corregir Problemas" (detiene la recopilación futura)
- Solicite eliminación enviando un correo electrónico a contact@bloombyte.dev

**Después de la Eliminación**:
- El consentimiento de informes de fallos se establece en falso localmente
- No se envían nuevos datos de fallos a Firebase
- Los datos existentes se eliminan en 90 días automáticamente

---

### 5.4 Datos Publicitarios (Google AdMob)

**Período de Retención**: Varía según el socio de red publicitaria

**Datos de Google AdMob**:
- **Anuncios no personalizados**: Datos mínimos, retenidos durante ~30 días
- **Anuncios personalizados**: Las asociaciones de ID de Publicidad se retienen hasta que restablezca su ID de Publicidad u opte por no participar

**Su Control**:
- Deshabilite los anuncios personalizados en Configuración de Privacidad → "Anuncios Personalizados"
- Restablezca el ID de Publicidad:
  - **iOS**: Configuración → Privacidad → Seguimiento → Restablecer Identificador de Publicidad
  - **Android**: Configuración → Google → Anuncios → Restablecer ID de publicidad
- Solicite eliminación a Google: [Configuración de Anuncios de Google](https://adssettings.google.com/?hl=es)

**Después de Optar por No Participar**:
- Las nuevas solicitudes de anuncios usan segmentación no personalizada
- Las asociaciones de ID de Publicidad existentes pueden persistir durante ~30 días (política de retención de Google)

---

### 5.5 Datos de Retroalimentación (Cloud Firestore)

**Período de Retención**: **12 meses** - eliminado automáticamente después de 1 año

**Qué Significa Esto**:
- La retroalimentación enviada hoy se elimina 12 meses a partir de ahora
- Podemos exportar temas de retroalimentación anonimizados antes de la eliminación (por ej., "los usuarios quieren más niveles de dificultad")

**Su Control**:
- Solicite eliminación anticipada enviando un correo electrónico a contact@bloombyte.dev con los detalles de su dispositivo y la marca de tiempo del envío
- Eliminaremos en 30 días de la solicitud

**Después de la Eliminación**:
- El texto de retroalimentación se elimina permanentemente de Firestore
- Los insights agregados pueden permanecer (por ej., "85% de calificación de satisfacción positiva" - sin retroalimentación individual)

---

### 5.6 Usuarios Inactivos

**Si deja de usar Sudokan**:
- **Datos locales**: Permanecen en su dispositivo hasta la desinstalación de la aplicación
- **Datos de análisis**: Eliminados automáticamente después de 60 días
- **Datos de fallos**: Eliminados automáticamente después de 90 días
- **Retroalimentación**: Eliminada automáticamente después de 12 meses
- **Datos de anuncios**: Varía según la red (típicamente 30-90 días para usuarios no activos)

**NO tenemos un concepto de "cuentas de usuario"**, así que no podemos detectar inactividad. Los períodos de retención automática se aplican independientemente del uso.

---

### 5.7 Tabla Resumen de Eliminación de Datos

| Tipo de Datos | Período de Retención | ¿Eliminación Auto? | Eliminación Manual |
|-----------|------------------|--------------|-----------------|
| **Datos locales** (estado del juego, configuración) | Hasta desinstalación de la aplicación | ❌ No (su dispositivo) | Borrar datos en la aplicación o desinstalar |
| **Datos de análisis** | 60 días | ✅ Sí | Email contact@bloombyte.dev |
| **Informes de fallos** | 90 días | ✅ Sí | Email contact@bloombyte.dev |
| **Datos de anuncios** (no personalizados) | ~30 días | ✅ Sí | N/A (automático) |
| **Datos de anuncios** (personalizados) | Hasta opt-out/restablecimiento de ID | ❌ No | Restablecer ID de Publicidad + opt out |
| **Retroalimentación** | 12 meses | ✅ Sí | Email contact@bloombyte.dev |

---

## 6. Seguridad de Datos

Tomamos medidas razonables para proteger sus datos contra acceso no autorizado, pérdida o uso indebido.

### 6.1 Datos Almacenados Localmente (En Su Dispositivo)

**Medidas de Seguridad**:
- **Almacenamiento cifrado**: La base de datos Hive usa cifrado AES-256 (almacenamiento seguro de Flutter)
- **Acceso en sandbox**: Solo Sudokan puede acceder a sus propios datos (protección a nivel de SO)
- **Sin transmisión de red**: Los datos locales nunca se envían por internet (a menos que habilite análisis/informes de fallos)

**Su Responsabilidad**:
- Mantenga su dispositivo seguro (use bloqueo de pantalla, autenticación biométrica)
- No haga jailbreak/root a su dispositivo (debilita las protecciones a nivel de SO)
- Mantenga su SO actualizado (parches de seguridad)

**Lo Que No Podemos Controlar**:
- Si su dispositivo es robado y desbloqueado, los datos locales son accesibles
- Si usa servicios de respaldo del dispositivo (iCloud, Google Drive), sus datos del juego pueden respaldarse en la nube (controlado por Apple/Google, no por nosotros)

---

### 6.2 Datos en Tránsito (Comunicación de Red)

**Cifrado**:
- ✅ **Cifrado HTTPS/TLS** para todas las solicitudes de red:
  - Firebase Analytics: Cifrado
  - Firebase Crashlytics: Cifrado
  - Google AdMob: Cifrado
  - Cloud Firestore: Cifrado
  - API de Desafío Diario: Cifrado

**Qué Significa Esto**:
- Los datos enviados por internet están cifrados en tránsito
- Terceros (ISP, operadores de red) no pueden interceptar y leer datos
- Se previenen ataques de intermediario

---

### 6.3 Datos en Reposo (Servidores de Terceros)

**Seguridad de Google** (Firebase, AdMob, Firestore):
- Centros de datos con seguridad física (guardias, acceso biométrico)
- Datos cifrados en reposo (AES-256)
- Auditorías y certificaciones de seguridad regulares (ISO 27001, SOC 2)
- Controles de acceso (solo personal autorizado de Google)

**Más Información**:
- [Seguridad de Google Cloud](https://cloud.google.com/security?hl=es)
- [Documentación de Seguridad de Firebase](https://firebase.google.com/support/privacy?hl=es)

---

### 6.4 Nuestras Prácticas de Seguridad

**Como desarrolladores de la aplicación, nosotros**:
- ✅ Usamos prácticas de codificación segura (evitamos vulnerabilidades comunes)
- ✅ Actualizamos regularmente dependencias (parches de seguridad)
- ✅ Realizamos revisiones de código antes de los lanzamientos
- ✅ Monitoreamos informes de fallos para problemas de seguridad
- ✅ Respondemos rápidamente a vulnerabilidades de seguridad

**Controles de Acceso**:
- Solo personal autorizado (desarrollador de la aplicación) puede acceder a:
  - Panel de Firebase Analytics
  - Informes de Crashlytics
  - Base de datos de retroalimentación de Firestore
- Ningún tercero tiene acceso directo a sus datos (excepto Google como encargado)

**Respuesta a Incidentes**:
- Si ocurre una violación de datos, nosotros:
  1. Investigaremos y contendremos la violación
  2. Notificaremos a los usuarios afectados (si son identificables)
  3. Informaremos a las autoridades de protección de datos (si la ley lo requiere)
  4. Tomaremos medidas correctivas para prevenir recurrencias

---

### 6.5 Limitaciones y Riesgos

**Ningún Sistema es 100% Seguro**:
- A pesar de nuestros esfuerzos, ningún método de transmisión o almacenamiento es completamente seguro
- Pueden ocurrir ciberataques, fallos de hardware o errores humanos
- Si ocurre una violación, asumiremos la responsabilidad y le notificaremos

**Riesgos de Terceros**:
- Dependemos de la seguridad de Google (Firebase, AdMob, Firestore)
- Los socios de red publicitaria (más de 100) tienen sus propias prácticas de seguridad
- No podemos garantizar la seguridad de terceros, pero elegimos socios de buena reputación

**Su Rol**:
- Use un código de acceso fuerte para el dispositivo
- Evite usar Sudokan en dispositivos públicos/compartidos
- Mantenga el SO de su dispositivo actualizado
- Tenga cuidado con intentos de phishing (nunca pediremos contraseñas o información de pago)

---

### 6.6 Contacto de Seguridad

**Si descubre una vulnerabilidad de seguridad**:
- **Correo Electrónico**: contact@bloombyte.dev
- **Asunto**: "Vulnerabilidad de Seguridad en Sudokan"
- **Tiempo de Respuesta**: Responderemos en 7 días

**Por favor NO**:
- Divulgue públicamente la vulnerabilidad antes de que la corrijamos
- Explote la vulnerabilidad para propósitos maliciosos

Apreciamos la divulgación responsable y acreditaremos a los investigadores de seguridad (con permiso).

---

## 7. Sus Derechos y Opciones

Dependiendo de su ubicación, tiene derechos con respecto a sus datos personales. Respetamos todos los derechos, independientemente de dónde viva.

### 7.1 Derechos Universales (Todos, En Todo el Mundo)

Usted siempre puede:

#### 1. **Controlar el Consentimiento**
- **Dónde**: Configuración de Privacidad en la aplicación
- **Qué**: Habilitar/deshabilitar análisis, informes de fallos, anuncios personalizados
- **Efecto**: Inmediato (detiene la recopilación futura de datos)

#### 2. **Borrar Datos Locales**
- **Dónde**: Pantalla de Historial del Juego → botón "Borrar Historial"
- **Qué**: Elimina el historial del juego y estadísticas
- **Efecto**: Inmediato (no se puede deshacer)

#### 3. **Desinstalar la Aplicación**
- **Dónde**: Configuración de su dispositivo
- **Qué**: Elimina todos los datos locales
- **Efecto**: Inmediato (se pierde el progreso del juego)

#### 4. **Contáctenos**
- **Correo Electrónico**: contact@bloombyte.dev
- **Para**: Preguntas, quejas, solicitudes de datos
- **Tiempo de Respuesta**: En 30 días

---

### 7.2 Derechos del RGPD (Residentes de la UE/EEE/Reino Unido)

Si usted está en la Unión Europea, el Espacio Económico Europeo o el Reino Unido, tiene derechos adicionales bajo el RGPD:

#### Derecho de Acceso (Artículo 15)
**Qué**: Solicitar una copia de sus datos personales que conservamos

**Cómo Ejercerlo**:
- Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Acceso de Datos RGPD"
- Incluya: Modelo de su dispositivo, fechas aproximadas de uso de la aplicación
- Proporcionaremos datos en un formato estructurado y legible por máquina (JSON)

**Lo Que Recibirá**:
- Copia de datos de análisis (si los análisis están habilitados)
- Copia de informes de fallos (si los informes de fallos están habilitados)
- Copia de envíos de retroalimentación (si envió alguno)
- Nota: Los datos locales (estado del juego, configuración) ya están en su dispositivo

**Plazo**: En **30 días** (puede extenderse a 60 días para solicitudes complejas)

---

#### Derecho de Rectificación (Artículo 16)
**Qué**: Corregir datos personales inexactos

**Cómo Ejercerlo**:
- Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Corrección de Datos RGPD"
- Especifique qué datos son incorrectos y la corrección

**Importante**: La mayoría de los datos que recopilamos son técnicos (modelo del dispositivo, eventos de la aplicación), por lo que la rectificación puede no ser aplicable. Si cree que los datos son inexactos, investigaremos.

**Plazo**: En **30 días**

---

#### Derecho de Supresión / "Derecho al Olvido" (Artículo 17)
**Qué**: Solicitar la eliminación de sus datos personales

**Cómo Ejercerlo**:
- Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Eliminación de Datos RGPD"
- Incluya: Modelo del dispositivo, fechas aproximadas de uso de la aplicación

**Lo Que Eliminaremos**:
- ✅ Datos de análisis (de Firebase, en 30 días)
- ✅ Informes de fallos (de Crashlytics, en 30 días)
- ✅ Envíos de retroalimentación (de Firestore, en 30 días)
- ✅ Datos de anuncios (instruiremos a Google para eliminar, pero no podemos controlar redes publicitarias de terceros)

**Lo Que No Podemos Eliminar**:
- ❌ Datos locales (en su dispositivo - debe borrarlos o desinstalar)
- ❌ Datos requeridos por ley para retener (por ej., registros financieros - actualmente N/A)
- ❌ Datos agregados/anonimizados (no se consideran datos personales)

**Plazo**: En **30 días**

**Después de la Eliminación**:
- Confirmaremos la eliminación por correo electrónico
- Puede continuar usando la aplicación (toda la recopilación de datos permanece deshabilitada a menos que vuelva a dar su consentimiento)

---

#### Derecho a Restringir el Tratamiento (Artículo 18)
**Qué**: Limitar cómo usamos sus datos mientras verificamos una solicitud (por ej., disputa de exactitud)

**Cómo Ejercerlo**:
- Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Restricción de Tratamiento RGPD"
- Explique la razón de la restricción

**Efecto**:
- Pausaremos el tratamiento no esencial (por ej., análisis de datos de análisis)
- Las funciones esenciales (por ej., servicio de anuncios) pueden continuar
- Los datos no se eliminarán, pero el uso es limitado

**Plazo**: En **30 días**

---

#### Derecho a la Portabilidad de Datos (Artículo 20)
**Qué**: Recibir sus datos en un formato portátil para transferir a otro servicio

**Cómo Ejercerlo**:
- Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Portabilidad de Datos RGPD"

**Lo Que Recibirá**:
- Archivo JSON con:
  - Eventos de análisis (si aplica)
  - Informes de fallos (si aplica)
  - Envíos de retroalimentación (si aplica)
  - Estadísticas del juego (exportadas del almacenamiento local, si proporciona un respaldo)

**Formato**: JSON (legible por máquina)

**Plazo**: En **30 días**

---

#### Derecho de Oposición (Artículo 21)
**Qué**: Oponerse al tratamiento basado en intereses legítimos

**Cómo Ejercerlo**:
- Envíe un correo electrónico a contact@bloombyte.dev con asunto "Oposición al Tratamiento RGPD"
- Especifique a qué tratamiento se opone (por ej., anuncios no personalizados, API de desafío diario)

**Efecto**:
- Detendremos el tratamiento a menos que tengamos motivos legítimos convincentes para continuar
- Para análisis/informes de fallos: Ya controlable mediante Configuración de Privacidad
- Para anuncios: Dependemos de anuncios para ofrecer una aplicación gratuita, pero puede deshabilitar anuncios personalizados

**Plazo**: En **30 días**

---

#### Derecho a Oponerse a la Toma de Decisiones Automatizada (Artículo 22)
**Qué**: Oponerse a decisiones tomadas únicamente por sistemas automatizados que le afecten significativamente

**Estado de Sudokan**: ❌ **No aplicable** - no tomamos decisiones automatizadas que le afecten legal o significativamente. Ejemplos de lo que NO hacemos:
- Calificación crediticia
- Decisiones de empleo
- Suscripción de seguros
- Juicios legales

**Ajuste Dinámico de Dificultad (DDA)**: El sistema DDA ajusta las recomendaciones de dificultad del puzzle, pero:
- Es una función de juego, no una decisión legal
- Puede ignorar las recomendaciones
- Puede deshabilitar DDA en configuración
- Sin impacto legal o significativo

---

#### Derecho a Presentar una Queja
**Qué**: Presentar una queja ante una autoridad de protección de datos

**Cómo**:
- **Residentes de la UE**: Contacte a la autoridad supervisora de su país
  - [Lista de Autoridades de Protección de Datos de la UE](https://edpb.europa.eu/about-edpb/about-edpb/members_es)
- **Residentes del Reino Unido**: [Information Commissioner's Office (ICO)](https://ico.org.uk/)

**Autoridades Comunes**:
- **Alemania**: Bundesbeauftragter für den Datenschutz und die Informationsfreiheit (BfDI)
- **Francia**: Commission Nationale de l'Informatique et des Libertés (CNIL)
- **Italia**: Garante per la protezione dei dati personali
- **España**: Agencia Española de Protección de Datos (AEPD)
- **Rumanía**: Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)

**Cuándo Quejarse**:
- Si no respondemos a su solicitud en 30 días
- Si no está satisfecho con nuestra respuesta
- Si cree que violamos el RGPD

**Sin Penalización**: Presentar una queja no le impide buscar recursos legales.

---

### 7.3 Derechos de CCPA/CPRA (Residentes de California)

Si usted es residente de California, tiene derechos bajo la Ley de Privacidad del Consumidor de California (CCPA) y la Ley de Derechos de Privacidad de California (CPRA):

#### Derecho a Saber (CCPA § 1798.100)
**Qué**: Solicitar divulgación de:
- Categorías de información personal recopilada
- Fuentes de información personal
- Propósito comercial para la recopilación
- Terceros con quienes compartimos datos

**Cómo Ejercerlo**:
- Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Datos CCPA"

**Lo Que Recibirá**:
- Informe detallado (consulte las Secciones 1-4 de esta política)
- Copia de datos específicos (igual que la solicitud de acceso del RGPD)

**Plazo**: En **45 días** (puede extenderse a 90 días con aviso)

---

#### Derecho a Eliminar (CCPA § 1798.105)
**Qué**: Solicitar la eliminación de información personal

**Cómo Ejercerlo**: Igual que la supresión del RGPD (consulte la Sección 7.2)

**Excepciones**: Podemos retener datos si es necesario para:
- Completar transacciones
- Detectar incidentes de seguridad
- Cumplir con obligaciones legales
- Usos legales internos (por ej., depuración)

**Plazo**: En **45 días**

---

#### Derecho a Optar por No Participar en la Venta (CCPA § 1798.120)
**Qué**: Optar por no participar en la "venta" de información personal

**Estado de Sudokan**: ❌ **NO vendemos información personal**
- Usamos Google AdMob para anuncios (compartición de datos, no venta)
- No vendemos datos a corredores de datos o terceros
- No hay intercambio financiero por datos de usuario

**Sin embargo**: Bajo la definición amplia de CCPA, los anuncios personalizados pueden considerarse "venta" en algunas interpretaciones.

**Su Control**:
- Deshabilite los anuncios personalizados en Configuración de Privacidad → "Anuncios Personalizados"
- Efecto: Detiene la compartición del ID de Publicidad con redes publicitarias

**Sin Enlace "No Vender Mi Información Personal"**: No mostramos esto porque:
- No vendemos datos en el sentido tradicional
- Puede controlar los anuncios personalizados directamente en Configuración de Privacidad
- Los anuncios no personalizados no se consideran "venta"

---

#### Derecho a Optar por No Participar en la Compartición para Publicidad Conductual entre Contextos (CPRA § 1798.135)
**Qué**: Optar por no compartir datos para publicidad dirigida en diferentes contextos (aplicaciones, sitios web)

**Cómo Ejercerlo**:
- Deshabilite los anuncios personalizados en Configuración de Privacidad → "Anuncios Personalizados"
- O use la opción de no participar a nivel del dispositivo (consulte la Sección 7.1)

**Plazo**: Inmediato

---

#### Derecho a Corregir Información Inexacta (CPRA § 1798.106)
**Qué**: Solicitar la corrección de información personal inexacta

**Cómo Ejercerlo**: Igual que la rectificación del RGPD (consulte la Sección 7.2)

**Plazo**: En **45 días**

---

#### Derecho a Limitar el Uso de Información Personal Sensible (CPRA § 1798.121)
**Qué**: Limitar el uso de información personal sensible para ciertos propósitos

**Estado de Sudokan**: ❌ **NO recopilamos información personal sensible** según lo definido por CCPA:
- ❌ Número de Seguro Social, licencia de conducir, pasaporte
- ❌ Credenciales de cuenta (no se requiere inicio de sesión)
- ❌ Geolocalización precisa (solo nivel de país para anuncios)
- ❌ Raza, etnia, religión, orientación sexual
- ❌ Datos biométricos (huellas dactilares, reconocimiento facial)
- ❌ Datos de salud, datos genéticos
- ❌ Contenido de correos electrónicos o mensajes

---

#### Derecho a No Discriminación (CCPA § 1798.125)
**Qué**: No podemos discriminarlo por ejercer los derechos de CCPA

**Compromiso de Sudokan**:
- ✅ Puede usar la aplicación completamente con todos los consentimientos deshabilitados
- ✅ Sin diferencias de precio (la aplicación es gratuita)
- ✅ Sin denegación de servicio
- ✅ Sin funcionalidad degradada

**Divulgación de Incentivo Financiero**: ❌ No ofrecemos incentivos financieros por recopilación de datos (por ej., descuentos por optar por participar), por lo que esto no es aplicable.

---

### 7.4 Otros Derechos Regionales

#### Brasil (LGPD)
**Ley**: Lei Geral de Proteção de Dados (LGPD)  
**Derechos**: Similar al RGPD (acceso, corrección, eliminación, portabilidad, retiro de consentimiento)  
**Cómo Ejercerlos**: Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Datos LGPD"  
**Plazo**: En **15 días**

**Autoridad Supervisora**: Autoridade Nacional de Proteção de Dados (ANPD)

---

#### Japón (APPI)
**Ley**: Act on the Protection of Personal Information (APPI)  
**Derechos**: Divulgación, corrección, suspensión de uso, eliminación  
**Cómo Ejercerlos**: Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Datos APPI"  
**Plazo**: Sin demora

**Autoridad Supervisora**: Personal Information Protection Commission (PPC)

---

#### Otros Países
**Si su país tiene leyes de protección de datos**, honraremos derechos equivalentes:
- Acceso a sus datos
- Corrección de datos inexactos
- Eliminación de datos
- Retiro de consentimiento

**Cómo Ejercerlos**: Envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Protección de Datos [País]"

---

### 7.5 Cómo Ejercer Sus Derechos

**Para hacer cualquier solicitud de datos**:

1. **Envíenos un correo electrónico**: contact@bloombyte.dev
2. **Línea de asunto**: Especifique el tipo de solicitud (por ej., "Solicitud de Eliminación de Datos RGPD")
3. **Incluya**:
   - Modelo de su dispositivo (por ej., "iPhone 14", "Samsung Galaxy S23")
   - Su país/región
   - Fechas aproximadas de uso de la aplicación (nos ayuda a localizar sus datos)
   - Detalles específicos de la solicitud
4. **Responderemos** dentro del plazo legal (típicamente 30-45 días)

**Verificación**:
- Debido a que no recopilamos identificadores personales (nombre, correo electrónico), la verificación es desafiante
- Podemos hacer preguntas de seguimiento sobre su dispositivo/uso para confirmar la identidad
- Para solicitudes de eliminación, eliminaremos datos que coincidan con las características de su dispositivo

**Sin Costo**: Ejercer sus derechos es **gratuito**. Podemos cobrar una tarifa razonable por solicitudes excesivas o repetitivas.

---

## 8. Privacidad de los Niños

Sudokan está diseñado para jugadores **de 13 años de edad o mayores**. Cumplimos con la Ley de Protección de la Privacidad en Línea de los Niños (COPPA) y otras leyes de privacidad infantil.

### 8.1 Restricción de Edad

**Edad Mínima**: 13+

**Por Qué**: La recopilación de datos (análisis, informes de fallos, anuncios) requiere consentimiento parental para niños menores de 13 años en muchas jurisdicciones (COPPA en EE. UU., RGPD en la UE).

**Aplicación**:
- NO recopilamos información de edad ni verificamos las edades de los usuarios
- Nos basamos en las clasificaciones de edad de las tiendas de aplicaciones:
  - **Apple App Store**: Clasificado 4+ (audiencia general, pero la Política de Privacidad establece 13+)
  - **Google Play Store**: ESRB Everyone (E) - indica "13+" en el aviso de privacidad

---

### 8.2 Cumplimiento de COPPA (Estados Unidos)

**Requisitos de COPPA**: Los sitios web/aplicaciones dirigidos a niños menores de 13 años deben:
1. Obtener consentimiento parental verificable antes de recopilar información personal
2. Divulgar prácticas de recopilación de datos
3. Ofrecer a los padres la capacidad de revisar, eliminar y controlar los datos

**Estado de Sudokan**: ❌ **No dirigido a niños menores de 13 años**
- Audiencia objetivo: Adolescentes y adultos (13+)
- El contenido no está específicamente diseñado para niños
- Sin funciones específicas para niños (personajes de dibujos animados, juego enfocado en niños)

**Si un Niño Menor de 13 Años Usa Sudokan**:
- **Responsabilidad del Padre/Tutor**: Los padres deben supervisar el uso del dispositivo y deshabilitar análisis/anuncios en Configuración de Privacidad
- **Nuestro Compromiso**: Si descubrimos que se recopilaron datos de un niño menor de 13 años sin consentimiento parental, los eliminaremos inmediatamente

**Cómo Informar**: Si cree que su hijo menor de 13 años usó Sudokan y consintió la recopilación de datos, envíe un correo electrónico a contact@bloombyte.dev con asunto "Solicitud de Eliminación de Datos COPPA". Eliminaremos los datos en 30 días.

---

### 8.3 RGPD-K (Privacidad de Niños en la UE)

**Edad de Consentimiento de la UE para Tratamiento de Datos**: Varía según el país (13-16 años)
- **Alemania, Reino Unido, Francia, Italia, España, Rumanía**: 16+
- **Países Bajos, Dinamarca**: 13+
- **Bélgica**: 13+

**Consentimiento Parental**: Si un niño por debajo de la edad de consentimiento usa Sudokan:
- El padre/tutor debe proporcionar consentimiento para análisis, informes de fallos, anuncios personalizados
- NO tenemos un mecanismo de consentimiento parental (sin sistema de cuentas)

**Recomendación**: Los padres deben:
- Deshabilitar toda recopilación de datos en Configuración de Privacidad
- Usar controles parentales a nivel del dispositivo (Tiempo de Pantalla en iOS, Family Link en Android)
- Monitorear el uso de la aplicación

---

### 8.4 Padres: Cómo Proteger a Su Hijo

**Para garantizar la seguridad del niño**:

1. **Deshabilitar Recopilación de Datos**:
   - Vaya a Configuración de Privacidad
   - Deshabilite "Mejorar el Juego" (análisis)
   - Deshabilite "Ayúdanos a Corregir Problemas" (informes de fallos)
   - Deshabilite "Anuncios Personalizados" (segmentación de anuncios)

2. **Usar Controles Parentales del Dispositivo**:
   - **iOS**: Configuración → Tiempo de Pantalla → Restricciones de Contenido y Privacidad
   - **Android**: Aplicación Google Family Link

3. **Monitorear el Uso**:
   - Verificar informes de Tiempo de Pantalla
   - Revisar permisos de aplicaciones periódicamente

4. **Restringir Compras Dentro de la Aplicación** (si las agregamos en el futuro):
   - **iOS**: Configuración → Tiempo de Pantalla → Restricciones de Contenido y Privacidad → Compras de iTunes y App Store → Compras Dentro de la Aplicación → No Permitir
   - **Android**: Google Play Store → Configuración → Requerir autenticación para compras

**Contáctenos**: Si tiene inquietudes sobre la privacidad de su hijo, envíe un correo electrónico a contact@bloombyte.dev.

---

### 8.5 Responsabilidad de Terceros

**Google AdMob** y **socios de red publicitaria** tienen sus propias políticas de privacidad infantil:
- [Política de Familias de Google AdMob](https://support.google.com/admob/answer/9283766?hl=es)
- Muchas redes publicitarias restringen la segmentación conductual para niños

**No podemos controlar las prácticas de terceros**, pero elegimos socios de buena reputación comprometidos con la seguridad infantil.

---

## 9. Transferencias Internacionales de Datos

Sus datos pueden transferirse y procesarse en países fuera del suyo. Esta sección explica cómo protegemos sus datos durante transferencias internacionales.

### 9.1 Dónde se Procesan Sus Datos

**Ubicaciones de Almacenamiento de Datos**:

| Tipo de Datos | Ubicación Principal | Encargado | Base Legal para Transferencia |
|-----------|------------------|-----------|--------------------------|
| **Datos locales** (estado del juego, configuración) | Su dispositivo (su país) | N/A | Sin transferencia (permanece local) |
| **Datos de análisis** | Estados Unidos (Iowa) | Google LLC (Firebase) | Cláusulas Contractuales Tipo (CCT) |
| **Informes de fallos** | Estados Unidos | Google LLC (Crashlytics) | Cláusulas Contractuales Tipo (CCT) |
| **Datos de anuncios** | Global (múltiples países) | Google LLC + redes publicitarias | Cláusulas Contractuales Tipo (CCT) / Decisiones de Adecuación |
| **Retroalimentación** | Bélgica (UE) | Google LLC (Firestore) | Dentro de la UE (sin transferencia si está en la UE) |

**Por Qué los Datos Salen de Su País**:
- **Firebase Analytics/Crashlytics**: La infraestructura predeterminada de Google tiene sede en EE. UU.
- **AdMob**: Los anuncios se sirven globalmente desde el centro de datos más cercano para rendimiento
- **Firestore**: Elegimos específicamente servidores de la UE (Bélgica) para minimizar transferencias para usuarios de la UE

---

### 9.2 Base Legal para Transferencias Internacionales (RGPD)

Si usted está en la UE/EEE/Reino Unido, transferir sus datos fuera de estas regiones requiere salvaguardas legales bajo los Artículos 44-50 del RGPD.

#### Cláusulas Contractuales Tipo (CCT)
**Qué son**: Plantillas de contrato aprobadas por la Comisión de la UE que protegen legalmente los datos transferidos fuera de la UE

**Nuestra Implementación**:
- ✅ Google LLC ha firmado **Cláusulas Contractuales Tipo de la UE (2021/914)** con nosotros
- ✅ Las CCT cubren Firebase Analytics, Crashlytics, AdMob y Firestore
- ✅ Google se compromete a protecciones de nivel RGPD incluso en EE. UU.
- ✅ Incluye derechos del interesado, obligaciones de seguridad y notificaciones de violación

**Sus Derechos Bajo las CCT**:
- Solicitar una copia de las CCT enviando un correo electrónico a contact@bloombyte.dev
- Hacer cumplir los términos de CCT directamente contra Google (derechos de terceros beneficiarios)
- Presentar quejas ante autoridades supervisoras de la UE

**Más Información**:
- [Adenda de Tratamiento de Datos de Google Cloud](https://cloud.google.com/terms/data-processing-addendum?hl=es)
- [Cláusulas Contractuales Tipo de la UE](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_es)

---

#### Decisiones de Adecuación
**Qué son**: Determinación de la Comisión de la UE de que un país proporciona protección de datos adecuada

**Países Aplicables**:
- ✅ **Espacio Económico Europeo (EEE)**: Noruega, Islandia, Liechtenstein
- ✅ **Reino Unido** (decisión de adecuación posterior al Brexit)
- ✅ **Suiza** (adecuación parcial)
- ❌ **Estados Unidos**: Sin decisión de adecuación general (usa CCT en su lugar)

**Región de la UE de Firestore**:
- Si está en la UE y su retroalimentación se almacena en Bélgica (`europe-west1`), los datos permanecen en la UE
- No ocurre transferencia internacional (no aplica el Capítulo V del RGPD)

---

#### Marco de Privacidad de Datos UE-EE. UU. (DPF)
**Estado a noviembre de 2025**: El Marco de Privacidad de Datos UE-EE. UU. proporciona una base legal para transferencias de datos transatlánticas.

**Certificación de Google**:
- Google LLC está certificado bajo el Marco de Privacidad de Datos UE-EE. UU.
- Proporciona salvaguardas adicionales para el tratamiento de datos con sede en EE. UU.
- Complementa las Cláusulas Contractuales Tipo

**Sus Derechos**:
- Presentar quejas ante el Departamento de Comercio de EE. UU.
- Invocar arbitraje vinculante para disputas no resueltas

**Más Información**: [Lista del Marco de Privacidad de Datos](https://www.dataprivacyframework.gov/s/)

**Importante**: Incluso sin DPF, nuestras CCT con Google garantizan el cumplimiento legal.

---

### 9.3 Transferencias de Redes Publicitarias de Terceros

**Desafío**: Más de 100 redes publicitarias pueden transferir datos globalmente

**Nuestro Enfoque**:
1. **Anuncios no personalizados** (por defecto): Datos mínimos compartidos, solo nivel de país
2. **Anuncios personalizados** (si consiente):
   - Google AdMob usa CCT con socios publicitarios
   - Muchas redes publicitarias están certificadas bajo DPF UE-EE. UU.
   - Algunas pueden depender de otras bases legales (por ej., decisiones de adecuación, tratamiento local)

**Su Control**:
- Deshabilite los anuncios personalizados en Configuración de Privacidad para minimizar transferencias internacionales
- Opte por no participar en todo el dispositivo (configuración de Seguimiento de iOS, Configuración de Anuncios de Android)

**Transparencia**: No podemos garantizar que todas las más de 100 redes publicitarias cumplan perfectamente con el RGPD. Elegimos socios de buena reputación y dependemos del proceso de verificación de Google.

---

### 9.4 Transferencias de Datos a Rumanía (Nuestra Ubicación)

**Ubicación del Desarrollador**: Bloom Byte SRL tiene sede en Rumanía (estado miembro de la UE)

**Transferencias a Rumanía**:
- ❌ **Sin transferencias directas**: No tenemos nuestros propios servidores; todos los datos son procesados por Google
- ✅ **Dentro de la UE**: Rumanía está en la UE, por lo que las transferencias UE → Rumanía no requieren salvaguardas adicionales
- ❌ **No accedemos a datos de usuario sin procesar**: Análisis/informes de fallos vistos mediante paneles de Google (los datos permanecen en servidores de Google)

**Excepción**: Si nos envía un correo electrónico (contact@bloombyte.dev), su correo electrónico se procesa en Rumanía. Esta es una transferencia directa que usted inicia voluntariamente.

---

### 9.5 Acceso Gubernamental a Datos (Preocupaciones de Vigilancia)

**Preocupación**: Las leyes de vigilancia del gobierno de EE. UU. (FISA Sección 702, Orden Ejecutiva 12333) pueden permitir el acceso a datos almacenados en EE. UU.

**Nuestra Posición**:
- **Recopilación limitada de datos**: Minimizamos los datos que salen de su dispositivo
- **Compromisos de Google**: Google impugna solicitudes gubernamentales excesivamente amplias y publica informes de transparencia
- **Anonimización**: La mayoría de los datos que recopilamos son pseudónimos (sin nombres, correos electrónicos)
- **Su control**: Deshabilite análisis/informes de fallos para mantener los datos locales

**Lo Que Hacemos Si Recibimos una Solicitud Legal**:
1. Revisar validez legal
2. Impugnar solicitudes excesivamente amplias o ilegales
3. Notificar a usuarios afectados (si la ley lo permite)
4. Divulgar solo datos mínimos necesarios

**Informe de Transparencia**: Google publica solicitudes de datos gubernamentales: [Informe de Transparencia de Google](https://transparencyreport.google.com/?hl=es)

---

### 9.6 Sus Derechos con Respecto a Transferencias Internacionales

**Si está en la UE/EEE/Reino Unido**:
- ✅ **Oponerse a transferencias**: Envíe un correo electrónico a contact@bloombyte.dev con asunto "Oposición a Transferencia Internacional RGPD"
- ✅ **Solicitar tratamiento local**: No podemos cambiar la infraestructura de Google, pero deshabilitaremos la recopilación de datos para usted
- ✅ **Presentar una queja**: Contacte a su autoridad nacional de protección de datos (consulte la Sección 7.2)

**Si no podemos proporcionar salvaguardas adecuadas**, dejaremos de tratar sus datos (y podrá usar la aplicación sin conexión con todos los consentimientos deshabilitados).

---

### 9.7 Cambios Futuros en Ubicaciones de Datos

**Si cambiamos de proveedores de servicios** o ubicaciones de datos:
- Actualizaremos esta Política de Privacidad (consulte la Sección 10)
- Garantizaremos que los nuevos proveedores tengan salvaguardas adecuadas (CCT, decisiones de adecuación, DPF)
- Notificaremos a los usuarios si el cambio afecta materialmente los derechos de privacidad

**Compromiso actual**: Firestore permanecerá en la UE (Bélgica) para almacenamiento de retroalimentación.

---

## 10. Cambios en Esta Política

Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en nuestras prácticas, requisitos legales o funciones de la aplicación.

### 10.1 Cómo le Notificamos Cambios

**Cambios Materiales** (por ej., nueva recopilación de datos, propósitos cambiados, nuevos terceros):
- Actualizar fecha "Última Actualización" en la parte superior de esta política
- Mostrar una **notificación dentro de la aplicación** en el siguiente inicio de la aplicación (diálogo de alerta)
- Requerir **re-consentimiento** para cambios en el tratamiento basado en consentimiento (análisis, informes de fallos, anuncios personalizados)

**Cambios No Materiales** (por ej., aclaraciones, errores tipográficos, formato, actualizaciones de información de contacto):
- Actualizar fecha "Última Actualización"
- No se requiere notificación dentro de la aplicación
- Cambios efectivos inmediatamente tras la publicación

**Dónde Encontrar la Última Versión**:
- Dentro de la aplicación: Configuración → Política de Privacidad (abre este documento)
- Sitio web: sudokan.bloombyte.dev/privacy/
- Listados de App Store: Enlace en la descripción de la aplicación

---

### 10.2 Sus Derechos Cuando Cambia la Política

**Si no está de acuerdo con los cambios**:
- ✅ **Retirar consentimiento**: Deshabilite análisis, informes de fallos, anuncios personalizados en Configuración de Privacidad
- ✅ **Dejar de usar la aplicación**: Desinstale Sudokan (todos los datos locales eliminados)
- ✅ **Solicitar eliminación de datos**: Envíe un correo electrónico a contact@bloombyte.dev para eliminar datos almacenados en la nube

**Si requerimos re-consentimiento**:
- Verá un diálogo de consentimiento en el siguiente inicio de la aplicación
- Puede aceptar o rechazar cada consentimiento por separado
- Rechazar no impide el uso de la aplicación (puede jugar con todos los consentimientos desactivados)

---

### 10.3 Historial de Versiones

**Versión Actual**: 9 de noviembre de 2025

**Actualizaciones Principales**:
- **9 de noviembre de 2025**: Política de Privacidad inicial creada para el lanzamiento de la aplicación v1.0.0

**Las actualizaciones futuras** se listarán aquí con descripciones breves.

---

### 10.4 Frecuencia de Revisión

Revisamos esta Política de Privacidad:
- **Anualmente** (como mínimo)
- **Antes de actualizaciones importantes de la aplicación** (nuevas funciones que afecten la privacidad)
- **Cuando cambian las leyes** (nuevas regulaciones de privacidad)
- **Tras retroalimentación del usuario** (si la política no es clara o es inexacta)

**Fecha de Última Revisión**: 9 de noviembre de 2025

---

## 11. Contáctenos

Estamos comprometidos con la transparencia y responder a sus preguntas de privacidad.

### 11.1 Consultas de Privacidad

**Para preguntas, solicitudes o quejas relacionadas con la privacidad**:

**Correo Electrónico**: contact@bloombyte.dev  
**Sugerencias de Línea de Asunto**:
- "Pregunta de Privacidad: [Su Tema]"
- "Solicitud de Datos RGPD" / "Solicitud de Datos CCPA" / "Solicitud de Datos LGPD"
- "Solicitud de Eliminación de Datos"
- "Queja de Privacidad"

**Tiempo de Respuesta**: En **30 días** (puede extenderse a 60 días para solicitudes complejas con aviso)

**Qué Incluir**:
- Modelo de su dispositivo (por ej., "iPhone 14", "Samsung Galaxy S23")
- Su país/región
- Fechas aproximadas de uso de la aplicación (nos ayuda a localizar sus datos)
- Detalles específicos de la pregunta o solicitud

---

### 11.2 Información del Desarrollador

**Nombre de la Empresa**: Bloom Byte SRL  
**Dirección Registrada**: Bucarest, Rumanía  
**Sitio Web**: bloombyte.dev  
**Correo Electrónico**: contact@bloombyte.dev

**Presencia en la App Store**:
- **Apple App Store**: Busque "Sudokan" o desarrollador "Bloom Byte SRL"
- **Google Play Store**: Busque "Sudokan" o desarrollador "Bloom Byte SRL"

---

### 11.3 Delegado de Protección de Datos (DPO)

**Requisito del RGPD**: Las empresas que procesan datos personales de la UE a gran escala deben designar un DPO.

**Estado de Sudokan**: ❌ **No requerido**
- Somos un desarrollador pequeño (no una autoridad pública)
- El tratamiento no es a gran escala (recopilación de datos mínima)
- Sin tratamiento de datos sensibles

**Sin embargo**: Tratamos las consultas de privacidad con seriedad de nivel DPO. Todas las solicitudes de privacidad van directamente al desarrollador/fundador.

---

### 11.4 Representante en la UE (RGPD Artículo 27)

**Requisito del RGPD**: Las empresas fuera de la UE que procesan datos de la UE deben designar un representante en la UE.

**Estado de Sudokan**: ✅ **No requerido** - Bloom Byte SRL tiene sede en Rumanía (estado miembro de la UE)

**Si es residente de la UE**, puede contactarnos directamente en contact@bloombyte.dev (ya estamos en la UE).

---

### 11.5 Autoridades Supervisoras (Agencias de Protección de Datos)

Si no está satisfecho con nuestra respuesta, puede presentar una queja ante una autoridad de protección de datos:

#### Unión Europea (RGPD)
**Autoridad supervisora de su país**:
- [Lista de Autoridades de Protección de Datos de la UE](https://edpb.europa.eu/about-edpb/about-edpb/members_es)

**Autoridad del Desarrollador (Rumanía)**:
- **Nombre**: Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
- **Sitio Web**: [dataprotection.ro](https://www.dataprotection.ro/)
- **Dirección**: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, Rumanía

#### Estados Unidos (CCPA/CPRA)
**Fiscal General de California**:
- **Sitio Web**: [oag.ca.gov/privacy](https://oag.ca.gov/privacy)
- **Formulario de Queja**: [Derechos de Privacidad de California](https://oag.ca.gov/contact/consumer-complaint-against-business-or-company)

#### Brasil (LGPD)
**Autoridade Nacional de Proteção de Dados (ANPD)**:
- **Sitio Web**: [gov.br/anpd](https://www.gov.br/anpd/pt-br)

#### Otros Países
Busque "[Su País] autoridad de protección de datos" o "regulador de privacidad" para encontrar su autoridad local.

---

### 11.6 Reporte de Vulnerabilidades de Seguridad

**Si descubre un problema de seguridad**:
- **Correo Electrónico**: contact@bloombyte.dev
- **Asunto**: "Vulnerabilidad de Seguridad en Sudokan"
- **Incluya**: Descripción, pasos para reproducir, impacto potencial

**Responderemos en 7 días** y trabajaremos para corregir el problema rápidamente.

**Divulgación Responsable**: Por favor no divulgue públicamente vulnerabilidades antes de que las corrijamos. Apreciamos a los investigadores de seguridad y lo acreditaremos (con permiso).

---

## 12. Información Específica por Región

Esta sección proporciona detalles adicionales para usuarios en regiones específicas.

### 12.1 Unión Europea (UE) / Espacio Económico Europeo (EEE)

**Ley Aplicable**: Reglamento General de Protección de Datos (RGPD)

**Puntos Clave para Residentes de la UE**:
- ✅ **Base legal**: Consentimiento (análisis, informes de fallos, anuncios personalizados) + Intereses legítimos (funciones centrales de la aplicación)
- ✅ **Minimización de datos**: Recopilamos solo datos necesarios
- ✅ **Derecho a retirar consentimiento**: En cualquier momento en Configuración de Privacidad
- ✅ **Derecho de supresión**: Envíe un correo electrónico a contact@bloombyte.dev (respuesta en 30 días)
- ✅ **Derecho a presentar queja**: Contacte a su autoridad supervisora nacional
- ✅ **Transferencias internacionales**: Protegidas por CCT y Marco de Privacidad de Datos UE-EE. UU.
- ✅ **Sin toma de decisiones automatizada**: No tomamos decisiones legales/significativas sobre usted

**Almacenamiento de Firestore en la UE**: Los datos de retroalimentación almacenados en Bélgica (`europe-west1`) permanecen dentro de la UE.

**Resumen de Derechos del RGPD** (consulte la Sección 7.2 para detalles completos):
1. Derecho de acceso (Artículo 15)
2. Derecho de rectificación (Artículo 16)
3. Derecho de supresión (Artículo 17)
4. Derecho a restringir el tratamiento (Artículo 18)
5. Derecho a la portabilidad de datos (Artículo 20)
6. Derecho de oposición (Artículo 21)
7. Derecho a no ser objeto de toma de decisiones automatizada (Artículo 22)
8. Derecho a presentar una queja (Artículo 77)

**Autoridad Supervisora**: Contacte a la autoridad de protección de datos de su país o a la ANSPDCP de Rumanía (nuestra ubicación).

---

### 12.2 Reino Unido (RU)

**Ley Aplicable**: RGPD del Reino Unido + Ley de Protección de Datos 2018

**Puntos Clave para Residentes del Reino Unido**:
- ✅ **Mismos derechos que el RGPD de la UE** (el Reino Unido mantuvo el RGPD después del Brexit)
- ✅ **Decisión de adecuación**: La UE considera al Reino Unido adecuado, por lo que las transferencias UE-Reino Unido no están restringidas
- ✅ **Supervisión de la ICO**: La autoridad supervisora del Reino Unido es la Information Commissioner's Office

**Autoridad Supervisora**:
- **Nombre**: Information Commissioner's Office (ICO)
- **Sitio Web**: [ico.org.uk](https://ico.org.uk/)
- **Línea de Ayuda**: 0303 123 1113
- **Reportar una Preocupación**: [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/)

**Sus Derechos**: Idénticos al RGPD de la UE (consulte la Sección 7.2).

---

### 12.3 California, Estados Unidos (CCPA/CPRA)

**Ley Aplicable**: Ley de Privacidad del Consumidor de California (CCPA) + Ley de Derechos de Privacidad de California (CPRA)

**Puntos Clave para Residentes de California**:
- ✅ **Derecho a saber**: Solicitar divulgación de datos recopilados (consulte la Sección 7.3)
- ✅ **Derecho a eliminar**: Solicitar eliminación (respuesta en 45 días)
- ✅ **Derecho a optar por no participar**: No ocurre "venta", pero puede deshabilitar anuncios personalizados
- ✅ **Derecho a corregir**: Solicitar corrección de datos inexactos
- ✅ **Derecho a no discriminación**: Usar derechos no afecta el acceso a la aplicación
- ❌ **Sin recopilación de datos sensibles**: No recopilamos datos sensibles definidos por CCPA

**"Venta" de Información Personal**:
- ❌ **NO vendemos datos** en el sentido tradicional (sin intercambio financiero con corredores de datos)
- ⚠️ **Los anuncios personalizados pueden calificar como "compartición"** bajo la definición amplia de CCPA
- ✅ **Su control**: Deshabilite "Anuncios Personalizados" en Configuración de Privacidad → detiene la compartición del ID de Publicidad

**No Vender ni Compartir Mi Información Personal**:
- La ley de California requiere un enlace "No Vender" si ocurre venta/compartición
- Proporcionamos control equivalente mediante Configuración de Privacidad → interruptor "Anuncios Personalizados"
- Opción de no participar en todo el dispositivo: configuración de Seguimiento de iOS, Configuración de Anuncios de Android

**Resumen de Derechos de CCPA** (consulte la Sección 7.3 para detalles completos):
1. Derecho a Saber (§ 1798.100)
2. Derecho a Eliminar (§ 1798.105)
3. Derecho a Optar por No Participar en la Venta (§ 1798.120) - N/A (no vendemos)
4. Derecho a Optar por No Participar en la Compartición para Publicidad Conductual entre Contextos (CPRA § 1798.135)
5. Derecho a Corregir Información Inexacta (CPRA § 1798.106)
6. Derecho a Limitar el Uso de Información Personal Sensible (CPRA § 1798.121) - N/A (no recopilamos)
7. Derecho a No Discriminación (§ 1798.125)

**Agente Autorizado**: Puede designar un agente autorizado para presentar solicitudes en su nombre. El agente debe proporcionar prueba de autorización.

**Contacto para Solicitudes de CCPA**: contact@bloombyte.dev (asunto: "Solicitud de Datos CCPA")

---

### 12.4 Brasil (LGPD)

**Ley Aplicable**: Lei Geral de Proteção de Dados (LGPD)

**Puntos Clave para Residentes Brasileños**:
- ✅ **Similar al RGPD**: LGPD se modela en el RGPD con derechos similares
- ✅ **Derecho de acceso**: Solicite sus datos (respuesta en 15 días)
- ✅ **Derecho de corrección**: Corregir datos inexactos
- ✅ **Derecho de eliminación**: Solicitar supresión
- ✅ **Derecho de portabilidad**: Recibir datos en formato portátil
- ✅ **Derecho a retirar consentimiento**: En cualquier momento en Configuración de Privacidad

**Base Legal** (LGPD Artículo 7):
- **Consentimiento**: Análisis, informes de fallos, anuncios personalizados
- **Intereses legítimos**: Funciones centrales de la aplicación, anuncios no personalizados

**Responsable del Tratamiento**: Bloom Byte SRL (contact@bloombyte.dev)

**Autoridad Supervisora**:
- **Nombre**: Autoridade Nacional de Proteção de Dados (ANPD)
- **Sitio Web**: [gov.br/anpd](https://www.gov.br/anpd/pt-br)

**Contacto para Solicitudes de LGPD**: contact@bloombyte.dev (asunto: "Solicitud de Datos LGPD")

**Tiempo de Respuesta**: En **15 días** (puede extenderse a 30 días para solicitudes complejas)

---

### 12.5 Otras Regiones

#### Canadá (PIPEDA)
**Ley**: Personal Information Protection and Electronic Documents Act  
**Derechos**: Acceso, corrección, retiro de consentimiento  
**Contacto**: contact@bloombyte.dev (asunto: "Solicitud de Datos PIPEDA")

#### Australia (Privacy Act)
**Ley**: Privacy Act 1988 + Australian Privacy Principles (APPs)  
**Derechos**: Acceso, corrección, queja ante OAIC  
**Contacto**: contact@bloombyte.dev (asunto: "Solicitud de Privacy Act")

#### Japón (APPI)
**Ley**: Act on the Protection of Personal Information  
**Derechos**: Divulgación, corrección, suspensión de uso  
**Autoridad Supervisora**: Personal Information Protection Commission (PPC)  
**Contacto**: contact@bloombyte.dev (asunto: "Solicitud de Datos APPI")

#### Corea del Sur (PIPA)
**Ley**: Personal Information Protection Act  
**Derechos**: Acceso, corrección, eliminación, suspensión  
**Autoridad Supervisora**: Personal Information Protection Commission (PIPC)  
**Contacto**: contact@bloombyte.dev (asunto: "Solicitud de Datos PIPA")

#### India (DPDPA)
**Ley**: Digital Personal Data Protection Act 2023 (cuando se aplique)  
**Derechos**: Similar al RGPD (acceso, corrección, supresión)  
**Contacto**: contact@bloombyte.dev (asunto: "Solicitud de Datos DPDPA")

**Política General**: Si su país tiene leyes de protección de datos no listadas aquí, honraremos derechos equivalentes. Contáctenos en contact@bloombyte.dev con el nombre de la ley de su país.

---

## 13. Información Adicional

### 13.1 Ley "Shine the Light" de California (Código Civil § 1798.83)

**Ley**: Requiere divulgación de información personal compartida con terceros para marketing directo.

**Estado de Sudokan**: ❌ **No aplicable**
- NO compartimos información personal con terceros para sus propósitos de marketing directo
- Las redes publicitarias pueden mostrar anuncios, pero no compartimos información de contacto (no la recopilamos)

**Si esto cambia**: Actualizaremos esta política y proporcionaremos mecanismos de exclusión.

---

### 13.2 Derechos de Privacidad de Nevada (SB 220)

**Ley**: Los residentes de Nevada pueden optar por no participar en la "venta" de información cubierta.

**Estado de Sudokan**: ❌ **NO vendemos información personal** (sin intercambio financiero)

**Su Control**: Deshabilite los anuncios personalizados en Configuración de Privacidad si le preocupa la compartición de datos con redes publicitarias.

---

### 13.3 Señales de No Rastrear (DNT)

**Qué son**: Los navegadores web pueden enviar señales "No Rastrear" a los sitios web.

**Estado de Sudokan**: ❌ **No aplicable** - somos una aplicación móvil, no un sitio web

**Control Equivalente**: Configuración de Privacidad → Deshabilite "Anuncios Personalizados" (detiene el seguimiento entre aplicaciones)

---

### 13.4 Enlaces de Terceros

**Enlaces dentro de la aplicación** (por ej., a políticas de privacidad de Google, listados de app stores):
- ❌ **No están bajo nuestro control**: Los sitios de terceros tienen sus propias políticas de privacidad
- ✅ **No somos responsables**: Del contenido o prácticas de sitios vinculados
- ⚠️ **Revise sus políticas**: Antes de proporcionar información personal

**Enlaces en esta Política de Privacidad**:
- Política de Privacidad de Google Firebase
- Política de Privacidad de Google AdMob
- Autoridades de Protección de Datos de la UE
- Informe de Transparencia de Google
- (Todos proporcionados para su conveniencia)

---

### 13.5 Accesibilidad

**Estamos comprometidos a hacer esta Política de Privacidad accesible**:
- ✅ Lenguaje sencillo (evitando jerga legal donde sea posible)
- ✅ Encabezados claros y tabla de contenidos
- ✅ Ejemplos y explicaciones
- ✅ Disponible dentro de la aplicación y en línea (bloombyte.dev/privacy)

**Si necesita esta política en un formato alternativo** (por ej., letra grande, audio), envíe un correo electrónico a contact@bloombyte.dev.

---

### 13.6 Idioma y Traducciones

**Idioma Original**: Inglés (esta versión es autoritativa)

**Traducciones**: Podemos proporcionar traducciones en el futuro para:
- Rumano (ro) - Idioma nativo del desarrollador
- Otros idiomas según la base de usuarios (es, pt-BR, de, fr, ja, ko, etc.)

**En caso de conflicto**: La versión en inglés prevalece para interpretación legal.

---

## 14. Definiciones (Glosario)

Para ayudarle a comprender esta política, aquí están las definiciones de términos clave:

**Datos Personales / Información Personal**: Información que le identifica o puede usarse para identificarle (por ej., identificadores del dispositivo, dirección IP). Bajo las leyes de privacidad, esto incluye datos pseudónimos.

**Tratamiento**: Cualquier operación sobre datos personales (recopilación, almacenamiento, uso, compartición, eliminación).

**Responsable del Tratamiento**: La entidad que decide por qué y cómo se procesan los datos personales. **Sudokan (Bloom Byte SRL) es el responsable del tratamiento**.

**Encargado del Tratamiento**: Una entidad que procesa datos en nombre del responsable. **Google LLC es nuestro encargado del tratamiento**.

**Consentimiento**: Su acuerdo libremente dado, específico, informado e inequívoco al tratamiento de datos.

**Intereses Legítimos**: Una base legal para el tratamiento cuando es necesario para los intereses del responsable, equilibrado con sus derechos.

**Pseudonimización**: Procesar datos para que no puedan identificarle sin información adicional (por ej., reemplazar nombres con IDs aleatorios).

**Anonimización**: Eliminar irreversiblemente todos los identificadores para que los datos nunca puedan identificarle (ya no son datos personales).

**Cláusulas Contractuales Tipo (CCT)**: Términos de contrato aprobados por la UE que protegen datos transferidos fuera de la UE.

**Decisión de Adecuación**: Determinación de la Comisión de la UE de que un país proporciona protección de datos adecuada.

**Autoridad Supervisora**: Agencia gubernamental que hace cumplir las leyes de protección de datos (por ej., ICO en Reino Unido, ANSPDCP en Rumanía).

**Interesado**: Usted, el individuo cuyos datos están siendo procesados.

**Tercero**: Una entidad diferente a usted y nosotros (por ej., Google, redes publicitarias).

**ID de Publicidad**: Un identificador específico del dispositivo para publicidad (IDFA en iOS, AAID en Android). Puede ser restablecido por los usuarios.

**Seguimiento Entre Aplicaciones**: Rastrear su actividad en múltiples aplicaciones para construir un perfil.

**RGPD**: Reglamento General de Protección de Datos (ley de la UE).

**CCPA/CPRA**: California Consumer Privacy Act / California Privacy Rights Act (ley de California).

**COPPA**: Children's Online Privacy Protection Act (ley de EE. UU. para niños menores de 13 años).

**LGPD**: Lei Geral de Proteção de Dados (ley de protección de datos de Brasil).

---

## 15. Reconocimientos

Esta Política de Privacidad fue redactada con cuidado para cumplir con:
- RGPD (UE)
- CCPA/CPRA (California)
- COPPA (privacidad infantil de EE. UU.)
- LGPD (Brasil)
- Otras leyes internacionales de privacidad

**Recursos consultados**:
- [Texto Completo del RGPD](https://gdpr-info.eu/)
- [Texto Completo de CCPA/CPRA](https://oag.ca.gov/privacy/ccpa)
- [Guía de Cumplimiento de COPPA](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)
- [Políticas de Privacidad de Google](https://policies.google.com/?hl=es)
- [Orientación de Privacidad de la ICO](https://ico.org.uk/)

**Revisión Legal**: Esta política fue creada por el desarrollador. Recomendamos a los usuarios revisarla cuidadosamente. Si tiene inquietudes legales, consulte a un abogado de privacidad en su jurisdicción.

---

## 16. Fecha de Entrada en Vigor y Aceptación

**Fecha de Entrada en Vigor**: 9 de noviembre de 2025

**Al usar Sudokan después de esta fecha**, usted reconoce que ha leído, comprendido y acepta esta Política de Privacidad.

**Si no está de acuerdo**:
- Deshabilite toda recopilación de datos en Configuración de Privacidad
- O desinstale la aplicación

**Su uso continuado** de la aplicación después de actualizaciones de la política constituye aceptación de la política revisada.

---

## Resumen

Gracias por leer la Política de Privacidad de Sudokan. Aquí hay un resumen rápido:

### Lo Que Recopilamos
- **Datos locales** (estado del juego, configuración) - permanece en su dispositivo
- **Análisis** (opcional) - datos de uso para mejorar la aplicación
- **Informes de fallos** (opcional) - datos técnicos para corregir errores
- **Datos de anuncios** - mínimos (no personalizados) o extensos (personalizados, si consiente)
- **Retroalimentación** (opcional) - cuando envía retroalimentación voluntariamente

### Lo Que NO Recopilamos
- ❌ Su nombre, correo electrónico, número de teléfono
- ❌ Ubicación precisa
- ❌ Fotos, contactos u otros archivos personales
- ❌ Datos financieros o de salud

### Su Control
- ✅ **Configuración de Privacidad**: Habilite/deshabilite análisis, informes de fallos, anuncios personalizados
- ✅ **Borrar datos**: Elimine el historial del juego en cualquier momento
- ✅ **Sus derechos**: Acceda, elimine, corrija, porte sus datos
- ✅ **Contáctenos**: contact@bloombyte.dev para cualquier pregunta de privacidad

### Nuestro Compromiso
- 🔒 Recopilación mínima de datos (privacidad por diseño)
- 🔒 Transparencia sobre cada punto de datos
- 🔒 Basado en consentimiento (usted controla qué sale de su dispositivo)
- 🔒 Almacenamiento seguro (cifrado, HTTPS)
- 🔒 Eliminación automática (60-90 días para la mayoría de los datos)
- 🔒 Cumplimiento de RGPD, CCPA, COPPA, LGPD

**¿Preguntas?** Envíe un correo electrónico a contact@bloombyte.dev - respondemos en 30 días.

**¡Disfrute jugando Sudokan!** 🎉

---

**FIN DE LA POLÍTICA DE PRIVACIDAD**

---

**Información del Documento**:
- **Versión**: 1.0
- **Última Actualización**: 9 de noviembre de 2025
- **Fecha de Entrada en Vigor**: 9 de noviembre de 2025
- **Desarrollador**: Bloom Byte SRL
- **Contacto**: contact@bloombyte.dev
- **Sitio Web**: bloombyte.dev
- **Aplicación**: Sudokan (iOS y Android)
