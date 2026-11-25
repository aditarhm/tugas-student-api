# Tugas 10 — Implementasi REST API + PostgreSQL + Prisma ORM

**Nama:** Muhammad Aditya Arham  
**NIM:** 103022400104  
**Kelas:** SE-48-02  

## Deskripsi Proyek
Aplikasi backend REST API berbasis **NestJS** (`tugas-student-api`) yang dihubungkan ke basis data **PostgreSQL** lokal (`student_db`) menggunakan **Prisma ORM v6**. Proyek ini melanjutkan implementasi layanan web sebelumnya agar data entitas `Student` (`id`, `nim`, `nama`, `jurusan`, `createdAt`) tersimpan secara permanen di basis data relasional serta mendukung operasi CRUD penuh dan query lanjutan.

## Teknologi yang Digunakan
- **Framework:** NestJS (Node.js / TypeScript)
- **Database:** PostgreSQL (lokal via pgAdmin 4)
- **ORM:** Prisma ORM v6 (`@prisma/client`)
- **API Testing:** Postman

## Cara Menjalankan Proyek
1. Pastikan server PostgreSQL lokal sudah berjalan dan database `student_db` telah dibuat.
2. Sesuaikan koneksi database pada file `.env`:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/student_db?schema=public"

    Instal dependensi proyek:
    Bash

    npm install

    Jalankan migrasi Prisma:
    Bash

    npx prisma@6 migrate dev --name init_student

    Jalankan server pengembangan NestJS:
    Bash

    npm run start:dev

Daftar Endpoint API

    POST /students — Menambah data mahasiswa baru (Create)

    GET /students — Mengambil seluruh data mahasiswa atau memfilter dengan query ?jurusan= (Read + Filter where)

    GET /students/count — Menghitung jumlah total data mahasiswa di database (Query count)

    GET /students/:id — Mengambil detail data mahasiswa berdasarkan id (Read by ID)

    PATCH /students/:id — Memperbarui data mahasiswa berdasarkan id (Update)

    DELETE /students/:id — Menghapus data mahasiswa berdasarkan id (Delete)

Dokumentasi Screenshot

Seluruh tangkapan layar tahapan pengerjaan dan pengujian (database pgAdmin 4, migrasi Prisma, pengujian CRUD & count di Postman) disimpan di dalam folder screenhots.


### Cara Memasangnya di VS Code
1. Klik kanan di area kosong panel **Explorer** (sejajar dengan `src`, `prisma`, dan `package.json`), lalu pilih **New File...**
2. Beri nama **`README.md`**.
3. *Paste* seluruh teks di atas ke dalamnya, lalu tekan **`Ctrl + S`**.

Setelah `README.md` disimpan dan folder `docs/screenshots` sudah berisi gambar-gambar bukti pengujianmu, tinggal jalankan `git add .`, `git commit`, dan `git push` ke GitHub. Ada kendala saat push ke GitHub?