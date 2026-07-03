import {
  siCplusplus,
  siPython,
  siOpenjdk,
  siJavascript,
  siMysql,
  siPytorch,
  siTensorflow,
  siScikitlearn,
  siReact,
  siNodedotjs,
  siGit,
  siGithub,
  siNumpy,
  siHuggingface,
  siStreamlit,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [siCplusplus, siPython, siOpenjdk, siJavascript, siMysql],
  [siPytorch, siTensorflow, siScikitlearn, siReact, siNodedotjs],
  [siGit, siGithub, siNumpy, siHuggingface, siStreamlit],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
