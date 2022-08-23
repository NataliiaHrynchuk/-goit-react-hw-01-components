import styled from '@emotion/styled';

export const StatsItem = styled.li`
    width: 60px;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color:whitesmoke; 
    :first-child {
        border-bottom-left-radius: 4px;
        border-right: 0.1px rgb(214, 212, 212) solid;
    }
    :last-child {
        border-bottom-right-radius: 4px;
        border-left: 0.1px rgb(214, 212, 212) solid;
    }
`;

export const Label = styled.span`
    color: rgb(185, 184, 184);
`;

export const Quantity = styled.span`
    font-size: 20px;
    font-weight: 600;
`;