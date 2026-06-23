# Inventra

Inventra adalah aplikasi sistem peminjaman inventaris kampus berbasis web.

Project ini dikerjakan secara tim dengan pembagian:

* Backend: Node.js, Express.js, PostgreSQL
* Frontend: React, Vite, Tailwind CSS

Tujuan README ini adalah menjaga agar semua anggota tim dan AI yang digunakan tetap konsisten dalam memahami arah project.

---

## Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* pg
* dotenv
* cors
* nodemon

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Router DOM

### Version Control

* Git
* GitHub

---

## Project Structure

```text
inventra/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── services/
│   │   └── router/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## Core Features V1

### User

* Register
* Login
* Melihat daftar barang inventaris
* Mengajukan peminjaman barang
* Melihat status peminjaman

### Admin

* Login
* Mengelola data barang
* Melihat request peminjaman
* Approve request
* Reject request
* Menandai barang sudah kembali

---

## Roles

```text
admin
user
```

---

## Borrow Request Status

```text
pending
approved
borrowed
returned
rejected
```

Alur utama:

```text
pending → approved → borrowed → returned
```

atau:

```text
pending → rejected
```

---

## Database Design

### users

```text
id
name
email
password
role
created_at
```

### items

```text
id
name
category
stock
condition
location
created_at
```

### borrow_requests

```text
id
user_id
item_id
purpose
borrow_date
return_date
status
admin_note
created_at
```

---

## Dummy Data

### Users

```json
[
  {
    "id": 1,
    "name": "Admin Inventra",
    "email": "admin@inventra.com",
    "password": "123456",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Fathan",
    "email": "fathan@gmail.com",
    "password": "123456",
    "role": "user"
  }
]
```

### Items

```json
[
  {
    "id": 1,
    "name": "Proyektor Epson",
    "category": "Elektronik",
    "stock": 5,
    "condition": "Baik",
    "location": "Ruang Lab 1"
  },
  {
    "id": 2,
    "name": "Laptop Lenovo ThinkPad",
    "category": "Laptop",
    "stock": 10,
    "condition": "Baik",
    "location": "Ruang IT"
  },
  {
    "id": 3,
    "name": "Kamera Canon",
    "category": "Dokumentasi",
    "stock": 3,
    "condition": "Baik",
    "location": "Ruang Multimedia"
  },
  {
    "id": 4,
    "name": "Tripod Kamera",
    "category": "Dokumentasi",
    "stock": 6,
    "condition": "Baik",
    "location": "Ruang Multimedia"
  }
]
```

### Borrow Requests

```json
[
  {
    "id": 1,
    "user_id": 2,
    "item_id": 1,
    "purpose": "Presentasi tugas kelompok",
    "borrow_date": "2026-06-24",
    "return_date": "2026-06-25",
    "status": "pending",
    "admin_note": null
  }
]
```

---

## API Contract

### Auth

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Items

```text
GET    /api/items
GET    /api/items/:id
POST   /api/items
PUT    /api/items/:id
DELETE /api/items/:id
```

### Borrow Requests

```text
GET   /api/borrow-requests
POST  /api/borrow-requests
PATCH /api/borrow-requests/:id/approve
PATCH /api/borrow-requests/:id/reject
PATCH /api/borrow-requests/:id/return
```

---

## Frontend Pages

### Public

```text
/login
/register
```

### User

```text
/dashboard
/items
/items/:id
/my-requests
```

### Admin

```text
/admin/dashboard
/admin/items
/admin/borrow-requests
```

---

## Rules For AI Assistance

Saat menggunakan AI atau ChatGPT, gunakan konteks berikut:

Project ini bernama Inventra.

Inventra adalah aplikasi peminjaman inventaris kampus.

Backend menggunakan Node.js, Express.js, dan PostgreSQL.

Frontend menggunakan React, Vite, dan Tailwind CSS.

Jangan mengubah stack menjadi Laravel, Next.js, Firebase, Supabase, atau framework lain.

Jangan menambahkan fitur besar seperti realtime notification, payment gateway, AI chatbot, atau microservice sebelum fitur V1 selesai.

Fokus V1 hanya:

* Auth
* Items
* Borrow Requests
* Admin approval
* User request status

Jika membuat kode frontend, sesuaikan dengan API Contract di README ini.

Jika membuat kode backend, pastikan response JSON mudah digunakan oleh frontend.

---

## Team Workflow

1. Backend membuat API.
2. Frontend membaca API Contract.
3. Frontend menggunakan dummy data terlebih dahulu jika API belum selesai.
4. Setelah API siap, frontend mengganti dummy data menjadi request Axios.
5. Semua perubahan harus di-push ke GitHub.
6. Jangan mengubah struktur besar tanpa diskusi tim.
