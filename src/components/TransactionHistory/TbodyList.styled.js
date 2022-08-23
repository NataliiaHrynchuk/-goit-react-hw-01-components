import styled from '@emotion/styled';

export const Tbody = styled.tbody`
    background-color: white;
`;

export const TableRow = styled.tr`
    :nth-child(2n) {
    background-color:whitesmoke;
}
    :last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`;

export const TableCell = styled.td`
    width: 200px;
    height: 30px;
    text-align: center;
    font-size: 12px;
    color: dimgray;
    text-transform: capitalize;
    :first-child {
        border-bottom-left-radius: 4px;
    }
    :last-child {
        border-bottom-right-radius: 4px;
    }
`;