export default {
  async fetch() {
    return new Response(
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Georgia, "Times New Roman", serif;
        background: linear-gradient(135deg, #f7f1e8 0%, #d7e7f3 100%);
        color: #1c2a39;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background:
          radial-gradient(circle at top, rgba(255, 255, 255, 0.85), transparent 45%),
          linear-gradient(135deg, #f7f1e8 0%, #d7e7f3 100%);
      }

      main {
        padding: 3rem;
        border: 1px solid rgba(28, 42, 57, 0.12);
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.72);
        box-shadow: 0 24px 60px rgba(28, 42, 57, 0.12);
        text-align: center;
      }

      h1 {
        margin: 0;
        font-size: clamp(3rem, 9vw, 6rem);
        letter-spacing: -0.06em;
      }

      p {
        margin: 1rem 0 0;
        font-size: 1.1rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello, world.</h1>
      <p>Served by Cloudflare Workers.</p>
    </main>
  </body>
</html>`,
      {
        headers: {
          "content-type": "text/html; charset=UTF-8"
        }
      }
    );
  }
};
