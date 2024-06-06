import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef } from 'react';
import axios from 'axios';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const formRef = useRef<ProFormInstance<{
    username?: string;
    avatarUrl?: string;
    phone?: string;
    email?: string;
    gender?: number;
  }>>();

  // @ts-ignore
    return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);

        try {
          const response = await axios.post('/api/submitFormData', values);
          console.log(response.data);
          message.success('提交成功');
        } catch (error) {
          console.error('提交失败:', error);
          message.error('提交失败');
        }
      }}
        // @ts-ignore
      formRef={formRef}
      formKey="base-form-use-demo"
      dateFormatter={(value, valueType) => {
        console.log('---->', value, valueType);
        return value.format('YYYY/MM/DD HH:mm:ss');
      }}
      request={async () => {
        await waitTime(1500);
        return {
          name: '',
          useMode: 'chapter',
        };
      }}
      autoFocusFirstInput
    >
      <ProForm.Group direction="vertical">
        <ProFormText
          width="md"
          name="username"
          label="用户名"
          placeholder="请输入名称"
        />
        <ProFormText
          width="md"
          name="avatarUrl"
          label="头像"
          placeholder="请输入url"
        />
        <ProFormText
          width="md"
          name="phone"
          label="手机号"
          placeholder="请输入手机号"
        />
        <ProFormText
          width="md"
          name="email"
          label="邮箱"
          placeholder="请输入邮箱"
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormSelect
          width="xs"
          options={[
            {
              value: '0',
              label: '男',
            },
            {
              value: '1',
              label: '女',
            },
          ]}
          name="gender"
          label="性别"
        />
      </ProForm.Group>
    </ProForm>
  );
};
