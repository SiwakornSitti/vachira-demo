import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import Sortable from 'react-sortablejs';
import imgDoctor1 from './assets/image/Doctor1.jpeg';
import imgDoctor2 from './assets/image/Doctor2.jpeg';
import imgDoctor3 from './assets/image/Doctor3.jpeg';
import imgDoctor4 from './assets/image/Doctor4.jpeg';
import './App.css';

class App extends Component {
  state = {
    groupOne: {
      display:'http://www.bangkokvoice.com/wp-content/uploads/2012/10/1326077523.jpg',
      data:['พรหมมินทร์', 'สมชาย', 'ชาติชาย', 'ไพรศาล']
    },
    groupTwo: {
      display:'https://www.medego.com/wp-content/uploads/2016/07/dr.mon-1-400x401.jpg',
      data:['หนึ่งฤทัย', 'กัลยารัตน์', 'ศรีสุดา', 'ทรงพล']
    },
    groupThree: {
      display:'https://image.freepik.com/free-photo/doctor-examining-little-girl-with-her-mother-in-medical-office_1098-365.jpg',
      data:['ศิวกร', 'มงคล', 'ธีรยุทธ์', 'พรประสิทธ์' , 'สุดารัตน์']
    }
  };

  tableStyle = [
    {
      table:{backgroundColor: '#C1C6A0'},
      title:{backgroundColor: '#858968'}
    },
    {
      table:{backgroundColor: '#8ed1d4'},
      title:{backgroundColor: '#3990a3'}
    },
    {
      table:{backgroundColor: '#f0d1d1'},
      title:{backgroundColor: '#da7f7f'}
    }
  ];

  render() {

    const genRow = (data) => {
      return data.map((val , index)=>{
        return (
        <div className="row block" key={uniqueId()}  data-id={val}>
          <div className="col-xs-3">{index+1}</div>
          <div className="col-xs-3">{index*15/60 >= 1? ((8.00+Math.floor(index*15/60))+(0.15*index%.60)).toFixed(2):(8.00+(0.15*index%.60)).toFixed(2)}</div>
          <div className="col-xs-3">{val}</div>
          <div className="col-xs-3"><span style={{color:'red'}} className="glyphicon glyphicon-heart" /></div>
        </div>
      )
      })
    };

    const _renderTable = Object.values(this.state).map((e,i) => {
      let keys = Object.keys(this.state);
      return (
        <div className="col-md-4 tableEx" key={i} style={this.tableStyle[i].table}>
          <div className="row tableEx-header">
            <div className='tableEx-header-display'  ><img style={{position:'absolute',width:190,height:150}} src={e.display} /></div>
            <div className='tableEx-header-title' style={this.tableStyle[i].title}>
              <h4>จุดให้บริการที่ {i+1}</h4>
            </div>
          </div>
          <div className="row">
              <div className="row tableEx-who">
                {'เจ้าหน้าที่ ประจำสถานีที่ '+ (i+1)}
              </div>
              <div className="row block hi-light">
                <div className="col-xs-3">เลขคิว</div>
                <div className="col-xs-3">เวลา</div>
                <div className="col-xs-3">ชื่อ</div>
                <div className="col-xs-3">สถานะ</div>
              </div>
              <Sortable
                options={{
                  animation: 150,
                  group: { name: 'shared', pull: true, put: true },
                }}
                className = 'block-list'
                onChange={(items) => {
                  let obj = {};
                  obj[keys[i]] = {display:e.display};
                  obj[keys[i]].data = items;
                  this.setState(obj);
                }}
              >
                {genRow(e.data)}
              </Sortable>

          </div>
        </div>
      )
    });


    return (
      <div>
        <div className="title" style={{ height:100,marginBottom:50,backgroundColor:'#4f5e87',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
          <h2 style={{paddingLeft:30, color:'white'}}><span className='glyphicon glyphicon-th-list'  style={{marginRight:10}}/>ระบบบริหารจัดการคิว</h2>
        </div>
        <div className="App container">

          <div className="row" style={{
            display: "flex",
    justifyContent: "center"}}>
            {_renderTable}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
