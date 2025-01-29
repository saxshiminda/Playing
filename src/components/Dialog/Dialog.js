import React, { Component, useEffect } from 'react';

class Dialog extends Component {
  // Constructor (optional)
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      toggleDialog: props.toggleDialog,
    }
  }
  
  DialogClose = () => {
    this.state.toggleDialog(false);
  }

  render( Param ) {
    return (
      <>
        <div className='DialogContainer'>
          <div className='Dialog'>
            <span className='CloseIcon' onClick={this.DialogClose}>X</span>
{/* 
            <input type='text' value={this.state.data[0].idDrink}/>
            <input type='text' value={this.state.data[0].strDrink} />
            <img src={this.state.data[0].strDrinkThumb} /> */}


                <div class="box">
                    <div class="imgBx">
                        <img src={this.state.data[0].strDrinkThumb} alt=""></img>
                    </div>
                    <div class="contentBx">
                        <h2>{this.state.data[0].strDrink}</h2>
                        <p>Miecit xma Uketilshobiiles Datvmodzule
                        AxAlgazrdas RomElsic
                        Ar dAGzogavs DzalAs DaexmarOs
                        YVela 4 sqEsSiasns
                        Da daXocOs Dzaglebi</p>
                    </div>
                </div>

            {/* <div className='DialogButton'>
            </div> */}
          </div>
        </div>

      </>
    );
  }

}

export default Dialog;