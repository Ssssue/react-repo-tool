import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import style from './projectForm.less';

// const { Option } = Select;

const layout = {
  labelCol: { span: 8 }, //label 标签布局，同 <Col> 组件
  wrapperCol: { span: 13 } //为输入控件设置布局样式时
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function ProjectForm(props: { getAllProject: any; }): JSX.Element {

  const [form] = Form.useForm();

  // const onGenderChange = (value: string) => {
  //   switch (value) {
  //     case 'male':
  //       form.setFieldsValue({
  //         note: "man!"
  //       });
  //       return;
  //     case 'female':
  //       form.setFieldsValue({
  //         note: 'women!'
  //       });
  //       return;
  //     case 'other':
  //       form.setFieldsValue({
  //         note: 'hello!!'
  //       });
  //       return;
  //   }
  // };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (value: any) => {
    console.log(value);
    props.getAllProject(value);
  };
  return (
    <Form className={style} {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="private_token" label="Token" rules={[{ required: true }]}>
        <Input size="small" />
      </Form.Item>
      <Form.Item name="per_page" label="项目条数" rules={[{ required: true }]}>
        <InputNumber size="small" min={1} max={100000} />
      </Form.Item>
      {/* <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select placeholder="请选择" onChange={onGenderChange} allowClear>
          <Option value="male">男</Option>
          <Option value="female">女</Option>
          <Option value="other">其他</Option>
        </Select>
      </Form.Item> */}
      <Form.Item {...tailLayout}>
        <Button style={{ marginRight: '8px' }} type="primary" htmlType="submit">
          {/* 在表单内使用htmlType="submit"提交 */}
          查询
        </Button>
        <Button onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form >
  );
}