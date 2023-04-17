import { IPrimaryButtonProps } from './interfaces';

export default function PrimaryButton({
  onClick,
  text,
  type,
  className,
}: IPrimaryButtonProps) {
  return (
    <button type={type} className={`btn btn-primary ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}