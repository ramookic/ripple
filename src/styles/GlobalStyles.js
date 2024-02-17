import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Brand */
  --color-brand-50: #f5f3ff;
  --color-brand-100: #ede9fe;
  --color-brand-200: #ddd6fe;
  --color-brand-300: #c4b5fd;
  --color-brand-500: #7c3aed;
  --color-brand-600: #6d28d9;
  --color-brand-700: #5b21b6;
  --color-brand-800: #4c1d95;

  /* Grey */
  --color-grey-0: #ffffff;
  --color-grey-50: #fafafa;
  --color-grey-100: #f5f5f5;
  --color-grey-200: #e5e5e5;
  --color-grey-300: #d4d4d4;
  --color-grey-400: #a3a3a3;
  --color-grey-500: #737373;
  --color-grey-600: #525252;
  --color-grey-700: #262626;
  --color-grey-800: #171717;
  --color-grey-900: #0a0a0a;

  /* Red */
  --color-red-100: #fee2e2;
  --color-red-500: #ef4444;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  /* Yellow */
  --color-yellow-100:#fef9c3;
  --color-yellow-500: #eab308;
  --color-yellow-700: #a16207;
  --color-yellow-800: #854d0e;

  /* Green */
  --color-green-100: #f0fdf4;
  --color-green-500: #22c55e;
  --color-green-700: #15803d;
  --color-green-800: #166534;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

html{
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  font-family: 'Plus Jakarta Sans', sans-serif;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  background: none;
  cursor: pointer;
  outline: none;
  border: none;
}

a {
  color: inherit;
  text-decoration: none;
  font-size: 16px;
}

p {
  font-size: 16px;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  color: var(--color-grey-800);
}

input{
  padding: 24px 20px 10px 20px;
}

textarea{
  padding: 14px 20px;
}

input, textarea {
  background: var(--color-grey-100);
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  resize: none;

  &:hover {
    outline: 2px solid var(--color-grey-200);
  }

  &:focus {
    outline: 2px solid var(--color-grey-700);
    outline-offset: 2px;
  }
}
`;

export default GlobalStyles;
