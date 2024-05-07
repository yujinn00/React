import React, { useState } from 'react';

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  // bind X
  // 화살표 함수 O
  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? '확인됨' : '확인하기'}
    </button>
  );
}

export default ConfirmButton;
