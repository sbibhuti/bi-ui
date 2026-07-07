import {
  BitBucketIcon,
  BootstrapIcon,
  CSSIcon,
  DockerIcon,
  ESLintIcon,
  FastApiIcon,
  FigmaIcon,
  FirebaseIcon,
  GithubIcon,
  GitIcon,
  GraphqlIcon,
  HTMLIcon,
  JestIcon,
  JSIcon,
  KubernetesIcon,
  MaterialIcon,
  MoongoDBIcon,
  NodeJSIcon,
  NPMIcon,
  OAuthIcon,
  PostgreSqlIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  StorybookIcon,
  SvelteIcon,
  TailwindIcon,
  TSIcon,
  VSCodeIcon,
  VueJSIcon,
  ZustandIcon,
} from "../icons";

/* -------------------------------------------------------------------------- */
/*                                   Labels                                   */
/* -------------------------------------------------------------------------- */
export const LABELS = [
  "getElementById()",
  "querySelector()",
  "getElementsByClassName()",
  "querySelectorAll()",
  "getElementsByTagName()",
  "<html>",
  "<head>",
  "<body>",
  "<section>",
  "<article>",
  "<button>",
  "<textarea>",
  "removeEventListener()",
  "setTimeout()",
  ":last-of-type",
  ":first-of-type",
  ":focus-visible",
  ":nth-child()",
  "::view-transition",
  "::before",
  "@font-face",
  "@keyframes",
  "@container",
  "# $ @ ? : ;",
  "`template`",
  "js ts jsx tsx",
  "Markdown",
  "Promise",
  "async",
  "await",
  "const",
  "let",
  "return",
  "interface",
  "<p>{props.children}</p>",
  "useState",
  "useEffect",
  "useMemo",
  "useCallback",
  "useRef",
  "useReducer",
  "Suspense",
  "<Component />",
  "<></>",
  "{} [] ()",
  "() => {}",
  "{...props}",
  "[state, setState]",
  "${var}",
  "map()",
  "filter()",
  "reduce()",
  "find()",
  "sort()",
  "=== !==",
  "&& || ??",
  "++ += -= --",
] as const;

/* -------------------------------------------------------------------------- */
/*                                    Icons                                   */
/* -------------------------------------------------------------------------- */
export const ICONS = [
  ReactIcon,
  JSIcon,
  TSIcon,
  BitBucketIcon,
  BootstrapIcon,
  CSSIcon,
  DockerIcon,
  ESLintIcon,
  FastApiIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  GraphqlIcon,
  HTMLIcon,
  JestIcon,
  KubernetesIcon,
  MaterialIcon,
  MoongoDBIcon,
  NodeJSIcon,
  NPMIcon,
  OAuthIcon,
  PostgreSqlIcon,
  PythonIcon,
  ReduxIcon,
  StorybookIcon,
  SvelteIcon,
  TailwindIcon,
  VSCodeIcon,
  VueJSIcon,
  ZustandIcon,
];

/* -------------------------------------------------------------------------- */
/*                              Code Snippets                                 */
/* -------------------------------------------------------------------------- */

export const CODE_SNIPPETS = [
  "const user = {}",
  "async () => {}",
  "return <App />",
  "export default",
  "import React",
  "useEffect(() => {})",
  "useState([])",
  "interface Props {}",
  "type User = {}",
  "fetch('/api')",
  "await axios.get()",
  "Promise.all()",
  "new Map()",
  "new Set()",
  "Array.map()",
  "Array.filter()",
  "Array.reduce()",
  "JSON.stringify()",
  "JSON.parse()",
  "console.log()",
  "npm install",
  "git commit",
  "git push",
  "const user = {}",
  "const data = await fetch()",
  "return <Component />",
  "useEffect(() => {})",
  "useMemo(() => value)",
  "Promise.all(tasks)",
  "interface User {}",
  "type Props = {}",
  "map(item => item.id)",
  "filter(Boolean)",
  "children.map(...)",
  "const theme = useTheme()",
  "await axios.get('/users')",
  "const query = useQuery()",
  "export default App",
] as const;

/* -------------------------------------------------------------------------- */
/*                              Code Snippets                                 */
/* -------------------------------------------------------------------------- */

export const SUBTITLES = [
  "Frontend",
  "Backend",
  "Framework",
  "Library",
  "Runtime",
  "Package",
  "Language",
  "Database",
  "API",
  "Component",
  "Hook",
];

/* -------------------------------------------------------------------------- */
/*                          Random Helper Functions                           */
/* -------------------------------------------------------------------------- */

export function randomItem<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function randomDirection(): 1 | -1 {
  return Math.random() > 0.5 ? 1 : -1;
}

export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
