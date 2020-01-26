import { Helmet } from 'react-helmet'
import bg from './src/images/bg.svg'

export const onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes }
) => {
  const helmet = Helmet.renderStatic()
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  setHtmlAttributes(htmlAttrs)

  setBodyAttributes({
    ...bodyAttrs,
    style: { backgroundImage: `url(${bg})` },
  })

  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}
