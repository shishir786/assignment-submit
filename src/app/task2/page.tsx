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

const Home = () => {
  const [formData, setFormData] = useState({ name: "", option: "" });
  const [formErrors, setFormValidation] = useState({ name: "", option: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validateBlank = {
      name: formData.name.trim() ? "" : "Name is required",
      option: formData.option ? "" : "Option is required",
    };
    setFormValidation(validateBlank);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-6 bg-background">
      <div className="w-full max-w-xl bg-card border border-border rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">User Information</h2>
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
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Error messages */}
          <div className="flex gap-4 text-sm text-destructive">
            <div className="w-1/2">{formErrors.name}</div>
            <div className="w-[180px]">{formErrors.option}</div>
          </div>

          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
