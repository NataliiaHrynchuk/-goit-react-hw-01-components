export const Thead = ({nameFirstColumn, nameSecondColumn, nameThirdColumn}) => {
    return <thead>
    <tr>
      <th>{nameFirstColumn}</th>
      <th>{nameSecondColumn}</th>
      <th>{nameThirdColumn}</th>
    </tr>
  </thead>
}