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

  return (
    <>
      <div className="h-full flex justify-center items-center text-2xl font-bold mb-4 ml-80 p-10 m-10 border-2 border-dashed border-gray-300 rounded-lg w-4xl ">
        <form className="space-y-2">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter name"
              className="w-2xs border p-2 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit">Submit</Button>

        </form>


      </div>
    </>
  )
}

export default Home
