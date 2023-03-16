import React from 'react';
import { Form, Input, Button, Upload, Divider, InputNumber } from "antd";
import './UploadPage.css';
const { TextArea } = Input;

function UploadPage() {
  const onFinish = (val) => {
    console.log(val);
  }
  return (
    <div id="upload-container">
      <Form name='uploadForm' onFinish={onFinish}>
        <Form.Item name="upload">
          <div id="upload-img">
            <img src='/images/icons/camera.png' alt='' />
            <span>이미지를 업로드 해주세요</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item label={<div className="upload-label">판매자명</div>} name="product-seller" rules={[{ required: true, message: "판매자명은 필수 입력 사항입니다." }]}>
          <Input className="upload-name" size="large" placeholder="이름을 입력해주세요" />
        </Form.Item>
        <Divider />
        <Form.Item label={<div className="upload-label">상품명</div>} name="product-name" rules={[{ required: true, message: '상품명은 필수 입력 사항입니다.' }]}>
          <Input className="upload-name" size="large" placeholder="상품명을 입력해주세요" />
        </Form.Item>
        <Divider />
        <Form.Item label={<div className="upload-price">판매가</div>} name="product-price" rules={[{ required: true, message: '판매가는 필수 입력 사항입니다.' }]}>
          <InputNumber className="upload-price" size="large" min={0} defaultValue={0} />
        </Form.Item>
        <Divider />
        <Form.Item label={<div className="upload-label">상품설명</div>} name="product-description" rules={[{ required: true, message: '상품설명은 필수 입력 사항입니다.' }]}>
          <TextArea size="large" id="product-description" showCount maxLength={300} placeholder="상품설명을 작성해주세요" />
        </Form.Item>
        <Form.Item>
					<Button id="submit-button" size="large" htmlType="submit">
						상품등록하기
					</Button>
				</Form.Item>
      </Form>
    </div>
  )
}
import React from 'react';
import { Form, Input, Button, Upload, Divider, InputNumber } from "antd";
import './UploadPage.css';
const { TextArea } = Input;

function UploadPage() {
  const onFinish = (val) => {
    console.log(val);
  }
  return (
    <div id="upload-container">
      <Form name='uploadForm' onFinish={onFinish}>
        <Form.Item name="upload">
          <div id="upload-img">
            <img src='/images/icons/camera.png' alt='' />
            <span>이미지를 업로드 해주세요</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item label={<div className="upload-label">판매자명</div>} name="product-seller" rules={[{ required: true, message: "판매자명은 필수 입력 사항입니다." }]}>
          <Input className="upload-name" size="large" placeholder="이름을 입력해주세요" />
        </Form.Item>
        <Divider />
        <Form.Item label={<div className="upload-label">상품명</div>} name="product-name" rules={[{ required: true, message: '상품명은 필수 입력 사항입니다.' }]}>
          <Input className="upload-name" size="large" placeholder="상품명을 입력해주세요" />
        </Form.Item>
        <Divider />
        <Form.Item label={<div className="upload-price">판매가</div>} name="product-price" rules={[{ required: true, message: '판매가는 필수 입력 사항입니다.' }]}>
          <InputNumber className="upload-price" size="large" min={0} defaultValue={0} />
        </Form.Item>
        <Divider />
        <Form.Item label={<div className="upload-label">상품설명</div>} name="product-description" rules={[{ required: true, message: '상품설명은 필수 입력 사항입니다.' }]}>
          <TextArea size="large" id="product-description" showCount maxLength={300} placeholder="상품설명을 작성해주세요" />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UploadPage;