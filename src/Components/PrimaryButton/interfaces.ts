export interface IPrimaryButtonProps {
  text: string,
  type: 'button' | 'submit',
  onClick: () => void
  className?: string
}