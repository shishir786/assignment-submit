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
          <div className="flex gap-4 text-sm text-destructive">
            <div className="w-1/2">{formErrors.name}</div>
            <div className="w-[180px]">{formErrors.option}</div>
          </div>

          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </div>

      {/* Submitted Data Section */}
      {submittedData && (
        <div className="mt-6 w-full max-w-xl p-4 bg-muted border border-border rounded">
          <h3 className="text-lg font-semibold text-foreground">Submitted Form Data:</h3>
          <h3 className="text-foreground">Name: {submittedData.name}</h3>
          <h3 className="text-foreground">Gender: {submittedData.option}</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
