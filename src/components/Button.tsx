interface ButtonProps {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'dark';
    onClick: () => void;
    

}

const Button = ({children, onClick, color='primary'}:ButtonProps) => {
  return (
    <div>
      <button type="button" className={'btn btn-'+ color} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
