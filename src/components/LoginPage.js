import React from 'react';
import { Form, Input, Button } from "antd";


function LoginPage() {
    return (
        <div>
            <Form>
                <Form.Item
                    label="Username"
                    name="userName"
                    rules={[{ required: true, message: "필수입력속성입니다" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "필수입력속성입니다" }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        전송하기
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default LoginPage;