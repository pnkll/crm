import { Form, Input, Button, Select, Space, Typography, Upload } from 'antd';
import 'antd/dist/antd.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { useState } from 'react'
import React from 'react'
import ru from 'date-fns/locale/ru'
import { useSelector } from 'react-redux';
import { getUserId } from '../../../redux/selectors/auth-selectors';
import RespondentSelector from './RespondentSelector';

const TaskForm = () => {


    const userId = useSelector(getUserId)

    const [selected, setSelected] = useState();
    const [visible, setVisible] = useState(false)
    const [respondent, setRespondent] = useState()

    const onHandleChange = (event) => {
        setRespondent(event.target.value)
    }

    const onFinish = (data) => {
        const value = {
            ...data,
            date: format(selected, 'PP'),
            respondent: respondent,
            maker: userId
        }
        console.log(value)

    }

    let footer = <p>Пожалуйста выберите дату.</p>;
    if (selected) {
        footer = <p>Вы выбрали {format(selected, 'PP')}.</p>;
    }


    return <>
        <Form onFinish={onFinish}>

            <Form.Item
                name="message"
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
            Ответственный: <RespondentSelector handleChange={onHandleChange} /><br />
            {!visible ? <Button onClick={() => { setVisible(true) }}>Выбрать дату</Button>
                : <DayPicker mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                    locale={ru} />}
            <Form.Item colon={false}>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default TaskForm

