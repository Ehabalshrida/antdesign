import "./App.css";
 import "antd/dist/antd.css";
import axios from "axios";
import TaskList from "./TaskList";
import {
  Button,
  Input,
  Select,
  Form,
  Table,
  message,
  Alert,
  DatePicker,
  TimePicker,
  Spin,
  Progress,
  Tag,
} from "antd";
import { useState, useEffect } from "react";
// import { InstagramOutlined, UserOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";

function rapsh() {
  const data = [
    { Name: "ahmad", age: 20, address: "Irbid", id: 1 },
    { Name: "hasan", age: 15, address: "Irbid", id: 2 },
    { Name: "ehab", age: 33, address: "Irbid", id: 3 },
  ];
  const [dataSo, setDataso] = useState([]);
  const [Loading, setloading] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);
  const [allreadySelected, setallreadySeleacted] = useState(['1','2']);
  console.log(allreadySelected)

  const StudentData = [
    { id: 1, Name: "ahmad", grade: "A+", key: 1 },
    { id: 2, Name: "ahmad", grade: "A", key: 2 },
    { id: 3, Name: "ahmad", grade: "B", key: 3 },
    { id: 4, Name: "ahmad", grade: "c", key: 4 },
  ];

  const Columns3 = [
    {
      title: "Id",
      dataIndex: "id",
      key:1
    },
    {
      title: "Name",
      dataIndex: "Name",
      key:2
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key:3,
      render: (grade) => {
        const color = grade.includes("A+")
          ? "Green"
          : grade.includes("A")
          ? "orange"
          : grade.includes("B")
          ? "Yellow"
          : "Red";
        return (
          <Tag color={color} key={color}>
            {grade}
          </Tag>
        );
      },
    },
  ];

  console.log(dataSo);
  const handleClick = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };
  const columns2 = [
    {
      title: "UserID",
      dataIndex: "userId",
      key: "1",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "2",
      sorter: (a, b) => {
        return a.id - b.id;
      },
    },
    {
      title: "status",
      key: "3",
      render: (payload) => {
        if (payload.completed == false) {
          return "in Progress";
        } else {
          return "Completed";
        }
      },
      filters: [
        { text: "Completed", value: true },
        { text: "in Progress", value: false },
      ],
      onFilter: (value, payload) => {
        return payload.completed === value;
      },
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "1",
      render: (Name) => {
        return <a href="http://www.google.com">{Name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "2",
      sorter: (a, b) => {
        return b.age - a.age;
      },
    },
    {
      title: "address",
      dataIndex: "address",
      key: "3",
    },
    {
      title: "isgraduacted",
      key: "4",
      render: (payload) => {
        if (payload.age >= 20) {
          return <p>true</p>;
        } else {
          return <p>false</p>;
        }
      },
    },
  ];
  const showMessage = () => {
    // message.success("well Done You Did It");
    message.error("faild");
  };
  const showAlert = () => {
    setshowalert(true);
  };
  const toggleSpin = () => {
    setFlag(!flag);
  };
  console.log(flag);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setDataso(res.data);
    });
  }, []);
  return (
    <div>
      
      {/* 
//       <Button type="primary"loading={false}>Myfrist button</Button>
      // <Button type="link" href="http://www.google.com"icon={<InstagramOutlined />}>Myfrist button</Button>
//       <Button type="primary"block>Myfrist button</Button>
//       <Button type="primary" block loading={Loading}onClick={handleClick}>Mysecond button</Button>
// <Input placeholder='name'maxLength={10}type='password'prefix={<UserOutlined/>}suffix={<UserOutlined/>}allowClear disabled></Input>
// <Input.Search ></Input.Search>
// <Select placeholder="select Name" allowClear mode="multiple"  maxTagCount={2} size="middle" style={{width:"25%"}}>
//   <Select.Option value={1}>ehab</Select.Option>
//   <Select.Option value={2}>ahmad</Select.Option>
//   <Select.Option value={3}>hasan</Select.Option>
//   <Select.Option value={4}>tawfeeq</Select.Option>


// // </Select> */}
      {/* // <Form onFinish={handleSubmit}> */}
      {/* //   <Form.Item label="UserName"><br/>
// <Input placeholder='username'required style={{width:"25%"}}>

// </Input>
//     </Form.Item> */}
      {/* 
  <Form.Item  label="PassWord"name="PassWord"><br/>
<Input.Password placeholder='Password' style={{width:"25%"}}></Input.Password> */}{" "}
      
      {/* </Form.Item>
  <Form.Item label="selectFromList"><br/>

    <Select style={{width:"25%"}}>
      <Select.Option value="1">Ehab</Select.Option>
      <Select.Option value="2">hasan</Select.Option>

      <Select.Option></Select.Option>

</Select>*/}
      {/* </Form.Item> */}
      {/* 
     <Form.Item>   

    <Button style={{width:"25%"}} type="primary" htmlType='submit'>Login</Button>
  </Form.Item>
 */}
      {/* </Form>  */}
      {/* <Table dataSource={data} columns={columns}></Table> */}
      {/*       
      {showalert&&<Alert type="error"message="failed to login"/>}
      <Button onClick={showMessage}>MessageComponent</Button>
      <Button onClick={()=>{setshowalert(true)}}>AlertComponent</Button> */}
      {/* 
      <DatePicker.RangePicker picker="week"/><br/>
      <DatePicker.RangePicker picker="month"/><br/>

      <DatePicker picker="week"/><br/>
      <DatePicker picker="month"/><br/>
      <DatePicker picker="day"/><br/>
      <TimePicker />
 */}
      {/* <Spin></Spin> */}
      {/* 
<Spin spinning={flag}> <p>HelloWord</p></Spin>
<Button onClick={toggleSpin}>Click</Button> */}
      {/* 
<Progress percent={33} type="line" status="active" strokeColor="red" strokeWidth="20px"/>
<Progress percent={33} type='circle' status='exception' strokeColor="red"/>
<Progress percent={100} type='circle' status='success' strokeColor="green" />
<Progress percent={55} type='dashboard' status='active' strokeColor="black"steps={1}/>
 */}
      {/*  
      
<Table
 dataSource={dataSo} 
 columns={columns2}
pagination={{current:page,
            pageSize:pageSize,
            onChange:(page,pagesize)=>{
              setpageSize(pagesize)
              setPage(page)
            }
          
          
          }}

></Table> */}
      {/* <Table
        style={{
          width: "50%",
          height: "50%",
          alignItems: "center",
          textAlign: "end",
        }}
        columns={Columns3}
        dataSource={StudentData}
        //  rowSelection={true}
        rowSelection={{
          type:"checkbox",

          // type:"radio",
          selectedRowKeys:allreadySelected,
          onSelect:(recorde)=>{
          console.log(recorde)
          },
           onChange:(keys)=>{
            setallreadySeleacted(keys)

           }
        }}
      ></Table> */}
{/*       
      <Table className="prev"
      columns={columns} dataSource={dataSo} pagination={{}}></Table> */}

      {/* {
      for(let i=j;j<j+10;i++){

      }} */}
      {/* <TaskList/> */}
    </div>
  );
}

export default rapsh;
