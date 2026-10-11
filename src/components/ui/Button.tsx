import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type CommonProps = {
  children: ReactNode
  variant?: 'primary' | 'outline'
}

type LinkProps = CommonProps & {
  href: string
}

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonProps = LinkProps | NativeButtonProps

function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const className = `button button--${variant}`

  if ('href' in props && props.href) {
    return (
      <a className={className} href={props.href}>
        <span>{children}</span>
        <span aria-hidden="true">↗</span>
      </a>
    )
  }

  return (
    <button className={className} {...props}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </button>
  )
}

export default Button