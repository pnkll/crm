import { Form, Input, Button, Select, Space, Typography, Upload, } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import React, { useState } from 'react';

const TaskForm = () => {

    const onFinish = (data) => {
        const value = {
            ...data, day: date
        }
        console.log(value)
    }

    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const [selected, setSelected] = useState()

    let footer = <p>Please pick a day</p>

    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
      }

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
            <Form.Item
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Прикрепить файл</Button>
                </Upload>
            </Form.Item>
            <Form.Item name="data"><DayPicker mode="single" mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer} /></Form.Item>
            <Form.Item colon={false}>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default TaskForm