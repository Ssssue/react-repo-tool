import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Card, message } from 'antd';
import ProjectForm from './projectForm';
import {
  LikeTwoTone,
} from '@ant-design/icons';
// import ProjectDetail from './projectDetail';
import Api from '../../api/index';
import style from './index.less';

const formStyle = { background: '#01081f', borderRadius: '5px', padding: '20px 0 10px', height: '300px' };

interface Project {
  private_token: string,
  per_page: number;
  visibility: string;
}

interface Commits {
  per_page: number;
  id: number;
  ref_name: string;
  private_token: string;
}
// const obj = {
//   private_token: 'RyxyDxyxzBEtMRWPz5wo',
//   per_page: 50
// };

export default function App(): JSX.Element {

  const [data, setData] = useState([]);  //项目数据
  const [params, setParams] = useState({      //项目默认查询参数
    private_token: localStorage['private_token'],
    per_page: 50,
    visibility: 'private'
  });
  const [commitData, setCommitData] = useState([]);  //commit信息列表
  const [lintData, setLintData] = useState<any[]>([]); //格式化后的信息列表

  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 50,
  },
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name'
  }];

  useEffect(() => {
    getAllProject();
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log(commitData);
  });

  const getAllProject = async (obj?: Project) => {
    if (obj) setParams(obj);
    await Api['getAllProject'](params).then((res: any) => {
      console.log(res);
      setData(res);
    });
  };

  const downMessage = () => {
    message.warning({
      icon: <LikeTwoTone />,
      content: '正在开发中！(๑•̀ㅂ•́)و✧'
    });
  };

  // const getProjectDetail = async (id: number) => {
  //   console.log(params);
  //   await Api['getProjectBranchesWithId'](id, params).then((res: any) => {
  //     console.log(res);
  //   });
  //   await getProjectcommitsWithBranches(id);
  // };

  const getProjectcommitsWithBranches = async (obj: Commits) => {
    const arr: any[] = [];
    obj.private_token = localStorage['private_token'];
    obj.per_page = 50;
    await Api['getProjectcommitsWithBranches'](obj.id, obj).then(async (res: any) => {
      setCommitData(res);
      const keys = ['Feat', 'feat', 'Style', 'style', 'Fix', 'fix', 'Docs', 'docs', 'Test', 'test', 'Chore', 'chore', 'Perf', 'perf', 'Revert', 'revert', 'Refactor', 'refactor', 'Build', 'build', 'Release', 'release', 'CI', 'Safe', 'safe'];
      await res.forEach((item: any) => {
        keys.forEach(key => {
          if (item.message.includes(key) && item.message.indexOf('See merge request') === -1) {
            arr.push(handleMessage(item));
          }
        });
      });
      console.log('....arr', arr);
      setLintData(arr);
    });
  };

  const handleMessage = (item: any) => {
    const arr = item.message.split(":");
    switch (arr[0]) {
      case 'Feat':
      case 'feat':
        item.message = '新增功能：' + arr[1];
        return item;
      case 'Style':
      case 'style':
        item.message = '修改功能：' + arr[1];
        return item;
      case 'Fix':
      case 'fix':
        item.message = '修复问题：' + arr[1];
        return item;
      case 'Docs':
      case 'docs':
        item.message = '编写文档：' + arr[1];
        return item;
      case 'Test':
      case 'test':
        item.message = '添加测试：' + arr[1];
        return item;

      default:
        return item;
        break;
    }
  };

  return (
    <Row gutter={16} >
      <Col className="gutter-row" span={16}>
        <div style={formStyle}>
          <Table className={style.projectTable}
            pagination={false}
            scroll={{ y: 230 }}
            dataSource={data} columns={columns} rowKey={(record: any) => record.id} size="small" />
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={formStyle}>
          <ProjectForm getProjectcommitsWithBranches={getProjectcommitsWithBranches} />
        </div>
      </Col>
      {/* <Col className="gutter-row" span={8}>
        <div style={formStyle}>
          <ProjectDetail getProjectDetail={getProjectDetail} />
        </div>
      </Col> */}
      <Col className="gutter-row" span={16}>
        <Card className={style.textContent} title="Commit信息" style={{ width: '100%', height: '300px' }}>
          <div className={style.message}>
            {
              commitData.map((item: any) => {
                return <p key={item.id}>
                  {item.message}
                </p>;
              })
            }
          </div>
        </Card>
      </Col>
      <Col className="gutter-row" span={8}>
        <Card className={style.textContent} title="报告信息" extra={<a onClick={downMessage}>格式化</a>} style={{ width: '100%', height: '300px' }}>
          <div className={style.message}>
            {
              lintData.map((item: any) => {
                return <p key={item.id}>
                  {item.message}
                </p>;
              })
            }
          </div>
        </Card>
      </Col>
    </Row>
  );
}