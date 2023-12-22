import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, DatePicker, TimePicker } from "antd";
import axios from "axios";
const { RangePicker } = TimePicker;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App = () => {
  const [bookingForm, setBookingForm] = useState({
    id: null,
    username: "",
    email: "",
    address: "",
    gender: "",
    phonenumber: "",
    zone: "",
    bookingtime: 2000,
    // date: null,
    // time: "",
    comments: "",
  });
  const handleChange = (e) => {
    setBookingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChangeGender = (e) => {
    setBookingForm((prev) => ({ ...prev, gender: e }));
  };
  const handleChangeZone = (e) => {
    setBookingForm((prev) => ({ ...prev, zone: e }));
  };
  const handleChangeDate = (e) => {
    setBookingForm((prev) => ({
      ...prev,
      date: `${e.$y} ${e.$M + 1} ${e.$D}`,
    }));
  };
  const handleChangeTime = (e) => {
    setBookingForm((prev) => ({ ...prev, time: e }));
  };

  // console.log(bookingForm);

  // const onFinish = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8001/create", bookingForm);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(()=>{
  //   const fecthForm=async()=>{
  //     try{
  //       const res= await axios.get("http://localhost:8001/")
  //       setBookingForm(res.data)

  //     }catch(err){
  //       console.log(err);

  //     }
  //   }
  //   fecthForm()
  // },[]);

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    // values.preventDefault()
    console.log("Received values of form: ", values);
    console.log("Received values of form: ", bookingForm);
    try {
      const x = await axios.post(
        "http://localhost:8001/create",
        bookingForm,
        // {
        //   id: 214030,
        //   username: "Navindu",
        //   email: "spyspynavindu@gmail.com",
        //   address: "Baduwatta,Matara",
        //   gender: "Male",
        //   phonenumber: "0760071102",
        //   zone: "Badminton",
        //   bookingtime: 2000,
        //   comments: "cc",
        // },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // const x = await axios({
      //   method: "POST",
      //   url: "http://localhost:8001/create",
      //   data: {
      //     name: "ruchith",
      //     id: 345,
      //   },
      // });
      console.log(x);
    } catch (err) {
      console.log(err);
    }
  };

  // const onSubmit = async (values) => {
  //   try {
  //     const x = await axios.post("http://localhost:8001/create", bookingForm);
  //     console.log(x);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="94">+94</Option>
      </Select>
    </Form.Item>
  );
  // const onChangete = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "94",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="id"
        label="ID"
        rules={[
          {
            required: true,
            message: "Please input your id!",
            whitespace: true,
          },
        ]}
      >
        <Input name="id" label="id" onChange={(e) => handleChange(e)} />
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
            whitespace: true,
          },
        ]}
      >
        <Input name="username" label="Name" onChange={(e) => handleChange(e)} />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select
          name="gender"
          placeholder="select your gender"
          onChange={(e) => handleChangeGender(e)}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      */
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input name="email" onChange={(e) => handleChange(e)} />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: "Please select your Address!",
          },
        ]}
      >
        <Input name="address" onChange={(e) => handleChange(e)} />
      </Form.Item>
      <Form.Item
        name="phonenumber"
        label="Phone Number"
        rules={[
          {},
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          name="phone"
          onChange={(e) => handleChange(e)}
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        name="zone"
        label="Zone"
        rules={[
          {
            required: true,
            message: "Please Select a Zone!",
          },
        ]}
      >
        <Select
          name="zone"
          onSelect={(e) => handleChangeZone(e)}
          placeholder="Select a Zone"
          style={{
            width: "100%",
          }}
        >
          <Option value="Badminton">Badminton Cort</Option>
          <Option value="Tenis">Tenis Cort</Option>
          <Option value="Pool">Swimming Pool</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="date"
        label="Date"
        rules={[
          {
            required: true,
            message: "Please Select a Date!",
          },
        ]}
      >
        <DatePicker
          name="date"
          onSelect={(e) => handleChangeDate(e)}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        name="time"
        label="Time"
        rules={[
          {
            required: true,
            message: "Please Select a Time!",
          },
        ]}
      >
        <RangePicker
          onSelect={(e) => handleChangeTime(e)}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item name="comments" label="Comments">
        <Input.TextArea
          name="comments"
          showCount
          maxLength={100}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Book
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
