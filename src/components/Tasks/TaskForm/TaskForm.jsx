import { Form, Input, Button, Select, Space, Typography, Upload, } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const TaskForm = () => {

    const onFinish = (data) => {
        const value = {
            ...data,
            'date-picker': data['date-picker'].format('YYYY-MM-DD'),
        }
        console.log(value)
    }

    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };

    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    return <>
        <Form onFinish={onFinish}>

            <Form.Item
                name="intro"
                label="Задача"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста опишите задачу',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item label="Select">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Прикрепить файл</Button>
                </Upload>
            </Form.Item>
            <Form.Item colon={false}>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
            {/* <Form.Item label="Username">
                <Space>
                    <Form.Item
                        name="username"
                        noStyle
                        rules={[{ required: true, message: 'Username is required' }]}
                    >
                        <Input style={{ width: 160 }} placeholder="Please input" />
                    </Form.Item>
                    <Tooltip title="Useful information">
                        <Typography.Link href="#API">Need Help?</Typography.Link>
                    </Tooltip>
                </Space>
            </Form.Item>
            <Form.Item label="Address">
                <Input.Group compact>
                    <Form.Item
                        name={['address', 'province']}
                        noStyle
                    >
                        <Select placeholder="Select province">
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['address', 'street']}
                        noStyle
                        rules={[{ required: true, message: 'Street is required' }]}
                    >
                        <Input style={{ width: '50%' }} placeholder="Input street" />
                    </Form.Item>
                </Input.Group>
            </Form.Item>
            <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="year"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input placeholder="Input birth year" />
                </Form.Item>
                <Form.Item
                    name="month"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Input placeholder="Input birth month" />
                </Form.Item>
            </Form.Item>
             */}

        </Form>
    </>
}

export default TaskForm