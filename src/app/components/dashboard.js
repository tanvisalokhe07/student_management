export default function Dashboard({ students, setActive }) {
  const total = students.length;

  const courses = [...new Set(students.map((s) => s.course))].length;

  const average =
    total > 0
      ? Math.round(
          students.reduce((sum, s) => sum + Number(s.marks), 0) / total
        )
      : 0;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Welcome to Student Management System
          </p>
        </div>

        <button
          onClick={() => setActive("Add Student")}
          className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700"
        >
          + Add Student
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Students</p>
          <h2 className="text-3xl font-bold mt-3">{total}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Courses</p>
          <h2 className="text-3xl font-bold mt-3">{courses}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Average Marks</p>
          <h2 className="text-3xl font-bold mt-3">{average}%</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-5">Recent Students</h2>

        {students.slice(0, 5).map((student) => (
          <div
            key={student.id}
            className="flex justify-between border-b py-4"
          >
            <div>
              <p className="font-semibold">{student.name}</p>
              <p className="text-sm text-gray-500">
                {student.email}
              </p>
            </div>

            <span className="text-purple-600 font-medium">
              {student.course}
            </span>
          </div>
        ))}

        {students.length === 0 && (
          <p className="text-gray-500">No students added yet.</p>
        )}
      </div>
    </div>
  );
}