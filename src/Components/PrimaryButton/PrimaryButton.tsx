import { IPrimaryButtonProps } from './interfaces';

export default function PrimaryButton({
  onClick,
  text,
  type,
}: IPrimaryButtonProps) {
  return (
    <button type={type} className='primary_button' onClick={onClick}>
      {text}
    </button>
  );
}