import React from 'react';

/**
 * jsx 반복처리 (3) -return문 안에서 map함수 사용하기
 */
const Loop3 = () => {
  const seasons = ['봄', '여름', '가을', '겨울'];

  return (
    <div>
      <h2>Loop3</h2>
      <table border="1">
        <tbody>
          {department.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.dname}</td>
                <td>{item.loc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Loop3;
