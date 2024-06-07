import {getCssText} from '../../stitches.config'
import { globalStyles } from './global/styles/style'
import '../app/global/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Danfo&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          ></style>
        </head>
        <body>{children}</body>
      </html>
    )
}
