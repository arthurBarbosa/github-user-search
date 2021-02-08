import React from 'react';
import './styles.scss';

type Props = {
  title: string;
}
const Button = ({ title }: Props) => (
  <div>
    <button className="btn text">
      <h5>{title}</h5>
    </button>
  </div>
)

export default Button;