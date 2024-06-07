import { styled, ComponentProps } from '@stitches/react'

export type ImageSizeOptions =
  | '20px'
  | '24px'
  | '32px'
  | '48px'
  | '25%'
  | '64px'
  | '96px'
  | '128px'
  | '256px'
  | '100%'
  | 'auto'
export type ImageSize = ImageSizeOptions
export const ImageContainer = styled('img', {
  width: '100%',
  height: '100%',
  borderRadius: '$sm',
  maxHeight: '128px',
  maxWidth: '256px',
  objectFit: 'contain',
  variants: {
    variant: {
      round: {
        borderRadius: '$full',
      },
    },
    align: {
      centralized: {
        margin: 'auto',
      },
    },
  },
})
export type ImageProps = ComponentProps<typeof ImageContainer> & {
  size?: ImageSize
  minSize?: ImageSize
  maxSize?: ImageSize
  format?: 'fill' | 'contain' | 'cover' | 'revert' | 'scale-down'
}
export function Image({
  size = 'auto',
  maxSize = '256px',
  format = 'cover',
  css,
  ...props
}: ImageProps) {
  return (
    <ImageContainer
      width={size}
      height={size}
      css={{
        maxWidth: maxSize,
        maxHeight: maxSize,
        width: props.width ?? size,
        height: props.height ?? size,
        objectFit: format,
        ...css,
      }}
      {...props}
    />
  )
}
