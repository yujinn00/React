// // 클래스 컴포넌트
// import React, { Component } from 'react';
// import Try from './Try';

// // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수 (this 키워드를 사용하지 않기 때문에 컴포넌트 밖으로 뺄 수도 있음)
// function getNumbers() {
//   const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const array = [];

//   for (let i = 0; i < 4; i++) {
//     const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
//     array.push(chosen);
//   }

//   return array;
// }

// class NumberBaseball extends Component {
//   state = {
//     result: '',
//     value: '',
//     answer: getNumbers(), // ex: [1, 3, 5, 7]
//     tries: [], // push 금지
//   };

//   onSubmitForm = (e) => {
//     const { value, tries, answer } = this.state;

//     e.preventDefault();
//     if (value === answer.join('')) {
//       // 이전 상태(prevTries)를 활용하여 상태 업데이트
//       this.setState((prevState) => {
//         return {
//           result: '홈런!',
//           tries: [...prevState, { try: value, result: '홈런!' }], // push 금지
//         };
//       });
//       alert('게임을 다시 시작합니다!');
//       this.setState({
//         value: '',
//         answer: getNumbers(),
//         tries: [],
//       });
//     } else {
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;

//       if (tries.length >= 9) {
//         this.setState({
//           result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
//         });
//         alert('게임을 다시 시작합니다!');
//         this.setState({
//           value: '',
//           answer: getNumbers(),
//           tries: [],
//         });
//       } else {
//         for (let i = 0; i < 4; i++) {
//           if (answerArray[i] === answer[i]) {
//             strike += 1;
//           } else if (answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         // 이전 상태(prevTries)를 활용하여 상태 업데이트
//         this.setState((prevState) => {
//           return {
//             tries: [
//               ...prevState,
//               { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` },
//             ], // push 금지
//             value: '',
//           };
//         });
//       }
//     }
//   };

//   onChangeInput = (e) => {
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   // fruits = [
//   //   { fruit: '사과', taste: '맛있다' },
//   //   { fruit: '바나나', taste: '맛없다' },
//   //   { fruit: '귤', taste: '떫다' },
//   //   { fruit: '감', taste: '쓰다' },
//   //   { fruit: '배', taste: '달다' },
//   //   { fruit: '밤', taste: '몰라' },
//   //   { fruit: '사과', taste: '맛없다' },
//   // ];

//   render() {
//     const { result, value, tries } = this.state;

//     return (
//       <>
//         <h1>{result}</h1>
//         <form onSubmit={this.onSubmitForm}>
//           <input maxLength={4} value={value} onChange={this.onChangeInput} />
//         </form>
//         <div>시도: {tries.length}</div>
//         <ul>
//           {tries.map((v, i) => {
//             return <Try key={`${i + 1}차 시도: `} tryInfo={v}></Try>;
//           })}
//         </ul>
//         {/* <ul>
//           {[
//             ['사과', '맛있다'],
//             ['바나나', '맛없다'],
//             ['포도', '시다'],
//             ['귤', '떫다'],
//             ['감', '쓰다'],
//             ['배', '달다'],
//             ['밤', '몰라'],
//           ].map((v, i) => {
//             return (
//               <li key={v[0]}>
//                 <b>{v[0]}</b> - {v[1]}
//               </li>
//             );
//           })}
//         </ul> */}

//         {/* <ul>
//           {[
//             { fruit: '사과', taste: '맛있다' },
//             { fruit: '바나나', taste: '맛없다' },
//             { fruit: '귤', taste: '떫다' },
//             { fruit: '감', taste: '쓰다' },
//             { fruit: '배', taste: '달다' },
//             { fruit: '밤', taste: '몰라' },
//             { fruit: '사과', taste: '맛없다' },
//           ].map((v, i) => {
//             return (
//               <li key={v.fruit + v.taste}>
//                 <b>{v.fruit}</b> - {v.taste}
//               </li>
//             );
//           })}
//         </ul> */}

//         {/* <ul>
//           {this.fruits.map((v, i) => {
//             return <Try key={v.fruit + v.taste} value={v} index={i}></Try>;
//           })}
//         </ul> */}
//       </>
//     );
//   }
// }

// export default NumberBaseball; // import NumberBaseball;

// 함수 컴포넌트
import React, { useState } from 'react';
import Try from './Try';

// 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수 (this 키워드를 사용하지 않기 때문에 컴포넌트 밖으로 뺄 수도 있음)
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }

  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers); // Lazy Init (늦은 초기화)
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (value === answer.join('')) {
      setResult('홈런!');
      // 이전 상태(prevTries)를 활용하여 상태 업데이트
      setTries((prevState) => {
        return [...prevState, { try: value, result: '홈런!' }]; // push 금지
      });
      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        // 이전 상태(prevTries)를 활용하여 상태 업데이트
        setTries((prevState) => {
          return [
            ...prevState,
            { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` }, // push 금지
          ];
        });
        setValue('');
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도: `} tryInfo={v}></Try>;
        })}
      </ul>
    </>
  );
};

export default NumberBaseball; // import NumberBaseball;
