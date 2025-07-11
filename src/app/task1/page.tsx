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

const Task1 = () => {
  const [formData, setFormData] = useState({ name: "", option: "" });


  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-6 bg-background">
      <div className="w-full max-w-xl bg-card border border-border rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">User Information</h2>
        <form className="space-y-4">

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



          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </div>


    </div>
  );
};

export default Task1;
