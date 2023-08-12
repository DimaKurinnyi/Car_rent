'use client';

import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStiles, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStiles}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
