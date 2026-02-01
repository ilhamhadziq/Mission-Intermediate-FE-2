import { useEffect, useState } from "react";

export default function AdminCourseForm({ onAdd, onUpdate, editingCourse  }) {
  const isEdit = Boolean(editingCourse);

  const [form, setForm] = useState({
    title: "",
    description: "",
    mentor: "",
    price: "",
    rating:"",
    thumbnail: null,
    mentorImage: null,
  });
  useEffect(() => {
  if (editingCourse) {
        setForm({
        title: editingCourse.title,
        description: editingCourse.description,
        mentor: editingCourse.mentor,
        price: editingCourse.price,
        rating: editingCourse.rating,
        thumbnail: null,
        mentorImage: null,
        });
    }
  }, [editingCourse]);


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

    if (editingCourse) {
        onUpdate({
            ...editingCourse,
            title: form.title,
            description: form.description,
            mentor: form.mentor,
            price: form.price,
            rating: Number(form.rating),

            thumbnail: form.thumbnail
                ? URL.createObjectURL(form.thumbnail)
                : editingCourse.thumbnail,

            mentorImage: form.mentorImage
                ? URL.createObjectURL(form.mentorImage)
                : editingCourse.mentorImage,
         });

    } else {
        onAdd({
            id: Date.now(),
            title: form.title,
            description: form.description,
            mentor: form.mentor,
            price: form.price,
            rating: Number(form.rating),

            thumbnail: form.thumbnail
                ? URL.createObjectURL(form.thumbnail)
                : "/src/assets/images/content-1.jpg",

            mentorImage: form.mentorImage
                ? URL.createObjectURL(form.mentorImage)
                : "/src/assets/profiles/1.png",
        });
    }

    setForm({
        title: "",
        description: "",
        mentor: "",
        price: "",
        rating: "",
        thumbnail: null,
        mentorImage: null,
    });
    };


  return (
    <form className="admin-form" onSubmit={handleSubmit}>
        <h3>{isEdit ? "Edit Kelas" : "Tambah Kelas"}</h3>


        <input
            name="title"
            placeholder="Judul kelas"
            value={form.title}
            onChange={handleChange}
        />

        <textarea
            name="description"
            placeholder="Deskripsi"
            value={form.description}
            onChange={handleChange}
        />

        <input
            name="mentor"
            placeholder="Nama mentor"
            value={form.mentor}
            onChange={handleChange}
        />

        {/* THUMBNAIL */}
        <label className="upload-box">
            <span>Thumbnail Kelas</span>
            <input
            type="file"
            accept="image/*"
            onChange={(e) =>
                setForm({ ...form, thumbnail: e.target.files[0] })
            }
            />
        </label>

        {form.thumbnail && (
            <img
            className="preview-thumbnail"
            src={URL.createObjectURL(form.thumbnail)}
            alt="thumbnail preview"
            />
        )}

        {/* PROFILE */}
        <label className="upload-box">
            <span>Foto Mentor</span>
            <input
            type="file"
            accept="image/*"
            onChange={(e) =>
                setForm({ ...form, mentorImage: e.target.files[0] })
            }
            />
        </label>

        {form.mentorImage && (
            <img
            className="preview-avatar"
            src={URL.createObjectURL(form.mentorImage)}
            alt="mentor preview"
            />
        )}

        <input
            type="number"
            name="rating"
            min="0"
            max="5"
            placeholder="Rating (0–5)"
            value={form.rating}
            onChange={handleChange}
        />

        <input
            name="price"
            placeholder="Harga (contoh: 300K)"
            value={form.price}
            onChange={handleChange}
        />

        <button type="submit">
            {isEdit ? "Simpan Perubahan" : "Tambah"}
        </button>
        </form>

  );
}
