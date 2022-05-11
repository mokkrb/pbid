export const minifyUrl = (): string =>
  `https://pbid.io/${Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 8)}`;
