import React, { useState, useEffect } from 'react';
import { Row, Col, Table } from 'antd';
import ProjectForm from './projectForm';
import ProjectDetail from './projectDetail';
import Api from '../../api/index';
import style from './index.less';

const formStyle = { background: '#01081f', borderRadius: '5px', padding: '20px 0 10px', height: '200px' };

interface Project {
  private_token: string,
  per_page: number;
}
// const obj = {
//   private_token: 'RyxyDxyxzBEtMRWPz5wo',
//   per_page: 50
// };

export default function App(): JSX.Element {

  const [data, setData] = useState([]);
  const [params, setParams] = useState({});

  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 50,
  },
  {
    title: '项目名称',
    dataIndex: 'description',
    key: 'description'
  }];

  useEffect(() => {
    console.log(data);
  });

  const getAllProject = async (obj: Project) => {
    setParams(obj);
    await Api['getAllProject'](obj).then((res: any) => {
      console.log(res);
      setData(res);
    });
  };

  const getProjectDetail = async (id: number) => {
    console.log(params);
    await Api['getProjectBranchesWithId'](id, params).then((res: any) => {
      console.log(res);
    });
  };

  return (
    <Row gutter={16} >
      <Col className="gutter-row" span={8}>
        <div style={formStyle}>
          <ProjectForm getAllProject={getAllProject} />
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={formStyle}>
          <Table className={style.projectTable}
            pagination={false}
            scroll={{ y: 120 }}
            dataSource={data} columns={columns} rowKey={(record: any) => record.id} size="small" />
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={formStyle}>
          <ProjectDetail getProjectDetail={getProjectDetail} />
        </div>
      </Col>
    </Row>
  );
}