import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 300px;
    height: 80px;
    margin: 10px auto;
    padding: 10px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 3px 6px 7px 0px rgba(0,0,0,0.63);
    -webkit-box-shadow: 3px 6px 7px 0px rgba(0,0,0,0.63);
    -moz-box-shadow: 3px 6px 7px 0px rgba(0,0,0,0.63);
    `;

export const Status = styled.span`
width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color:
    ${props => {
        // console.log(props.status);
        if (props.status) {
            return "green";
        } else return "red";
    }}
`;   

export const Name = styled.p`
font-size: 24px;
    font-weight: 600;
`;