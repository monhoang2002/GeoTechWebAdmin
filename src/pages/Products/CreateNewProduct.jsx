import React, { useState } from "react";
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Layout,
  Select,
  Typography,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header } = Layout;

const CreateNewProduct = () => {
  const navigate = useNavigate();
  const dataCategory = useSelector((state) => state.categoryReducer.data);

  const renderFormItems = (items) =>
    items.map((item) => (
      <Form.Item
        key={item.name}
        label={item.label}
        name={item.name}
        rules={item.rules}
      >
        {item.component}
      </Form.Item>
    ));

  const formItems = [
    {
      label: "Tên sản phẩm",
      name: "name",
      rules: [{ required: true, message: "Nhập tên sản phẩm" }],
      component: (
        <Input size="middle" className="w-[50%]" placeholder="Tên sản phẩm" />
      ),
    },
    {
      label: "Tên nhà sản xuất",
      name: "manufacturer",
      component: (
        <Input
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin nhà sản xuất sản phẩm"
        />
      ),
    },
    {
      label: "Loại sản phẩm",
      name: "category_id",
      rules: [{ required: true, message: "Chọn loại sản phẩm" }],
      component: (
        <Select
          style={{ width: "50%" }}
          size="middle"
          placeholder="Chọn loại sản phẩm"
          options={dataCategory?.data.map((category) => ({
            //label: category.name,
            //value: category._id,
          }))}
        />
      ),
    },
    {
      label: "Trạng thái sản phẩm",
      name: "status",
      rules: [{ required: true, message: "Chọn trạng thái sản phẩm" }],
      component: (
        <Select
          style={{ width: "50%" }}
          size="middle"
          placeholder="Chọn trạng thái sản phẩm"
        >
          <Select.Option value="mới">Mới</Select.Option>
          <Select.Option value="cũ">Cũ</Select.Option>
        </Select>
      ),
    },
    {
      label: "Mô tả sản phẩm",
      name: "description",
      rules: [{ required: true, message: "Nhập mô tả" }],
      component: (
        <Input.TextArea
          rows={5}
          size="middle"
          className="w-[70%]"
          placeholder="Mô tả sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin màn hình",
      name: "screen",
      component: (
        <Input.TextArea
          rows={2}
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin màn hình sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin camera",
      name: "camera",
      component: (
        <Input.TextArea
          rows={2}
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin camera sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin chipset",
      name: "chipset",
      component: (
        <Input
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin chipset sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin cpu",
      name: "cpu",
      component: (
        <Input
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin cpu sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin gpu",
      name: "gpu",
      component: (
        <Input
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin gpu sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin rom",
      name: "rom",
      component: (
        <InputNumber
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin rom sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin ram",
      name: "ram",
      component: (
        <InputNumber
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin ram sản phẩm"
        />
      ),
    },
    {
      label: "Hệ điều hành sản phẩm",
      name: "operatingSystem",
      rules: [{ required: true, message: "Chọn hệ điều hành sản phẩm" }],
      component: (
        <Select
          style={{ width: "50%" }}
          size="middle"
          placeholder="Chọn hệ điều hành sản phẩm"
        >
          <Select.Option value="Android">Android</Select.Option>
          <Select.Option value="IOS">IOS</Select.Option>
          
        </Select>
      ),
    },
    {
      label: "Thông tin pin",
      name: "battery",
      component: (
        <Input
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin pin sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin cân nặng",
      name: "weight",
      component: (
        <InputNumber
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin cân nặng sản phẩm"
        />
      ),
    },
    {
      label: "Thông tin kết nối",
      name: "connection",
      component: (
        <Input.TextArea
          rows={2}
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin kết nối của sản phẩm"
        />
      ),
    },
    {
      label: "Tính năng đặc biệt",
      name: "specialFeature",
      component: (
        <Input.TextArea
          rows={2}
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin tính năng đặc biệt của sản phẩm"
        />
      ),
    },
    {
      label: "IMEL sản phẩm",
      name: "other",
      component: (
        <Input.TextArea
          rows={2}
          size="middle"
          className="w-[50%]"
          placeholder="Thông tin IMEL của sản phẩm"
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex flex-row bg-slate-50 shadow-lg  items-center">
        <ArrowLeftOutlined
          className="w-7 h-7 text-xl"
          onClick={() => navigate(-1)}
        />
        <Typography.Title level={4} style={{ margin: 0 }}>
          Tạo mới sản phẩm
        </Typography.Title>
      </Header>

      <Flex
        vertical
        className="border w-[50%] p-4 mx-auto my-auto mt-3 shadow-xl rounded-xl"
        style={{ flex: 1 }}
      >
        <Form layout="horizontal">
          {renderFormItems(formItems)}
          <Form.Item>
            <Button
              type="primary"
              className="bg-[#407cff] w-[30%]"
            >
              Tạo sản phẩm
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
};

export default CreateNewProduct;
