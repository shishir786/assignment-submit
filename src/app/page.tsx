"use client";
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Home = () => {
  const [formData, setFormData] = useState({ name: "", option: "" });
  const [formErrors, setFormValidation] = useState({ name: "", option: "" });
  const [submittedData, setSubmittedData] = useState<{ name: string; option: string } | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validateBlank = {
      name: formData.name ? "" : "Name is required",
      option: formData.option ? "" : "Option is required",
    };
    setFormValidation(validateBlank);

    const hasBlank = validateBlank.name !== "" || validateBlank.option !== "";
    if (!hasBlank) {
      setSubmittedData(formData);
    } else {
      setSubmittedData(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4">

      <div className="w-full max-w-xl border-2 border-dashed border-gray-300 rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter name"
              className="w-1/2"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, option: value })
              }
              value={formData.option}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Error messages */}
          <div className="flex gap-4 text-sm text-red-600">
            <div className="w-1/2">{formErrors.name}</div>
            <div className="w-[180px]">{formErrors.option}</div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>

      {/* Submitted Data Section */}
      {submittedData && (
        <div className="mt-6 w-full max-w-xl p-4 bg-gray-100 border rounded">
          <h3 className="text-lg font-semibold">Submitted Form Data:</h3>
          <h3>Name: {submittedData.name}</h3>
          <h3>Gender: {submittedData.option}</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
