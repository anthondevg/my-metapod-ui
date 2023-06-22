import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractCritical } from "@emotion/server";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <>
        {initialProps.styles}
        <style data-emotion-css={critical.ids.join(" ")} />
      </>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <style data-emotion-css={this.props.ids?.join(" ")} />
          <title>metapod ui</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
