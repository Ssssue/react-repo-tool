import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './index.less';
import history from 'src/history';

// const layout = {
//   labelCol: { span: 8 }, //label 标签布局，同 <Col> 组件
//   wrapperCol: { span: 13 } //为输入控件设置布局样式时
// };

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};


export default function App(): JSX.Element {
  const [form] = Form.useForm();
  // console.log('styles: ', styles);
  const onFinish = (value: any) => {
    localStorage.setItem("private_token", value.private_token);
    history.push('/');
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginContent}>
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="private_token" label="Token" rules={[{ required: true }]}>
            <Input></Input>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              {/* 在表单内使用htmlType="submit"提交 */}
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}