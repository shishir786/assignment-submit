"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';

const Task4 = () => {

  const [formFields, setFormFields] = useState([{ name: "", option: "" }]);

  // Add a new input-select pair
  const handleAddField = () => {
    setFormFields([...formFields, { name: "", option: "" }]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-6 bg-background">
      <div className="w-full max-w-xl bg-card border border-border rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">User Information</h2>
        <form className="space-y-4">
          {formFields.map((field, index) => (
            <div key={index} className="flex gap-4">
              <Input
                type="text"
                placeholder="Enter name"
                className="w-1/2"
                value={field.name}
                onChange={(event) => {
                  const updatedFields = [...formFields];
                  updatedFields[index].name = event.target.value;
                  setFormFields(updatedFields);
                }}
              />

              <Select
                value={field.option}
                onValueChange={(value) => {
                  const updatedFields = [...formFields];
                  updatedFields[index].option = value;
                  setFormFields(updatedFields);
                }}
              >
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

          ))}

          {/* Add Button */}
          <Button
            type="button"
            variant="success"
            onClick={handleAddField}
            className="mt-4"
          >
            + Add Field
          </Button>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </div>

    </div>
  );
};

export default Task4;
