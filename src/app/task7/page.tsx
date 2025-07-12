"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";


const Task4 = () => {
  const [formFields, setFormFields] = useState([{ name: "", option: "" }]);
  const [formErrors, setFormErrors] = useState([{ name: "", option: "" }]);
  const [submitted, setSubmitted] = useState(false);

  // Add field
  const handleAddField = () => {
    setFormFields([...formFields, { name: "", option: "" }]);
    setFormErrors([...formErrors, { name: "", option: "" }]);
  };

  // Delete field
  const handleDeleteField = (index: number) => {
    const updatedFields = formFields.filter((_, i) => i !== index);
    const updatedErrors = formErrors.filter((_, i) => i !== index);
    setFormFields(updatedFields);
    setFormErrors(updatedErrors);
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const validation = formFields.map((field) => ({
      name: field.name.trim() === "" ? "Name is required" : "",
      option: field.option === "" ? "Option is required" : "",
    }));
    setFormErrors(validation);

    const hasError = validation.some(
      (err) => err.name !== "" || err.option !== ""
    );
    if (!hasError) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-background">
      <div className="w-full max-w-xl bg-card border border-border rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">User Information</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field, index) => (
            <div key={index} className="flex gap-4 items-start">

              <div className="flex flex-col w-1/2">
                <Input
                  type="text"
                  placeholder="Enter name"
                  value={field.name}
                  onChange={(e) => {
                    const updated = [...formFields];
                    updated[index].name = e.target.value;
                    setFormFields(updated);
                    if (submitted) {
                      const updatedErrors = [...formErrors];
                      updatedErrors[index].name = "";
                      setFormErrors(updatedErrors);
                    }
                  }}
                />
                <p className="text-sm mt-1 text-red-600 min-h-[20px]">
                  {submitted && formErrors[index]?.name ? formErrors[index].name : "\u00A0"}
                </p>
              </div>

              <div className="flex flex-col">
                <Select
                  value={field.option}
                  onValueChange={(value) => {
                    const updated = [...formFields];
                    updated[index].option = value;
                    setFormFields(updated);
                    if (submitted) {
                      const updatedErrors = [...formErrors];
                      updatedErrors[index].option = "";
                      setFormErrors(updatedErrors);
                    }
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm mt-1 text-red-600 min-h-[20px]">
                  {submitted && formErrors[index]?.option ? formErrors[index].option : "\u00A0"}
                </p>
              </div>

              {/* Delete Button */}
              <div className="flex items-center h-full">
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => handleDeleteField(index)}
                  className="h-10"
                >
                  Delete
                </Button>
              </div>
            </div>

          ))}

          {/* Add Field  Button*/}
          <Button
            type="button"
            variant="success"
            onClick={handleAddField}
            className="mt-2"
          >
            + Add Field
          </Button>

          {/* Submit Button */}
          <Button type="submit" className="w-full mt-4">
            Submit
          </Button>
        </form>


      </div>

    </div>
  );
};

export default Task4;
