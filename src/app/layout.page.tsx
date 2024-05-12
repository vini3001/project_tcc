import {getCssText} from '../../stitches.config'
import { globalStyles } from './global/styles/style'
import '../app/global/styles/globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Document({
  children,
}: {
  children: React.ReactNode
}) {
  globalStyles()
    return (
      <html lang="pt-BR">
        <head>
        <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          ></style>
        </head>
        <body>{children}</body>
      </html>
    )
}
