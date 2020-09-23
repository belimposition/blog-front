import css from 'styled-jsx/css';

const commonFontStyles = css`
  font-style: normal;
  font-display: optional;
`;

const fonts = css`
  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Super-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Super-Cy-Web.woff2') format('woff2');
    font-weight: 900;
    ${commonFontStyles}
  }

  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Black-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Black-Cy-Web.woff2') format('woff2');
    font-weight: 800;
    ${commonFontStyles}
  }
  
  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Bold-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Bold-Cy-Web.woff2') format('woff2');
    font-weight: 700;
    ${commonFontStyles}
  }
  
  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Semibold-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Semibold-Cy-Web.woff2') format('woff2');
    font-weight: 600;
    ${commonFontStyles}
  }

  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Medium-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Medium-Cy-Web.woff2') format('woff2');
    font-weight: 500;
    ${commonFontStyles}
  }
  
  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Regular-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Regular-Cy-Web.woff2') format('woff2');
    font-weight: 400;
    ${commonFontStyles}
  }
  
   @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Light-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Light-Cy-Web.woff2') format('woff2');
    font-weight: 300;
    ${commonFontStyles}
  }
  
  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Extralight-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Extralight-Cy-Web.woff2') format('woff2');
    font-weight: 200;
    ${commonFontStyles}
  }  
  
  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Thin-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Thin-Cy-Web.woff2') format('woff2');
    font-weight: 100;
    ${commonFontStyles}
  }  


  @font-face{
    font-family: 'GraphikCompact';
    src: url('/static/fonts/GraphikCompact-Thin-Cy-Web.woff') format('woff'),
         url('/static/fonts/GraphikCompact-Thin-Cy-Web.woff2') format('woff2');
    font-weight: 100;
    ${commonFontStyles}
  }

  @font-face{
    font-family: 'GraphikLC';
    src: url('/static/fonts/GraphikLC-Regular-Web.woff') format('woff'),
         url('/static/fonts/GraphikLC-Regular-Web.woff2') format('woff2'),
         url('/static/fonts/GraphikLC-Regular-Web.eot') format('eot'),
         url('/static/fonts/GraphikLC-Regular-TrueType.ttf') format('ttf');
    font-weight: normal;
    ${commonFontStyles}
  }
  
  @font-face{
    font-family: 'GraphikLC';
    src: url('/static/fonts/GraphikLC-Bold-Web.woff') format('woff'),
         url('/static/fonts/GraphikLC-Bold-Web.woff2') format('woff2'),
         url('/static/fonts/GraphikLC-Bold-Web.eot') format('eot'),
         url('/static/fonts/GraphikLC-Bold-TrueType.ttf') format('ttf');
    font-weight: bold;
    ${commonFontStyles}
  }

`;

export default fonts;
