import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 8,
  },
};

const ContactUs = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    
    <div className="container aboutus">
        <br/><br/><br/><br/>
    <h2 className="aboutus-title">Contact Us</h2>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input your Title!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item 
            name={['user', 'message']} 
            label="Message"
            rules={[
                {
                  required: true,
                  message: 'Please input your Message!',
                },
              ]}
            >
            <Input.TextArea />
        </Form.Item>
                
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>      
      <br/>
    </div>
  );
};

export default ContactUs;