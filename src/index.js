import "normalize.css";
import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
import convert from "cyrillic-to-latin";

import "./chpp-lang";
import { execute, transform } from "./engine";
import { singletonCode } from "./examples/singleton";

const $ = document.querySelector.bind(document);
let $code = $(".js-code");
let $execute = $(".js-execute");
let $debug = $(".js-debug");
let $debugOverlay = $(".js-debug-overlay");
let $output = $(".js-output");

let editor = monaco.editor.create($code, {
  value: singletonCode,
  language: "chpp",

  roundedSelection: false,
  scrollBeyondLastLine: false,
  readOnly: false,
  minimap: {
    enabled: false,
  },
  theme: "chpp-theme",
  fontSize: 20,
});

$execute.addEventListener("click", () => {
  const code = editor.getValue();
  console.log({ code });

  const jsCode = transform(code);
  console.log({ jsCode });
  $debugOverlay.innerText = convert(jsCode);

  const output = execute(jsCode);

  console.log({ output });

  $output.innerText = output;
});

$debug.addEventListener("click", () => {
  $debugOverlay.classList.toggle("show");
});
