"use client";

import { Mail, Phone, Calendar, Pencil, X, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { validateAccountField } from "@/lib/validation";

type Field = "email" | "mobile" | null;

type User = {
  email: string;
  mobile?: string;
  createdAt?: string;
};

export default function AccountDetails() {
  const [user, setUser] = useState<User | null>(null);
  const [editingField, setEditingField] = useState<Field>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me", { credentials: "include" });
      const data = await res.json();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  const openEdit = (field: Field, currentValue: string) => {
    setEditingField(field);
    setValue(currentValue);
    setError(null);
  };

  const closeEdit = () => {
    setEditingField(null);
    setValue("");
    setError(null);
  };

  const handleSave = async () => {
    try {
      if (!editingField) return;

      setError(null);

      const validation = validateAccountField(editingField, value);

      if (!validation.success) {
        setError(validation.error.issues[0].message);
        return;
      }

      const res = await fetch("/api/account/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ field: editingField, value }),
      });

      if (!res.ok) throw new Error("Update failed");

      const updated = await fetch("/api/auth/me", { credentials: "include" });
      const updatedData = await updated.json();
      setUser(updatedData.user);

      closeEdit();
    } catch (err) {
      console.error(err);
      setError("Failed to update");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <>
      {/* Card */}
      <div className="w-full rounded-3xl bg-white p-6 shadow">
        <div className="flex flex-col gap-4">
          {/* EMAIL ROW */}
          <div className="flex w-full items-center justify-between rounded-xl bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-600" />
              <span className="text-sm font-medium">{user.email}</span>
            </div>

            <button
              onClick={() => openEdit("email", user.email)}
              className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <Pencil size={16} />
              Edit
            </button>
          </div>

          {/* MOBILE ROW */}
          <div className="flex w-full items-center justify-between rounded-xl bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-600" />
              <span className="text-sm font-medium">
                {user.mobile || "No mobile added"}
              </span>
            </div>

            <button
              onClick={() => openEdit("mobile", user.mobile || "")}
              className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              {user.mobile ? <Pencil size={16} /> : <Plus size={16} />}
              {user.mobile ? "Edit" : "Add"}
            </button>
          </div>

          {/* JOIN DATE ROW */}
          <div className="flex w-full items-center gap-3 rounded-xl bg-gray-50 p-4">
            <Calendar size={18} className="text-indigo-600" />
            <span className="text-sm font-medium">
              Joined {new Date(user.createdAt || "").toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {editingField && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold capitalize">
                {user?.mobile ? `Edit ${editingField}` : `Add ${editingField}`}
              </h2>
              <button onClick={closeEdit}>
                <X size={20} />
              </button>
            </div>

            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(null);
              }}
              className={`w-full rounded-lg border p-3 ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={`Enter ${editingField}`}
            />

            {error && (
              <p className="mt-2 text-sm font-medium text-red-600">{error}</p>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={closeEdit}>Cancel</button>
              <button
                onClick={handleSave}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
