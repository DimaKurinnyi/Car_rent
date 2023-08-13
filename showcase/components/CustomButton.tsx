'use client';

import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStiles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStiles}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
