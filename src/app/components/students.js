"use client";

import { useState } from "react";

export default function Students({
  students,
  setStudents,
}) {
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const filteredStudents = students.filter((student) => {
    const matchName = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCourse =
      course === "All" || student.course === course;

    return matchName && matchCourse;
  });

  const deleteStudent = (id) => {
    if (window.confirm("Delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const startEdit = (student) => {
    setEditId(student.id);
    setEditData({ ...student });
  };

  const saveEdit = () => {
    setStudents(
      students.map((s) =>
        s.id === editId ? editData : s
      )
    );

    setEditId(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Student Management
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg flex-1 outline-purple-500"
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border p-3 rounded-lg"
        >
          <option value="All">All Courses</option>
          {[...new Set(students.map((s) => s.course))].map(
            (c) => (
              <option key={c} value={c}>{c}</option>
            )
          )}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Course</th>
              <th className="p-4">Marks</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-4">
                  {editId === student.id ? (
                    <input
                      className="border p-2 w-28"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : student.name}
                </td>

                <td className="p-4">{student.email}</td>

                <td className="p-4">{student.course}</td>

                <td className="p-4">{student.marks}%</td>

                <td className="p-4">
                  {editId === student.id ? (
                    <button
                      onClick={saveEdit}
                      className="text-green-600 font-semibold mr-3"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => startEdit(student)}
                      className="text-blue-600 mr-3"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}