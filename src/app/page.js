"use client";

import { useState } from "react";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Students from "./components/students";

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Patil",
      email: "rahul@gmail.com",
      course: "Computer Science",
      marks: 85,
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      course: "Information Technology",
      marks: 92,
    },
    {
      id: 3,
      name: "Amit Joshi",
      email: "amit@gmail.com",
      course: "Computer Science",
      marks: 78,
    },
    {
      id: 4,
      name: "Sneha More",
      email: "sneha@gmail.com",
      course: "Electronics",
      marks: 88,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    marks: "",
  });

  const addStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      ...form,
    };

    setStudents([...students, newStudent]);

    setForm({
      name: "",
      email: "",
      course: "",
      marks: "",
    });

    setActive("Students");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar
        active={active}
        setActive={setActive}
      />

      <main className="flex-1 p-5 md:p-10">

        {active === "Dashboard" && (
          <Dashboard
            students={students}
            setActive={setActive}
          />
        )}

        {active === "Students" && (
          <Students
            students={students}
            setStudents={setStudents}
          />
        )}

        {active === "Add Student" && (
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Add New Student
            </h1>

            <p className="text-gray-500 mb-8">
              Enter student information below.
            </p>

            <form
              onSubmit={addStudent}
              className="bg-white p-8 rounded-xl shadow max-w-2xl space-y-5"
            >
              <div>
                <label className="block mb-2 font-medium">
                  Student Name
                </label>

                <input
                  type="text"
                  placeholder="Enter student name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full border p-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full border p-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Course
                </label>

                <select
                  required
                  value={form.course}
                  onChange={(e) =>
                    setForm({ ...form, course: e.target.value })
                  }
                  className="w-full border p-3 rounded-lg"
                >
                  <option value="">Select Course</option>
                  <option value="Computer Science">
                    Computer Science
                  </option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="Electronics">
                    Electronics
                  </option>
                  <option value="Commerce">Commerce</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Marks
                </label>

                <input
                  type="number"
                  placeholder="Enter marks (0-100)"
                  min="0"
                  max="100"
                  required
                  value={form.marks}
                  onChange={(e) =>
                    setForm({ ...form, marks: e.target.value })
                  }
                  className="w-full border p-3 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
              >
                Add Student
              </button>

            </form>
          </div>
        )}

      </main>
    </div>
  );
}