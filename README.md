# portfolio

Personal site of **Vishwanathan Tamizharasan** — B.Tech CSE student at VIT Vellore.
A zero-dependency static site (plain HTML, CSS, JS): floating glass nav, a smooth
trailing custom cursor, and a drifting aurora background.

## Develop

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Hosted on [Vercel](https://vercel.com). Every push to `main` triggers a deployment.

## Structure

| File         | Purpose                                   |
| ------------ | ----------------------------------------- |
| `index.html` | Page markup and content                   |
| `style.css`  | Styles, aurora, cursor, layout            |
| `script.js`  | Custom cursor + scroll-reveal             |

## Tweaks

- Cursor trail speed: `ease` in `script.js` (lower = slower/dreamier).
- Colours: the `--violet` / `--cyan` / `--pink` vars at the top of `style.css`.
