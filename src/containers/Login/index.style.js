import styled from 'styled-components';

const StyledLogin = styled.div`
background-color: #00bfff;
height: 100%;
width: 100%;
position: fixed;
top: 0;
left: 0;
overflow-y: auto;
display: flex;
justify-content: center;
align-items: center;
  .Login-header {
    text-align: center;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 42px;
}
  .Login-container{
    background: #fff;
    max-width: 450px;
    min-width: 450px;
    width: 100%;
    padding: 24px 32px;
  }
  .Login-sign{
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    display: block;
    margin-top: 0;
    margin-bottom: 28px;
    color: #222;
  }
  .Login-from{
    width: 100%;
      display: block;
        margin-top: 18px;
      }
  }
  .Login-lable{
    font-size: 16px;
    color: #222;
    margin-bottom: 12px;
    font-weight: 400;
  }
  .Login-input input{
    display: block;
    padding: 8px 16px;
    border: 1px solid #2222;
    outline: none;
    
  }
  .Login-input{
    width: 100%;
  }
  .Login-btt button{
    width:100%;
    margin-bottom: 8px;
  }
  .Login-btt {
    width:100%;
    
  }
  .form-link{
    font-size: 16px;
      text-transform: capitalize;
      padding: 8px 0 8px 8px;
      display: block;
      font-weight: 400;
      text-align: end;
      text-decoration: none;
      margin: 8px 0;
      transition: all .25s ease-in;
      &:hover{
        color: #222 !important;
        opacity: .8;
      }
    }
  }
`;

export default StyledLogin;
