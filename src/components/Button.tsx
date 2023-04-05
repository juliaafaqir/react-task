import { ReactElement } from 'react';
import Alert from './Alert'

interface ButtonProps {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'dark';
    onClick: () => void;
}

const Button = ({children, onClick, color='primary'}:ButtonProps) => {
  return (
    <div>
      <button className={'btn btn-'+ color} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
