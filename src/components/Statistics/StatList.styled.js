import styled from '@emotion/styled';
import {getRandomHexColor} from 'Utils/getRandomHexColor';
export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    
;`

export const Item = styled.li`
    width: 45px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: rgb(253, 251, 251);
    padding: 10px;
    background-color: ${getRandomHexColor};

    :first-child {
        border-bottom-left-radius: 4px;
    }
    :last-child {
        border-bottom-right-radius: 4px;
    }
`;

export const Label = styled.span`
    margin-right: 10px;
`;
export const Percentage = styled.span`
    font-size: 20px;
`;