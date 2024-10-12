export const dumyDataPopups = [
  {
    id: '67053d40f38d63de113afbf2',
    url: '/hello',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOiIxNDQwbSIsImlhdCI6MTcyODM5NjYyNywiZXhwIjoxNzI4NDgzMDI3fQ.C79OjCzJe9BeZIZ4HgHEyKTLB1vOZTXlTTUNkV4usp8',
    priority: 0,
    content: `
    <style>
  .close-btn {
    padding: 2px 12px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    color: #c4c4d1;
    border: 1px solid #c4c4d1;
    border-radius: 15px;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .popup-taki {
    animation: slideInFromLeft 0.8s ease-out;
  }
  .popup-taki {
    z-index: 999999;
    position: fixed;
    top: 5%;
    right: 5%;
    left: ;
    bottom: ;
    transform: translate(0, 0);
    display: flex;
    max-width: 500px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    width: 90%;
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family: Arial;
  }
  
  .parent-blocks-default-style {
    font-size:16px;
    max-height: 500px;
    overflow-y: auto;
    word-wrap: break-word;
    overflow-x:hidden;
  }
  .parent-blocks-default-style * {
    box-sizing: border-box;
    font-family:inherit !important;
    font-size:inherit;
    background:inherit;
    color:inherit;
    direction: inherit;
  }
  .swiper-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    color:#000;
  }
  .close-popup-btns-group{
    display: flex;
    gap:5px;
  }
  .swiper-slide {
    box-sizing: border-box;
    padding: 0 40px 20px;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }
  .dont-show-again{
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 17px;
    padding: 0px 11px;
    background: rgb(110 194 239);
    color: #fff;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
  }
  .taki-popups-prev-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;
  }
  .taki-popups-next-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    right: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;

  }
  figure{
    margin:0px !important;
  }
  .overlay-popups {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.623);
  }
  .custom-btn {
    outline: none;
    font-size: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 9px;
    color: #000;
    transition: background-color 0.3s, transform 0.2s;
  }
  .swiper-points-navigation-container{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-bottom: 10px;
    z-index: 55;
  }
  .taki-popups-navigation-point{
    cursor: pointer;
    border: 1px solid #331;
    border-radius: 50%;
    width: 11px;
    height: 11px;
  }
  .custom-btn:hover {
    transform: scale(1.05);
  }
  </style>
    <div class='popup-taki' style ="
    background: #fff;
  ">
    <div
      popupTime=15
      class="animated-div"
      style = "border-radius:8px 8px 0px 0px"
    >
      
  <div style="
    display:flex;
    align-items: end;
    justify-content:space-between;
    gap:10px;
    flex-direction:column-reverse;
    padding: 12px 25px;
  ">
  
  <p style="
  width: 100%;
  text-align: center;
  margin:0px !important;
  display: flex;
  align-items: center;
  min-height: 32px;
  justify-content:center;
  word-break: break-word;
  direction:ltr;
  font-size:15px;
  font-family:Poppins!important;
  font-weight:normal!important;
  color:#000000;
  direction:ltr
  ">popup1</p>
  

  <div class="close-popup-btns-group">
    <div class="dont-show-again">Don't show again</div>
    <button style = "background:#fff" class='close-btn' >
    X
    </button>
  </div>
  </div>
  
      <div class="parent-blocks-default-style swiper-container" >
        <div class="swiper-wrapper" >
          <div key=0 style="direction:rtl" class="swiper-slide"></div>
        </div>
        <p></p>
        </div>
        </div>
        <p></p>
        

  <form class='taki-popups-reply popup-comment-form' style="
      padding:0px 35px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap:20px;
      height: 60px;
      background-color: #ecf0f3;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    ">
    <div style="display:flex; align-items:center; width:100%;">
    <img style="
    width:25px;
    height:25px;"
    src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVR4nO1ZW4gcVRDtKCoK+iE+MWrwjU9EBQkRXz+iiPqhiAiJCPmJr8TdqeoNeKeqZ52u6llxfRK/RNegQfBHIiiJ/igKCooREYmKP1HR8YXrauKOVE/P7uxkx+me6dnZxTlwf27fvl3n1qm6dW973hBDDDHE/xIjgZ4JrBuQ5Bkk2QUkXyFpFUkO1JtWkXWvPYvHFMP16MpneMsBBReuRlYHLJ8ha62rRroHSB4ZK02csuQEfFc5D0leile6WwIHEZIDwDqFrnJO3wk4544CkiKw/pUbgZYGrPuBZXJU5Oi+kPBddH5PEspMSL4ALl+SKwkgvQVJppeKBM7LbRooujkXEgWO7jR3LzkJnpdagaM7evNEEF3Xz3jI4JkZCKJruiLhj4+fiCz7Bk6CG02+Hys9dnJ2b5C+NnjjtZXMq9m8QXLt4I3WRZtPcnVqIkjy1qANxjYNSN5IXTMhyeygDcZ2jWQWXHlNCm/oloEby53I6EMrNMg1e9AD65eDN1Q7li9ppPXbCpDWLymIyN/L3yO6P02M/NCfVZTZOK2TjhRK4ZV2kLp/cvIIK9fjTMlyI5KqySaFR6pppLWnDyRetMNYyjPPIVbxAssn7T0in3b2COvzOWq52m0Z7pw7HEnDNtKa6jiBX4zuzYeI/ARcudTrEbjYvlYM7+n44hZXOc7K5p6JBHqDlxOA5bkmmc6YjSlf1KleSADrdi9HODd5jJXxjXhL/aLvogt7ORUWgnCtlzOQtJIQeSLri4935Q3SHw+aiwWQ9Wtk2fmwi06wvq1B5VRg3W2XdhDopsZYCHRT3Me628Y0+q18T2Lvw0xELL93d2uy8EMFDi9okd2TscGsLyzwogtX297SLjsZqWT+fZmIxGRYzgWWX3shYlc6LcY9mxDZ3ty/NYhOt9Yy9uXGPCNOT0o8/l1mIvGKBuFaq22ypF2vVls1N0GttgpZysDyM5K+25ALukfPAtaP4jRNMjZHnGTM5GnPRlnOnusPwnVdSasZSNEVthKp4yQI13k5A0hKzdLsGnaDkQRnmvQ7J4k8MGrxmixkLhnx9h07DkUK7zM5dM5e0U25sPDieHo6WaB3vDyx2U0cW0+n/0GGtDpakst7/RZS9ECyf0wDhxd5ecI2zDQXFBbgQHpbN9/YuG3bYcASxZcNrP8A611e3kCSVxb3gjwFLA/W/1rpB80xY+TTzg+WspPjRHxlWwzX507CJ7l+sZQLrHcvGFhPuxuB9femg9XbyKHvk1wFLjxt88TEkXEgu/IaO1gB6wZ/fPx4YHkv8ejndgjz+gEk/bjJAzO2+o2yo+3vOdJK2o0VWP+cr/Mql/WFRJ2IrarutT9XWf77WQXrs9xq+wCwvG/JAlj/MIJA8g2yvoksr1s8NHl6p7dS4Tu92NItkHxr9dig7RliiCG85YV/AUDjdVYHe+50AAAAAElFTkSuQmCC alt="dfqsdfqd" />
    <input class='comment-input' style="
    background-color: #ecf0f3;
    height: 50%;
    border:none;
    outline: none;
    width: 100%;
    font-size: 15px;
    padding-left:10px;
    " type='text' placeholder="Write a reply ...">
    </div>
    <button type='submit' style="dispaly:flex;border:none;background:none;">
    <img class="custom-btn btn-send-comment"  src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0oDQRCHV+20F0UfQBDBytJeEstUvoBdkMjNmGadMcXNnAasbUSs8g4Wgu+gmNJoYWMKQSw0ouQfqZQcdxncD7bf73Z/N7uzzgUCgcBEAZQUgKQFJE/I6is+mXeWQNYHZO30BrC+IelZxPGqswAOTX50AMsNULLtOp0pZ1EAe4P0HljK3vtZZ1KAuytC+oykcbV2suQsCuAgJ+/AegEcr5kUwEnKCY4pkHtOMC2BkZxEPl42KYBDOUHWRlSLN0wK4EhOkLRUajRmTAoMrUoz9ZxkKYCDwLeB5TSVnADLSy4S3K8n51Wv6+MIlIH1Iy8J7K+KXCFL0Xs//WeJfa8LcJRs4qHsAMsektaB9RJJroHlFkleM9xed0iym3o9qSTJ3IE/XslKFL7rCUsxVYmsRYGkFQTy3EJAScH9hmqtvmg2xPAzYfk0+xtF0rbpQobWjxKY7RdvmjzMmTxOg9ULDZi9UpLRSz1YbKuA1cYWmG0tktHmLuS9v//FA0dEyVZX4tHkE1MgEAi4LPkCuh+NIukCsC0AAAAASUVORK5CYII= />
    </button>
  </form>

  </div>
  <div class="overlay-popups"></div>
  `,

    behavior: {
      timeDelay: 0,
      autoCloseDelay: 15,
    },
  },
  {
    id: '67129d40f58d64de115afcf3',
    url: '/about',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOiIxNTIwbSIsImlhdCI6MTcyOTk5NjYyNywiZXhwIjoxNzI5ODgzMDI3fQ.L79OjFzJe9BeZIZ4HgGEyGTLB1vMZTYlUTVNkW4usc7',
    priority: 1,
    content: `
    <style>
  .close-btn {
    padding: 2px 12px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    color: #c4c4d1;
    border: 1px solid #c4c4d1;
    border-radius: 15px;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .popup-taki {
    animation: slideInFromLeft 0.8s ease-out;
  }
  .popup-taki {
    z-index: 999999;
    position: fixed;
    top: 5%;
    right: 5%;
    left: ;
    bottom: ;
    transform: translate(0, 0);
    display: flex;
    max-width: 500px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    width: 90%;
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family: Arial;
  }
  
  .parent-blocks-default-style {
    font-size:16px;
    max-height: 500px;
    overflow-y: auto;
    word-wrap: break-word;
    overflow-x:hidden;
  }
  .parent-blocks-default-style * {
    box-sizing: border-box;
    font-family:inherit !important;
    font-size:inherit;
    background:inherit;
    color:inherit;
    direction: inherit;
  }
  .swiper-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    color:#000;
  }
  .close-popup-btns-group{
    display: flex;
    gap:5px;
  }
  .swiper-slide {
    box-sizing: border-box;
    padding: 0 40px 20px;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }
  .dont-show-again{
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 17px;
    padding: 0px 11px;
    background: rgb(110 194 239);
    color: #fff;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
  }
  .taki-popups-prev-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;
  }
  .taki-popups-next-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    right: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;

  }
  figure{
    margin:0px !important;
  }
  .overlay-popups {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.623);
  }
  .custom-btn {
    outline: none;
    font-size: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 9px;
    color: #000;
    transition: background-color 0.3s, transform 0.2s;
  }
  .swiper-points-navigation-container{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-bottom: 10px;
    z-index: 55;
  }
  .taki-popups-navigation-point{
    cursor: pointer;
    border: 1px solid #331;
    border-radius: 50%;
    width: 11px;
    height: 11px;
  }
  .custom-btn:hover {
    transform: scale(1.05);
  }
  </style>
    <div class='popup-taki' style ="
    background: #fff;
  ">
    <div
      popupTime=15
      class="animated-div"
      style = "border-radius:8px 8px 0px 0px"
    >
      
  <div style="
    display:flex;
    align-items: end;
    justify-content:space-between;
    gap:10px;
    flex-direction:column-reverse;
    padding: 12px 25px;
  ">
  
  <p style="
  width: 100%;
  text-align: center;
  margin:0px !important;
  display: flex;
  align-items: center;
  min-height: 32px;
  justify-content:center;
  word-break: break-word;
  direction:ltr;
  font-size:15px;
  font-family:Poppins!important;
  font-weight:normal!important;
  color:#000000;
  direction:ltr
  ">›</p>
  

  <div class="close-popup-btns-group">
    <div class="dont-show-again">Don't show again</div>
    <button style = "background:#fff" class='close-btn' >
    X
    </button>
  </div>
  </div>
  
      <div class="parent-blocks-default-style swiper-container" >
        <div class="swiper-wrapper" >
          <div key=0 style="direction:rtl" class="swiper-slide"></div>
        </div>
        <p></p>
        </div>
        </div>
        <p></p>
        

  <form class='taki-popups-reply popup-comment-form' style="
      padding:0px 35px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap:20px;
      height: 60px;
      background-color: #ecf0f3;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    ">
    <div style="display:flex; align-items:center; width:100%;">
    <img style="
    width:25px;
    height:25px;"
    src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVR4nO1ZW4gcVRDtKCoK+iE+MWrwjU9EBQkRXz+iiPqhiAiJCPmJr8TdqeoNeKeqZ52u6llxfRK/RNegQfBHIiiJ/igKCooREYmKP1HR8YXrauKOVE/P7uxkx+me6dnZxTlwf27fvl3n1qm6dW973hBDDDHE/xIjgZ4JrBuQ5Bkk2QUkXyFpFUkO1JtWkXWvPYvHFMP16MpneMsBBReuRlYHLJ8ha62rRroHSB4ZK02csuQEfFc5D0leile6WwIHEZIDwDqFrnJO3wk4544CkiKw/pUbgZYGrPuBZXJU5Oi+kPBddH5PEspMSL4ALl+SKwkgvQVJppeKBM7LbRooujkXEgWO7jR3LzkJnpdagaM7evNEEF3Xz3jI4JkZCKJruiLhj4+fiCz7Bk6CG02+Hys9dnJ2b5C+NnjjtZXMq9m8QXLt4I3WRZtPcnVqIkjy1qANxjYNSN5IXTMhyeygDcZ2jWQWXHlNCm/oloEby53I6EMrNMg1e9AD65eDN1Q7li9ppPXbCpDWLymIyN/L3yO6P02M/NCfVZTZOK2TjhRK4ZV2kLp/cvIIK9fjTMlyI5KqySaFR6pppLWnDyRetMNYyjPPIVbxAssn7T0in3b2COvzOWq52m0Z7pw7HEnDNtKa6jiBX4zuzYeI/ARcudTrEbjYvlYM7+n44hZXOc7K5p6JBHqDlxOA5bkmmc6YjSlf1KleSADrdi9HODd5jJXxjXhL/aLvogt7ORUWgnCtlzOQtJIQeSLri4935Q3SHw+aiwWQ9Wtk2fmwi06wvq1B5VRg3W2XdhDopsZYCHRT3Me628Y0+q18T2Lvw0xELL93d2uy8EMFDi9okd2TscGsLyzwogtX297SLjsZqWT+fZmIxGRYzgWWX3shYlc6LcY9mxDZ3ty/NYhOt9Yy9uXGPCNOT0o8/l1mIvGKBuFaq22ypF2vVls1N0GttgpZysDyM5K+25ALukfPAtaP4jRNMjZHnGTM5GnPRlnOnusPwnVdSasZSNEVthKp4yQI13k5A0hKzdLsGnaDkQRnmvQ7J4k8MGrxmixkLhnx9h07DkUK7zM5dM5e0U25sPDieHo6WaB3vDyx2U0cW0+n/0GGtDpakst7/RZS9ECyf0wDhxd5ecI2zDQXFBbgQHpbN9/YuG3bYcASxZcNrP8A611e3kCSVxb3gjwFLA/W/1rpB80xY+TTzg+WspPjRHxlWwzX507CJ7l+sZQLrHcvGFhPuxuB9femg9XbyKHvk1wFLjxt88TEkXEgu/IaO1gB6wZ/fPx4YHkv8ejndgjz+gEk/bjJAzO2+o2yo+3vOdJK2o0VWP+cr/Mql/WFRJ2IrarutT9XWf77WQXrs9xq+wCwvG/JAlj/MIJA8g2yvoksr1s8NHl6p7dS4Tu92NItkHxr9dig7RliiCG85YV/AUDjdVYHe+50AAAAAElFTkSuQmCC alt="dfqsdfqd" />
    <input class='comment-input' style="
    background-color: #ecf0f3;
    height: 50%;
    border:none;
    outline: none;
    width: 100%;
    font-size: 15px;
    padding-left:10px;
    " type='text' placeholder="Write a reply ...">
    </div>
    <button type='submit' style="dispaly:flex;border:none;background:none;">
    <img class="custom-btn btn-send-comment"  src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0oDQRCHV+20F0UfQBDBytJeEstUvoBdkMjNmGadMcXNnAasbUSs8g4Wgu+gmNJoYWMKQSw0ouQfqZQcdxncD7bf73Z/N7uzzgUCgcBEAZQUgKQFJE/I6is+mXeWQNYHZO30BrC+IelZxPGqswAOTX50AMsNULLtOp0pZ1EAe4P0HljK3vtZZ1KAuytC+oykcbV2suQsCuAgJ+/AegEcr5kUwEnKCY4pkHtOMC2BkZxEPl42KYBDOUHWRlSLN0wK4EhOkLRUajRmTAoMrUoz9ZxkKYCDwLeB5TSVnADLSy4S3K8n51Wv6+MIlIH1Iy8J7K+KXCFL0Xs//WeJfa8LcJRs4qHsAMsektaB9RJJroHlFkleM9xed0iym3o9qSTJ3IE/XslKFL7rCUsxVYmsRYGkFQTy3EJAScH9hmqtvmg2xPAzYfk0+xtF0rbpQobWjxKY7RdvmjzMmTxOg9ULDZi9UpLRSz1YbKuA1cYWmG0tktHmLuS9v//FA0dEyVZX4tHkE1MgEAi4LPkCuh+NIukCsC0AAAAASUVORK5CYII= />
    </button>
  </form>

  </div>
  <div class="overlay-popups"></div>
  
`,
    behavior: {
      timeDelay: 5,
      autoCloseDelay: 20,
    },
  },
  {
    id: '67287d90g48d65de123afaf7',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOiIxMjIwbSIsImlhdCI6MTczMDU5NjYyNywiZXhwIjoxNzMwODgzMDI3fQ.P89OjVzJe8BeZTZ6IgHEyPTLB2vOFTXkUTVJkZ4vfp5',
    priority: 2,
    content: `
    <style>
  .close-btn {
    padding: 2px 12px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    color: #c4c4d1;
    border: 1px solid #c4c4d1;
    border-radius: 15px;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .popup-taki {
    animation: slideInFromLeft 0.8s ease-out;
  }
  .popup-taki {
    z-index: 999999;
    position: fixed;
    top: 5%;
    right: 5%;
    left: ;
    bottom: ;
    transform: translate(0, 0);
    display: flex;
    max-width: 500px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    width: 90%;
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family: Arial;
  }
  
  .parent-blocks-default-style {
    font-size:16px;
    max-height: 500px;
    overflow-y: auto;
    word-wrap: break-word;
    overflow-x:hidden;
  }
  .parent-blocks-default-style * {
    box-sizing: border-box;
    font-family:inherit !important;
    font-size:inherit;
    background:inherit;
    color:inherit;
    direction: inherit;
  }
  .swiper-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    color:#000;
  }
  .close-popup-btns-group{
    display: flex;
    gap:5px;
  }
  .swiper-slide {
    box-sizing: border-box;
    padding: 0 40px 20px;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }
  .dont-show-again{
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 17px;
    padding: 0px 11px;
    background: rgb(110 194 239);
    color: #fff;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
  }
  .taki-popups-prev-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;
  }
  .taki-popups-next-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    right: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;

  }
  figure{
    margin:0px !important;
  }
  .overlay-popups {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.623);
  }
  .custom-btn {
    outline: none;
    font-size: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 9px;
    color: #000;
    transition: background-color 0.3s, transform 0.2s;
  }
  .swiper-points-navigation-container{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-bottom: 10px;
    z-index: 55;
  }
  .taki-popups-navigation-point{
    cursor: pointer;
    border: 1px solid #331;
    border-radius: 50%;
    width: 11px;
    height: 11px;
  }
  .custom-btn:hover {
    transform: scale(1.05);
  }
  </style>
    <div class='popup-taki' style ="
    background: #fff;
  ">
    <div
      popupTime=15
      class="animated-div"
      style = "border-radius:8px 8px 0px 0px"
    >
      
  <div style="
    display:flex;
    align-items: end;
    justify-content:space-between;
    gap:10px;
    flex-direction:column-reverse;
    padding: 12px 25px;
  ">
  
  <p style="
  width: 100%;
  text-align: center;
  margin:0px !important;
  display: flex;
  align-items: center;
  min-height: 32px;
  justify-content:center;
  word-break: break-word;
  direction:ltr;
  font-size:15px;
  font-family:Poppins!important;
  font-weight:normal!important;
  color:#000000;
  direction:ltr
  ">popus 3</p>
  

  <div class="close-popup-btns-group">
    <div class="dont-show-again">Don't show again</div>
    <button style = "background:#fff" class='close-btn' >
    X
    </button>
  </div>
  </div>
  
      <div class="parent-blocks-default-style swiper-container" >
        <div class="swiper-wrapper" >
          <div key=0 style="direction:rtl" class="swiper-slide"></div>
        </div>
        <p></p>
        </div>
        </div>
        <p></p>
        

  <form class='taki-popups-reply popup-comment-form' style="
      padding:0px 35px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap:20px;
      height: 60px;
      background-color: #ecf0f3;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    ">
    <div style="display:flex; align-items:center; width:100%;">
    <img style="
    width:25px;
    height:25px;"
    src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVR4nO1ZW4gcVRDtKCoK+iE+MWrwjU9EBQkRXz+iiPqhiAiJCPmJr8TdqeoNeKeqZ52u6llxfRK/RNegQfBHIiiJ/igKCooREYmKP1HR8YXrauKOVE/P7uxkx+me6dnZxTlwf27fvl3n1qm6dW973hBDDDHE/xIjgZ4JrBuQ5Bkk2QUkXyFpFUkO1JtWkXWvPYvHFMP16MpneMsBBReuRlYHLJ8ha62rRroHSB4ZK02csuQEfFc5D0leile6WwIHEZIDwDqFrnJO3wk4544CkiKw/pUbgZYGrPuBZXJU5Oi+kPBddH5PEspMSL4ALl+SKwkgvQVJppeKBM7LbRooujkXEgWO7jR3LzkJnpdagaM7evNEEF3Xz3jI4JkZCKJruiLhj4+fiCz7Bk6CG02+Hys9dnJ2b5C+NnjjtZXMq9m8QXLt4I3WRZtPcnVqIkjy1qANxjYNSN5IXTMhyeygDcZ2jWQWXHlNCm/oloEby53I6EMrNMg1e9AD65eDN1Q7li9ppPXbCpDWLymIyN/L3yO6P02M/NCfVZTZOK2TjhRK4ZV2kLp/cvIIK9fjTMlyI5KqySaFR6pppLWnDyRetMNYyjPPIVbxAssn7T0in3b2COvzOWq52m0Z7pw7HEnDNtKa6jiBX4zuzYeI/ARcudTrEbjYvlYM7+n44hZXOc7K5p6JBHqDlxOA5bkmmc6YjSlf1KleSADrdi9HODd5jJXxjXhL/aLvogt7ORUWgnCtlzOQtJIQeSLri4935Q3SHw+aiwWQ9Wtk2fmwi06wvq1B5VRg3W2XdhDopsZYCHRT3Me628Y0+q18T2Lvw0xELL93d2uy8EMFDi9okd2TscGsLyzwogtX297SLjsZqWT+fZmIxGRYzgWWX3shYlc6LcY9mxDZ3ty/NYhOt9Yy9uXGPCNOT0o8/l1mIvGKBuFaq22ypF2vVls1N0GttgpZysDyM5K+25ALukfPAtaP4jRNMjZHnGTM5GnPRlnOnusPwnVdSasZSNEVthKp4yQI13k5A0hKzdLsGnaDkQRnmvQ7J4k8MGrxmixkLhnx9h07DkUK7zM5dM5e0U25sPDieHo6WaB3vDyx2U0cW0+n/0GGtDpakst7/RZS9ECyf0wDhxd5ecI2zDQXFBbgQHpbN9/YuG3bYcASxZcNrP8A611e3kCSVxb3gjwFLA/W/1rpB80xY+TTzg+WspPjRHxlWwzX507CJ7l+sZQLrHcvGFhPuxuB9femg9XbyKHvk1wFLjxt88TEkXEgu/IaO1gB6wZ/fPx4YHkv8ejndgjz+gEk/bjJAzO2+o2yo+3vOdJK2o0VWP+cr/Mql/WFRJ2IrarutT9XWf77WQXrs9xq+wCwvG/JAlj/MIJA8g2yvoksr1s8NHl6p7dS4Tu92NItkHxr9dig7RliiCG85YV/AUDjdVYHe+50AAAAAElFTkSuQmCC alt="dfqsdfqd" />
    <input class='comment-input' style="
    background-color: #ecf0f3;
    height: 50%;
    border:none;
    outline: none;
    width: 100%;
    font-size: 15px;
    padding-left:10px;
    " type='text' placeholder="Write a reply ...">
    </div>
    <button type='submit' style="dispaly:flex;border:none;background:none;">
    <img class="custom-btn btn-send-comment"  src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0oDQRCHV+20F0UfQBDBytJeEstUvoBdkMjNmGadMcXNnAasbUSs8g4Wgu+gmNJoYWMKQSw0ouQfqZQcdxncD7bf73Z/N7uzzgUCgcBEAZQUgKQFJE/I6is+mXeWQNYHZO30BrC+IelZxPGqswAOTX50AMsNULLtOp0pZ1EAe4P0HljK3vtZZ1KAuytC+oykcbV2suQsCuAgJ+/AegEcr5kUwEnKCY4pkHtOMC2BkZxEPl42KYBDOUHWRlSLN0wK4EhOkLRUajRmTAoMrUoz9ZxkKYCDwLeB5TSVnADLSy4S3K8n51Wv6+MIlIH1Iy8J7K+KXCFL0Xs//WeJfa8LcJRs4qHsAMsektaB9RJJroHlFkleM9xed0iym3o9qSTJ3IE/XslKFL7rCUsxVYmsRYGkFQTy3EJAScH9hmqtvmg2xPAzYfk0+xtF0rbpQobWjxKY7RdvmjzMmTxOg9ULDZi9UpLRSz1YbKuA1cYWmG0tktHmLuS9v//FA0dEyVZX4tHkE1MgEAi4LPkCuh+NIukCsC0AAAAASUVORK5CYII= />
    </button>
  </form>

  </div>
  <div class="overlay-popups"></div>
  `,
    behavior: {
      timeDelay: 10,
      autoCloseDelay: 30,
    },
  },
  {
    id: '67343f10h59d66de134bfcf8',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOiIxNzIwbSIsImlhdCI6MTczMTc5NjYyNywiZXhwIjoxNzMxODgzMDI3fQ.Q69OjDzJe7BeYZX8JgREyOTLB3vOHTXnVTVPkW4qtl3',
    priority: 1,
    content: `
    <style>
  .close-btn {
    padding: 2px 12px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    color: #c4c4d1;
    border: 1px solid #c4c4d1;
    border-radius: 15px;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .popup-taki {
    animation: slideInFromLeft 0.8s ease-out;
  }
  .popup-taki {
    z-index: 999999;
    position: fixed;
    top: 5%;
    right: 5%;
    left: ;
    bottom: ;
    transform: translate(0, 0);
    display: flex;
    max-width: 500px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    width: 90%;
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family: Arial;
  }
  
  .parent-blocks-default-style {
    font-size:16px;
    max-height: 500px;
    overflow-y: auto;
    word-wrap: break-word;
    overflow-x:hidden;
  }
  .parent-blocks-default-style * {
    box-sizing: border-box;
    font-family:inherit !important;
    font-size:inherit;
    background:inherit;
    color:inherit;
    direction: inherit;
  }
  .swiper-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    color:#000;
  }
  .close-popup-btns-group{
    display: flex;
    gap:5px;
  }
  .swiper-slide {
    box-sizing: border-box;
    padding: 0 40px 20px;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }
  .dont-show-again{
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 17px;
    padding: 0px 11px;
    background: rgb(110 194 239);
    color: #fff;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
  }
  .taki-popups-prev-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;
  }
  .taki-popups-next-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    right: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;

  }
  figure{
    margin:0px !important;
  }
  .overlay-popups {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.623);
  }
  .custom-btn {
    outline: none;
    font-size: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 9px;
    color: #000;
    transition: background-color 0.3s, transform 0.2s;
  }
  .swiper-points-navigation-container{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-bottom: 10px;
    z-index: 55;
  }
  .taki-popups-navigation-point{
    cursor: pointer;
    border: 1px solid #331;
    border-radius: 50%;
    width: 11px;
    height: 11px;
  }
  .custom-btn:hover {
    transform: scale(1.05);
  }
  </style>
    <div class='popup-taki' style ="
    background: #fff;
  ">
    <div
      popupTime=15
      class="animated-div"
      style = "border-radius:8px 8px 0px 0px"
    >
      
  <div style="
    display:flex;
    align-items: end;
    justify-content:space-between;
    gap:10px;
    flex-direction:column-reverse;
    padding: 12px 25px;
  ">
  
  <p style="
  width: 100%;
  text-align: center;
  margin:0px !important;
  display: flex;
  align-items: center;
  min-height: 32px;
  justify-content:center;
  word-break: break-word;
  direction:ltr;
  font-size:15px;
  font-family:Poppins!important;
  font-weight:normal!important;
  color:#000000;
  direction:ltr
  ">popup 4</p>
  

  <div class="close-popup-btns-group">
    <div class="dont-show-again">Don't show again</div>
    <button style = "background:#fff" class='close-btn' >
    X
    </button>
  </div>
  </div>
  
      <div class="parent-blocks-default-style swiper-container" >
        <div class="swiper-wrapper" >
          <div key=0 style="direction:rtl" class="swiper-slide"></div>
        </div>
        <p></p>
        </div>
        </div>
        <p></p>
        

  <form class='taki-popups-reply popup-comment-form' style="
      padding:0px 35px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap:20px;
      height: 60px;
      background-color: #ecf0f3;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    ">
    <div style="display:flex; align-items:center; width:100%;">
    <img style="
    width:25px;
    height:25px;"
    src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVR4nO1ZW4gcVRDtKCoK+iE+MWrwjU9EBQkRXz+iiPqhiAiJCPmJr8TdqeoNeKeqZ52u6llxfRK/RNegQfBHIiiJ/igKCooREYmKP1HR8YXrauKOVE/P7uxkx+me6dnZxTlwf27fvl3n1qm6dW973hBDDDHE/xIjgZ4JrBuQ5Bkk2QUkXyFpFUkO1JtWkXWvPYvHFMP16MpneMsBBReuRlYHLJ8ha62rRroHSB4ZK02csuQEfFc5D0leile6WwIHEZIDwDqFrnJO3wk4544CkiKw/pUbgZYGrPuBZXJU5Oi+kPBddH5PEspMSL4ALl+SKwkgvQVJppeKBM7LbRooujkXEgWO7jR3LzkJnpdagaM7evNEEF3Xz3jI4JkZCKJruiLhj4+fiCz7Bk6CG02+Hys9dnJ2b5C+NnjjtZXMq9m8QXLt4I3WRZtPcnVqIkjy1qANxjYNSN5IXTMhyeygDcZ2jWQWXHlNCm/oloEby53I6EMrNMg1e9AD65eDN1Q7li9ppPXbCpDWLymIyN/L3yO6P02M/NCfVZTZOK2TjhRK4ZV2kLp/cvIIK9fjTMlyI5KqySaFR6pppLWnDyRetMNYyjPPIVbxAssn7T0in3b2COvzOWq52m0Z7pw7HEnDNtKa6jiBX4zuzYeI/ARcudTrEbjYvlYM7+n44hZXOc7K5p6JBHqDlxOA5bkmmc6YjSlf1KleSADrdi9HODd5jJXxjXhL/aLvogt7ORUWgnCtlzOQtJIQeSLri4935Q3SHw+aiwWQ9Wtk2fmwi06wvq1B5VRg3W2XdhDopsZYCHRT3Me628Y0+q18T2Lvw0xELL93d2uy8EMFDi9okd2TscGsLyzwogtX297SLjsZqWT+fZmIxGRYzgWWX3shYlc6LcY9mxDZ3ty/NYhOt9Yy9uXGPCNOT0o8/l1mIvGKBuFaq22ypF2vVls1N0GttgpZysDyM5K+25ALukfPAtaP4jRNMjZHnGTM5GnPRlnOnusPwnVdSasZSNEVthKp4yQI13k5A0hKzdLsGnaDkQRnmvQ7J4k8MGrxmixkLhnx9h07DkUK7zM5dM5e0U25sPDieHo6WaB3vDyx2U0cW0+n/0GGtDpakst7/RZS9ECyf0wDhxd5ecI2zDQXFBbgQHpbN9/YuG3bYcASxZcNrP8A611e3kCSVxb3gjwFLA/W/1rpB80xY+TTzg+WspPjRHxlWwzX507CJ7l+sZQLrHcvGFhPuxuB9femg9XbyKHvk1wFLjxt88TEkXEgu/IaO1gB6wZ/fPx4YHkv8ejndgjz+gEk/bjJAzO2+o2yo+3vOdJK2o0VWP+cr/Mql/WFRJ2IrarutT9XWf77WQXrs9xq+wCwvG/JAlj/MIJA8g2yvoksr1s8NHl6p7dS4Tu92NItkHxr9dig7RliiCG85YV/AUDjdVYHe+50AAAAAElFTkSuQmCC alt="dfqsdfqd" />
    <input class='comment-input' style="
    background-color: #ecf0f3;
    height: 50%;
    border:none;
    outline: none;
    width: 100%;
    font-size: 15px;
    padding-left:10px;
    " type='text' placeholder="Write a reply ...">
    </div>
    <button type='submit' style="dispaly:flex;border:none;background:none;">
    <img class="custom-btn btn-send-comment"  src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0oDQRCHV+20F0UfQBDBytJeEstUvoBdkMjNmGadMcXNnAasbUSs8g4Wgu+gmNJoYWMKQSw0ouQfqZQcdxncD7bf73Z/N7uzzgUCgcBEAZQUgKQFJE/I6is+mXeWQNYHZO30BrC+IelZxPGqswAOTX50AMsNULLtOp0pZ1EAe4P0HljK3vtZZ1KAuytC+oykcbV2suQsCuAgJ+/AegEcr5kUwEnKCY4pkHtOMC2BkZxEPl42KYBDOUHWRlSLN0wK4EhOkLRUajRmTAoMrUoz9ZxkKYCDwLeB5TSVnADLSy4S3K8n51Wv6+MIlIH1Iy8J7K+KXCFL0Xs//WeJfa8LcJRs4qHsAMsektaB9RJJroHlFkleM9xed0iym3o9qSTJ3IE/XslKFL7rCUsxVYmsRYGkFQTy3EJAScH9hmqtvmg2xPAzYfk0+xtF0rbpQobWjxKY7RdvmjzMmTxOg9ULDZi9UpLRSz1YbKuA1cYWmG0tktHmLuS9v//FA0dEyVZX4tHkE1MgEAi4LPkCuh+NIukCsC0AAAAASUVORK5CYII= />
    </button>
  </form>

  </div>
  <div class="overlay-popups"></div>
  `,
    behavior: {
      timeDelay: 3,
      autoCloseDelay: 25,
    },
  },
  {
    id: '67450g20i70d67de145dfdf9',
    url: '/token',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOiIxNjkwbSIsImlhdCI6MTczMjk5NjYyNywiZXhwIjoxNzMyODgzMDI3fQ.K79OjUzJe6BeZZY9KhWEyHTLB4vOETXpUTVRlW4ptr4',
    priority: 0,
    content: `
    <style>
  .close-btn {
    padding: 2px 12px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    color: #c4c4d1;
    border: 1px solid #c4c4d1;
    border-radius: 15px;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .popup-taki {
    animation: slideInFromLeft 0.8s ease-out;
  }
  .popup-taki {
    z-index: 999999;
    position: fixed;
    top: 5%;
    right: 5%;
    left: ;
    bottom: ;
    transform: translate(0, 0);
    display: flex;
    max-width: 500px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    width: 90%;
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family: Arial;
  }
  
  .parent-blocks-default-style {
    font-size:16px;
    max-height: 500px;
    overflow-y: auto;
    word-wrap: break-word;
    overflow-x:hidden;
  }
  .parent-blocks-default-style * {
    box-sizing: border-box;
    font-family:inherit !important;
    font-size:inherit;
    background:inherit;
    color:inherit;
    direction: inherit;
  }
  .swiper-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    color:#000;
  }
  .close-popup-btns-group{
    display: flex;
    gap:5px;
  }
  .swiper-slide {
    box-sizing: border-box;
    padding: 0 40px 20px;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }
  .dont-show-again{
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 17px;
    padding: 0px 11px;
    background: rgb(110 194 239);
    color: #fff;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
  }
  .taki-popups-prev-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;
  }
  .taki-popups-next-btn{
    font-family: Poppins !important;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    right: 5px;
    font-size: 29px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 31px;
    width: 31px;
    z-index: 56;
    cursor: pointer;
    border:none;

  }
  figure{
    margin:0px !important;
  }
  .overlay-popups {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.623);
  }
  .custom-btn {
    outline: none;
    font-size: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 9px;
    color: #000;
    transition: background-color 0.3s, transform 0.2s;
  }
  .swiper-points-navigation-container{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-bottom: 10px;
    z-index: 55;
  }
  .taki-popups-navigation-point{
    cursor: pointer;
    border: 1px solid #331;
    border-radius: 50%;
    width: 11px;
    height: 11px;
  }
  .custom-btn:hover {
    transform: scale(1.05);
  }
  </style>
    <div class='popup-taki' style ="
    background: #fff;
  ">
    <div
      popupTime=15
      class="animated-div"
      style = "border-radius:8px 8px 0px 0px"
    >
      
  <div style="
    display:flex;
    align-items: end;
    justify-content:space-between;
    gap:10px;
    flex-direction:column-reverse;
    padding: 12px 25px;
  ">
  
  <p style="
  width: 100%;
  text-align: center;
  margin:0px !important;
  display: flex;
  align-items: center;
  min-height: 32px;
  justify-content:center;
  word-break: break-word;
  direction:ltr;
  font-size:15px;
  font-family:Poppins!important;
  font-weight:normal!important;
  color:#000000;
  direction:ltr
  ">popup5</p>
  

  <div class="close-popup-btns-group">
    <div class="dont-show-again">Don't show again</div>
    <button style = "background:#fff" class='close-btn' >
    X
    </button>
  </div>
  </div>
  
      <div class="parent-blocks-default-style swiper-container" >
        <div class="swiper-wrapper" >
          <div key=0 style="direction:rtl" class="swiper-slide"></div>
        </div>
        <p></p>
        </div>
        </div>
        <p></p>
        

  <form class='taki-popups-reply popup-comment-form' style="
      padding:0px 35px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap:20px;
      height: 60px;
      background-color: #ecf0f3;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    ">
    <div style="display:flex; align-items:center; width:100%;">
    <img style="
    width:25px;
    height:25px;"
    src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVR4nO1ZW4gcVRDtKCoK+iE+MWrwjU9EBQkRXz+iiPqhiAiJCPmJr8TdqeoNeKeqZ52u6llxfRK/RNegQfBHIiiJ/igKCooREYmKP1HR8YXrauKOVE/P7uxkx+me6dnZxTlwf27fvl3n1qm6dW973hBDDDHE/xIjgZ4JrBuQ5Bkk2QUkXyFpFUkO1JtWkXWvPYvHFMP16MpneMsBBReuRlYHLJ8ha62rRroHSB4ZK02csuQEfFc5D0leile6WwIHEZIDwDqFrnJO3wk4544CkiKw/pUbgZYGrPuBZXJU5Oi+kPBddH5PEspMSL4ALl+SKwkgvQVJppeKBM7LbRooujkXEgWO7jR3LzkJnpdagaM7evNEEF3Xz3jI4JkZCKJruiLhj4+fiCz7Bk6CG02+Hys9dnJ2b5C+NnjjtZXMq9m8QXLt4I3WRZtPcnVqIkjy1qANxjYNSN5IXTMhyeygDcZ2jWQWXHlNCm/oloEby53I6EMrNMg1e9AD65eDN1Q7li9ppPXbCpDWLymIyN/L3yO6P02M/NCfVZTZOK2TjhRK4ZV2kLp/cvIIK9fjTMlyI5KqySaFR6pppLWnDyRetMNYyjPPIVbxAssn7T0in3b2COvzOWq52m0Z7pw7HEnDNtKa6jiBX4zuzYeI/ARcudTrEbjYvlYM7+n44hZXOc7K5p6JBHqDlxOA5bkmmc6YjSlf1KleSADrdi9HODd5jJXxjXhL/aLvogt7ORUWgnCtlzOQtJIQeSLri4935Q3SHw+aiwWQ9Wtk2fmwi06wvq1B5VRg3W2XdhDopsZYCHRT3Me628Y0+q18T2Lvw0xELL93d2uy8EMFDi9okd2TscGsLyzwogtX297SLjsZqWT+fZmIxGRYzgWWX3shYlc6LcY9mxDZ3ty/NYhOt9Yy9uXGPCNOT0o8/l1mIvGKBuFaq22ypF2vVls1N0GttgpZysDyM5K+25ALukfPAtaP4jRNMjZHnGTM5GnPRlnOnusPwnVdSasZSNEVthKp4yQI13k5A0hKzdLsGnaDkQRnmvQ7J4k8MGrxmixkLhnx9h07DkUK7zM5dM5e0U25sPDieHo6WaB3vDyx2U0cW0+n/0GGtDpakst7/RZS9ECyf0wDhxd5ecI2zDQXFBbgQHpbN9/YuG3bYcASxZcNrP8A611e3kCSVxb3gjwFLA/W/1rpB80xY+TTzg+WspPjRHxlWwzX507CJ7l+sZQLrHcvGFhPuxuB9femg9XbyKHvk1wFLjxt88TEkXEgu/IaO1gB6wZ/fPx4YHkv8ejndgjz+gEk/bjJAzO2+o2yo+3vOdJK2o0VWP+cr/Mql/WFRJ2IrarutT9XWf77WQXrs9xq+wCwvG/JAlj/MIJA8g2yvoksr1s8NHl6p7dS4Tu92NItkHxr9dig7RliiCG85YV/AUDjdVYHe+50AAAAAElFTkSuQmCC alt="dfqsdfqd" />
    <input class='comment-input' style="
    background-color: #ecf0f3;
    height: 50%;
    border:none;
    outline: none;
    width: 100%;
    font-size: 15px;
    padding-left:10px;
    " type='text' placeholder="Write a reply ...">
    </div>
    <button type='submit' style="dispaly:flex;border:none;background:none;">
    <img class="custom-btn btn-send-comment"  src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2Zv0oDQRCHV+20F0UfQBDBytJeEstUvoBdkMjNmGadMcXNnAasbUSs8g4Wgu+gmNJoYWMKQSw0ouQfqZQcdxncD7bf73Z/N7uzzgUCgcBEAZQUgKQFJE/I6is+mXeWQNYHZO30BrC+IelZxPGqswAOTX50AMsNULLtOp0pZ1EAe4P0HljK3vtZZ1KAuytC+oykcbV2suQsCuAgJ+/AegEcr5kUwEnKCY4pkHtOMC2BkZxEPl42KYBDOUHWRlSLN0wK4EhOkLRUajRmTAoMrUoz9ZxkKYCDwLeB5TSVnADLSy4S3K8n51Wv6+MIlIH1Iy8J7K+KXCFL0Xs//WeJfa8LcJRs4qHsAMsektaB9RJJroHlFkleM9xed0iym3o9qSTJ3IE/XslKFL7rCUsxVYmsRYGkFQTy3EJAScH9hmqtvmg2xPAzYfk0+xtF0rbpQobWjxKY7RdvmjzMmTxOg9ULDZi9UpLRSz1YbKuA1cYWmG0tktHmLuS9v//FA0dEyVZX4tHkE1MgEAi4LPkCuh+NIukCsC0AAAAASUVORK5CYII= />
    </button>
  </form>

  </div>
  <div class="overlay-popups"></div>
  `,
    behavior: {
      timeDelay: 8,
      autoCloseDelay: 18,
    },
  },
];
