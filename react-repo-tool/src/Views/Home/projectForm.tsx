import React from 'react';
import { Form, Input, Button, InputNumber, DatePicker, message } from 'antd';
import style from './projectForm.less';
import {
  LikeTwoTone,
} from '@ant-design/icons';

// const { Option } = Select;

const layout = {
  labelCol: { span: 8 }, //label 标签布局，同 <Col> 组件
  wrapperCol: { span: 13 } //为输入控件设置布局样式时
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

export default function ProjectForm(props: { getProjectcommitsWithBranches: any; }): JSX.Element {

  const [form] = Form.useForm();

  const onReset = () => {
    message.warning({
      icon: <LikeTwoTone />,
      content: '正在开发中！(๑•̀ㅂ•́)و✧'
    });
  };

  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  const onFinish = (value: any) => {
    console.log(value);
    console.log(new Date('2021-03-30T03:37:16.000Z'));
    // value.since = new Date(value.since);
    // if (value.until) value.until = new Date(value.until);
    props.getProjectcommitsWithBranches(value);
  };
  return (
    <Form className={style.projectSearch} {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="id" label="项目id" rules={[{ required: true }]}>
        <InputNumber size="small" min={1} max={100000} />
      </Form.Item>
      <Form.Item name="author_email" label="Email">
        <Input size="small" />
      </Form.Item>
      <Form.Item name="ref_name" label="分支名称" rules={[{ required: true }]}>
        <Input size="small" />
      </Form.Item>
      <Form.Item name="since" label="开始时间" rules={[{ required: true }]}>
        <DatePicker size="small" />
      </Form.Item>
      <Form.Item name="until" label="截止时间">
        <DatePicker size="small" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button style={{ marginRight: '8px' }} type="primary" htmlType="submit">
          {/* 在表单内使用htmlType="submit"提交 */}
          查询
        </Button>
        <Button onClick={onReset}>
          更改默认配置
        </Button>
      </Form.Item>
    </Form >
  );
}