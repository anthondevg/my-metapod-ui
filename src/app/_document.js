import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractCritical } from "@emotion/server";
import tw from "twin.macro";

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
        <body tw="bg-gradient-to-b from-[#222222] to-[#000000]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
