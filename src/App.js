import logo from './logo.svg';
// import './App.css';
import "antd/dist/antd.css";
import './App.css';
import { List, Typography, Divider } from 'antd';

import { useState } from 'react';
import { Table,Pagination } from 'antd';

function App() {
const data1=[{key:1,name:"ahmad"},{key:2,name:"ahmad"},{key:3,name:"ahmad"},{key:4,name:"ahmad"},{key:5,name:"ahmad"},
{key:6,name:"ahmad"},{key:7,name:"ahmad"},{key:8,name:"ahmad"},{key:9,name:"ali"},{key:10,name:"ahmad"}]
const colum=[{title:"name",dataIndex:"name",key:"key"},{title:"key",dataIndex:"key",key:"key"}]
function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);}
  function showdata(total){
    return total;

      }
const [current,setCurrent]=useState(1)
    
    const  onChange = (page2,page) => {
        console.log(page2,"   ",page);
        setCurrent(page2)
      };
      const itemRender=(current, type, originalElement)=> {
        if (type === 'prev') {
          return <a style={{color:"brown"}}>Previous</a>;
        }
        if (type === 'next') {
          return <a style={{color:"brown"}}>Next</a>;
        }
        return originalElement;
      }
      const renderCurrent=(page)=>{
        setCurrent(page)
      }
      
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
  return (
    <div>
      {/* <Table
      columns={colum}
      dataSource={data}
      // pagination={<Pagination defaultCurrent={1} total={2}/>}
      pagination={{pageSize:5}}
      // pagination={{pageSize:5,
  // }}
  rowSelection={{type:"checkbox",hideSelectAll:true}}

      >
        </Table> */}
       {/* <Pagination defaultCurrent={1} total={150} />; */}
      

{/* 
    <Pagination
      // showSizeChanger
      onChange={onShowSizeChange}
      showQuickJumper 
      defaultCurrent={3}
      total={500}
    /> */}
        {/* <Pagination size="small" total={50} /> */}
        {/* <Pagination size="small" total={50} showSizeChanger showQuickJumper /> */}
        {/* <Pagination size="small" total={50} showTitle={false} showTotal={showdata} /> */}

        {/* <Pagination current={current} onChange={onChange} total={100} /> */}
{/*         
        <div className="page">
        
        <Pagination style={{color:"red"}} defaultCurrent={current} onChange={renderCurrent} total={500} itemRender={itemRender} showSizeChanger={false}	/>
<span style={{marginLeft:"50%"}}> Page{" "+current}</span>
</div> */}


 
  <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </>

    </div>
  );
}

export default App;
