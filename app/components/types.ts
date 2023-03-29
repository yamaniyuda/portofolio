export type TextVariant = "sigle" | "combine"

export interface TextProps {
  className: string | null,
  variant: TextVariant
  children: string
}

export interface NavbarProps {
  className: string | null,
  children: any
}