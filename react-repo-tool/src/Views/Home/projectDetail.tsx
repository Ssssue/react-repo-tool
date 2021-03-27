import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 }, //label 标签布局，同 <Col> 组件
  wrapperCol: { span: 13 } //为输入控件设置布局样式时
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function ProjectDetail(props: { getProjectDetail: any; }): JSX.Element {
  const [form] = Form.useForm();

  const onFinish = (value: any) => {
    console.log(value);
    props.getProjectDetail(value.id);
  };
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="id" label="项目ID" rules={[{ required: true }]}>
        <Input size="small" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {/* 在表单内使用htmlType="submit"提交 */}
          查询
        </Button>
      </Form.Item>
    </Form>
  );
}