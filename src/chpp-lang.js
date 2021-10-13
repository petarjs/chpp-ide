import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
import { keywords } from "./engine";

// Register a new language
monaco.languages.register({ id: "chpp" });

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider("chpp", {
  tokenizer: {
    root: [
      ...keywords.map((keyword) => [new RegExp(` ${keyword} `), "keyword"]),
      [/\класа/, "type.identifier"],
      // [/\дај да/, "keyword"],
    ],
  },
});

// Define a new theme that contains only rules that match this language
monaco.editor.defineTheme("chpp-theme", {
  base: "vs-dark",
  inherit: true,
  rules: [{ token: "variable", foreground: "FFA500" }],
});
