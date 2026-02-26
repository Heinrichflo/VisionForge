# VisionForge 🖼️

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python">
  <img src="https://img.shields.io/badge/FastAPI-0.100+-green.svg" alt="FastAPI">
  <img src="https://img.shields.io/badge/React-18+-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
</p>

> 轻量级图像处理工具箱 - 图像增强、人像处理、目标检测

## 产品定位

VisionForge 是一个整合的轻量级图像处理工具箱，专注于**图像增强、人脸处理、目标检测**三大核心功能，适合个人开发者和小型团队使用。

## 核心功能

### 🖼️ 图像增强
- 自动曝光调整
- HDR 合成
- 图像去雾
- 色彩校正

### 👤 人像处理
- 人脸检测与关键点
- 人脸美颜/滤镜
- 表情迁移
- 年龄/性别预测

### 🎯 目标检测
- 预训练模型推理
- 自定义目标检测
- 图像分割
- 物体计数

## 技术栈

| 层级 | 技术 |
|------|------|
| 后端 | Python 3.10+ / FastAPI |
| 前端 | React + Tailwind CSS |
| AI模型 | ONNX Runtime |
| 部署 | Docker |

## 快速开始

### 后端启动

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 前端启动

```bash
cd frontend
npm install
npm run dev
```

### Docker 部署

```bash
docker-compose up -d
```

## API 文档

启动服务后访问:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## 项目结构

```
VisionForge/
├── backend/              # 后端服务
│   ├── api/             # API 路由
│   ├── core/            # 核心配置
│   ├── models/          # AI 模型
│   └── utils/           # 工具函数
├── frontend/            # 前端应用
│   └── src/
│       ├── components/  # React 组件
│       ├── pages/       # 页面
│       └── hooks/       # 自定义 Hooks
├── docs/                # 文档
└── README.md
```

## 贡献指南

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
